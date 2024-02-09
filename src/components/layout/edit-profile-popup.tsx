import { EditProfileInfo } from "@/logic/interfaces";
import { useCoursesStore } from "@/logic/store";
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Grid } from "@mui/material";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import { t } from "i18next";
import moment from "moment";
import { FC, useEffect } from "react";
import * as Yup from 'yup';
import { StyledDatePicker, StyledSelect, StyledTextField } from "..";

const registerValidationSchema = Yup.object().shape({
    name_ar: Yup.string().required('required'),
    name_en: Yup.string().required('required'),
    email: Yup.string().email('email').required('required'),
    address: Yup.string().required('required'),
    date_of_birth: Yup.date().typeError('valid_date').required('required'),
    nationality_id: Yup.string().required('required'),
    education_level_id: Yup.string().required('required'),
});


export const EditProfilePopup: FC<{ closePopup: () => void }> = (props) => {
    const { profileInfo, fetchRegisterInfo, registerInfo, saveProfileData } = useCoursesStore()
    const initialValues: EditProfileInfo = { ...profileInfo, date_of_birth: dayjs(profileInfo.date_of_birth), nationality_id: profileInfo?.nationality.id, education_level_id: profileInfo?.education_level.id };
    useEffect(() => { fetchRegisterInfo() }, [])
    const handleSubmit = (values: EditProfileInfo, { setSubmitting }) => {
        const newValues = { ...values, date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD') }
        const handleSuccess = () => {
            setSubmitting(false)
            props.closePopup()
        }
        saveProfileData(newValues, props.closePopup, handleSuccess)
    };
    return (
        <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <DialogTitle variant="h5" color={'primary'}>{t('popup.title.update_profile')}</DialogTitle>
                    <Divider />
                    <DialogContent>
                        <Grid container direction={'column'} gap={2} lg={12} my={3}>
                            <StyledTextField translateKey="name_ar" name="name_ar" required />
                            <StyledTextField translateKey="name_en" name="name_en" required />
                            <StyledTextField translateKey="phone" name="phone" required />
                            <StyledTextField translateKey="email" name="email" />
                            <StyledTextField translateKey="address" name="address" required />
                            <StyledTextField translateKey="reference" name="reference" />
                            <Grid container lg={12}>
                                <Grid container lg={4} sx={{ pl: 2 }}>
                                    <StyledSelect translateKey="education_level" name="education_level_id" options={registerInfo?.education_levels ?? []} />
                                </Grid>
                                <Grid lg={4}>
                                    <StyledSelect translateKey="nationality" name="nationality_id" options={registerInfo?.nationalities ?? []} />
                                </Grid>
                                <Grid lg={4} sx={{ pr: 2 }}>
                                    <StyledDatePicker name='date_of_birth' />
                                </Grid>
                            </Grid>
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