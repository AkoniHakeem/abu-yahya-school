import { Assignment } from './assignment.entity';
import { CourseClass } from './course-class.entity';
import { Transaction } from './transaction.entity';
import { SupportTicket } from './support-ticket.entity';
import { SubscriptionPlan } from './subscription-plan.entity';
import { Enrollment } from './enrollment.entity';
import { CommunityPost } from './community-post.entity';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    middle: string;
    email: string;
    role: string;
    password: string;
    isEmailVerified: boolean;
    emailVerificationToken: string;
    avatar: string;
    subscriptionPlan: SubscriptionPlan;
    progress: number;
    assignments: Assignment[];
    taughtClasses: CourseClass[];
    enrollments: Enrollment[];
    communityPosts: CommunityPost[];
    transactions: Transaction[];
    supportTickets: SupportTicket[];
    createdAt: Date;
    updatedAt: Date;
}
