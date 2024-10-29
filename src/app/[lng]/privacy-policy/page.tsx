"use client";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";

export default function Page({ params: { lng } }) {


	const { t } = useTranslation(lng, "translation");

	const isMobile = (window.innerWidth <= 768)

	return (
		<Grid container width={"100%"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} padding={isMobile ? "0rem" : '10rem'}>
			<Typography width={"100%"} textAlign={"center"} variant="h3" marginBottom={10}>
			سياسة الخصوصية لمنصة سعي
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			نحن ملتزمون بحماية خصوصية معلوماتك الشخصية وننوه الى ما يلي :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			المعلومات الشخصية المطلوبة منك عندما تقوم بإنشاء حساب، مثل اسمك
              وعنوان بريدك الإلكتروني وعنوانك ورقم هاتفك لا تستخدم لأغراض شخصية
              بل تستخدم فقط لتحسين عمل المنصة وتقديم تجربة أفضل للمستخدم أو
              امتثالا منا لنص قانوني أو أمر قضائي أو شرط تنظيمي
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			يتم تخديم هذا التطبيق على استضافة داخلية عالية الكفاءة وتتعهد
              الجهة المستضيفة بتأمين عمل الاستضافة واتصالها بالشبكة وتغذيتها
              بالتيار الكهربائي وحمايتها من العوامل الخارجية على مدار الساعة
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			تتم ارشفة البيانات وحفظها على المخدم وحمايتها عبر عدة مستويات نذكر
              منها جدار الحماية واستخدام بروتوكولات الإتصال الآمنة مثل (ssh)
              (https)
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			تلتزم الجهة المؤمنة للإستضافة بالقوانين العاملة للشركة السورية
			للإتصالات في حفظ البيانات وحمايتها
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
			إذا كان لديك أي استفسارات أو شكاوى أو طلبات بخصوص سياسة الخصوصية
              هذه أو كيف نتعامل مع بياناتك بشكل عام، يرجى التواصل معنا على
              الايميل : support@s3i.training
			</Typography>
		</Grid>
	);
}
