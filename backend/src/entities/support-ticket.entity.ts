import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { TicketReply } from './ticket-reply.entity';

@Entity('support_tickets')
export class SupportTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  ticketId: string;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(() => User, (u) => u.supportTickets, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  role: string;

  @Column()
  issue: string;

  @Column({ default: 'Open' })
  status: string;

  @OneToMany(() => TicketReply, (reply) => reply.ticket)
  replies: TicketReply[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
