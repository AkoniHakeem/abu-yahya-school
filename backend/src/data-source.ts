import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CourseClass } from './entities/course-class.entity';
import { SupportTicket } from './entities/support-ticket.entity';
import { Transaction } from './entities/transaction.entity';
import { Assignment } from './entities/assignment.entity';
import { Course } from './entities/course.entity';
import { CourseMedia } from './entities/course-media.entity';
import { CommunityPost } from './entities/community-post.entity';
import { Message } from './entities/message.entity';
import { Lesson } from './entities/lesson.entity';
import { Enrollment } from './entities/enrollment.entity';
import { StudentLessonProgress } from './entities/student-lesson-progress.entity';
import { TicketReply } from './entities/ticket-reply.entity';
import { SubscriptionPlan } from './entities/subscription-plan.entity';
import { ClassAttendance } from './entities/class-attendance.entity';
import { ClassSchedule } from './entities/class-schedule.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'abuyahya',
  synchronize: false,
  logging: false,
  entities: [
    User, CourseClass, SupportTicket, Transaction, Assignment, 
    Course, CourseMedia, CommunityPost, Message, Lesson, 
    Enrollment, StudentLessonProgress, TicketReply, 
    SubscriptionPlan, ClassAttendance, ClassSchedule
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
