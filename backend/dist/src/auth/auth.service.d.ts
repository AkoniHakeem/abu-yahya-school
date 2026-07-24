import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private configService;
    private resend;
    constructor(userRepository: Repository<User>, jwtService: JwtService, configService: ConfigService);
    register(data: any): Promise<any>;
    login(data: any): Promise<any>;
    verifyEmail(token: string): Promise<any>;
    private sendVerificationEmail;
}
