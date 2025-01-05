import { COURSE_ITEM } from "@/logic/config";
import { CourseDetails, CourseItemDetails } from "@/logic/interfaces";
import { sitemap } from "@/site-map";
import { AttachFile, CameraAlt, Check, Note, Star, Timer, Upload, VideoCameraFront, VideoFile, YouTube } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactNode, useCallback } from "react";
import { StyledAccordion, StyledButton, TimerButton } from ".";
import { FileDownloader } from "./file-downloader";
import { Homework } from "./homework-component";
import { useStore } from "zustand";
import { useCoursesStore } from "@/logic/store";


interface CourseItemComponentPropsInterface {
    courseItem: CourseItemDetails
    courseDetails: CourseDetails
}

const iconsMap: { [key: string]: ReactNode } = {
    "video": <YouTube />,
    "meeting": <Timer />,
    "text": <Note />,
    "multiple_choice": <Check />,
    "homework": <Upload />,
    "file": <AttachFile />,
    "review": <Star />
}


export const CourseItemComponent: FC<CourseItemComponentPropsInterface> = (props) => {
    const { push } = useRouter()
    const type = props.courseItem.type == COURSE_ITEM.QUIZ ? props.courseItem.object.type : props.courseItem.type
    const openURL = () => {
        window.open(props.courseItem.url);
    }
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    const handleClick = async (fileurl: string) => {
        const response = await fetch(fileurl);

        if (response.status !== 200) {
            console.error(response.status, response.statusText);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'filename.txt';
        link.click();
    };
    const goToVideoPlayer = () => {
        const url = props.courseItem.object.url ?? ''
        const videoIdIndex = url.indexOf('v=');
        let videoId = '' as string
        if (videoIdIndex !== -1) {
            const videoIdStartIndex = videoIdIndex + 2;
            const videoIdEndIndex = url.indexOf('&', videoIdStartIndex);
            videoId = videoIdEndIndex !== -1 ? url.substring(videoIdStartIndex, videoIdEndIndex) : url.substring(videoIdStartIndex);
        }
        const video_url = sitemap.courses.video_player(props.courseDetails.category.id, props.courseDetails.id, videoId).url
        push(video_url)
    }

    const goToQuiz = () => {
        push(sitemap.courses.quiz(props.courseDetails.category.id, props.courseDetails.id, props.courseItem?.id).url)
    }



    const getCourseItemDetails = () => {
        switch (type) {
            case COURSE_ITEM.FILE:
                return <FileDownloader url={props.courseItem.object.file_url} />
            // return <a download href={props.courseItem.object.file_url}> Get file </a>
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
                return <StyledButton onClick={goToVideoPlayer} title={t('buttons.open_video')} />
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
                                    <Typography style={{ textAlign: 'center' }}>{t('labels.no_time_limit')}</Typography>
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
                    <Homework courseDetails={props.courseDetails} courseItem={props.courseItem} />
                </>
            case COURSE_ITEM.REVIEW:
                return <>
                    {
                        props.courseItem.object.is_submitted ?
                            <Typography style={{ textAlign: 'center' }}>{t('labels.review_submitted')}</Typography>
                            :
                            <StyledButton onClick={goToQuiz} title={t('buttons.open_review')}
                            />
                    }
                </>
        }
    }

    return (
        <>{
            props.courseItem.type == 'section' ?
                <>
                    <Typography variant='h4' textAlign={'center'} color='primary.dark' my={2}> {props.courseItem.object.name}</Typography>
                    <Typography variant='body1' textAlign={'center'} color='primary.dark' mb={2}> {props.courseItem.object.description}</Typography>
                </>
                :
                <Grid sx={{ paddingX: 20 }}>
                    <StyledAccordion title={t('courseItemTypes.' + type)} icon={iconsMap[type]}>
                        <Typography style={{ textAlign: 'center', marginBottom: 10 }}> {props.courseItem.object.name} </Typography>
                        <Typography style={{ textAlign: 'center', marginBottom: 10 }}> {props.courseItem.object.description} </Typography>
                        {getCourseItemDetails()}
                    </StyledAccordion>
                </Grid >
        }
        </>
    )
}