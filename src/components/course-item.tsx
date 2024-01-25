import { COURSE_ITEM } from "@/logic/config";
import { CourseDetails, CourseItemDetails } from "@/logic/interfaces";
import { sitemap } from "@/site-map";
import { AttachFile, CameraAlt, Check, Note, Timer, Upload } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { StyledAccordion, StyledButton, TimerButton } from ".";


interface CourseItemComponentPropsInterface {
    courseItem: CourseItemDetails
    courseDetails: CourseDetails
}

const iconsMap: { [key: string]: ReactNode } = {
    "video": <CameraAlt />,
    "meeting": <Timer />,
    "text": <Note />,
    "multiple_choice": <Check />,
    "homework": <Upload />,
    "file": <AttachFile />
}


export const CourseItemComponent: FC<CourseItemComponentPropsInterface> = (props) => {
    const { push } = useRouter()
    const type = props.courseItem.type == COURSE_ITEM.QUIZ ? props.courseItem.object.type : props.courseItem.type
    const openURL = () => {
        window.open(props.courseItem.url);
    }

    const goToVideoPlayer = () => push(sitemap.courses.video_player(props.courseDetails.category.id, props.courseDetails.id).url)
    const goToQuiz = () => push(sitemap.courses.quiz(props.courseDetails.category.id, props.courseDetails.id).url)

    const getCourseItemDetails = () => {
        switch (type) {
            case COURSE_ITEM.FILE:
                return <StyledButton onClick={() => { }} title={t('buttons.download')} />
            case COURSE_ITEM.MEETING:
                return <>
                    {
                        props.courseItem?.object?.date != null ?
                            <>
                                <Typography>{props.courseItem?.object?.time}</Typography>
                                <Typography>{props.courseItem?.object?.date}</Typography>
                            </>
                            :
                            <Typography style={{ textAlign: 'center' }}>{t('labels.meeting_not_set')}</Typography>
                    }
                    <TimerButton
                        handleClick={openURL}
                        title={props.courseItem?.object.name}
                        date={props.courseItem?.object.date}
                        time={props.courseItem?.object.time}
                    />
                </>
            case COURSE_ITEM.VIDEO:
                return <StyledButton onClick={goToVideoPlayer} title={t('buttons.open_video')}
                />
            case COURSE_ITEM.MULTIPLE:
                return <>
                    {
                        props.courseItem.object.is_submitted ?
                            <Typography style={{ textAlign: 'center' }}>
                                {t('labels.quiz_submitted')}
                            </Typography>
                            :
                            (
                                props.courseItem.object.time_limit ?
                                    <Typography style={{ textAlign: 'center' }}>{t('labels.quiz_time_limit') + props.courseItem.object.time_limit + t('labels.minute')}</Typography>
                                    :
                                    <Typography style={{ textAlign: 'center' }}>{t('labels_no_time_limit')}</Typography>
                            )
                    }
                    <StyledButton onClick={goToQuiz} title={props.courseItem.object.is_submitted ? t('buttons.view_feedback') : t('buttons.open_multiple')}
                    />
                </>
            case COURSE_ITEM.TEXT:
                return <>
                    {
                        props.courseItem.object.is_submitted ? null :
                            <Typography style={{ textAlign: 'center' }}>{t('labels.file_submitted')}</Typography>
                    }
                    <StyledButton onClick={goToQuiz} title={props.courseItem.object.is_submitted ? t('buttons.view_feedback') : t('buttons.open_text')}
                    />
                </>
            case COURSE_ITEM.HOMEWORK:
                return <>
                    {
                        props.courseItem.object.submission == null ? null :
                            <Typography style={{ textAlign: 'center' }}>{t('labels.file_submitted')}</Typography>
                    }
                    {/* <Homework courseItem={props.courseItem} navigation={navigation} /> */}
                </>
        }
    }

    return (
        <>{
            props.courseItem.type == 'section' ?
                <Typography variant='h5' textAlign={'center'} color='primary.dark' my={3}> {props.courseItem.object.name}</Typography>
                :
                <Grid item md={12}>
                    <StyledAccordion title={t('courseItemTypes.' + type)} icon={iconsMap[type]}>
                        <Typography style={{ textAlign: 'center', marginBottom: 10 }}> {props.courseItem.object.name} </Typography>
                        {getCourseItemDetails()}
                    </StyledAccordion>
                </Grid >
        }
        </>
    )
}