import { API_URLS, QUESTION_TYPE } from "@/logic/config";
import { QuizDetails } from "@/logic/interfaces";
import { apiClient } from "../apiClient";

export const fetchCategories = () => {
  console.log(API_URLS)
  return apiClient({ url: API_URLS.categories, method: "GET" })
}

export const fetchCategoryDetails = (category_id: string) => {
  return apiClient({ url: API_URLS.course, method: "GET", params: { category_id } })
}

export const fetchCourseDetails = (course_id: string) => {
  return apiClient({ url: API_URLS.course + '/' + course_id, method: "GET" })
}

export const fetchNewCourses = () => {
  return apiClient({ url: API_URLS.course + API_URLS.new, method: "GET" })
}

export const subscribeCourse = (values: { token: string }) => {
  return apiClient({ url: API_URLS.token, method: "POST", data: values })
}

export const fetchCourseQuiz = (course_id: string) => {
  return apiClient({ url: API_URLS.quiz + '/' + course_id, method: "GET" })
}

export const fetchUserCourses = () => {
  return apiClient({ url: API_URLS.course + API_URLS.myCourses, method: "GET" })
}

export const fetchHomeworkDetails = (id: string) => {
  return apiClient({ url: API_URLS.homework + "/" + id, method: "GET" })
}

export const submitUserQuiz = (id: string, quizDetails: QuizDetails) => {
  const newQuizDetails = quizDetails.questions.map(quiz => {
    let quizObj = { question_id: quiz.id, question_type: quiz.type }
    console.log(quiz.value)
    if (quiz.type === QUESTION_TYPE.TEXT) quizObj = { ...quizObj, text_answer: quiz.object.value }
    if (quiz.type === QUESTION_TYPE.CHECK) quizObj = { ...quizObj, selected_options: quiz.object.value }
    if (quiz.type === QUESTION_TYPE.RADIO) quizObj = { ...quizObj, selected_option: quiz.object.value }
    console.log(quizObj)
    return quizObj
  })
  const dataToSend = { answers: newQuizDetails }
  console.log(dataToSend)
  return apiClient({ url: API_URLS.quiz + '/' + id, method: "POST", data: dataToSend })
}