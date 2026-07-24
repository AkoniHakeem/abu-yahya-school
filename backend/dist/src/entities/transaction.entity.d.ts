import { User } from './user.entity';
import { SubscriptionPlan } from './subscription-plan.entity';
export declare class Transaction {
    id: string;
    studentId: string;
    student: User;
    subscriptionPlan: SubscriptionPlan;
    amount: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
