"use client";
import { useTranslation } from "@/app/i18n/client";
import { StyledTextField } from "@/components/text-field";
import { useCoursesStore } from "@/logic/store";
import { sitemap } from "@/site-map";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { verifyValidationSchema } from './validation-schema';

export default function Page({
    params: { lng, verification }
}: {
    params: { lng: any, verification: string }
}) {
    const { t } = useTranslation(lng, 'translation')
    const { push } = useRouter()
    const initialValues = { code: '' }
	
    const verifyUser = useCoursesStore(state => state.verifyUser)

    const handleSubmit = (values: FormikValues, { setSubmitting }) => {
		const valuesredirectToApp = () => push(sitemap.home.url)
        verifyUser({code: values.code, id: verification}, valuesredirectToApp, (value: boolean) => setSubmitting(value))
    }
    // const handleRedirectToRegister = () => push(sitemap.register.url)


    const isMobile = (window.innerWidth <= 768)


    return (
        <Grid container justifyContent={'center'} alignContent='center' height='100%' width={"100%"} paddingTop={20}>
            <Card sx={{ minWidth: isMobile ? "100%" : 600, width: isMobile ? "100%" : "20%" }}>
                <CardContent>
					<Typography variant="h4" paddingBottom={2}>
						يجب تأكيد رقم الهاتف للمتابعة
					</Typography>
					<Typography variant="body1" paddingBottom={3}>
						تم ارسال رمز التأكيد برسالة نصية للرقم المدخل
					</Typography>
                    <Formik initialValues={initialValues} validationSchema={verifyValidationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Grid container direction={'column'} gap={6} justifyContent={'center'}>
                                    <StyledTextField translateKey="code" name="code" required />
                                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                                        {t('buttons.verify')}
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </Grid>
    )
}