"use client";
import { CourseItemComponent, StyledImage, StyledTextField } from '@/components';
import { USER_STATUS } from '@/logic/config';
import { usePopup } from '@/logic/hooks';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { YouTube } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { FC, useEffect } from 'react';
import * as Yup from 'yup';


export default function Page({
    params: { lng, category, course }
}: {
    params: { lng: any, category: string, course: string }
}) {
    const { push } = useRouter()
    const { fetchCourseDetails, courseDetails, authenticatedStatus } = useCoursesStore()

    useEffect(() => {
        fetchCourseDetails(course)
    }, [course])

    const redirectToLogin = () => push(sitemap.login.url)
    const subscribePopup = usePopup()
    const isMobile = (window.innerWidth <= 768)


    return (
        <Grid container gap={5} justifyContent={'center'}>
            <Grid container gap={2} md={12} textAlign={'center'} justifyContent={'center'}>
                <div style={{ width: isMobile ? 300 : 400, height: isMobile ? 300 : 400, position: 'relative', borderRadius: '50px', overflow: 'hidden' }}>
                    <StyledImage imageURL={courseDetails?.image_url} />
                </div>
                <Grid item md={6} container sx={{ alignContent: 'center', paddingX: isMobile ? 4 : 10 }}>
                    <Typography variant='h3' color={'primary.main'} sx={{ marginBottom: 5 }}>{courseDetails?.name}</Typography>
                    <Typography textAlign={'right'} sx={{ whiteSpace: 'pre-wrap' }}>{courseDetails?.description}</Typography>
                </Grid>
            </Grid>
            <Grid item container md={7} direction={'column'} justifyContent={'center'}>

                <Button color='error' sx={{ backgroundColor: 'white', borderColor: 'red', borderWidth: 1, borderStyle: 'solid', paddingX: 10, marginX: isMobile ? 4 : 20, marginTop: 10 }} href={courseDetails?.introduction_video_url} target='_blank'> فيديو تعريفي</Button>
                {/* {authenticatedStatus === USER_STATUS.LOGGED_IN && courseDetails?.is_subscribed && <Button variant="contained" sx={{ paddingX: 10, marginX: isMobile ? 4 : 20, marginTop: 1 }} href={courseDetails?.telegram_url} target='_blank'> مجموعة التلغرام</Button>} */}

                {authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN ? <Button onClick={redirectToLogin} variant='contained' sx={{ paddingX: 10, marginX: isMobile ? 4 : 20, marginTop: 1 }}>
                    {t('buttons.login')}
                </Button>
                    : courseDetails?.is_subscribed ? <Grid container sx={{ marginTop: 10 }}>
                        {courseDetails?.items?.map(courseItem => <Grid item md={12} key={courseItem.id} container direction='column' gap={5} sx={{ marginBottom: 2 }}>
                            <CourseItemComponent courseItem={courseItem} courseDetails={courseDetails} />
                        </Grid>)}
                    </Grid>
                        // if the user is logged in but not subscribed to the course
                        : courseDetails?.is_subscribed === false ? <>
                            <Button variant='contained' onClick={subscribePopup.handleOpen} sx={{ paddingX: 10, marginX: isMobile ? 4 : 20, marginTop: 1 }}>{t('buttons.subscribe')}</Button>
                            <Dialog
                                open={subscribePopup.isOpen}
                                onClose={subscribePopup.handleClose}
                                fullWidth
                            >
                                <SubscribeDialogContent closePopup={subscribePopup.handleClose} />
                            </Dialog>
                        </> : <></>}
            </Grid>
        </Grid>
    )
}



const SubscribeDialogContent: FC<{ closePopup: () => void }> = (props) => {
    const { courseDetails, subscribeToCourse, purchaseCourse } = useCoursesStore()
    const router = useRouter()

    const handleSubmit = (values: { token: string }, { setSubmitting }) => {
        subscribeToCourse(values, courseDetails?.id ?? '', props.closePopup, () => setSubmitting(false))
    }

    const redirect = (redirect_url: string) => {
        router.push(redirect_url)
    }

    const handlePurchase = (values: { course_id: string }, { setSubmitting }) => {
        purchaseCourse(values, redirect)
    }
    return (
        <>
            <DialogTitle>{t('popup.subtitle.subscribe')}</DialogTitle>
            <Formik initialValues={{ token: '' }} validationSchema={Yup.object().shape({ token: Yup.string().required('required') })} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <DialogContent>
                            <StyledTextField translateKey="token" name="token" required type="password" />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" fullWidth variant='contained'>{t('buttons.subscribe')}</Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
            {
                courseDetails?.price > 0 &&
                <>
                    <DialogTitle>{t('popup.subtitle.purchase')}</DialogTitle>
                    <Formik initialValues={{ course_id: courseDetails?.id }} onSubmit={handlePurchase}>
                        {({ isSubmitting }) => (
                            <Form>
                                <DialogActions>
                                    <Button type="submit" fullWidth variant='contained'>{t('popup.subtitle.purchase_button')}</Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </>
            }
        </>

    )
}