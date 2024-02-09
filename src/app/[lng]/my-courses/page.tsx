"use client";
import { CourseCard } from '@/components/course-card';
import { Course } from '@/logic/interfaces';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any}
}) {
    const { push } = useRouter()

    const courses = useCoursesStore(state => state.myCourses)
    const fetchMyCourses = useCoursesStore(state => state.fetchMyCourses)


    useEffect(() => {
        fetchMyCourses()
    }, [])

    
    const redirectToCourse = (course: Course) => push(sitemap.courses.courseDetails(course.category.id, course.id).url)

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {courses?.map(course => <Grid
                        key={course.id}
                        onClick={() => redirectToCourse(course)}
                        sx={{ backgroundColor: 'background.lightShadow', width: 400, height: 400, borderRadius: 3 }}
                    >
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}