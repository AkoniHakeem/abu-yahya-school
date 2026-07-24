import { Course } from './course.entity';
export declare class CourseMedia {
    id: string;
    url: string;
    type: string;
    course: Course;
    createdAt: Date;
    updatedAt: Date;
}
