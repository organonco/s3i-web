"use client";
import { CourseCard } from '@/components/course-card';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng, category }
}: {
    params: { lng: any, category: string }
}) {
    const { push } = useRouter()
    const fetchCategoryCourses = useCoursesStore(state => state.fetchCategoryCourses)
    const courses = useCoursesStore(state => state.courses)

    useEffect(() => {
        fetchCategoryCourses(category)
    }, [category])


    const redirectToDetails = (courseId: string) => push(sitemap.courses.courseDetails(category, courseId).url)

    const isMobile = (window.innerWidth <= 768)

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {courses?.map(course => <Grid
                        key={course.id}
                        onClick={() => redirectToDetails(course.id)}
                        sx={{ backgroundColor: 'background.lightShadow', width: isMobile ? 300 : 400, height: isMobile ? 300 : 400, borderRadius: 3, marginX: isMobile ? 0 : 2, marginY: isMobile ? 1 : 5 }}
                    >
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}