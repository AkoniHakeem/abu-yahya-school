import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { ClassSchedule } from './class-schedule.entity';

@Entity('class_attendances')
export class ClassAttendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ['present', 'absent', 'excused'], default: 'present' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User)
  student: User;

  @ManyToOne(() => ClassSchedule, (schedule) => schedule.attendances)
  classSession: ClassSchedule;
}
