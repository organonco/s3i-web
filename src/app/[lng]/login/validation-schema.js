import * as Yup from 'yup';

const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

export const loginValidationSchema = Yup.object().shape({
    phone: Yup.string().required('required').matches(/^\d{10}$/, 'phone'),
    password: Yup.string().required('required'),
});
