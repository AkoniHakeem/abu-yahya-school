import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { CourseClass } from './course-class.entity';
import { ClassAttendance } from './class-attendance.entity';

@Entity('class_schedules')
export class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.schedules, { onDelete: 'CASCADE' })
  class: CourseClass;

  @Column()
  time: string;

  @Column({ nullable: true })
  date: string;

  @Column({ default: 0 })
  studentCount: number;

  @Column({ nullable: true })
  classLink: string;

  @OneToMany(() => ClassAttendance, (attendance) => attendance.classSession)
  attendances: ClassAttendance[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
