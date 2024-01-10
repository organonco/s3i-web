import * as Yup from 'yup';

const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

export const registerValidationSchema = Yup.object().shape({
    name_ar: Yup.string().required('required'),
    name_en: Yup.string().required('required'),
    phone: Yup.string().required('required').matches(/^\d{10}$/, 'phone'),
    email: Yup.string().email('email').required('required'),
    address: Yup.string().required('required'),
    reference: Yup.string().required('required'),
    password: Yup.string().min(8, 'min_8').required('required'),
    password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password_must_match').required('required'),
    date_of_birth: Yup.date().typeError('valid_date').required('required'),
    nationality_id: Yup.string().required('required'),
    education_level_id: Yup.string().required('required'),
});
