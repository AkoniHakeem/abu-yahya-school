import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';
import { CourseClass } from './entities/course-class.entity';
import { ClassSchedule } from './entities/class-schedule.entity';
import { Enrollment } from './entities/enrollment.entity';
import { SubscriptionPlan } from './entities/subscription-plan.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);
  
  console.log('Synchronizing schema to clear existing data...');
  await dataSource.synchronize(true);

  const userRepo = dataSource.getRepository(User);
  const courseRepo = dataSource.getRepository(Course);
  const lessonRepo = dataSource.getRepository(Lesson);
  const classRepo = dataSource.getRepository(CourseClass);
  const enrollmentRepo = dataSource.getRepository(Enrollment);
  const planRepo = dataSource.getRepository(SubscriptionPlan);
  
  const defaultPassword = await bcrypt.hash('password123', 10);
  
  console.log('Seeding Subscription Plans...');
  let plan = planRepo.create({ name: 'Standard Plan', price: 50, interval: 'monthly' });
  plan = await planRepo.save(plan);

  console.log('Seeding Users...');
  const students: User[] = [];
  for (let i = 1; i <= 5; i++) {
    const student = userRepo.create({
      firstName: `Student${i}`,
      lastName: `Lastname`,
      email: `student${i}@example.com`,
      password: defaultPassword,
      role: 'student',
      subscriptionPlan: plan,
      isEmailVerified: true,
      avatar: `S${i}`
    });
    students.push(await userRepo.save(student));
  }

  const tutors: User[] = [];
  for (let i = 1; i <= 2; i++) {
    const tutor = userRepo.create({
      firstName: `Tutor${i}`,
      lastName: `Lastname`,
      email: `tutor${i}@example.com`,
      password: defaultPassword,
      role: 'tutor',
      isEmailVerified: true,
      avatar: `T${i}`
    });
    tutors.push(await userRepo.save(tutor));
  }
  
  const admin = userRepo.create({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    password: defaultPassword,
    role: 'admin',
    isEmailVerified: true,
    avatar: 'AU'
  });
  await userRepo.save(admin);

  console.log('Seeding Courses and Lessons...');
  const course1 = courseRepo.create({
    title: 'Arabic Level 1 (Foundation)'
  });
  await courseRepo.save(course1);

  const lesson1 = lessonRepo.create({
    title: 'The Arabic Alphabet',
    duration: '45 mins',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    order: 1,
    course: course1
  });
  await lessonRepo.save(lesson1);

  const scheduleRepo = dataSource.getRepository(ClassSchedule);

  console.log('Seeding Classes, Schedules and Enrollments...');
  const class1 = classRepo.create({
    type: 'Live Class',
    course: course1,
    tutor: tutors[0],
  });
  const savedClass1 = await classRepo.save(class1);

  await scheduleRepo.save(scheduleRepo.create({
    class: savedClass1,
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    studentCount: 3
  }));

  const class2 = classRepo.create({
    type: '1-on-1 Lesson',
    course: course1,
    tutor: tutors[1],
  });
  const savedClass2 = await classRepo.save(class2);

  await scheduleRepo.save(scheduleRepo.create({
    class: savedClass2,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '14:00',
    studentCount: 2
  }));

  for (let i = 0; i < 3; i++) {
    await enrollmentRepo.save(enrollmentRepo.create({ student: students[i], course: course1 }));
  }
  for (let i = 3; i < 5; i++) {
    await enrollmentRepo.save(enrollmentRepo.create({ student: students[i], course: course1 }));
  }

  console.log('Seed completed!');
  await app.close();
}

bootstrap().catch(err => {
  console.error(err);
  process.exit(1);
});
