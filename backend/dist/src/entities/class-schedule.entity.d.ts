import { CourseClass } from './course-class.entity';
import { ClassAttendance } from './class-attendance.entity';
export declare class ClassSchedule {
    id: string;
    class: CourseClass;
    time: string;
    date: string;
    studentCount: number;
    classLink: string;
    attendances: ClassAttendance[];
    createdAt: Date;
    updatedAt: Date;
}
