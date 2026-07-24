import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Course } from './course.entity';
import { ClassSchedule } from './class-schedule.entity';

@Entity('course_classes')
export class CourseClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Course, (course) => course.classes)
  course: Course;

  @Column({ nullable: true })
  tutorId: string;

  @ManyToOne(() => User, (user) => user.taughtClasses, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'tutorId' })
  tutor: User;

  @Column({ nullable: true })
  title: string;

  @Column({ default: 'Live Class' })
  type: string;



  @OneToMany(() => ClassSchedule, (schedule) => schedule.class, { cascade: true })
  schedules: ClassSchedule[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
