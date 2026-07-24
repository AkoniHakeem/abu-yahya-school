import { SupportTicket } from './support-ticket.entity';
import { User } from './user.entity';
export declare class TicketReply {
    id: string;
    message: string;
    createdAt: Date;
    ticket: SupportTicket;
    sender: User;
}
