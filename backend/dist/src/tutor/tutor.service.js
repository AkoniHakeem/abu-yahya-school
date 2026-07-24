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
exports.TutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const course_class_entity_1 = require("../entities/course-class.entity");
const assignment_entity_1 = require("../entities/assignment.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const course_entity_1 = require("../entities/course.entity");
const class_schedule_entity_1 = require("../entities/class-schedule.entity");
let TutorService = class TutorService {
    constructor(userRepository, classRepository, assignmentRepository, transactionRepository, courseRepository, scheduleRepository) {
        this.userRepository = userRepository;
        this.classRepository = classRepository;
        this.assignmentRepository = assignmentRepository;
        this.transactionRepository = transactionRepository;
        this.courseRepository = courseRepository;
        this.scheduleRepository = scheduleRepository;
    }
    async getDashboardStats() {
        const schedules = await this.scheduleRepository.find({
            relations: ['class', 'class.tutor', 'class.course'],
        });
        const today = new Date().toISOString().split('T')[0];
        const upcoming = schedules.filter(s => !s.date || s.date >= today);
        upcoming.sort((a, b) => {
            const dateA = a.date || today;
            const dateB = b.date || today;
            if (dateA !== dateB)
                return dateA.localeCompare(dateB);
            return a.time.localeCompare(b.time);
        });
        const todaysClasses = upcoming.slice(0, 5);
        const pendingGradingCount = await this.assignmentRepository.count({
            where: { grade: (0, typeorm_2.IsNull)() },
        });
        const studentCount = await this.userRepository.count({
            where: { role: 'student' },
        });
        return {
            todaysClasses: todaysClasses.map((s) => ({
                id: s.id,
                title: s.class?.title || (s.class?.course ? s.class.course.title : 'Unknown Course'),
                date: s.date || undefined,
                time: s.time,
                type: s.class?.type || 'Live Class',
                studentCount: s.studentCount,
                tutorName: s.class?.tutor ? `${s.class.tutor.firstName || ''} ${s.class.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
                classLink: s.classLink,
            })),
            pendingGradingCount,
            studentCount,
        };
    }
    async getClasses() {
        const schedules = await this.scheduleRepository.find({
            relations: ['class', 'class.tutor', 'class.course'],
        });
        schedules.sort((a, b) => {
            const dateA = a.date || '';
            const dateB = b.date || '';
            if (dateA !== dateB)
                return dateA.localeCompare(dateB);
            return a.time.localeCompare(b.time);
        });
        return schedules.map((s) => ({
            id: s.id,
            title: s.class?.title || (s.class?.course ? s.class.course.title : 'Unknown Course'),
            date: s.date || s.createdAt.toISOString().split('T')[0],
            time: s.time,
            type: s.class?.type || 'Live Class',
            tutor: s.class?.tutor ? `${s.class.tutor.firstName || ''} ${s.class.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
            classLink: s.classLink,
        }));
    }
    async getAssignedClasses() {
        const classes = await this.classRepository.find({
            relations: ['course', 'tutor'],
        });
        return classes.map(c => ({
            id: c.id,
            title: c.course ? c.course.title : c.title || 'Unknown Course',
            type: c.type,
        }));
    }
    async createClass(data) {
        let savedClass;
        if (data.classId) {
            savedClass = await this.classRepository.findOne({ where: { id: data.classId } });
            if (!savedClass)
                throw new Error('Class not found');
        }
        else {
            let tutor = null;
            let course = null;
            if (data.tutorId) {
                tutor = await this.userRepository.findOne({ where: { id: data.tutorId } });
            }
            if (data.courseTitle) {
                course = await this.courseRepository.findOne({ where: { title: data.courseTitle } });
            }
            const newClass = this.classRepository.create({
                title: data.title,
                type: data.type || 'Live Class',
                course: course || undefined,
                tutor: tutor || undefined,
            });
            savedClass = await this.classRepository.save(newClass);
        }
        if (data.date && data.time) {
            const schedule = this.scheduleRepository.create({
                class: savedClass,
                date: data.date,
                time: data.time,
                studentCount: data.studentCount || 0,
                classLink: data.classLink,
            });
            await this.scheduleRepository.save(schedule);
        }
        return savedClass;
    }
    async getAssignments() {
        const assignments = await this.assignmentRepository.find({
            where: { grade: (0, typeorm_2.IsNull)() },
            relations: ['student', 'course'],
            order: { submittedAt: 'DESC' },
        });
        return assignments.map((a) => ({
            id: a.id,
            studentId: a.student ? a.student.id : a.studentId,
            studentName: a.student ? `${a.student.firstName || ''} ${a.student.lastName || ''}`.trim() : 'Unknown Student',
            studentAvatar: a.student?.avatar || '/avatars/default.png',
            course: a.course ? a.course.title : 'Unknown Course',
            title: a.title,
            submittedAt: a.submittedAt ? a.submittedAt.toISOString() : a.createdAt.toISOString(),
            previousGrade: a.previousGrade,
            avgPerformance: a.avgPerformance,
            documentUrl: a.documentUrl,
        }));
    }
    async gradeAssignment(assignmentId, score, feedback) {
        const assignment = await this.assignmentRepository.findOne({
            where: { id: assignmentId },
            relations: ['student'],
        });
        if (!assignment)
            return null;
        assignment.grade = score;
        assignment.feedback = feedback;
        assignment.status = 'graded';
        return this.assignmentRepository.save(assignment);
    }
    async getStudents(tutorId) {
        const students = await this.userRepository.createQueryBuilder('student')
            .innerJoin('student.enrollments', 'enrollment')
            .innerJoin('enrollment.course', 'course')
            .innerJoin('course.classes', 'courseClass')
            .where('student.role = :role', { role: 'student' })
            .andWhere('courseClass.tutorId = :tutorId', { tutorId })
            .orderBy('student.firstName', 'ASC')
            .getMany();
        return students.map(student => ({
            ...student,
            name: `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Unknown'
        }));
    }
    async getEarnings() {
        const totalBalanceResult = await this.transactionRepository
            .createQueryBuilder('tx')
            .select('SUM(tx.amount)', 'total')
            .where('tx.status = :status', { status: 'Completed' })
            .getRawOne();
        const totalBalance = (Number(totalBalanceResult?.total) || 0) * 0.5;
        const availablePayout = totalBalance * 0.8;
        const nextPayoutDate = new Date();
        nextPayoutDate.setDate(15);
        const transactions = await this.transactionRepository.find({
            relations: ['student', 'subscriptionPlan'],
            order: { createdAt: 'DESC' },
            take: 10,
        });
        return {
            totalBalance,
            availablePayout,
            nextPayoutDate: nextPayoutDate.toISOString(),
            transactions: transactions.map((tx) => ({
                id: tx.id,
                date: tx.createdAt.toISOString(),
                description: `Payment for ${tx.subscriptionPlan ? tx.subscriptionPlan.name : 'Unknown Plan'}`,
                student: tx.student ? `${tx.student.firstName || ''} ${tx.student.lastName || ''}`.trim() : 'Unknown Student',
                status: tx.status,
                amount: tx.amount,
            })),
        };
    }
    async getCommunityPosts() {
        return [
            {
                id: 'POST-1',
                title: 'Welcome to the new term!',
                content: 'Please ensure you check your schedules regularly for any updates.',
                author: 'System Admin',
                date: new Date().toISOString(),
            }
        ];
    }
    async getSettings(userId) {
        const tutor = await this.userRepository.findOne({ where: { id: userId } });
        return {
            profileData: {
                name: tutor ? `${tutor.firstName || ''} ${tutor.lastName || ''}`.trim() : 'Unknown User',
                firstName: tutor?.firstName || '',
                lastName: tutor?.lastName || '',
                middle: tutor?.middle || '',
                email: tutor?.email || '',
                timezone: 'UTC+1',
                avatar: tutor?.avatar || '/avatars/default.png',
            },
            preferences: {
                notifications: true,
            },
        };
    }
    async updateSettings(userId, data) {
        const tutor = await this.userRepository.findOne({ where: { id: userId } });
        if (tutor) {
            if (data.firstName)
                tutor.firstName = data.firstName;
            if (data.lastName)
                tutor.lastName = data.lastName;
            if (data.middle)
                tutor.middle = data.middle;
            if (data.password) {
                const bcrypt = require('bcrypt');
                tutor.password = await bcrypt.hash(data.password, 10);
            }
            if (data.avatar)
                tutor.avatar = data.avatar;
            await this.userRepository.save(tutor);
        }
        return this.getSettings(userId);
    }
};
exports.TutorService = TutorService;
exports.TutorService = TutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(course_class_entity_1.CourseClass)),
    __param(2, (0, typeorm_1.InjectRepository)(assignment_entity_1.Assignment)),
    __param(3, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __param(4, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(5, (0, typeorm_1.InjectRepository)(class_schedule_entity_1.ClassSchedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TutorService);
//# sourceMappingURL=tutor.service.js.map