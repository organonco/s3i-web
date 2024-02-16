"use client";
import { AddvertisedCard } from '@/components';
import { CourseCard } from '@/components/course-card';
import { Course } from '@/logic/interfaces';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Box, Button, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
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
    const welcomeImage1 = require('/src/assets/1.png');
    const welcomeImage2 = require('/src/assets/2.png');
    const welcomeImage3 = require('/src/assets/3.png');

    const welcomeCards = [
        {
            icon_url: welcomeImage3
            , name: 'high_quality_content'
        },
        {
            icon_url: welcomeImage2
            , name: 'flixable_learning'
        },
        {
            icon_url: welcomeImage1
            , name: 'professional'
        }]

    const redirectToCourse = (course: Course) => push(sitemap.courses.courseDetails(course.category.id, course.id).url)
    const studentsImage = require('/src/assets/students.png');
    return (
        <Grid container gap={10} justifyContent={'center'} >
            <Grid container item sx={{backgroundColor: "#123b45", width: "100%"}} justifyContent={'center'}>
                <Grid>
                    <Grid item sx={{paddingTop: 10}}>
                        <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold'}}>طور مهاراتك بشكل أسرع</Typography>
                        <Typography variant='h5' sx={{color: 'white', marginTop: 10, lineHeight: 2}}>واحدة من أفضل مواقع الدورات العربية الأونلاين <br/> ويمكنك القول أنها منصة للتدريب الالكتروني الاحترافي</Typography>
                        <Button style={{backgroundColor: "#329996", color: "white", padding: 10, paddingRight: 40, paddingLeft: 40, fontSize: 24, marginTop: 20}}>انضم الآن</Button>
                    </Grid>
                </Grid>
                <Image src={studentsImage} alt="" style={{paddingRight: 100, paddingTop: 30, paddingBottom: 30}}/>
            </Grid>
            <Grid container item lg={10} sx={{ justifyContent: 'center' }} >
                {welcomeCards.map(category => <Grid
                    key={category.name}
                    sx={{ borderColor: 'primary.light', borderWidth: 2, backgroundColor: 'background.lightShadow', display: 'inline-block', width: 400, height: 300, justifyContent: 'center', alignContent: 'center', borderRadius: 1, marginX: 5}}>
                    <AddvertisedCard icon={category.icon_url} name={t(`texts.${category.name}`)} />
                </Grid>)}
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center' mt={6}>
                <Typography color='primary.dark' variant='h3' marginBottom={5} fontWeight={'bold'}>{t('texts.new_courses')}</Typography>
                <Grid container item lg={12} sx={{ justifyContent: 'center' }} >
                    {newCourses.slice(0, 3).map(course => 
                    <Grid
                        key={course.id}
                        onClick={() => redirectToCourse(course)}
                        sx={{ backgroundColor: 'background.lightShadow', width: 400, height: 400, borderRadius: 3, marginX: 10, marginY: 5 }}>
                            <CourseCard imageURL={course.image_url} subTitle={course.description} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>

            <Grid item lg={12} alignItems='center' textAlign='center' mt={6}>
                <Typography color='primary.dark' variant='h3' marginBottom={5} fontWeight={'bold'}>{t('texts.most_requested_courses')}</Typography>
                <Grid container item lg={12} sx={{ justifyContent: 'center' }} >
                    {newCourses.slice(0, 3).map(course => 
                    <Grid
                        key={course.id}
                        onClick={() => redirectToCourse(course)}
                        sx={{ backgroundColor: 'background.lightShadow', width: 400, height: 400, borderRadius: 3, marginX: 10, marginY: 5 }}>
                            <CourseCard imageURL={course.image_url} subTitle={course.description} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}