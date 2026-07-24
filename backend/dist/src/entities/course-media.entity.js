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
exports.CourseMedia = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("./course.entity");
let CourseMedia = class CourseMedia {
};
exports.CourseMedia = CourseMedia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CourseMedia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMedia.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['video', 'audio', 'pdf'], default: 'video' }),
    __metadata("design:type", String)
], CourseMedia.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.media, { onDelete: 'CASCADE' }),
    __metadata("design:type", course_entity_1.Course)
], CourseMedia.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CourseMedia.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CourseMedia.prototype, "updatedAt", void 0);
exports.CourseMedia = CourseMedia = __decorate([
    (0, typeorm_1.Entity)('course_media')
], CourseMedia);
//# sourceMappingURL=course-media.entity.js.map