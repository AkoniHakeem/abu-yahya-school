(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock-data/student.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock-api/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDB",
    ()=>getDB,
    "resetDB",
    ()=>resetDB,
    "saveDB",
    ()=>saveDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-client] (ecmascript)");
;
// Initial Seed Data
const initialData = {
    users: [
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentProfile"],
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
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrolledCourses"],
    classes: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upcomingSchedule"].map((s)=>({
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
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignments"],
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
const isBrowser = "object" !== 'undefined';
const getDB = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Failed to parse mock db from localStorage', e);
            return initialData;
        }
    } else {
        localStorage.setItem(DB_KEY, JSON.stringify(initialData));
        return initialData;
    }
};
const saveDB = (data)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(DB_KEY, JSON.stringify(data));
};
const resetDB = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(DB_KEY, JSON.stringify(initialData));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock-api/mock-data.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-client] (ecmascript)");
;
;
;
const getStudentDashboard = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const upcomingClass = db.classes.find((c)=>c.date > new Date().toISOString()) || db.classes[0] || null;
    return {
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentProfile"],
        upcomingClass,
        recentActivity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentActivity"],
        progressStats: {
            overall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentProfile"].overallProgress,
            coursesCompleted: 1,
            activeCourses: db.courses.length
        },
        activePlan: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["billingData"].currentPlan
    };
};
const getStudentCourses = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const isPaid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["billingData"].currentPlan.status === 'Active';
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["billingData"].currentPlan.name;
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
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
const getStudentMessages = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"];
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
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return {
        todaysClasses: db.classes.slice(0, 2),
        pendingGradingCount: db.assignments.filter((a)=>a.status === 'pending').length,
        studentCount: db.users.filter((u)=>u.role === 'student').length
    };
};
const getTutorAssignments = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().assignments;
const getTutorStudents = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().users.filter((u)=>u.role === 'student');
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentProfile"],
            name: 'Tutor User',
            role: 'tutor'
        },
        preferences: {
            notifications: true
        }
    });
const getAdminFinancials = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().financials;
const getAdminReports = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
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
const getAdminTickets = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().tickets;
const getAdminUsers = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().users;
const getAdminClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])().classes;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock-api/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockApiRouter",
    ()=>mockApiRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-api/mock-data.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/student.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/db.ts [app-client] (ecmascript)");
