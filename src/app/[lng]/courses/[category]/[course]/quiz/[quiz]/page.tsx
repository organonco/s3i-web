"use client";
import { StyledButton, StyledCheckBox, StyledRadioButton, StyledTextField } from '@/components';
import { QUESTION_TYPE } from '@/logic/config';
import { QuizQuestion } from '@/logic/interfaces';
import { useCoursesStore } from '@/logic/store';
import { Divider, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { useEffect } from 'react';


export default function Page({
    params: { lng, quiz }
}: {
    params: { lng: any, quiz: string }
}) {

    const { submitQuiz, fetchCourseQuizDetails, quizDetails, isQuizSubmitted } = useCoursesStore();
    useEffect(() => fetchCourseQuizDetails(quiz), [quiz])

    const handleSubmit = (values: any, { setSubmitting }) => submitQuiz(quiz, values, () => setSubmitting(false))

    const initialValues = {
        questions: quizDetails?.questions.map(question => ({
            ...question,
            object: {
                value: question.answer
            }
        }))
    }

    return (
        <>
            {quizDetails && <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => {
                    return (
                        <Form>
                            {isQuizSubmitted && <Typography variant='h4' mb={4} textAlign='center' color='primary.main'>{t('labels.quiz_submitted')}</Typography>}
                            {isQuizSubmitted && !quizDetails?.feedback && <Typography variant='h5' mb={4} textAlign='center' color='primary.main'>{t('labels.no_feedback')}</Typography>}
                            {initialValues?.questions?.map((question, index) => {
                                return (<Grid container item lg={12} direction={'column'} key={question.id}>
                                    <Typography variant='h6' color='primary.main' sx={{ mb: 2 }}>{question.text}</Typography>
                                    {RenderSwitchQuizItem(question, index, isQuizSubmitted)}
                                    <Divider sx={{ my: 4 }} />
                                </Grid>)
                            })}
                            {!isQuizSubmitted && <Grid item lg={12}>
                                <StyledButton title={t("buttons.submit_test")} onClick={handleSubmit} loading={isSubmitting} disabled={isSubmitting && isValid} />
                            </Grid>}
                            {quizDetails.feedback && <Grid item md={12} my={4}>
                                <Typography variant='h3' color='primary.main' mb={2}>{t('texts.professor_feedback') + ': '}</Typography>
                                <Typography variant='h6'>{quizDetails?.feedback}</Typography>
                            </Grid>}
                        </Form>
                    )
                }}
            </Formik>}
        </>
    );
};

const RenderSwitchQuizItem = (question: QuizQuestion, index: number, isQuizSubmitted: boolean) => {
    switch (question.type) {
        case QUESTION_TYPE.TEXT:
            return <StyledTextField numberOfLines={5} key={question.id} name={`questions[${index}].object.value`} disabled={isQuizSubmitted} />
        case QUESTION_TYPE.RADIO:
            return <StyledRadioButton key={question.id} name={`questions[${index}].object.value`} options={question.options} disabled={isQuizSubmitted} />
        case QUESTION_TYPE.CHECK:
            return <StyledCheckBox key={question.id} name={`questions[${index}].object.value`} options={question.options} disabled={isQuizSubmitted} />
        default:
            console.log('default')
            break;
    }
}