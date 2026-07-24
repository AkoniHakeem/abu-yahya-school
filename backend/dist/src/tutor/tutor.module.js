"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tutor_controller_1 = require("./tutor.controller");
const tutor_service_1 = require("./tutor.service");
const user_entity_1 = require("../entities/user.entity");
const course_class_entity_1 = require("../entities/course-class.entity");
const assignment_entity_1 = require("../entities/assignment.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const course_entity_1 = require("../entities/course.entity");
const community_post_entity_1 = require("../entities/community-post.entity");
const message_entity_1 = require("../entities/message.entity");
const enrollment_entity_1 = require("../entities/enrollment.entity");
const class_schedule_entity_1 = require("../entities/class-schedule.entity");
const auth_module_1 = require("../auth/auth.module");
let TutorModule = class TutorModule {
};
exports.TutorModule = TutorModule;
exports.TutorModule = TutorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, course_class_entity_1.CourseClass, assignment_entity_1.Assignment, transaction_entity_1.Transaction, course_entity_1.Course, community_post_entity_1.CommunityPost, message_entity_1.Message, enrollment_entity_1.Enrollment, class_schedule_entity_1.ClassSchedule]),
            auth_module_1.AuthModule,
        ],
        controllers: [tutor_controller_1.TutorController],
        providers: [tutor_service_1.TutorService],
    })
], TutorModule);
//# sourceMappingURL=tutor.module.js.map