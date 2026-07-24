import { User } from './user.entity';
import { Course } from './course.entity';
import { ClassSchedule } from './class-schedule.entity';
export declare class CourseClass {
    id: string;
    course: Course;
    tutorId: string;
    tutor: User;
    title: string;
    type: string;
    schedules: ClassSchedule[];
    createdAt: Date;
    updatedAt: Date;
}
