"use client";
import { CourseItemComponent, StyledImage, StyledTextField } from '@/components';
import { USER_STATUS } from '@/logic/config';
import { usePopup } from '@/logic/hooks';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';
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

    return (
        <Grid container gap={5} justifyContent={'center'}>
            <Grid md={12} textAlign={'center'} mb={2}>
                <Typography variant='h3' color={'primary.main'}>{courseDetails?.name}</Typography>
            </Grid>
            <Grid container gap={2} md={12} textAlign={'center'} justifyContent={'center'}>
                <div style={{ width: '100%', height: 300, position: 'relative', borderRadius: '50px', overflow: 'hidden' }}>
                    <StyledImage imageURL={courseDetails?.image_url} />
                </div>
                <Grid item md={6} container>
                    <Typography textAlign={'center'}>{courseDetails?.description}</Typography>
                </Grid>
            </Grid>
            <Grid item container md={7} direction={'column'} justifyContent={'center'}>
                {authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN ? <Button onClick={redirectToLogin} variant='contained'>
                    {t('buttons.login')}
                </Button>
                    // if the user is logged in and subscribed
                    : courseDetails?.is_subscribed ? <Grid container>
                        {courseDetails?.items?.map(courseItem => <Grid item md={12} key={courseItem.id} container direction='column' gap={5}>
                            <CourseItemComponent courseItem={courseItem} courseDetails={courseDetails} />
                        </Grid>)}
                    </Grid>
                        // if the user is logged in but not subscribed to the course
                        : courseDetails?.is_subscribed === false ? <>
                            <Button variant='contained' onClick={subscribePopup.handleOpen}>{t('buttons.subscribe')}</Button>
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
    const { courseDetails, subscribeToCourse } = useCoursesStore()
    const handleSubmit = (values: { token: string }, { setSubmitting }) => {
        subscribeToCourse(values, courseDetails?.id ?? '', props.closePopup, () => setSubmitting(false))
    }
    return (
        <Formik initialValues={{ token: '' }} validationSchema={Yup.object().shape({ token: Yup.string().required('required') })} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {t('popup.subtitle.subscribe')}
                        </DialogContentText>

                        <StyledTextField translateKey="token" name="token" required type="password" />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" fullWidth variant='contained'>{t('buttons.subscribe')}</Button>
                    </DialogActions>
                </Form>
            )}
        </Formik>
    )
}