"use client";
import { CategoryCard } from '@/components/category-card';
import { CourseCard } from '@/components/course-card';
import { useCoursesStore } from '@/logic/store';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const categories = useCoursesStore(state => state.categories)
    const newCourses = useCoursesStore(state => state.newCourses)
    const fetchCategoriesInfo = useCoursesStore(state => state.fetchCategoriesInfo)

    useEffect(() => {
        fetchCategoriesInfo()
    }, [])

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                {categories.map(category => <Grid key={category.id} sx={{ borderColor: 'primary.main', opacity: 0.9, borderWidth: 0.1, backgroundColor: 'background.shadow', display: 'inline-block', width: 120, height: 120, justifyContent: 'center', alignContent: 'center', borderRadius: 3 }}>
                    <CategoryCard icon={category.icon_url} name={category.name} />
                </Grid>)}
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Typography variant='h3' marginBottom={5}>الدورات الجديدة</Typography>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {newCourses.map(course => <Grid key={course.id} sx={{ backgroundColor: 'background.lightShadow', width: 280, height: 250, borderRadius: 3 }}>
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}