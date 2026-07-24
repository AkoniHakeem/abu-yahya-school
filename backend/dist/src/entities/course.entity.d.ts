import { Lesson } from './lesson.entity';
import { Enrollment } from './enrollment.entity';
import { Assignment } from './assignment.entity';
import { CourseClass } from './course-class.entity';
import { CourseMedia } from './course-media.entity';
export declare class Course {
    id: string;
    title: string;
    media: CourseMedia[];
    lessons: Lesson[];
    enrollments: Enrollment[];
    assignments: Assignment[];
    classes: CourseClass[];
    createdAt: Date;
    updatedAt: Date;
}
