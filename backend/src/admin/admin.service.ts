import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { SupportTicket } from '../entities/support-ticket.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CourseMedia } from '../entities/course-media.entity';
import { Enrollment } from '../entities/enrollment.entity';

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
    await this.userRepository.update(id, data);
    return this.userRepository.findOne({ where: { id } });
  }


  async getClasses() {
    const classes = await this.classRepository.find({
      relations: ['tutor', 'course', 'schedules'],
      order: { createdAt: 'DESC' },
    });

    return classes.map((c) => {
      const studentCount = c.schedules?.reduce((sum, s) => sum + s.studentCount, 0) || 0;
      return {
        id: c.id,
        courseTitle: c.course ? c.course.title : c.title || 'Unknown Course',
        tutorId: c.tutorId,
        tutor: c.tutor ? `${c.tutor.firstName || ''} ${c.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
        type: c.type,
        studentCount: studentCount,
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
    const newClass = this.classRepository.create({
      type: data.type || 'Live Class',
      course: course || undefined,
      tutor: tutor || undefined,
    });
    const saved = await this.classRepository.save(newClass);
    return {
      ...saved,
      tutor: tutor ? `${tutor.firstName || ''} ${tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
      courseTitle: course ? course.title : 'Unknown Course'
    };
  }

  async updateClass(id: string, data: Partial<CourseClass>) {
    await this.classRepository.update(id, data);
    const updated = await this.classRepository.findOne({
      where: { id },
      relations: ['tutor', 'course'],
    });
    return {
      ...updated,
      courseTitle: updated?.course ? updated.course.title : updated?.title || 'Unknown Course',
      tutor: updated?.tutor ? `${updated.tutor.firstName || ''} ${updated.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
    };
  }

  async getCourses() {
    return this.courseRepository.find({
      relations: ['media'],
      order: { createdAt: 'DESC' },
    });
  }

  async createCourse(data: any) {
    const course = this.courseRepository.create({
      title: data.title,
    });
    const savedCourse = await this.courseRepository.save(course);

    if (data.media && data.media.length > 0) {
      const mediaEntities = data.media.map((m: any) =>
        this.courseMediaRepository.create({
          url: m.url,
          type: m.type,
          course: savedCourse,
        })
      );
      await this.courseMediaRepository.save(mediaEntities);
    }

    return this.courseRepository.findOne({
      where: { id: savedCourse.id },
      relations: ['media'],
    });
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
    const student = await this.userRepository.findOne({ where: { id: data.studentId } });
    const course = await this.courseRepository.findOne({ where: { id: data.courseId } });

    if (!student || !course) {
      throw new Error('Student or Course not found');
    }

    const enrollment = this.enrollmentRepository.create({
      student,
      course,
      status: 'active',
      progress: 0,
    });

    const saved = await this.enrollmentRepository.save(enrollment);
    return {
      id: saved.id,
      progress: saved.progress,
      status: saved.status,
      enrolledAt: saved.enrolledAt,
      studentId: student.id,
      studentName: `${student.firstName || ''} ${student.lastName || ''}`.trim(),
      courseId: course.id,
      courseTitle: course.title,
    };
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
