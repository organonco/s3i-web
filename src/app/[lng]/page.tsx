"use client";
import { AddvertisedCard } from '@/components';
import { CourseCard } from '@/components/course-card';
import { Category } from '@/logic/interfaces';
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
    const newCourses = useCoursesStore(state => state.newCourses)
    const fetchCategoriesInfo = useCoursesStore(state => state.fetchCategoriesInfo)
    useEffect(() => {
        fetchCategoriesInfo()
    }, [])
    const macbookIphone = require('/src/assets/download.jpg');
    const macbookIphone1 = require('/src/assets/1509606.png');
    const macbookIphon2 = require('/src/assets/download.png');
    const redirectToDetails = (category: Category) => push(sitemap.id(category.id).url)
    const welcomeCards = [
        {
            icon_url: macbookIphon2
            , name: 'high_quality_content'
        },
        {
            icon_url: macbookIphone
            , name: 'flixable_learning'
        },
        {
            icon_url: macbookIphone1
            , name: 'professional'
        }]

    return (
        <Grid container gap={15} justifyContent={'center'}>
            <Grid container item lg={10} sx={{ justifyContent: 'space-between' }} >
                {welcomeCards.map(category => <Grid
                    key={category.name}
                    sx={{ borderColor: 'primary.light', borderWidth: 2, backgroundColor: 'background.lightShadow', display: 'inline-block', width: 200, height: 170, justifyContent: 'center', alignContent: 'center', borderRadius: 1 }}>
                    <AddvertisedCard icon={category.icon_url} name={t(`texts.${category.name}`)} />
                </Grid>)}
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center'>
                <Typography color='primary' variant='h4' marginBottom={5}>{t('texts.new_courses')}</Typography>
                <Grid container item lg={12} sx={{ justifyContent: 'space-between' }} >
                    {newCourses.slice(0, 3).map(course => <Grid key={course.id} sx={{ backgroundColor: 'background.lightShadow', width: 280, height: 250, borderRadius: 3 }}>
                        <CourseCard imageURL={course.image_url} subTitle={course.name} title={course.name} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}