import { User } from './user.entity';
import { ClassSchedule } from './class-schedule.entity';
export declare class ClassAttendance {
    id: string;
    status: string;
    createdAt: Date;
    student: User;
    classSession: ClassSchedule;
}
