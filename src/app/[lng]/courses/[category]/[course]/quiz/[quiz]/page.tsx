"use client";
import {
  StyledButton,
  StyledCheckBox,
  StyledRadioButton,
  StyledTextField,
} from "@/components";
import { QUESTION_TYPE } from "@/logic/config";
import { QuizQuestion } from "@/logic/interfaces";
import { useCoursesStore } from "@/logic/store";
import { Divider, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { t } from "i18next";
import { useEffect, useState } from "react";

export default function Page({
  params: { lng, quiz },
}: {
  params: { lng: any; quiz: string };
}) {
  const {
    submitQuiz,
    fetchCourseQuizDetails,
    quizDetails,
    isQuizSubmitted,
    startQuiz,
  } = useCoursesStore();

  const [startedAt, setStartedAt] = useState(null);

  useEffect(() => fetchCourseQuizDetails(quiz), [quiz]);

  useEffect(() => {
    if (quizDetails != null) setStartedAt(startQuiz(quizDetails?.id));
  }, [quizDetails]);

  const handleSubmit = (values: any, { setSubmitting }) =>
    submitQuiz(quiz, values, () => setSubmitting(false));

  const initialValues = {
    questions: quizDetails?.questions.map((question) => ({
      ...question,
      object: {
        value: question.answer,
      },
    })),
  };

  const [countDownText, setCountDownText] = useState("");
  const [expired, setExpired] = useState(false);
  const is_limited = quizDetails?.time_limit;

  useEffect(() => {
    if (startedAt != null) {
      let time_limit = quizDetails?.time_limit;
      const countDownDate = new Date(
        new Date(startedAt).getTime() + time_limit * 60000
      );
      const interval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0 || Number.isNaN(distance)) {
          clearInterval(interval);
          setExpired(true);
        } else {
          setCountDownText(
            hours.toString().padStart(2, "0") +
              ":" +
              minutes.toString().padStart(2, "0") +
              ":" +
              seconds.toString().padStart(2, "0")
          );
        }
      }, 1000);
    }
  }, [startedAt]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item lg={8} justifyContent={"center"}>
        {quizDetails && (
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              isValid,
            }) => {
              return (
                <Form>
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center" }}
                    color="primary.main"
                  >
                    {isQuizSubmitted
                      ? t("labels.quiz_submitted")
                      : is_limited && expired
                      ? t("labels.quiz_expired")
                      : countDownText}
                  </Typography>
                  {isQuizSubmitted && !quizDetails?.feedback && (
                    <Typography
                      variant="h5"
                      mb={4}
                      textAlign="center"
                      color="primary.main"
                    >
                      {t("labels.no_feedback")}
                    </Typography>
                  )}
                  {initialValues?.questions?.map((question, index) => {
                    return (
                      <Grid
                        container
                        item
                        lg={12}
                        direction={"column"}
                        key={question.id}
                      >
                        <Typography
                          variant="h6"
                          color="primary.main"
                          sx={{ mb: 2 }}
                        >
                          {question.text}
                        </Typography>
                        {RenderSwitchQuizItem(
                          question,
                          index,
                          isQuizSubmitted,
                          expired
                        )}
                        <Divider sx={{ my: 4 }} />
                      </Grid>
                    );
                  })}
                  {!isQuizSubmitted && (!expired || !is_limited) && (
                    <Grid container justifyContent={"center"}>
                      <Grid
                        item
                        lg={6}
                        style={{
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <StyledButton
                          title={t("buttons.submit_test")}
                          onClick={handleSubmit}
                          disabled={isSubmitting && isValid}
                        />
                      </Grid>
                    </Grid>
                  )}
                  {quizDetails.feedback && (
                    <Grid item md={12} my={4}>
                      <Typography variant="h3" color="primary.main" mb={2}>
                        {t("texts.professor_feedback") + ": "}
                      </Typography>
                      <Typography variant="h6">
                        {quizDetails?.feedback}
                      </Typography>
                    </Grid>
                  )}
                </Form>
              );
            }}
          </Formik>
        )}
      </Grid>
    </Grid>
  );
}

const RenderSwitchQuizItem = (
  question: QuizQuestion,
  index: number,
  isQuizSubmitted: boolean,
  expired: boolean
) => {
  switch (question.type) {
    case QUESTION_TYPE.TEXT:
      return (
        <StyledTextField
          numberOfLines={5}
          key={question.id}
          name={`questions[${index}].object.value`}
          disabled={isQuizSubmitted}
        />
      );
    case QUESTION_TYPE.RADIO:
      return (
        <StyledRadioButton
          key={question.id}
          name={`questions[${index}].object.value`}
          options={question.options}
          disabled={isQuizSubmitted || expired}
        />
      );
    case QUESTION_TYPE.CHECK:
      return (
        <StyledCheckBox
          key={question.id}
          name={`questions[${index}].object.value`}
          options={question.options}
          disabled={isQuizSubmitted}
        />
      );
    default:
      console.log("default");
      break;
  }
};
