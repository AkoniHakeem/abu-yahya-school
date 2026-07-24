import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Assignment } from '../entities/assignment.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { ClassSchedule } from '../entities/class-schedule.entity';
export declare class TutorService {
    private readonly userRepository;
    private readonly classRepository;
    private readonly assignmentRepository;
    private readonly transactionRepository;
    private readonly courseRepository;
    private readonly scheduleRepository;
    constructor(userRepository: Repository<User>, classRepository: Repository<CourseClass>, assignmentRepository: Repository<Assignment>, transactionRepository: Repository<Transaction>, courseRepository: Repository<Course>, scheduleRepository: Repository<ClassSchedule>);
    getDashboardStats(): Promise<{
        todaysClasses: {
            id: string;
            title: string;
            date: string | undefined;
            time: string;
            type: string;
            studentCount: number;
            tutorName: string;
            classLink: string;
        }[];
        pendingGradingCount: number;
        studentCount: number;
    }>;
    getClasses(): Promise<{
        id: string;
        title: string;
        date: string;
        time: string;
        type: string;
        tutor: string;
        classLink: string;
    }[]>;
    getAssignedClasses(): Promise<{
        id: string;
        title: string;
        type: string;
    }[]>;
    createClass(data: any): Promise<CourseClass>;
    getAssignments(): Promise<{
        id: string;
        studentId: string;
        studentName: string;
        studentAvatar: string;
        course: string;
        title: string;
        submittedAt: string;
        previousGrade: number;
        avgPerformance: string;
        documentUrl: string;
    }[]>;
    gradeAssignment(assignmentId: string, score: number, feedback: string): Promise<Assignment | null>;
    getStudents(tutorId: string): Promise<{
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
        assignments: Assignment[];
        taughtClasses: CourseClass[];
        enrollments: import("../entities/enrollment.entity").Enrollment[];
        communityPosts: import("../entities/community-post.entity").CommunityPost[];
        transactions: Transaction[];
        supportTickets: import("../entities/support-ticket.entity").SupportTicket[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getEarnings(): Promise<{
        totalBalance: number;
        availablePayout: number;
        nextPayoutDate: string;
        transactions: {
            id: string;
            date: string;
            description: string;
            student: string;
            status: string;
            amount: number;
        }[];
    }>;
    getCommunityPosts(): Promise<{
        id: string;
        title: string;
        content: string;
        author: string;
        date: string;
    }[]>;
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
