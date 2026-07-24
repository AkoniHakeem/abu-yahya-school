import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Assignment } from '../entities/assignment.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CommunityPost } from '../entities/community-post.entity';
import { Message } from '../entities/message.entity';
import { Lesson } from '../entities/lesson.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { StudentLessonProgress } from '../entities/student-lesson-progress.entity';
import { SubscriptionPlan } from '../entities/subscription-plan.entity';
import { ClassSchedule } from '../entities/class-schedule.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      CourseClass,
      Assignment,
      Transaction,
      Course,
      CommunityPost,
      Message,
      Lesson,
      Enrollment,
      StudentLessonProgress,
      SubscriptionPlan,
      ClassSchedule,
    ]),
    AuthModule,
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
