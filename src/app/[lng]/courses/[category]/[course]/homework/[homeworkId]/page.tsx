"use client";
import { useCoursesStore } from '@/logic/store';
import { CircularProgress, Grid, Typography } from '@mui/material';
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
                : <Grid style={{ flex: 1, gap: 30 }}>
                    <Grid>
                        <Typography>{t('texts.your_homework')}</Typography>
                        {/* <FileDownloader fileURL={homework?.submission?.file_url} title={homework?.name} /> */}
                    </Grid>

                    {homework?.submission?.feedback && <>
                        <Typography variant='h5' color='primary.main'>{t('texts.professor_feedback') + ': '}</Typography>
                        <Typography>{homework?.submission?.feedback}</Typography>
                    </>}
                </Grid>}
        </Grid>
    );
}