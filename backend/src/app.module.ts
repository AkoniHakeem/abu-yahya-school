import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CourseClass } from './entities/course-class.entity';
import { SupportTicket } from './entities/support-ticket.entity';
import { Transaction } from './entities/transaction.entity';
import { Assignment } from './entities/assignment.entity';
import { Course } from './entities/course.entity';
import { CommunityPost } from './entities/community-post.entity';
import { Message } from './entities/message.entity';
import { Lesson } from './entities/lesson.entity';
import { Enrollment } from './entities/enrollment.entity';
import { StudentLessonProgress } from './entities/student-lesson-progress.entity';
import { TicketReply } from './entities/ticket-reply.entity';
import { SubscriptionPlan } from './entities/subscription-plan.entity';
import { ClassAttendance } from './entities/class-attendance.entity';
import { ClassSchedule } from './entities/class-schedule.entity';
import { CourseMedia } from './entities/course-media.entity';
import { AdminModule } from './admin/admin.module';
import { TutorModule } from './tutor/tutor.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres'),
        database: configService.get<string>('DB_DATABASE', 'abuyahya'),
        entities: [User, CourseClass, SupportTicket, Transaction, Assignment, Course, CourseMedia, CommunityPost, Message, Lesson, Enrollment, StudentLessonProgress, TicketReply, SubscriptionPlan, ClassAttendance, ClassSchedule],
        synchronize: true, // For development only
      }),
    }),
    AdminModule,
    TutorModule,
    StudentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
