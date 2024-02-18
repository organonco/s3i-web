"use client";
import { useTranslation } from "@/app/i18n/client";
import { StyledDatePicker, StyledSelect } from "@/components";
import { StyledTextField } from "@/components/text-field";
import { RegisterInfo } from "@/logic/interfaces";
import { useCoursesStore } from "@/logic/store";
import { sitemap } from "@/site-map";
import { Button, Card, CardContent, Grid } from "@mui/material";
import dayjs from "dayjs";
import { Form, Formik, FormikValues } from "formik";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { registerValidationSchema } from './validation-schema';

export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    // const fetchCategoriesInfo = useCoursesStore(state => state.fetchCategoriesInfo)
    const { t } = useTranslation(lng, 'translation')
    const { push } = useRouter()
    const initialValues: RegisterInfo = { name_ar: '', name_en: '', phone: '', email: '', date_of_birth: dayjs(Date.now()), nationality_id: '', education_level_id: '', reference: '', address: '', password: '', password_confirmation: '' };
    const { registerUser, fetchRegisterInfo, registerInfo } = useCoursesStore()

    const handleSubmit = (values: FormikValues, { setSubmitting }) => {
        const redirectToThankYou = () => push(sitemap.thank_you.url)
        const newValues = { ...values, date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD') }
        registerUser(newValues, redirectToThankYou, (value: boolean) => setSubmitting(value))
    }
    useEffect(() => {
        fetchRegisterInfo()
    }, [])

    const isMobile = (window.innerWidth <= 768)

    return (
        <Grid container justifyContent={'center'} alignContent='center' height='100%' width={"100%"}>
            <Card sx={{ minWidth: isMobile ? "100%" : 600, width: isMobile ? "100%" : "20%" }}>
                <CardContent>
                    <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Grid item direction={'column'} sx={{ width: "100%"}}>
                                    <Grid container direction={'column'} gap={2} lg={12} sx={{ width: "100%" }}>
                                        <StyledTextField translateKey="name_ar" name="name_ar" required />
                                        <StyledTextField translateKey="name_en" name="name_en" required />
                                        <StyledTextField translateKey="phone" name="phone" required />
                                        <StyledTextField translateKey="email" name="email" />
                                        <StyledTextField translateKey="address" name="address" required />
                                        <StyledTextField translateKey="reference" name="reference" />
                                        <StyledTextField translateKey="password" name="password" required type='password' />
                                        <StyledTextField translateKey="password_confirmation" name="password_confirmation" required type='password' />

                                        <StyledSelect translateKey="education_level" name="education_level_id" options={registerInfo?.education_levels ?? []} />
                                        <StyledSelect translateKey="nationality" name="nationality_id" options={registerInfo?.nationalities ?? []} />

                                        <StyledDatePicker name='date_of_birth' />


                                        <Button variant="contained" type="submit" disabled={isSubmitting} sx={{ mt: 4 }}>
                                            {t('buttons.register')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </Grid>

    )
}