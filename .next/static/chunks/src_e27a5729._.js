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
"[project]/src/components/TutorMobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorMobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/tutor-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TutorMobileNav() {
    _s();
    const { settings, fetchSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorMobileNav.useEffect": ()=>{
            fetchSettings();
        }
    }["TutorMobileNav.useEffect"], [
        fetchSettings
    ]);
    const profileData = (settings === null || settings === void 0 ? void 0 : settings.profileData) || {};
    const avatar = profileData.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-headline text-[24px] font-bold text-primary",
                children: "Abu-Yahya"
            }, void 0, false, {
                fileName: "[project]/src/components/TutorMobileNav.tsx",
                lineNumber: 18,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20",
                children: avatar && avatar.length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "w-full h-full object-cover",
                    src: avatar,
                    alt: "Tutor Profile"
                }, void 0, false, {
                    fileName: "[project]/src/components/TutorMobileNav.tsx",
                    lineNumber: 21,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(TutorMobileNav, "SLsuQD8e3+doPOqopzgeHq/StTA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"]
    ];
});
_c = TutorMobileNav;
var _c;
__turbopack_context__.k.register(_c, "TutorMobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/tutor/scheduling/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorSchedulingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TutorSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorMobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TutorMobileNav.tsx [app-client] (ecmascript)");
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
function TutorSchedulingPage() {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { dashboardStats, upcomingClasses, initializeStore, scheduleClass, allClasses, fetchAllClasses, assignedClasses, fetchAssignedClasses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dashboardStats.todaysClasses.length === 0);
    // Calendar State
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // Form State
    const [classId, setClassId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [classLink, setClassLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorSchedulingPage.useEffect": ()=>{
            const loadData = {
                "TutorSchedulingPage.useEffect.loadData": async ()=>{
                    try {
                        if (dashboardStats.todaysClasses.length === 0) {
                            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/dashboard');
                            initializeStore({
                                dashboardStats: data,
                                upcomingClasses: data.todaysClasses
                            });
                        }
                        if (allClasses.length === 0) {
                            fetchAllClasses();
                        }
                        if (assignedClasses.length === 0) {
                            fetchAssignedClasses();
                        }
                    } catch (error) {
                        console.error('Failed to load classes', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["TutorSchedulingPage.useEffect.loadData"];
            loadData();
        }
    }["TutorSchedulingPage.useEffect"], [
        dashboardStats.todaysClasses.length,
        initializeStore,
        allClasses.length,
        fetchAllClasses,
        assignedClasses.length,
        fetchAssignedClasses
    ]);
    // Calendar Logic
    const getDaysInMonth = (year, month)=>new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month)=>{
        let day = new Date(year, month, 1).getDay();
        // Adjust so Monday is 0 and Sunday is 6
        return day === 0 ? 6 : day - 1;
    };
    const currentYear = currentMonth.getFullYear();
    const currentMonthIndex = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonthIndex);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonthIndex);
    const handlePrevMonth = ()=>setCurrentMonth(new Date(currentYear, currentMonthIndex - 1, 1));
    const handleNextMonth = ()=>setCurrentMonth(new Date(currentYear, currentMonthIndex + 1, 1));
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // Helper to format date string to matching format (YYYY-MM-DD)
    const formatDateString = (year, month, day)=>{
        return "".concat(year, "-").concat(String(month + 1).padStart(2, '0'), "-").concat(String(day).padStart(2, '0'));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!classId || !date || !time) return;
        setIsSubmitting(true);
        const selectedClass = assignedClasses.find((c)=>c.id === classId);
        const newClass = {
            id: "cls-".concat(Date.now()),
            title: selectedClass ? selectedClass.title : '',
            time,
            date,
            type: selectedClass ? selectedClass.type : 'Live Class',
            studentCount: 0,
            classLink
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/classes', {
                method: 'POST',
                body: JSON.stringify({
                    ...newClass,
                    classId
                })
            });
            // Update global states to sync latest schedule
            const dashboardData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAPI"])('/api/tutor/dashboard');
            initializeStore({
                dashboardStats: dashboardData,
                upcomingClasses: dashboardData.todaysClasses
            });
            fetchAllClasses();
            setIsModalOpen(false);
            // Reset form
            setClassId('');
            setDate('');
            setTime('');
        } catch (error) {
            console.error(error);
        } finally{
            setIsSubmitting(false);
        }
    };
    const sessionsToList = upcomingClasses.length > 0 ? upcomingClasses : dashboardStats.todaysClasses;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background text-on-background antialiased flex h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activePath: "/tutor/scheduling"
            }, void 0, false, {
                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TutorMobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-end mb-8 flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-headline text-[32px] font-semibold text-on-surface mb-2",
                                                children: "Live Class Schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-[16px] text-on-surface-variant",
                                                children: "Manage your upcoming Arabic and Quran sessions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2 shadow-ambient",
                                        onClick: ()=>setIsModalOpen(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                children: "add"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            "Schedule New Session"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 xl:grid-cols-3 gap-6 h-full pb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "xl:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant flex flex-col h-[600px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-headline text-[18px] font-semibold text-on-surface",
                                                        children: [
                                                            monthNames[currentMonthIndex],
                                                            " ",
                                                            currentYear
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handlePrevMonth,
                                                                className: "p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "chevron_left"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleNextMonth,
                                                                className: "p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "chevron_right"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow flex flex-col overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-7 gap-2 mb-2 text-center border-b border-surface-variant pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Mon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Tue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Wed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Thu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Fri"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Sat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[14px] text-on-surface-variant hidden sm:block",
                                                                children: "Sun"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "M"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "T"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "W"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "T"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "F"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "S"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-label-sm text-[12px] text-on-surface-variant sm:hidden",
                                                                children: "S"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-7 gap-2 flex-grow auto-rows-[minmax(60px,auto)] overflow-y-auto pr-1",
                                                        children: [
                                                            Array.from({
                                                                length: firstDay
                                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-1 sm:p-2 border border-surface-variant/50 rounded-lg bg-surface-container/30 min-h-[60px]"
                                                                }, "empty-".concat(i), false, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 21
                                                                }, this)),
                                                            Array.from({
                                                                length: daysInMonth
                                                            }).map((_, i)=>{
                                                                const day = i + 1;
                                                                const dateString = formatDateString(currentYear, currentMonthIndex, day);
                                                                const dayClasses = allClasses.filter((c)=>c.date === dateString);
                                                                const isToday = dateString === new Date().toISOString().split('T')[0];
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-1 sm:p-2 border ".concat(isToday ? 'border-2 border-primary bg-surface-container-low' : 'border-surface-variant bg-surface-container-lowest', " rounded-lg min-h-[60px] sm:min-h-[80px] relative"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-label-sm text-[12px] sm:text-[14px] absolute top-1 sm:top-2 right-1 sm:right-2 ".concat(isToday ? 'text-primary font-bold' : 'text-on-surface'),
                                                                            children: day
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-4 sm:mt-6 flex flex-col gap-1 overflow-hidden h-full",
                                                                            children: dayClasses.map((cls, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-secondary-container text-on-secondary-container text-[10px] sm:text-xs p-1 rounded font-body truncate leading-tight",
                                                                                    title: "".concat(cls.time, " - ").concat(cls.title),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold",
                                                                                            children: cls.time
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                            lineNumber: 197,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        " ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "hidden sm:inline",
                                                                                            children: [
                                                                                                "- ",
                                                                                                cls.title
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                            lineNumber: 197,
                                                                                            columnNumber: 81
                                                                                        }, this)
                                                                                    ]
                                                                                }, cls.id || idx, true, {
                                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                    lineNumber: 196,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, "day-".concat(day), true, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 23
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-headline text-[18px] font-semibold text-on-surface mb-4",
                                                    children: "Upcoming Sessions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-pulse text-on-surface-variant",
                                                        children: "Loading sessions..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this) : sessionsToList.length > 0 ? sessionsToList.map((session, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-4 p-4 rounded-lg bg-surface border border-outline-variant/30 hover:border-primary/50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-secondary-fixed-dim",
                                                                        children: "schedule"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-grow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-label-sm text-[14px] text-on-surface font-bold",
                                                                                    children: session.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                    lineNumber: 226,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold px-2 py-1 rounded bg-secondary-container text-on-secondary-container",
                                                                                    children: "Upcoming"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                            lineNumber: 225,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-body text-sm text-on-surface-variant mt-1",
                                                                            children: [
                                                                                session.date ? "".concat(session.date, " | ") : '',
                                                                                session.time
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-2 flex gap-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs bg-surface-container-high px-2 py-1 rounded text-on-surface-variant",
                                                                                children: session.type === 'Live Class' ? "".concat(session.studentCount, " Students") : session.studentName || '1-on-1'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, session.id, true, {
                                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-on-surface-variant text-sm",
                                                        children: "No upcoming sessions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4",
                id: "schedule-modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full max-h-[921px] overflow-y-auto border border-surface-variant",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-surface-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-headline text-[32px] font-semibold text-primary",
                                    children: "Schedule Session"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-on-surface-variant hover:text-error transition-colors p-1",
                                    onClick: ()=>setIsModalOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "p-6 space-y-6",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-label-sm text-[14px] text-on-surface mb-2",
                                            children: "Class"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all",
                                            value: classId,
                                            onChange: (e)=>setClassId(e.target.value),
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "Select a class"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                assignedClasses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.id,
                                                        children: [
                                                            c.title,
                                                            " (",
                                                            c.type,
                                                            ")"
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-label-sm text-[14px] text-on-surface mb-2",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all",
                                                    type: "date",
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-label-sm text-[14px] text-on-surface mb-2",
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all",
                                                    type: "time",
                                                    value: time,
                                                    onChange: (e)=>setTime(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-label-sm text-[14px] text-on-surface mb-2",
                                            children: "Duration (Minutes)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all",
                                            defaultValue: "60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "30",
                                                    children: "30"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "45",
                                                    children: "45"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "60",
                                                    children: "60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "90",
                                                    children: "90"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-label-sm text-[14px] text-on-surface mb-2",
                                            children: "Video/Recording Link (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all",
                                            placeholder: "e.g., https://youtube.com/watch?v=...",
                                            type: "url",
                                            value: classLink,
                                            onChange: (e)=>setClassLink(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-surface-variant flex justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors",
                                            onClick: ()=>setIsModalOpen(false),
                                            type: "button",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2",
                                            type: "submit",
                                            disabled: isSubmitting,
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined animate-spin text-[18px]",
                                                        children: "progress_activity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Scheduling..."
                                                ]
                                            }, void 0, true) : 'Create Session'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/tutor/scheduling/page.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tutor/scheduling/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(TutorSchedulingPage, "2DomnWXFpRD7Anlh7lEnyH4PKXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tutor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTutorStore"]
    ];
});
_c = TutorSchedulingPage;
var _c;
__turbopack_context__.k.register(_c, "TutorSchedulingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e27a5729._.js.map