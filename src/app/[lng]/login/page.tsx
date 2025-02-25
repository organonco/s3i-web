"use client";
import { useTranslation } from "@/app/i18n/client";
import { StyledTextField } from "@/components/text-field";
import { useCoursesStore } from "@/logic/store";
import { sitemap } from "@/site-map";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { loginValidationSchema } from './validation-schema';

export default function Page({
	params: { lng }
}: {
	params: { lng: any }
}) {
	const { t } = useTranslation(lng, 'translation')
	const { push } = useRouter()
	const initialValues = { phone: '', password: '' }
	const loginUser = useCoursesStore(state => state.loginUser)

	const handleSubmit = (values: FormikValues, { setSubmitting }) => {
		const valuesredirectToApp = () => push(sitemap.home.url)
		const redirectToVerify = (id: string) => push(sitemap.verify.url + id)
		loginUser(values, valuesredirectToApp, redirectToVerify, (value: boolean) => setSubmitting(value))
	}
	const handleRedirectToRegister = () => push(sitemap.register.url)
	const handleRedirectToForgetPassword = () => push(sitemap.forget_password.url)


	const isMobile = (window.innerWidth <= 768)


	return (
		<Grid container justifyContent={'center'} alignContent='center' height='100%' width={"100%"}>
			<Card sx={{ minWidth: isMobile ? "100%" : 600, width: isMobile ? "100%" : "20%" }}>
				<CardContent>
					<Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<Grid container direction={'column'} gap={2} justifyContent={'center'}>
									<StyledTextField translateKey="phone" name="phone" required />
									<StyledTextField translateKey="password" name="password" required type="password" />
									<Button variant="contained" type="submit" disabled={isSubmitting}>
										{t('buttons.login')}
									</Button>
									<Grid container alignItems={'center'} justifyContent={'space-between'}>
										<Typography>نسيت كلمة السر؟</Typography>
										<Button variant="text" color="primary" onClick={handleRedirectToForgetPassword}>
											{t('buttons.change_password')}
										</Button>
									</Grid>
									<Grid>
										<Typography style={{ width: '100%', textAlign: 'center' }}>ليس لديك حساب؟</Typography>
										<Button style={{ width: '100%', textAlign: 'center' }} variant="text" color="primary" onClick={handleRedirectToRegister}>
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