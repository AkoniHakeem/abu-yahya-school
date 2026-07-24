import { User } from './user.entity';
import { Lesson } from './lesson.entity';
export declare class StudentLessonProgress {
    id: string;
    isCompleted: boolean;
    completedAt: Date;
    student: User;
    lesson: Lesson;
}
