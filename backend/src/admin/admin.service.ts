import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { SupportTicket } from '../entities/support-ticket.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CourseMedia } from '../entities/course-media.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { Lesson } from '../entities/lesson.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CourseClass)
    private readonly classRepository: Repository<CourseClass>,
    @InjectRepository(SupportTicket)
    private readonly ticketRepository: Repository<SupportTicket>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(CourseMedia)
    private readonly courseMediaRepository: Repository<CourseMedia>,
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    private readonly dataSource: DataSource,
  ) {}

  async getDashboardStats() {
    const totalRevenueResult = await this.transactionRepository
      .createQueryBuilder('tx')
      .select('SUM(tx.amount)', 'total')
      .where('tx.status = :status', { status: 'Completed' })
      .getRawOne();

    const totalRevenue = Number(totalRevenueResult?.total) || 0;

    const activeStudentsCount = await this.userRepository.count({ where: { role: 'student' } });
    const totalTutorsCount = await this.userRepository.count({ where: { role: 'tutor' } });

    return {
      totalRevenue,
      activeStudentsCount,
      totalTutorsCount,
    };
  }

  async getUsers() {
    const users = await this.userRepository.find({ order: { createdAt: 'DESC' } });
    return users.map(user => ({
      ...user,
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown'
    }));
  }

  async createUser(data: Partial<User>) {
    const bcrypt = require('bcrypt');
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    data.isEmailVerified = true;
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async updateUser(id: string, data: Partial<User>) {
    if (data.password) {
      const bcrypt = require('bcrypt');
      data.password = await bcrypt.hash(data.password, 10);
    }
    await this.userRepository.update(id, data);
    return this.userRepository.findOne({ where: { id } });
  }


  async getClasses() {
    const classes = await this.classRepository.find({
      relations: ['tutor', 'course', 'schedules', 'students'],
      order: { createdAt: 'DESC' },
    });

    return classes.map((c) => {
      const studentCount = c.schedules?.reduce((sum, s) => sum + s.studentCount, 0) || 0;
      return {
        id: c.id,
        title: c.title || 'Untitled Class',
        courseTitle: c.course ? c.course.title : 'Unknown Course',
        tutorId: c.tutorId,
        tutor: c.tutor ? `${c.tutor.firstName || ''} ${c.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
        type: c.type,
        studentCount: studentCount,
        students: c.students ? c.students.map(s => ({ id: s.id, name: `${s.firstName || ''} ${s.lastName || ''}`.trim() })) : [],
        schedules: c.schedules ? c.schedules.map(s => ({
          id: s.id,
          date: s.date,
          time: s.time,
          classLink: s.classLink,
          studentCount: s.studentCount,
        })) : [],
      };
    });
  }

  async createClass(data: any) {
    let tutor = null;
    let course = null;
    if (data.tutorId) {
      tutor = await this.userRepository.findOne({ where: { id: data.tutorId } });
    }
    if (data.courseTitle) {
      course = await this.courseRepository.findOne({ where: { title: data.courseTitle } });
    }
    let students: User[] = [];
    if (data.studentIds && data.studentIds.length > 0) {
      students = await this.userRepository.findBy({ id: In(data.studentIds) });
    }
    const newClass = this.classRepository.create({
      title: data.title,
      type: data.type || 'Live Class',
      course: course || undefined,
      tutor: tutor || undefined,
      students: students,
    });
    const saved = await this.classRepository.save(newClass);
    return {
      ...saved,
      title: saved.title || 'Untitled Class',
      tutor: tutor ? `${tutor.firstName || ''} ${tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
      courseTitle: course ? course.title : 'Unknown Course'
    };
  }

  async updateClass(id: string, data: Partial<CourseClass> & { studentIds?: string[] }) {
    const cls = await this.classRepository.findOne({ where: { id }, relations: ['students'] });
    if (!cls) return null;

    if (data.type) cls.type = data.type;
    if (data.title) cls.title = data.title;
    if (data.tutorId) {
      const tutor = await this.userRepository.findOne({ where: { id: data.tutorId } });
      if (tutor) cls.tutor = tutor;
    }
    if (data.studentIds) {
      const students = await this.userRepository.findBy({ id: In(data.studentIds) });
      cls.students = students;
    }

    await this.classRepository.save(cls);

    const updated = await this.classRepository.findOne({
      where: { id },
      relations: ['tutor', 'course', 'students'],
    });
    return {
      ...updated,
      title: updated?.title || 'Untitled Class',
      courseTitle: updated?.course ? updated.course.title : 'Unknown Course',
      tutor: updated?.tutor ? `${updated.tutor.firstName || ''} ${updated.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
      students: updated?.students ? updated.students.map(s => ({ id: s.id, name: `${s.firstName || ''} ${s.lastName || ''}`.trim() })) : [],
    };
  }

  async deleteClass(id: string) {
    await this.classRepository.delete(id);
    return { success: true };
  }

  async getCourses() {
    return this.courseRepository.find({
      relations: ['media', 'lessons'],
      order: { 
        createdAt: 'DESC',
        media: { createdAt: 'ASC' }
      },
    });
  }

  async createCourse(data: any) {
    return this.dataSource.transaction(async (manager) => {
      const course = manager.create(Course, {
        title: data.title,
      });
      const savedCourse = await manager.save(Course, course);

      if (data.media && data.media.length > 0) {
        const mediaEntities = data.media.map((m: any) =>
          manager.create(CourseMedia, {
            url: m.url,
            type: m.type,
            course: savedCourse,
          })
        );
        await manager.save(CourseMedia, mediaEntities);
      }

      if (data.lessons && data.lessons.length > 0) {
        const lessonEntities = data.lessons.map((l: any, idx: number) =>
          manager.create(Lesson, {
            title: l.title,
            videoUrl: l.videoUrl || '',
            duration: l.duration || '',
            order: idx,
            course: savedCourse,
          })
        );
        await manager.save(Lesson, lessonEntities);
      }

      return manager.findOne(Course, {
        where: { id: savedCourse.id },
        relations: ['media', 'lessons'],
      });
    });
  }

  async updateCourse(id: string, data: any) {
    return this.dataSource.transaction(async (manager) => {
      const course = await manager.findOne(Course, { where: { id }, relations: ['media'] });
      if (!course) return null;

      if (data.title) course.title = data.title;
      await manager.save(Course, course);

      if (data.media !== undefined) {
        // Remove old media
        await manager.delete(CourseMedia, { course: { id: course.id } });
        
        // Add new media
        if (data.media && data.media.length > 0) {
          const mediaEntities = data.media.map((m: any) =>
            manager.create(CourseMedia, {
              url: m.url,
              type: m.type,
              course: course,
            })
          );
          await manager.save(CourseMedia, mediaEntities);
        }
      }

      if (data.lessons !== undefined) {
        await manager.delete(Lesson, { course: { id: course.id } });
        if (data.lessons && data.lessons.length > 0) {
          const lessonEntities = data.lessons.map((l: any, idx: number) =>
            manager.create(Lesson, {
              title: l.title,
              videoUrl: l.videoUrl || '',
              duration: l.duration || '',
              order: idx,
              course: course,
            })
          );
          await manager.save(Lesson, lessonEntities);
        }
      }

      return manager.findOne(Course, {
        where: { id },
        relations: ['media', 'lessons'],
      });
    });
  }

  async deleteCourse(id: string) {
    await this.courseRepository.delete(id);
    return { success: true };
  }

  async getEnrollments() {
    const enrollments = await this.enrollmentRepository.find({
      relations: ['student', 'course'],
      order: { enrolledAt: 'DESC' },
    });

    return enrollments.map((e) => ({
      id: e.id,
      progress: e.progress,
      status: e.status,
      enrolledAt: e.enrolledAt,
      studentId: e.student?.id,
      studentName: e.student ? `${e.student.firstName || ''} ${e.student.lastName || ''}`.trim() : 'Unknown Student',
      courseId: e.course?.id,
      courseTitle: e.course ? e.course.title : 'Unknown Course',
    }));
  }

  async createEnrollment(data: any) {
    const course = await this.courseRepository.findOne({ where: { id: data.courseId } });
    if (!course) {
      throw new Error('Course not found');
    }

    let studentIdsToProcess = [];
    if (data.studentIds && Array.isArray(data.studentIds)) {
      studentIdsToProcess = data.studentIds;
    } else if (data.studentId) {
      // Fallback for single student enrollment if still used somewhere
      studentIdsToProcess = [data.studentId];
    }

    if (studentIdsToProcess.length === 0) {
      throw new Error('Student IDs are required');
    }

    const students = await this.userRepository.findBy({ id: In(studentIdsToProcess) });
    if (students.length === 0) {
      throw new Error('No valid students found');
    }

    const enrollments = [];
    for (const student of students) {
      // Check if already enrolled
      const existing = await this.enrollmentRepository.findOne({
        where: { student: { id: student.id }, course: { id: course.id } }
      });

      if (!existing) {
        const enrollment = this.enrollmentRepository.create({
          student,
          course,
          status: 'active',
          progress: 0,
        });
        const saved = await this.enrollmentRepository.save(enrollment);
        enrollments.push({
          id: saved.id,
          progress: saved.progress,
          status: saved.status,
          enrolledAt: saved.enrolledAt,
          studentId: student.id,
          studentName: `${student.firstName || ''} ${student.lastName || ''}`.trim(),
          courseId: course.id,
          courseTitle: course.title,
        });
      }
    }
    
    return enrollments;
  }

  async updateEnrollment(id: string, data: any) {
    const enrollment = await this.enrollmentRepository.findOne({ where: { id }, relations: ['student', 'course'] });
    if (!enrollment) return null;

    if (data.studentId) {
      const student = await this.userRepository.findOne({ where: { id: data.studentId } });
      if (student) enrollment.student = student;
    }
    if (data.courseId) {
      const course = await this.courseRepository.findOne({ where: { id: data.courseId } });
      if (course) enrollment.course = course;
    }
    if (data.status) enrollment.status = data.status;
    if (data.progress !== undefined) enrollment.progress = data.progress;

    const saved = await this.enrollmentRepository.save(enrollment);
    return {
      id: saved.id,
      progress: saved.progress,
      status: saved.status,
      enrolledAt: saved.enrolledAt,
      studentId: saved.student?.id,
      studentName: saved.student ? `${saved.student.firstName || ''} ${saved.student.lastName || ''}`.trim() : 'Unknown Student',
      courseId: saved.course?.id,
      courseTitle: saved.course?.title,
    };
  }

  async deleteEnrollment(id: string) {
    await this.enrollmentRepository.delete(id);
    return { success: true };
  }


  async getFinancials() {
    const totalRevenueResult = await this.transactionRepository
      .createQueryBuilder('tx')
      .select('SUM(tx.amount)', 'total')
      .where('tx.status = :status', { status: 'Completed' })
      .getRawOne();

    const totalRevenue = Number(totalRevenueResult?.total) || 0;
    const mrr = totalRevenue * 0.8;
    const activeSubscriptions = await this.userRepository.count({ where: { role: 'student', subscriptionPlan: { name: 'Standard Plan' } } });
    const pendingPayouts = 1500;

    const recentPayments = await this.transactionRepository.find({
      relations: ['student', 'subscriptionPlan'],
      order: { createdAt: 'DESC' },
      take: 10,
    });

    return {
      totalRevenue,
      mrr,
      activeSubscriptions,
      pendingPayouts,
      recentPayments: recentPayments.map((tx) => ({
        id: tx.id,
        student: tx.student ? `${tx.student.firstName || ''} ${tx.student.lastName || ''}`.trim() : 'Unknown Student',
        plan: tx.subscriptionPlan ? tx.subscriptionPlan.name : 'Unknown Plan',
        amount: tx.amount,
        date: tx.createdAt.toISOString(),
        status: tx.status,
      })),
    };
  }

  async getReports() {
    const activeUsers = await this.userRepository.count();
    const newSignupsThisMonth = 42;
    return {
      activeUsers,
      newSignupsThisMonth,
      completionRates: {
        'Arabic Level 1': 85,
        'Tajweed Basics': 92,
      },
    };
  }

  async getSupportTickets() {
    const tickets = await this.ticketRepository.find({
      relations: ['user', 'replies', 'replies.sender'],
      order: { createdAt: 'DESC' },
    });

    return tickets.map((t) => ({
      ticketId: t.ticketId,
      user: t.user ? `${t.user.firstName || ''} ${t.user.lastName || ''}`.trim() : 'Unknown User',
      role: t.user ? t.user.role : t.role,
      issue: t.issue,
      status: t.status,
      history: (t.replies || []).map(r => ({
        sender: r.sender ? `${r.sender.firstName || ''} ${r.sender.lastName || ''}`.trim() : 'System',
        time: r.createdAt.toISOString(),
        text: r.message
      })),
    }));
  }

  async resolveTicket(ticketId: string) {
    const ticket = await this.ticketRepository.findOne({ where: { ticketId } });
    if (!ticket) return null;

    ticket.status = 'Resolved';
    return this.ticketRepository.save(ticket);
  }

  async getSettings(userId: string) {
    const admin = await this.userRepository.findOne({ where: { id: userId } });

    return {
      profileData: {
        name: admin ? `${admin.firstName || ''} ${admin.lastName || ''}`.trim() : 'Unknown Admin',
        firstName: admin?.firstName || '',
        lastName: admin?.lastName || '',
        middle: admin?.middle || '',
        email: admin?.email || '',
        timezone: 'UTC+1',
        avatar: admin?.avatar || '/avatars/default.png',
      },
      preferences: {
        notifications: true,
      },
    };
  }

  async updateSettings(userId: string, data: any) {
    const admin = await this.userRepository.findOne({ where: { id: userId } });
    if (admin) {
      if (data.firstName) admin.firstName = data.firstName;
      if (data.lastName) admin.lastName = data.lastName;
      if (data.middle) admin.middle = data.middle;
      if (data.email) admin.email = data.email;

      if (data.avatar) admin.avatar = data.avatar;
      await this.userRepository.save(admin);
    }
    return this.getSettings(userId);
  }
}
