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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const course_class_entity_1 = require("../entities/course-class.entity");
const assignment_entity_1 = require("../entities/assignment.entity");
const transaction_entity_1 = require("../entities/transaction.entity");
const course_entity_1 = require("../entities/course.entity");
const community_post_entity_1 = require("../entities/community-post.entity");
const message_entity_1 = require("../entities/message.entity");
const class_schedule_entity_1 = require("../entities/class-schedule.entity");
let StudentService = class StudentService {
    constructor(userRepository, classRepository, assignmentRepository, transactionRepository, courseRepository, communityRepository, messageRepository, scheduleRepository) {
        this.userRepository = userRepository;
        this.classRepository = classRepository;
        this.assignmentRepository = assignmentRepository;
        this.transactionRepository = transactionRepository;
        this.courseRepository = courseRepository;
        this.communityRepository = communityRepository;
        this.messageRepository = messageRepository;
        this.scheduleRepository = scheduleRepository;
    }
    async getDashboardStats(studentId) {
        let student = null;
        if (studentId) {
            student = await this.userRepository.findOne({ where: { id: studentId }, relations: ['subscriptionPlan'] });
        }
        else {
            student = await this.userRepository.findOne({ where: { role: 'student' }, relations: ['subscriptionPlan'] });
        }
        const studentName = student ? `${student.firstName || ''} ${student.lastName || ''}`.trim() : 'Zaid Ibn Thabit';
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
        const nextSchedule = upcoming.length > 0 ? upcoming[0] : null;
        const upcomingClass = nextSchedule
            ? {
                id: nextSchedule.class?.id || 'unknown',
                courseTitle: nextSchedule.class?.course ? nextSchedule.class.course.title : nextSchedule.class?.title || 'Unknown Course',
                title: nextSchedule.class?.course ? nextSchedule.class.course.title : nextSchedule.class?.title || 'Unknown Course',
                tutor: nextSchedule.class?.tutor ? `${nextSchedule.class.tutor.firstName || ''} ${nextSchedule.class.tutor.lastName || ''}`.trim() : 'Ustadh Mahmoud',
                date: nextSchedule.date ? new Date(`${nextSchedule.date}T${nextSchedule.time || '00:00:00'}`).toISOString() : new Date().toISOString(),
                duration: '45 mins',
                meetingLink: nextSchedule.classLink || 'https://meet.google.com/abc-defg-hij',
            }
            : null;
        const activeCoursesCount = await this.courseRepository.count();
        const completedCoursesCount = 2;
        const recentAssignments = await this.assignmentRepository.find({
            where: { student: { id: student?.id } },
            order: { updatedAt: 'DESC' },
            take: 5
        });
        const recentActivity = recentAssignments.map(a => ({
            id: a.id,
            type: 'grade',
            title: a.grade ? 'Assignment Graded' : 'Assignment Submitted',
            description: a.grade ? `Received ${a.grade}/100 on ${a.title}` : `Submitted ${a.title}`,
            timestamp: a.updatedAt ? a.updatedAt.toISOString() : new Date().toISOString(),
            icon: 'check_circle',
        }));
        return {
            profile: {
                name: studentName,
            },
            upcomingClass,
            recentActivity,
            progressStats: {
                overall: student ? student.progress : 0,
                coursesCompleted: completedCoursesCount || 0,
                activeCourses: activeCoursesCount || 0,
            },
            activePlan: student?.subscriptionPlan ? {
                name: student.subscriptionPlan.name,
                status: 'Active',
                nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            } : null,
        };
    }
    async getCourses(studentId) {
        const query = {
            relations: ['enrollments', 'enrollments.student', 'lessons', 'media', 'classes', 'classes.tutor'],
        };
        let courses = await this.courseRepository.find(query);
        courses = courses.filter(c => c.enrollments?.some(e => e.student?.id === studentId));
        const mappedCourses = courses.map((c) => {
            const enrollment = c.enrollments?.find(e => e.student?.id === studentId) || null;
            const mimetypes = ['video', 'pdf', 'audio',];
            const recordings = c.media?.map(m => ({
                id: m.id,
                title: mimetypes.includes(m.type) ? m.type : 'Document',
                url: m.url,
                type: m.type,
                duration: 'N/A'
            })) || [];
            const tutorName = c.classes && c.classes.length > 0 && c.classes[0].tutor
                ? `${c.classes[0].tutor.firstName || ''} ${c.classes[0].tutor.lastName || ''}`.trim()
                : 'Assigned Tutor';
            return {
                id: c.id,
                title: c.title,
                tutor: tutorName,
                progress: enrollment ? enrollment.progress : 0,
                thumbnail: 'menu_book',
                status: enrollment ? enrollment.status : 'not_enrolled',
                isLocked: false,
                lessons: c.lessons || [],
                recordings: recordings,
            };
        });
        if (studentId) {
            return mappedCourses.filter(c => c.status !== 'not_enrolled');
        }
        return mappedCourses;
    }
    async getSchedule(studentId) {
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
            courseTitle: s.class?.course ? s.class.course.title : s.class?.title || 'Unknown Course',
            tutor: s.class?.tutor ? `${s.class.tutor.firstName || ''} ${s.class.tutor.lastName || ''}`.trim() : 'Unassigned Tutor',
            date: s.date ? new Date(`${s.date}T${s.time || '00:00:00'}`).toISOString() : new Date().toISOString(),
            duration: '45 mins',
            meetingLink: s.classLink || 'https://meet.google.com/abc-defg-hij',
            sessionType: s.class?.type || 'Live Class',
        }));
    }
    async getAssignments(studentId) {
        const assignments = await this.assignmentRepository.find({
            where: studentId ? { student: { id: studentId } } : {},
            relations: ['student', 'course'],
            order: { createdAt: 'DESC' },
        });
        if (assignments.length > 0) {
            return assignments.map((a) => ({
                id: a.id,
                courseTitle: a.course ? a.course.title : 'Unknown Course',
                title: a.title,
                dueDate: a.dueDate ? a.dueDate.toISOString() : new Date().toISOString(),
                status: a.status || (a.grade !== null ? 'graded' : a.submittedAt ? 'submitted' : 'pending'),
                grade: a.grade,
                feedback: a.feedback,
                attachedFiles: a.attachedFiles || [
                    { name: 'Assignment_Prompt.pdf', size: '1.2 MB', url: '#' },
                ],
            }));
        }
        return [
            {
                id: 'ASN-1',
                courseTitle: 'Tajweed Mastery: Level 1',
                title: 'Surah Al-Baqarah Verses 1-10 Audio Recording',
                dueDate: new Date(Date.now() + 86400000 * 3).toISOString(),
                status: 'pending',
                grade: null,
                feedback: null,
                attachedFiles: [
                    { name: 'Recitation_Guide.pdf', size: '850 KB', url: '#' },
                ],
            },
            {
                id: 'ASN-2',
                courseTitle: 'Modern Standard Arabic',
                title: 'Vocabulary & Grammar Quiz 1',
                dueDate: new Date(Date.now() - 86400000 * 2).toISOString(),
                status: 'graded',
                grade: 95,
                feedback: 'Excellent pronunciation and accuracy! Keep up the good work.',
                attachedFiles: [
                    { name: 'Quiz_Submission.pdf', size: '500 KB', url: '#' },
                ],
            },
        ];
    }
    async submitAssignment(studentId, body) {
        let assignment = await this.assignmentRepository.findOne({
            where: { id: body.assignmentId },
            relations: ['student'],
        });
        if (!assignment) {
            const studentUser = await this.userRepository.findOne({ where: { id: studentId } });
            assignment = this.assignmentRepository.create({
                id: body.assignmentId,
                student: studentUser || undefined,
                title: 'Assignment Submission',
            });
        }
        assignment.submittedAt = new Date();
        assignment.status = 'submitted';
        if (body.fileUrl)
            assignment.documentUrl = body.fileUrl;
        if (body.comments)
            assignment.comments = body.comments;
        await this.assignmentRepository.save(assignment);
        return { success: true, message: 'Assignment submitted successfully', assignment };
    }
    async getBilling(studentId) {
        const student = await this.userRepository.findOne({ where: { id: studentId }, relations: ['subscriptionPlan'] });
        const transactions = await this.transactionRepository.find({
            where: studentId ? { student: { id: studentId } } : {},
            relations: ['student'],
            order: { createdAt: 'DESC' },
            take: 5,
        });
        return {
            currentPlan: {
                name: student?.subscriptionPlan ? student.subscriptionPlan.name : 'Standard Plan',
                price: student?.subscriptionPlan ? student.subscriptionPlan.price : 49,
                interval: student?.subscriptionPlan ? student.subscriptionPlan.interval : 'monthly',
                status: 'Active',
                nextBillingDate: '2026-08-15',
            },
            paymentMethod: {
                type: 'Visa',
                last4: '4242',
                expiry: '08/28',
            },
            invoices: transactions.length > 0
                ? transactions.map((t) => ({
                    id: t.id,
                    date: t.createdAt.toISOString(),
                    amount: t.amount,
                    status: t.status,
                }))
                : [
                    { id: 'INV-2026-001', date: '2026-07-01', amount: 49.00, status: 'Paid' },
                    { id: 'INV-2026-002', date: '2026-06-01', amount: 49.00, status: 'Paid' },
                ],
        };
    }
    async getCommunity(studentId) {
        const posts = await this.communityRepository.find({ relations: ['author'], order: { date: 'DESC' } });
        if (posts.length > 0) {
            return posts.map(p => ({
                id: p.id,
                author: p.author ? `${p.author.firstName || ''} ${p.author.lastName || ''}`.trim() : 'Unknown Author',
                title: p.title,
                content: p.content,
                date: p.date.toISOString(),
            }));
        }
        return [
            {
                id: 'POST-1',
                author: 'Ustadh Mahmoud',
                title: 'Weekly Quran Memorization Circle',
                content: 'Assalamu alaikum students! Join us this Friday after Maghrib for our weekly group memorization and revision circle.',
                date: new Date(Date.now() - 3600000 * 4).toISOString(),
            },
            {
                id: 'POST-2',
                author: 'Admin Team',
                title: 'Platform Maintenance Scheduled',
                content: 'System updates will be performed on Sunday at 02:00 UTC. Expected downtime: 15 minutes.',
                date: new Date(Date.now() - 86400000 * 2).toISOString(),
            },
        ];
    }
    async getMessages(studentId) {
        const messages = await this.messageRepository.find({
            where: studentId ? [{ recipient: { id: studentId } }, { sender: { id: studentId } }] : {},
            relations: ['sender', 'recipient'],
            order: { date: 'DESC' },
        });
        if (messages.length > 0) {
            return messages.map((m) => ({
                id: m.id,
                sender: m.sender ? `${m.sender.firstName || ''} ${m.sender.lastName || ''}`.trim() : 'Ustadh Mahmoud',
                avatar: m.sender ? m.sender.avatar : '/avatars/mahmoud.png',
                subject: m.subject,
                preview: m.preview,
                date: m.date.toISOString(),
                isRead: m.isRead,
            }));
        }
        return [
            {
                id: 'MSG-1',
                sender: 'Ustadh Mahmoud',
                avatar: '/avatars/mahmoud.png',
                subject: 'Feedback on Recent Assignment',
                preview: 'Assalamu Alaikum Zaid, I reviewed your recitation recording. MashaAllah your noon sakinah rules are very precise...',
                date: new Date(Date.now() - 3600000 * 2).toISOString(),
                isRead: false,
            },
            {
                id: 'MSG-2',
                sender: 'Abu-Yahya Support',
                avatar: '/avatars/support.png',
                subject: 'Welcome to Abu-Yahya School',
                preview: 'Welcome to your learning journey! Feel free to reach out if you have any questions about your courses or schedule.',
                date: new Date(Date.now() - 86400000 * 5).toISOString(),
                isRead: true,
            },
        ];
    }
    async getSettings(userId) {
        const student = await this.userRepository.findOne({ where: { id: userId } });
        return {
            profileData: {
                name: student ? `${student.firstName || ''} ${student.lastName || ''}`.trim() : 'Unknown User',
                firstName: student?.firstName || '',
                lastName: student?.lastName || '',
                middle: student?.middle || '',
                email: student?.email || '',
                timezone: 'UTC+1',
                avatar: student?.avatar || '/avatars/default.png',
            },
            preferences: {
                notifications: true,
            },
        };
    }
    async updateSettings(userId, data) {
        const student = await this.userRepository.findOne({ where: { id: userId } });
        if (student) {
            if (data.firstName)
                student.firstName = data.firstName;
            if (data.lastName)
                student.lastName = data.lastName;
            if (data.middle)
                student.middle = data.middle;
            if (data.password) {
                const bcrypt = require('bcrypt');
                student.password = await bcrypt.hash(data.password, 10);
            }
            if (data.avatar)
                student.avatar = data.avatar;
            await this.userRepository.save(student);
        }
        return this.getSettings(userId);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(course_class_entity_1.CourseClass)),
    __param(2, (0, typeorm_1.InjectRepository)(assignment_entity_1.Assignment)),
    __param(3, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __param(4, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(5, (0, typeorm_1.InjectRepository)(community_post_entity_1.CommunityPost)),
    __param(6, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __param(7, (0, typeorm_1.InjectRepository)(class_schedule_entity_1.ClassSchedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map