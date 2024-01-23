import { PasswordConfigs } from "@/logic/interfaces";
import { useCoursesStore } from "@/logic/store";
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { t } from "i18next";
import { FC } from "react";
import * as Yup from 'yup';
import { StyledTextField } from "..";

const registerValidationSchema = Yup.object().shape({
    old_password: Yup.string().min(8, 'min_8').required('required'),
    new_password: Yup.string().required('required'),
    new_password_confirmation: Yup.string().oneOf([Yup.ref('new_password'), null], 'Password_must_match').required('required'),
});


export const ChangePasswordPopup: FC<{ closePopup: () => void }> = (props) => {
    const { profileInfo, fetchRegisterInfo, registerInfo, updatePassword } = useCoursesStore()
    const initialValues: PasswordConfigs = { old_password: '', new_password: '', new_password_confirmation: '' };

    const handleSubmit = (values: PasswordConfigs, { setSubmitting }) => {
        const handleSuccess = () => {
            setSubmitting(false)
            props.closePopup()
        }
        updatePassword(values, props.closePopup, handleSuccess)
    };
    return (
        <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <DialogTitle variant="h5" color={'primary'}>{t('popup.title.change_password')}</DialogTitle>
                    <Divider />
                    <DialogContent>
                        <Grid container direction={'column'} gap={2} lg={12} my={3}>
                            <StyledTextField name='old_password' type='password' required translateKey='old_password' />
                            <StyledTextField name='new_password' type='password' required translateKey='new_password' />
                            <StyledTextField name='new_password_confirmation' type='password' required translateKey='new_password_confirmation' />
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" fullWidth variant='contained' disabled={isSubmitting && isValid}>{t('buttons.save')}</Button>
                    </DialogActions>
                </Form>
            )}
        </Formik>
    )
}