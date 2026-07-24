import { AdminService } from './admin.service';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Course } from '../entities/course.entity';
import { Enrollment } from '../entities/enrollment.entity';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
        transactions: import("../entities/transaction.entity").Transaction[];
        supportTickets: import("../entities/support-ticket.entity").SupportTicket[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(userData: Partial<User>): Promise<User>;
    updateUser(id: string, userData: Partial<User>): Promise<User | null>;
    getClasses(): Promise<{
        id: string;
        courseTitle: string;
        tutorId: string;
        tutor: string;
        type: string;
        studentCount: number;
    }[]>;
    createClass(classData: Partial<CourseClass>): Promise<{
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
    updateClass(id: string, classData: Partial<CourseClass>): Promise<{
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
    createCourse(courseData: any): Promise<Course | null>;
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
    createEnrollment(enrollmentData: any): Promise<{
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
    resolveTicket(ticketId: string): Promise<import("../entities/support-ticket.entity").SupportTicket | null>;
    getSettings(req: any): Promise<{
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
    updateSettings(req: any, body: any): Promise<{
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
