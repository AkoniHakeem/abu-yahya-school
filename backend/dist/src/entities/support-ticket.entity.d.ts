import { User } from './user.entity';
import { TicketReply } from './ticket-reply.entity';
export declare class SupportTicket {
    id: string;
    ticketId: string;
    userId: string;
    user: User;
    role: string;
    issue: string;
    status: string;
    replies: TicketReply[];
    createdAt: Date;
    updatedAt: Date;
}
