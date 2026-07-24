import { User } from './user.entity';
export declare class Message {
    id: string;
    senderId: string;
    sender: User;
    recipientId: string;
    recipient: User;
    subject: string;
    preview: string;
    isRead: boolean;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
