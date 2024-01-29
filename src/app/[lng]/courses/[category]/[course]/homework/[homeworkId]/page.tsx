"use client";
import { FileDownloader } from '@/components/file-downloader';
import { useCoursesStore } from '@/logic/store';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { useEffect } from 'react';


export default function Page({
    params: { lng, homeworkId }
}: {
    params: { lng: any, homeworkId: string }
}) {

    const { homework, fetchCourseHomeworkDetails, loadingCourseHomework } = useCoursesStore();

    useEffect(() => fetchCourseHomeworkDetails(homeworkId), [homeworkId])

    return (
        <Grid >
            {loadingCourseHomework ? <CircularProgress />
                : <Grid container>
                    <Grid container item direction={'row'} lg={12} alignItems={'center'}>
                        <Typography ml={1}>{t('texts.your_homework')}</Typography><FileDownloader url={homework?.submission?.file_url} text />
                    </Grid>

                    {homework?.submission?.feedback && <Grid item md={12} my={4}>
                        <Typography variant='h3' color='primary.main' mb={2}>{t('texts.professor_feedback') + ': '}</Typography>
                        <Typography variant='h6'>{homework?.submission?.feedback}</Typography>
                    </Grid>}
                </Grid>}
        </Grid>
    );
}