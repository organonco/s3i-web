"use client";
import { CourseCard } from '@/components/course-card';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng, category, course }
}: {
    params: { lng: any, category: string, course: string }
}) {
    const { push } = useRouter()
    const fetchCategoryCourses = useCoursesStore(state => state.fetchCategoryCourses)
    const courses = useCoursesStore(state => state.courses)

    useEffect(() => {
        fetchCategoryCourses(category)
    }, [category])


    const redirectToDetails = (courseId: string) => push(sitemap.courseDetails(category, courseId).url)

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {courses?.map(course => <Grid
                        key={course.id}
                        onClick={() => redirectToDetails(course.id)}
                        sx={{ backgroundColor: 'background.lightShadow', width: 280, height: 250, borderRadius: 3 }}
                    >
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}