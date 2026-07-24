"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const user_entity_1 = require("../entities/user.entity");
const course_class_entity_1 = require("../entities/course-class.entity");
const support_ticket_entity_1 = require("../entities/support-ticket.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const course_entity_1 = require("../entities/course.entity");
const course_media_entity_1 = require("../entities/course-media.entity");
const enrollment_entity_1 = require("../entities/enrollment.entity");
const ticket_reply_entity_1 = require("../entities/ticket-reply.entity");
const subscription_plan_entity_1 = require("../entities/subscription-plan.entity");
const auth_module_1 = require("../auth/auth.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, course_class_entity_1.CourseClass, support_ticket_entity_1.SupportTicket, transaction_entity_1.Transaction, course_entity_1.Course, course_media_entity_1.CourseMedia, enrollment_entity_1.Enrollment, ticket_reply_entity_1.TicketReply, subscription_plan_entity_1.SubscriptionPlan]),
            auth_module_1.AuthModule,
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map