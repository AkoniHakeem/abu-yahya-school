module.exports = [
"[project]/.next-internal/server/app/student/schedule/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/student/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/student/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/mock-data/student.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/mock-api/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDB",
    ()=>getDB,
    "resetDB",
    ()=>resetDB,
    "saveDB",
    ()=>saveDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-rsc] (ecmascript)");
;
// Initial Seed Data
const initialData = {
    users: [
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentProfile"],
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
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enrolledCourses"],
    classes: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upcomingSchedule"].map((s)=>({
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
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assignments"],
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
"[project]/src/lib/mock-api/mock-data.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-rsc] (ecmascript)");
;
;
;
const getStudentDashboard = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
    const upcomingClass = db.classes.find((c)=>c.date > new Date().toISOString()) || db.classes[0] || null;
    return {
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentProfile"],
        upcomingClass,
        recentActivity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recentActivity"],
        progressStats: {
            overall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentProfile"].overallProgress,
            coursesCompleted: 1,
            activeCourses: db.courses.length
        },
        activePlan: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billingData"].currentPlan
    };
};
const getStudentCourses = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
    const isPaid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billingData"].currentPlan.status === 'Active';
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billingData"].currentPlan.name;
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
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
const getStudentMessages = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["messages"];
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
    return {
        todaysClasses: db.classes.slice(0, 2),
        pendingGradingCount: db.assignments.filter((a)=>a.status === 'pending').length,
        studentCount: db.users.filter((u)=>u.role === 'student').length
    };
};
const getTutorAssignments = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().assignments;
const getTutorStudents = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().users.filter((u)=>u.role === 'student');
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentProfile"],
            name: 'Tutor User',
            role: 'tutor'
        },
        preferences: {
            notifications: true
        }
    });
const getAdminFinancials = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().financials;
const getAdminReports = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
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
const getAdminTickets = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().tickets;
const getAdminUsers = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().users;
const getAdminClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])().classes;
}),
"[project]/src/lib/mock-api/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockApiRouter",
    ()=>mockApiRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-api/mock-data.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-rsc] (ecmascript)");
