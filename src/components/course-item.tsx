import { COURSE_ITEM } from "@/logic/config";
import { CourseItemDetails } from "@/logic/interfaces";
import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { StyledButton, TimerButton } from ".";


interface CourseItemComponentPropsInterface {
    courseItem: CourseItemDetails
}

const iconsMap: { [key: string]: string } = {
    "video": "camera",
    "meeting": "timer",
    "text": "notebook-edit",
    "multiple_choice": "check-bold",
    "homework": "upload",
    "file": "attachment"
}


export const CourseItemComponent: FC<CourseItemComponentPropsInterface> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => { setExpanded(!expanded) }
    const getButtonStyle = () => !expanded ? {} : { borderBottomEndRadius: 0, borderBottomStartRadius: 0 }
    const type = props.courseItem.type == COURSE_ITEM.QUIZ ? props.courseItem.object.type : props.courseItem.type
    const openURL = () => {
        // Linking.openURL(courseItem?.object.url)
    }

    const goToVideoPlayer = () => { }
    const goToQuiz = () => { }

    const getCourseItemDetails = () => {
        switch (type) {
            case COURSE_ITEM.FILE:
                return <StyledButton onClick={() => { }} title={t('buttons.download')} style={{ alignSelf: 'center' }}
                />
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
                < >
                    <Typography style={{ textAlign: 'center', }}>{props.courseItem.object.name}</Typography>
                </ > :
                <Grid item md={12}>
                    <StyledButton onClick={handlePress} title={t('courseItemTypes.' + type)} icon={iconsMap[type]} />
                    {
                        !expanded ? null :
                            <>
                                <Typography style={{ textAlign: 'center', marginBottom: 10 }}> {props.courseItem.object.name} </Typography>
                                {getCourseItemDetails()}
                            </>
                    }
                </Grid >
        }
        </>
    )
}