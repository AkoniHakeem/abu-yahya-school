module.exports = [
"[project]/src/lib/mock-data/student.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file contains comprehensive mock data for the Student Profile to simulate a real database.
__turbopack_context__.s([
    "assignments",
    ()=>assignments,
    "billingData",
    ()=>billingData,
    "enrolledCourses",
    ()=>enrolledCourses,
    "messages",
    ()=>messages,
    "recentActivity",
    ()=>recentActivity,
    "studentProfile",
    ()=>studentProfile,
    "upcomingSchedule",
    ()=>upcomingSchedule
]);
const studentProfile = {
    id: "STU-9482",
    name: "Abu Yahya",
    email: "student@abu-yahya.com",
    level: "Arabic Level 2",
    joinedDate: "2025-01-15T00:00:00Z",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ",
    timezone: "UTC+1 (West Africa Time)",
    overallProgress: 68
};
const enrolledCourses = [
    {
        id: "CRS-101",
        title: "Arabic Grammar (Nahw) - Beginner",
        tutor: "Ustadh Omar",
        progress: 75,
        thumbnail: "menu_book",
        nextLesson: "Nouns and their Types",
        totalLessons: 4,
        completedLessons: 3,
        status: "active",
        lessons: [
            {
                id: "L1",
                title: "Introduction to Nahw",
                duration: "10 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L2",
                title: "The Arabic Alphabet",
                duration: "15 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L3",
                title: "Parts of Speech",
                duration: "20 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L4",
                title: "Nouns and their Types",
                duration: "25 mins",
                isCompleted: false,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
                isLockedByTutor: true,
                lockMessage: "Please wait for Ustadh Omar to grade your previous assignment before proceeding."
            }
        ]
    },
    {
        id: "CRS-102",
        title: "Quranic Recitation (Tajweed)",
        tutor: "Sheikh Abdullah",
        progress: 33,
        thumbnail: "auto_stories",
        nextLesson: "Rules of Noon Sakinah",
        totalLessons: 3,
        completedLessons: 1,
        status: "active",
        lessons: [
            {
                id: "L1",
                title: "Introduction to Tajweed",
                duration: "12 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L2",
                title: "Rules of Noon Sakinah",
                duration: "18 mins",
                isCompleted: false,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L3",
                title: "Rules of Meem Sakinah",
                duration: "22 mins",
                isCompleted: false,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            }
        ]
    },
    {
        id: "CRS-103",
        title: "Conversational Arabic",
        tutor: "Ustadha Fatima",
        progress: 100,
        thumbnail: "forum",
        nextLesson: null,
        totalLessons: 2,
        completedLessons: 2,
        status: "completed",
        lessons: [
            {
                id: "L1",
                title: "Greetings and Introductions",
                duration: "15 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            },
            {
                id: "L2",
                title: "At the Marketplace",
                duration: "20 mins",
                isCompleted: true,
                videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"
            }
        ]
    }
];
const upcomingSchedule = [
    {
        id: "SCH-001",
        courseId: "CRS-101",
        courseTitle: "Arabic Grammar (Nahw)",
        tutor: "Ustadh Omar",
        date: new Date(Date.now() + 86400000).toISOString(),
        duration: "60 mins",
        meetingLink: "https://zoom.us/j/mocklink123"
    },
    {
        id: "SCH-002",
        courseId: "CRS-102",
        courseTitle: "Quranic Recitation (Tajweed)",
        tutor: "Sheikh Abdullah",
        date: new Date(Date.now() + 172800000).toISOString(),
        duration: "45 mins",
        meetingLink: "https://zoom.us/j/mocklink456"
    }
];
const assignments = [
    {
        id: "ASS-001",
        courseId: "CRS-101",
        courseTitle: "Arabic Grammar (Nahw)",
        title: "Identify Nouns in Surah Al-Fatiha",
        dueDate: new Date(Date.now() + 259200000).toISOString(),
        status: "pending",
        grade: null,
        feedback: null
    },
    {
        id: "ASS-002",
        courseId: "CRS-102",
        courseTitle: "Quranic Recitation (Tajweed)",
        title: "Record Recitation of Surah Al-Ikhlas",
        dueDate: new Date(Date.now() - 86400000).toISOString(),
        status: "submitted",
        grade: null,
        feedback: null
    },
    {
        id: "ASS-003",
        courseId: "CRS-101",
        courseTitle: "Arabic Grammar (Nahw)",
        title: "Conjugation of Past Tense Verbs",
        dueDate: new Date(Date.now() - 604800000).toISOString(),
        status: "graded",
        grade: "A-",
        feedback: "Excellent work. Just be careful with the dual feminine form."
    }
];
const recentActivity = [
    {
        id: "ACT-001",
        type: "grade",
        title: "Assignment Graded",
        description: "Ustadh Omar graded your assignment 'Conjugation of Past Tense Verbs'",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        icon: "grading"
    },
    {
        id: "ACT-002",
        type: "message",
        title: "New Message",
        description: "Sheikh Abdullah sent you a message regarding your Tajweed progress.",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        icon: "mail"
    },
    {
        id: "ACT-003",
        type: "course",
        title: "Lesson Completed",
        description: "You completed 'Introduction to Verbs' in Arabic Grammar.",
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        icon: "check_circle"
    }
];
const messages = [
    {
        id: "MSG-001",
        sender: "Sheikh Abdullah",
        avatar: "https://ui-avatars.com/api/?name=Sheikh+Abdullah&background=0D8BD9&color=fff",
        subject: "Tajweed Progress",
        preview: "MashaAllah, your recitation of Surah Al-Asr was much improved.",
        date: new Date(Date.now() - 86400000).toISOString(),
        isRead: false
    },
    {
        id: "MSG-002",
        sender: "Admin Support",
        avatar: "https://ui-avatars.com/api/?name=Admin+Support&background=E5B824&color=fff",
        subject: "Subscription Renewal Successful",
        preview: "Your monthly subscription has been successfully renewed.",
        date: new Date(Date.now() - 604800000).toISOString(),
        isRead: true
    }
];
const billingData = {
    currentPlan: {
        name: "Standard Learning Plan",
        price: 49.99,
        interval: "month",
        status: "Active",
        nextBillingDate: new Date(Date.now() + 1296000000).toISOString() // ~15 days
    },
    paymentMethod: {
        type: "Visa",
        last4: "4242",
        expiry: "12/26"
    },
    invoices: [
        {
            id: "INV-2026-003",
            date: new Date(Date.now() - 1296000000).toISOString(),
            amount: 49.99,
            status: "Paid"
        },
        {
            id: "INV-2026-002",
            date: new Date(Date.now() - 3888000000).toISOString(),
            amount: 49.99,
            status: "Paid"
        },
        {
            id: "INV-2026-001",
            date: new Date(Date.now() - 6480000000).toISOString(),
            amount: 49.99,
            status: "Paid"
        }
    ]
};
}),
"[project]/src/lib/mock-api/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDB",
    ()=>getDB,
    "resetDB",
    ()=>resetDB,
    "saveDB",
    ()=>saveDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-ssr] (ecmascript)");
