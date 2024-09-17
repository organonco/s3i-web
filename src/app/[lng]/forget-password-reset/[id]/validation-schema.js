import * as Yup from "yup";
export const verifyValidationSchema = Yup.object().shape({
	code: Yup.string().required("required"),
	password: Yup.string().min(8, "min_8").required("required"),
	password_confirmation: Yup.string()
		.oneOf([Yup.ref("password"), null], "Password_must_match")
		.required("required"),
});
