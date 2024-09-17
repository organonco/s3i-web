"use client";
import { useTranslation } from "@/app/i18n/client";
import { StyledTextField } from "@/components/text-field";
import { useCoursesStore } from "@/logic/store";
import { sitemap } from "@/site-map";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { verifyValidationSchema } from './validation-schema';
import { useStore } from "zustand";

export default function Page({
    params: { lng, verification }
}: {
    params: { lng: any, verification: string }
}) {
    const { t } = useTranslation(lng, 'translation')
    const { push } = useRouter()
    const initialValues = { code: '' }
	

	const sendForgetPassword = useCoursesStore(state => state.sendForgetPassword)

	const redirectToForgetPasswordReset = (id: string) => push(sitemap.forget_password_reset.url + id)

	const handleSubmit = (values: { phone: string }, { setSubmitting }) => {
		sendForgetPassword(values, redirectToForgetPasswordReset, setSubmitting);
	}


    const isMobile = (window.innerWidth <= 768)


    return (
        <Grid container justifyContent={'center'} alignContent='center' height='100%' width={"100%"} paddingTop={20}>
            <Card sx={{ minWidth: isMobile ? "100%" : 600, width: isMobile ? "100%" : "20%" }}>
                <CardContent>
					<Typography variant="h4" paddingBottom={2}>
						تغيير كلمة المرور
					</Typography>
					<Typography variant="body1" paddingBottom={3}>
						أدخل رقم الهاتف
					</Typography>
                    <Formik initialValues={initialValues} validationSchema={verifyValidationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Grid container direction={'column'} gap={6} justifyContent={'center'}>
                                    <StyledTextField translateKey="phone" name="phone" required />
                                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                                        {t('buttons.send_verification_code')}
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