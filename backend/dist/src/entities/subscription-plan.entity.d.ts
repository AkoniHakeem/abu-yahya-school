import { User } from './user.entity';
import { Transaction } from './transaction.entity';
export declare class SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    interval: string;
    users: User[];
    transactions: Transaction[];
}
