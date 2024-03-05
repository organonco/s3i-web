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
    // const backgroundImage = require('/src/assets/home/background.jpg');
    const logoImage = require('/src/assets/home/logo.png');
    const middleImage = require('/src/assets/home/image.png');

    const isMobile = (window.innerWidth <= 768)

    return (
        <Grid container gap={10} justifyContent={'center'}>
            <Grid container item sx={{backgroundImage: "url('https://admin.s3i.training/background.jpg')", width: "100%", marginTop: -8, zIndex: 2, padding: isMobile ? 2 : 0}} justifyContent={'center'}>
                <Grid>
                    <Grid item sx={{paddingTop: 10, paddingBottom: 10}}>
                        <Typography variant='h2' sx={{color: 'white', fontWeight: 'bold', fontSize: isMobile ? 40 : 64}}>طور مهاراتك بشكل أسرع</Typography>
                        <Typography variant='h5' sx={{color: 'white', marginTop: 10, lineHeight: 2, fontSize: isMobile ? 25: 30}}>واحدة من أفضل مواقع الدورات العربية الأونلاين <br/> ويمكنك القول أنها منصة للتدريب الالكتروني الاحترافي</Typography>
                        <Button style={{backgroundColor: "#329996", color: "white", padding: 10, paddingRight: 40, paddingLeft: 40, fontSize: 24, marginTop: 20, marginBottom: 20}} onClick={() => push(sitemap.register.url)}>انضم الآن</Button>
                    </Grid>
                </Grid>
                <Image src={logoImage} alt="" style={{paddingRight: isMobile ? 0 : 100, paddingTop: 30, paddingBottom: 30, width: '30%'}}/>
            </Grid>
            <Grid container item lg={10} sx={{ justifyContent: 'center' }} >
                <Image src={middleImage} alt="" style={{width: '80%'}}></Image>
            </Grid>
            <Grid item lg={12} alignItems='center' textAlign='center' mt={6}>
                <Typography color='primary.dark' variant='h3' marginBottom={isMobile ? 2 : 5} fontWeight={'bold'} fontSize={isMobile ? 25 : 50}>{t('texts.new_courses')}</Typography>
                <Grid container item lg={12} sx={{ justifyContent: 'center' }} >
                    {newCourses.slice(0, 3).map(course => 
                    <Grid
                        key={course.id}
                        onClick={() => redirectToCourse(course)}
                            sx={{ backgroundColor: 'background.lightShadow', width: isMobile ? 300 : 400, height: isMobile ? 300 : 400, borderRadius: 3, marginX: isMobile ? 0 : 2, marginY: isMobile ? 1 : 5 }}>
                            <CourseCard imageURL={course.image_url} subTitle={course.description} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>

            <Grid item lg={12} alignItems='center' textAlign='center' mt={6}>
                <Typography color='primary.dark' variant='h3' marginBottom={isMobile? 2 : 5} fontWeight={'bold'} fontSize={isMobile ? 25 : 50}>{t('texts.most_requested_courses')}</Typography>
                <Grid container item lg={12} sx={{ justifyContent: 'center' }} >
                    {newCourses.slice(0, 3).map(course => 
                    <Grid
                        key={course.id}
                        onClick={() => redirectToCourse(course)}
                            sx={{ backgroundColor: 'background.lightShadow', width: isMobile ? 300 : 400, height: isMobile ? 300 : 400, borderRadius: 3, marginX: isMobile ? 0 : 2, marginY: isMobile ? 1 : 5 }}>
                            <CourseCard imageURL={course.image_url} subTitle={course.description} title={course.name} isSubscribed={course.is_subscribed} />
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}