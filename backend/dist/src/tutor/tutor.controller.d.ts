import { TutorService } from './tutor.service';
import { CourseClass } from '../entities/course-class.entity';
export declare class TutorController {
    private readonly tutorService;
    constructor(tutorService: TutorService);
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
    createClass(classData: Partial<CourseClass>): Promise<CourseClass>;
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
    gradeAssignment(body: {
        assignmentId: string;
        score: number;
        feedback: string;
    }): Promise<import("../entities/assignment.entity").Assignment | null>;
    getStudents(req: any): Promise<{
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
        enrollments: import("../entities/enrollment.entity").Enrollment[];
        communityPosts: import("../entities/community-post.entity").CommunityPost[];
        transactions: import("../entities/transaction.entity").Transaction[];
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
