import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private resend: Resend;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {
    const resendApiKey = this.configService.get<string>('RESEND_API_KEY');
    if (resendApiKey) {
      this.resend = new Resend(resendApiKey);
    }
  }

  async register(data: any): Promise<any> {
    const { firstName, lastName, middle, email, password, role } = data;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');

    const user = this.userRepository.create({
      firstName,
      lastName,
      middle,
      email,
      password: hashedPassword,
      role: role || 'student',
      isEmailVerified: false,
      emailVerificationToken,
    });

    await this.userRepository.save(user);

    await this.sendVerificationEmail(email, emailVerificationToken);

    return {
      message: 'Registration successful. Please check your email to verify your account.',
    };
  }

  async login(data: any): Promise<any> {
    const { email, password } = data;

    // we need to select password because it is { select: false }
    const user = await this.userRepository.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .addSelect('user.password')
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isEmailVerified) {
      throw new UnauthorizedException('Please verify your email before logging in');
    }

    const payload = { sub: user.id, email: user.email, role: user.role, name: `${user.firstName || ''} ${user.lastName || ''}`.trim() };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        role: user.role
      }
    };
  }

  async verifyEmail(token: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { emailVerificationToken: token } });
    if (!user) {
      throw new BadRequestException('Invalid or expired verification token');
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = '';
    await this.userRepository.save(user);

    return { message: 'Email verified successfully' };
  }

  private async sendVerificationEmail(email: string, token: string) {
    if (!this.resend) {
      console.warn('Resend is not configured. Skipping email verification send.');
      return;
    }
    try {
      const fromEmail = this.configService.get<string>('RESEND_FROM_EMAIL', 'no-reply@abu-yahya.com');
      // In production, we'd use the real frontend URL
      const verifyUrl = `http://localhost:3000/verify-email?token=${token}`;

      await this.resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Verify your Abu Yahya School Account',
        html: `<p>Welcome!</p><p>Please verify your email by clicking the link below:</p><p><a href="${verifyUrl}">Verify Email</a></p>`,
      });
    } catch (e) {
      console.error('Failed to send verification email', e);
    }
  }
}
