export const API_BASE_URL = {
    //baseURL: 'https://stage.eprocurement.ae/api',
    //baseURL: "http://eproc.test/api",
    domain: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
};
// export const API_BASE_URL = Config.API_URL;

export const API_URLS = {
    login: `/login`,
    register: `/register`,
    logout: `/logout`,
    profile: `/profile`,
    resetPassword: 'reset-password',

    categories: '/category',
    course: '/course',
    new: '/new',
    quiz: '/quiz',
    token: '/token',
    purchaseCourse: '/purchase/course',
    myCourses: '/my-courses',
    homework: '/homework',
    // Add more API URLs here as needed
    notification: '/notifications',
    count: '/count',
    markAsRead: '/mark-as-read',
    teachers: '/teachers',
	verify: "/verification/verify",
	sendForgetPassword: '/password/send',
	resetForgetPassword: '/password/reset/'
};


export enum USER_STATUS {
    UNDEFINED = "UNDEFINED",
    LOGGED_IN = "LOGGED_IN",
    NOT_LOGGEN_IN = "NOT_LOGGEN_IN"
}

export enum COURSE_ITEM {
    SECTION = 'section',
    FILE = 'file',
    HOMEWORK = 'homework',
    MEETING = 'meeting',
    VIDEO = 'video',
    QUIZ = 'quiz',
    MULTIPLE = 'multiple_choice',
    TEXT = 'text',
    REVIEW = 'review'
}

export enum QUESTION_TYPE {
    TEXT = 'text',
    CHECK = 'check',
    RADIO = 'radio'
}


