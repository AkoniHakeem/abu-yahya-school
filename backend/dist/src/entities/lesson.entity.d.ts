import { Course } from './course.entity';
import { StudentLessonProgress } from './student-lesson-progress.entity';
export declare class Lesson {
    id: string;
    title: string;
    duration: string;
    videoUrl: string;
    isLockedByTutor: boolean;
    order: number;
    course: Course;
    progresses: StudentLessonProgress[];
}
