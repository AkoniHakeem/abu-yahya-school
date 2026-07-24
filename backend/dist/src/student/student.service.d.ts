import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Assignment } from '../entities/assignment.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CommunityPost } from '../entities/community-post.entity';
import { Message } from '../entities/message.entity';
import { ClassSchedule } from '../entities/class-schedule.entity';
export declare class StudentService {
    private readonly userRepository;
    private readonly classRepository;
    private readonly assignmentRepository;
    private readonly transactionRepository;
    private readonly courseRepository;
    private readonly communityRepository;
    private readonly messageRepository;
    private readonly scheduleRepository;
    constructor(userRepository: Repository<User>, classRepository: Repository<CourseClass>, assignmentRepository: Repository<Assignment>, transactionRepository: Repository<Transaction>, courseRepository: Repository<Course>, communityRepository: Repository<CommunityPost>, messageRepository: Repository<Message>, scheduleRepository: Repository<ClassSchedule>);
    getDashboardStats(studentId?: string): Promise<{
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
    getCourses(studentId: string): Promise<{
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
    getSchedule(studentId?: string): Promise<{
        id: string;
        courseTitle: string;
        tutor: string;
        date: string;
        duration: string;
        meetingLink: string;
        sessionType: string;
    }[]>;
    getAssignments(studentId?: string): Promise<{
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
    submitAssignment(studentId: string, body: {
        assignmentId: string;
        fileUrl?: string;
        comments?: string;
    }): Promise<{
        success: boolean;
        message: string;
        assignment: Assignment;
    }>;
    getBilling(studentId?: string): Promise<{
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
    getCommunity(studentId?: string): Promise<{
        id: string;
        author: string;
        title: string;
        content: string;
        date: string;
    }[]>;
    getMessages(studentId?: string): Promise<{
        id: string;
        sender: string;
        avatar: string;
        subject: string;
        preview: string;
        date: string;
        isRead: boolean;
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
