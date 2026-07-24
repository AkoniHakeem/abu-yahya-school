"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const course_entity_1 = require("./entities/course.entity");
const lesson_entity_1 = require("./entities/lesson.entity");
const course_class_entity_1 = require("./entities/course-class.entity");
const class_schedule_entity_1 = require("./entities/class-schedule.entity");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const subscription_plan_entity_1 = require("./entities/subscription-plan.entity");
const bcrypt = require("bcrypt");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    console.log('Synchronizing schema to clear existing data...');
    await dataSource.synchronize(true);
    const userRepo = dataSource.getRepository(user_entity_1.User);
    const courseRepo = dataSource.getRepository(course_entity_1.Course);
    const lessonRepo = dataSource.getRepository(lesson_entity_1.Lesson);
    const classRepo = dataSource.getRepository(course_class_entity_1.CourseClass);
    const enrollmentRepo = dataSource.getRepository(enrollment_entity_1.Enrollment);
    const planRepo = dataSource.getRepository(subscription_plan_entity_1.SubscriptionPlan);
    const defaultPassword = await bcrypt.hash('password123', 10);
    console.log('Seeding Subscription Plans...');
    let plan = planRepo.create({ name: 'Standard Plan', price: 50, interval: 'monthly' });
    plan = await planRepo.save(plan);
    console.log('Seeding Users...');
    const students = [];
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
    const tutors = [];
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
    const scheduleRepo = dataSource.getRepository(class_schedule_entity_1.ClassSchedule);
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
//# sourceMappingURL=seed.js.map