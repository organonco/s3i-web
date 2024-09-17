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
				منصة سعي للتدريب والتأهيل س.ت (94118)
				<br />
				بريد الكتروني : support@s3i.training
				<br />
				هاتف : 0945330652
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				تعريف بمنصة سعي وطبيعة عملها :

			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				سَعي، هي منصة  تقدم خدمات التدريب والتأهيل عبر الإنترنت بالشكل الذي يضمن الوصول لجميع الفئات المجتمعية، نهدف لتوفير خدماتنا وفق أكثر المستويات شمولية والتي تتلخص حالياً في ثلاث مستويات هي، الورشات، التدريبات، والدبلومة.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				تتميز سعي بتوفر نظام تدريبي وتعليمي مبني على أحدث المناهج التدريبية التفاعلية المرنة، يشمل النظام التدريبي في المنصة: فيديوهات تعريفية وتدريبية، جلسات تدريبية افتراضية بواسطة أدوات التواصل والتيسير عن بعد الاحترافية، مجموعات ومساحات للنقاش، مواد علمية مُرفقة، بالإضافة إلى  اختبارات متعددة الأشكال "مؤتمتة،سردية،مقابلات،..".
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				الفئة المستهدفة لمنصة سعي :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				طلاب وطالبات المرحلة الجامعية والخريجين والخريجات والباحثين والباحثات عن فرص عمل من كافة المستويات التعليمية والراغبين والراغبات في التطور في اختصاصات متعددة وتعزيز مهارتهم/ن، بالإضافة إلى موظفي وموظفات القطاع العام والخاص والمدني، كما أن منصتنا تقدم خدمات تخطيط التطور الوظيفي للعاملين والعاملات في الشركات والمؤسسات بكافة اختصاصاتها وفق متطلبات التطورات العالمية في مجالات العمل المختلفة.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				حقوق المستخدم والجهة صاحبة التطبيق ومسؤلياتهما :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- يحق للمستخدم الاستفادة من الخدمات التي تقدمها المنصة وفق الشروط والضوابط الخاصة (شروط الاستخدام) والعامة (القوانين والتشريعات) وعليه دفع الرسوم المطلوبة لقاء الخدمة المقدمة
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- يُسمح للمستخدم باستخدام التطبيق والموقع فقط لأغراضك الشخصية وغير التجارية.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز للمستخدم استخدام التطبيق أو الموقع لأي غرض غير قانوني أو ضار أو مسيء
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز للمستخدم تحميل أو نشر أي محتوى على التطبيق أو الموقع ينتهك حقوق أي طرف ثالث، بما في ذلك حقوق الملكية الفكرية أو حقوق الخصوصية
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز للمستخدم انتحال شخصية أي شخص آخر أو تقديم معلومات كاذبة أو مضللة.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز للمستخدم استخدام التطبيق أو الموقع لنشر فيروسات أو برامج ضارة أخرى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز للمستخدم التدخل في تشغيل التطبيق أو الموقع أو محاولة الوصول إلى التطبيق أو الموقع بطريقة غير مصرح بها.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- المستخدم مسؤول عن الحفاظ على سرية كلمة المرور الخاصة به ومنع أي وصول غير مصرح به إلى حسابك.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- يحق لنا تعليق أو إنهاء حسابك في أي وقت عند مخالفة سياساتنا
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز لك نسخ أو إعادة نشر أو توزيع أي محتوى دون موافقتنا المسبقة كتابة.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- لا يجوز لك إزالة أي إشعارات حقوق النشر أو الملكية الفكرية الأخرى من أي محتوى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				- قد يحتوي التطبيق والموقع على روابط إلى مواقع ويب أخرى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				- تخضع هذه الشروط لقوانين الجمهورية العربية السورية وتفسر وفقًا لها. وأي نزاع ينشأ عن أو يتعلق بهذه الشروط يحكمه القانون السوري
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				الاشتراك بالدورة المطلوبة :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				عندما تقرر الاشتراك في الدورة بعد رؤية الاعلان والتسويق المقدم لها قم بشراء كود من مراكز التوزيع المعتمدة (يتم الاعلان عن المراكز مع كل اعلان دورة) , ستكون قادرا على دفع سعر الكود للمركز الذي تقوم بشراء الكود منه ومن ثم يمكنك إدخال الكود في المنصة لإتمام عملية التسجيل
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				البيانات التي يتم جمعها من المستخدم :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				يمكننا الوصول فقط الى البيانات المدخلة من قبل المستخدم عند التسجيل ك (الاسم ورقم الهاتف والبريد الالكتروني...) ويطلب التطبيق فقط من الأذونات الوصول الى مساحة التخزين ليتمكن من رفع وتنزيل ملفات الوظائف والملحقات التعليمية
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" fontWeight={"bold"} marginBottom={1}>
				الاعلام بتحديث سياسة الاستخدام :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				سيتم اعلام المستخديم عند حدوث اي تغيير او تطوير على سياسة وشروط الاستخدام عبر البريد الالكتروني والاعلان عن ذلك على صفحاتنا على مواقع التواصل الاجتماعي
			</Typography>
		</Grid>
	);
}
