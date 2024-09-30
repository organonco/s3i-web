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
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				مرحباً بك في منصة سعي هذه الصفحة تتضمن شروط استخدام الخدمات
				التدريبية التي نقدمها, يرجى قراءة هذه الشروط بعناية قبل تفعيل
				حسابك
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				هذه الشروط تساعدك على معرفة حقوقك عند استخدامك لخدماتنا, عند إنشاء
				حسابك على المنصة فإنك تؤكد أنك تقبل بهذه الشروط. إذا كان لديك أي
				أسئلة تتعلق بهذه الشروط، يرجى الاتصال بنا على الرقم الوارد أدناه
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				تعريف بمنصة سعي وطبيعة عملها :
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				تطبيق منصة سعي للتدريب والتأهيل هو تطبيق لتقديم خدمات التدريب عن بعد بشكل كامل. يوفر التطبيق سهولة الوصول إلى مجموعة متنوعة من الدورات والتخصصات التي تلبي تطلعاتك في سوق العمل. نحن نتبنى أعلى معايير الجودة ونلتزم بتلبية توقعاتك بأحدث التقنيات وأفضل الموارد التعليمية. يمكنك بسهولة إنشاء حساب عبر التطبيق والاستفادة من جميع الميزات بأمان وحماية تأمينية عالية. من خلال منصة سعي للتدريب والتأهيل  يمكنك حضور التدريبات باستخدام أدوات تفاعلية ومرنة مثل المحاضرات المباشرة والاختبارات الذكية المؤتمتة التي توفر نتائج فورية. بالإضافة إلى ذلك، يمكنك تنزيل وإنشاء مشاريع تخرج خاصة بك والحصول على شهادات الحضور والخبرة لتعزيز سيرتك الذاتية. وللشركات، نحرص على توفير خدمة تدريب مخصصة تلبي احتياجاتها، حيث يمكن للشركات تقديم طلب لتدريب فرقها من خلال المنصة. بفضل تكنولوجيا عصرية وموثوقة، نسعى دائمًا لتقديم أفضل تجربة تدريبية شاملة ومحسّنة. انضم إلى منصة سعي الآن وكن جزءًا من مجتمع التعليم والتطوير المهني المبتكر.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				الجهه صاحبه التطبيق ومعلومات الاتصال معها:
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				منصة سعي للتدريب والتأهيل س.ت (94118) {"\n"}
				بريد الكتروني : support@s3i.training {"\n"}
				هاتف : 0945330652
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				آليه عمل التطبيق والفئات المستهدفه
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				طلاب وطالبات المرحلة الجامعية والخريجين والخريجات والباحثين والباحثات عن فرص عمل من كافة المستويات التعليمية والراغبين والراغبات في التطور في اختصاصات متعددة وتعزيز مهارتهم/ن، بالإضافة إلى موظفي وموظفات القطاع العام والخاص والمدني، كما أن منصتنا تقدم خدمات تخطيط التطور الوظيفي للعاملين والعاملات في الشركات والمؤسسات بكافة اختصاصاتها وفق متطلبات التطورات العالمية في مجالات العمل المختلفة.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				سياسة الاستخدام للقاصرين
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				يتعهد المستخدم بأن جميع المعلومات التي يقدمها صحيحة، ويؤكد أنه يبلغ من العمر 18 عامًا على الأقل، نظرًا لأن التطبيق مخصص للأفراد الذين تجاوزوا سن الـ 18 عامًا. في حال اكتشاف أي معلومة غير دقيقة بشأن عمر المستخدم، سيتم تجميد الحساب فورًا.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				حقوق المستخدم القانونيّة ومسؤولياته
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				يحق للمستخدم الاستفادة من الخدمات التي تقدمها المنصة وفق الشروط
				والضوابط الخاصة (شروط الاستخدام) والعامة (القوانين والتشريعات)
				وعليه دفع الرسوم المطلوبة لقاء الخدمة المقدمة
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				يُسمح للمستخدم باستخدام التطبيق والموقع فقط لأغراضك الشخصية وغير
				التجارية.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز للمستخدم استخدام التطبيق أو الموقع لأي غرض غير قانوني أو
				ضار أو مسيء
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز للمستخدم تحميل أو نشر أي محتوى على التطبيق أو الموقع ينتهك
				حقوق أي طرف ثالث، بما في ذلك حقوق الملكية الفكرية أو حقوق الخصوصية
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز للمستخدم انتحال شخصية أي شخص آخر أو تقديم معلومات كاذبة أو
				مضللة.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز للمستخدم استخدام التطبيق أو الموقع لنشر فيروسات أو برامج
				ضارة أخرى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز للمستخدم التدخل في تشغيل التطبيق أو الموقع أو محاولة
				الوصول إلى التطبيق أو الموقع بطريقة غير مصرح بها.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				المستخدم مسؤول عن الحفاظ على سرية كلمة المرور الخاصة به ومنع أي
				وصول غير مصرح به إلى حسابك.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				يحق لنا تعليق أو إنهاء حسابك في أي وقت عند مخالفة سياساتنا
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز لك نسخ أو إعادة نشر أو توزيع أي محتوى دون موافقتنا المسبقة
				كتابة.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				لا يجوز لك إزالة أي إشعارات حقوق النشر أو الملكية الفكرية الأخرى
				من أي محتوى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				قد يحتوي التطبيق والموقع على روابط إلى مواقع ويب أخرى.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				تخضع هذه الشروط لقوانين الجمهورية العربية السورية وتفسر وفقًا لها.
				وأي نزاع ينشأ عن أو يتعلق بهذه الشروط يحكمه القانون السوري
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				حقوق الجهه صاحبه التطبيق:
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				الإجراءات التي ستتخذها الجهة صاحبة التطبيق عند  مخالفه المستخدم لسياسه الاستخدام:
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				إذا تمت مخالفة شروط الاستخدام، يحق للجهة المالكة للتطبيق اتخاذ جميع الإجراءات القانونية اللازمة لضمان أمان المعلومات وسلامة التطبيق. ستلتجأ الجهة المالكة إلى حماية نفسها والمستخدمين من خلال التعاون مع الجهات المختصة في هذا الصدد.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				البيانات الشخصيّة التي يجمعها التطبيق عن المستخدم والهدف منها ومدة الاحتفاظ بها:
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				سيتم جمع معلومات الاسم، العمر، رقم الهاتف، والبريد الإلكتروني لتلقي جميع التحديثات عبر التطبيق، وأيضًا لتقديم معلومات صحيحة لشهادات حضور التدريبات في التطبيق. سيتم الاحتفاظ بهذه البيانات على التطبيق لمدة ثلاث سنوات، وبعد ذلك سيتم حذفها. بعد هذه الفترة، سيتعين على المستخدم إنشاء حساب جديد للاستمرار باستخدام التطبيق.
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				البيانات الشخصيّة التي يجمعها التطبيق عن المستخدم والهدف منها ومدة الاحتفاظ بها:
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				المصادر التي يستخدمها التطبيق في جهاز المستخدم
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				يطلب التطبيق من المستخدم إنشاء حساب للاستفادة من ميزاته، ولإتمام هذا، يجب على المستخدم إنشاء الحساب وتأكيده عبر رمز تفعيل يُرسل إلى رسائله عبر شبكات الإتصال الخاصة بالمستخدمين في سورية حصرًا. بعد تأكيد الحساب، يستطيع المستخدم استكمال جولته داخل التطبيق. التطبيق يُطلب الإذن لتنزيل ورفع ملفات الطلاب لاستقبال وتحميل المواد التعليمية المفيدة لدورات التدريب المُسجلة مسبقًا. يمكن للتطبيق الوصول فقط إلى البيانات التي يُدخلها المستخدم أثناء التسجيل، مثل الاسم ورقم الهاتف والبريد الإلكتروني. بالإضافة إلى ذلك، يتطلب من التطبيق فقط الإذن للوصول إلى مساحة التخزين ليُمكن من رفع وتنزيل الملفات الوظيفية والمرفقات التعليمية.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				إلغاء الاشتراك
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				في حال انتهاك أي مستخدم لقوانين الجمهورية العربية السورية أو سياسات الخصوصية والاستخدام في التطبيق، سيتم إلغاء اشتراكه دون الحاجة للرجوع إليه أو إبلاغه.
			</Typography>

			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1} fontWeight={"bold"}>
				تحديث سياسه الاستخدام وكيف يتم إعلام المستخدم
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={1}>
				في حال التحديث على سياسة الخصوصيّة يتوجب عرضها على المستخدم مع الإشارة صراحةً للتعديلات الحاصلة ويجب أن تكون سياسة الخصوصيّة فعّالة بحيث تتيح للمستخدم قبولها أو رفضها
			</Typography>
			<Typography width={"100%"} textAlign={"right"} variant="h5" marginBottom={3}>
				يتم اعلام المستخديم عند حدوث اي تغيير او تطوير على سياسة وشروط الاستخدام عبر البريد الالكتروني والاعلان عن ذلك على صفحاتنا على مواقع التواصل الاجتماعي وارسال اشعارات ضمن التطبيق وتتضمن التعديلات الجديدة وجوب قراءتها من قبل المستخدم ليستطيع اكمال العمل في حسابه ضمن التطبيق وله الحق في القبول او الرفض وفي حال رفض المستخدم استخدام السياسة الجديدة يمكنه التواصل مع التطبيق وإلغاء اشتراكه وحسابه فيها وانهاء أي علاقات او تعاملات مالية بين الطرفين التطبيق والمسخدم
			</Typography>

		</Grid>
	);
}
