import { Category, Course, CourseDetails, CourseItemDetails, QuizDetails, RegisterInfoAPI } from "@/logic/interfaces"
import { fetchCategories, fetchCategoryDetails, fetchCourseDetails, fetchCourseQuiz, fetchHomeworkDetails, fetchNewCourses, fetchUserCourses, submitUserQuiz, subscribeCourse } from "@/logic/services"
import { produce } from "immer"
import { StateCreator } from "zustand"

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
    fetchCategoriesInfo: () => void
    fetchCourseDetails: (courseId: string) => void
    fetchCategoryCourses: (categoryId: string) => void
    fetchCourseQuizDetails: (quizId: string) => void
    fetchCourseHomeworkDetails: (id: string) => void
    fetchMyCourses: (handleException: () => void) => void
    subscribeToCourse: (values: { token: string }, courseId: string, closeDialog: () => void, stopLoading: () => void) => void
    submitQuiz: (id: string, quizDetails: QuizDetails, stopLoading: () => void) => void
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
    fetchCategoriesInfo: () => {
        fetchCategories().then((data) => set(produce(draftState => { draftState.categories = data.data })))
        fetchNewCourses().then((data) => set(produce(draftState => { draftState.newCourses = data.data })))
    },
    fetchCourseDetails: (courseId: string) => {
        set(produce(draftState => {
            draftState.loadingCourseDetails = true
            draftState.courseDetails = null
        }))
        fetchCourseDetails(courseId).then((data) => set(produce(draftState => {
            console.log(data.data)
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
    fetchMyCourses: (handleException: () => void) => {
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
            handleException()
        })
    },
    submitQuiz: (id: string, quizDetails: QuizDetails, stopLoading: () => void) => {
        submitUserQuiz(id, quizDetails).then(data => {
            stopLoading()
            set(produce(draftState => {
                draftState.quizDetails = data.data
                draftState.isQuizSubmitted = data.data.is_submitted
                // ToastAndroid.show(t('toast.quiz_submitted'), ToastAndroid.SHORT);
            }))
        }).catch(() => stopLoading())
    }
})
