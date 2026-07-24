import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getDashboardStats(req: any): Promise<{
        profile: {
            name: string;
        };
        upcomingClass: {
            id: string;
            courseTitle: string;
            title: string;
            tutor: string;
            date: string;
            duration: string;
            meetingLink: string;
        } | null;
        recentActivity: {
            id: string;
            type: string;
            title: string;
            description: string;
            timestamp: string;
            icon: string;
        }[];
        progressStats: {
            overall: number;
            coursesCompleted: number;
            activeCourses: number;
        };
        activePlan: {
            name: string;
            status: string;
            nextBillingDate: string;
        } | null;
    }>;
    getCourses(req: any): Promise<{
        id: string;
        title: string;
        tutor: string;
        progress: number;
        thumbnail: string;
        status: string;
        isLocked: boolean;
        lessons: import("../entities/lesson.entity").Lesson[];
        recordings: {
            id: string;
            title: string;
            url: string;
            type: string;
            duration: string;
        }[];
    }[]>;
    getSchedule(req: any): Promise<{
        id: string;
        courseTitle: string;
        tutor: string;
        date: string;
        duration: string;
        meetingLink: string;
        sessionType: string;
    }[]>;
    getAssignments(req: any): Promise<{
        id: string;
        courseTitle: string;
        title: string;
        dueDate: string;
        status: string;
        grade: number;
        feedback: string;
        attachedFiles: any[];
    }[] | ({
        id: string;
        courseTitle: string;
        title: string;
        dueDate: string;
        status: string;
        grade: null;
        feedback: null;
        attachedFiles: {
            name: string;
            size: string;
            url: string;
        }[];
    } | {
        id: string;
        courseTitle: string;
        title: string;
        dueDate: string;
        status: string;
        grade: number;
        feedback: string;
        attachedFiles: {
            name: string;
            size: string;
            url: string;
        }[];
    })[]>;
    submitAssignment(req: any, body: {
        assignmentId: string;
        fileUrl?: string;
        comments?: string;
    }): Promise<{
        success: boolean;
        message: string;
        assignment: import("../entities/assignment.entity").Assignment;
    }>;
    submitAssignmentWithParam(req: any, id: string, body: {
        fileUrl?: string;
        comments?: string;
    }): Promise<{
        success: boolean;
        message: string;
        assignment: import("../entities/assignment.entity").Assignment;
    }>;
    getBilling(req: any): Promise<{
        currentPlan: {
            name: string;
            price: number;
            interval: string;
            status: string;
            nextBillingDate: string;
        };
        paymentMethod: {
            type: string;
            last4: string;
            expiry: string;
        };
        invoices: {
            id: string;
            date: string;
            amount: number;
            status: string;
        }[];
    }>;
    getCommunity(req: any): Promise<{
        id: string;
        author: string;
        title: string;
        content: string;
        date: string;
    }[]>;
    getMessages(req: any): Promise<{
        id: string;
        sender: string;
        avatar: string;
        subject: string;
        preview: string;
        date: string;
        isRead: boolean;
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
