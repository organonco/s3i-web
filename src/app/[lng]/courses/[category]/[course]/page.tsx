"use client";
import { StyledImage } from '@/components';
import { useCoursesStore } from '@/logic/store';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng, category, course }
}: {
    params: { lng: any, category: string, course: string }
}) {
    const { push } = useRouter()
    const { loadingCourseDetails, fetchCourseDetails, courseDetails, authenticatedStatus, subscribeToCourse } = useCoursesStore()

    useEffect(() => {
        fetchCourseDetails(course)
    }, [course])


    return (
        <Grid container gap={5} justifyContent={'center'}>
            <Grid md={12} textAlign={'center'}>
                <Typography variant='h4' color={'primary.main'}>{courseDetails?.name}</Typography>
            </Grid>
            <Grid md={12} textAlign={'center'}>
                <div style={{ width: '100%', height: 300, position: 'relative', borderRadius: '50px', overflow: 'hidden' }}>
                    <StyledImage imageURL={courseDetails?.image_url} />
                </div>
            </Grid>
        </Grid>
    )
}