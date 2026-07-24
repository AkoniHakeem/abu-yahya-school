import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Lesson } from './lesson.entity';

@Entity('student_lesson_progress')
export class StudentLessonProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isCompleted: boolean;

  @CreateDateColumn()
  completedAt: Date;

  @ManyToOne(() => User)
  student: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.progresses)
  lesson: Lesson;
}