;
// Initial Seed Data
const initialData = {
    users: [
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentProfile"],
            role: 'student',
            plan: 'Standard Plan',
            progress: 68,
            attendance: 92
        },
        {
            id: 'STU-1122',
            name: 'Aisha Rahman',
            email: 'aisha@student.edu',
            role: 'student',
            plan: 'Premium Plan',
            progress: 92,
            attendance: 100,
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnIyvgPlXXqieP8TQweofZbhXXQ1KismfH5mm_lOxRVRe79UDDLlo-UQCpz31lRrjA85UpoVniC89JXbi2OajCqVm_NOYIv0w1W19v8XkpPn1safUZhByeSIygDQxJTC4xvpE9TxZB3CeYZBySWbWsN5ay_a-aY_vMtdXVM0aIjyqNTiKZIOsddnrKeB3s-MQZe68eLRhOvGIRyqSJYDhyV3X2C4-yFA-h3lut8JD7hpqzZZwrxxPh'
        },
        {
            id: 'TUT-001',
            name: 'Sheikh Abdullah',
            email: 'abdullah@tutor.edu',
            role: 'tutor',
            avatar: ''
        },
        {
            id: 'TUT-002',
            name: 'Ustadh Omar',
            email: 'omar@tutor.edu',
            role: 'tutor',
            avatar: ''
        },
        {
            id: 'TUT-003',
            name: 'Ustadha Fatima',
            email: 'fatima@tutor.edu',
            role: 'tutor',
            avatar: ''
        },
        {
            id: 'ADM-001',
            name: 'Super Admin',
            email: 'admin@abu-yahya.com',
            role: 'admin',
            avatar: ''
        }
    ],
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enrolledCourses"],
    classes: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upcomingSchedule"].map((s)=>({
                ...s,
                type: 'Live Class'
            })),
        {
            id: 'cls1',
            courseTitle: 'Arabic Grammar (Nahw)',
            time: '10:00 AM',
            date: new Date().toISOString(),
            type: 'Live Class',
            tutor: 'Ustadh Omar',
            studentCount: 15
        },
        {
            id: 'cls2',
            courseTitle: '1-on-1 Tajweed',
            time: '2:00 PM',
            date: new Date().toISOString(),
            type: '1-on-1 Lesson',
            tutor: 'Sheikh Abdullah',
            studentName: 'Abu Yahya'
        }
    ],
    assignments: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignments"],
        {
            id: 'assign-1',
            studentId: 'STU-9482',
            studentName: 'Ahmed Al-Farsi',
            courseTitle: 'Tafseer Al-Jalalayn',
            title: 'Surah Al-Mulk Analysis',
            submittedAt: 'Oct 24, 2024 - 10:30 AM',
            previousGrade: 92,
            avgPerformance: 'Excellent',
            status: 'pending',
            documentUrl: 'assignment_submission_final.pdf'
        }
    ],
    tickets: [
        {
            ticketId: 'TCK-001',
            user: 'Abu Yahya',
            role: 'Student',
            issue: 'Billing question',
            status: 'Open'
        },
        {
            ticketId: 'TCK-002',
            user: 'Ustadh Omar',
            role: 'Tutor',
            issue: 'Cannot upload grades',
            status: 'In Progress'
        },
        {
            ticketId: 'TCK-003',
            user: 'Aisha Rahman',
            role: 'Student',
            issue: 'Video playback error',
            status: 'Resolved'
        }
    ],
    financials: {
        totalRevenue: 15400.00,
        mrr: 15400.00,
        activeSubscriptions: 294,
        pendingPayouts: 3200.00
    }
};
const DB_KEY = 'abu_yahya_mock_db';
// Helper to check if we are in browser
const isBrowser = "undefined" !== 'undefined';
const getDB = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return initialData;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
};
const saveDB = (data)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const resetDB = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
}),
"[project]/src/lib/mock-api/mock-data.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminClasses",
    ()=>getAdminClasses,
    "getAdminFinancials",
    ()=>getAdminFinancials,
    "getAdminReports",
    ()=>getAdminReports,
    "getAdminSettings",
    ()=>getAdminSettings,
    "getAdminTickets",
    ()=>getAdminTickets,
    "getAdminUsers",
    ()=>getAdminUsers,
    "getStudentAssignments",
    ()=>getStudentAssignments,
    "getStudentCommunity",
    ()=>getStudentCommunity,
    "getStudentCourses",
    ()=>getStudentCourses,
    "getStudentDashboard",
    ()=>getStudentDashboard,
    "getStudentMessages",
    ()=>getStudentMessages,
    "getStudentSchedule",
    ()=>getStudentSchedule,
    "getTutorAssignments",
    ()=>getTutorAssignments,
    "getTutorCommunity",
    ()=>getTutorCommunity,
    "getTutorDashboard",
    ()=>getTutorDashboard,
    "getTutorEarnings",
    ()=>getTutorEarnings,
    "getTutorMessages",
    ()=>getTutorMessages,
    "getTutorSettings",
    ()=>getTutorSettings,
    "getTutorStudents",
    ()=>getTutorStudents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-ssr] (ecmascript)");
