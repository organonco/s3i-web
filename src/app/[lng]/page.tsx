"use client";
import { AddvertisedCard, PartnerCard } from '@/components';
import { CourseCard } from '@/components/course-card';
import { USER_STATUS } from '@/logic/config';
import { Course } from '@/logic/interfaces';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Box, Button, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { push } = useRouter()
    const newCourses = useCoursesStore(state => state.newCourses)
    const authenticatedStatus = useCoursesStore(state => state.authenticatedStatus)
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

    const logoImage = require('/src/assets/home/logo.png');
    const middleImage = require('/src/assets/home/image.png');
    const backgroundImage = require('/src/assets/home/background.jpg');

    const isMobile = (window.innerWidth <= 768)

    return (
        <Grid container gap={isMobile ? 2 : 10} justifyContent={'center'}>
            <Image style={{ position: 'absolute', 'top': 0, right: 0, width: '100%', height: isMobile ? '820px' : '600px', objectFit: 'cover' }} src={backgroundImage} alt=""></Image>
            <Grid container item sx={{ backgroundImage: "url('')", width: "100%", marginTop: 0, zIndex: 2, paddingX: isMobile ? 4 : 0 }} justifyContent={'space-around'} alignItems={isMobile ? 'center' : ' right'}>
                {
                    isMobile && <Image src={logoImage} alt="" style={{ width: '200px', height: '200px', marginTop: 0 }} />
                }
                <Grid>
                    <Grid item sx={{ paddingTop: isMobile ? 4 : 10, paddingBottom: 10, alignItems: 'center', display: isMobile ? 'flex' : "block", flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ color: 'white', fontWeight: 'bold', fontSize: isMobile ? 40 : 64, lineHeight: 1.7, textAlign: isMobile ? 'center' : 'right' }}>منصة سعي للتدريب والتأهيل </Typography>
                        <Typography variant='h2' sx={{ color: 'white', lineHeight: 2, fontSize: isMobile ? 30 : 50, fontWeight: 'bold', textAlign: isMobile ? 'center' : 'right' }}>Study Without Ink</Typography>
                        {
                            authenticatedStatus == USER_STATUS.NOT_LOGGEN_IN &&
                            <Button style={{ marginRight: isMobile ? 0 : 10, backgroundColor: "#FFFFFF77", color: "white", padding: 5, paddingRight: 80, paddingLeft: 80, fontSize: 24, marginTop: 20, marginBottom: 20 }} onClick={() => push(sitemap.register.url)}>التسجيل</Button>
                        }
                        <Link href="https://admin.s3i.training/app.apk" target='_blank'>
                            <Button style={{ marginRight: isMobile ? 0 : 10, backgroundColor: "#FFFFFF77", color: "white", padding: 5, paddingRight: 80, paddingLeft: 80, fontSize: 24, marginTop: isMobile ? 10 : 20, marginBottom: 20 }}>تحميل التطبيق</Button>
                        </Link>
                    </Grid>
                </Grid>
                {
                    !isMobile && <Image src={logoImage} alt="" style={{ marginRight: 100, width: '300px', height: '300px' }} />
                }

            </Grid>


            <Grid container item lg={10} sx={{ justifyContent: 'center' }} >
                <Image src={middleImage} alt="" style={{ width: '80%' }}></Image>
            </Grid>
{/* 
            <Grid item lg={12} alignItems='center' textAlign='center' mt={6} py={6} sx={{ backgroundColor: 'primary.main' }}>
                <Typography color='white' variant='h3' marginBottom={isMobile ? 2 : 5} fontWeight={'bold'} fontSize={isMobile ? 25 : 50}>{t('texts.partners')}</Typography>
                <Grid container gap={5} justifyContent={'center'} >
                    <PartnerCard name={"الهيئة الوطنية لخدمات تقانة المعلومات"} imageUrl={"https://admin.s3i.training/partners/1.png"} height={320} ></PartnerCard>
                    <PartnerCard name={"وزارة التنمية الإدارية"} imageUrl={"https://admin.s3i.training/partners/2.png"} height={320}></PartnerCard>
                    <PartnerCard name={"غرفة تجارة دمشق"} imageUrl={"https://admin.s3i.training/partners/3.jpg"} height={320}></PartnerCard>
                </Grid>
            </Grid> */}


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
                <Typography color='primary.dark' variant='h3' marginBottom={isMobile ? 2 : 5} fontWeight={'bold'} fontSize={isMobile ? 25 : 50}>{t('texts.most_requested_courses')}</Typography>
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
        </Grid >
    )
}