;
;
async function mockApiRouter(endpoint) {
    let method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'GET', body = arguments.length > 2 ? arguments[2] : void 0;
    const path = endpoint.split('?')[0];
    console.log("[Mock API Intercepted] ".concat(method, " ").concat(path));
    // --- STUDENT ROUTES ---
    if (path === '/api/student/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentDashboard"]();
    if (path === '/api/student/courses' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCourses"]();
    if (path === '/api/student/schedule' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentSchedule"]();
    if (path === '/api/student/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentAssignments"]();
    if (path === '/api/student/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentMessages"]();
    if (path === '/api/student/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentCommunity"]();
    if (path.startsWith('/api/student/assignments/') && path.endsWith('/submit') && method === 'POST') {
        return {
            success: true,
            message: 'Assignment submitted successfully'
        };
    }
    if (path === '/api/student/settings' && method === 'GET') {
        return {
            profileData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$student$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentProfile"],
            preferences: {
                notifications: true
            }
        };
    }
    // --- TUTOR ROUTES ---
    if (path === '/api/tutor/dashboard' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorDashboard"]();
    if (path === '/api/tutor/students' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorStudents"]();
    if (path === '/api/tutor/assignments' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorAssignments"]();
    if (path === '/api/tutor/assignments/grade' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
        const assignmentId = body === null || body === void 0 ? void 0 : body.assignmentId;
        db.assignments = db.assignments.filter((a)=>a.id !== assignmentId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Grade submitted successfully'
        };
    }
    if (path === '/api/tutor/schedule/class' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
        db.classes.push(body);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            message: 'Class scheduled successfully'
        };
    }
    if (path === '/api/tutor/earnings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorEarnings"]();
    if (path === '/api/tutor/community' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorCommunity"]();
    if (path === '/api/tutor/messages' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorMessages"]();
    if (path === '/api/tutor/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTutorSettings"]();
    // --- ADMIN ROUTES ---
    if (path === '/api/admin/financials' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminFinancials"]();
    if (path === '/api/admin/reports' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminReports"]();
    if (path === '/api/admin/settings' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminSettings"]();
    if (path === '/api/admin/tickets' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminTickets"]();
    if (path === '/api/admin/users' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminUsers"]();
    if (path === '/api/admin/classes' && method === 'GET') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAdminClasses"]();
    if (path === '/api/admin/users' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
        const newUser = {
            id: "USR-".concat(Date.now()),
            ...body,
            progress: 0,
            attendance: 100
        };
        db.users.push(newUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            user: newUser
        };
    }
    if (path === '/api/admin/classes' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
        const newClass = {
            id: "CLS-".concat(Date.now()),
            ...body
        };
        db.classes.push(newClass);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        return {
            success: true,
            class: newClass
        };
    }
    if (path === '/api/admin/tickets/resolve' && method === 'POST') {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
        const ticketId = body === null || body === void 0 ? void 0 : body.ticketId;
        const ticket = db.tickets.find((t)=>t.ticketId === ticketId);
        if (ticket) {
            ticket.status = 'Resolved';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        }
        return {
            success: true
        };
    }
    console.error("[Mock API Error] Unhandled endpoint: ".concat(method, " ").concat(path));
    throw new Error("Mock API Error: Endpoint not found (".concat(method, " ").concat(path, ")"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAPI",
    ()=>fetchAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-api/index.ts [app-client] (ecmascript)");
;
async function fetchAPI(endpoint) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const useMockApi = ("TURBOPACK compile-time value", "false") === 'true';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // --- Real Backend Fallback ---
    // If we are not using the mock API, we perform a standard fetch
    const defaultBase = ("TURBOPACK compile-time truthy", 1) ? '' : "TURBOPACK unreachable";
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3001") || defaultBase;
    const url = "".concat(baseUrl).concat(endpoint);
    const headers = new Headers(options.headers);
    if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }
    let token = undefined;
    if ("TURBOPACK compile-time truthy", 1) {
        // client-side
        const match = document.cookie.match(new RegExp('(^| )auth_token=([^;]+)'));
        if (match) token = match[2];
    } else //TURBOPACK unreachable
    ;
    if (token) {
        headers.set('Authorization', "Bearer ".concat(token));
    }
    const response = await fetch(url, {
        cache: 'no-store',
        ...options,
        headers
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.message || "API Error: ".concat(response.status, " ").concat(response.statusText));
    }
    // Try parsing JSON, fallback to text if it's not JSON (like file downloads)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    return response.text();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/tutor-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTutorStore",
    ()=>useTutorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
;
;
const useTutorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
                const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/settings');
                set({
                    settings
                });
            } catch (e) {
                console.error('Failed to fetch tutor settings', e);
            }
        },
        fetchAllClasses: async ()=>{
            try {
                const classes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/classes');
                set({
                    allClasses: classes
                });
            } catch (e) {
                console.error('Failed to fetch all classes', e);
            }
        },
        fetchAssignedClasses: async ()=>{
            try {
                const assigned = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/assigned-classes');
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TutorSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/tutor-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NavItem(param) {
    let { href, icon, text, isActive, isError = false } = param;
    const baseClass = "flex items-center gap-3 p-3 rounded-lg transition-all justify-center lg:justify-start";
    const activeClass = isActive ? "bg-primary-container text-on-primary-container font-bold" : isError ? "text-error hover:bg-error-container" : "text-on-surface-variant hover:bg-surface-container-high";
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "material-symbols-outlined ".concat(isActive ? 'icon-filled' : ''),
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-label-sm text-[14px] hidden lg:inline",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/TutorSidebar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: href.startsWith('/api/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: "".concat(baseClass, " ").concat(activeClass),
            title: text,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/TutorSidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "".concat(baseClass, " ").concat(activeClass),
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
_c = NavItem;
function TutorSidebar(param) {
    let { activePath: propActivePath } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const activePath = propActivePath || pathname;
    const { settings, fetchSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorSidebar.useEffect": ()=>{
            fetchSettings();
        }
    }["TutorSidebar.useEffect"], [
        fetchSettings
    ]);
    const profileData = (settings === null || settings === void 0 ? void 0 : settings.profileData) || {};
    const name = profileData.name || 'Tutor User';
    const avatar = profileData.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex flex-col h-screen p-2 lg:p-4 gap-4 bg-surface-container-lowest shadow-md fixed left-0 top-0 w-16 lg:w-64 z-40 overflow-y-auto shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-center lg:justify-start pt-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-headline text-[24px] lg:text-[32px] font-semibold text-primary text-center lg:text-left hidden lg:block tracking-tight",
                        children: "Abu-Yahya"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 lg:p-3 bg-surface-container-low rounded-lg mb-4 justify-center lg:justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20",
                        children: avatar && avatar.length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-full h-full object-cover",
                            src: avatar,
                            alt: "Tutor Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TutorSidebar.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-label-sm text-[14px] font-semibold text-primary truncate",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TutorSidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex-1 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/dashboard",
                        icon: "dashboard",
                        text: "Dashboard",
                        isActive: activePath === '/tutor/dashboard'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/classes",
                        icon: "school",
                        text: "Classes",
                        isActive: activePath === '/tutor/classes'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/scheduling",
                        icon: "calendar_month",
                        text: "Schedule",
                        isActive: activePath === '/tutor/scheduling'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        href: "/tutor/students",
                        icon: "groups",
                        text: "Students",
                        isActive: activePath === '/tutor/students'
                    }, void 0, false, {
                        fileName: "[project]/src/components/TutorSidebar.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
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
_s(TutorSidebar, "JSEI/950GvjjZyXlX8zdkTyJsmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"]
    ];
});
_c1 = TutorSidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "TutorSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/tutor/classes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorClassroomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TutorSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/tutor-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TutorClassroomPage() {
    _s();
    const { dashboardStats, upcomingClasses, pendingAssignments, students, initializeStore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dashboardStats.todaysClasses.length === 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorClassroomPage.useEffect": ()=>{
            const loadData = {
                "TutorClassroomPage.useEffect.loadData": async ()=>{
                    try {
                        const fetchPromises = [];
                        if (dashboardStats.todaysClasses.length === 0) {
                            fetchPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/dashboard').then({
                                "TutorClassroomPage.useEffect.loadData": (data)=>({
                                        type: 'dashboard',
                                        data
                                    })
                            }["TutorClassroomPage.useEffect.loadData"]));
                        }
                        if (pendingAssignments.length === 0) {
                            fetchPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/assignments').then({
                                "TutorClassroomPage.useEffect.loadData": (data)=>({
                                        type: 'assignments',
                                        data
                                    })
                            }["TutorClassroomPage.useEffect.loadData"]));
                        }
                        if (students.length === 0) {
                            fetchPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/students').then({
                                "TutorClassroomPage.useEffect.loadData": (data)=>({
                                        type: 'students',
                                        data
                                    })
                            }["TutorClassroomPage.useEffect.loadData"]));
                        }
                        const results = await Promise.all(fetchPromises);
                        let updates = {};
                        results.forEach({
                            "TutorClassroomPage.useEffect.loadData": (res)=>{
                                if (res.type === 'dashboard') {
                                    updates.dashboardStats = res.data;
                                    updates.upcomingClasses = res.data.todaysClasses;
                                }
                                if (res.type === 'assignments') {
                                    updates.pendingAssignments = res.data;
                                }
                                if (res.type === 'students') {
                                    updates.students = res.data;
                                }
                            }
                        }["TutorClassroomPage.useEffect.loadData"]);
                        if (Object.keys(updates).length > 0) {
                            initializeStore(updates);
                        }
                    } catch (error) {
                        console.error('Failed to load classroom data', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["TutorClassroomPage.useEffect.loadData"];
            loadData();
        }
    }["TutorClassroomPage.useEffect"], [
        dashboardStats.todaysClasses.length,
        pendingAssignments.length,
        students.length,
        initializeStore
    ]);
    const classesToList = upcomingClasses.length > 0 ? upcomingClasses : dashboardStats.todaysClasses;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background text-on-background font-body min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activePath: "/tutor/classes"
            }, void 0, false, {
                fileName: "[project]/src/app/tutor/classes/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-headline text-[24px] md:text-[32px] font-semibold text-on-surface mb-2",
                                        children: "Classroom Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-[16px] text-on-surface-variant",
                                        children: "Manage your upcoming classes and student progress."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 w-full md:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 md:flex-none py-3 px-6 bg-surface-container-high text-primary rounded-lg font-label-sm text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "campaign"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        "Send Announcement"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "xl:col-span-2 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-6 border-b border-surface-variant pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-headline text-[24px] font-semibold text-on-surface flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-primary",
                                                                children: "event"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 19
                                                            }, this),
                                                            "My Upcoming Classes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/tutor/scheduling",
                                                            className: "p-2 rounded-md hover:bg-surface-container-high text-primary transition-colors flex items-center gap-2 text-sm font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined",
                                                                    children: "add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Schedule"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4",
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-pulse text-on-surface-variant p-4",
                                                    children: "Loading classes..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this) : classesToList.length > 0 ? classesToList.map((cls, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-4 w-full md:w-auto mb-4 md:mb-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-16 h-16 rounded-lg ".concat(index === 0 ? 'bg-primary-container/10 text-primary' : 'bg-surface-variant text-on-surface-variant', " flex flex-col items-center justify-center flex-shrink-0"),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined",
                                                                            children: cls.type === 'Live Class' ? 'groups' : 'person'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mb-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[12px]",
                                                                                        children: cls.type
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                        lineNumber: 110,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-on-surface-variant text-sm flex items-center gap-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "material-symbols-outlined text-[16px]",
                                                                                                children: "schedule"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                                lineNumber: 112,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            " ",
                                                                                            cls.date ? "".concat(cls.date, " ") : '',
                                                                                            cls.time
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                        lineNumber: 111,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                lineNumber: 109,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-body text-[18px] font-bold text-on-surface",
                                                                                children: cls.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                lineNumber: 115,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-body text-[16px] text-on-surface-variant mt-1",
                                                                                children: cls.type === 'Live Class' ? "".concat(cls.studentCount, " Students Enrolled") : "With ".concat(cls.studentName)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                lineNumber: 116,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3 w-full md:w-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex-1 md:flex-none py-2 px-4 rounded-md border border-outline-variant text-on-surface font-label-sm text-[14px] hover:bg-surface-variant/30 transition-colors",
                                                                        children: "Details"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    index === 0 && (cls.classLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: cls.classLink,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "flex-1 md:flex-none py-2 px-4 rounded-md bg-primary text-on-primary font-label-sm text-[14px] hover:bg-primary/90 transition-colors shadow-sm text-center",
                                                                        children: "Start Class"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>alert('No video link available for this class.'),
                                                                        className: "flex-1 md:flex-none py-2 px-4 rounded-md bg-primary text-on-primary font-label-sm text-[14px] hover:bg-primary/90 transition-colors shadow-sm",
                                                                        children: "Start Class"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 29
                                                                    }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, cls.id || index, true, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 text-center text-on-surface-variant border border-dashed border-outline-variant/50 rounded-lg",
                                                    children: "No upcoming classes scheduled."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tutor/scheduling",
                                                className: "w-full mt-6 py-3 text-primary font-label-sm text-[14px] hover:bg-surface-container-low rounded-lg transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    "View Full Schedule ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        children: "arrow_forward"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-headline text-[24px] font-semibold text-on-surface mb-6 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-secondary",
                                                        children: "assignment_late"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Needs Grading"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-pulse text-on-surface-variant col-span-2",
                                                    children: "Loading assignments..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 20
                                                }, this) : pendingAssignments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-lg bg-error-container/20 border border-error-container md:col-span-2 flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-bold",
                                                                        children: [
                                                                            pendingAssignments.length,
                                                                            " Pending"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-body text-[16px] font-bold text-on-surface",
                                                                    children: "You have assignments waiting for your review."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-on-surface-variant",
                                                                    children: "Timely feedback helps students improve faster."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/tutor/assignments",
                                                            className: "px-6 py-2 bg-primary text-on-primary rounded-lg font-bold text-sm shadow-sm hover:bg-primary/90 transition-colors",
                                                            children: "Start Grading"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-lg bg-surface border border-surface-variant md:col-span-2 flex items-center gap-4 text-on-surface-variant",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-primary text-[32px]",
                                                            children: "task_alt"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-on-surface",
                                                                    children: "All Caught Up!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm",
                                                                    children: "There are no pending assignments."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "xl:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50 h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-headline text-[24px] font-semibold text-on-surface flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-primary",
                                                        children: "groups"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    "My Students"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant",
                                                    children: "search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm",
                                                    placeholder: "Search students...",
                                                    type: "text"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto pr-2 space-y-4",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-pulse text-on-surface-variant",
                                                children: "Loading students..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this) : students.length > 0 ? students.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-sm",
                                                                    children: student.name.split(' ').map((n)=>n[0]).join('')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-label-sm text-[14px] text-on-surface",
                                                                            children: student.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-on-surface-variant flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "w-2 h-2 rounded-full block ".concat(student.attendance >= 90 ? 'bg-primary' : student.attendance >= 75 ? 'bg-secondary-container' : 'bg-error')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                                    lineNumber: 216,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " ",
                                                                                student.attendance,
                                                                                "% Attendance"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: "more_vert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, student.id, true, {
                                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-on-surface-variant p-4",
                                                children: "No students found."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tutor/students",
                                            className: "w-full mt-4 py-2 border-t border-surface-variant text-center text-on-surface-variant font-label-sm text-[14px] hover:text-primary transition-colors block",
                                            children: "View Complete Roster"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/classes/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/classes/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/tutor/classes/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tutor/classes/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/tutor/classes/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tutor/classes/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(TutorClassroomPage, "UArifHfDFHGmacnK5hc6kzI+G/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"]
    ];
});
_c = TutorClassroomPage;
var _c;
__turbopack_context__.k.register(_c, "TutorClassroomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_256dc43a._.js.map