;
;
;
const getStudentDashboard = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    const upcomingClass = db.classes.find((c)=>c.date > new Date().toISOString()) || db.classes[0] || null;
    return {
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentProfile"],
        upcomingClass,
        recentActivity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentActivity"],
        progressStats: {
            overall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentProfile"].overallProgress,
            coursesCompleted: 1,
            activeCourses: db.courses.length
        },
        activePlan: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingData"].currentPlan
    };
};
const getStudentCourses = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    const isPaid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingData"].currentPlan.status === 'Active';
    return db.courses.map((course)=>({
            ...course,
            isLocked: !isPaid,
            recordings: [
                {
                    id: 'rec1',
                    title: 'Lesson 1 Recording',
                    duration: '45 mins',
                    url: '#'
                },
                {
                    id: 'rec2',
                    title: 'Lesson 2 Recording',
                    duration: '46 mins',
                    url: '#'
                }
            ]
        }));
};
const getStudentSchedule = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingData"].currentPlan.name;
    return db.classes.map((schedule)=>{
        let sessionType = schedule.type || 'Standard Class';
        if (plan === 'Personal Plan') sessionType = '1-on-1 Lesson';
        if (plan === 'Premium Plan') sessionType = 'Mentoring / Live Revision';
        return {
            ...schedule,
            sessionType
        };
    });
};
const getStudentAssignments = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    return db.assignments.filter((a)=>a.studentId === 'STU-9482' || !a.studentId).map((assignment)=>({
            ...assignment,
            type: assignment.title.includes('Monthly') ? 'Monthly Assessment' : 'Standard Assignment',
            attachedFiles: [
                {
                    name: 'materials.pdf',
                    size: '2.4 MB',
                    url: '#'
                }
            ]
        }));
};
const getStudentMessages = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messages"];
const getStudentCommunity = ()=>[
        {
            id: 'post1',
            author: 'Sheikh Abdullah',
            title: 'Welcome!',
            content: 'Assalamu alaikum.',
            date: new Date().toISOString()
        }
    ];
