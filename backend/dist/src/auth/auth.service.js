"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const resend_1 = require("resend");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        const resendApiKey = this.configService.get('RESEND_API_KEY');
        if (resendApiKey) {
            this.resend = new resend_1.Resend(resendApiKey);
        }
    }
    async register(data) {
        const { firstName, lastName, middle, email, password, role } = data;
        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new common_1.BadRequestException('User with this email already exists');
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
    async login(data) {
        const { email, password } = data;
        const user = await this.userRepository.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .addSelect('user.password')
            .getOne();
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isEmailVerified) {
            throw new common_1.UnauthorizedException('Please verify your email before logging in');
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
    async verifyEmail(token) {
        const user = await this.userRepository.findOne({ where: { emailVerificationToken: token } });
        if (!user) {
            throw new common_1.BadRequestException('Invalid or expired verification token');
        }
        user.isEmailVerified = true;
        user.emailVerificationToken = '';
        await this.userRepository.save(user);
        return { message: 'Email verified successfully' };
    }
    async sendVerificationEmail(email, token) {
        if (!this.resend) {
            console.warn('Resend is not configured. Skipping email verification send.');
            return;
        }
        try {
            const fromEmail = this.configService.get('RESEND_FROM_EMAIL', 'no-reply@abu-yahya.com');
            const verifyUrl = `http://localhost:3000/verify-email?token=${token}`;
            await this.resend.emails.send({
                from: fromEmail,
                to: email,
                subject: 'Verify your Abu Yahya School Account',
                html: `<p>Welcome!</p><p>Please verify your email by clicking the link below:</p><p><a href="${verifyUrl}">Verify Email</a></p>`,
            });
        }
        catch (e) {
            console.error('Failed to send verification email', e);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map