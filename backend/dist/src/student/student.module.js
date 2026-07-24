"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_controller_1 = require("./student.controller");
const student_service_1 = require("./student.service");
const user_entity_1 = require("../entities/user.entity");
const course_class_entity_1 = require("../entities/course-class.entity");
const assignment_entity_1 = require("../entities/assignment.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const course_entity_1 = require("../entities/course.entity");
const community_post_entity_1 = require("../entities/community-post.entity");
const message_entity_1 = require("../entities/message.entity");
const lesson_entity_1 = require("../entities/lesson.entity");
const enrollment_entity_1 = require("../entities/enrollment.entity");
const student_lesson_progress_entity_1 = require("../entities/student-lesson-progress.entity");
const subscription_plan_entity_1 = require("../entities/subscription-plan.entity");
const class_schedule_entity_1 = require("../entities/class-schedule.entity");
const auth_module_1 = require("../auth/auth.module");
let StudentModule = class StudentModule {
};
exports.StudentModule = StudentModule;
exports.StudentModule = StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                course_class_entity_1.CourseClass,
                assignment_entity_1.Assignment,
                transaction_entity_1.Transaction,
                course_entity_1.Course,
                community_post_entity_1.CommunityPost,
                message_entity_1.Message,
                lesson_entity_1.Lesson,
                enrollment_entity_1.Enrollment,
                student_lesson_progress_entity_1.StudentLessonProgress,
                subscription_plan_entity_1.SubscriptionPlan,
                class_schedule_entity_1.ClassSchedule,
            ]),
            auth_module_1.AuthModule,
        ],
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService],
        exports: [student_service_1.StudentService],
    })
], StudentModule);
//# sourceMappingURL=student.module.js.map