import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Course } from './course.entity';

@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  studentId: string;

  @ManyToOne(() => User, (user) => user.assignments, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'studentId' })
  student: User;

  @ManyToOne(() => Course, (course) => course.assignments)
  course: Course;

  @Column()
  title: string;

  @Column({ type: 'timestamp', nullable: true })
  submittedAt: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  grade: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  previousGrade: number;

  @Column({ nullable: true })
  avgPerformance: string;

  @Column({ nullable: true })
  documentUrl: string;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @Column({ type: 'timestamp', nullable: true })
  dueDate: Date;

  @Column({ default: 'pending' })
  status: string;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({ type: 'simple-json', nullable: true })
  attachedFiles: any[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
