"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const course_class_entity_1 = require("./entities/course-class.entity");
const support_ticket_entity_1 = require("./entities/support-ticket.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const assignment_entity_1 = require("./entities/assignment.entity");
const course_entity_1 = require("./entities/course.entity");
const community_post_entity_1 = require("./entities/community-post.entity");
const message_entity_1 = require("./entities/message.entity");
const lesson_entity_1 = require("./entities/lesson.entity");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const student_lesson_progress_entity_1 = require("./entities/student-lesson-progress.entity");
const ticket_reply_entity_1 = require("./entities/ticket-reply.entity");
const subscription_plan_entity_1 = require("./entities/subscription-plan.entity");
const class_attendance_entity_1 = require("./entities/class-attendance.entity");
const class_schedule_entity_1 = require("./entities/class-schedule.entity");
const course_media_entity_1 = require("./entities/course-media.entity");
const admin_module_1 = require("./admin/admin.module");
const tutor_module_1 = require("./tutor/tutor.module");
const student_module_1 = require("./student/student.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST', 'localhost'),
                    port: configService.get('DB_PORT', 5432),
                    username: configService.get('DB_USERNAME', 'postgres'),
                    password: configService.get('DB_PASSWORD', 'postgres'),
                    database: configService.get('DB_DATABASE', 'abuyahya'),
                    entities: [user_entity_1.User, course_class_entity_1.CourseClass, support_ticket_entity_1.SupportTicket, transaction_entity_1.Transaction, assignment_entity_1.Assignment, course_entity_1.Course, course_media_entity_1.CourseMedia, community_post_entity_1.CommunityPost, message_entity_1.Message, lesson_entity_1.Lesson, enrollment_entity_1.Enrollment, student_lesson_progress_entity_1.StudentLessonProgress, ticket_reply_entity_1.TicketReply, subscription_plan_entity_1.SubscriptionPlan, class_attendance_entity_1.ClassAttendance, class_schedule_entity_1.ClassSchedule],
                    synchronize: true,
                }),
            }),
            admin_module_1.AdminModule,
            tutor_module_1.TutorModule,
            student_module_1.StudentModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map