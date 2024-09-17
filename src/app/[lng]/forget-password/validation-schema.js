import * as Yup from 'yup';
export const verifyValidationSchema = Yup.object().shape({
    phone: Yup.string().required('required').matches(/^\d{10}$/, 'phone'),
});