const getTutorDashboard = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    return {
        todaysClasses: db.classes.slice(0, 2),
        pendingGradingCount: db.assignments.filter((a)=>a.status === 'pending').length,
        studentCount: db.users.filter((u)=>u.role === 'student').length
    };
};
const getTutorAssignments = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().assignments;
const getTutorStudents = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().users.filter((u)=>u.role === 'student');
const getTutorEarnings = ()=>({
        totalBalance: 570.00,
        availablePayout: 450.00,
        nextPayoutDate: new Date(Date.now() + 604800000).toISOString(),
        transactions: [
            {
                id: 'tx1',
                date: '2026-07-01',
                description: 'Standard Plan - July',
                student: 'Abu Yahya',
                status: 'Completed',
                amount: 40.00
            }
        ]
    });
const getTutorCommunity = ()=>getStudentCommunity();
const getTutorMessages = ()=>getStudentMessages();
const getTutorSettings = ()=>({
        profileData: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentProfile"],
            name: 'Tutor User',
            role: 'tutor'
        },
        preferences: {
            notifications: true
        }
    });
const getAdminFinancials = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().financials;
const getAdminReports = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
    return {
        activeUsers: db.users.length,
        newSignupsThisMonth: 42,
        completionRates: {
            'Arabic Grammar': 78,
            'Tajweed': 65,
            'Conversational Arabic': 92
        }
    };
};
const getAdminSettings = ()=>({
        globalConfig: {
            registrationEnabled: true,
            maintenanceMode: false,
            defaultCurrency: 'USD'
        },
        adminProfile: {
            name: 'Super Admin',
            email: 'admin@abu-yahya.com'
        }
    });
const getAdminTickets = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().tickets;
const getAdminUsers = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().users;
const getAdminClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])().classes;
}),
"[project]/src/lib/mock-api/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockApiRouter",
    ()=>mockApiRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-api/mock-data.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-ssr] (ecmascript)");
