import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Assignment } from '../entities/assignment.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CommunityPost } from '../entities/community-post.entity';
import { Message } from '../entities/message.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { ClassSchedule } from '../entities/class-schedule.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, CourseClass, Assignment, Transaction, Course, CommunityPost, Message, Enrollment, ClassSchedule]),
    AuthModule,
  ],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
