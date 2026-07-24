import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { SupportTicket } from '../entities/support-ticket.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CourseMedia } from '../entities/course-media.entity';
import { Enrollment } from '../entities/enrollment.entity';
export declare class AdminService {
    private readonly userRepository;
    private readonly classRepository;
    private readonly ticketRepository;
    private readonly transactionRepository;
    private readonly courseRepository;
    private readonly courseMediaRepository;
    private readonly enrollmentRepository;
    constructor(userRepository: Repository<User>, classRepository: Repository<CourseClass>, ticketRepository: Repository<SupportTicket>, transactionRepository: Repository<Transaction>, courseRepository: Repository<Course>, courseMediaRepository: Repository<CourseMedia>, enrollmentRepository: Repository<Enrollment>);
    getDashboardStats(): Promise<{
        totalRevenue: number;
        activeStudentsCount: number;
        totalTutorsCount: number;
    }>;
    getUsers(): Promise<{
        name: string;
        id: string;
        firstName: string;
        lastName: string;
        middle: string;
        email: string;
        role: string;
        password: string;
        isEmailVerified: boolean;
        emailVerificationToken: string;
        avatar: string;
        subscriptionPlan: import("../entities/subscription-plan.entity").SubscriptionPlan;
        progress: number;
        assignments: import("../entities/assignment.entity").Assignment[];
        taughtClasses: CourseClass[];
        enrollments: Enrollment[];
        communityPosts: import("../entities/community-post.entity").CommunityPost[];
        transactions: Transaction[];
        supportTickets: SupportTicket[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(data: Partial<User>): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User | null>;
    getClasses(): Promise<{
        id: string;
        courseTitle: string;
        tutorId: string;
        tutor: string;
        type: string;
        studentCount: number;
    }[]>;
    createClass(data: any): Promise<{
        tutor: string;
        courseTitle: string;
        id: string;
        course: Course;
        tutorId: string;
        title: string;
        type: string;
        schedules: import("../entities/class-schedule.entity").ClassSchedule[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateClass(id: string, data: Partial<CourseClass>): Promise<{
        courseTitle: string;
        tutor: string;
        id?: string | undefined;
        course?: Course | undefined;
        tutorId?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        schedules?: import("../entities/class-schedule.entity").ClassSchedule[] | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>;
    getCourses(): Promise<Course[]>;
    createCourse(data: any): Promise<Course | null>;
    getEnrollments(): Promise<{
        id: string;
        progress: number;
        status: string;
        enrolledAt: Date;
        studentId: string;
        studentName: string;
        courseId: string;
        courseTitle: string;
    }[]>;
    createEnrollment(data: any): Promise<{
        id: string;
        progress: number;
        status: string;
        enrolledAt: Date;
        studentId: string;
        studentName: string;
        courseId: string;
        courseTitle: string;
    }>;
    getFinancials(): Promise<{
        totalRevenue: number;
        mrr: number;
        activeSubscriptions: number;
        pendingPayouts: number;
        recentPayments: {
            id: string;
            student: string;
            plan: string;
            amount: number;
            date: string;
            status: string;
        }[];
    }>;
    getReports(): Promise<{
        activeUsers: number;
        newSignupsThisMonth: number;
        completionRates: {
            'Arabic Level 1': number;
            'Tajweed Basics': number;
        };
    }>;
    getSupportTickets(): Promise<{
        ticketId: string;
        user: string;
        role: string;
        issue: string;
        status: string;
        history: {
            sender: string;
            time: string;
            text: string;
        }[];
    }[]>;
    resolveTicket(ticketId: string): Promise<SupportTicket | null>;
    getSettings(userId: string): Promise<{
        profileData: {
            name: string;
            firstName: string;
            lastName: string;
            middle: string;
            email: string;
            timezone: string;
            avatar: string;
        };
        preferences: {
            notifications: boolean;
        };
    }>;
    updateSettings(userId: string, data: any): Promise<{
        profileData: {
            name: string;
            firstName: string;
            lastName: string;
            middle: string;
            email: string;
            timezone: string;
            avatar: string;
        };
        preferences: {
            notifications: boolean;
        };
    }>;
}
