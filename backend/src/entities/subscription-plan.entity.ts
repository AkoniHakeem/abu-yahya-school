import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity('subscription_plans')
export class SubscriptionPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'enum', enum: ['monthly', 'yearly', 'lifetime'], default: 'monthly' })
  interval: string;

  @OneToMany(() => User, (user) => user.subscriptionPlan)
  users: User[];

  @OneToMany(() => Transaction, (tx) => tx.subscriptionPlan)
  transactions: Transaction[];
}
