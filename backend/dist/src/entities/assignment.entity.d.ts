import { User } from './user.entity';
import { Course } from './course.entity';
export declare class Assignment {
    id: string;
    studentId: string;
    student: User;
    course: Course;
    title: string;
    submittedAt: Date;
    grade: number;
    previousGrade: number;
    avgPerformance: string;
    documentUrl: string;
    feedback: string;
    dueDate: Date;
    status: string;
    comments: string;
    attachedFiles: any[];
    createdAt: Date;
    updatedAt: Date;
}
