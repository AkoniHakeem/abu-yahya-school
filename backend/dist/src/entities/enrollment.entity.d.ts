import { User } from './user.entity';
import { Course } from './course.entity';
export declare class Enrollment {
    id: string;
    progress: number;
    status: string;
    enrolledAt: Date;
    student: User;
    course: Course;
}
