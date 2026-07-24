import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { SupportTicket } from '../entities/support-ticket.entity';
import { Transaction } from '../entities/transaction.entity';
import { Course } from '../entities/course.entity';
import { CourseMedia } from '../entities/course-media.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { TicketReply } from '../entities/ticket-reply.entity';
import { SubscriptionPlan } from '../entities/subscription-plan.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, CourseClass, SupportTicket, Transaction, Course, CourseMedia, Enrollment, TicketReply, SubscriptionPlan]),
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
