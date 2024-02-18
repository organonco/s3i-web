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
    const redirectToCourse = (course: Course) => push(sitemap.courses.courseDetails(course.category.id, course.id).url)

    const isMobile = (window.innerWidth <= 768)


    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                {categories.map(category => <Grid
                    onClick={() => redirectToDetails(category)}
                    key={category.id}
                    sx={{ borderColor: 'primary.light', opacity: 0.9, backgroundColor: '', display: 'inline-block', width: isMobile ? 100 : 200, height: isMobile ? 100 : 200, justifyContent: 'center', alignContent: 'center', borderRadius: isMobile ? 1 : 5 }}>
                    <CategoryCard icon={category.icon_url} name={category.name} />
                </Grid>)}
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Typography color='primary.dark' variant='h3' marginBottom={isMobile ? 2 : 5} fontWeight={'bold'} fontSize={isMobile ? 25 : 50}>{t('texts.all_courses')}</Typography>
                <Grid container item lg={12} sx={{ gap: 4, justifyContent: 'center' }} >
                    {newCourses.map(course => <Grid
                        onClick={() => redirectToCourse(course)}
                        key={course.id}
                        sx={{ backgroundColor: 'background.lightShadow', width: isMobile ? 300 : 400, height: isMobile ? 300 : 400, borderRadius: 3, marginX: isMobile ? 0 : 2, marginY: isMobile ? 1 : 5 }}>
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} isSubscribed={course.is_subscribed}/>
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}