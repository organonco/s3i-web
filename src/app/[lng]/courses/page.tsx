"use client";
import { CategoryCard } from '@/components/category-card';
import { CourseCard } from '@/components/course-card';
import { Category, Course } from '@/logic/interfaces';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { push } = useRouter()
    const categories = useCoursesStore(state => state.categories)
    const newCourses = useCoursesStore(state => state.newCourses)
    const fetchCategoriesInfo = useCoursesStore(state => state.fetchCategoriesInfo)

    useEffect(() => {
        fetchCategoriesInfo()
    }, [])

    const redirectToDetails = (category: Category) => push(sitemap.courses.id(category.id).url)
    const redirectToCourse = (course: Course) => push(sitemap.courses.courseDetails(course.category_id, course.id).url)

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                {categories.map(category => <Grid
                    onClick={() => redirectToDetails(category)}
                    key={category.id}
                    sx={{ borderColor: 'primary.light', opacity: 0.9, borderWidth: 0.1, backgroundColor: 'background.shadow', display: 'inline-block', width: 120, height: 120, justifyContent: 'center', alignContent: 'center', borderRadius: 3 }}>
                    <CategoryCard icon={category.icon_url} name={category.name} />
                </Grid>)}
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Typography color='primary' variant='h4' marginBottom={5}>{t('texts.new_courses')}</Typography>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {newCourses.map(course => <Grid
                        onClick={() => redirectToCourse(course)}
                        key={course.id}
                        sx={{ backgroundColor: 'background.lightShadow', width: 280, height: 250, borderRadius: 3 }}>
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}