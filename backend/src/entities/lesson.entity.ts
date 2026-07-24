import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { StudentLessonProgress } from './student-lesson-progress.entity';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column()
  videoUrl: string;

  @Column({ default: false })
  isLockedByTutor: boolean;

  @Column({ type: 'int', default: 0 })
  order: number;

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;

  @OneToMany(() => StudentLessonProgress, (progress) => progress.lesson)
  progresses: StudentLessonProgress[];
}
