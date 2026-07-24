import { User } from './user.entity';
export declare class CommunityPost {
    id: string;
    author: User;
    title: string;
    content: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
