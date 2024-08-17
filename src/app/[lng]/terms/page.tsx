"use client";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";

export default function Page({ params: { lng } }) {


	const { t } = useTranslation(lng, "translation");

	const isMobile = (window.innerWidth <= 768)

	return (
		<Grid container width={"100%"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} padding={isMobile ? "0rem" : '10rem'}>
			<Typography width={"100%"} textAlign={"center"} variant="h3" marginBottom={10}>
				سياسة وشروط استخدام منصة سعي للتدريب والتأهيل
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				مرحبا بك في منصة سعي هذه الصفحة تتضمن شروط استخدام الخدمات التدريبية التي نقدمها, يرجى قراءة هذه ً
				الشروط بعناية قبل تفعيل حسابك
				هذه الشروط تساعدك على معرفة حقوقك عند استخدامك لخدماتنا, عند إنشاء حسابك على المنصة فإنك تؤكد أنك تقبل
				بهذه الشروط.
				إذا كان لديك أي أسئلة تتعلق بهذه الشروط، يرجى االتصال بنا على الرقم الوارد أدناه
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				معلومات عنا :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			</Typography>
		</Grid>
	);
}
