import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity('course_media')
export class CourseMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ type: 'enum', enum: ['video', 'audio', 'pdf'], default: 'video' })
  type: string;

  @ManyToOne(() => Course, (course) => course.media, { onDelete: 'CASCADE' })
  course: Course;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