;
;
async function mockApiRouter(endpoint, method = 'GET', body) {
    const path = endpoint.split('?')[0];
    console.log(`[Mock API Intercepted] ${method} ${path}`);
    // --- STUDENT ROUTES ---
    if (path === '/api/student/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentDashboard"]();
    if (path === '/api/student/courses' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCourses"]();
    if (path === '/api/student/schedule' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentSchedule"]();
    if (path === '/api/student/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentAssignments"]();
    if (path === '/api/student/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentMessages"]();
    if (path === '/api/student/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCommunity"]();
    if (path.startsWith('/api/student/assignments/') && path.endsWith('/submit') && method === 'POST') {
        return {
            success: true,
            message: 'Assignment submitted successfully'
        };
    }
    if (path === '/api/student/settings' && method === 'GET') {
        return {
            profileData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentProfile"],
            preferences: {
                notifications: true
            }
        };
    }
    // --- TUTOR ROUTES ---
    if (path === '/api/tutor/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorDashboard"]();
    if (path === '/api/tutor/students' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorStudents"]();
    if (path === '/api/tutor/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorAssignments"]();
    if (path === '/api/tutor/assignments/grade' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
        const assignmentId = body?.assignmentId;
        db.assignments = db.assignments.filter((a)=>a.id !== assignmentId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Grade submitted successfully'
        };
    }
    if (path === '/api/tutor/schedule/class' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
        db.classes.push(body);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Class scheduled successfully'
        };
    }
    if (path === '/api/tutor/earnings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorEarnings"]();
    if (path === '/api/tutor/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorCommunity"]();
    if (path === '/api/tutor/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorMessages"]();
    if (path === '/api/tutor/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorSettings"]();
    // --- ADMIN ROUTES ---
    if (path === '/api/admin/financials' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminFinancials"]();
    if (path === '/api/admin/reports' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminReports"]();
    if (path === '/api/admin/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminSettings"]();
    if (path === '/api/admin/tickets' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminTickets"]();
    if (path === '/api/admin/users' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminUsers"]();
    if (path === '/api/admin/classes' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminClasses"]();
    if (path === '/api/admin/users' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
        const newUser = {
            id: `USR-${Date.now()}`,
            ...body,
            progress: 0,
            attendance: 100
        };
        db.users.push(newUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            user: newUser
        };
    }
    if (path === '/api/admin/classes' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
        const newClass = {
            id: `CLS-${Date.now()}`,
            ...body
        };
        db.classes.push(newClass);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            class: newClass
        };
    }
    if (path === '/api/admin/tickets/resolve' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
        const ticketId = body?.ticketId;
        const ticket = db.tickets.find((t)=>t.ticketId === ticketId);
        if (ticket) {
            ticket.status = 'Resolved';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDB"])(db);
        }
        return {
            success: true
        };
    }
    console.error(`[Mock API Error] Unhandled endpoint: ${method} ${path}`);
    throw new Error(`Mock API Error: Endpoint not found (${method} ${path})`);
}
}),
"[project]/src/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAPI",
    ()=>fetchAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/index.ts [app-ssr] (ecmascript)");
;
async function fetchAPI(endpoint, options = {}) {
    const useMockApi = ("TURBOPACK compile-time value", "false") === 'true';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // --- Real Backend Fallback ---
    // If we are not using the mock API, we perform a standard fetch
    const defaultBase = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:3000';
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3001") || defaultBase;
    const url = `${baseUrl}${endpoint}`;
    const headers = new Headers(options.headers);
    if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }
    let token = undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // server-side
        try {
            const { cookies } = __turbopack_context__.r("[project]/node_modules/next/headers.js [app-ssr] (ecmascript)");
            const cookieStore = await cookies();
            const authCookie = cookieStore.get('auth_token');
            if (authCookie) token = authCookie.value;
        } catch (e) {
        // ignore or handle if needed
        }
    }
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    const response = await fetch(url, {
        cache: 'no-store',
        ...options,
        headers
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
    }
    // Try parsing JSON, fallback to text if it's not JSON (like file downloads)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    return response.text();
}
}),
"[project]/src/store/tutor-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTutorStore",
    ()=>useTutorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-ssr] (ecmascript)");
;
;
const useTutorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        dashboardStats: {
            todaysClasses: [],
            pendingGradingCount: 0,
            studentCount: 0
        },
        upcomingClasses: [],
        allClasses: [],
        assignedClasses: [],
        students: [],
        pendingAssignments: [],
        settings: null,
        initializeStore: (data)=>set((state)=>({
                    ...state,
                    ...data
                })),
        fetchSettings: async ()=>{
            try {
                const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/settings');
                set({
                    settings
                });
            } catch (e) {
                console.error('Failed to fetch tutor settings', e);
            }
        },
        fetchAllClasses: async ()=>{
            try {
                const classes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/classes');
                set({
                    allClasses: classes
                });
            } catch (e) {
                console.error('Failed to fetch all classes', e);
            }
        },
        fetchAssignedClasses: async ()=>{
            try {
                const assigned = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/assigned-classes');
                set({
                    assignedClasses: assigned
                });
            } catch (e) {
                console.error('Failed to fetch assigned classes', e);
            }
        },
        scheduleClass: (newClass)=>set((state)=>{
                // Assuming for now that scheduled classes are for today if date is not in the distant future
                // In a real app, we'd check if `newClass.date` is today's date
                const updatedTodaysClasses = [
                    ...state.dashboardStats.todaysClasses,
                    newClass
                ];
                const updatedUpcomingClasses = [
                    ...state.upcomingClasses,
                    newClass
                ];
                return {
                    upcomingClasses: updatedUpcomingClasses,
                    dashboardStats: {
                        ...state.dashboardStats,
                        todaysClasses: updatedTodaysClasses
                    }
                };
            }),
        submitGrade: (assignmentId, score)=>set((state)=>{
                const updatedPending = state.pendingAssignments.filter((a)=>a.id !== assignmentId);
                return {
                    pendingAssignments: updatedPending,
                    dashboardStats: {
                        ...state.dashboardStats,
                        pendingGradingCount: Math.max(0, state.dashboardStats.pendingGradingCount - 1)
                    }
                };
            })
    }));
}),
"[project]/src/components/TutorSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/tutor-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavItem({ href, icon, text, isActive, isError = false }) {
    const baseClass = "flex items-center gap-3 p-3 rounded-lg transition-all justify-center lg:justify-start";
    const activeClass = isActive ? "bg-primary-container text-on-primary-container font-bold" : isError ? "text-error hover:bg-error-container" : "text-on-surface-variant hover:bg-surface-container-high";
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `material-symbols-outlined ${isActive ? 'icon-filled' : ''}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-label-sm text-[14px] hidden lg:inline",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: href.startsWith('/api/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: `${baseClass} ${activeClass}`,
            title: text,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/TutorSidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: `${baseClass} ${activeClass}`,
            title: text,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/TutorSidebar.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TutorSidebar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function TutorSidebar({ activePath: propActivePath }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const activePath = propActivePath || pathname;
    const { settings, fetchSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTutorStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchSettings();
    }, [
        fetchSettings
    ]);
    const profileData = settings?.profileData || {};
    const name = profileData.name || 'Tutor User';
    const avatar = profileData.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex flex-col h-screen p-2 lg:p-4 gap-4 bg-surface-container-lowest shadow-md fixed left-0 top-0 w-16 lg:w-64 z-40 overflow-y-auto shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-center lg:justify-start pt-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-headline text-[24px] lg:text-[32px] font-semibold text-primary text-center lg:text-left hidden lg:block tracking-tight",
                        children: "Abu-Yahya"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-headline text-[20px] font-semibold text-primary lg:hidden",
                        children: "AY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 lg:p-3 bg-surface-container-low rounded-lg mb-4 justify-center lg:justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20",
                        children: avatar && avatar.length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-full h-full object-cover",
                            src: avatar,
                            alt: "Tutor Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TutorSidebar.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: avatar || 'T'
                        }, void 0, false, {
                            fileName: "[project]/src/components/TutorSidebar.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-label-sm text-[14px] font-semibold text-primary truncate",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TutorSidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-on-surface-variant truncate",
                                children: "Ustadh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TutorSidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex-1 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/dashboard",
                        icon: "dashboard",
                        text: "Dashboard",
                        isActive: activePath === '/tutor/dashboard'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/classes",
                        icon: "school",
                        text: "Classes",
                        isActive: activePath === '/tutor/classes'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/scheduling",
                        icon: "calendar_month",
                        text: "Schedule",
                        isActive: activePath === '/tutor/scheduling'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/students",
                        icon: "groups",
                        text: "Students",
                        isActive: activePath === '/tutor/students'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/settings",
                        icon: "settings",
                        text: "Settings",
                        isActive: activePath === '/tutor/settings'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                    href: "/api/logout",
                    icon: "logout",
                    text: "Logout",
                    isActive: false,
                    isError: true
                }, void 0, false, {
                    fileName: "[project]/src/components/TutorSidebar.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TutorSidebar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TutorMobileNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorMobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/tutor-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TutorMobileNav() {
    const { settings, fetchSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTutorStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchSettings();
    }, [
        fetchSettings
    ]);
    const profileData = settings?.profileData || {};
    const avatar = profileData.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-headline text-[24px] font-bold text-primary",
                children: "Abu-Yahya"
            }, void 0, false, {
                fileName: "[project]/src/components/TutorMobileNav.tsx",
                lineNumber: 18,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20",
                children: avatar && avatar.length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "w-full h-full object-cover",
                    src: avatar,
                    alt: "Tutor Profile"
                }, void 0, false, {
                    fileName: "[project]/src/components/TutorMobileNav.tsx",
                    lineNumber: 21,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs",
                    children: avatar || 'T'
                }, void 0, false, {
                    fileName: "[project]/src/components/TutorMobileNav.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TutorMobileNav.tsx",
                lineNumber: 19,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TutorMobileNav.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/tutor/students/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorStudentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TutorSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorMobileNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TutorMobileNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TutorStudentsPage() {
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/students');
                setStudents(data);
            } catch (error) {
                console.error('Failed to load students', error);
            } finally{
                setLoading(false);
            }
        };
        loadData();
    }, []);
    const filteredStudents = students.filter((student)=>student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.course.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background text-on-background font-body min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activePath: "/tutor/students"
            }, void 0, false, {
                fileName: "[project]/src/app/tutor/students/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorMobileNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/tutor/students/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-[32px] md:text-[40px] font-bold text-primary mb-2",
                                        children: "My Students"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-[16px] text-on-surface-variant",
                                        children: "View and manage the students enrolled in your courses."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-auto relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant",
                                        children: "search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search students...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        className: "w-full md:w-64 pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tutor/students/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center text-on-surface-variant animate-pulse",
                        children: "Loading students..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/tutor/students/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-surface-container-low border-b border-outline-variant/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm",
                                                    children: "Student Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm",
                                                    children: "Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm",
                                                    children: "Plan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm",
                                                    children: "Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm",
                                                    children: "Attendance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 font-semibold text-on-surface text-sm text-right",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-outline-variant/30",
                                        children: filteredStudents.length > 0 ? filteredStudents.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-surface-container-lowest/50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-xs",
                                                                    children: student.name.split(' ').map((n)=>n[0]).join('')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-on-surface",
                                                                    children: student.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4 text-sm text-on-surface-variant",
                                                        children: student.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs font-bold px-2 py-1 rounded-full ${student.plan === 'Premium Plan' ? 'bg-tertiary-container text-on-tertiary-container' : student.plan === 'Personal Plan' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'}`,
                                                            children: student.plan?.replace(' Plan', '') || 'No Plan'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-24 h-2 bg-surface-container-high rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-primary rounded-full",
                                                                        style: {
                                                                            width: `${student.progress}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-on-surface-variant",
                                                                    children: [
                                                                        student.progress,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 103,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-sm font-medium ${student.attendance >= 90 ? 'text-secondary' : student.attendance >= 75 ? 'text-on-surface' : 'text-error'}`,
                                                            children: [
                                                                student.attendance,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4 text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-primary hover:bg-primary-container p-2 rounded-lg transition-colors inline-flex",
                                                                title: "Message Student",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[18px]",
                                                                    children: "mail"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg transition-colors inline-flex ml-1",
                                                                title: "View Details",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[18px]",
                                                                    children: "visibility"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, student.id, true, {
                                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 23
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                className: "p-8 text-center text-on-surface-variant",
                                                children: "No students found matching your search."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/students/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/students/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/students/page.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/tutor/students/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/tutor/students/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/tutor/students/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tutor/students/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_73cef800._.js.map