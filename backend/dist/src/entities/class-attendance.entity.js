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
exports.ClassAttendance = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const class_schedule_entity_1 = require("./class-schedule.entity");
let ClassAttendance = class ClassAttendance {
};
exports.ClassAttendance = ClassAttendance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClassAttendance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['present', 'absent', 'excused'], default: 'present' }),
    __metadata("design:type", String)
], ClassAttendance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClassAttendance.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], ClassAttendance.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_schedule_entity_1.ClassSchedule, (schedule) => schedule.attendances),
    __metadata("design:type", class_schedule_entity_1.ClassSchedule)
], ClassAttendance.prototype, "classSession", void 0);
exports.ClassAttendance = ClassAttendance = __decorate([
    (0, typeorm_1.Entity)('class_attendances')
], ClassAttendance);
//# sourceMappingURL=class-attendance.entity.js.map