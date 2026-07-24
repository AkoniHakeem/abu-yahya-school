import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Assignment } from './assignment.entity';
import { CourseClass } from './course-class.entity';
import { Course } from './course.entity';
import { Transaction } from './transaction.entity';
import { SupportTicket } from './support-ticket.entity';
import { SubscriptionPlan } from './subscription-plan.entity';
import { Enrollment } from './enrollment.entity';
import { CommunityPost } from './community-post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  middle: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: ['student', 'tutor', 'admin'], default: 'student' })
  role: string;

  @Column({ select: false, default: '' })
  password: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ nullable: true })
  emailVerificationToken: string;

  @Column({ nullable: true })
  avatar: string;

  @ManyToOne(() => SubscriptionPlan, (plan) => plan.users)
  subscriptionPlan: SubscriptionPlan;

  @Column({ default: 0 })
  progress: number;

  @OneToMany(() => Assignment, (assignment) => assignment.student)
  assignments: Assignment[];

  @OneToMany(() => CourseClass, (courseClass) => courseClass.tutor)
  taughtClasses: CourseClass[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];

  @OneToMany(() => CommunityPost, (post) => post.author)
  communityPosts: CommunityPost[];

  @OneToMany(() => Transaction, (tx) => tx.student)
  transactions: Transaction[];

  @OneToMany(() => SupportTicket, (ticket) => ticket.user)
  supportTickets: SupportTicket[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
