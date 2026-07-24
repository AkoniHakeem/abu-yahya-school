"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const course_class_entity_1 = require("./entities/course-class.entity");
const support_ticket_entity_1 = require("./entities/support-ticket.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const assignment_entity_1 = require("./entities/assignment.entity");
const course_entity_1 = require("./entities/course.entity");
const course_media_entity_1 = require("./entities/course-media.entity");
const community_post_entity_1 = require("./entities/community-post.entity");
const message_entity_1 = require("./entities/message.entity");
const lesson_entity_1 = require("./entities/lesson.entity");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const student_lesson_progress_entity_1 = require("./entities/student-lesson-progress.entity");
const ticket_reply_entity_1 = require("./entities/ticket-reply.entity");
const subscription_plan_entity_1 = require("./entities/subscription-plan.entity");
const class_attendance_entity_1 = require("./entities/class-attendance.entity");
const class_schedule_entity_1 = require("./entities/class-schedule.entity");
const dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'abuyahya',
    synchronize: false,
    logging: false,
    entities: [
        user_entity_1.User, course_class_entity_1.CourseClass, support_ticket_entity_1.SupportTicket, transaction_entity_1.Transaction, assignment_entity_1.Assignment,
        course_entity_1.Course, course_media_entity_1.CourseMedia, community_post_entity_1.CommunityPost, message_entity_1.Message, lesson_entity_1.Lesson,
        enrollment_entity_1.Enrollment, student_lesson_progress_entity_1.StudentLessonProgress, ticket_reply_entity_1.TicketReply,
        subscription_plan_entity_1.SubscriptionPlan, class_attendance_entity_1.ClassAttendance, class_schedule_entity_1.ClassSchedule
    ],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map