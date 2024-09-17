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
    params: { lng, id }
}: {
    params: { lng: any, id: string }
}) {
    const { t } = useTranslation(lng, 'translation')
    const { push } = useRouter()
    const initialValues = {  }

	const resetForgetPassword = useCoursesStore(state => state.resetForgetPassword)

	const redirectToLogin = () => push(sitemap.login.url)

	const handleSubmit = (values: { code: string, password: string, password_confirmation: string }, { setSubmitting }) => {
		resetForgetPassword({id: id, code: values.code, password: values.password}, redirectToLogin, setSubmitting);
	}


    const isMobile = (window.innerWidth <= 768)


    return (
        <Grid container justifyContent={'center'} alignContent='center' height='100%' width={"100%"} paddingTop={20}>
            <Card sx={{ minWidth: isMobile ? "100%" : 600, width: isMobile ? "100%" : "20%" }}>
                <CardContent>
					<Typography variant="h4" paddingBottom={2}>
						تغيير كلمة المرور
					</Typography>
                    <Formik initialValues={initialValues} validationSchema={verifyValidationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Grid container direction={'column'} gap={2} justifyContent={'center'}>
                                    <StyledTextField translateKey="code" name="code" required />
									<StyledTextField translateKey="password" name="password" required type="password"/>
									<StyledTextField translateKey="password_confirmation" name="password_confirmation" type="password" required />
                                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                                        {t('buttons.change_password')}
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