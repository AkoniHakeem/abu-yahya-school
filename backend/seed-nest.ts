import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userRepository = app.get<Repository<User>>(getRepositoryToken(User));

  const password = await bcrypt.hash('password123', 10);

  const users = [
    { name: 'Admin User', email: 'admin@abu-yahya.com', role: 'admin', password, isEmailVerified: true },
    { name: 'Tutor User', email: 'tutor@abu-yahya.com', role: 'tutor', password, isEmailVerified: true },
    { name: 'Student User', email: 'student@abu-yahya.com', role: 'student', password, isEmailVerified: true }
  ];

  for (const u of users) {
    const existing = await userRepository.findOne({ where: { email: u.email } });
    if (!existing) {
      await userRepository.save(userRepository.create(u));
    } else {
      // update existing users to have a password and verified status
      existing.password = u.password;
      existing.isEmailVerified = u.isEmailVerified;
      await userRepository.save(existing);
    }
  }

  console.log('Seed completed with passwords and verified emails.');
  await app.close();
}
bootstrap();
