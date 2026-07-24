import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Assignment } from '../entities/assignment.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { ClassSchedule } from '../entities/class-schedule.entity';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CourseClass)
    private readonly classRepository: Repository<CourseClass>,
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(ClassSchedule)
    private readonly scheduleRepository: Repository<ClassSchedule>,
  ) {}

  async getDashboardStats() {
    const schedules = await this.scheduleRepository.find({
      relations: ['class', 'class.tutor', 'class.course'],
    });

    const today = new Date().toISOString().split('T')[0];
    const upcoming = schedules.filter(s => !s.date || s.date >= today);
    upcoming.sort((a, b) => {
      const dateA = a.date || today;
      const dateB = b.date || today;
      if (dateA !== dateB) return dateA.localeCompare(dateB);
      return a.time.localeCompare(b.time);
    });

    const todaysClasses = upcoming.slice(0, 5);

    const pendingGradingCount = await this.assignmentRepository.count({
      where: { grade: IsNull() },
    });

    const studentCount = await this.userRepository.count({
      where: { role: 'student' },
    });

    return {
      todaysClasses: todaysClasses.map((s) => ({
        id: s.id,
        title: s.class?.title || (s.class?.course ? s.class.course.title : 'Unknown Course'),
        date: s.date || undefined,
        time: s.time,
        type: s.class?.type || 'Live Class',
        studentCount: s.studentCount,
        tutorName: s.class?.tutor ? `${s.class.tutor.firstName || ''} ${s.class.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
        classLink: s.classLink,
      })),
      pendingGradingCount,
      studentCount,
    };
  }

  async getClasses() {
    const schedules = await this.scheduleRepository.find({
      relations: ['class', 'class.tutor', 'class.course'],
    });

    schedules.sort((a, b) => {
      const dateA = a.date || '';
      const dateB = b.date || '';
      if (dateA !== dateB) return dateA.localeCompare(dateB);
      return a.time.localeCompare(b.time);
    });

    return schedules.map((s) => ({
      id: s.id,
      title: s.class?.title || (s.class?.course ? s.class.course.title : 'Unknown Course'),
      date: s.date || s.createdAt.toISOString().split('T')[0],
      time: s.time,
      type: s.class?.type || 'Live Class',
      tutor: s.class?.tutor ? `${s.class.tutor.firstName || ''} ${s.class.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
      classLink: s.classLink,
    }));
  }

  async getAssignedClasses() {
    const classes = await this.classRepository.find({
      relations: ['course', 'tutor'],
    });
    return classes.map(c => ({
      id: c.id,
      title: c.course ? c.course.title : c.title || 'Unknown Course',
      type: c.type,
    }));
  }

  async createClass(data: any) {
    let savedClass;
    
    if (data.classId) {
      savedClass = await this.classRepository.findOne({ where: { id: data.classId } });
      if (!savedClass) throw new Error('Class not found');
    } else {
      let tutor = null;
      let course = null;
      if (data.tutorId) {
        tutor = await this.userRepository.findOne({ where: { id: data.tutorId } });
      }
      if (data.courseTitle) {
        course = await this.courseRepository.findOne({ where: { title: data.courseTitle } });
      }
      const newClass = this.classRepository.create({
        title: data.title,
        type: data.type || 'Live Class',
        course: course || undefined,
        tutor: tutor || undefined,
      });
      
      savedClass = await this.classRepository.save(newClass);
    }
    
    if (data.date && data.time) {
      const schedule = this.scheduleRepository.create({
        class: savedClass,
        date: data.date,
        time: data.time,
        studentCount: data.studentCount || 0,
        classLink: data.classLink,
      });
      await this.scheduleRepository.save(schedule);
    }
    
    return savedClass;
  }

  async getAssignments() {
    const assignments = await this.assignmentRepository.find({
      where: { grade: IsNull() },
      relations: ['student', 'course'],
      order: { submittedAt: 'DESC' },
    });

    return assignments.map((a) => ({
      id: a.id,
      studentId: a.student ? a.student.id : a.studentId,
      studentName: a.student ? `${a.student.firstName || ''} ${a.student.lastName || ''}`.trim() : 'Unknown Student',
      studentAvatar: a.student?.avatar || '/avatars/default.png',
      course: a.course ? a.course.title : 'Unknown Course',
      title: a.title,
      submittedAt: a.submittedAt ? a.submittedAt.toISOString() : a.createdAt.toISOString(),
      previousGrade: a.previousGrade,
      avgPerformance: a.avgPerformance,
      documentUrl: a.documentUrl,
    }));
  }

  async gradeAssignment(assignmentId: string, score: number, feedback: string) {
    const assignment = await this.assignmentRepository.findOne({
      where: { id: assignmentId },
      relations: ['student'],
    });
    if (!assignment) return null;

    assignment.grade = score;
    assignment.feedback = feedback;
    assignment.status = 'graded';
    return this.assignmentRepository.save(assignment);
  }

  async getStudents(tutorId: string) {
    const students = await this.userRepository.createQueryBuilder('student')
      .innerJoin('student.enrollments', 'enrollment')
      .innerJoin('enrollment.course', 'course')
      .innerJoin('course.classes', 'courseClass')
      .where('student.role = :role', { role: 'student' })
      .andWhere('courseClass.tutorId = :tutorId', { tutorId })
      .orderBy('student.firstName', 'ASC')
      .getMany();

    return students.map(student => ({
      ...student,
      name: `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Unknown'
    }));
  }

  async getEarnings() {
    const totalBalanceResult = await this.transactionRepository
      .createQueryBuilder('tx')
      .select('SUM(tx.amount)', 'total')
      .where('tx.status = :status', { status: 'Completed' })
      .getRawOne();

    const totalBalance = (Number(totalBalanceResult?.total) || 0) * 0.5;
    const availablePayout = totalBalance * 0.8;
    const nextPayoutDate = new Date();
    nextPayoutDate.setDate(15);

    const transactions = await this.transactionRepository.find({
      relations: ['student', 'subscriptionPlan'],
      order: { createdAt: 'DESC' },
      take: 10,
    });

    return {
      totalBalance,
      availablePayout,
      nextPayoutDate: nextPayoutDate.toISOString(),
      transactions: transactions.map((tx) => ({
        id: tx.id,
        date: tx.createdAt.toISOString(),
        description: `Payment for ${tx.subscriptionPlan ? tx.subscriptionPlan.name : 'Unknown Plan'}`,
        student: tx.student ? `${tx.student.firstName || ''} ${tx.student.lastName || ''}`.trim() : 'Unknown Student',
        status: tx.status,
        amount: tx.amount,
      })),
    };
  }

  async getCommunityPosts() {
    return [
      {
        id: 'POST-1',
        title: 'Welcome to the new term!',
        content: 'Please ensure you check your schedules regularly for any updates.',
        author: 'System Admin',
        date: new Date().toISOString(),
      }
    ];
  }

  async getSettings(userId: string) {
    const tutor = await this.userRepository.findOne({ where: { id: userId } });

    return {
      profileData: {
        name: tutor ? `${tutor.firstName || ''} ${tutor.lastName || ''}`.trim() : 'Unknown User',
        firstName: tutor?.firstName || '',
        lastName: tutor?.lastName || '',
        middle: tutor?.middle || '',
        email: tutor?.email || '',
        timezone: 'UTC+1',
        avatar: tutor?.avatar || '/avatars/default.png',
      },
      preferences: {
        notifications: true,
      },
    };
  }

  async updateSettings(userId: string, data: any) {
    const tutor = await this.userRepository.findOne({ where: { id: userId } });
    if (tutor) {
      if (data.firstName) tutor.firstName = data.firstName;
      if (data.lastName) tutor.lastName = data.lastName;
      if (data.middle) tutor.middle = data.middle;
      // Intentionally avoiding updating email from settings

      if (data.password) {
        const bcrypt = require('bcrypt');
        tutor.password = await bcrypt.hash(data.password, 10);
      }

      if (data.avatar) tutor.avatar = data.avatar;
      await this.userRepository.save(tutor);
    }
    return this.getSettings(userId);
  }
}
