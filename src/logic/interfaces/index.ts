import { COURSE_ITEM, QUESTION_TYPE } from '../config'

export interface GeneralObject {
    id: string
    name: string
}
export interface Category extends GeneralObject {
    icon_url: string
}
export interface Course {
    id: string
    name: string
    description: string
    category: GeneralObject
    image_url: string
}
export interface CourseDetails extends Course {
    introduction_video_url: string
    is_subscribed: boolean
    items: CourseItem[]
}
export interface CourseItem {
    id: string
    type: COURSE_ITEM
    object: CourseItemDetails
}
export interface QuizQuestion {
    id: string
    text: string
    type: QUESTION_TYPE
    object: {
        value: string | string[]
    }
    options?: { text: string, is_selected?: boolean, is_correct?: 0 | 1 }[]
    answer?: string | string[]

}
export interface QuizDetails {
    id: string
    name: string
    questions: QuizQuestion[]
    has_feedback: boolean
    feedback: string | null
}
export interface CourseItemDetails {
    id: string
    name: string
    file_url?: string
    url?: string
    time?: string
    date?: string
    has_feedback?: boolean
    feedback?: string | null
    is_submitted?: boolean
    type: COURSE_ITEM
    object: {
        file_url?: string
        type: COURSE_ITEM
        time?: string
        name?: string
        is_submitted?: boolean
        time_limit?: string
        submission?: boolean
        date?: string
        url?: string
    }
    submission?: {
        has_feedback?: boolean
        feedback?: string
        file_url?: string
    }
}

export * from './user'

