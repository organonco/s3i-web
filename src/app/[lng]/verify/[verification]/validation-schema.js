import * as Yup from 'yup';
export const verifyValidationSchema = Yup.object().shape({
    code: Yup.string().required('required'),
});
