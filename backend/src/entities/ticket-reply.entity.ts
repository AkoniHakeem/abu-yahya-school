import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { SupportTicket } from './support-ticket.entity';
import { User } from './user.entity';

@Entity('ticket_replies')
export class TicketReply {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => SupportTicket, (ticket) => ticket.replies)
  ticket: SupportTicket;

  @ManyToOne(() => User)
  sender: User;
}
