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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseClass = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const course_entity_1 = require("./course.entity");
const class_schedule_entity_1 = require("./class-schedule.entity");
let CourseClass = class CourseClass {
};
exports.CourseClass = CourseClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CourseClass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.classes),
    __metadata("design:type", course_entity_1.Course)
], CourseClass.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseClass.prototype, "tutorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.taughtClasses, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tutorId' }),
    __metadata("design:type", user_entity_1.User)
], CourseClass.prototype, "tutor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseClass.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Live Class' }),
    __metadata("design:type", String)
], CourseClass.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_schedule_entity_1.ClassSchedule, (schedule) => schedule.class, { cascade: true }),
    __metadata("design:type", Array)
], CourseClass.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CourseClass.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CourseClass.prototype, "updatedAt", void 0);
exports.CourseClass = CourseClass = __decorate([
    (0, typeorm_1.Entity)('course_classes')
], CourseClass);
//# sourceMappingURL=course-class.entity.js.map