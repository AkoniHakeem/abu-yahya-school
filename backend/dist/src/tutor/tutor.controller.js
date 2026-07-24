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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const tutor_service_1 = require("./tutor.service");
let TutorController = class TutorController {
    constructor(tutorService) {
        this.tutorService = tutorService;
    }
    getDashboardStats() {
        return this.tutorService.getDashboardStats();
    }
    getClasses() {
        return this.tutorService.getClasses();
    }
    getAssignedClasses() {
        return this.tutorService.getAssignedClasses();
    }
    createClass(classData) {
        return this.tutorService.createClass(classData);
    }
    getAssignments() {
        return this.tutorService.getAssignments();
    }
    gradeAssignment(body) {
        return this.tutorService.gradeAssignment(body.assignmentId, body.score, body.feedback);
    }
    getStudents(req) {
        return this.tutorService.getStudents(req.user.sub);
    }
    getEarnings() {
        return this.tutorService.getEarnings();
    }
    getCommunityPosts() {
        return this.tutorService.getCommunityPosts();
    }
    getSettings(req) {
        return this.tutorService.getSettings(req.user.sub);
    }
    updateSettings(req, body) {
        return this.tutorService.updateSettings(req.user.sub, body);
    }
};
exports.TutorController = TutorController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.Get)('classes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Get)('assigned-classes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getAssignedClasses", null);
__decorate([
    (0, common_1.Post)('classes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "createClass", null);
__decorate([
    (0, common_1.Get)('assignments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getAssignments", null);
__decorate([
    (0, common_1.Post)('assignments/grade'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "gradeAssignment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('students'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)('earnings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getEarnings", null);
__decorate([
    (0, common_1.Get)('community'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getCommunityPosts", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('settings'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "getSettings", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('settings'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TutorController.prototype, "updateSettings", null);
exports.TutorController = TutorController = __decorate([
    (0, common_1.Controller)('api/tutor'),
    __metadata("design:paramtypes", [tutor_service_1.TutorService])
], TutorController);
//# sourceMappingURL=tutor.controller.js.map