import { Category, Course, CourseDetails, CourseItemDetails, QuizDetails, RegisterInfoAPI } from "@/logic/interfaces"
import { fetchCategories, fetchCategoryDetails, fetchCourseDetails, fetchCourseQuiz, fetchHomeworkDetails, fetchNewCourses, fetchUserCourses, handleUploadFile, submitUserQuiz, subscribeCourse, fetchTeachers } from "@/logic/services"
import { t } from "i18next"
import { produce } from "immer"
import { toast } from "react-toastify"
import { StateCreator } from "zustand"



interface QuizTimer {
    id: string,
    startedAt: string,
}


export interface CoursesSlice {
    registerInfo: RegisterInfoAPI | null
    categories: Category[],
    loadingCategoryCourses: boolean
    courses: Course[]
    loadingMyCourses: boolean
    myCourses: Course[]
    newCourses: Course[]
    loadingCourseDetails: boolean
    courseDetails: CourseDetails | null
    loadingCourseQuiz: boolean
    quizDetails: QuizDetails | null
    loadingCourseHomework: boolean
    homework: CourseItemDetails | null
    isQuizSubmitted: boolean
    teachers: []
    fetchCategoriesInfo: () => void
    fetchCourseDetails: (courseId: string) => void
    fetchCategoryCourses: (categoryId: string) => void
    fetchCourseQuizDetails: (quizId: string) => void
    fetchCourseHomeworkDetails: (id: string) => void
    fetchMyCourses: () => void
    subscribeToCourse: (values: { token: string }, courseId: string, closeDialog: () => void, stopLoading: () => void) => void
    submitQuiz: (id: string, quizDetails: QuizDetails, stopLoading: () => void) => void
    uploadFile: (id: string, file: File) => void
    startQuiz: (id: string) => string
    fetchTeachersInfo: () => void
}


export const createCoursesSlice: StateCreator<CoursesSlice> = (set, get, api) => ({
    registerInfo: null,
    categories: [],
    newCourses: [],
    loadingCategoryCourses: false,
    courses: [],
    loadingCourseDetails: false,
    courseDetails: null,
    loadingCourseQuiz: false,
    loadingMyCourses: false,
    myCourses: [],
    homework: null,
    loadingCourseHomework: false,
    quizDetails: null,
    isQuizSubmitted: false,
    teachers: [],

    fetchCategoriesInfo: () => {
        fetchCategories().then((data) => set(produce(draftState => { draftState.categories = data.data })))
        fetchNewCourses().then((data) => set(produce(draftState => { draftState.newCourses = data.data })))
    },

    fetchTeachersInfo: () => {
        fetchTeachers().then((data) => set(produce(draftState => { draftState.teachers = data.data.teachers })))
    },


    fetchCourseDetails: (courseId: string) => {
        set(produce(draftState => {
            draftState.loadingCourseDetails = true
            draftState.courseDetails = null
        }))
        fetchCourseDetails(courseId).then((data) => set(produce(draftState => {
            draftState.courseDetails = data.data
            draftState.loadingCourseDetails = false
        })))
    },
    subscribeToCourse: (values: { token: string }, courseId: string, closeDialog: () => void, stopLoading: () => void) => {
        subscribeCourse(values).then(() => {
            closeDialog()
            stopLoading()
            get().fetchCourseDetails(courseId)
        }).catch(() => stopLoading())
    },
    fetchCategoryCourses: (categoryId: string) => {
        set(produce(draftState => {
            draftState.loadingCategoryCourses = true
            draftState.courses = null
        }))
        fetchCategoryDetails(categoryId).then((data) => set(produce(draftState => {
            draftState.courses = data.data
            draftState.loadingCategoryCourses = false
        })))
    },
    fetchCourseQuizDetails: (quizId: string) => {
        set(produce(draftState => {
            draftState.loadingCourseQuiz = true
            draftState.quizDetails = null
            draftState.isQuizSubmitted = false
        }))
        fetchCourseQuiz(quizId).then((data) => set(produce(draftState => {
            draftState.quizDetails = data.data
            draftState.loadingCourseQuiz = false
            draftState.isQuizSubmitted = data.data.is_submitted
        })))
    },
    fetchCourseHomeworkDetails: (id: string) => {
        set(produce(draftState => {
            draftState.loadingCourseHomework = true
            draftState.homework = null
        }))
        fetchHomeworkDetails(id).then((data) => set(produce(draftState => {
            draftState.homework = data.data
            draftState.loadingCourseHomework = false
        })))
    },
    fetchMyCourses: () => {
        set(produce(draftState => {
            draftState.loadingMyCourses = true
            draftState.myCourses = []
        }))
        fetchUserCourses().then((data) => {
            set(produce(draftState => {
                draftState.myCourses = data.data
                draftState.loadingMyCourses = false
            }))
        }).catch(() => {
            set(produce(draftState => { draftState.loadingMyCourses = false }))
        })
    },
    submitQuiz: (id: string, quizDetails: QuizDetails, stopLoading: () => void) => {
        submitUserQuiz(id, quizDetails).then(data => {
            stopLoading()
            set(produce(draftState => {
                draftState.quizDetails = data.data
                draftState.isQuizSubmitted = data.data.is_submitted
                toast.success(t('toast.quiz_submitted'));
            }))
        }).catch(() => stopLoading())
    },
    uploadFile: (id: string, file: File) => {
        handleUploadFile(id, file).then(() => toast.success(t('toast.uploaded_successfully')))
    },
    startQuiz: (id: string) => {

        let quizTimers = localStorage.getItem('quizTimers') ? JSON.parse(localStorage.getItem('quizTimers')) : []

        let startedAt = null
        quizTimers.forEach((QuizTimer: QuizTimer) => {
            if (id == QuizTimer.id)
                startedAt = QuizTimer.startedAt
        })
        if(startedAt != null)
            return startedAt;
        
        let now = Date()

        quizTimers.push({
            id: id, startedAt: now
        })
        
        localStorage.setItem('quizTimers', JSON.stringify(quizTimers));

        return now
    }
})