;
;
async function mockApiRouter(endpoint, method = 'GET', body) {
    const path = endpoint.split('?')[0];
    console.log(`[Mock API Intercepted] ${method} ${path}`);
    // --- STUDENT ROUTES ---
    if (path === '/api/student/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentDashboard"]();
    if (path === '/api/student/courses' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCourses"]();
    if (path === '/api/student/schedule' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentSchedule"]();
    if (path === '/api/student/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentAssignments"]();
    if (path === '/api/student/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentMessages"]();
    if (path === '/api/student/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCommunity"]();
    if (path.startsWith('/api/student/assignments/') && path.endsWith('/submit') && method === 'POST') {
        return {
            success: true,
            message: 'Assignment submitted successfully'
        };
    }
    if (path === '/api/student/settings' && method === 'GET') {
        return {
            profileData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentProfile"],
            preferences: {
                notifications: true
            }
        };
    }
    // --- TUTOR ROUTES ---
    if (path === '/api/tutor/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorDashboard"]();
    if (path === '/api/tutor/students' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorStudents"]();
    if (path === '/api/tutor/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorAssignments"]();
    if (path === '/api/tutor/assignments/grade' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
        const assignmentId = body?.assignmentId;
        db.assignments = db.assignments.filter((a)=>a.id !== assignmentId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Grade submitted successfully'
        };
    }
    if (path === '/api/tutor/schedule/class' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
        db.classes.push(body);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Class scheduled successfully'
        };
    }
    if (path === '/api/tutor/earnings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorEarnings"]();
    if (path === '/api/tutor/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorCommunity"]();
    if (path === '/api/tutor/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorMessages"]();
    if (path === '/api/tutor/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorSettings"]();
    // --- ADMIN ROUTES ---
    if (path === '/api/admin/financials' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminFinancials"]();
    if (path === '/api/admin/reports' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminReports"]();
    if (path === '/api/admin/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminSettings"]();
    if (path === '/api/admin/tickets' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminTickets"]();
    if (path === '/api/admin/users' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminUsers"]();
    if (path === '/api/admin/classes' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminClasses"]();
    if (path === '/api/admin/users' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
        const newUser = {
            id: `USR-${Date.now()}`,
            ...body,
            progress: 0,
            attendance: 100
        };
        db.users.push(newUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            user: newUser
        };
    }
    if (path === '/api/admin/classes' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
        const newClass = {
            id: `CLS-${Date.now()}`,
            ...body
        };
        db.classes.push(newClass);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            class: newClass
        };
    }
    if (path === '/api/admin/tickets/resolve' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDB"])();
        const ticketId = body?.ticketId;
        const ticket = db.tickets.find((t)=>t.ticketId === ticketId);
        if (ticket) {
            ticket.status = 'Resolved';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDB"])(db);
        }
        return {
            success: true
        };
    }
    console.error(`[Mock API Error] Unhandled endpoint: ${method} ${path}`);
    throw new Error(`Mock API Error: Endpoint not found (${method} ${path})`);
}
}),
"[project]/src/lib/api-client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAPI",
    ()=>fetchAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/index.ts [app-rsc] (ecmascript)");
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
            const { cookies } = __turbopack_context__.r("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
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
"[project]/src/app/student/schedule/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentSchedulePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-rsc] (ecmascript)");
;
;
;
async function StudentSchedulePage() {
    const schedule = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/student/schedule');
    // Group by date (simplified for mock data)
    const groupedSchedule = schedule.reduce((acc, curr)=>{
        const date = new Date(curr.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        if (!acc[date]) acc[date] = [];
        acc[date].push(curr);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-[32px] md:text-[40px] font-bold text-primary mb-2",
                                children: "My Schedule"
                            }, void 0, false, {
                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-on-surface-variant text-[18px]",
                                children: "Your upcoming live classes and mentoring sessions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/student/schedule/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30 text-sm font-medium text-on-surface flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[18px]",
                                children: "public"
                            }, void 0, false, {
                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            "Timezone: UTC+1 (West Africa Time)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/student/schedule/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/student/schedule/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: Object.keys(groupedSchedule).length > 0 ? Object.keys(groupedSchedule).map((dateStr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-headline text-[20px] font-bold text-on-surface border-b border-outline-variant/30 pb-2",
                                children: dateStr
                            }, void 0, false, {
                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: groupedSchedule[dateStr].map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-primary/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hidden sm:flex flex-col items-center justify-center min-w-[80px] border-r border-outline-variant/30 pr-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-headline text-[24px] font-bold text-primary",
                                                                children: new Date(session.date).toLocaleTimeString('en-US', {
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                lineNumber: 42,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-on-surface-variant uppercase tracking-wider",
                                                                children: session.duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-bold uppercase px-2 py-1 rounded-full ${session.sessionType.includes('Mentoring') || session.sessionType.includes('1-on-1') ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-secondary-container text-on-secondary-container'}`,
                                                                    children: session.sessionType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                    lineNumber: 50,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                lineNumber: 49,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-headline text-[20px] font-bold text-on-surface mb-1",
                                                                children: session.courseTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-on-surface-variant flex items-center gap-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-[16px]",
                                                                        children: "person"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                        lineNumber: 60,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    session.tutor,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sm:hidden material-symbols-outlined text-[16px] ml-2",
                                                                        children: "schedule"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                        lineNumber: 61,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sm:hidden",
                                                                        children: new Date(session.date).toLocaleTimeString('en-US', {
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                        lineNumber: 62,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: session.meetingLink || "#",
                                                className: "w-full md:w-auto bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary hover:text-on-primary transition-all text-center whitespace-nowrap shadow-sm group-hover:shadow-md",
                                                children: "Join Live Session"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, session.id, true, {
                                        fileName: "[project]/src/app/student/schedule/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/student/schedule/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        ]
                    }, dateStr, true, {
                        fileName: "[project]/src/app/student/schedule/page.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-lowest rounded-xl p-12 shadow-ambient text-center border border-outline-variant/30 flex flex-col items-center justify-center text-on-surface-variant",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-[48px] mb-4 opacity-50",
                            children: "event_busy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/student/schedule/page.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "You have no upcoming sessions scheduled."
                        }, void 0, false, {
                            fileName: "[project]/src/app/student/schedule/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/student/schedule/page.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/student/schedule/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/student/schedule/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/student/schedule/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/student/schedule/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a2b3a7c._.js.map