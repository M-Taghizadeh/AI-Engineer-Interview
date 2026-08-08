window.categoriesData = [
    {
        "id": "all",
        "title": "همه سوالات",
        "icon": "fa-solid fa-layer-group"
    },
    {
        "id": "soft_skills",
        "title": "مهارت‌های نرم",
        "icon": "fa-solid fa-comments"
    },
    {
        "id": "rag_graphrag",
        "title": "سیستم‌های RAG و GraphRAG",
        "icon": "fa-solid fa-diagram-project"
    },
    {
        "id": "nlp_llm",
        "title": "مدل‌های زبانی و NLP",
        "icon": "fa-solid fa-language"
    },
    {
        "id": "agents",
        "title": "عامل‌های هوش مصنوعی",
        "icon": "fa-solid fa-robot"
    },
    {
        "id": "ml_dl",
        "title": "یادگیری ماشین و عمیق",
        "icon": "fa-solid fa-brain"
    },
    {
        "id": "mlops_system",
        "title": "سیستم دیزاین و MLOps",
        "icon": "fa-solid fa-server"
    },
    {
        "id": "data_python",
        "title": "تحلیل داده و پایتون",
        "icon": "fa-solid fa-code"
    }
];

window.questionsData = [
    {
        "id": 1,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "چگونه توقعات غیرواقعی مدیران یا مشتریان (تیم غیرفنی) از پروژه هوش مصنوعی را مدیریت می‌کنید؟",
        "tags": [
            "#مدیریت_توقعات",
            "#ارتباطات",
            "#SoftSkills",
            "#PoC"
        ],
        "summary": "مشتریان و مدیران غیرفنی معمولاً هوش مصنوعی را جادو می‌دانند. کلید موفقیت در تعریف دقیق PoC، تعیین Baseline و شفاف‌سازی ماهیت احتمالی (Probabilistic) بودن AI است.",
        "fullAnswer": "مشتریان و مدیران غیرفنی معمولاً هوش مصنوعی را جادو می‌دانند. کلید موفقیت در تعریف دقیق PoC، تعیین Baseline و شفاف‌سازی ماهیت احتمالی (Probabilistic) بودن AI است.\n\n**ماهیت سیستم‌های AI:**\nتوضیح می‌دهم که هوش مصنوعی احتمالاتی (Probabilistic) است و خطا جزء طبیعی آن محسوب می‌شود، نه یک باگ سنتی.\n\n**تعریف PoC سریع:**\nطراحی فاز آزمایش ۲ تا ۴ هفته‌ای روی نمونه داده واقعی جهت سنجش امکان‌پذیری فنی قبل از تعهد به پروژه کلان.\n\n**تثبیت KPI کسب‌وکار:**\nتوافق روی معیارهای ملموس تجاری (مانند درصد کاهش زمان پاسخ‌دهی یا میزان صرفه‌جویی مالی) به جای درصد Accuracy خام.",
        "tip": "در مصاحبه اشاره کنید که چگونه یک نمونه واقعی از عدم موفقیت پروژه به دلیل توقع اشتباه را به یک الگوی موفق تبدیل کردید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do you manage unrealistic expectations from non-technical stakeholders in AI projects?",
        "summary_en": "Non-technical stakeholders often view AI as magic. Success lies in defining a clear PoC, setting a baseline, and clarifying the probabilistic nature of AI.",
        "fullAnswer_en": "1. Explain the Probabilistic Nature of AI: Clarify that AI systems make probabilistic inferences rather than deterministic calculations.\n2. Define Rapid PoC: Run a 2-4 week proof-of-concept on real sample data to evaluate technical feasibility.\n3. Align Business KPIs: Agree on tangible business metrics (e.g. 30% reduction in response latency) rather than raw accuracy scores.",
        "tip_en": "In interviews, mention how you turned a real-world project failure caused by wrong expectations into a successful framework."
    },
    {
        "id": 2,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "هنگام مواجهه با عدم قطعیت بالا و پاسخ‌های نادرست (Hallucination) مدل‌های زبانی چه رویکردی اتخاذ می‌کنید؟",
        "tags": [
            "#Hallucination",
            "#ریسک_مدل",
            "#پاسخگویی",
            "#Guardrails"
        ],
        "summary": "پذیرش مسئولیت فنی و طراحی مکانیزم‌های Guardrails و کنترل کیفیت پاسخ، همراه با اطلاع‌رسانی دقیق به تیم محصول.",
        "fullAnswer": "پذیرش مسئولیت فنی و طراحی مکانیزم‌های Guardrails و کنترل کیفیت پاسخ، همراه با اطلاع‌رسانی دقیق به تیم محصول.\n\n**کنترل تکنیکال:**\nکاهش Temperature مدل به ۰.۰، اجبار مدل به استفاده از Grounding در RAG و فیلتر کردن خروجی با NeMo Guardrails.\n\n**شفافیت با کاربر:**\nطراحی رابط کاربری به شکلی که امکان گزارش خطا وجود داشته باشد و پیام هشدار عدم قطعیت نمایش داده شود.",
        "tip": "نشان دهید که بین ریسک محصول و تجربه کاربری تعادل ایجاد می‌کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do you mitigate high uncertainty and LLM Hallucinations in production?",
        "summary_en": "By taking technical ownership, engineering Guardrails, enforcing groundings in RAG, and maintaining transparent UI error indicators.",
        "fullAnswer_en": "1. Technical Controls: Reduce Temperature to 0.0, enforce strict context grounding in RAG, and filter outputs with NeMo Guardrails.\n2. User Transparency: Design UI indicators allowing users to report errors and display confidence warnings.",
        "tip_en": "Demonstrate how you balance product risk management with user experience."
    },
    {
        "id": 3,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "اگر بین تیم Data Science و تیم Software Engineering در مورد استقرار یک مدل اختلاف نظر پیش آید، چگونه تعارض را حل می‌کنید؟",
        "tags": [
            "#کار_تیمی",
            "#حل_تعارض",
            "#MLOps",
            "#SLA"
        ],
        "summary": "تیم دیتا بر روی Accuracy تمرکز دارد و تیم نرم‌افزار بر روی Latency، Scalability و RAM. حل تعارض با تعریف SLA مشترک ممکن است.",
        "fullAnswer": "تیم دیتا بر روی Accuracy تمرکز دارد و تیم نرم‌افزار بر روی Latency، Scalability و RAM. حل تعارض با تعریف SLA مشترک ممکن است.\n\n**زبان مشترک SLA:**\nتعریف دقیق SLA شامل زمان پاسخ‌دهی زیر ۲۰۰ میلی‌ثانیه و حجم رم مصرفی مشخص.\n\n**بهینه‌سازی متقابل:**\nاستفاده از Quantization و تبدیل مدل به ONNX/TensorRT جهت حفظ دقت و در عین حال کاهش مصرف منابع.",
        "tip": "تاکید کنید که شما هم مهندسی نرم‌افزار بلد هستید و هم علم داده!",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do you resolve conflicts between Data Science and Software Engineering teams during model deployment?",
        "summary_en": "Data Science focuses on Accuracy while Software Engineering focuses on Latency, Scalability, and Memory. Conflict is resolved by defining shared SLAs.",
        "fullAnswer_en": "1. Shared SLA Language: Establish strict SLA bounds (e.g., latency under 200ms and memory budget under 4GB).\n2. Mutual Optimization: Utilize Quantization and ONNX/TensorRT export to preserve accuracy while meeting infrastructure constraints.",
        "tip_en": "Emphasize that you understand both software engineering architecture and data science modeling!"
    },
    {
        "id": 4,
        "category": "soft_skills",
        "difficulty": "advanced",
        "title": "چگونه اولویت‌بندی بین Fine-Tuning یک مدل اختصاصی و استفاده از APIهای آماده را تعیین می‌کنید؟",
        "tags": [
            "#تصمیم‌گیری_استراتژیک",
            "#هزینه_پروژه",
            "#Tradeoff"
        ],
        "summary": "تحلیل ماتریس Trade-off شامل: حریم خصوصی داده (Privacy)، هزینه عملیاتی (OPEX vs CAPEX)، زمان توسعه (Time-to-Market) و نیاز به دانش دامنه خاص.",
        "fullAnswer": "تحلیل ماتریس Trade-off شامل: حریم خصوصی داده (Privacy)، هزینه عملیاتی (OPEX vs CAPEX)، زمان توسعه (Time-to-Market) و نیاز به دانش دامنه خاص.\n\n**API آماده:**\nمناسب برای فاز PoC، عدم نیاز به GPU اختصاصی و سرعت توسعه بالا.\n\n**Fine-Tuning / Open-Source:**\nمناسب برای امنیت داده‌های حساس (بانک‌ها و بیمارستان‌ها)، کاهش هزینه در حجم درخواست میلیونی و لحن اختصاصی.",
        "tip": "به چالش‌های تحریم و دسترسی به APIهای خارجی در ایران اشاره کنید که مدل‌های Open-Source را جذاب‌تر می‌کند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do you decide between Fine-Tuning a custom model vs. using a commercial API?",
        "summary_en": "By analyzing a trade-off matrix including Data Privacy, Operating Costs (OPEX vs CAPEX), Time-to-Market, and Domain Specialization needs.",
        "fullAnswer_en": "1. Commercial APIs: Best for rapid PoC, zero GPU infrastructure maintenance, and fast time-to-market.\n2. Fine-Tuning / Open-Source: Essential for data privacy (banking/healthcare), lowering costs at high volume, and custom tone/behavior.",
        "tip_en": "Mention sanctions and API availability constraints in Iran, which make Open-Source local models highly attractive."
    },
    {
        "id": 5,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "مسئولیت اخلاقی مهندس هوش مصنوعی در قبال Bias (ارزیابی سوگیری) و حریم خصوصی کاربران چیست؟",
        "tags": [
            "#اخلاق_AI",
            "#Bias",
            "#GDPR",
            "#Anonymization"
        ],
        "summary": "شناسایی و حذف سوگیری از داده‌های آموزش، رعایت انطباق با قوانین حریم خصوصی و عدم استفاده بدون اجازه از داده‌های کاربران.",
        "fullAnswer": "شناسایی و حذف سوگیری از داده‌های آموزش، رعایت انطباق با قوانین حریم خصوصی و عدم استفاده بدون اجازه از داده‌های کاربران.\n\n**ارزیابی داده:**\nبررسی توزیع آماری داده‌های آموزش جهت جلوگیری از تبعیض‌های جنسیتی، قومیتی یا مالی.\n\n**حفظ حریم خصوصی:**\nحذف خودکار شماره ملی، کارت بانکی و اطلاعات شخصی (PII Stripping) پیش از نمایه کردن داده‌ها.",
        "tip": "حفظ حریم خصوصی اطلاعات پزشکی و مالی کاربران را مثال بزنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is the ethical responsibility of an AI Engineer regarding Bias and Data Privacy?",
        "summary_en": "Identifying and removing bias from training data, ensuring compliance with privacy regulations (GDPR), and anonymizing PII before indexing.",
        "fullAnswer_en": "1. Data Audit: Check statistical distribution of training datasets to prevent demographic or financial bias.\n2. Privacy Protection: Implement automated PII stripping (removing SSN, credit cards, emails) before embedding data into vector stores.",
        "tip_en": "Use medical or financial data privacy as a concrete example."
    },
    {
        "id": 6,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "چگونه پرونده‌های شکست در پروژه AI را ارزیابی کرده و از آن‌ها درس می‌گیرید؟",
        "tags": [
            "#PostMortem",
            "#یادگیری",
            "#پذیرش_شکست"
        ],
        "summary": "برگزاری جلسات Post-Mortem بدون سرزنش، مستندسازی دقیق علل ریشه‌ای (Root Cause) و اشتراک‌گذاری با تیم.",
        "fullAnswer": "برگزاری جلسات Post-Mortem بدون سرزنش، مستندسازی دقیق علل ریشه‌ای (Root Cause) و اشتراک‌گذاری با تیم.\n\n**تحلیل ریشه‌ای:**\nواکاوی ریشه‌ای با متدولوژی 5 Whys جهت کشف منشأ اصلی شکست (کیفیت داده، الگوریتم یا تعریف مسئله).\n\n**مستندسازی:**\nثبت تجربیات در دانش‌نامه تیم تا از تکرار اشتباهات مشابه جلوگیری شود.",
        "tip": "نشانه بلوغ فکری یک مهندس، نحوه صحبت درباره پروژه‌های ناموفق قبلی‌اش است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه پرونده‌های شکست در پروژه AI را ارزیابی کرده و از آن‌ها درس می‌گیرید؟",
        "summary_en": "برگزاری جلسات Post-Mortem بدون سرزنش، مستندسازی دقیق علل ریشه‌ای (Root Cause) و اشتراک‌گذاری با تیم.",
        "fullAnswer_en": "برگزاری جلسات Post-Mortem بدون سرزنش، مستندسازی دقیق علل ریشه‌ای (Root Cause) و اشتراک‌گذاری با تیم.\n\n**تحلیل ریشه‌ای:**\nواکاوی ریشه‌ای با متدولوژی 5 Whys جهت کشف منشأ اصلی شکست (کیفیت داده، الگوریتم یا تعریف مسئله).\n\n**مستندسازی:**\nثبت تجربیات در دانش‌نامه تیم تا از تکرار اشتباهات مشابه جلوگیری شود.",
        "tip_en": "نشانه بلوغ فکری یک مهندس، نحوه صحبت درباره پروژه‌های ناموفق قبلی‌اش است."
    },
    {
        "id": 7,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "چگونه مستندسازی پروژه هوش مصنوعی (Model Cards & Documentation) را انجام می‌دهید؟",
        "tags": [
            "#مستندسازی",
            "#ModelCard",
            "#شفافیت"
        ],
        "summary": "ایجاد Model Card استاندارد شامل کاربردهای هدف، داده آموزش، سنجه‌های ارزیابی، محدودیت‌ها و ریسک‌ها.",
        "fullAnswer": "ایجاد Model Card استاندارد شامل کاربردهای هدف، داده آموزش، سنجه‌های ارزیابی، محدودیت‌ها و ریسک‌ها.\n\n**اجزای Model Card:**\nمشخصات معماری، نسخه مدل، دیتاست‌های آموزش/تست، نمرات بنچمارک و سناریوهای شکست شناخته‌شده.\n\n**نگهداشت‌پذیری کد:**\nمستندسازی تداوم و توسعه‌پذیری کدهای هوش مصنوعی در تیم را تضمین می‌کند.",
        "tip": "مستندسازی به کدهای شما قابلیت نگهداری (Maintainability) در تیم می‌دهد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه مستندسازی پروژه هوش مصنوعی (Model Cards & Documentation) را انجام می‌دهید؟",
        "summary_en": "ایجاد Model Card استاندارد شامل کاربردهای هدف، داده آموزش، سنجه‌های ارزیابی، محدودیت‌ها و ریسک‌ها.",
        "fullAnswer_en": "ایجاد Model Card استاندارد شامل کاربردهای هدف، داده آموزش، سنجه‌های ارزیابی، محدودیت‌ها و ریسک‌ها.\n\n**اجزای Model Card:**\nمشخصات معماری، نسخه مدل، دیتاست‌های آموزش/تست، نمرات بنچمارک و سناریوهای شکست شناخته‌شده.\n\n**نگهداشت‌پذیری کد:**\nمستندسازی تداوم و توسعه‌پذیری کدهای هوش مصنوعی در تیم را تضمین می‌کند.",
        "tip_en": "مستندسازی به کدهای شما قابلیت نگهداری (Maintainability) در تیم می‌دهد."
    },
    {
        "id": 8,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "چگونه تغییرات سریع دنیای AI و ابزارهای جدید را دنبال و یاد می‌گیرید؟",
        "tags": [
            "#یادگیری_مستمر",
            "#ارتقای_دانش",
            "#مقالات_علمی"
        ],
        "summary": "مطالعه مقالات ArXiv، دنبال کردن مخازن برتر GitHub، شرکت در همایش‌ها و پیاده‌سازی پروژه‌های سرگرمی (Side Projects).",
        "fullAnswer": "مطالعه مقالات ArXiv، دنبال کردن مخازن برتر GitHub، شرکت در همایش‌ها و پیاده‌سازی پروژه‌های سرگرمی (Side Projects).\n\n**منابع کلیدی:**\nمطالعه روزانه مقالات کلیدی در ArXiv و بررسی HuggingFace Papers.\n\n**تمرین عملی:**\nساخت پروژه‌های کوچک شخصی برای تست فریم‌ورک‌ها و کتابخانه‌های جدید.",
        "tip": "اثبات کنید که یادگیری بخشی از روال روزمره شماست.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه تغییرات سریع دنیای AI و ابزارهای جدید را دنبال و یاد می‌گیرید؟",
        "summary_en": "مطالعه مقالات ArXiv، دنبال کردن مخازن برتر GitHub، شرکت در همایش‌ها و پیاده‌سازی پروژه‌های سرگرمی (Side Projects).",
        "fullAnswer_en": "مطالعه مقالات ArXiv، دنبال کردن مخازن برتر GitHub، شرکت در همایش‌ها و پیاده‌سازی پروژه‌های سرگرمی (Side Projects).\n\n**منابع کلیدی:**\nمطالعه روزانه مقالات کلیدی در ArXiv و بررسی HuggingFace Papers.\n\n**تمرین عملی:**\nساخت پروژه‌های کوچک شخصی برای تست فریم‌ورک‌ها و کتابخانه‌های جدید.",
        "tip_en": "اثبات کنید که یادگیری بخشی از روال روزمره شماست."
    },
    {
        "id": 9,
        "category": "soft_skills",
        "difficulty": "advanced",
        "title": "در صورتی که بودجه محاسبه‌ای (GPU Budget) محدود باشد، چگونه پروژه را مدیریت و بهینه‌سازی می‌کنید؟",
        "tags": [
            "#مدیریت_منابع",
            "#بهینه‌سازی_هزینه",
            "#GPU",
            "#Ollama"
        ],
        "summary": "اولویت‌بندی مدل‌های کوچکتر و کارآمدتر (مثل Phi-3, Qwen-2.5 7B), استفاده از Quantization, Spot Instances و تکنیک‌های Caching.",
        "fullAnswer": "اولویت‌بندی مدل‌های کوچکتر و کارآمدتر (مثل Phi-3, Qwen-2.5 7B), استفاده از Quantization, Spot Instances و تکنیک‌های Caching.\n\n**بهینه‌سازی تکنیکال:**\nاستفاده از روش‌های PEFT مثل LoRA برای آموزش و موتورهای بهینه‌شده vLLM/Ollama برای استنتاج.\n\n**مدیریت درخواستی:**\nهدایت درخواست‌های ساده به مدل‌های سبک‌تر و پیاده‌سازی کشینگ پرامپت‌ها.",
        "tip": "این پاسخ نشان‌دهنده هوش اقتصادی و تفکر مهندسی ارشد شماست.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: در صورتی که بودجه محاسبه‌ای (GPU Budget) محدود باشد، چگونه پروژه را مدیریت و بهینه‌سازی می‌کنید؟",
        "summary_en": "اولویت‌بندی مدل‌های کوچکتر و کارآمدتر (مثل Phi-3, Qwen-2.5 7B), استفاده از Quantization, Spot Instances و تکنیک‌های Caching.",
        "fullAnswer_en": "اولویت‌بندی مدل‌های کوچکتر و کارآمدتر (مثل Phi-3, Qwen-2.5 7B), استفاده از Quantization, Spot Instances و تکنیک‌های Caching.\n\n**بهینه‌سازی تکنیکال:**\nاستفاده از روش‌های PEFT مثل LoRA برای آموزش و موتورهای بهینه‌شده vLLM/Ollama برای استنتاج.\n\n**مدیریت درخواستی:**\nهدایت درخواست‌های ساده به مدل‌های سبک‌تر و پیاده‌سازی کشینگ پرامپت‌ها.",
        "tip_en": "این پاسخ نشان‌دهنده هوش اقتصادی و تفکر مهندسی ارشد شماست."
    },
    {
        "id": 10,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "نحوه ارتباط و پرامپت‌نویسی تعاملی با اعضای غیرفنی برای استخراج نیاز واقعی محصول به چه صورت است؟",
        "tags": [
            "#تحلیل_نیازمندی‌ها",
            "#ارتباط_با_محصول",
            "#ProductStyle"
        ],
        "summary": "تبدیل زبان مبهم غیرفنی (\"میخوایم چت‌بات مثل انسان باشه\") به مشخصات فنی قابل سنجش (Latency, Accuracy, Guardrails).",
        "fullAnswer": "تبدیل زبان مبهم غیرفنی (\"میخوایم چت‌بات مثل انسان باشه\") به مشخصات فنی قابل سنجش (Latency, Accuracy, Guardrails).\n\n**سوالات هدایت‌کننده:**\nتعریف دقیق ورودی/خروجی، حد مجاز زمان پاسخ، و الگوی مواجهه با عدم قطعیت (Fallback Behavior).",
        "tip": "مهندس ارشد AI کسی است که صورت مسئله را قبل از حل کردن شفاف می‌کند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: نحوه ارتباط و پرامپت‌نویسی تعاملی با اعضای غیرفنی برای استخراج نیاز واقعی محصول به چه صورت است؟",
        "summary_en": "تبدیل زبان مبهم غیرفنی (\"میخوایم چت‌بات مثل انسان باشه\") به مشخصات فنی قابل سنجش (Latency, Accuracy, Guardrails).",
        "fullAnswer_en": "تبدیل زبان مبهم غیرفنی (\"میخوایم چت‌بات مثل انسان باشه\") به مشخصات فنی قابل سنجش (Latency, Accuracy, Guardrails).\n\n**سوالات هدایت‌کننده:**\nتعریف دقیق ورودی/خروجی، حد مجاز زمان پاسخ، و الگوی مواجهه با عدم قطعیت (Fallback Behavior).",
        "tip_en": "مهندس ارشد AI کسی است که صورت مسئله را قبل از حل کردن شفاف می‌کند."
    },
    {
        "id": 11,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "چگونه زمان و هزینه فاز تحقیق و توسعه (R&D) را در پروژه‌های هوش مصنوعی برآورد و کنترل می‌کنید؟",
        "tags": [
            "#مدیریت_زمان",
            "#برآورد_پروژه",
            "#AgileAI"
        ],
        "summary": "تقسیم فاز R&D به اسپرینت‌های کوتاه فرضیه‌آزمایی (Time-boxed Spikes) و تعیین معیار خروج (Exit Criteria) برای هر فرضیه.",
        "fullAnswer": "تقسیم فاز R&D به اسپرینت‌های کوتاه فرضیه‌آزمایی (Time-boxed Spikes) و تعیین معیار خروج (Exit Criteria) برای هر فرضیه.\n\n**Time-boxing:**\nتخصیص زمان مشخص (مثلاً ۲ هفته) برای سنجش یک فرضیه قبل از صرف بودجه سنگین.\n\n**معیار خروج:**\nتوقف پروژه یا تغییر مسیر در صورت عدم دستیابی به حداقل نمره کیفی تعیین‌شده.",
        "tip": "کنترل ریسک R&D و صحبت از Time-boxing تحسین مصاحبه‌کننده را جلب می‌کند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه زمان و هزینه فاز تحقیق و توسعه (R&D) را در پروژه‌های هوش مصنوعی برآورد و کنترل می‌کنید؟",
        "summary_en": "تقسیم فاز R&D به اسپرینت‌های کوتاه فرضیه‌آزمایی (Time-boxed Spikes) و تعیین معیار خروج (Exit Criteria) برای هر فرضیه.",
        "fullAnswer_en": "تقسیم فاز R&D به اسپرینت‌های کوتاه فرضیه‌آزمایی (Time-boxed Spikes) و تعیین معیار خروج (Exit Criteria) برای هر فرضیه.\n\n**Time-boxing:**\nتخصیص زمان مشخص (مثلاً ۲ هفته) برای سنجش یک فرضیه قبل از صرف بودجه سنگین.\n\n**معیار خروج:**\nتوقف پروژه یا تغییر مسیر در صورت عدم دستیابی به حداقل نمره کیفی تعیین‌شده.",
        "tip_en": "کنترل ریسک R&D و صحبت از Time-boxing تحسین مصاحبه‌کننده را جلب می‌کند."
    },
    {
        "id": 12,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "هنگام انتخاب بین یک مدل با دقت بالا اما کند و مدل سریع با دقت کمتر چه معیارهایی را بررسی می‌کنید؟",
        "tags": [
            "#Tradeoff",
            "#Latency",
            "#Accuracy",
            "#UX"
        ],
        "summary": "تحلیل تاثیر Latency بر تجربه کاربر (UX) در برابر هزینه خطای مدل برای کسب‌وکار و امکان استفاده از مدل‌های ترکیبی.",
        "fullAnswer": "تحلیل تاثیر Latency بر تجربه کاربر (UX) در برابر هزینه خطای مدل برای کسب‌وکار و امکان استفاده از مدل‌های ترکیبی.\n\n**تحلیل کاربرد:**\nدر سیستم‌های پزشکی و مالی دقت اولویت دارد، اما در چت‌بات‌ها سرعت پاسخ‌دهی زیر ۱ ثانیه حیاتی است.\n\n**معماری ترکیبی:**\nاستفاده از مدل سریع در خط اول و ارجاع موارد نامطمئن به مدل سنگین‌تر.",
        "tip": "پیشنهاد معماری Cascading نشان‌دهنده تسلط شما به سیستم‌دیزاین هوشمند است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: هنگام انتخاب بین یک مدل با دقت بالا اما کند و مدل سریع با دقت کمتر چه معیارهایی را بررسی می‌کنید؟",
        "summary_en": "تحلیل تاثیر Latency بر تجربه کاربر (UX) در برابر هزینه خطای مدل برای کسب‌وکار و امکان استفاده از مدل‌های ترکیبی.",
        "fullAnswer_en": "تحلیل تاثیر Latency بر تجربه کاربر (UX) در برابر هزینه خطای مدل برای کسب‌وکار و امکان استفاده از مدل‌های ترکیبی.\n\n**تحلیل کاربرد:**\nدر سیستم‌های پزشکی و مالی دقت اولویت دارد، اما در چت‌بات‌ها سرعت پاسخ‌دهی زیر ۱ ثانیه حیاتی است.\n\n**معماری ترکیبی:**\nاستفاده از مدل سریع در خط اول و ارجاع موارد نامطمئن به مدل سنگین‌تر.",
        "tip_en": "پیشنهاد معماری Cascading نشان‌دهنده تسلط شما به سیستم‌دیزاین هوشمند است."
    },
    {
        "id": 13,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "چگونه با چالش عدم وجود داده‌های ساختاریافته کافی (Data Scarcity) در شروع یک پروژه شرکتی برخورد می‌کنید؟",
        "tags": [
            "#DataScarcity",
            "#SyntheticData",
            "#DataAugmentation"
        ],
        "summary": "استفاده از داده‌های ترکیبی (Synthetic Data) تولیدشده توسط LLMها، Transfer Learning، و برچسب‌گذاری سنتی با نظارت انسانی.",
        "fullAnswer": "استفاده از داده‌های ترکیبی (Synthetic Data) تولیدشده توسط LLMها، Transfer Learning، و برچسب‌گذاری سنتی با نظارت انسانی.\n\n**راهکارها:**\nتولید داده‌های متنی ترکیبی، بهره‌گیری از مدل‌های پیش‌علم‌آموخته زرو-شات، و متدولوژی Active Learning.",
        "tip": "داده‌های Synthetic تولیدشده با پرامپت‌نویسی ساختاریافته را به عنوان راهکار مدرن ذکر کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه با چالش عدم وجود داده‌های ساختاریافته کافی (Data Scarcity) در شروع یک پروژه شرکتی برخورد می‌کنید؟",
        "summary_en": "استفاده از داده‌های ترکیبی (Synthetic Data) تولیدشده توسط LLMها، Transfer Learning، و برچسب‌گذاری سنتی با نظارت انسانی.",
        "fullAnswer_en": "استفاده از داده‌های ترکیبی (Synthetic Data) تولیدشده توسط LLMها، Transfer Learning، و برچسب‌گذاری سنتی با نظارت انسانی.\n\n**راهکارها:**\nتولید داده‌های متنی ترکیبی، بهره‌گیری از مدل‌های پیش‌علم‌آموخته زرو-شات، و متدولوژی Active Learning.",
        "tip_en": "داده‌های Synthetic تولیدشده با پرامپت‌نویسی ساختاریافته را به عنوان راهکار مدرن ذکر کنید."
    },
    {
        "id": 14,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "نقش یک AI Engineer در تدوین استراتژی هوش مصنوعی محصول (AI Product Roadmap) چیست؟",
        "tags": [
            "#ProductRoadmap",
            "#AIStrategy",
            "#نقشه_راه"
        ],
        "summary": "سنجش امکان‌پذیری فنی (Technical Feasibility)، تخمین نیازهای زیرساختی و اولویت‌بندی فیچرها بر اساس ارزش نسبت به پیچیدگی.",
        "fullAnswer": "سنجش امکان‌پذیری فنی (Technical Feasibility)، تخمین نیازهای زیرساختی و اولویت‌بندی فیچرها بر اساس ارزش نسبت به پیچیدگی.\n\n**وظایف کلیدی:**\nارزیابی امکان‌پذیری ایده‌ها قبل از تثبیت در نقشه راه و تخمین هزینه پردازش در مقیاس بالا.",
        "tip": "همکاری موفق خود با مدیران محصول را در مصاحبه برجسته کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: نقش یک AI Engineer در تدوین استراتژی هوش مصنوعی محصول (AI Product Roadmap) چیست؟",
        "summary_en": "سنجش امکان‌پذیری فنی (Technical Feasibility)، تخمین نیازهای زیرساختی و اولویت‌بندی فیچرها بر اساس ارزش نسبت به پیچیدگی.",
        "fullAnswer_en": "سنجش امکان‌پذیری فنی (Technical Feasibility)، تخمین نیازهای زیرساختی و اولویت‌بندی فیچرها بر اساس ارزش نسبت به پیچیدگی.\n\n**وظایف کلیدی:**\nارزیابی امکان‌پذیری ایده‌ها قبل از تثبیت در نقشه راه و تخمین هزینه پردازش در مقیاس بالا.",
        "tip_en": "همکاری موفق خود با مدیران محصول را در مصاحبه برجسته کنید."
    },
    {
        "id": 15,
        "category": "soft_skills",
        "difficulty": "advanced",
        "title": "نحوه دفاع از تصمیمات معماری و انتخاب ابزارها در برابر مدیر ارشد فناوری (CTO) چگونه است؟",
        "tags": [
            "#CTOPresentation",
            "#ArchitectureDecision",
            "#ADR"
        ],
        "summary": "ارائه مستند ADR (Architecture Decision Record) متمرکز بر مقایسه هزینه‌های آتی، قابلیت مقیاس‌پذیری و ریسک‌های نگهداری.",
        "fullAnswer": "ارائه مستند ADR (Architecture Decision Record) متمرکز بر مقایسه هزینه‌های آتی، قابلیت مقیاس‌پذیری و ریسک‌های نگهداری.\n\n**محورهای دفاع فنی:**\nارائه بنچمارک‌های واقعی رو داده شرکت، شفاف‌سازی Total Cost of Ownership (TCO) و استراتژی خروج از ریسک تحریم.",
        "tip": "استفاده از مستندات ADR در کارهای قبلی‌تان را حتماً ذکر کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: نحوه دفاع از تصمیمات معماری و انتخاب ابزارها در برابر مدیر ارشد فناوری (CTO) چگونه است؟",
        "summary_en": "ارائه مستند ADR (Architecture Decision Record) متمرکز بر مقایسه هزینه‌های آتی، قابلیت مقیاس‌پذیری و ریسک‌های نگهداری.",
        "fullAnswer_en": "ارائه مستند ADR (Architecture Decision Record) متمرکز بر مقایسه هزینه‌های آتی، قابلیت مقیاس‌پذیری و ریسک‌های نگهداری.\n\n**محورهای دفاع فنی:**\nارائه بنچمارک‌های واقعی رو داده شرکت، شفاف‌سازی Total Cost of Ownership (TCO) و استراتژی خروج از ریسک تحریم.",
        "tip_en": "استفاده از مستندات ADR در کارهای قبلی‌تان را حتماً ذکر کنید."
    },
    {
        "id": 16,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "چگونه خطرات ناشی از تغییرات ناگهانی در قوانین یا API سرویس‌دهندگان خارجی را پوشش می‌دهید؟",
        "tags": [
            "#تحریم",
            "#VendorLockIn",
            "#AbstractionLayer"
        ],
        "summary": "طراحی لایه انتزاعی (Abstraction Layer) در کد جهت امکان سوییچ سریع بین سرویس‌دهندگان مختلف یا مدل‌های داخلی.",
        "fullAnswer": "طراحی لایه انتزاعی (Abstraction Layer) در کد جهت امکان سوییچ سریع بین سرویس‌دهندگان مختلف یا مدل‌های داخلی.\n\n**راهکار پایداری:**\nبهره‌گیری از الگوی طراحی Adapter / Strategy و فریم‌ورک‌های رابط یکسان مانند LiteLLM.",
        "tip": "لایه انتزاعی LiteLLM را به عنوان راهکار سوییچ آنی معرفی کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه خطرات ناشی از تغییرات ناگهانی در قوانین یا API سرویس‌دهندگان خارجی را پوشش می‌دهید؟",
        "summary_en": "طراحی لایه انتزاعی (Abstraction Layer) در کد جهت امکان سوییچ سریع بین سرویس‌دهندگان مختلف یا مدل‌های داخلی.",
        "fullAnswer_en": "طراحی لایه انتزاعی (Abstraction Layer) در کد جهت امکان سوییچ سریع بین سرویس‌دهندگان مختلف یا مدل‌های داخلی.\n\n**راهکار پایداری:**\nبهره‌گیری از الگوی طراحی Adapter / Strategy و فریم‌ورک‌های رابط یکسان مانند LiteLLM.",
        "tip_en": "لایه انتزاعی LiteLLM را به عنوان راهکار سوییچ آنی معرفی کنید."
    },
    {
        "id": 17,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "تکنیک‌های مدیریت استرس و فشار کاری ناشی از نامشخص بودن خروجی الگوریتم‌ها در ددلاین‌های فشرده چیست؟",
        "tags": [
            "#مدیریت_استرس",
            "#کار_تیمی",
            "#شفافیت"
        ],
        "summary": "ارتباط شفاف و مداوم با ذینفعان، ارائه الگوی MVP ساده در ابتدا و شکستن پروژه به اهداف کوچک قابل اندازه‌گیری.",
        "fullAnswer": "ارتباط شفاف و مداوم با ذینفعان، ارائه الگوی MVP ساده در ابتدا و شکستن پروژه به اهداف کوچک قابل اندازه‌گیری.\n\n**کاهش استرس:**\nساخت سریع یک Baseline ساده در روزهای اول و گزارش‌دهی شفاف پیشرفت فرضیه‌ها به مدیران.",
        "tip": "روابط عمومی قوی و مدیریت فشار کاری را شاخص ارشدیت خود نشان دهید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: تکنیک‌های مدیریت استرس و فشار کاری ناشی از نامشخص بودن خروجی الگوریتم‌ها در ددلاین‌های فشرده چیست؟",
        "summary_en": "ارتباط شفاف و مداوم با ذینفعان، ارائه الگوی MVP ساده در ابتدا و شکستن پروژه به اهداف کوچک قابل اندازه‌گیری.",
        "fullAnswer_en": "ارتباط شفاف و مداوم با ذینفعان، ارائه الگوی MVP ساده در ابتدا و شکستن پروژه به اهداف کوچک قابل اندازه‌گیری.\n\n**کاهش استرس:**\nساخت سریع یک Baseline ساده در روزهای اول و گزارش‌دهی شفاف پیشرفت فرضیه‌ها به مدیران.",
        "tip_en": "روابط عمومی قوی و مدیریت فشار کاری را شاخص ارشدیت خود نشان دهید."
    },
    {
        "id": 18,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "نحوه آموزش و Mentorship اعضای تازه‌وارد تیم هوش مصنوعی به چه صورت باید باشد؟",
        "tags": [
            "#Mentorship",
            "#آموزش",
            "#Onboarding"
        ],
        "summary": "تعریف پروژه‌های کوچک Onboarding، بررسی دقیق کدهای آن‌ها (Code Review) با لحن سازنده و به اشتراک‌گذاری Best Practiceها.",
        "fullAnswer": "تعریف پروژه‌های کوچک Onboarding، بررسی دقیق کدهای آن‌ها (Code Review) با لحن سازنده و به اشتراک‌گذاری Best Practiceها.\n\n**برنامه هدایت:**\nایجاد مستند راهنمای کدهای موجود و انجام جفت‌کدنویسی (Pair Programming) برای انتقال سریع تجربه.",
        "tip": "تجربه رهبری یا کمک به نیروهای جونیور را بیان کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: نحوه آموزش و Mentorship اعضای تازه‌وارد تیم هوش مصنوعی به چه صورت باید باشد؟",
        "summary_en": "تعریف پروژه‌های کوچک Onboarding، بررسی دقیق کدهای آن‌ها (Code Review) با لحن سازنده و به اشتراک‌گذاری Best Practiceها.",
        "fullAnswer_en": "تعریف پروژه‌های کوچک Onboarding، بررسی دقیق کدهای آن‌ها (Code Review) با لحن سازنده و به اشتراک‌گذاری Best Practiceها.\n\n**برنامه هدایت:**\nایجاد مستند راهنمای کدهای موجود و انجام جفت‌کدنویسی (Pair Programming) برای انتقال سریع تجربه.",
        "tip_en": "تجربه رهبری یا کمک به نیروهای جونیور را بیان کنید."
    },
    {
        "id": 19,
        "category": "soft_skills",
        "difficulty": "intermediate",
        "title": "چگونه تعادل بین استفاده از ابزارهای Open-Source و ابزارهای تجاری را برقرار می‌سازید؟",
        "tags": [
            "#OpenSource",
            "#Proprietary",
            "#انتخاب_ابزار"
        ],
        "summary": "ارزیابی میزان فعالیت جامعه توسعه‌دهندگان، لایسنس نرم‌افزاری، پایداری امنیتی و هزینه پشتیبانی ابزارها.",
        "fullAnswer": "ارزیابی میزان فعالیت جامعه توسعه‌دهندگان، لایسنس نرم‌افزاری، پایداری امنیتی و هزینه پشتیبانی ابزارها.\n\n**معیار سنجش:**\nبررسی دقیق لایسنس تجاری ابزارها، پایداری امنیتی و میزان فعالیت توسعه‌دهندگان در گیتهاب.",
        "tip": "توجه به نوع لایسنس ابزارهای Open-Source نشانه دقت حرفه‌ای شماست.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: چگونه تعادل بین استفاده از ابزارهای Open-Source و ابزارهای تجاری را برقرار می‌سازید؟",
        "summary_en": "ارزیابی میزان فعالیت جامعه توسعه‌دهندگان، لایسنس نرم‌افزاری، پایداری امنیتی و هزینه پشتیبانی ابزارها.",
        "fullAnswer_en": "ارزیابی میزان فعالیت جامعه توسعه‌دهندگان، لایسنس نرم‌افزاری، پایداری امنیتی و هزینه پشتیبانی ابزارها.\n\n**معیار سنجش:**\nبررسی دقیق لایسنس تجاری ابزارها، پایداری امنیتی و میزان فعالیت توسعه‌دهندگان در گیتهاب.",
        "tip_en": "توجه به نوع لایسنس ابزارهای Open-Source نشانه دقت حرفه‌ای شماست."
    },
    {
        "id": 20,
        "category": "soft_skills",
        "difficulty": "beginner",
        "title": "هنگام برخورد با انتقادات کاربران نهایی نسبت به عملکرد مدل هوش مصنوعی چه مکانیزم بازخوردی طراحی می‌کنید؟",
        "tags": [
            "#FeedbackLoop",
            "#کاربران",
            "#بازخورد"
        ],
        "summary": "ایجاد دکمه‌های بازخورد ساده (Thumbs up/down)، لاگ‌گیری ورودی‌های خطادار و استفاده از آن‌ها در چرخه آموزش مجدد.",
        "fullAnswer": "ایجاد دکمه‌های بازخورد ساده (Thumbs up/down)، لاگ‌گیری ورودی‌های خطادار و استفاده از آن‌ها در چرخه آموزش مجدد.\n\n**چرخه بازخورد:**\nثبت بازخورد مستقیم کاربران و ارسال نمونه‌های خطادار به دیتابیس جداگانه برای بازبینی و Fine-Tuning بعدی.",
        "tip": "توضیح دهید که چگونه از بازخورد کاربر برای بهبود دائم مدل استفاده می‌کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Soft Skills & Behavioral Question: هنگام برخورد با انتقادات کاربران نهایی نسبت به عملکرد مدل هوش مصنوعی چه مکانیزم بازخوردی طراحی می‌کنید؟",
        "summary_en": "ایجاد دکمه‌های بازخورد ساده (Thumbs up/down)، لاگ‌گیری ورودی‌های خطادار و استفاده از آن‌ها در چرخه آموزش مجدد.",
        "fullAnswer_en": "ایجاد دکمه‌های بازخورد ساده (Thumbs up/down)، لاگ‌گیری ورودی‌های خطادار و استفاده از آن‌ها در چرخه آموزش مجدد.\n\n**چرخه بازخورد:**\nثبت بازخورد مستقیم کاربران و ارسال نمونه‌های خطادار به دیتابیس جداگانه برای بازبینی و Fine-Tuning بعدی.",
        "tip_en": "توضیح دهید که چگونه از بازخورد کاربر برای بهبود دائم مدل استفاده می‌کنید."
    },
    {
        "id": 21,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "معماری RAG (Retrieval-Augmented Generation) چیست و چه فرآیندی را طی می‌کند؟",
        "tags": [
            "#RAG",
            "#VectorDB",
            "#Embeddings",
            "#LLM"
        ],
        "summary": "RAG با بازیابی اسناد مرتبط از یک پایگاه داده برداری و افزودن آن‌ها به پرامپت LLM، مانع هالوسینیشن شده و دانش به‌روز به مدل اضافه می‌کند.",
        "fullAnswer": "RAG با بازیابی اسناد مرتبط از یک پایگاه داده برداری و افزودن آن‌ها به پرامپت LLM، مانع هالوسینیشن شده و دانش به‌روز به مدل اضافه می‌کند.\n\n**مراحل اصلی RAG:**\n۱. Indexing: تبدیل فایل‌های متنی/PDF به تکه‌ها (Chunks)، محاسبه Embedding و ذخیره در Vector DB.\n۲. Retrieval: محاسبه شباهت برداری (Cosine Similarity) بین پرسش کاربر و تکه‌ها.\n۳. Generation: تزریق تکه‌های بازیابی شده به پرامپت LLM جهت تولید پاسخ دقیق.",
        "tip": "همواره در مصاحبه تفاوت بین Naive RAG و Advanced RAG را بیان کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is RAG (Retrieval-Augmented Generation) architecture and how does its workflow operate?",
        "summary_en": "RAG retrieves relevant document chunks from a vector database and injects them into the LLM prompt, eliminating hallucination and providing real-time data.",
        "fullAnswer_en": "1. Indexing: Parse files into chunks, compute vector embeddings, and store in Vector DB.\n2. Retrieval: Calculate cosine similarity between user query and vector chunks.\n3. Generation: Pass top-K retrieved chunks inside LLM context window to generate accurate answers.",
        "tip_en": "Always contrast Naive RAG with Advanced RAG in senior technical interviews."
    },
    {
        "id": 22,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "GraphRAG چیست و چه تفاوت کلیدی با Vector RAG سنتی دارد؟",
        "tags": [
            "#GraphRAG",
            "#KnowledgeGraph",
            "#Microsoft",
            "#RAG"
        ],
        "summary": "GraphRAG با استخراج گراف دانش (موجودیت‌ها و روابط) و خلاصه‌سازی اجتماع‌ها، پرسش‌های جامع که Vector RAG ناتوان از آن است را پاسخ می‌دهد.",
        "fullAnswer": "GraphRAG با استخراج گراف دانش (موجودیت‌ها و روابط) و خلاصه‌سازی اجتماع‌ها، پرسش‌های جامع که Vector RAG ناتوان از آن است را پاسخ می‌دهد.\n\n**تفاوت اصلی:**\nVector RAG برای یافتن تکه‌های مشخص متن (Local Search) عالی است، اما GraphRAG با خلاصه‌سازی کلاسیفای‌شده گرافی، به سوالات عمومی و کلان کل اسناد (Global Search) پاسخ می‌دهد.",
        "tip": "تأکید کنید GraphRAG هزینه Indexing بالاتری دارد اما کیفیت درک کلان آن بی‌نظیر است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is GraphRAG and how does it differ from traditional Vector RAG?",
        "summary_en": "GraphRAG extracts knowledge graphs (entities & relations) and community summaries, answering global summary questions that Vector RAG fails to capture.",
        "fullAnswer_en": "1. Key Difference: Vector RAG is excellent at pinpointing specific text facts (Local Search), while GraphRAG organizes hierarchical graph communities to answer high-level holistic queries (Global Search).",
        "tip_en": "Highlight that GraphRAG has higher indexing cost but offers unmatched global comprehension."
    },
    {
        "id": 23,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "استراتژی‌های استاندارد Chunking (تکه‌تکه‌سازی متون) در RAG کدامند؟",
        "tags": [
            "#Chunking",
            "#Preprocessing",
            "#NLP"
        ],
        "summary": "انواع روش‌ها شامل: Fixed-size (با Overlap)، Sentence-based، Semantic Chunking و Parent-Child Chunking است.",
        "fullAnswer": "انواع روش‌ها شامل: Fixed-size (با Overlap)، Sentence-based، Semantic Chunking و Parent-Child Chunking است.\n\n**Parent-Child Chunking:**\nذخیره تکه‌های کوچک (Child) برای بازیابی دقیق برداری، اما ارسال پاراگراف اصلی و بزرگتر (Parent) به LLM برای داشتن زمینه کامل.",
        "tip": "روش Parent-Child از محبوب‌ترین سوالات مصاحبه ارشد RAG است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What are the standard Chunking strategies in RAG pipelines?",
        "summary_en": "Fixed-size with overlap, sentence-based, semantic chunking, and parent-child chunking.",
        "fullAnswer_en": "1. Parent-Child Chunking: Store small child chunks for vector search accuracy, but return the parent paragraph to LLM for full contextual awareness.",
        "tip_en": "Parent-Child chunking is a top question for senior RAG engineering roles."
    },
    {
        "id": 24,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "مفهوم Reranking و استفاده از Cross-Encoder در RAG چیست؟",
        "tags": [
            "#Reranking",
            "#CrossEncoder",
            "#BiEncoder"
        ],
        "summary": "Bi-Encoderها (مثل Vector DB) سریع هستند اما دقت پایین‌تری دارند. Cross-Encoder به عنوان مرحله دوم، Top-K اسناد بازیابی‌شده را بازسنجی می‌کند.",
        "fullAnswer": "Bi-Encoderها (مثل Vector DB) سریع هستند اما دقت پایین‌تری دارند. Cross-Encoder به عنوان مرحله دوم، Top-K اسناد بازیابی‌شده را بازسنجی می‌کند.\n\n**فرآیند کار:**\nدریافت مثلاً ۵۰ سند اول از دیتابیس برداری و ارسال همزمان پرسش و تکه‌ها به Cross-Encoder برای تعیین رتبه‌بندی نهایی دقیق.",
        "tip": "Reranking کیفیت RAG را تا ۳۰٪ افزایش می‌دهد بدون اینکه هزینه نمایه‌سازی را بالا ببرد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is Reranking and how is Cross-Encoder used in RAG?",
        "summary_en": "Bi-Encoders (Vector DBs) are fast but less accurate. Cross-Encoder acts as a second-stage reranker to score the top-K retrieved documents with high precision.",
        "fullAnswer_en": "1. Workflow: Retrieve top-50 candidate chunks from Vector DB, then pass (query, chunk) pairs into a Cross-Encoder to output final refined rankings.",
        "tip_en": "Reranking boosts RAG precision by up to 30% without changing indexing infrastructure."
    },
    {
        "id": 25,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "تکنیک HyDE (Hypothetical Document Embeddings) در RAG چگونه کار می‌کند؟",
        "tags": [
            "#HyDE",
            "#QueryTransformation",
            "#AdvancedRAG"
        ],
        "summary": "در HyDE، ابتدا LLM یک پاسخ فرضی برای سوال کاربر می‌سازد، سپس بردار آن پاسخ فرضی برای جستجو در Vector DB استفاده می‌شود.",
        "fullAnswer": "در HyDE، ابتدا LLM یک پاسخ فرضی برای سوال کاربر می‌سازد، سپس بردار آن پاسخ فرضی برای جستجو در Vector DB استفاده می‌شود.\n\n**علت استفاده:**\nچون فضای برداری یک پاسخ فرضی به اسناد واقعی شباهت هندسی بیشتری دارد تا یک پرسش کوتاه اولیه کاربر.",
        "tip": "HyDE برای سیستم‌های Q&A پیچیده یک برگ برنده در مصاحبه است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How does HyDE (Hypothetical Document Embeddings) work in advanced RAG?",
        "summary_en": "HyDE uses an LLM to generate a hypothetical answer first, then uses that hypothetical answer's vector to search the Vector DB.",
        "fullAnswer_en": "1. Rationale: The vector embedding of a hypothetical answer is geometrically closer to true document chunks than a short raw user query.",
        "tip_en": "HyDE is a game-changer for complex question-answering systems."
    },
    {
        "id": 26,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "تفاوت Hybrid Search (جستجوی ترکیبی) با جستجوی صرفاً برداری چیست؟",
        "tags": [
            "#HybridSearch",
            "#BM25",
            "#VectorSearch",
            "#ReciprocalRankFusion"
        ],
        "summary": "ترکیب جستجوی کلیدواژه‌ای سنتی (BM25) با جستجوی صرفاً برداری (Dense Vector) جهت دستیابی به بالاترین دقت بازیابی.",
        "fullAnswer": "ترکیب جستجوی کلیدواژه‌ای سنتی (BM25) با جستجوی صرفاً برداری (Dense Vector) جهت دستیابی به بالاترین دقت بازیابی.\n\n**مزیت ترکیبی:**\nBM25 کلمات خاص مانند کدهای محصول یا اسامی را دقیق پیدا می‌کند و Dense Vector مفهوم جملات را درک می‌کند.",
        "tip": "اکثر دیتابیس‌های برداری مدرن نیتیو از Hybrid Search پشتیبانی می‌کنند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تفاوت Hybrid Search (جستجوی ترکیبی) با جستجوی صرفاً برداری چیست؟",
        "summary_en": "ترکیب جستجوی کلیدواژه‌ای سنتی (BM25) با جستجوی صرفاً برداری (Dense Vector) جهت دستیابی به بالاترین دقت بازیابی.",
        "fullAnswer_en": "ترکیب جستجوی کلیدواژه‌ای سنتی (BM25) با جستجوی صرفاً برداری (Dense Vector) جهت دستیابی به بالاترین دقت بازیابی.\n\n**مزیت ترکیبی:**\nBM25 کلمات خاص مانند کدهای محصول یا اسامی را دقیق پیدا می‌کند و Dense Vector مفهوم جملات را درک می‌کند.",
        "tip_en": "اکثر دیتابیس‌های برداری مدرن نیتیو از Hybrid Search پشتیبانی می‌کنند."
    },
    {
        "id": 27,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "معیارهای ارزیابی سیستم‌های RAG (برچسب RAG Triad) چیستند؟",
        "tags": [
            "#RAG_Evaluation",
            "#Ragas",
            "#TruLens",
            "#Metrics"
        ],
        "summary": "سه ضلع مثلث ارزیابی RAG شامل: Faithfulness (وفاداری به سند)، Answer Relevance (ارتباط پاسخ) و Context Relevance (ارتباط اسناد).",
        "fullAnswer": "سه ضلع مثلث ارزیابی RAG شامل: Faithfulness (وفاداری به سند)، Answer Relevance (ارتباط پاسخ) و Context Relevance (ارتباط اسناد).\n\n**Ragas Framework:**\nاستفاده از ابزار Ragas برای محاسبه نمره‌های ریاضی کیفیت بازیابی و عدم وجود هالوسینیشن در پاسخ.",
        "tip": "ذکر ابزار Ragas در مصاحبه نشان‌دهنده تجربه ارزیابی پروژه‌های تولیدی است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: معیارهای ارزیابی سیستم‌های RAG (برچسب RAG Triad) چیستند؟",
        "summary_en": "سه ضلع مثلث ارزیابی RAG شامل: Faithfulness (وفاداری به سند)، Answer Relevance (ارتباط پاسخ) و Context Relevance (ارتباط اسناد).",
        "fullAnswer_en": "سه ضلع مثلث ارزیابی RAG شامل: Faithfulness (وفاداری به سند)، Answer Relevance (ارتباط پاسخ) و Context Relevance (ارتباط اسناد).\n\n**Ragas Framework:**\nاستفاده از ابزار Ragas برای محاسبه نمره‌های ریاضی کیفیت بازیابی و عدم وجود هالوسینیشن در پاسخ.",
        "tip_en": "ذکر ابزار Ragas در مصاحبه نشان‌دهنده تجربه ارزیابی پروژه‌های تولیدی است."
    },
    {
        "id": 28,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "چالش Lost in the Middle در RAG چیست و چگونه برطرف می‌شود؟",
        "tags": [
            "#LostInTheMiddle",
            "#ContextWindow",
            "#Optimization"
        ],
        "summary": "مدل‌های زبانی بزرگ اطلاعات موجود در ابتدا و انتهای پنجره Context را بهتر یادآوری می‌کنند و اطلاعات وسط پرامپت را ندید می‌گیرند.",
        "fullAnswer": "مدل‌های زبانی بزرگ اطلاعات موجود در ابتدا و انتهای پنجره Context را بهتر یادآوری می‌کنند و اطلاعات وسط پرامپت را ندید می‌گیرند.\n\n**راهکار رفع چالش:**\nمحدود کردن تعداد تکه‌ها (Top-K=3) و بازترتیب اسناد (Context Reordering) جهت قرار دادن اسناد مهم در اول و آخر پرامپت.",
        "tip": "با مطرح کردن این چالش ثابت می‌کنید که معماری‌های داخلی LLM را درک کرده‌اید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: چالش Lost in the Middle در RAG چیست و چگونه برطرف می‌شود؟",
        "summary_en": "مدل‌های زبانی بزرگ اطلاعات موجود در ابتدا و انتهای پنجره Context را بهتر یادآوری می‌کنند و اطلاعات وسط پرامپت را ندید می‌گیرند.",
        "fullAnswer_en": "مدل‌های زبانی بزرگ اطلاعات موجود در ابتدا و انتهای پنجره Context را بهتر یادآوری می‌کنند و اطلاعات وسط پرامپت را ندید می‌گیرند.\n\n**راهکار رفع چالش:**\nمحدود کردن تعداد تکه‌ها (Top-K=3) و بازترتیب اسناد (Context Reordering) جهت قرار دادن اسناد مهم در اول و آخر پرامپت.",
        "tip_en": "با مطرح کردن این چالش ثابت می‌کنید که معماری‌های داخلی LLM را درک کرده‌اید."
    },
    {
        "id": 29,
        "category": "rag_graphrag",
        "difficulty": "beginner",
        "title": "پایگاه داده برداری (Vector Database) چیست و چه تفاوتی با Relational DB دارد؟",
        "tags": [
            "#VectorDB",
            "#Qdrant",
            "#ChromaDB",
            "#PostgreSQL"
        ],
        "summary": "ذخیره‌سازی داده‌ها به صورت بردارهای چندبعدی و جستجو بر اساس فاصله هندسی (Cosine Similarity) با الگوریتم‌های ANN.",
        "fullAnswer": "ذخیره‌سازی داده‌ها به صورت بردارهای چندبعدی و جستجو بر اساس فاصله هندسی (Cosine Similarity) با الگوریتم‌های ANN.\n\n**تفاوت بنیادی:**\nدیتابیس سنتی مقایسه دقیق فیلدی انجام می‌دهد، دیتابیس برداری شباهت مفاهیم را در فضای چندصد بعدی پیدا می‌کند.",
        "tip": "مثال‌های رایج: Qdrant, ChromaDB, Milvus, Pinecone, pgvector.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: پایگاه داده برداری (Vector Database) چیست و چه تفاوتی با Relational DB دارد؟",
        "summary_en": "ذخیره‌سازی داده‌ها به صورت بردارهای چندبعدی و جستجو بر اساس فاصله هندسی (Cosine Similarity) با الگوریتم‌های ANN.",
        "fullAnswer_en": "ذخیره‌سازی داده‌ها به صورت بردارهای چندبعدی و جستجو بر اساس فاصله هندسی (Cosine Similarity) با الگوریتم‌های ANN.\n\n**تفاوت بنیادی:**\nدیتابیس سنتی مقایسه دقیق فیلدی انجام می‌دهد، دیتابیس برداری شباهت مفاهیم را در فضای چندصد بعدی پیدا می‌کند.",
        "tip_en": "مثال‌های رایج: Qdrant, ChromaDB, Milvus, Pinecone, pgvector."
    },
    {
        "id": 30,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "معماری Self-RAG و Corrective RAG (CRAG) چیستند؟",
        "tags": [
            "#SelfRAG",
            "#CRAG",
            "#AgenticRAG"
        ],
        "summary": "افزودن عقلانیت و خودارزیابی به RAG تا در صورت ناکافی بودن اسناد، خود مدل اقدام به جستجوی مجدد یا وب‌سرچ کند.",
        "fullAnswer": "افزودن عقلانیت و خودارزیابی به RAG تا در صورت ناکافی بودن اسناد، خود مدل اقدام به جستجوی مجدد یا وب‌سرچ کند.\n\n**CRAG Logic:**\nاگر اسناد بازیابی شده غیرمرتبط باشند، سیستم اسناد را دور ریخته و به سمت Web Search تغییر مسیر می‌دهد.",
        "tip": "سیستم‌های Agentic RAG آینده صنعت هوش مصنوعی هستند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: معماری Self-RAG و Corrective RAG (CRAG) چیستند؟",
        "summary_en": "افزودن عقلانیت و خودارزیابی به RAG تا در صورت ناکافی بودن اسناد، خود مدل اقدام به جستجوی مجدد یا وب‌سرچ کند.",
        "fullAnswer_en": "افزودن عقلانیت و خودارزیابی به RAG تا در صورت ناکافی بودن اسناد، خود مدل اقدام به جستجوی مجدد یا وب‌سرچ کند.\n\n**CRAG Logic:**\nاگر اسناد بازیابی شده غیرمرتبط باشند، سیستم اسناد را دور ریخته و به سمت Web Search تغییر مسیر می‌دهد.",
        "tip_en": "سیستم‌های Agentic RAG آینده صنعت هوش مصنوعی هستند."
    },
    {
        "id": 31,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نحوه مدیریت اسناد چندرسانه‌ای (Multimodal RAG) شامل جداول و تصاویر چیست؟",
        "tags": [
            "#MultimodalRAG",
            "#VisionLLM",
            "#Unstructured"
        ],
        "summary": "استخراج جداول و تبدیل به Markdown با پارسرها، و تولید توصیف متنی برای تصاویر با مدل‌های بینایی جهت ذخیره در دیتابیس برداری.",
        "fullAnswer": "استخراج جداول و تبدیل به Markdown با پارسرها، و تولید توصیف متنی برای تصاویر با مدل‌های بینایی جهت ذخیره در دیتابیس برداری.\n\n**راهکار پردازش جداول:**\nاستفاده از LlamaParse جهت حفظ فرمت جداول مالی بدون برهم‌خوردگی ستون‌ها.",
        "tip": "تکنیکی حیاتی برای پردازش گزارش‌های مالی و فاکتورها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه مدیریت اسناد چندرسانه‌ای (Multimodal RAG) شامل جداول و تصاویر چیست؟",
        "summary_en": "استخراج جداول و تبدیل به Markdown با پارسرها، و تولید توصیف متنی برای تصاویر با مدل‌های بینایی جهت ذخیره در دیتابیس برداری.",
        "fullAnswer_en": "استخراج جداول و تبدیل به Markdown با پارسرها، و تولید توصیف متنی برای تصاویر با مدل‌های بینایی جهت ذخیره در دیتابیس برداری.\n\n**راهکار پردازش جداول:**\nاستفاده از LlamaParse جهت حفظ فرمت جداول مالی بدون برهم‌خوردگی ستون‌ها.",
        "tip_en": "تکنیکی حیاتی برای پردازش گزارش‌های مالی و فاکتورها."
    },
    {
        "id": 32,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "تکنیک Agentic Search و Iterative Retrieval در RAG پیشرفته چگونه کار می‌کند؟",
        "tags": [
            "#AgenticRAG",
            "#IterativeRetrieval",
            "#LangChain"
        ],
        "summary": "اگر اسناد اولیه کافی نباشد، ایجنت خود اقدام به بازنویسی پرامپت، تجزیه سوال و جستجوی مجدد در چند مرحله می‌کند.",
        "fullAnswer": "اگر اسناد اولیه کافی نباشد، ایجنت خود اقدام به بازنویسی پرامپت، تجزیه سوال و جستجوی مجدد در چند مرحله می‌کند.\n\n**چرخه کار:**\nشکستن سوالات پیچیده به سوالات فرعی، سرچ متوالی و ارزیابی کافی بودن دانش قبل از تولید خروجی.",
        "tip": "کیفیت پاسخ به مسائل پیچیده چندمرحله‌ای را بسیار بالا می‌برد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تکنیک Agentic Search و Iterative Retrieval در RAG پیشرفته چگونه کار می‌کند؟",
        "summary_en": "اگر اسناد اولیه کافی نباشد، ایجنت خود اقدام به بازنویسی پرامپت، تجزیه سوال و جستجوی مجدد در چند مرحله می‌کند.",
        "fullAnswer_en": "اگر اسناد اولیه کافی نباشد، ایجنت خود اقدام به بازنویسی پرامپت، تجزیه سوال و جستجوی مجدد در چند مرحله می‌کند.\n\n**چرخه کار:**\nشکستن سوالات پیچیده به سوالات فرعی، سرچ متوالی و ارزیابی کافی بودن دانش قبل از تولید خروجی.",
        "tip_en": "کیفیت پاسخ به مسائل پیچیده چندمرحله‌ای را بسیار بالا می‌برد."
    },
    {
        "id": 33,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "الگوریتم HNSW در Vector Databaseها چگونه سرعت جستجو را بالا می‌برد؟",
        "tags": [
            "#HNSW",
            "#VectorDB",
            "#ANN"
        ],
        "summary": "ساخت ساختار گرافی چندلایه‌ای از بردارهای نزدیک برای پیمایش سریع بدون نیاز به چک کردن تمام بردارها در زمان O(log N).",
        "fullAnswer": "ساخت ساختار گرافی چندلایه‌ای از بردارهای نزدیک برای پیمایش سریع بدون نیاز به چک کردن تمام بردارها در زمان O(log N).\n\n**ساختار گرافی:**\nایجاد لایه‌های بالایی برای پرش‌های بزرگ و لایه‌های پایینی برای پیمایش دقیق نزدیک‌ترین همسایه‌ها.",
        "tip": "مهم‌ترین الگوریتم نمایه‌سازی برداری در Qdrant و Milvus.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: الگوریتم HNSW در Vector Databaseها چگونه سرعت جستجو را بالا می‌برد؟",
        "summary_en": "ساخت ساختار گرافی چندلایه‌ای از بردارهای نزدیک برای پیمایش سریع بدون نیاز به چک کردن تمام بردارها در زمان O(log N).",
        "fullAnswer_en": "ساخت ساختار گرافی چندلایه‌ای از بردارهای نزدیک برای پیمایش سریع بدون نیاز به چک کردن تمام بردارها در زمان O(log N).\n\n**ساختار گرافی:**\nایجاد لایه‌های بالایی برای پرش‌های بزرگ و لایه‌های پایینی برای پیمایش دقیق نزدیک‌ترین همسایه‌ها.",
        "tip_en": "مهم‌ترین الگوریتم نمایه‌سازی برداری در Qdrant و Milvus."
    },
    {
        "id": 34,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نحوه دسته‌بندی و نمایه‌سازی اسناد با ساختار سلسله‌مراتبی (Hierarchical Indexing) در RAG به چه صورت است؟",
        "tags": [
            "#HierarchicalIndexing",
            "#SummaryIndex",
            "#LlamaIndex"
        ],
        "summary": "ساخت نمایه خلاصه برای کل سند و نمایه‌های دقیق برای هر فصل، تا ابتدا سند مرتبط پیدا شده و سپس تکه دقیق استخراج گردد.",
        "fullAnswer": "ساخت نمایه خلاصه برای کل سند و نمایه‌های دقیق برای هر فصل، تا ابتدا سند مرتبط پیدا شده و سپس تکه دقیق استخراج گردد.\n\n**سطوح نمایه‌سازی:**\nسطح ۱: بردار خلاصه سند. سطح ۲: بردار تکه‌های متنی همان سند جهت کاهش نویز جستجو.",
        "tip": "این روش هزینه‌های جستجو را در پایگاه‌های دانش کلان سازمان به شدت کاهش می‌دهد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه دسته‌بندی و نمایه‌سازی اسناد با ساختار سلسله‌مراتبی (Hierarchical Indexing) در RAG به چه صورت است؟",
        "summary_en": "ساخت نمایه خلاصه برای کل سند و نمایه‌های دقیق برای هر فصل، تا ابتدا سند مرتبط پیدا شده و سپس تکه دقیق استخراج گردد.",
        "fullAnswer_en": "ساخت نمایه خلاصه برای کل سند و نمایه‌های دقیق برای هر فصل، تا ابتدا سند مرتبط پیدا شده و سپس تکه دقیق استخراج گردد.\n\n**سطوح نمایه‌سازی:**\nسطح ۱: بردار خلاصه سند. سطح ۲: بردار تکه‌های متنی همان سند جهت کاهش نویز جستجو.",
        "tip_en": "این روش هزینه‌های جستجو را در پایگاه‌های دانش کلان سازمان به شدت کاهش می‌دهد."
    },
    {
        "id": 35,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "روش‌های کنترل جابه‌جایی منبع (Citation Grounding) در RAG جهت جلوگیری از ارجاع نادرست چیست؟",
        "tags": [
            "#Citation",
            "#Grounding",
            "#FactChecking"
        ],
        "summary": "اجبار مدل به درج شماره رفرنس [1] در انتهای هر جمله و بررسی منطقی تطابق جمله تولیدی با تکه منبع توسط مدل ارزیاب.",
        "fullAnswer": "اجبار مدل به درج شماره رفرنس [1] در انتهای هر جمله و بررسی منطقی تطابق جمله تولیدی با تکه منبع توسط مدل ارزیاب.\n\n**الزام ارجاع‌دهی:**\nطراحی System Prompt جهت درج شناسه سند و فیلتر جملات فاقد رفرنس توسط ماژول پس‌پردازش.",
        "tip": "ارجاع‌دهی دقیق (Citation) کلید اصلی کسب اعتماد مشتریان بانکی و حقوقی است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: روش‌های کنترل جابه‌جایی منبع (Citation Grounding) در RAG جهت جلوگیری از ارجاع نادرست چیست؟",
        "summary_en": "اجبار مدل به درج شماره رفرنس [1] در انتهای هر جمله و بررسی منطقی تطابق جمله تولیدی با تکه منبع توسط مدل ارزیاب.",
        "fullAnswer_en": "اجبار مدل به درج شماره رفرنس [1] در انتهای هر جمله و بررسی منطقی تطابق جمله تولیدی با تکه منبع توسط مدل ارزیاب.\n\n**الزام ارجاع‌دهی:**\nطراحی System Prompt جهت درج شناسه سند و فیلتر جملات فاقد رفرنس توسط ماژول پس‌پردازش.",
        "tip_en": "ارجاع‌دهی دقیق (Citation) کلید اصلی کسب اعتماد مشتریان بانکی و حقوقی است."
    },
    {
        "id": 36,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "چالش به‌روزرسانی زنده داده‌ها (Real-time Indexing) در پایگاه داده‌های برداری چیست؟",
        "tags": [
            "#RealtimeIndexing",
            "#VectorDB",
            "#CRUD"
        ],
        "summary": "دریافت، تبدیل به بردار و افزودن آنی اسناد جدید به Vector DB بدون مختل کردن فرایند جستجوی کاربران زنده.",
        "fullAnswer": "دریافت، تبدیل به بردار و افزودن آنی اسناد جدید به Vector DB بدون مختل کردن فرایند جستجوی کاربران زنده.\n\n**راهکار معماری:**\nاستفاده از سیستم‌های صف پیام (Kafka/RabbitMQ) و به‌روزرسانی async نمایه‌های برداری.",
        "tip": "ضروری برای سیستم‌های خبری و پشتیبانی آنلاین.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: چالش به‌روزرسانی زنده داده‌ها (Real-time Indexing) در پایگاه داده‌های برداری چیست؟",
        "summary_en": "دریافت، تبدیل به بردار و افزودن آنی اسناد جدید به Vector DB بدون مختل کردن فرایند جستجوی کاربران زنده.",
        "fullAnswer_en": "دریافت، تبدیل به بردار و افزودن آنی اسناد جدید به Vector DB بدون مختل کردن فرایند جستجوی کاربران زنده.\n\n**راهکار معماری:**\nاستفاده از سیستم‌های صف پیام (Kafka/RabbitMQ) و به‌روزرسانی async نمایه‌های برداری.",
        "tip_en": "ضروری برای سیستم‌های خبری و پشتیبانی آنلاین."
    },
    {
        "id": 37,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "نحوه استخراج دانش و ساخت خودکار Knowledge Graph از متون غیرساختاریافته چیست؟",
        "tags": [
            "#KnowledgeGraph",
            "#NLP",
            "#EntityExtraction"
        ],
        "summary": "پردازش متون توسط LLM جهت استخراج گراف موجودیت‌ها (Entities) و روابط بین آن‌ها (Relations) در فرمت هم‌سند.",
        "fullAnswer": "پردازش متون توسط LLM جهت استخراج گراف موجودیت‌ها (Entities) و روابط بین آن‌ها (Relations) در فرمت هم‌سند.\n\n**فرآیند استخراج:**\nاستفاده از پرامپت‌های ساختاریافته JSON Mode برای گرفتن زوج‌های (Subject, Predicate, Object).",
        "tip": "پایه اصلی ساخت سیستم‌های GraphRAG.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه استخراج دانش و ساخت خودکار Knowledge Graph از متون غیرساختاریافته چیست؟",
        "summary_en": "پردازش متون توسط LLM جهت استخراج گراف موجودیت‌ها (Entities) و روابط بین آن‌ها (Relations) در فرمت هم‌سند.",
        "fullAnswer_en": "پردازش متون توسط LLM جهت استخراج گراف موجودیت‌ها (Entities) و روابط بین آن‌ها (Relations) در فرمت هم‌سند.\n\n**فرآیند استخراج:**\nاستفاده از پرامپت‌های ساختاریافته JSON Mode برای گرفتن زوج‌های (Subject, Predicate, Object).",
        "tip_en": "پایه اصلی ساخت سیستم‌های GraphRAG."
    },
    {
        "id": 38,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "تفاوت بین Dense Retrieval و Sparse Retrieval چیست و چه زمانی از هر کدام استفاده می‌کنیم؟",
        "tags": [
            "#DenseRetrieval",
            "#SparseRetrieval",
            "#BM25"
        ],
        "summary": "Dense بردار مفاهیم (Embeddings) را چک می‌کند و Sparse ماتریس فراوانی کلمات (BM25/SPLADE) را بررسی می‌نماید.",
        "fullAnswer": "Dense بردار مفاهیم (Embeddings) را چک می‌کند و Sparse ماتریس فراوانی کلمات (BM25/SPLADE) را بررسی می‌نماید.\n\n**مقایسه کاربرد:**\nDense برای درک معنا و مترادف‌ها عالی است، Sparse برای کلمات خاص، کد محصول و اسامی دقیق کاربرد دارد.",
        "tip": "ترکیب این دو همان Hybrid Search است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تفاوت بین Dense Retrieval و Sparse Retrieval چیست و چه زمانی از هر کدام استفاده می‌کنیم؟",
        "summary_en": "Dense بردار مفاهیم (Embeddings) را چک می‌کند و Sparse ماتریس فراوانی کلمات (BM25/SPLADE) را بررسی می‌نماید.",
        "fullAnswer_en": "Dense بردار مفاهیم (Embeddings) را چک می‌کند و Sparse ماتریس فراوانی کلمات (BM25/SPLADE) را بررسی می‌نماید.\n\n**مقایسه کاربرد:**\nDense برای درک معنا و مترادف‌ها عالی است، Sparse برای کلمات خاص، کد محصول و اسامی دقیق کاربرد دارد.",
        "tip_en": "ترکیب این دو همان Hybrid Search است."
    },
    {
        "id": 39,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "الگوریتم Reciprocal Rank Fusion (RRF) چگونه نتایج چندین موتور جستجو را ادغام می‌کند؟",
        "tags": [
            "#RRF",
            "#SearchFusion",
            "#Ranking"
        ],
        "summary": "محاسبه اسکور ترکیبی بر اساس معکوس رتبه هر سند در موتورهای جستجوی مختلف بدون نیاز به نرمال‌سازی نمره‌ها.",
        "fullAnswer": "محاسبه اسکور ترکیبی بر اساس معکوس رتبه هر سند در موتورهای جستجوی مختلف بدون نیاز به نرمال‌سازی نمره‌ها.\n\n**فرمول RRF:**\nScore(d) = sum( 1 / (k + rank(d)) ) که k معمولاً برابر ۶۰ تنظیم می‌شود.",
        "tip": "الگوریتم استاندارد ادغام نتایج در Hybrid Search.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: الگوریتم Reciprocal Rank Fusion (RRF) چگونه نتایج چندین موتور جستجو را ادغام می‌کند؟",
        "summary_en": "محاسبه اسکور ترکیبی بر اساس معکوس رتبه هر سند در موتورهای جستجوی مختلف بدون نیاز به نرمال‌سازی نمره‌ها.",
        "fullAnswer_en": "محاسبه اسکور ترکیبی بر اساس معکوس رتبه هر سند در موتورهای جستجوی مختلف بدون نیاز به نرمال‌سازی نمره‌ها.\n\n**فرمول RRF:**\nScore(d) = sum( 1 / (k + rank(d)) ) که k معمولاً برابر ۶۰ تنظیم می‌شود.",
        "tip_en": "الگوریتم استاندارد ادغام نتایج در Hybrid Search."
    },
    {
        "id": 40,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "نحوه پیاده‌سازی سیستم‌های RAG چندزبانه (Multilingual RAG) به ویژه برای زبان فارسی چگونه است؟",
        "tags": [
            "#MultilingualRAG",
            "#PersianNLP",
            "#Embeddings"
        ],
        "summary": "استفاده از مدل‌های Embedding چندزبانه پیشرفته (مثل bge-m3 یا cohort-embed-v3) و استانداردسازی توکنایزر متون فارسی.",
        "fullAnswer": "استفاده از مدل‌های Embedding چندزبانه پیشرفته (مثل bge-m3 یا cohort-embed-v3) و استانداردسازی توکنایزر متون فارسی.\n\n**نکات زبان فارسی:**\nنرمال‌سازی حروف (ی/ک)، مدیریت نیم‌فاصله‌ها و استفاده از مدل‌های دارای پشتیبانی قوی از خط عربی/فارسی.",
        "tip": "تست مدل BGE-M3 روی متون فارسی بازدهی فوق‌العاده‌ای دارد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه پیاده‌سازی سیستم‌های RAG چندزبانه (Multilingual RAG) به ویژه برای زبان فارسی چگونه است؟",
        "summary_en": "استفاده از مدل‌های Embedding چندزبانه پیشرفته (مثل bge-m3 یا cohort-embed-v3) و استانداردسازی توکنایزر متون فارسی.",
        "fullAnswer_en": "استفاده از مدل‌های Embedding چندزبانه پیشرفته (مثل bge-m3 یا cohort-embed-v3) و استانداردسازی توکنایزر متون فارسی.\n\n**نکات زبان فارسی:**\nنرمال‌سازی حروف (ی/ک)، مدیریت نیم‌فاصله‌ها و استفاده از مدل‌های دارای پشتیبانی قوی از خط عربی/فارسی.",
        "tip_en": "تست مدل BGE-M3 روی متون فارسی بازدهی فوق‌العاده‌ای دارد."
    },
    {
        "id": 41,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "راهکارهای مواجهه با اسناد بسیار متناقض (Conflicting Documents) در بانک دانش RAG چیست؟",
        "tags": [
            "#ConflictingDocs",
            "#DataQuality",
            "#RAG"
        ],
        "summary": "درج متادیتا تاریخ به‌روزرسانی اسناد، استفاده از مکانیزم Reranking بر اساس تاریخ و آگاه‌سازی مدل از تناقض موجود.",
        "fullAnswer": "درج متادیتا تاریخ به‌روزرسانی اسناد، استفاده از مکانیزم Reranking بر اساس تاریخ و آگاه‌سازی مدل از تناقض موجود.\n\n**مدیریت تناقض:**\nسیستم ابتدا آخرین سند معتبر را بر اساس Timestamp اولویت داده و تناقض‌های احتمالی را به کاربر گزارش می‌دهد.",
        "tip": "مهم در سیستم‌های قوانین و مقررات که مکرراً اصلاحیه می‌خورند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: راهکارهای مواجهه با اسناد بسیار متناقض (Conflicting Documents) در بانک دانش RAG چیست؟",
        "summary_en": "درج متادیتا تاریخ به‌روزرسانی اسناد، استفاده از مکانیزم Reranking بر اساس تاریخ و آگاه‌سازی مدل از تناقض موجود.",
        "fullAnswer_en": "درج متادیتا تاریخ به‌روزرسانی اسناد، استفاده از مکانیزم Reranking بر اساس تاریخ و آگاه‌سازی مدل از تناقض موجود.\n\n**مدیریت تناقض:**\nسیستم ابتدا آخرین سند معتبر را بر اساس Timestamp اولویت داده و تناقض‌های احتمالی را به کاربر گزارش می‌دهد.",
        "tip_en": "مهم در سیستم‌های قوانین و مقررات که مکرراً اصلاحیه می‌خورند."
    },
    {
        "id": 42,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نقش Metadata Filtering در بهبود سرعت و دقت جستجوی برداری چیست؟",
        "tags": [
            "#MetadataFiltering",
            "#VectorDB",
            "#Optimization"
        ],
        "summary": "فیلتر کردن اسناد بر اساس فیلدهای ساختاریافته (مثل تاریخ، دسته‌بندی یا سطح دسترسی) قبل یا همزمان با جستجوی برداری.",
        "fullAnswer": "فیلتر کردن اسناد بر اساس فیلدهای ساختاریافته (مثل تاریخ، دسته‌بندی یا سطح دسترسی) قبل یا همزمان با جستجوی برداری.\n\n**مزیت سرعت:**\nکوچک کردن فضای جستجو از میلیون‌ها بردار به چند هزار بردار مرتبط با همان دسته‌بندی.",
        "tip": "همه پایگاه‌های داده برداری مدرن از Payload Filtering پشتیبانی می‌کنند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نقش Metadata Filtering در بهبود سرعت و دقت جستجوی برداری چیست؟",
        "summary_en": "فیلتر کردن اسناد بر اساس فیلدهای ساختاریافته (مثل تاریخ، دسته‌بندی یا سطح دسترسی) قبل یا همزمان با جستجوی برداری.",
        "fullAnswer_en": "فیلتر کردن اسناد بر اساس فیلدهای ساختاریافته (مثل تاریخ، دسته‌بندی یا سطح دسترسی) قبل یا همزمان با جستجوی برداری.\n\n**مزیت سرعت:**\nکوچک کردن فضای جستجو از میلیون‌ها بردار به چند هزار بردار مرتبط با همان دسته‌بندی.",
        "tip_en": "همه پایگاه‌های داده برداری مدرن از Payload Filtering پشتیبانی می‌کنند."
    },
    {
        "id": 43,
        "category": "rag_graphrag",
        "difficulty": "beginner",
        "title": "تفاوت بین In-Memory Vector Stores و Disk-backed Vector Databases چیست؟",
        "tags": [
            "#ChromaDB",
            "#Qdrant",
            "#Milvus",
            "#Architecture"
        ],
        "summary": "In-Memory تمام بردارها را روی RAM نگه می‌دارد (سریع اما محدود به حجم رم)، Disk-backed بردارها را روی SSD با الگوریتم‌های Mmap ذخیره می‌کند.",
        "fullAnswer": "In-Memory تمام بردارها را روی RAM نگه می‌دارد (سریع اما محدود به حجم رم)، Disk-backed بردارها را روی SSD با الگوریتم‌های Mmap ذخیره می‌کند.\n\n**انتخاب ابزار:**\nبرای PoC کوچک ChromaDB (In-Memory) عالی است، برای پروداکشن میلیون سندی Qdrant/Milvus (Disk-backed) الزامی است.",
        "tip": "توجه به میزان مصرف RAM سرور در پروداکشن حیاتی است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تفاوت بین In-Memory Vector Stores و Disk-backed Vector Databases چیست؟",
        "summary_en": "In-Memory تمام بردارها را روی RAM نگه می‌دارد (سریع اما محدود به حجم رم)، Disk-backed بردارها را روی SSD با الگوریتم‌های Mmap ذخیره می‌کند.",
        "fullAnswer_en": "In-Memory تمام بردارها را روی RAM نگه می‌دارد (سریع اما محدود به حجم رم)، Disk-backed بردارها را روی SSD با الگوریتم‌های Mmap ذخیره می‌کند.\n\n**انتخاب ابزار:**\nبرای PoC کوچک ChromaDB (In-Memory) عالی است، برای پروداکشن میلیون سندی Qdrant/Milvus (Disk-backed) الزامی است.",
        "tip_en": "توجه به میزان مصرف RAM سرور در پروداکشن حیاتی است."
    },
    {
        "id": 44,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "نحوه فشرده‌سازی بردارهای Embedding با تکنیک Product Quantization (PQ) چیست؟",
        "tags": [
            "#ProductQuantization",
            "#VectorCompression",
            "#HNSW"
        ],
        "summary": "تقسیم بردارهای چندبعدی به زیربردارهای کوچکتر و جایگزینی آن‌ها با نمایه خوشه‌ها جهت کاهش ۹۵٪ مصرف رم.",
        "fullAnswer": "تقسیم بردارهای چندبعدی به زیربردارهای کوچکتر و جایگزینی آن‌ها با نمایه خوشه‌ها جهت کاهش ۹۵٪ مصرف رم.\n\n**کاهش مصرف منابع:**\nتبدیل بردارهای Float32 به ایندکس‌های بایت بدون افت شدید دقت جستجو.",
        "tip": "کلید مقیاس‌پذیری پایگاه داده‌های برداری چند میلیارد سندی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه فشرده‌سازی بردارهای Embedding با تکنیک Product Quantization (PQ) چیست؟",
        "summary_en": "تقسیم بردارهای چندبعدی به زیربردارهای کوچکتر و جایگزینی آن‌ها با نمایه خوشه‌ها جهت کاهش ۹۵٪ مصرف رم.",
        "fullAnswer_en": "تقسیم بردارهای چندبعدی به زیربردارهای کوچکتر و جایگزینی آن‌ها با نمایه خوشه‌ها جهت کاهش ۹۵٪ مصرف رم.\n\n**کاهش مصرف منابع:**\nتبدیل بردارهای Float32 به ایندکس‌های بایت بدون افت شدید دقت جستجو.",
        "tip_en": "کلید مقیاس‌پذیری پایگاه داده‌های برداری چند میلیارد سندی."
    },
    {
        "id": 45,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "تکنیک Context Compression و خلاصه‌سازی تکه‌ها پیش از ارسال به LLM چیست؟",
        "tags": [
            "#ContextCompression",
            "#TokenOptimization",
            "#RAG"
        ],
        "summary": "حذف جملات زائد از تکه‌های بازیابی شده یا خلاصه‌سازی آن‌ها با مدل‌های سبک جهت کاهش مصرف توکن ورودی.",
        "fullAnswer": "حذف جملات زائد از تکه‌های بازیابی شده یا خلاصه‌سازی آن‌ها با مدل‌های سبک جهت کاهش مصرف توکن ورودی.\n\n**صرفه‌جویی در هزینه:**\nارسال تنها جملات حاوی پاسخ مستقیم به جای پاراگراف‌های طولانی ۵۱۲ توکنی.",
        "tip": "باعث کاهش هزینه API و افزایش سرعت پاسخ‌دهی LLM می‌شود.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تکنیک Context Compression و خلاصه‌سازی تکه‌ها پیش از ارسال به LLM چیست؟",
        "summary_en": "حذف جملات زائد از تکه‌های بازیابی شده یا خلاصه‌سازی آن‌ها با مدل‌های سبک جهت کاهش مصرف توکن ورودی.",
        "fullAnswer_en": "حذف جملات زائد از تکه‌های بازیابی شده یا خلاصه‌سازی آن‌ها با مدل‌های سبک جهت کاهش مصرف توکن ورودی.\n\n**صرفه‌جویی در هزینه:**\nارسال تنها جملات حاوی پاسخ مستقیم به جای پاراگراف‌های طولانی ۵۱۲ توکنی.",
        "tip_en": "باعث کاهش هزینه API و افزایش سرعت پاسخ‌دهی LLM می‌شود."
    },
    {
        "id": 46,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "تفاوت بین Naive RAG, Advanced RAG و Modular RAG چیست؟",
        "tags": [
            "#NaiveRAG",
            "#AdvancedRAG",
            "#ModularRAG"
        ],
        "summary": "Naive RAG خطی و ساده است، Advanced RAG مجهز به Pre/Post-retrieval است، Modular RAG شامل ماژول‌های مستقل قابل ترکیب مانند Routing و Search است.",
        "fullAnswer": "Naive RAG خطی و ساده است، Advanced RAG مجهز به Pre/Post-retrieval است، Modular RAG شامل ماژول‌های مستقل قابل ترکیب مانند Routing و Search است.\n\n**تکامل معماری:**\nModular RAG انعطاف‌پذیرترین الگوی ساخت سیستم‌های صنعتی پیچیده است.",
        "tip": "در مصاحبه به ساختار Modular اشاره کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تفاوت بین Naive RAG, Advanced RAG و Modular RAG چیست؟",
        "summary_en": "Naive RAG خطی و ساده است، Advanced RAG مجهز به Pre/Post-retrieval است، Modular RAG شامل ماژول‌های مستقل قابل ترکیب مانند Routing و Search است.",
        "fullAnswer_en": "Naive RAG خطی و ساده است، Advanced RAG مجهز به Pre/Post-retrieval است، Modular RAG شامل ماژول‌های مستقل قابل ترکیب مانند Routing و Search است.\n\n**تکامل معماری:**\nModular RAG انعطاف‌پذیرترین الگوی ساخت سیستم‌های صنعتی پیچیده است.",
        "tip_en": "در مصاحبه به ساختار Modular اشاره کنید."
    },
    {
        "id": 47,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "نحوه پیاده‌سازی سیستم‌های RAG بر روی اسناد کدنویسی (Codebase RAG) چگونه است؟",
        "tags": [
            "#CodeRAG",
            "#AST",
            "#DeveloperTools"
        ],
        "summary": "تجزیه کدها با درخت نحو انتزاعی (AST) به جای قطعه‌بندی ساده متنی، جهت حفظ ساختار توابع و کلاس‌ها در نمایه‌سازی.",
        "fullAnswer": "تجزیه کدها با درخت نحو انتزاعی (AST) به جای قطعه‌بندی ساده متنی، جهت حفظ ساختار توابع و کلاس‌ها در نمایه‌سازی.\n\n**پارسر کد:**\nاستفاده از Tree-Sitter برای قطعه‌بندی تابع‌به‌تابع کدهای پایتون یا جاوا اسکریپت.",
        "tip": "پایه اصلی ساخت ابزارهای دستیار کدنویسی مانند Copilot داخلی سازمان.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه پیاده‌سازی سیستم‌های RAG بر روی اسناد کدنویسی (Codebase RAG) چگونه است؟",
        "summary_en": "تجزیه کدها با درخت نحو انتزاعی (AST) به جای قطعه‌بندی ساده متنی، جهت حفظ ساختار توابع و کلاس‌ها در نمایه‌سازی.",
        "fullAnswer_en": "تجزیه کدها با درخت نحو انتزاعی (AST) به جای قطعه‌بندی ساده متنی، جهت حفظ ساختار توابع و کلاس‌ها در نمایه‌سازی.\n\n**پارسر کد:**\nاستفاده از Tree-Sitter برای قطعه‌بندی تابع‌به‌تابع کدهای پایتون یا جاوا اسکریپت.",
        "tip_en": "پایه اصلی ساخت ابزارهای دستیار کدنویسی مانند Copilot داخلی سازمان."
    },
    {
        "id": 48,
        "category": "rag_graphrag",
        "difficulty": "advanced",
        "title": "چالش‌های امنیت حریم خصوصی (Access Control / ACL) در RAG سازمان‌های بزرگ چیست؟",
        "tags": [
            "#ACL",
            "#Security",
            "#EnterpriseRAG"
        ],
        "summary": "تضمین اینکه کاربر معمولی نتواند اطلاعات محرمانه موجود در تکه‌های اسناد مدیران را بازیابی کند.",
        "fullAnswer": "تضمین اینکه کاربر معمولی نتواند اطلاعات محرمانه موجود در تکه‌های اسناد مدیران را بازیابی کند.\n\n**اعمال ACL:**\nافزودن شناسه نقش کاربر (User Roles) به متادیتا اسناد و اعمال فیلتر اجباری در زمان جستجوی برداری.",
        "tip": "موضوع حیاتی در مصاحبه سازمان‌های بانکی و سازمانی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: چالش‌های امنیت حریم خصوصی (Access Control / ACL) در RAG سازمان‌های بزرگ چیست؟",
        "summary_en": "تضمین اینکه کاربر معمولی نتواند اطلاعات محرمانه موجود در تکه‌های اسناد مدیران را بازیابی کند.",
        "fullAnswer_en": "تضمین اینکه کاربر معمولی نتواند اطلاعات محرمانه موجود در تکه‌های اسناد مدیران را بازیابی کند.\n\n**اعمال ACL:**\nافزودن شناسه نقش کاربر (User Roles) به متادیتا اسناد و اعمال فیلتر اجباری در زمان جستجوی برداری.",
        "tip_en": "موضوع حیاتی در مصاحبه سازمان‌های بانکی و سازمانی."
    },
    {
        "id": 49,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نحوه ردیابی و ارزیابی کیفیت تکه‌های بازیابی شده با ابزار Ragas چیست؟",
        "tags": [
            "#Ragas",
            "#Evaluation",
            "#Metrics"
        ],
        "summary": "محاسبه دو سنجه Context Recall و Context Precision برای اطمینان از صحت عملکرد ماژول Retrieval.",
        "fullAnswer": "محاسبه دو سنجه Context Recall و Context Precision برای اطمینان از صحت عملکرد ماژول Retrieval.\n\n**سنجه‌های Ragas:**\nContext Precision میزان حضور تکه‌های مرتبط در بالای لیست، و Context Recall میزان استخراج تمام اطلاعات لازم را می‌سنجد.",
        "tip": "Ragas ابزار استاندارد ارزیابی RAG در صنعت است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه ردیابی و ارزیابی کیفیت تکه‌های بازیابی شده با ابزار Ragas چیست؟",
        "summary_en": "محاسبه دو سنجه Context Recall و Context Precision برای اطمینان از صحت عملکرد ماژول Retrieval.",
        "fullAnswer_en": "محاسبه دو سنجه Context Recall و Context Precision برای اطمینان از صحت عملکرد ماژول Retrieval.\n\n**سنجه‌های Ragas:**\nContext Precision میزان حضور تکه‌های مرتبط در بالای لیست، و Context Recall میزان استخراج تمام اطلاعات لازم را می‌سنجد.",
        "tip_en": "Ragas ابزار استاندارد ارزیابی RAG در صنعت است."
    },
    {
        "id": 50,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "چگونه یک سیستم RAG بدون نیاز به دیتابیس برداری (Keyword-Only یا Graph-Only RAG) طراحی کنیم؟",
        "tags": [
            "#VectorlessRAG",
            "#BM25",
            "#KnowledgeGraph"
        ],
        "summary": "استفاده از موتورهای جستجوی متنی مانند Elasticsearch (BM25) یا گراف‌های دانش Neo4j بدون الگوریتم‌های برداری.",
        "fullAnswer": "استفاده از موتورهای جستجوی متنی مانند Elasticsearch (BM25) یا گراف‌های دانش Neo4j بدون الگوریتم‌های برداری.\n\n**کاربردها:**\nمناسب برای کارهای صریح فکت‌محور، سرچ کد کالا یا دیتابیس‌های با محدودیت سخت‌افزاری شدید.",
        "tip": "نشان می‌دهد شما فقط به یک ابزار خاص وابسته نیستید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: چگونه یک سیستم RAG بدون نیاز به دیتابیس برداری (Keyword-Only یا Graph-Only RAG) طراحی کنیم؟",
        "summary_en": "استفاده از موتورهای جستجوی متنی مانند Elasticsearch (BM25) یا گراف‌های دانش Neo4j بدون الگوریتم‌های برداری.",
        "fullAnswer_en": "استفاده از موتورهای جستجوی متنی مانند Elasticsearch (BM25) یا گراف‌های دانش Neo4j بدون الگوریتم‌های برداری.\n\n**کاربردها:**\nمناسب برای کارهای صریح فکت‌محور، سرچ کد کالا یا دیتابیس‌های با محدودیت سخت‌افزاری شدید.",
        "tip_en": "نشان می‌دهد شما فقط به یک ابزار خاص وابسته نیستید."
    },
    {
        "id": 51,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نقش تکنیک Parent-Child Retriever در حفظ زمینه کامل سند چیست؟",
        "tags": [
            "#ParentChild",
            "#LlamaIndex",
            "#Retrieval"
        ],
        "summary": "ذخیره تکه‌های کوچک جهت جستجوی دقیق، اما بازگرداندن پاراگراف بزرگتر والده به LLM جهت جلوگیری از قطع شدن معنا.",
        "fullAnswer": "ذخیره تکه‌های کوچک جهت جستجوی دقیق، اما بازگرداندن پاراگراف بزرگتر والده به LLM جهت جلوگیری از قطع شدن معنا.\n\n**مزیت اصلی:**\nحل تعارض بین سایز مناسب برای سرچ برداری (کوچک) و سایز مناسب برای فهم LLM (بزرگ).",
        "tip": "از پرکاربردترین الگوهای Advanced RAG.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نقش تکنیک Parent-Child Retriever در حفظ زمینه کامل سند چیست؟",
        "summary_en": "ذخیره تکه‌های کوچک جهت جستجوی دقیق، اما بازگرداندن پاراگراف بزرگتر والده به LLM جهت جلوگیری از قطع شدن معنا.",
        "fullAnswer_en": "ذخیره تکه‌های کوچک جهت جستجوی دقیق، اما بازگرداندن پاراگراف بزرگتر والده به LLM جهت جلوگیری از قطع شدن معنا.\n\n**مزیت اصلی:**\nحل تعارض بین سایز مناسب برای سرچ برداری (کوچک) و سایز مناسب برای فهم LLM (بزرگ).",
        "tip_en": "از پرکاربردترین الگوهای Advanced RAG."
    },
    {
        "id": 52,
        "category": "rag_graphrag",
        "difficulty": "beginner",
        "title": "تفاوت بین Cosine Similarity, Dot Product و Euclidean Distance در جستجوی برداری چیست؟",
        "tags": [
            "#Math",
            "#CosineSimilarity",
            "#EuclideanDistance"
        ],
        "summary": "Cosine زاویه بردارهای نرمال‌شده را می‌سنجد، Dot Product اندازه و زاویه را همزمان محاسبه می‌کند، Euclidean فاصله مستقیم هندسی دو نقطه را اندازه می‌گیرد.",
        "fullAnswer": "Cosine زاویه بردارهای نرمال‌شده را می‌سنجد، Dot Product اندازه و زاویه را همزمان محاسبه می‌کند، Euclidean فاصله مستقیم هندسی دو نقطه را اندازه می‌گیرد.\n\n**انتخاب سنجه:**\nاگر بردارها نرمال شده باشند (Magnitude=1)، Cosine و Dot Product نتیجه یکسانی ارائه می‌دهند.",
        "tip": "پایه ریاضی جستجوی برداری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تفاوت بین Cosine Similarity, Dot Product و Euclidean Distance در جستجوی برداری چیست؟",
        "summary_en": "Cosine زاویه بردارهای نرمال‌شده را می‌سنجد، Dot Product اندازه و زاویه را همزمان محاسبه می‌کند، Euclidean فاصله مستقیم هندسی دو نقطه را اندازه می‌گیرد.",
        "fullAnswer_en": "Cosine زاویه بردارهای نرمال‌شده را می‌سنجد، Dot Product اندازه و زاویه را همزمان محاسبه می‌کند، Euclidean فاصله مستقیم هندسی دو نقطه را اندازه می‌گیرد.\n\n**انتخاب سنجه:**\nاگر بردارها نرمال شده باشند (Magnitude=1)، Cosine و Dot Product نتیجه یکسانی ارائه می‌دهند.",
        "tip_en": "پایه ریاضی جستجوی برداری."
    },
    {
        "id": 53,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نحوه مواجهه با اسناد طولانی PDF که جداول متقاطع دارند در فاز Indexing RAG چگونه است؟",
        "tags": [
            "#PDFParsing",
            "#OCR",
            "#LlamaParse"
        ],
        "summary": "استفاده از موتورهای OCR چندرسانه‌ای یا LlamaParse جهت استخراج صحیح جداول پیش از تبدیل به تکه‌های متنی.",
        "fullAnswer": "استفاده از موتورهای OCR چندرسانه‌ای یا LlamaParse جهت استخراج صحیح جداول پیش از تبدیل به تکه‌های متنی.\n\n**راهکار عملی:**\nجداول به فرمت مارک‌داون تبدیل شده و متادیتا شماره صفحه و سند به آن متصل می‌گردد.",
        "tip": "چالش متداول در اسناد مالی و بیمه‌ای.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه مواجهه با اسناد طولانی PDF که جداول متقاطع دارند در فاز Indexing RAG چگونه است؟",
        "summary_en": "استفاده از موتورهای OCR چندرسانه‌ای یا LlamaParse جهت استخراج صحیح جداول پیش از تبدیل به تکه‌های متنی.",
        "fullAnswer_en": "استفاده از موتورهای OCR چندرسانه‌ای یا LlamaParse جهت استخراج صحیح جداول پیش از تبدیل به تکه‌های متنی.\n\n**راهکار عملی:**\nجداول به فرمت مارک‌داون تبدیل شده و متادیتا شماره صفحه و سند به آن متصل می‌گردد.",
        "tip_en": "چالش متداول در اسناد مالی و بیمه‌ای."
    },
    {
        "id": 54,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "نحوه ارزیابی نرخ هالوسینیشن سیستم RAG با ابزار TruLens به چه صورت است؟",
        "tags": [
            "#TruLens",
            "#Evaluation",
            "#RAG_Triad"
        ],
        "summary": "استفاده از ارزیاب‌های Feedback Functions در TruLens برای ثبت نمره RAG Triad به صورت داشبورد تعاملی.",
        "fullAnswer": "استفاده از ارزیاب‌های Feedback Functions در TruLens برای ثبت نمره RAG Triad به صورت داشبورد تعاملی.\n\n**داشبورد TruLens:**\nمشاهده لحظه‌ای نمره‌های Groundedness و Answer Relevance برای تمام درخواست‌های زنده کاربران.",
        "tip": "ابزار عالی ارزیابی برای تیم‌های محصول.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: نحوه ارزیابی نرخ هالوسینیشن سیستم RAG با ابزار TruLens به چه صورت است؟",
        "summary_en": "استفاده از ارزیاب‌های Feedback Functions در TruLens برای ثبت نمره RAG Triad به صورت داشبورد تعاملی.",
        "fullAnswer_en": "استفاده از ارزیاب‌های Feedback Functions در TruLens برای ثبت نمره RAG Triad به صورت داشبورد تعاملی.\n\n**داشبورد TruLens:**\nمشاهده لحظه‌ای نمره‌های Groundedness و Answer Relevance برای تمام درخواست‌های زنده کاربران.",
        "tip_en": "ابزار عالی ارزیابی برای تیم‌های محصول."
    },
    {
        "id": 55,
        "category": "rag_graphrag",
        "difficulty": "intermediate",
        "title": "تکنیک Query Rewriting و Query Expansion در اصلاح پرامپت کاربر پیش از سرچ برداری چیست؟",
        "tags": [
            "#QueryRewriting",
            "#QueryExpansion",
            "#AdvancedRAG"
        ],
        "summary": "استفاده از یک مدل زبانی کوچک برای اصلاح غلط‌های املایی یا تولید چند نسخه مختلف از سوال کاربر جهت افزایش احتمال بازیابی تکه مرتبط.",
        "fullAnswer": "استفاده از یک مدل زبانی کوچک برای اصلاح غلط‌های املایی یا تولید چند نسخه مختلف از سوال کاربر جهت افزایش احتمال بازیابی تکه مرتبط.\n\n**Query Expansion:**\nتبدیل یک سوال مبهم به ۳ سوال متمایز و ادغام نتایج سرچ آن‌ها با RRF.",
        "tip": "بهبود چشمگیر بازدهی RAG در سوالات کوتاه‌مدت کاربران.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "RAG & GraphRAG Technical Question: تکنیک Query Rewriting و Query Expansion در اصلاح پرامپت کاربر پیش از سرچ برداری چیست؟",
        "summary_en": "استفاده از یک مدل زبانی کوچک برای اصلاح غلط‌های املایی یا تولید چند نسخه مختلف از سوال کاربر جهت افزایش احتمال بازیابی تکه مرتبط.",
        "fullAnswer_en": "استفاده از یک مدل زبانی کوچک برای اصلاح غلط‌های املایی یا تولید چند نسخه مختلف از سوال کاربر جهت افزایش احتمال بازیابی تکه مرتبط.\n\n**Query Expansion:**\nتبدیل یک سوال مبهم به ۳ سوال متمایز و ادغام نتایج سرچ آن‌ها با RRF.",
        "tip_en": "بهبود چشمگیر بازدهی RAG در سوالات کوتاه‌مدت کاربران."
    },
    {
        "id": 56,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "معماری Transformer چیست و چرا Self-Attention کلید موفقیت مدل‌های زبانی است؟",
        "tags": [
            "#Transformer",
            "#SelfAttention",
            "#NLP",
            "#DeepLearning"
        ],
        "summary": "ترنسفورمر با مکانیزم Self-Attention به جای پردازش ترتیبی (RNN)، امکان پردازش موازی و درک روابط میان کلمات در فواصل دور را فراهم ساخت.",
        "fullAnswer": "ترنسفورمر با مکانیزم Self-Attention به جای پردازش ترتیبی (RNN)، امکان پردازش موازی و درک روابط میان کلمات در فواصل دور را فراهم ساخت.\n\n**اجزای ریاضی:**\nاستفاده از سه بردار Q (Query)، K (Key) و V (Value) برای محاسبه میزان ارتباط متقابل کلمات جمله.",
        "tip": "علت اصلی حذف RNNها، عدم امکان موازی‌سازی کارهای آن‌ها روی GPU بود.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is Transformer architecture and why is Self-Attention central to LLM success?",
        "summary_en": "Transformers replaced sequential RNN processing with Self-Attention, enabling GPU parallelization and capturing long-range token relationships.",
        "fullAnswer_en": "1. Mathematical Components: Uses Query (Q), Key (K), and Value (V) projections to calculate attention weight matrices across all sequence tokens.",
        "tip_en": "The primary reason RNNs were phased out was their inability to parallelize computations on GPUs."
    },
    {
        "id": 57,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "روش LoRA (Low-Rank Adaptation) و QLoRA برای Fine-Tuning بهینه‌سازی مدل‌های زبانی چگونه کار می‌کنند؟",
        "tags": [
            "#LoRA",
            "#QLoRA",
            "#FineTuning",
            "#PEFT"
        ],
        "summary": "LoRA با ثابت نگه داشتن وزن‌های اصلی مدل و افزودن دو ماتریس با رتبه پایین، مصرف VRAM را در زمان آموزش تا ۹۰٪ کاهش می‌دهد.",
        "fullAnswer": "LoRA با ثابت نگه داشتن وزن‌های اصلی مدل و افزودن دو ماتریس با رتبه پایین، مصرف VRAM را در زمان آموزش تا ۹۰٪ کاهش می‌دهد.\n\n**QLoRA:**\nکوانتیزه‌کردن مدل پایه به ۴ بیت (NF4) و اعمال LoRA روی آن، امکان آموزش مدل ۷B روی GPU معمولی را فراهم می‌سازد.",
        "tip": "محبوب‌ترین سوال مصاحبه‌های ارشد LLM در صنعت.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do LoRA and QLoRA work for efficient Parameter-Efficient Fine-Tuning (PEFT)?",
        "summary_en": "LoRA freezes main model weights and injects trainable low-rank matrices, reducing VRAM consumption during training by over 90%.",
        "fullAnswer_en": "1. QLoRA: Quantizes base model weights to 4-bit (NF4) and applies LoRA adapters on top, enabling 7B model training on consumer GPUs.",
        "tip_en": "LoRA/QLoRA is the most requested PEFT technique in senior LLM interviews."
    },
    {
        "id": 58,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تفاوت Tokenization با کلمات عادی چیست و الگوریتم‌های BPE و WordPiece چگونه عمل می‌کنند؟",
        "tags": [
            "#Tokenization",
            "#BPE",
            "#WordPiece",
            "#NLP"
        ],
        "summary": "Tokenization متن را به قطعات کوچک‌تر تبدیل می‌کند. الگوریتم BPE بر اساس بسامد جفت‌کاراکترهای تکراری واژگان را می‌سازد.",
        "fullAnswer": "Tokenization متن را به قطعات کوچک‌تر تبدیل می‌کند. الگوریتم BPE بر اساس بسامد جفت‌کاراکترهای تکراری واژگان را می‌سازد.\n\n**مزیت BPE:**\nجلوگیری از مشکل کلمات خارج از واژگان (OOV) با خرد کردن کلمات ناشناخته به تکه‌های شناخته‌شده.",
        "tip": "به خرد شدن کلمات فارسی در توکنایزرهای انگلیسی اشاره کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is Tokenization and how do BPE and WordPiece algorithms operate?",
        "summary_en": "Tokenization breaks text into subword units. BPE iteratively merges frequent character pairs to construct the vocabulary.",
        "fullAnswer_en": "1. BPE Advantage: Prevents Out-of-Vocabulary (OOV) issues by decomposing unknown words into known subwords.",
        "tip_en": "Mention how Persian words get fragmented into many sub-tokens by English-centric tokenizers."
    },
    {
        "id": 59,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "فرایند RLHF و تفاوت آن با DPO (Direct Preference Optimization) چیست؟",
        "tags": [
            "#RLHF",
            "#DPO",
            "#Alignment",
            "#LLM"
        ],
        "summary": "RLHF با مدل پاداش و PPO همراستاسازی انجام می‌دهد. DPO بدون نیاز به مدل پاداش، مستقیم ترجیحات انسانی را بهینه‌سازی می‌کند.",
        "fullAnswer": "RLHF با مدل پاداش و PPO همراستاسازی انجام می‌دهد. DPO بدون نیاز به مدل پاداش، مستقیم ترجیحات انسانی را بهینه‌سازی می‌کند.\n\n**DPO Advantage:**\nDPO پایداری ریاضیاتی بسیار بالاتری داشته و جایگزین مدرن و ساده‌تر RLHF است.",
        "tip": "DPO استاندارد فعلی آموزش مدل‌های Open-Source است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is RLHF and how does it compare to DPO (Direct Preference Optimization)?",
        "summary_en": "RLHF uses a Reward Model and PPO to align LLMs. DPO optimizes human preference directly via mathematical loss without needing a separate reward model.",
        "fullAnswer_en": "1. DPO Advantage: Offers superior mathematical stability, lower memory overhead, and simpler training pipelines.",
        "tip_en": "DPO is the modern industry standard for open-source model alignment."
    },
    {
        "id": 60,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "روش‌های کوانتیزیشن (Quantization) مانند GGUF, AWQ و GPTQ چه تفاوتی با هم دارند؟",
        "tags": [
            "#Quantization",
            "#GGUF",
            "#AWQ",
            "#GPTQ"
        ],
        "summary": "کاهش دقت اعداد از FP16 به INT4/INT8 جهت کاهش مصرف VRAM و افزایش سرعت استنتاج.",
        "fullAnswer": "کاهش دقت اعداد از FP16 به INT4/INT8 جهت کاهش مصرف VRAM و افزایش سرعت استنتاج.\n\n**تفاوت ابزارها:**\nGGUF برای اجرا روی CPU/GPU محلی (llama.cpp)، GPTQ و AWQ برای استنتاج سروری روی GPUهای Nvidia.",
        "tip": "AWQ دقت بهتری روی مدل‌های کوچک ارائه می‌دهد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What are the differences between GGUF, AWQ, and GPTQ Quantization methods?",
        "summary_en": "Quantization reduces numeric precision from FP16 to INT4/INT8 to decrease VRAM footprint and boost inference speed.",
        "fullAnswer_en": "1. Tooling Differences: GGUF is optimized for CPU/GPU local execution (llama.cpp), while GPTQ and AWQ are designed for server-side Nvidia GPU inference.",
        "tip_en": "AWQ delivers superior accuracy for smaller models."
    },
    {
        "id": 61,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "پارامترهای Temperature, Top-p و Top-k چه تاثیری در خروجی LLM دارند؟",
        "tags": [
            "#Sampling",
            "#Temperature",
            "#TopP",
            "#Hyperparameters"
        ],
        "summary": "کنترل میزان خلاقیت و تصادفی بودن خروجی مدل زبانی در مرحله استنتاج.",
        "fullAnswer": "کنترل میزان خلاقیت و تصادفی بودن خروجی مدل زبانی در مرحله استنتاج.\n\n**تأثیرات:**\nTemperature=0 پاسخ را قطعی می‌کند، Top-p و Top-k توکن‌های کم‌احتمال را فیلتر می‌کنند.",
        "tip": "برای RAG همیشه Temperature=0 پیشنهاد می‌شود.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: پارامترهای Temperature, Top-p و Top-k چه تاثیری در خروجی LLM دارند؟",
        "summary_en": "کنترل میزان خلاقیت و تصادفی بودن خروجی مدل زبانی در مرحله استنتاج.",
        "fullAnswer_en": "کنترل میزان خلاقیت و تصادفی بودن خروجی مدل زبانی در مرحله استنتاج.\n\n**تأثیرات:**\nTemperature=0 پاسخ را قطعی می‌کند، Top-p و Top-k توکن‌های کم‌احتمال را فیلتر می‌کنند.",
        "tip_en": "برای RAG همیشه Temperature=0 پیشنهاد می‌شود."
    },
    {
        "id": 62,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "مفهوم KV Cache در زمان استنتاج (Inference) مدل‌های Decoder-Only چیست؟",
        "tags": [
            "#KVCache",
            "#Inference",
            "#Optimization"
        ],
        "summary": "ذخیره کلیدها و مقادیر توکن‌های قبلی در حافظه VRAM جهت جلوگیری از محاسبه مجدد آن‌ها در تولید توکن‌های بعدی.",
        "fullAnswer": "ذخیره کلیدها و مقادیر توکن‌های قبلی در حافظه VRAM جهت جلوگیری از محاسبه مجدد آن‌ها در تولید توکن‌های بعدی.\n\n**PagedAttention:**\nتکنیک vLLM برای مدیریت حافظه KV Cache بدون ایجاد قطعیت در VRAM.",
        "tip": "گلوگاه اصلی مصرف VRAM در استنتاج طولانی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مفهوم KV Cache در زمان استنتاج (Inference) مدل‌های Decoder-Only چیست؟",
        "summary_en": "ذخیره کلیدها و مقادیر توکن‌های قبلی در حافظه VRAM جهت جلوگیری از محاسبه مجدد آن‌ها در تولید توکن‌های بعدی.",
        "fullAnswer_en": "ذخیره کلیدها و مقادیر توکن‌های قبلی در حافظه VRAM جهت جلوگیری از محاسبه مجدد آن‌ها در تولید توکن‌های بعدی.\n\n**PagedAttention:**\nتکنیک vLLM برای مدیریت حافظه KV Cache بدون ایجاد قطعیت در VRAM.",
        "tip_en": "گلوگاه اصلی مصرف VRAM در استنتاج طولانی."
    },
    {
        "id": 63,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "معماری FlashAttention چیست و چگونه سرعت پردازش Contextهای طولانی را افزایش می‌دهد؟",
        "tags": [
            "#FlashAttention",
            "#GPU",
            "#CUDA"
        ],
        "summary": "بهینه‌سازی دسترسی به حافظه GPU با تایل‌بندی ماتریس‌های توجه و کاهش خواندن/نوشتن بین SRAM و HBM.",
        "fullAnswer": "بهینه‌سازی دسترسی به حافظه GPU با تایل‌بندی ماتریس‌های توجه و کاهش خواندن/نوشتن بین SRAM و HBM.\n\n**سرعت استنتاج:**\nافزایش ۲ تا ۴ برابری سرعت محاسبه Self-Attention در پرامپت‌های طولانی.",
        "tip": "زیربنای فریم‌ورک‌های مدرن آموزش و استنتاج.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: معماری FlashAttention چیست و چگونه سرعت پردازش Contextهای طولانی را افزایش می‌دهد؟",
        "summary_en": "بهینه‌سازی دسترسی به حافظه GPU با تایل‌بندی ماتریس‌های توجه و کاهش خواندن/نوشتن بین SRAM و HBM.",
        "fullAnswer_en": "بهینه‌سازی دسترسی به حافظه GPU با تایل‌بندی ماتریس‌های توجه و کاهش خواندن/نوشتن بین SRAM و HBM.\n\n**سرعت استنتاج:**\nافزایش ۲ تا ۴ برابری سرعت محاسبه Self-Attention در پرامپت‌های طولانی.",
        "tip_en": "زیربنای فریم‌ورک‌های مدرن آموزش و استنتاج."
    },
    {
        "id": 64,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تکنیک Prompt Engineering و انواع متداول آن (Chain-of-Thought, Few-Shot) کدامند؟",
        "tags": [
            "#PromptEngineering",
            "#CoT",
            "#FewShot"
        ],
        "summary": "طراحی ساختاریافته پرامپت‌ها جهت هدایت مدل. CoT با عبارت \"گام به گام استدلال کن\" دقت منطقی را بالا می‌برد.",
        "fullAnswer": "طراحی ساختاریافته پرامپت‌ها جهت هدایت مدل. CoT با عبارت \"گام به گام استدلال کن\" دقت منطقی را بالا می‌برد.\n\n**Few-Shot:**\nارائه چند نمونه ورودی-خروجی درون پرامپت جهت آموزش الگوی خروجی به مدل.",
        "tip": "اصلی‌ترین ابزار مهندسان نرم‌افزار برای کار با LLMها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Prompt Engineering و انواع متداول آن (Chain-of-Thought, Few-Shot) کدامند؟",
        "summary_en": "طراحی ساختاریافته پرامپت‌ها جهت هدایت مدل. CoT با عبارت \"گام به گام استدلال کن\" دقت منطقی را بالا می‌برد.",
        "fullAnswer_en": "طراحی ساختاریافته پرامپت‌ها جهت هدایت مدل. CoT با عبارت \"گام به گام استدلال کن\" دقت منطقی را بالا می‌برد.\n\n**Few-Shot:**\nارائه چند نمونه ورودی-خروجی درون پرامپت جهت آموزش الگوی خروجی به مدل.",
        "tip_en": "اصلی‌ترین ابزار مهندسان نرم‌افزار برای کار با LLMها."
    },
    {
        "id": 65,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "تفاوت مدل‌های Encoder-Only, Decoder-Only و Encoder-Decoder چیست؟",
        "tags": [
            "#BERT",
            "#GPT",
            "#T5",
            "#Architecture"
        ],
        "summary": "BERT (Encoder-Only) برای دسته‌بندی و بردارسازی، GPT (Decoder-Only) برای تولید متن، T5 (Encoder-Decoder) برای خلاصه‌سازی است.",
        "fullAnswer": "BERT (Encoder-Only) برای دسته‌بندی و بردارسازی، GPT (Decoder-Only) برای تولید متن، T5 (Encoder-Decoder) برای خلاصه‌سازی است.\n\n**روند صنعت:**\nبیشتر مدل‌های جدید زبانی عمومی به سمت Decoder-Only کوچ کرده‌اند.",
        "tip": "پایه طبقه‌بندی ترنسفورمرها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت مدل‌های Encoder-Only, Decoder-Only و Encoder-Decoder چیست؟",
        "summary_en": "BERT (Encoder-Only) برای دسته‌بندی و بردارسازی، GPT (Decoder-Only) برای تولید متن، T5 (Encoder-Decoder) برای خلاصه‌سازی است.",
        "fullAnswer_en": "BERT (Encoder-Only) برای دسته‌بندی و بردارسازی، GPT (Decoder-Only) برای تولید متن، T5 (Encoder-Decoder) برای خلاصه‌سازی است.\n\n**روند صنعت:**\nبیشتر مدل‌های جدید زبانی عمومی به سمت Decoder-Only کوچ کرده‌اند.",
        "tip_en": "پایه طبقه‌بندی ترنسفورمرها."
    },
    {
        "id": 66,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "مفهوم Speculative Decoding در افزایش سرعت استنتاج LLMها چیست؟",
        "tags": [
            "#SpeculativeDecoding",
            "#Inference",
            "#Optimization"
        ],
        "summary": "استفاده از یک مدل کوچک پیش‌بین برای تولید چند توکن پیشنهادی و تایید همزمان آن‌ها در یک پاس توسط مدل اصلی.",
        "fullAnswer": "استفاده از یک مدل کوچک پیش‌بین برای تولید چند توکن پیشنهادی و تایید همزمان آن‌ها در یک پاس توسط مدل اصلی.\n\n**افزایش سرعت:**\nافزایش ۲ برابری سرعت تولید متن بدون کاهش کیفیت خروجی مدل نهایی.",
        "tip": "تکنیک مدرن بهینه‌سازی سرعت استنتاج.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مفهوم Speculative Decoding در افزایش سرعت استنتاج LLMها چیست؟",
        "summary_en": "استفاده از یک مدل کوچک پیش‌بین برای تولید چند توکن پیشنهادی و تایید همزمان آن‌ها در یک پاس توسط مدل اصلی.",
        "fullAnswer_en": "استفاده از یک مدل کوچک پیش‌بین برای تولید چند توکن پیشنهادی و تایید همزمان آن‌ها در یک پاس توسط مدل اصلی.\n\n**افزایش سرعت:**\nافزایش ۲ برابری سرعت تولید متن بدون کاهش کیفیت خروجی مدل نهایی.",
        "tip_en": "تکنیک مدرن بهینه‌سازی سرعت استنتاج."
    },
    {
        "id": 67,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "مفهوم Context Window و محدودیت‌های طول پرامپت چیست؟",
        "tags": [
            "#ContextWindow",
            "#Tokens",
            "#LLM"
        ],
        "summary": "حداکثر تعداد توکن‌هایی که مدل می‌تواند همزمان در ورودی و خروجی پردازش کند.",
        "fullAnswer": "حداکثر تعداد توکن‌هایی که مدل می‌تواند همزمان در ورودی و خروجی پردازش کند.\n\n**هزینه و سرعت:**\nافزایش طول زمینه هزینه‌های محاسباتی را به صورت توان دو یا خطی بالا می‌برد.",
        "tip": "ارزیابی توانایی مدل در پردازش پرونده‌های سنگین.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مفهوم Context Window و محدودیت‌های طول پرامپت چیست؟",
        "summary_en": "حداکثر تعداد توکن‌هایی که مدل می‌تواند همزمان در ورودی و خروجی پردازش کند.",
        "fullAnswer_en": "حداکثر تعداد توکن‌هایی که مدل می‌تواند همزمان در ورودی و خروجی پردازش کند.\n\n**هزینه و سرعت:**\nافزایش طول زمینه هزینه‌های محاسباتی را به صورت توان دو یا خطی بالا می‌برد.",
        "tip_en": "ارزیابی توانایی مدل در پردازش پرونده‌های سنگین."
    },
    {
        "id": 68,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "معماری RoPE (Rotary Position Embedding) چگونه موقعیت توکن‌ها را کدگذاری می‌کند؟",
        "tags": [
            "#RoPE",
            "#Embeddings",
            "#Transformers"
        ],
        "summary": "افزودن اطلاعات موقعیتی با چرخاندن بردارهای ویژگی در فضای مختصات قطبی.",
        "fullAnswer": "افزودن اطلاعات موقعیتی با چرخاندن بردارهای ویژگی در فضای مختصات قطبی.\n\n**برتری RoPE:**\nامکان تعمیم‌دهی طول زمینه به فواصل بسیار بزرگ‌تر در زمان استنتاج.",
        "tip": "استفاده شده در تمام مدل‌های خانواده Llama و Qwen.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: معماری RoPE (Rotary Position Embedding) چگونه موقعیت توکن‌ها را کدگذاری می‌کند؟",
        "summary_en": "افزودن اطلاعات موقعیتی با چرخاندن بردارهای ویژگی در فضای مختصات قطبی.",
        "fullAnswer_en": "افزودن اطلاعات موقعیتی با چرخاندن بردارهای ویژگی در فضای مختصات قطبی.\n\n**برتری RoPE:**\nامکان تعمیم‌دهی طول زمینه به فواصل بسیار بزرگ‌تر در زمان استنتاج.",
        "tip_en": "استفاده شده در تمام مدل‌های خانواده Llama و Qwen."
    },
    {
        "id": 69,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تکنیک Hallucination Detection و ارزیابی خودکار پاسخ‌ها چگونه عمل می‌کند؟",
        "tags": [
            "#Hallucination",
            "#Guardrails",
            "#Evaluation"
        ],
        "summary": "بررسی تطابق ادعاهای پاسخ با متن منبع با الگوریتم‌های NLI (Natural Language Inference).",
        "fullAnswer": "بررسی تطابق ادعاهای پاسخ با متن منبع با الگوریتم‌های NLI (Natural Language Inference).\n\n**ارزیابی خودکار:**\nاگر پاسخ با متن منبع تناقض داشته باشد، سیستم پاسخ را مسدود می‌سازد.",
        "tip": "حیاتی برای نرم‌افزارهای سلامت و مالی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Hallucination Detection و ارزیابی خودکار پاسخ‌ها چگونه عمل می‌کند؟",
        "summary_en": "بررسی تطابق ادعاهای پاسخ با متن منبع با الگوریتم‌های NLI (Natural Language Inference).",
        "fullAnswer_en": "بررسی تطابق ادعاهای پاسخ با متن منبع با الگوریتم‌های NLI (Natural Language Inference).\n\n**ارزیابی خودکار:**\nاگر پاسخ با متن منبع تناقض داشته باشد، سیستم پاسخ را مسدود می‌سازد.",
        "tip_en": "حیاتی برای نرم‌افزارهای سلامت و مالی."
    },
    {
        "id": 70,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "تفاوت Fine-Tuning به روش SFT (Supervised Fine-Tuning) و Pre-training چیست؟",
        "tags": [
            "#SFT",
            "#PreTraining",
            "#LLM"
        ],
        "summary": "Pre-training آموزش اولیه روی تریلیون‌ها توکن خام است، SFT تنظیم مدل روی دستورالعمل‌های پرسش-پاسخ است.",
        "fullAnswer": "Pre-training آموزش اولیه روی تریلیون‌ها توکن خام است، SFT تنظیم مدل روی دستورالعمل‌های پرسش-پاسخ است.\n\n**هزینه:**\nPre-training میلیون دلاری است، SFT با داده محدود و GPU کم امکان‌پذیر است.",
        "tip": "اکثر شرکت‌ها از SFT استفاده می‌کنند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت Fine-Tuning به روش SFT (Supervised Fine-Tuning) و Pre-training چیست؟",
        "summary_en": "Pre-training آموزش اولیه روی تریلیون‌ها توکن خام است، SFT تنظیم مدل روی دستورالعمل‌های پرسش-پاسخ است.",
        "fullAnswer_en": "Pre-training آموزش اولیه روی تریلیون‌ها توکن خام است، SFT تنظیم مدل روی دستورالعمل‌های پرسش-پاسخ است.\n\n**هزینه:**\nPre-training میلیون دلاری است، SFT با داده محدود و GPU کم امکان‌پذیر است.",
        "tip_en": "اکثر شرکت‌ها از SFT استفاده می‌کنند."
    },
    {
        "id": 71,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "مدل‌های Mixture of Experts (MoE) مانند Mixtral یا DeepSeek V3 چگونه کار می‌کنند؟",
        "tags": [
            "#MoE",
            "#Mixtral",
            "#DeepSeek"
        ],
        "summary": "جایگزینی لایه‌های Dense با چندین شبکه کارشناس (Expert) و فعال‌سازی تنها چند کارشناس برای هر توکن با ماژول Router.",
        "fullAnswer": "جایگزینی لایه‌های Dense با چندین شبکه کارشناس (Expert) و فعال‌سازی تنها چند کارشناس برای هر توکن با ماژول Router.\n\n**مزیت MoE:**\nداشتن پارامترهای عظیم (مثلاً ۴۷B) اما سرعت استنتاج یک مدل کوچک (مثلاً ۱۲B).",
        "tip": "معماری انقلابی مدل‌های جدید هوش مصنوعی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مدل‌های Mixture of Experts (MoE) مانند Mixtral یا DeepSeek V3 چگونه کار می‌کنند؟",
        "summary_en": "جایگزینی لایه‌های Dense با چندین شبکه کارشناس (Expert) و فعال‌سازی تنها چند کارشناس برای هر توکن با ماژول Router.",
        "fullAnswer_en": "جایگزینی لایه‌های Dense با چندین شبکه کارشناس (Expert) و فعال‌سازی تنها چند کارشناس برای هر توکن با ماژول Router.\n\n**مزیت MoE:**\nداشتن پارامترهای عظیم (مثلاً ۴۷B) اما سرعت استنتاج یک مدل کوچک (مثلاً ۱۲B).",
        "tip_en": "معماری انقلابی مدل‌های جدید هوش مصنوعی."
    },
    {
        "id": 72,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "تکنیک Continuous Pre-training چیست و چه زمانی برای یک زبان خاص لازم است؟",
        "tags": [
            "#ContinuousPretraining",
            "#PersianLLM",
            "#DomainAdaptation"
        ],
        "summary": "ادامه آموزش مدل پایه روی میلیاردها توکن متنی از یک زبان یا دامنه تخصصی قبل از فاز SFT.",
        "fullAnswer": "ادامه آموزش مدل پایه روی میلیاردها توکن متنی از یک زبان یا دامنه تخصصی قبل از فاز SFT.\n\n**زبان فارسی:**\nافزایش قدرت فهم مدل‌های انگلیسی‌محور روی ادبیات و خط فارسی.",
        "tip": "کلید ساخت مدل‌های بوم‌سازی شده کیفیت بالا.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Continuous Pre-training چیست و چه زمانی برای یک زبان خاص لازم است؟",
        "summary_en": "ادامه آموزش مدل پایه روی میلیاردها توکن متنی از یک زبان یا دامنه تخصصی قبل از فاز SFT.",
        "fullAnswer_en": "ادامه آموزش مدل پایه روی میلیاردها توکن متنی از یک زبان یا دامنه تخصصی قبل از فاز SFT.\n\n**زبان فارسی:**\nافزایش قدرت فهم مدل‌های انگلیسی‌محور روی ادبیات و خط فارسی.",
        "tip_en": "کلید ساخت مدل‌های بوم‌سازی شده کیفیت بالا."
    },
    {
        "id": 73,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "مفهوم Grouped-Query Attention (GQA) و Multi-Query Attention (MQA) چیست؟",
        "tags": [
            "#GQA",
            "#MQA",
            "#KV_Cache"
        ],
        "summary": "به اشتراک‌گذاری بردارهای Key و Value بین چند سر توجه (Attention Heads) جهت کاهش شدید مصرف VRAM در KV Cache.",
        "fullAnswer": "به اشتراک‌گذاری بردارهای Key و Value بین چند سر توجه (Attention Heads) جهت کاهش شدید مصرف VRAM در KV Cache.\n\n**مزیت GQA:**\nتعادل عالی بین سرعت استنتاج MQA و دقت مدل Multi-Head Attention معمولی.",
        "tip": "معماری استاندارد توجه در Llama 3.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مفهوم Grouped-Query Attention (GQA) و Multi-Query Attention (MQA) چیست؟",
        "summary_en": "به اشتراک‌گذاری بردارهای Key و Value بین چند سر توجه (Attention Heads) جهت کاهش شدید مصرف VRAM در KV Cache.",
        "fullAnswer_en": "به اشتراک‌گذاری بردارهای Key و Value بین چند سر توجه (Attention Heads) جهت کاهش شدید مصرف VRAM در KV Cache.\n\n**مزیت GQA:**\nتعادل عالی بین سرعت استنتاج MQA و دقت مدل Multi-Head Attention معمولی.",
        "tip_en": "معماری استاندارد توجه در Llama 3."
    },
    {
        "id": 74,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "تکنیک Alignment با استفاده از KTO (Kahneman-Tversky Optimization) چیست؟",
        "tags": [
            "#KTO",
            "#Alignment",
            "#LLM"
        ],
        "summary": "همراستاسازی مدل با داده‌های ترجیحی تکی (مطلوب/نامطلوب) بدون نیاز به جفت‌های مقایسه‌ای ترجیحات انسانی.",
        "fullAnswer": "همراستاسازی مدل با داده‌های ترجیحی تکی (مطلوب/نامطلوب) بدون نیاز به جفت‌های مقایسه‌ای ترجیحات انسانی.\n\n**مزیت KTO:**\nسادگی جمع‌آوری داده‌های آموزشی نسبت به DPO و RLHF.",
        "tip": "روش مدرن همراستاسازی مدل.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Alignment با استفاده از KTO (Kahneman-Tversky Optimization) چیست؟",
        "summary_en": "همراستاسازی مدل با داده‌های ترجیحی تکی (مطلوب/نامطلوب) بدون نیاز به جفت‌های مقایسه‌ای ترجیحات انسانی.",
        "fullAnswer_en": "همراستاسازی مدل با داده‌های ترجیحی تکی (مطلوب/نامطلوب) بدون نیاز به جفت‌های مقایسه‌ای ترجیحات انسانی.\n\n**مزیت KTO:**\nسادگی جمع‌آوری داده‌های آموزشی نسبت به DPO و RLHF.",
        "tip_en": "روش مدرن همراستاسازی مدل."
    },
    {
        "id": 75,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "چالش Catastrophic Forgetting در زمان Fine-Tuning مدل‌های زبانی چیست؟",
        "tags": [
            "#CatastrophicForgetting",
            "#FineTuning",
            "#LLM"
        ],
        "summary": "فراموشی دانش عمومی مدل پس از آموزش سنگین روی یک دیتاست خاص.",
        "fullAnswer": "فراموشی دانش عمومی مدل پس از آموزش سنگین روی یک دیتاست خاص.\n\n**راهکار:**\nترکیب درصد مشخصی از داده‌های عمومی در کنار داده‌های اختصاصی در زمان آموزش.",
        "tip": "چالش متداول در ساخت مدل‌های تخصصی پزشکی و حقوقی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: چالش Catastrophic Forgetting در زمان Fine-Tuning مدل‌های زبانی چیست؟",
        "summary_en": "فراموشی دانش عمومی مدل پس از آموزش سنگین روی یک دیتاست خاص.",
        "fullAnswer_en": "فراموشی دانش عمومی مدل پس از آموزش سنگین روی یک دیتاست خاص.\n\n**راهکار:**\nترکیب درصد مشخصی از داده‌های عمومی در کنار داده‌های اختصاصی در زمان آموزش.",
        "tip_en": "چالش متداول در ساخت مدل‌های تخصصی پزشکی و حقوقی."
    },
    {
        "id": 76,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "نحوه بهینه‌سازی پرامپت‌ها با الگوریتم‌های خودکار مثل DSPy چیست؟",
        "tags": [
            "#DSPy",
            "#PromptOptimization",
            "#LangChain"
        ],
        "summary": "جایگزینی پرامپت‌نویسی دستی با کامپایل خودکار پرامپت‌ها و نمونه‌ها بر اساس تابع ارزیابی مشخص.",
        "fullAnswer": "جایگزینی پرامپت‌نویسی دستی با کامپایل خودکار پرامپت‌ها و نمونه‌ها بر اساس تابع ارزیابی مشخص.\n\n**مزیت DSPy:**\nجلوگیری از شکنندگی پرامپت‌های دستی هنگام تغییر نسخه مدل پایه.",
        "tip": "فریم‌ورک آینده‌نگرانه بهینه‌سازی پرامپت‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه بهینه‌سازی پرامپت‌ها با الگوریتم‌های خودکار مثل DSPy چیست؟",
        "summary_en": "جایگزینی پرامپت‌نویسی دستی با کامپایل خودکار پرامپت‌ها و نمونه‌ها بر اساس تابع ارزیابی مشخص.",
        "fullAnswer_en": "جایگزینی پرامپت‌نویسی دستی با کامپایل خودکار پرامپت‌ها و نمونه‌ها بر اساس تابع ارزیابی مشخص.\n\n**مزیت DSPy:**\nجلوگیری از شکنندگی پرامپت‌های دستی هنگام تغییر نسخه مدل پایه.",
        "tip_en": "فریم‌ورک آینده‌نگرانه بهینه‌سازی پرامپت‌ها."
    },
    {
        "id": 77,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "تفاوت بین Causal Language Modeling (CLM) و Masked Language Modeling (MLM) چیست؟",
        "tags": [
            "#CLM",
            "#MLM",
            "#GPT",
            "#BERT"
        ],
        "summary": "CLM (مثل GPT) توکن بعدی را بر اساس توکن‌های قبل پیش‌بینی می‌کند، MLM (مثل BERT) توکن‌های ماسک‌شده را با دید دوطرفه حدس می‌زند.",
        "fullAnswer": "CLM (مثل GPT) توکن بعدی را بر اساس توکن‌های قبل پیش‌بینی می‌کند، MLM (مثل BERT) توکن‌های ماسک‌شده را با دید دوطرفه حدس می‌زند.\n\n**کاربردها:**\nCLM برای تولید متن و چت‌بات، MLM برای Extraction و بردارسازی.",
        "tip": "تفاوت پایه مدل‌های تولیدی و تحلیلی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت بین Causal Language Modeling (CLM) و Masked Language Modeling (MLM) چیست؟",
        "summary_en": "CLM (مثل GPT) توکن بعدی را بر اساس توکن‌های قبل پیش‌بینی می‌کند، MLM (مثل BERT) توکن‌های ماسک‌شده را با دید دوطرفه حدس می‌زند.",
        "fullAnswer_en": "CLM (مثل GPT) توکن بعدی را بر اساس توکن‌های قبل پیش‌بینی می‌کند، MLM (مثل BERT) توکن‌های ماسک‌شده را با دید دوطرفه حدس می‌زند.\n\n**کاربردها:**\nCLM برای تولید متن و چت‌بات، MLM برای Extraction و بردارسازی.",
        "tip_en": "تفاوت پایه مدل‌های تولیدی و تحلیلی."
    },
    {
        "id": 78,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "نحوه محاسبه Perplexity در مدل‌های زبانی و مفهوم آن چیست؟",
        "tags": [
            "#Perplexity",
            "#Evaluation",
            "#LanguageModels"
        ],
        "summary": "نمای نمایی آنتروپی متوسط؛ نشان‌دهنده میزان سردرگمی مدل در پیش‌بینی توکن بعدی (هرچه کمتر باشد مدل بهتر است).",
        "fullAnswer": "نمای نمایی آنتروپی متوسط؛ نشان‌دهنده میزان سردرگمی مدل در پیش‌بینی توکن بعدی (هرچه کمتر باشد مدل بهتر است).\n\n**معیار سنجش:**\nافت Perplexity نشان‌دهنده یادگیری بهتر الگوی زبان توسط مدل است.",
        "tip": "معیار استاندارد ارزیابی مدل‌های زبانی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه محاسبه Perplexity در مدل‌های زبانی و مفهوم آن چیست؟",
        "summary_en": "نمای نمایی آنتروپی متوسط؛ نشان‌دهنده میزان سردرگمی مدل در پیش‌بینی توکن بعدی (هرچه کمتر باشد مدل بهتر است).",
        "fullAnswer_en": "نمای نمایی آنتروپی متوسط؛ نشان‌دهنده میزان سردرگمی مدل در پیش‌بینی توکن بعدی (هرچه کمتر باشد مدل بهتر است).\n\n**معیار سنجش:**\nافت Perplexity نشان‌دهنده یادگیری بهتر الگوی زبان توسط مدل است.",
        "tip_en": "معیار استاندارد ارزیابی مدل‌های زبانی."
    },
    {
        "id": 79,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تفاوت بین Instruction Tuning و Chat Fine-tuning چیست؟",
        "tags": [
            "#InstructionTuning",
            "#ChatTuning",
            "#SFT"
        ],
        "summary": "Instruction Tuning مدل را برای اجرای دستورات عمومی (مثل خلاصه‌سازی) آماده می‌کند، Chat Fine-tuning مدل را برای مکالمه چندمرحله‌ای بهینه می‌سازد.",
        "fullAnswer": "Instruction Tuning مدل را برای اجرای دستورات عمومی (مثل خلاصه‌سازی) آماده می‌کند، Chat Fine-tuning مدل را برای مکالمه چندمرحله‌ای بهینه می‌سازد.\n\n**فرمت داده:**\nChat نیازمند فرمت ساختاریافته پیام‌های system/user/assistant است.",
        "tip": "تفاوت کاربردی ساخت چت‌بات با دستیار ابزار.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت بین Instruction Tuning و Chat Fine-tuning چیست؟",
        "summary_en": "Instruction Tuning مدل را برای اجرای دستورات عمومی (مثل خلاصه‌سازی) آماده می‌کند، Chat Fine-tuning مدل را برای مکالمه چندمرحله‌ای بهینه می‌سازد.",
        "fullAnswer_en": "Instruction Tuning مدل را برای اجرای دستورات عمومی (مثل خلاصه‌سازی) آماده می‌کند، Chat Fine-tuning مدل را برای مکالمه چندمرحله‌ای بهینه می‌سازد.\n\n**فرمت داده:**\nChat نیازمند فرمت ساختاریافته پیام‌های system/user/assistant است.",
        "tip_en": "تفاوت کاربردی ساخت چت‌بات با دستیار ابزار."
    },
    {
        "id": 80,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تکنیک‌های پنهان‌سازی اطلاعات حساس (PII Masking) در متون ورودی مدل‌های زبانی کدامند؟",
        "tags": [
            "#PIIMasking",
            "#Privacy",
            "#Security"
        ],
        "summary": "استفاده از کتابخانه‌هایی مثل Microsoft Presidio برای شناسایی و جایگزینی کد ملی، ایمیل و شماره کارت با برچسب‌های عمومی.",
        "fullAnswer": "استفاده از کتابخانه‌هایی مثل Microsoft Presidio برای شناسایی و جایگزینی کد ملی، ایمیل و شماره کارت با برچسب‌های عمومی.\n\n**حفظ امنیت:**\nجلوگیری از نشت اطلاعات حساس کاربران به APIهای خارجی یا ذخیره در دیتابیس.",
        "tip": "الزامی در پروژه‌های صنعتی خردکننده داده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک‌های پنهان‌سازی اطلاعات حساس (PII Masking) در متون ورودی مدل‌های زبانی کدامند؟",
        "summary_en": "استفاده از کتابخانه‌هایی مثل Microsoft Presidio برای شناسایی و جایگزینی کد ملی، ایمیل و شماره کارت با برچسب‌های عمومی.",
        "fullAnswer_en": "استفاده از کتابخانه‌هایی مثل Microsoft Presidio برای شناسایی و جایگزینی کد ملی، ایمیل و شماره کارت با برچسب‌های عمومی.\n\n**حفظ امنیت:**\nجلوگیری از نشت اطلاعات حساس کاربران به APIهای خارجی یا ذخیره در دیتابیس.",
        "tip_en": "الزامی در پروژه‌های صنعتی خردکننده داده."
    },
    {
        "id": 81,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "چالش‌های پردازش متون فارسی در LLMها (مثل نیم‌فاصله و اعراب‌گذاری) چیست؟",
        "tags": [
            "#PersianNLP",
            "#Tokenization",
            "#Normalization"
        ],
        "summary": "عدم وجود نیم‌فاصله باعث شکست توکنایزر می‌شود و حروف ی/ک عربی کلمات متفاوتی تولید می‌کنند.",
        "fullAnswer": "عدم وجود نیم‌فاصله باعث شکست توکنایزر می‌شود و حروف ی/ک عربی کلمات متفاوتی تولید می‌کنند.\n\n**راهکار نرمال‌سازی:**\nاستفاده از کتابخانه‌هایی مثل Hazm یا Parsivar جهت یکدست‌سازی متون پیش از توکنایز شدن.",
        "tip": "نکته کلیدی در تمام پروژه‌های هوش مصنوعی در ایران.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: چالش‌های پردازش متون فارسی در LLMها (مثل نیم‌فاصله و اعراب‌گذاری) چیست؟",
        "summary_en": "عدم وجود نیم‌فاصله باعث شکست توکنایزر می‌شود و حروف ی/ک عربی کلمات متفاوتی تولید می‌کنند.",
        "fullAnswer_en": "عدم وجود نیم‌فاصله باعث شکست توکنایزر می‌شود و حروف ی/ک عربی کلمات متفاوتی تولید می‌کنند.\n\n**راهکار نرمال‌سازی:**\nاستفاده از کتابخانه‌هایی مثل Hazm یا Parsivar جهت یکدست‌سازی متون پیش از توکنایز شدن.",
        "tip_en": "نکته کلیدی در تمام پروژه‌های هوش مصنوعی در ایران."
    },
    {
        "id": 82,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "معماری Mamba و State Space Models (SSM) چگونه جایگزین توجه ترنسفورمرها می‌شوند؟",
        "tags": [
            "#Mamba",
            "#SSM",
            "#Transformers"
        ],
        "summary": "پردازش متون با پیچیدگی زمان خطی O(N) به جای توان دو O(N^2) ترنسفورمرها بدون نیاز به KV Cache سنگین.",
        "fullAnswer": "پردازش متون با پیچیدگی زمان خطی O(N) به جای توان دو O(N^2) ترنسفورمرها بدون نیاز به KV Cache سنگین.\n\n**مزیت اصلی:**\nامکان پردازش میلیون‌ها توکن ورودی روی سخت‌افزار بسیار محدودتر.",
        "tip": "جدی‌ترین رقیب معماری ترنسفورمر.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: معماری Mamba و State Space Models (SSM) چگونه جایگزین توجه ترنسفورمرها می‌شوند؟",
        "summary_en": "پردازش متون با پیچیدگی زمان خطی O(N) به جای توان دو O(N^2) ترنسفورمرها بدون نیاز به KV Cache سنگین.",
        "fullAnswer_en": "پردازش متون با پیچیدگی زمان خطی O(N) به جای توان دو O(N^2) ترنسفورمرها بدون نیاز به KV Cache سنگین.\n\n**مزیت اصلی:**\nامکان پردازش میلیون‌ها توکن ورودی روی سخت‌افزار بسیار محدودتر.",
        "tip_en": "جدی‌ترین رقیب معماری ترنسفورمر."
    },
    {
        "id": 83,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "روش‌های ارزیابی کیفی مدل‌های زبانی بزرگ با بنچمارک‌های MT-Bench و MMLU چیست؟",
        "tags": [
            "#MMLU",
            "#MTBench",
            "#Evaluation"
        ],
        "summary": "MMLU دانش عمومی و تخصصی مدل در ۵۷ رشته را می‌سنجد، MT-Bench توانایی مکالمه چندمرحله‌ای را ارزیابی می‌کند.",
        "fullAnswer": "MMLU دانش عمومی و تخصصی مدل در ۵۷ رشته را می‌سنجد، MT-Bench توانایی مکالمه چندمرحله‌ای را ارزیابی می‌کند.\n\n**معیارهای استاندارد:**\nاستفاده از این بنچمارک‌ها برای مقایسه مدل‌های مختلف در HuggingFace Leaderboard.",
        "tip": "استاندارد جهانی مقایسه مدل‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: روش‌های ارزیابی کیفی مدل‌های زبانی بزرگ با بنچمارک‌های MT-Bench و MMLU چیست؟",
        "summary_en": "MMLU دانش عمومی و تخصصی مدل در ۵۷ رشته را می‌سنجد، MT-Bench توانایی مکالمه چندمرحله‌ای را ارزیابی می‌کند.",
        "fullAnswer_en": "MMLU دانش عمومی و تخصصی مدل در ۵۷ رشته را می‌سنجد، MT-Bench توانایی مکالمه چندمرحله‌ای را ارزیابی می‌کند.\n\n**معیارهای استاندارد:**\nاستفاده از این بنچمارک‌ها برای مقایسه مدل‌های مختلف در HuggingFace Leaderboard.",
        "tip_en": "استاندارد جهانی مقایسه مدل‌ها."
    },
    {
        "id": 84,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تکنیک Logit Bias در تنظیم خروجی‌های LLM چیست؟",
        "tags": [
            "#LogitBias",
            "#Sampling",
            "#OpenAI"
        ],
        "summary": "تغییر دستی مقدار احتمال توکن‌های خاص قبل از Softmax جهت اجبار به تولید یا ممنوعیت تولید کلمات مشخص.",
        "fullAnswer": "تغییر دستی مقدار احتمال توکن‌های خاص قبل از Softmax جهت اجبار به تولید یا ممنوعیت تولید کلمات مشخص.\n\n**کاربرد:**\nجلوگیری از تولید کلمات نامناسب یا اجبار مدل به خروجی فرمت خاص.",
        "tip": "پارامتر کاربردی در APIهای OpenAI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Logit Bias در تنظیم خروجی‌های LLM چیست؟",
        "summary_en": "تغییر دستی مقدار احتمال توکن‌های خاص قبل از Softmax جهت اجبار به تولید یا ممنوعیت تولید کلمات مشخص.",
        "fullAnswer_en": "تغییر دستی مقدار احتمال توکن‌های خاص قبل از Softmax جهت اجبار به تولید یا ممنوعیت تولید کلمات مشخص.\n\n**کاربرد:**\nجلوگیری از تولید کلمات نامناسب یا اجبار مدل به خروجی فرمت خاص.",
        "tip_en": "پارامتر کاربردی در APIهای OpenAI."
    },
    {
        "id": 85,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "نحوه استفاده از Structured Outputs (JSON Mode) و پدیده Grammar-based Sampling چیست؟",
        "tags": [
            "#JSONMode",
            "#StructuredOutputs",
            "#GrammarSampling"
        ],
        "summary": "محدود کردن توکن‌های قابل انتخاب توسط مدل بر اساس گرامر JSON Schema تا خروجی همیشه ۱۰۰٪ معتبر باشد.",
        "fullAnswer": "محدود کردن توکن‌های قابل انتخاب توسط مدل بر اساس گرامر JSON Schema تا خروجی همیشه ۱۰۰٪ معتبر باشد.\n\n**مزیت اصلی:**\nجلوگیری کامل از خطاهای ساختاری JSON در کدهای تولیدی.",
        "tip": "ضروری برای اتصال LLM به دیتابیس‌ها و APIها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه استفاده از Structured Outputs (JSON Mode) و پدیده Grammar-based Sampling چیست؟",
        "summary_en": "محدود کردن توکن‌های قابل انتخاب توسط مدل بر اساس گرامر JSON Schema تا خروجی همیشه ۱۰۰٪ معتبر باشد.",
        "fullAnswer_en": "محدود کردن توکن‌های قابل انتخاب توسط مدل بر اساس گرامر JSON Schema تا خروجی همیشه ۱۰۰٪ معتبر باشد.\n\n**مزیت اصلی:**\nجلوگیری کامل از خطاهای ساختاری JSON در کدهای تولیدی.",
        "tip_en": "ضروری برای اتصال LLM به دیتابیس‌ها و APIها."
    },
    {
        "id": 86,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "تفاوت مدل‌های Dense و Sparse در معماری ترنسفورمرها چیست؟",
        "tags": [
            "#DenseModels",
            "#SparseModels",
            "#Architecture"
        ],
        "summary": "Dense در هر توکن تمام پارامترها را فعال می‌کند، Sparse (مثل MoE) تنها بخشی از پارامترها را فعال می‌سازد.",
        "fullAnswer": "Dense در هر توکن تمام پارامترها را فعال می‌کند، Sparse (مثل MoE) تنها بخشی از پارامترها را فعال می‌سازد.\n\n**بازده محاسباتی:**\nمدل‌های Sparse بازده سرعتی بسیار بالاتری دارند.",
        "tip": "روند جدید طراحی مدل‌های غول‌پیکر.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت مدل‌های Dense و Sparse در معماری ترنسفورمرها چیست؟",
        "summary_en": "Dense در هر توکن تمام پارامترها را فعال می‌کند، Sparse (مثل MoE) تنها بخشی از پارامترها را فعال می‌سازد.",
        "fullAnswer_en": "Dense در هر توکن تمام پارامترها را فعال می‌کند، Sparse (مثل MoE) تنها بخشی از پارامترها را فعال می‌سازد.\n\n**بازده محاسباتی:**\nمدل‌های Sparse بازده سرعتی بسیار بالاتری دارند.",
        "tip_en": "روند جدید طراحی مدل‌های غول‌پیکر."
    },
    {
        "id": 87,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تکنیک Needle In A Haystack (NIAH) برای تست حافظه Context Window چیست؟",
        "tags": [
            "#NIAH",
            "#Benchmark",
            "#ContextWindow"
        ],
        "summary": "قرار دادن یک فکت کاملاً بی‌ربط در وسط یک متن چندصد صفحه‌ای و تست توانایی مدل در استخراج آن فکت.",
        "fullAnswer": "قرار دادن یک فکت کاملاً بی‌ربط در وسط یک متن چندصد صفحه‌ای و تست توانایی مدل در استخراج آن فکت.\n\n**ارزیابی حافظه:**\nسنجش واقعی ادعای مدل‌ها در پشتیبانی از Context Windowهای بزرگ.",
        "tip": "تست استاندارد میزان دقت یادآوری مدل.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Needle In A Haystack (NIAH) برای تست حافظه Context Window چیست؟",
        "summary_en": "قرار دادن یک فکت کاملاً بی‌ربط در وسط یک متن چندصد صفحه‌ای و تست توانایی مدل در استخراج آن فکت.",
        "fullAnswer_en": "قرار دادن یک فکت کاملاً بی‌ربط در وسط یک متن چندصد صفحه‌ای و تست توانایی مدل در استخراج آن فکت.\n\n**ارزیابی حافظه:**\nسنجش واقعی ادعای مدل‌ها در پشتیبانی از Context Windowهای بزرگ.",
        "tip_en": "تست استاندارد میزان دقت یادآوری مدل."
    },
    {
        "id": 88,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "چگونه کیفیت پاسخ‌های یک مدل زبانی را با مدل زبانی قوی‌تر (LLM-as-a-Judge) بسنجیم؟",
        "tags": [
            "#LLMasAJudge",
            "#Evaluation",
            "#GPT4"
        ],
        "summary": "ارسال پاسخ مدل به همراه پرامپت ارزیابی به GPT-4 برای گرفتن نمره ۱ تا ۱۰ و تحلیل نقاط ضعف.",
        "fullAnswer": "ارسال پاسخ مدل به همراه پرامپت ارزیابی به GPT-4 برای گرفتن نمره ۱ تا ۱۰ و تحلیل نقاط ضعف.\n\n**مزیت:**\nجایگزینی سریع و ارزان ارزیابی انسانی با هوش مصنوعی بالاتر.",
        "tip": "متدولوژی متداول در بنچمارک‌های جدید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: چگونه کیفیت پاسخ‌های یک مدل زبانی را با مدل زبانی قوی‌تر (LLM-as-a-Judge) بسنجیم؟",
        "summary_en": "ارسال پاسخ مدل به همراه پرامپت ارزیابی به GPT-4 برای گرفتن نمره ۱ تا ۱۰ و تحلیل نقاط ضعف.",
        "fullAnswer_en": "ارسال پاسخ مدل به همراه پرامپت ارزیابی به GPT-4 برای گرفتن نمره ۱ تا ۱۰ و تحلیل نقاط ضعف.\n\n**مزیت:**\nجایگزینی سریع و ارزان ارزیابی انسانی با هوش مصنوعی بالاتر.",
        "tip_en": "متدولوژی متداول در بنچمارک‌های جدید."
    },
    {
        "id": 89,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "نحوه استفاده از PEFT غیر از LoRA (مثل Prefix Tuning و Adapter Layers) چیست؟",
        "tags": [
            "#PEFT",
            "#PrefixTuning",
            "#Adapters"
        ],
        "summary": "افزودن بردار کلمات مجازی به ورودی لایه‌ها (Prefix Tuning) یا اضافه کردن لایه‌های فشرده بین لایه‌های اصلی.",
        "fullAnswer": "افزودن بردار کلمات مجازی به ورودی لایه‌ها (Prefix Tuning) یا اضافه کردن لایه‌های فشرده بین لایه‌های اصلی.\n\n**مقایسه با LoRA:**\nLoRA پایداری بالاتر و ادغام راحت‌تری در وزن‌های اصلی ارائه می‌دهد.",
        "tip": "روش‌های مکمل بهینه‌سازی پارامترها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه استفاده از PEFT غیر از LoRA (مثل Prefix Tuning و Adapter Layers) چیست؟",
        "summary_en": "افزودن بردار کلمات مجازی به ورودی لایه‌ها (Prefix Tuning) یا اضافه کردن لایه‌های فشرده بین لایه‌های اصلی.",
        "fullAnswer_en": "افزودن بردار کلمات مجازی به ورودی لایه‌ها (Prefix Tuning) یا اضافه کردن لایه‌های فشرده بین لایه‌های اصلی.\n\n**مقایسه با LoRA:**\nLoRA پایداری بالاتر و ادغام راحت‌تری در وزن‌های اصلی ارائه می‌دهد.",
        "tip_en": "روش‌های مکمل بهینه‌سازی پارامترها."
    },
    {
        "id": 90,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "نقش تابع اکتیویشن SwiGLU و RMSNorm در مدل‌های زبانی مدرن (مثل Llama 3) چیست؟",
        "tags": [
            "#SwiGLU",
            "#RMSNorm",
            "#Llama3"
        ],
        "summary": "جایگزینی ReLU و LayerNorm با SwiGLU و RMSNorm جهت افزایش سرعت همگرایی و بهبود کیفیت یادگیری مدل.",
        "fullAnswer": "جایگزینی ReLU و LayerNorm با SwiGLU و RMSNorm جهت افزایش سرعت همگرایی و بهبود کیفیت یادگیری مدل.\n\n**بهینه‌سازی معماری:**\nافزایش پایداری عددی گرادیان‌ها در شبکه.",
        "tip": "تغییرات معماری استاندارد در Llama 3 و Qwen 2.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نقش تابع اکتیویشن SwiGLU و RMSNorm در مدل‌های زبانی مدرن (مثل Llama 3) چیست؟",
        "summary_en": "جایگزینی ReLU و LayerNorm با SwiGLU و RMSNorm جهت افزایش سرعت همگرایی و بهبود کیفیت یادگیری مدل.",
        "fullAnswer_en": "جایگزینی ReLU و LayerNorm با SwiGLU و RMSNorm جهت افزایش سرعت همگرایی و بهبود کیفیت یادگیری مدل.\n\n**بهینه‌سازی معماری:**\nافزایش پایداری عددی گرادیان‌ها در شبکه.",
        "tip_en": "تغییرات معماری استاندارد در Llama 3 و Qwen 2."
    },
    {
        "id": 91,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "تکنیک Soft Prompting در مقایسه با Hard Prompting چیست؟",
        "tags": [
            "#SoftPrompting",
            "#PromptTuning",
            "#PEFT"
        ],
        "summary": "Hard Prompting کلمات متنی انسانی است، Soft Prompting بردارهای قابل آموزش است که به ورودی مدل اضافه می‌شوند.",
        "fullAnswer": "Hard Prompting کلمات متنی انسانی است، Soft Prompting بردارهای قابل آموزش است که به ورودی مدل اضافه می‌شوند.\n\n**یادگیری برداری:**\nآموزش مستقیم بردارهای پرامپت بدون دستکاری کلمات انسانی.",
        "tip": "تکنیک پیشرفته Prompt Tuning.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تکنیک Soft Prompting در مقایسه با Hard Prompting چیست؟",
        "summary_en": "Hard Prompting کلمات متنی انسانی است، Soft Prompting بردارهای قابل آموزش است که به ورودی مدل اضافه می‌شوند.",
        "fullAnswer_en": "Hard Prompting کلمات متنی انسانی است، Soft Prompting بردارهای قابل آموزش است که به ورودی مدل اضافه می‌شوند.\n\n**یادگیری برداری:**\nآموزش مستقیم بردارهای پرامپت بدون دستکاری کلمات انسانی.",
        "tip_en": "تکنیک پیشرفته Prompt Tuning."
    },
    {
        "id": 92,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "مفهوم Temperature Scaling در کالیبراسیون احتمال خروجی مدل چیست؟",
        "tags": [
            "#TemperatureScaling",
            "#Calibration",
            "#Uncertainty"
        ],
        "summary": "تنظیم مجدد توزیع احتمال خروجی جهت انطباق نمره‌های اطمینان مدل با واقعیت ریاضی.",
        "fullAnswer": "تنظیم مجدد توزیع احتمال خروجی جهت انطباق نمره‌های اطمینان مدل با واقعیت ریاضی.\n\n**کالیبراسیون:**\nجلوگیری از اعتماد به نفس کاذب مدل روی پاسخ‌های اشتباه.",
        "tip": "مهم در سیستم‌های تصمیم‌گیری حساس.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: مفهوم Temperature Scaling در کالیبراسیون احتمال خروجی مدل چیست؟",
        "summary_en": "تنظیم مجدد توزیع احتمال خروجی جهت انطباق نمره‌های اطمینان مدل با واقعیت ریاضی.",
        "fullAnswer_en": "تنظیم مجدد توزیع احتمال خروجی جهت انطباق نمره‌های اطمینان مدل با واقعیت ریاضی.\n\n**کالیبراسیون:**\nجلوگیری از اعتماد به نفس کاذب مدل روی پاسخ‌های اشتباه.",
        "tip_en": "مهم در سیستم‌های تصمیم‌گیری حساس."
    },
    {
        "id": 93,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "نحوه عملکرد الگوریتم Beam Search در مقایسه با Greedy Search در تولید متن چیست؟",
        "tags": [
            "#BeamSearch",
            "#GreedySearch",
            "#Decoding"
        ],
        "summary": "Greedy همواره بهترین توکن بعدی را می‌پذیرد، Beam Search همزمان N مسیر احتمالاتی برتر را نگه داشته و بهترین دنباله را می‌سازد.",
        "fullAnswer": "Greedy همواره بهترین توکن بعدی را می‌پذیرد، Beam Search همزمان N مسیر احتمالاتی برتر را نگه داشته و بهترین دنباله را می‌سازد.\n\n**کیفیت خروجی:**\nBeam Search خروجی‌های منسجم‌تری در ترجمه ماشینی ارائه می‌دهد.",
        "tip": "الگوریتم تولید متن فشرده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه عملکرد الگوریتم Beam Search در مقایسه با Greedy Search در تولید متن چیست؟",
        "summary_en": "Greedy همواره بهترین توکن بعدی را می‌پذیرد، Beam Search همزمان N مسیر احتمالاتی برتر را نگه داشته و بهترین دنباله را می‌سازد.",
        "fullAnswer_en": "Greedy همواره بهترین توکن بعدی را می‌پذیرد، Beam Search همزمان N مسیر احتمالاتی برتر را نگه داشته و بهترین دنباله را می‌سازد.\n\n**کیفیت خروجی:**\nBeam Search خروجی‌های منسجم‌تری در ترجمه ماشینی ارائه می‌دهد.",
        "tip_en": "الگوریتم تولید متن فشرده."
    },
    {
        "id": 94,
        "category": "nlp_llm",
        "difficulty": "beginner",
        "title": "تفاوت بین Cross-Attention و Self-Attention در معماری ترنسفورمر چیست؟",
        "tags": [
            "#CrossAttention",
            "#SelfAttention",
            "#Transformers"
        ],
        "summary": "Self-Attention ارتباط کلمات یک متن با یکدیگر را می‌سنجد، Cross-Attention ارتباط توکن‌های Decoder با Encoder را بررسی می‌کند.",
        "fullAnswer": "Self-Attention ارتباط کلمات یک متن با یکدیگر را می‌سنجد، Cross-Attention ارتباط توکن‌های Decoder با Encoder را بررسی می‌کند.\n\n**معماری:**\nCross-Attention پایه اصلی مدل‌های ترجمه و Encoder-Decoder است.",
        "tip": "پایه معماری ترنسفورمرها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: تفاوت بین Cross-Attention و Self-Attention در معماری ترنسفورمر چیست؟",
        "summary_en": "Self-Attention ارتباط کلمات یک متن با یکدیگر را می‌سنجد، Cross-Attention ارتباط توکن‌های Decoder با Encoder را بررسی می‌کند.",
        "fullAnswer_en": "Self-Attention ارتباط کلمات یک متن با یکدیگر را می‌سنجد، Cross-Attention ارتباط توکن‌های Decoder با Encoder را بررسی می‌کند.\n\n**معماری:**\nCross-Attention پایه اصلی مدل‌های ترجمه و Encoder-Decoder است.",
        "tip_en": "پایه معماری ترنسفورمرها."
    },
    {
        "id": 95,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "نحوه پیاده‌سازی سیستم‌های Guardrails با NeMo Guardrails چیست؟",
        "tags": [
            "#NeMoGuardrails",
            "#NVIDIA",
            "#Safety"
        ],
        "summary": "تعریف قوانین برنامه به زبان Colang جهت فیلتر کردن topicها، جلوگیری از کلمات نامناسب و هدایت جریان مکالمه.",
        "fullAnswer": "تعریف قوانین برنامه به زبان Colang جهت فیلتر کردن topicها، جلوگیری از کلمات نامناسب و هدایت جریان مکالمه.\n\n**امنیت سیستم:**\nاطمینان از عدم خروج چت‌بات از چارچوب‌های کاری تعیین‌شده.",
        "tip": "فریم‌ورک مطرح انویدیا برای ایمنی AI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "LLMs & NLP Technical Question: نحوه پیاده‌سازی سیستم‌های Guardrails با NeMo Guardrails چیست؟",
        "summary_en": "تعریف قوانین برنامه به زبان Colang جهت فیلتر کردن topicها، جلوگیری از کلمات نامناسب و هدایت جریان مکالمه.",
        "fullAnswer_en": "تعریف قوانین برنامه به زبان Colang جهت فیلتر کردن topicها، جلوگیری از کلمات نامناسب و هدایت جریان مکالمه.\n\n**امنیت سیستم:**\nاطمینان از عدم خروج چت‌بات از چارچوب‌های کاری تعیین‌شده.",
        "tip_en": "فریم‌ورک مطرح انویدیا برای ایمنی AI."
    },
    {
        "id": 96,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "چگونه یک مدل زبانی را با ابزار Unsloth تا ۵ برابر سریع‌تر Fine-Tune کنیم؟",
        "tags": [
            "#Unsloth",
            "#PEFT",
            "#CUDA"
        ],
        "summary": "کاهش شدید مصرف VRAM و ۵ برابر کردن سرعت آموزش با بازنویسی دستی کرنیل‌های دستی CUDA برای LoRA.",
        "fullAnswer": "کاهش شدید مصرف VRAM و ۵ برابر کردن سرعت آموزش با بازنویسی دستی کرنیل‌های دستی CUDA برای LoRA.\n\n**مزیت Unsloth:**\nآموزش مدل‌های ۷B روی کارت‌های مجانی Kaggle و Colab.",
        "tip": "محبوب‌ترین ابزار Fine-Tuning محلی در سال ۲۰۲۶.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What are the core components of an AI Agent architecture?",
        "summary_en": "An Agent consists of: 1. Brain (LLM), 2. Planning module, 3. Memory system, and 4. Tools (Function Calling).",
        "fullAnswer_en": "1. Components: LLM makes decisions, Planning breaks down complex goals, Memory maintains state, and Tools execute real-world actions.",
        "tip_en": "The key differentiator between an Agent and a standalone LLM is autonomous tool execution."
    },
    {
        "id": 97,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "تکنیک DPO (Direct Preference Optimization) چگونه فرایند آموزش همراستاسازی را ساده کرده است؟",
        "tags": [
            "#DPO",
            "#Alignment",
            "#SFT"
        ],
        "summary": "حذف کامل مدل پاداش و PPO، و جایگزینی آن با یک تابع زیان ریاضی مستقیم روی جفت پاسخ‌های متنی (Preferred / Dispreferred).",
        "fullAnswer": "حذف کامل مدل پاداش و PPO، و جایگزینی آن با یک تابع زیان ریاضی مستقیم روی جفت پاسخ‌های متنی (Preferred / Dispreferred).\n\n**سادگی پیاده‌سازی:**\nعدم بروز مشکلات پایداری عدم همگرایی در RLHF سنتی.",
        "tip": "روش استاندارد در آموزش Llama 3 و Mistral.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How does the ReAct (Reasoning + Acting) pattern work in AI Agents?",
        "summary_en": "An iterative loop consisting of Thought (reasoning), Action (tool selection), and Observation (tool execution output) until final answer is reached.",
        "fullAnswer_en": "1. Loop Workflow: 1. Thought: Decide next step. 2. Action: Call tool. 3. Observation: Feed tool result back to LLM.",
        "tip_en": "ReAct is the foundational pattern behind autonomous AI agents."
    },
    {
        "id": 98,
        "category": "nlp_llm",
        "difficulty": "advanced",
        "title": "نقش فریم‌ورک vLLM و الگوریتم PagedAttention در سروینگ سروری مدل‌های LLM چیست؟",
        "tags": [
            "#vLLM",
            "#PagedAttention",
            "#Serving"
        ],
        "summary": "مدیریت حافظه KV Cache دقیقا مانند سیستم مدیریت مجازی حافظه در سیستم‌عامل، جهت جلوگیری از اتلاف VRAM.",
        "fullAnswer": "مدیریت حافظه KV Cache دقیقا مانند سیستم مدیریت مجازی حافظه در سیستم‌عامل، جهت جلوگیری از اتلاف VRAM.\n\n**افزایش Throughput:**\nافزایش ۲ تا ۴ برابری تعداد کاربران همزمان سرویس.",
        "tip": "استاندارد استقرار مدل‌های سروری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is LangGraph and why has it replaced linear LangChain agent chains?",
        "summary_en": "LangGraph enables building agents as stateful graphs supporting cyclical loops, persistence, and human-in-the-loop workflows.",
        "fullAnswer_en": "1. Advantages: Handles complex branching, agent collaboration loops, state checkpointing in database, and pauses for human approval.",
        "tip_en": "LangGraph is the industry standard for production multi-agent graph architecture."
    },
    {
        "id": 99,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "نحوه محاسبه زمان پاسخ‌دهی اول (Time to First Token - TTFT) در مدل‌های زبانی چیست؟",
        "tags": [
            "#TTFT",
            "#Latency",
            "#LLM_Metrics"
        ],
        "summary": "مدت زمان پردازش کل پرامپت ورودی تا زمان تولید اولین توکن توسط مدل زبانی.",
        "fullAnswer": "مدت زمان پردازش کل پرامپت ورودی تا زمان تولید اولین توکن توسط مدل زبانی.\n\n**اهمیت:**\nحس سرعت و UX مناسب کاربر مستقیماً وابسته به پایین بودن TTFT است.",
        "tip": "یکی از دو سنجه اصلی ارزیابی سرعت LLM.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How is Function Calling / Tool Calling implemented in LLMs?",
        "summary_en": "Python functions are defined with JSON Schemas and passed to the LLM, which returns structured JSON parameters for function execution.",
        "fullAnswer_en": "1. 3-Step Process: Define JSON Schema -> Receive function arguments from LLM -> Execute function in Python code.",
        "tip_en": "Precise function docstrings and parameter descriptions are critical for high accuracy."
    },
    {
        "id": 100,
        "category": "nlp_llm",
        "difficulty": "intermediate",
        "title": "تفاوت بین Inter-token Latency (ITL) و Time to First Token (TTFT) در ارزیابی LLM چیست؟",
        "tags": [
            "#ITL",
            "#TTFT",
            "#Metrics"
        ],
        "summary": "TTFT زمان تولید توکن اول است، ITL زمان فاصله بین تولید هر توکن بعدی است (سرعت تایپ مدل).",
        "fullAnswer": "TTFT زمان تولید توکن اول است، ITL زمان فاصله بین تولید هر توکن بعدی است (سرعت تایپ مدل).\n\n**ارزیابی کامل:**\nکاهش TTFT احساس شادابی به کاربر می‌دهد و ITL سرعت خروجی را بالا می‌برد.",
        "tip": "سنجه‌های استاندارد داشبوردهای مانیتورینگ LLM.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do Multi-Agent Systems like CrewAI and AutoGen operate?",
        "summary_en": "By delegating complex tasks to specialized agents with distinct roles, goals, tools, and communication channels.",
        "fullAnswer_en": "1. Team Structure: Assigning separate agents (e.g. Researcher, Writer, Reviewer) to collaborate sequentially or in parallel.",
        "tip_en": "Simulates real-world organizational team structures."
    },
    {
        "id": 101,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "معماری یک AI Agent (عامل هوش مصنوعی) شامل چه بخش‌های اصلی است؟",
        "tags": [
            "#AIAgents",
            "#ReAct",
            "#Planning",
            "#Memory",
            "#Tools"
        ],
        "summary": "یک Agent متشکل از: ۱. مغز متفکر (LLM) ۲. برنامه (Planning) ۳. حافظه (Memory) ۴. ابزارها (Tools / Function Calling).",
        "fullAnswer": "یک Agent متشکل از: ۱. مغز متفکر (LLM) ۲. برنامه (Planning) ۳. حافظه (Memory) ۴. ابزارها (Tools / Function Calling).\n\n**اجزای اصلی:**\nLLM تصمیم‌گیری می‌کند، Planning اهداف را خرد می‌کند، Memory سابقه را نگه می‌دارد و Tools اقدامات واقعی را اجرا می‌کنند.",
        "tip": "تفاوت اصلی Agent و LLM معمولی در توانایی اقدام در دنیای واقعی است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: معماری یک AI Agent (عامل هوش مصنوعی) شامل چه بخش‌های اصلی است؟",
        "summary_en": "یک Agent متشکل از: ۱. مغز متفکر (LLM) ۲. برنامه (Planning) ۳. حافظه (Memory) ۴. ابزارها (Tools / Function Calling).",
        "fullAnswer_en": "یک Agent متشکل از: ۱. مغز متفکر (LLM) ۲. برنامه (Planning) ۳. حافظه (Memory) ۴. ابزارها (Tools / Function Calling).\n\n**اجزای اصلی:**\nLLM تصمیم‌گیری می‌کند، Planning اهداف را خرد می‌کند، Memory سابقه را نگه می‌دارد و Tools اقدامات واقعی را اجرا می‌کنند.",
        "tip_en": "تفاوت اصلی Agent و LLM معمولی در توانایی اقدام در دنیای واقعی است."
    },
    {
        "id": 102,
        "category": "agents",
        "difficulty": "advanced",
        "title": "الگوی ReAct (Reasoning + Acting) در ایجنت‌های هوش مصنوعی چگونه کار می‌کند؟",
        "tags": [
            "#ReAct",
            "#AgenticPattern",
            "#LangChain"
        ],
        "summary": "چرخه تکرارشونده شامل Thought (تفکر)، Action (انتخاب ابزار)، Observation (مشاهده نتیجه ابزار) تا زمان رسیدن به پاسخ نهایی.",
        "fullAnswer": "چرخه تکرارشونده شامل Thought (تفکر)، Action (انتخاب ابزار)، Observation (مشاهده نتیجه ابزار) تا زمان رسیدن به پاسخ نهایی.\n\n**چرخه کار:**\n۱. Thought: تصمیم درباره ابزار لازم.\n۲. Action: فراخوانی ابزار.\n۳. Observation: بازگرداندن خروجی به مدل.",
        "tip": "الگوی پایه تمام ایجنت‌های خودمختار.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: الگوی ReAct (Reasoning + Acting) در ایجنت‌های هوش مصنوعی چگونه کار می‌کند؟",
        "summary_en": "چرخه تکرارشونده شامل Thought (تفکر)، Action (انتخاب ابزار)، Observation (مشاهده نتیجه ابزار) تا زمان رسیدن به پاسخ نهایی.",
        "fullAnswer_en": "چرخه تکرارشونده شامل Thought (تفکر)، Action (انتخاب ابزار)، Observation (مشاهده نتیجه ابزار) تا زمان رسیدن به پاسخ نهایی.\n\n**چرخه کار:**\n۱. Thought: تصمیم درباره ابزار لازم.\n۲. Action: فراخوانی ابزار.\n۳. Observation: بازگرداندن خروجی به مدل.",
        "tip_en": "الگوی پایه تمام ایجنت‌های خودمختار."
    },
    {
        "id": 103,
        "category": "agents",
        "difficulty": "advanced",
        "title": "فریم‌ورک LangGraph چیست و چرا جایگزین چرخه‌های خطی سنتی شده است؟",
        "tags": [
            "#LangGraph",
            "#StateManagement",
            "#MultiAgent"
        ],
        "summary": "LangGraph ساخت ایجنت‌ها را به صورت یک گراف حالت‌آگاه (Stateful Graph) مجهز به قابلیت مدیریت حلقه‌ها (Loops) و همزمانی امکان‌پذیر می‌سازد.",
        "fullAnswer": "LangGraph ساخت ایجنت‌ها را به صورت یک گراف حالت‌آگاه (Stateful Graph) مجهز به قابلیت مدیریت حلقه‌ها (Loops) و همزمانی امکان‌پذیر می‌سازد.\n\n**مزیت LangGraph:**\nمدیریت گراف‌های تکرارشونده، ذخیره وضعیت در دیتابیس و پشتیبانی از Human-in-the-loop.",
        "tip": "استاندارد اصلی توسعه ایجنت‌های صنعتی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: فریم‌ورک LangGraph چیست و چرا جایگزین چرخه‌های خطی سنتی شده است؟",
        "summary_en": "LangGraph ساخت ایجنت‌ها را به صورت یک گراف حالت‌آگاه (Stateful Graph) مجهز به قابلیت مدیریت حلقه‌ها (Loops) و همزمانی امکان‌پذیر می‌سازد.",
        "fullAnswer_en": "LangGraph ساخت ایجنت‌ها را به صورت یک گراف حالت‌آگاه (Stateful Graph) مجهز به قابلیت مدیریت حلقه‌ها (Loops) و همزمانی امکان‌پذیر می‌سازد.\n\n**مزیت LangGraph:**\nمدیریت گراف‌های تکرارشونده، ذخیره وضعیت در دیتابیس و پشتیبانی از Human-in-the-loop.",
        "tip_en": "استاندارد اصلی توسعه ایجنت‌های صنعتی."
    },
    {
        "id": 104,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "مکانیزم Function Calling / Tool Calling در مدل‌های LLM چگونه پیاده‌سازی می‌شود؟",
        "tags": [
            "#FunctionCalling",
            "#JSONSchema",
            "#OpenAI"
        ],
        "summary": "تعریف توابع پایتون با JSON Schema و ارسال آن به مدل، تا مدل پارامترهای تابع را در قالب یک JSON ساختاریافته خروجی دهد.",
        "fullAnswer": "تعریف توابع پایتون با JSON Schema و ارسال آن به مدل، تا مدل پارامترهای تابع را در قالب یک JSON ساختاریافته خروجی دهد.\n\n**فرآیند ۳ مرحله‌ای:**\nتعریف تابع با JSON Schema -> دریافت آرگومان‌ها از LLM -> اجرای تابع واقعی در کد پایتون.",
        "tip": "دقت در نوشتن docstring و توضیحات پارامترها بسیار مهم است.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: مکانیزم Function Calling / Tool Calling در مدل‌های LLM چگونه پیاده‌سازی می‌شود؟",
        "summary_en": "تعریف توابع پایتون با JSON Schema و ارسال آن به مدل، تا مدل پارامترهای تابع را در قالب یک JSON ساختاریافته خروجی دهد.",
        "fullAnswer_en": "تعریف توابع پایتون با JSON Schema و ارسال آن به مدل، تا مدل پارامترهای تابع را در قالب یک JSON ساختاریافته خروجی دهد.\n\n**فرآیند ۳ مرحله‌ای:**\nتعریف تابع با JSON Schema -> دریافت آرگومان‌ها از LLM -> اجرای تابع واقعی در کد پایتون.",
        "tip_en": "دقت در نوشتن docstring و توضیحات پارامترها بسیار مهم است."
    },
    {
        "id": 105,
        "category": "agents",
        "difficulty": "advanced",
        "title": "سیستم‌های چندعاملی (Multi-Agent Systems) مانند CrewAI و AutoGen چگونه کار می‌کنند؟",
        "tags": [
            "#MultiAgent",
            "#CrewAI",
            "#AutoGen",
            "#Orchestration"
        ],
        "summary": "تقسیم کار بین چند ایجنت با نقش‌ها، اهداف و ابزارهای متمایز جهت حل مسائل پیچیده.",
        "fullAnswer": "تقسیم کار بین چند ایجنت با نقش‌ها، اهداف و ابزارهای متمایز جهت حل مسائل پیچیده.\n\n**ساختار تیمی:**\nتعریف ایجنت‌های مجزا مثل ایجنت پژوهشگر، نویسنده و بازبین جهت تولید محصول کیفی.",
        "tip": "شبیه‌سازی تیم‌های کاری واقعی در دنیای AI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: سیستم‌های چندعاملی (Multi-Agent Systems) مانند CrewAI و AutoGen چگونه کار می‌کنند؟",
        "summary_en": "تقسیم کار بین چند ایجنت با نقش‌ها، اهداف و ابزارهای متمایز جهت حل مسائل پیچیده.",
        "fullAnswer_en": "تقسیم کار بین چند ایجنت با نقش‌ها، اهداف و ابزارهای متمایز جهت حل مسائل پیچیده.\n\n**ساختار تیمی:**\nتعریف ایجنت‌های مجزا مثل ایجنت پژوهشگر، نویسنده و بازبین جهت تولید محصول کیفی.",
        "tip_en": "شبیه‌سازی تیم‌های کاری واقعی در دنیای AI."
    },
    {
        "id": 106,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "حافظه کوتاه مدت و بلندمدت در AI Agentها چگونه مدیریت می‌شود؟",
        "tags": [
            "#AgentMemory",
            "#VectorDB",
            "#ContextWindow"
        ],
        "summary": "حافظه کوتاه‌مدت همان Context Window و حافظه بلندمدت ذخیره تاریخچه مکالمات در Vector DB و بازیابی خلاصه آن‌هاست.",
        "fullAnswer": "حافظه کوتاه‌مدت همان Context Window و حافظه بلندمدت ذخیره تاریخچه مکالمات در Vector DB و بازیابی خلاصه آن‌هاست.\n\n**Memory Management:**\nاستفاده از ConversationSummaryBufferMemory برای جلوگیری از پر شدن سریع Context.",
        "tip": "ضروری برای چت‌بات‌های پشتیبانی مشتریان.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: حافظه کوتاه مدت و بلندمدت در AI Agentها چگونه مدیریت می‌شود؟",
        "summary_en": "حافظه کوتاه‌مدت همان Context Window و حافظه بلندمدت ذخیره تاریخچه مکالمات در Vector DB و بازیابی خلاصه آن‌هاست.",
        "fullAnswer_en": "حافظه کوتاه‌مدت همان Context Window و حافظه بلندمدت ذخیره تاریخچه مکالمات در Vector DB و بازیابی خلاصه آن‌هاست.\n\n**Memory Management:**\nاستفاده از ConversationSummaryBufferMemory برای جلوگیری از پر شدن سریع Context.",
        "tip_en": "ضروری برای چت‌بات‌های پشتیبانی مشتریان."
    },
    {
        "id": 107,
        "category": "agents",
        "difficulty": "advanced",
        "title": "چالش‌های امنیتی Prompt Injection و Tool Misuse در ایجنت‌ها چیست؟",
        "tags": [
            "#PromptInjection",
            "#Security",
            "#AgentSafety"
        ],
        "summary": "دستکاری ورودی کاربر برای دور زدن دستورالعمل‌های ایجنت یا اجرای کدهای مخرب از طریق ابزارها.",
        "fullAnswer": "دستکاری ورودی کاربر برای دور زدن دستورالعمل‌های ایجنت یا اجرای کدهای مخرب از طریق ابزارها.\n\n**مقابله امنیتی:**\nاجرای کدهای پایتون در محیط ایزوله Docker Sandbox و فیلتر ورودی‌ها.",
        "tip": "موضوع داغ امنیت سیستم‌های ایجنتی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: چالش‌های امنیتی Prompt Injection و Tool Misuse در ایجنت‌ها چیست؟",
        "summary_en": "دستکاری ورودی کاربر برای دور زدن دستورالعمل‌های ایجنت یا اجرای کدهای مخرب از طریق ابزارها.",
        "fullAnswer_en": "دستکاری ورودی کاربر برای دور زدن دستورالعمل‌های ایجنت یا اجرای کدهای مخرب از طریق ابزارها.\n\n**مقابله امنیتی:**\nاجرای کدهای پایتون در محیط ایزوله Docker Sandbox و فیلتر ورودی‌ها.",
        "tip_en": "موضوع داغ امنیت سیستم‌های ایجنتی."
    },
    {
        "id": 108,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "الگوی Plan-and-Solve در طراحی ایجنت هوش مصنوعی چیست؟",
        "tags": [
            "#PlanAndSolve",
            "#Planning",
            "#AgentPattern"
        ],
        "summary": "تفکیک کامل فاز برنامه‌ریزی (ساخت نقشه راه حل مسئله) از فاز اجرای گام‌به‌گام ابزارها.",
        "fullAnswer": "تفکیک کامل فاز برنامه‌ریزی (ساخت نقشه راه حل مسئله) از فاز اجرای گام‌به‌گام ابزارها.\n\n**مزیت:**\nکاهش خطاهای تصمیم‌گیری شتاب‌زده در ایجنت‌ها.",
        "tip": "مناسب برای کدهای محاسباتی چندمرحله‌ای.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: الگوی Plan-and-Solve در طراحی ایجنت هوش مصنوعی چیست؟",
        "summary_en": "تفکیک کامل فاز برنامه‌ریزی (ساخت نقشه راه حل مسئله) از فاز اجرای گام‌به‌گام ابزارها.",
        "fullAnswer_en": "تفکیک کامل فاز برنامه‌ریزی (ساخت نقشه راه حل مسئله) از فاز اجرای گام‌به‌گام ابزارها.\n\n**مزیت:**\nکاهش خطاهای تصمیم‌گیری شتاب‌زده در ایجنت‌ها.",
        "tip_en": "مناسب برای کدهای محاسباتی چندمرحله‌ای."
    },
    {
        "id": 109,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه پیاده‌سازی Human-in-the-loop (تأیید انسانی) در ایجنت‌های حساس چگونه است؟",
        "tags": [
            "#HumanInTheLoop",
            "#LangGraph",
            "#Safety"
        ],
        "summary": "متوقف کردن گراف اجرای ایجنت قبل از کارهای حساس (مثل ارسال ایمیل یا انتقال مالی) جهت اخذ تایید کاربر.",
        "fullAnswer": "متوقف کردن گراف اجرای ایجنت قبل از کارهای حساس (مثل ارسال ایمیل یا انتقال مالی) جهت اخذ تایید کاربر.\n\n**پیاده‌سازی در LangGraph:**\nاستفاده از وقفه breakpoint جهت منتظر ماندن برای سیگنال تایید یا رد انسان.",
        "tip": "الزامی در ایجنت‌های مالی و اداری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه پیاده‌سازی Human-in-the-loop (تأیید انسانی) در ایجنت‌های حساس چگونه است؟",
        "summary_en": "متوقف کردن گراف اجرای ایجنت قبل از کارهای حساس (مثل ارسال ایمیل یا انتقال مالی) جهت اخذ تایید کاربر.",
        "fullAnswer_en": "متوقف کردن گراف اجرای ایجنت قبل از کارهای حساس (مثل ارسال ایمیل یا انتقال مالی) جهت اخذ تایید کاربر.\n\n**پیاده‌سازی در LangGraph:**\nاستفاده از وقفه breakpoint جهت منتظر ماندن برای سیگنال تایید یا رد انسان.",
        "tip_en": "الزامی در ایجنت‌های مالی و اداری."
    },
    {
        "id": 110,
        "category": "agents",
        "difficulty": "beginner",
        "title": "تفاوت بین ایجنت‌های خودمختار (Autonomous Agents) و ایجنت‌های هدایت‌شده چیست؟",
        "tags": [
            "#AutonomousAgents",
            "#GuidedAgents",
            "#Architecture"
        ],
        "summary": "ایجن‌های خودمختار خودشان هدف و مسیر را تعیین می‌کنند، ایجنت‌های هدایت‌شده طبق یک گراف مشخص حرکت می‌کنند.",
        "fullAnswer": "ایجن‌های خودمختار خودشان هدف و مسیر را تعیین می‌کنند، ایجنت‌های هدایت‌شده طبق یک گراف مشخص حرکت می‌کنند.\n\n**پایداری:**\nایجنت‌های هدایت‌شده پایداری و امنیت بالاتری در پروداکشن دارند.",
        "tip": "انتخاب الگوی مناسب بر اساس ریسک پروژه.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: تفاوت بین ایجنت‌های خودمختار (Autonomous Agents) و ایجنت‌های هدایت‌شده چیست؟",
        "summary_en": "ایجن‌های خودمختار خودشان هدف و مسیر را تعیین می‌کنند، ایجنت‌های هدایت‌شده طبق یک گراف مشخص حرکت می‌کنند.",
        "fullAnswer_en": "ایجن‌های خودمختار خودشان هدف و مسیر را تعیین می‌کنند، ایجنت‌های هدایت‌شده طبق یک گراف مشخص حرکت می‌کنند.\n\n**پایداری:**\nایجنت‌های هدایت‌شده پایداری و امنیت بالاتری در پروداکشن دارند.",
        "tip_en": "انتخاب الگوی مناسب بر اساس ریسک پروژه."
    },
    {
        "id": 111,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه مدیریت خطاهای تکراری و حلقه‌های بی‌نهایت (Infinite Loops) در ایجنت‌ها به چه شکل است؟",
        "tags": [
            "#InfiniteLoops",
            "#ErrorHandling",
            "#AgentState"
        ],
        "summary": "تعریف حداکثر تعداد گام (Max Iterations) و مکانیزم تشخیص تکرار یک Action یکسان با ورودی تکراری.",
        "fullAnswer": "تعریف حداکثر تعداد گام (Max Iterations) و مکانیزم تشخیص تکرار یک Action یکسان با ورودی تکراری.\n\n**مکانیزم کنترل:**\nاگر ایجنت ۳ بار یک ابزار را با همان ارگومان فراخوانی کرد، اجرا متوقف و پیام خطای انسانی داده می‌شود.",
        "tip": "جلوگیری از سوختن توکن و هزینه بالای API.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه مدیریت خطاهای تکراری و حلقه‌های بی‌نهایت (Infinite Loops) در ایجنت‌ها به چه شکل است؟",
        "summary_en": "تعریف حداکثر تعداد گام (Max Iterations) و مکانیزم تشخیص تکرار یک Action یکسان با ورودی تکراری.",
        "fullAnswer_en": "تعریف حداکثر تعداد گام (Max Iterations) و مکانیزم تشخیص تکرار یک Action یکسان با ورودی تکراری.\n\n**مکانیزم کنترل:**\nاگر ایجنت ۳ بار یک ابزار را با همان ارگومان فراخوانی کرد، اجرا متوقف و پیام خطای انسانی داده می‌شود.",
        "tip_en": "جلوگیری از سوختن توکن و هزینه بالای API."
    },
    {
        "id": 112,
        "category": "agents",
        "difficulty": "advanced",
        "title": "مفهوم Tool Search و مکانیزم انتخاب دینامیک ابزارها در ایجنت‌ها چیست؟",
        "tags": [
            "#ToolSearch",
            "#ToolSelection",
            "#Embeddings"
        ],
        "summary": "اگر ایجنت به صدها ابزار دسترسی داشته باشد، ابتدا بردارهای توصیف ابزارها سرچ شده و تنها ابزارهای مرتبط به LLM داده می‌شوند.",
        "fullAnswer": "اگر ایجنت به صدها ابزار دسترسی داشته باشد، ابتدا بردارهای توصیف ابزارها سرچ شده و تنها ابزارهای مرتبط به LLM داده می‌شوند.\n\n**مدیریت حجم:**\nجلوگیری از پر شدن Context Window با لیست کامل توابع.",
        "tip": "کلید مقیاس‌پذیری ایجنت‌های بزرگ سازمان.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: مفهوم Tool Search و مکانیزم انتخاب دینامیک ابزارها در ایجنت‌ها چیست؟",
        "summary_en": "اگر ایجنت به صدها ابزار دسترسی داشته باشد، ابتدا بردارهای توصیف ابزارها سرچ شده و تنها ابزارهای مرتبط به LLM داده می‌شوند.",
        "fullAnswer_en": "اگر ایجنت به صدها ابزار دسترسی داشته باشد، ابتدا بردارهای توصیف ابزارها سرچ شده و تنها ابزارهای مرتبط به LLM داده می‌شوند.\n\n**مدیریت حجم:**\nجلوگیری از پر شدن Context Window با لیست کامل توابع.",
        "tip_en": "کلید مقیاس‌پذیری ایجنت‌های بزرگ سازمان."
    },
    {
        "id": 113,
        "category": "agents",
        "difficulty": "advanced",
        "title": "نحوه تست و ارزیابی عملکرد ایجنت‌ها با بنچمارک‌های SWE-bench چیست؟",
        "tags": [
            "#SWEBench",
            "#Benchmark",
            "#AgentEvaluation"
        ],
        "summary": "ارزیابی توانایی ایجنت در حل مسائل واقعی گیتهاب (حل باگ‌ها و ارسال PR معتبر).",
        "fullAnswer": "ارزیابی توانایی ایجنت در حل مسائل واقعی گیتهاب (حل باگ‌ها و ارسال PR معتبر).\n\n**معیار سنجش:**\nسنجش واقعی قدرت کدنویسی و دیباگ خودمختار ایجنت‌ها.",
        "tip": "بنچمارک جهانی ایجنت‌های برنامه‌نویس.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه تست و ارزیابی عملکرد ایجنت‌ها با بنچمارک‌های SWE-bench چیست؟",
        "summary_en": "ارزیابی توانایی ایجنت در حل مسائل واقعی گیتهاب (حل باگ‌ها و ارسال PR معتبر).",
        "fullAnswer_en": "ارزیابی توانایی ایجنت در حل مسائل واقعی گیتهاب (حل باگ‌ها و ارسال PR معتبر).\n\n**معیار سنجش:**\nسنجش واقعی قدرت کدنویسی و دیباگ خودمختار ایجنت‌ها.",
        "tip_en": "بنچمارک جهانی ایجنت‌های برنامه‌نویس."
    },
    {
        "id": 114,
        "category": "agents",
        "difficulty": "advanced",
        "title": "الگوی Reflection و Self-Correction در ایجنت‌ها چگونه عمل می‌کند؟",
        "tags": [
            "#Reflection",
            "#SelfCorrection",
            "#AgentPattern"
        ],
        "summary": "ارسال خروجی اولیه ایجنت به یک ماژول نقاد (Critic) جهت بررسی باگ‌ها و اصلاح خودکار خروجی پیش از تحویل.",
        "fullAnswer": "ارسال خروجی اولیه ایجنت به یک ماژول نقاد (Critic) جهت بررسی باگ‌ها و اصلاح خودکار خروجی پیش از تحویل.\n\n**افزایش کیفیت:**\nبهبود چشمگیر دقت کدهای تولیدی و گزارش‌ها با نقد خودکار.",
        "tip": "الگوی برتر افزایش کیفیت خروجی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: الگوی Reflection و Self-Correction در ایجنت‌ها چگونه عمل می‌کند؟",
        "summary_en": "ارسال خروجی اولیه ایجنت به یک ماژول نقاد (Critic) جهت بررسی باگ‌ها و اصلاح خودکار خروجی پیش از تحویل.",
        "fullAnswer_en": "ارسال خروجی اولیه ایجنت به یک ماژول نقاد (Critic) جهت بررسی باگ‌ها و اصلاح خودکار خروجی پیش از تحویل.\n\n**افزایش کیفیت:**\nبهبود چشمگیر دقت کدهای تولیدی و گزارش‌ها با نقد خودکار.",
        "tip_en": "الگوی برتر افزایش کیفیت خروجی."
    },
    {
        "id": 115,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "چالش‌های Latency و هزینه در اجراهای چندمرحله‌ای Multi-Agent چیست؟",
        "tags": [
            "#Latency",
            "#MultiAgentCost",
            "#Optimization"
        ],
        "summary": "هر فراخوانی ایجنت زمان پاسخ‌دهی را افزایش می‌دهد؛ حل با اجرای موازی (Parallel Execution) ایجنت‌های مستقل.",
        "fullAnswer": "هر فراخوانی ایجنت زمان پاسخ‌دهی را افزایش می‌دهد؛ حل با اجرای موازی (Parallel Execution) ایجنت‌های مستقل.\n\n**بهینه‌سازی:**\nاستفاده از الگوی Async و ترکیب خروجی ایجنت‌های همزمان.",
        "tip": "نکته کلیدی در سیستم دیزاین ایجنت‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: چالش‌های Latency و هزینه در اجراهای چندمرحله‌ای Multi-Agent چیست؟",
        "summary_en": "هر فراخوانی ایجنت زمان پاسخ‌دهی را افزایش می‌دهد؛ حل با اجرای موازی (Parallel Execution) ایجنت‌های مستقل.",
        "fullAnswer_en": "هر فراخوانی ایجنت زمان پاسخ‌دهی را افزایش می‌دهد؛ حل با اجرای موازی (Parallel Execution) ایجنت‌های مستقل.\n\n**بهینه‌سازی:**\nاستفاده از الگوی Async و ترکیب خروجی ایجنت‌های همزمان.",
        "tip_en": "نکته کلیدی در سیستم دیزاین ایجنت‌ها."
    },
    {
        "id": 116,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه ارتباط بین ایجنت‌ها با پروتکل‌های استانداردی مانند Agent Protocol چیست؟",
        "tags": [
            "#AgentProtocol",
            "#Interoperability",
            "#API"
        ],
        "summary": "تعریف API یکسان (REST/WebSocket) جهت ارتباط ایجنت‌های ساخته‌شده با فریم‌ورک‌های مختلف (LangChain, AutoGen).",
        "fullAnswer": "تعریف API یکسان (REST/WebSocket) جهت ارتباط ایجنت‌های ساخته‌شده با فریم‌ورک‌های مختلف (LangChain, AutoGen).\n\n**یکپارچه‌سازی:**\nامکان تعامل ایجنت پایتونی با ایجنت نودجی‌اسی.",
        "tip": "استاندارد ارتباطی ایجنت‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه ارتباط بین ایجنت‌ها با پروتکل‌های استانداردی مانند Agent Protocol چیست؟",
        "summary_en": "تعریف API یکسان (REST/WebSocket) جهت ارتباط ایجنت‌های ساخته‌شده با فریم‌ورک‌های مختلف (LangChain, AutoGen).",
        "fullAnswer_en": "تعریف API یکسان (REST/WebSocket) جهت ارتباط ایجنت‌های ساخته‌شده با فریم‌ورک‌های مختلف (LangChain, AutoGen).\n\n**یکپارچه‌سازی:**\nامکان تعامل ایجنت پایتونی با ایجنت نودجی‌اسی.",
        "tip_en": "استاندارد ارتباطی ایجنت‌ها."
    },
    {
        "id": 117,
        "category": "agents",
        "difficulty": "advanced",
        "title": "الگوی Tree of Thoughts (ToT) در برنامه‌ریزی ایجنت‌ها چیست؟",
        "tags": [
            "#TreeOfThoughts",
            "#ToT",
            "#Planning"
        ],
        "summary": "ایجاد یک درخت از گزینه‌های تصمیم‌گیری و ارزیابی هر شاخه جهت یافتن بهترین مسیر حل مسئله.",
        "fullAnswer": "ایجاد یک درخت از گزینه‌های تصمیم‌گیری و ارزیابی هر شاخه جهت یافتن بهترین مسیر حل مسئله.\n\n**برتری بر CoT:**\nامکان بازگشت به عقب (Backtracking) در صورت بن‌بست در یک شاخه استدلال.",
        "tip": "الگوریتم حل مسائل پیچیده شطرنجی و ریاضی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: الگوی Tree of Thoughts (ToT) در برنامه‌ریزی ایجنت‌ها چیست؟",
        "summary_en": "ایجاد یک درخت از گزینه‌های تصمیم‌گیری و ارزیابی هر شاخه جهت یافتن بهترین مسیر حل مسئله.",
        "fullAnswer_en": "ایجاد یک درخت از گزینه‌های تصمیم‌گیری و ارزیابی هر شاخه جهت یافتن بهترین مسیر حل مسئله.\n\n**برتری بر CoT:**\nامکان بازگشت به عقب (Backtracking) در صورت بن‌بست در یک شاخه استدلال.",
        "tip_en": "الگوریتم حل مسائل پیچیده شطرنجی و ریاضی."
    },
    {
        "id": 118,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه استقرار ایجنت‌ها به صورت سرورلس (Serverless Agent Deployments) چگونه است؟",
        "tags": [
            "#Serverless",
            "#AWSLambda",
            "#Deployment"
        ],
        "summary": "استقرار منطق ایجنت روی توابع AWS Lambda یا Cloud Run با حفظ State درون Redis/DynamoDB.",
        "fullAnswer": "استقرار منطق ایجنت روی توابع AWS Lambda یا Cloud Run با حفظ State درون Redis/DynamoDB.\n\n**کاهش هزینه:**\nپرداخت هزینه زیرساخت تنها در زمان فعال بودن ایجنت.",
        "tip": "معماری مدرن استقرار ایجنت‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه استقرار ایجنت‌ها به صورت سرورلس (Serverless Agent Deployments) چگونه است؟",
        "summary_en": "استقرار منطق ایجنت روی توابع AWS Lambda یا Cloud Run با حفظ State درون Redis/DynamoDB.",
        "fullAnswer_en": "استقرار منطق ایجنت روی توابع AWS Lambda یا Cloud Run با حفظ State درون Redis/DynamoDB.\n\n**کاهش هزینه:**\nپرداخت هزینه زیرساخت تنها در زمان فعال بودن ایجنت.",
        "tip_en": "معماری مدرن استقرار ایجنت‌ها."
    },
    {
        "id": 119,
        "category": "agents",
        "difficulty": "advanced",
        "title": "نقش محیط‌های ایزوله (Sandboxing / Docker) در اجرای ابزارهای کدنویسی توسط ایجنت‌ها چیست؟",
        "tags": [
            "#Sandboxing",
            "#Docker",
            "#Security"
        ],
        "summary": "اجرای کدهای پایتون یا شل تولیدی توسط ایجنت در یک کانتینر ایزوله بدون دسترسی به فایل‌های سرور اصلی.",
        "fullAnswer": "اجرای کدهای پایتون یا شل تولیدی توسط ایجنت در یک کانتینر ایزوله بدون دسترسی به فایل‌های سرور اصلی.\n\n**امنیت مطلق:**\nجلوگیری از دستورات مخرب مثل حذف فایل‌های دیتابیس.",
        "tip": "الزامی در ایجنت‌های تحلیلگر داده و کدنویس.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نقش محیط‌های ایزوله (Sandboxing / Docker) در اجرای ابزارهای کدنویسی توسط ایجنت‌ها چیست؟",
        "summary_en": "اجرای کدهای پایتون یا شل تولیدی توسط ایجنت در یک کانتینر ایزوله بدون دسترسی به فایل‌های سرور اصلی.",
        "fullAnswer_en": "اجرای کدهای پایتون یا شل تولیدی توسط ایجنت در یک کانتینر ایزوله بدون دسترسی به فایل‌های سرور اصلی.\n\n**امنیت مطلق:**\nجلوگیری از دستورات مخرب مثل حذف فایل‌های دیتابیس.",
        "tip_en": "الزامی در ایجنت‌های تحلیلگر داده و کدنویس."
    },
    {
        "id": 120,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "چگونه یک ایجنت تحلیلگر داده (Data Analysis Agent) با دسترسی به فایل‌های CSV/SQL بسازیم؟",
        "tags": [
            "#DataAgent",
            "#Pandas",
            "#SQL"
        ],
        "summary": "تجهیز ایجنت به ابزار تولد کدهای Pandas/SQL، اجرای کد در محیط ایزوله و نمایش نمودارهای Seaborn به کاربر.",
        "fullAnswer": "تجهیز ایجنت به ابزار تولد کدهای Pandas/SQL، اجرای کد در محیط ایزوله و نمایش نمودارهای Seaborn به کاربر.\n\n**فرآیند کار:**\nدریافت سوال متنی -> تولید کوئری SQL -> دریافت داده -> رسم نمودار خودکار.",
        "tip": "پروژه پرکاربرد در سازمان‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: چگونه یک ایجنت تحلیلگر داده (Data Analysis Agent) با دسترسی به فایل‌های CSV/SQL بسازیم؟",
        "summary_en": "تجهیز ایجنت به ابزار تولد کدهای Pandas/SQL، اجرای کد در محیط ایزوله و نمایش نمودارهای Seaborn به کاربر.",
        "fullAnswer_en": "تجهیز ایجنت به ابزار تولد کدهای Pandas/SQL، اجرای کد در محیط ایزوله و نمایش نمودارهای Seaborn به کاربر.\n\n**فرآیند کار:**\nدریافت سوال متنی -> تولید کوئری SQL -> دریافت داده -> رسم نمودار خودکار.",
        "tip_en": "پروژه پرکاربرد در سازمان‌ها."
    },
    {
        "id": 121,
        "category": "agents",
        "difficulty": "advanced",
        "title": "نحوه ساخت ایجنت مرورگر وب (Web Browsing Agent) با ابزارهایی مثل Playwright چیست؟",
        "tags": [
            "#WebBrowsingAgent",
            "#Playwright",
            "#Automation"
        ],
        "summary": "تجهیز ایجنت به مرورگر تعاملی جهت کلیک روی عناصر HTML، پر کردن فرم‌ها و استخراج اطلاعات زنده وب.",
        "fullAnswer": "تجهیز ایجنت به مرورگر تعاملی جهت کلیک روی عناصر HTML، پر کردن فرم‌ها و استخراج اطلاعات زنده وب.\n\n**اتوماسیون:**\nاتوماسیون کارهای تکراری آنلاین کاربر در وب.",
        "tip": "فناوری پیشرو در ابزارهای ایجنتی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه ساخت ایجنت مرورگر وب (Web Browsing Agent) با ابزارهایی مثل Playwright چیست؟",
        "summary_en": "تجهیز ایجنت به مرورگر تعاملی جهت کلیک روی عناصر HTML، پر کردن فرم‌ها و استخراج اطلاعات زنده وب.",
        "fullAnswer_en": "تجهیز ایجنت به مرورگر تعاملی جهت کلیک روی عناصر HTML، پر کردن فرم‌ها و استخراج اطلاعات زنده وب.\n\n**اتوماسیون:**\nاتوماسیون کارهای تکراری آنلاین کاربر در وب.",
        "tip_en": "فناوری پیشرو در ابزارهای ایجنتی."
    },
    {
        "id": 122,
        "category": "agents",
        "difficulty": "advanced",
        "title": "چالش‌های همزمانی (Concurrency) و مدیریت State در ایجنت‌های چندکاربره چیست؟",
        "tags": [
            "#Concurrency",
            "#StateManagement",
            "#LangGraph"
        ],
        "summary": "مدیریت همزمان نشست‌های کاربر (User Sessions) و عدم تداخل State تعاملات مختلف.",
        "fullAnswer": "مدیریت همزمان نشست‌های کاربر (User Sessions) و عدم تداخل State تعاملات مختلف.\n\n**حل چالش:**\nاستفاده از thread_id مجزا برای هر کاربر در LangGraph.",
        "tip": "ضروری در پشتیبانی‌های چندکاربره.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: چالش‌های همزمانی (Concurrency) و مدیریت State در ایجنت‌های چندکاربره چیست؟",
        "summary_en": "مدیریت همزمان نشست‌های کاربر (User Sessions) و عدم تداخل State تعاملات مختلف.",
        "fullAnswer_en": "مدیریت همزمان نشست‌های کاربر (User Sessions) و عدم تداخل State تعاملات مختلف.\n\n**حل چالش:**\nاستفاده از thread_id مجزا برای هر کاربر در LangGraph.",
        "tip_en": "ضروری در پشتیبانی‌های چندکاربره."
    },
    {
        "id": 123,
        "category": "agents",
        "difficulty": "advanced",
        "title": "الگوی Hierarchical Multi-Agent (مدیریت سلسله‌مراتبی ایجنت‌ها) چیست؟",
        "tags": [
            "#HierarchicalAgents",
            "#SupervisorAgent",
            "#Orchestration"
        ],
        "summary": "یک ایجنت سرپرست (Supervisor) وظایف را به ایجنت‌های زیرمجموعه سپرده و خروجی‌ها را جمع‌آوری و ارزیابی می‌کند.",
        "fullAnswer": "یک ایجنت سرپرست (Supervisor) وظایف را به ایجنت‌های زیرمجموعه سپرده و خروجی‌ها را جمع‌آوری و ارزیابی می‌کند.\n\n**معماری:**\nمدیریت ساده‌تر ایجنت‌های موازی در پروژه‌های عظیم.",
        "tip": "الگوی قدرتمند CrewAI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: الگوی Hierarchical Multi-Agent (مدیریت سلسله‌مراتبی ایجنت‌ها) چیست؟",
        "summary_en": "یک ایجنت سرپرست (Supervisor) وظایف را به ایجنت‌های زیرمجموعه سپرده و خروجی‌ها را جمع‌آوری و ارزیابی می‌کند.",
        "fullAnswer_en": "یک ایجنت سرپرست (Supervisor) وظایف را به ایجنت‌های زیرمجموعه سپرده و خروجی‌ها را جمع‌آوری و ارزیابی می‌کند.\n\n**معماری:**\nمدیریت ساده‌تر ایجنت‌های موازی در پروژه‌های عظیم.",
        "tip_en": "الگوی قدرتمند CrewAI."
    },
    {
        "id": 124,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه لاگ‌گیری و Tracerها برای دیباگ ایجنت‌ها با ابزارهای LangSmith چیست؟",
        "tags": [
            "#LangSmith",
            "#Tracing",
            "#Debugging"
        ],
        "summary": "ثبت تمام گام‌های Thought، Action، پرامپت‌های ارسالی و زمان اجرای ابزارها در داشبورد گرافیکی جهت دیباگ.",
        "fullAnswer": "ثبت تمام گام‌های Thought، Action، پرامپت‌های ارسالی و زمان اجرای ابزارها در داشبورد گرافیکی جهت دیباگ.\n\n**مزیت:**\nشناسایی لحظه‌ای دلیل افت کیفیت یا گیر کردن ایجنت.",
        "tip": "ابزار استاندارد پایش ایجنت‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: نحوه لاگ‌گیری و Tracerها برای دیباگ ایجنت‌ها با ابزارهای LangSmith چیست؟",
        "summary_en": "ثبت تمام گام‌های Thought، Action، پرامپت‌های ارسالی و زمان اجرای ابزارها در داشبورد گرافیکی جهت دیباگ.",
        "fullAnswer_en": "ثبت تمام گام‌های Thought، Action، پرامپت‌های ارسالی و زمان اجرای ابزارها در داشبورد گرافیکی جهت دیباگ.\n\n**مزیت:**\nشناسایی لحظه‌ای دلیل افت کیفیت یا گیر کردن ایجنت.",
        "tip_en": "ابزار استاندارد پایش ایجنت‌ها."
    },
    {
        "id": 125,
        "category": "agents",
        "difficulty": "advanced",
        "title": "چگونه یک ایجنت پشتیبانی مشتری متصل به CRM با قابلیت خطایابی خودمختار طراحی کنیم؟",
        "tags": [
            "#CustomerSupportAgent",
            "#CRM",
            "#SelfHealing"
        ],
        "summary": "اتصال ایجنت به دیتابیس مشتریان و تجهیز آن به الگوریتم‌های Fallback جهت انتقال تعامل به اپراتور انسان در صورت ابهام.",
        "fullAnswer": "اتصال ایجنت به دیتابیس مشتریان و تجهیز آن به الگوریتم‌های Fallback جهت انتقال تعامل به اپراتور انسان در صورت ابهام.\n\n**امنیت و UX:**\nارائه پاسخ مستند با حفظ حریم خصوصی داده‌های CRM.",
        "tip": "پروژه پرفروش تجاری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "AI Agents Technical Question: چگونه یک ایجنت پشتیبانی مشتری متصل به CRM با قابلیت خطایابی خودمختار طراحی کنیم؟",
        "summary_en": "اتصال ایجنت به دیتابیس مشتریان و تجهیز آن به الگوریتم‌های Fallback جهت انتقال تعامل به اپراتور انسان در صورت ابهام.",
        "fullAnswer_en": "اتصال ایجنت به دیتابیس مشتریان و تجهیز آن به الگوریتم‌های Fallback جهت انتقال تعامل به اپراتور انسان در صورت ابهام.\n\n**امنیت و UX:**\nارائه پاسخ مستند با حفظ حریم خصوصی داده‌های CRM.",
        "tip_en": "پروژه پرفروش تجاری."
    },
    {
        "id": 126,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "تکنیک Memory Compression و خلاصه‌سازی تاریخچه گفتگوها در ایجنت‌ها چیست؟",
        "tags": [
            "#MemoryCompression",
            "#ContextWindow",
            "#LLM"
        ],
        "summary": "خلاصه‌سازی خودکار گفتگوهای قدیمی توسط مدل سبک و جایگزینی آن‌ها در تاریخچه جهت آزادسازی حافظه.",
        "fullAnswer": "خلاصه‌سازی خودکار گفتگوهای قدیمی توسط مدل سبک و جایگزینی آن‌ها در تاریخچه جهت آزادسازی حافظه.\n\n**مدیریت چت‌های طولانی:**\nامکان ادامه مکالمه برای روزها بدون خروج از محدودیت توکن.",
        "tip": "ضروری برای پشتیبانی مشتریان.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is the Bias-Variance Tradeoff in Machine Learning?",
        "summary_en": "Bias is error from overly simplistic model assumptions (Underfitting), while Variance is sensitivity to training data noise (Overfitting).",
        "fullAnswer_en": "1. High Bias: Model is too simple to capture underlying patterns.\n2. High Variance: Model memorizes training noise and fails on unseen test data.",
        "tip_en": "A fundamental machine learning concept tested in every interview."
    },
    {
        "id": 127,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نقش فریم‌ورک Semantic Kernel در مقایسه با LangChain برای توسعه ایجنت چیست؟",
        "tags": [
            "#SemanticKernel",
            "#Microsoft",
            "#LangChain"
        ],
        "summary": "فریم‌ورک مایکروسافت برای یکپارچه‌سازی LLMها با زبان‌های C#، Python و Java در برنامه‌های سازمانی.",
        "fullAnswer": "فریم‌ورک مایکروسافت برای یکپارچه‌سازی LLMها با زبان‌های C#، Python و Java در برنامه‌های سازمانی.\n\n**پشتیبانی Enterprise:**\nیکپارچگی عالی با اکوسیستم دات‌نت و مایکروسافت اژور.",
        "tip": "گزینه عالی برای شرکت‌های دات‌نتی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "When do you use Cross-Entropy Loss vs. Mean Squared Error (MSE)?",
        "summary_en": "MSE is used for regression tasks (continuous values), while Cross-Entropy is used for classification tasks (probability distributions).",
        "fullAnswer_en": "1. Applications: MSE for house price prediction; Cross-Entropy for text or image classification.",
        "tip_en": "Understand the mathematical formulation of loss functions."
    },
    {
        "id": 128,
        "category": "agents",
        "difficulty": "advanced",
        "title": "نحوه پیاده‌سازی سیستم ردیابی ریسک مالی با ایجنت‌های هوش مصنوعی چیست؟",
        "tags": [
            "#FinancialAgent",
            "#RiskManagement",
            "#AI"
        ],
        "summary": "استفاده از ایجنت‌های متخصص پایش اخبار، تحلیل تکنیکال و بررسی گزارش‌های کدال جهت محاسبه اسکور ریسک.",
        "fullAnswer": "استفاده از ایجنت‌های متخصص پایش اخبار، تحلیل تکنیکال و بررسی گزارش‌های کدال جهت محاسبه اسکور ریسک.\n\n**معماری:**\nاتصال ایجنت به APIهای زنده بورسی و تحلیل همزمان اخبار.",
        "tip": "پروژه محبوب در شرکت‌های سرمایه‌گذاری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What are Vanishing and Exploding Gradients, and how are they solved?",
        "summary_en": "In deep networks, repeated matrix multiplication during backpropagation causes gradients to shrink to zero or grow to infinity.",
        "fullAnswer_en": "1. Solutions: Use ReLU/GELU activations, Residual connections (ResNet), and Layer Normalization.",
        "tip_en": "This problem was the primary catalyst behind ResNet architecture."
    },
    {
        "id": 129,
        "category": "agents",
        "difficulty": "advanced",
        "title": "چالش‌های همگام‌سازی دیتابیس در ایجنت‌های موازی Multi-Agent چیست؟",
        "tags": [
            "#Concurrency",
            "#MultiAgent",
            "#Locking"
        ],
        "summary": "مدیریت دسترسی همزمان چند ایجنت به یک رکورد دیتابیس و جلوگیری از Race Condition.",
        "fullAnswer": "مدیریت دسترسی همزمان چند ایجنت به یک رکورد دیتابیس و جلوگیری از Race Condition.\n\n**حل چالش:**\nاستفاده از قفل‌های توزیع‌شده (Distributed Locks) در Redis.",
        "tip": "نکته سیستم‌دیزاین ایجنت‌های موازی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "When should you use Precision, Recall, F1-Score, and AUC-ROC?",
        "summary_en": "In imbalanced datasets, Accuracy is misleading. Precision measures positive prediction accuracy, while Recall measures false negative avoidance.",
        "fullAnswer_en": "1. Metric Selection: Medical diagnosis and fraud detection prioritize Recall to avoid missing critical positive cases.",
        "tip_en": "Always use F1-Score or AUC-ROC for imbalanced classification."
    },
    {
        "id": 130,
        "category": "agents",
        "difficulty": "intermediate",
        "title": "نحوه ساخت ایجنت جستجوگر کد (Code Search Agent) متصل به Git چیست؟",
        "tags": [
            "#GitAgent",
            "#CodeSearch",
            "#AST"
        ],
        "summary": "اتصال ایجنت به ریپازیتوری Git جهت جستجوی توابع، تحلیل commitها و پاسخ به سوالات فنی توسعه‌دهندگان.",
        "fullAnswer": "اتصال ایجنت به ریپازیتوری Git جهت جستجوی توابع، تحلیل commitها و پاسخ به سوالات فنی توسعه‌دهندگان.\n\n**ابزارها:**\nاستفاده از Git API و نمایه برداری کدهای پروژه.",
        "tip": "دستیار عالی برای تیم‌های نرم‌افزاری.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What are the differences between SGD, Adam, and AdamW optimizers?",
        "summary_en": "Adam uses adaptive learning rates for each parameter. AdamW corrects L2 regularization implementation in Adam and is the standard for LLM training.",
        "fullAnswer_en": "1. AdamW: Decouples weight decay from adaptive learning rate updates.",
        "tip_en": "Virtually all modern LLMs are trained using AdamW."
    },
    {
        "id": 131,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "تفاوت Bias و Variance (موازنه خطای سوگیری و واریانس) چیست؟",
        "tags": [
            "#BiasVariance",
            "#Overfitting",
            "#Underfitting"
        ],
        "summary": "Bias خطای ناشی از فرضیات بسیار ساده مدل (Underfitting) و Variance حساسیت شدید به نویز داده‌های آموزش (Overfitting) است.",
        "fullAnswer": "Bias خطای ناشی از فرضیات بسیار ساده مدل (Underfitting) و Variance حساسیت شدید به نویز داده‌های آموزش (Overfitting) است.\n\n**High Bias:**\nمدل ساده است و توانایی یادگیری الگوها را ندارد.\n\n**High Variance:**\nمدل داده‌های آموزش را حفظ کرده و در داده تست شکست می‌خورد.",
        "tip": "مفهوم بنیادی یادگیری ماشین.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تفاوت Bias و Variance (موازنه خطای سوگیری و واریانس) چیست؟",
        "summary_en": "Bias خطای ناشی از فرضیات بسیار ساده مدل (Underfitting) و Variance حساسیت شدید به نویز داده‌های آموزش (Overfitting) است.",
        "fullAnswer_en": "Bias خطای ناشی از فرضیات بسیار ساده مدل (Underfitting) و Variance حساسیت شدید به نویز داده‌های آموزش (Overfitting) است.\n\n**High Bias:**\nمدل ساده است و توانایی یادگیری الگوها را ندارد.\n\n**High Variance:**\nمدل داده‌های آموزش را حفظ کرده و در داده تست شکست می‌خورد.",
        "tip_en": "مفهوم بنیادی یادگیری ماشین."
    },
    {
        "id": 132,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "توجه به توابع زیان Cross-Entropy و MSE چه تفاوتی دارند؟",
        "tags": [
            "#LossFunctions",
            "#CrossEntropy",
            "#MSE"
        ],
        "summary": "MSE برای مسائل رگرسیون (پیش‌بینی مقدار پیوسته) و Cross-Entropy برای کلاسیفیکیشن (توزیع احتمال کلاس‌ها) استفاده می‌شود.",
        "fullAnswer": "MSE برای مسائل رگرسیون (پیش‌بینی مقدار پیوسته) و Cross-Entropy برای کلاسیفیکیشن (توزیع احتمال کلاس‌ها) استفاده می‌شود.\n\n**کاربردها:**\nMSE برای پیش‌بینی قیمت، Cross-Entropy برای دسته‌بندی تصویر و متن.",
        "tip": "پایه ریاضی آموزش شبکه‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: توجه به توابع زیان Cross-Entropy و MSE چه تفاوتی دارند؟",
        "summary_en": "MSE برای مسائل رگرسیون (پیش‌بینی مقدار پیوسته) و Cross-Entropy برای کلاسیفیکیشن (توزیع احتمال کلاس‌ها) استفاده می‌شود.",
        "fullAnswer_en": "MSE برای مسائل رگرسیون (پیش‌بینی مقدار پیوسته) و Cross-Entropy برای کلاسیفیکیشن (توزیع احتمال کلاس‌ها) استفاده می‌شود.\n\n**کاربردها:**\nMSE برای پیش‌بینی قیمت، Cross-Entropy برای دسته‌بندی تصویر و متن.",
        "tip_en": "پایه ریاضی آموزش شبکه‌ها."
    },
    {
        "id": 133,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "مشکل Vanishing Gradient و Exploding Gradient چیست و چگونه حل می‌شود؟",
        "tags": [
            "#VanishingGradient",
            "#ResNet",
            "#ReLU"
        ],
        "summary": "در شبکه‌های عمیق، ضرب متوالی مشتقات باعث صفر شدن یا بی‌نهایت شدن گرادیان‌ها در لایه‌های اولیه می‌شود.",
        "fullAnswer": "در شبکه‌های عمیق، ضرب متوالی مشتقات باعث صفر شدن یا بی‌نهایت شدن گرادیان‌ها در لایه‌های اولیه می‌شود.\n\n**راهکارها:**\nاستفاده از تابع اکتیویشن ReLU/GELU، اتصالات باقی‌مانده (ResNet) و Layer Normalization.",
        "tip": "علت اصلی ساخت معماری ResNet.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: مشکل Vanishing Gradient و Exploding Gradient چیست و چگونه حل می‌شود؟",
        "summary_en": "در شبکه‌های عمیق، ضرب متوالی مشتقات باعث صفر شدن یا بی‌نهایت شدن گرادیان‌ها در لایه‌های اولیه می‌شود.",
        "fullAnswer_en": "در شبکه‌های عمیق، ضرب متوالی مشتقات باعث صفر شدن یا بی‌نهایت شدن گرادیان‌ها در لایه‌های اولیه می‌شود.\n\n**راهکارها:**\nاستفاده از تابع اکتیویشن ReLU/GELU، اتصالات باقی‌مانده (ResNet) و Layer Normalization.",
        "tip_en": "علت اصلی ساخت معماری ResNet."
    },
    {
        "id": 134,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "معیارهای ارزیابی Precision, Recall, F1-Score و AUC-ROC چه زمانی استفاده می‌شوند؟",
        "tags": [
            "#Precision",
            "#Recall",
            "#F1Score",
            "#AUC_ROC"
        ],
        "summary": "در داده‌های نامتوازن Accuracy گول‌زننده است. Precision روی دقت پیش‌بینی مثبت و Recall روی عدم از دست دادن مثبت‌ها تمرکز دارد.",
        "fullAnswer": "در داده‌های نامتوازن Accuracy گول‌زننده است. Precision روی دقت پیش‌بینی مثبت و Recall روی عدم از دست دادن مثبت‌ها تمرکز دارد.\n\n**انتخاب معیار:**\nدر سیستم‌های پزشکی و کشف تقلب Recall اهمیت حیاتی دارد.",
        "tip": "همیشه در داده‌های نامتوازن از F1 استفاده کنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: معیارهای ارزیابی Precision, Recall, F1-Score و AUC-ROC چه زمانی استفاده می‌شوند؟",
        "summary_en": "در داده‌های نامتوازن Accuracy گول‌زننده است. Precision روی دقت پیش‌بینی مثبت و Recall روی عدم از دست دادن مثبت‌ها تمرکز دارد.",
        "fullAnswer_en": "در داده‌های نامتوازن Accuracy گول‌زننده است. Precision روی دقت پیش‌بینی مثبت و Recall روی عدم از دست دادن مثبت‌ها تمرکز دارد.\n\n**انتخاب معیار:**\nدر سیستم‌های پزشکی و کشف تقلب Recall اهمیت حیاتی دارد.",
        "tip_en": "همیشه در داده‌های نامتوازن از F1 استفاده کنید."
    },
    {
        "id": 135,
        "category": "ml_dl",
        "difficulty": "advanced",
        "title": "الگوریتم‌های بهینه‌سازی Adam, AdamW و SGD با Momentum چه تفاوتی دارند؟",
        "tags": [
            "#Adam",
            "#AdamW",
            "#SGD"
        ],
        "summary": "Adam نرخ یادگیری آداپتیو برای هر پارامتر دارد. AdamW مشکل L2 Regularization در Adam را اصلاح کرده و استاندارد آموزش LLMها است.",
        "fullAnswer": "Adam نرخ یادگیری آداپتیو برای هر پارامتر دارد. AdamW مشکل L2 Regularization در Adam را اصلاح کرده و استاندارد آموزش LLMها است.\n\n**AdamW:**\nاصلاح نحوه اعمال Weight Decay به صورت جداگانه از نرخ یادگیری آداپتیو.",
        "tip": "تمام LLMها با AdamW آموزش می‌بینند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: الگوریتم‌های بهینه‌سازی Adam, AdamW و SGD با Momentum چه تفاوتی دارند؟",
        "summary_en": "Adam نرخ یادگیری آداپتیو برای هر پارامتر دارد. AdamW مشکل L2 Regularization در Adam را اصلاح کرده و استاندارد آموزش LLMها است.",
        "fullAnswer_en": "Adam نرخ یادگیری آداپتیو برای هر پارامتر دارد. AdamW مشکل L2 Regularization در Adam را اصلاح کرده و استاندارد آموزش LLMها است.\n\n**AdamW:**\nاصلاح نحوه اعمال Weight Decay به صورت جداگانه از نرخ یادگیری آداپتیو.",
        "tip_en": "تمام LLMها با AdamW آموزش می‌بینند."
    },
    {
        "id": 136,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "کاربرد تابع فعال‌سازی Softmax در شبکه عصبی چیست؟",
        "tags": [
            "#Softmax",
            "#DeepLearning",
            "#Probability"
        ],
        "summary": "تبدیل خروجی‌های خام شبکه (Logits) به توزیع احتمالی که مجموع آن‌ها برابر ۱ شود.",
        "fullAnswer": "تبدیل خروجی‌های خام شبکه (Logits) به توزیع احتمالی که مجموع آن‌ها برابر ۱ شود.\n\n**کاربرد:**\nاستفاده در لایه نهایی کلاسیفیکیشن چندکلاسه.",
        "tip": "معادله ریاضی Softmax را به یاد داشته باشید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: کاربرد تابع فعال‌سازی Softmax در شبکه عصبی چیست؟",
        "summary_en": "تبدیل خروجی‌های خام شبکه (Logits) به توزیع احتمالی که مجموع آن‌ها برابر ۱ شود.",
        "fullAnswer_en": "تبدیل خروجی‌های خام شبکه (Logits) به توزیع احتمالی که مجموع آن‌ها برابر ۱ شود.\n\n**کاربرد:**\nاستفاده در لایه نهایی کلاسیفیکیشن چندکلاسه.",
        "tip_en": "معادله ریاضی Softmax را به یاد داشته باشید."
    },
    {
        "id": 137,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "تکنیک Data Augmentation در آموزش مدل‌ها چه کاربردی دارد؟",
        "tags": [
            "#DataAugmentation",
            "#Overfitting",
            "#ComputerVision"
        ],
        "summary": "ایجاد تغییرات تصادفی روی داده‌های موجود برای افزایش حجم دیتاست و جلوگیری از Overfitting.",
        "fullAnswer": "ایجاد تغییرات تصادفی روی داده‌های موجود برای افزایش حجم دیتاست و جلوگیری از Overfitting.\n\n**تکنیک‌ها:**\nچرخش و برش در تصویر، ترجمه برگشتی و جایگزینی مترادف‌ها در متن.",
        "tip": "راهکار موثر در داده‌های محدود.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تکنیک Data Augmentation در آموزش مدل‌ها چه کاربردی دارد؟",
        "summary_en": "ایجاد تغییرات تصادفی روی داده‌های موجود برای افزایش حجم دیتاست و جلوگیری از Overfitting.",
        "fullAnswer_en": "ایجاد تغییرات تصادفی روی داده‌های موجود برای افزایش حجم دیتاست و جلوگیری از Overfitting.\n\n**تکنیک‌ها:**\nچرخش و برش در تصویر، ترجمه برگشتی و جایگزینی مترادف‌ها در متن.",
        "tip_en": "راهکار موثر در داده‌های محدود."
    },
    {
        "id": 138,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "تفاوت بین L1 Regularization (Lasso) و L2 Regularization (Ridge) چیست؟",
        "tags": [
            "#L1_L2",
            "#Regularization",
            "#MachineLearning"
        ],
        "summary": "L1 قدرمطلق وزن‌ها را جریمه کرده و برخی وزن‌ها را دقیقاً صفر می‌کند (Feature Selection)، L2 مجذور وزن‌ها را جریمه می‌کند.",
        "fullAnswer": "L1 قدرمطلق وزن‌ها را جریمه کرده و برخی وزن‌ها را دقیقاً صفر می‌کند (Feature Selection)، L2 مجذور وزن‌ها را جریمه می‌کند.\n\n**تفاوت اصلی:**\nL1 باعث اسپارس شدن مدل می‌شود، L2 وزن‌ها را کوچک نگه می‌دارد.",
        "tip": "تکنیک‌های جلوگیری از Overfitting.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تفاوت بین L1 Regularization (Lasso) و L2 Regularization (Ridge) چیست؟",
        "summary_en": "L1 قدرمطلق وزن‌ها را جریمه کرده و برخی وزن‌ها را دقیقاً صفر می‌کند (Feature Selection)، L2 مجذور وزن‌ها را جریمه می‌کند.",
        "fullAnswer_en": "L1 قدرمطلق وزن‌ها را جریمه کرده و برخی وزن‌ها را دقیقاً صفر می‌کند (Feature Selection)، L2 مجذور وزن‌ها را جریمه می‌کند.\n\n**تفاوت اصلی:**\nL1 باعث اسپارس شدن مدل می‌شود، L2 وزن‌ها را کوچک نگه می‌دارد.",
        "tip_en": "تکنیک‌های جلوگیری از Overfitting."
    },
    {
        "id": 139,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "تکنیک Dropout در شبکه‌های عصبی عمیق چگونه از Overfitting جلوگیری می‌کند؟",
        "tags": [
            "#Dropout",
            "#DeepLearning",
            "#Regularization"
        ],
        "summary": "غیرفعال کردن تصادفی درصدی از نورون‌ها در هر گام آموزش تا شبکه به نورون خاصی وابسته نشود.",
        "fullAnswer": "غیرفعال کردن تصادفی درصدی از نورون‌ها در هر گام آموزش تا شبکه به نورون خاصی وابسته نشود.\n\n**عملکرد:**\nایجاد ترکیبی از شبکه‌های عصبی مختلف به صورت همزمان.",
        "tip": "از پرکاربردترین روش‌های Regularization.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تکنیک Dropout در شبکه‌های عصبی عمیق چگونه از Overfitting جلوگیری می‌کند؟",
        "summary_en": "غیرفعال کردن تصادفی درصدی از نورون‌ها در هر گام آموزش تا شبکه به نورون خاصی وابسته نشود.",
        "fullAnswer_en": "غیرفعال کردن تصادفی درصدی از نورون‌ها در هر گام آموزش تا شبکه به نورون خاصی وابسته نشود.\n\n**عملکرد:**\nایجاد ترکیبی از شبکه‌های عصبی مختلف به صورت همزمان.",
        "tip_en": "از پرکاربردترین روش‌های Regularization."
    },
    {
        "id": 140,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "نحوه کار لایه‌های Batch Normalization و Layer Normalization چیست؟",
        "tags": [
            "#BatchNorm",
            "#LayerNorm",
            "#DeepLearning"
        ],
        "summary": "BatchNorm ورودی‌ها را روی دسته (Batch) نرمال می‌کند، LayerNorm ورودی‌ها را روی ویژگی‌های (Features) هر نمونه نرمال می‌سازد.",
        "fullAnswer": "BatchNorm ورودی‌ها را روی دسته (Batch) نرمال می‌کند، LayerNorm ورودی‌ها را روی ویژگی‌های (Features) هر نمونه نرمال می‌سازد.\n\n**تفاوت کاربرد:**\nBatchNorm در تصاویر (CNN)، LayerNorm در متن و ترنسفورمرها استفاده می‌شود.",
        "tip": "علت پایداری آموزش شبکه‌های عمیق.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: نحوه کار لایه‌های Batch Normalization و Layer Normalization چیست؟",
        "summary_en": "BatchNorm ورودی‌ها را روی دسته (Batch) نرمال می‌کند، LayerNorm ورودی‌ها را روی ویژگی‌های (Features) هر نمونه نرمال می‌سازد.",
        "fullAnswer_en": "BatchNorm ورودی‌ها را روی دسته (Batch) نرمال می‌کند، LayerNorm ورودی‌ها را روی ویژگی‌های (Features) هر نمونه نرمال می‌سازد.\n\n**تفاوت کاربرد:**\nBatchNorm در تصاویر (CNN)، LayerNorm در متن و ترنسفورمرها استفاده می‌شود.",
        "tip_en": "علت پایداری آموزش شبکه‌های عمیق."
    },
    {
        "id": 141,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "مفهوم Transfer Learning و Fine-Tuning لایه‌های انتهای شبکه چیست؟",
        "tags": [
            "#TransferLearning",
            "#FineTuning",
            "#DeepLearning"
        ],
        "summary": "استفاده از وزن‌های آموزش‌دیده یک مدل بزرگ روی یک دیتاست عظیم و تنظیم لایه‌های نهایی روی داده‌های خودمان.",
        "fullAnswer": "استفاده از وزن‌های آموزش‌دیده یک مدل بزرگ روی یک دیتاست عظیم و تنظیم لایه‌های نهایی روی داده‌های خودمان.\n\n**مزیت:**\nکاهش شدید زمان و داده مورد نیاز برای آموزش مدل.",
        "tip": "پایه اصلی تمام کارهای عمیق صنعتی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: مفهوم Transfer Learning و Fine-Tuning لایه‌های انتهای شبکه چیست؟",
        "summary_en": "استفاده از وزن‌های آموزش‌دیده یک مدل بزرگ روی یک دیتاست عظیم و تنظیم لایه‌های نهایی روی داده‌های خودمان.",
        "fullAnswer_en": "استفاده از وزن‌های آموزش‌دیده یک مدل بزرگ روی یک دیتاست عظیم و تنظیم لایه‌های نهایی روی داده‌های خودمان.\n\n**مزیت:**\nکاهش شدید زمان و داده مورد نیاز برای آموزش مدل.",
        "tip_en": "پایه اصلی تمام کارهای عمیق صنعتی."
    },
    {
        "id": 142,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "تفاوت الگوریتم‌های یادگیری با نظارت، بدون نظارت و نیمه‌نظارتی چیست؟",
        "tags": [
            "#Supervised",
            "#Unsupervised",
            "#SemiSupervised"
        ],
        "summary": "با نظارت دارای برچسب (Label) است، بدون نظارت کشف الگو در داده‌های بدون برچسب (Clustering) است، نیمه‌نظارتی ترکیب این دو است.",
        "fullAnswer": "با نظارت دارای برچسب (Label) است، بدون نظارت کشف الگو در داده‌های بدون برچسب (Clustering) است، نیمه‌نظارتی ترکیب این دو است.\n\n**مثال‌ها:**\nSupervised: رگرسیون، Unsupervised: K-Means، Semi-Supervised: Pseudo-labeling.",
        "tip": "طبقه‌بندی پایه دنیای ML.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تفاوت الگوریتم‌های یادگیری با نظارت، بدون نظارت و نیمه‌نظارتی چیست؟",
        "summary_en": "با نظارت دارای برچسب (Label) است، بدون نظارت کشف الگو در داده‌های بدون برچسب (Clustering) است، نیمه‌نظارتی ترکیب این دو است.",
        "fullAnswer_en": "با نظارت دارای برچسب (Label) است، بدون نظارت کشف الگو در داده‌های بدون برچسب (Clustering) است، نیمه‌نظارتی ترکیب این دو است.\n\n**مثال‌ها:**\nSupervised: رگرسیون، Unsupervised: K-Means، Semi-Supervised: Pseudo-labeling.",
        "tip_en": "طبقه‌بندی پایه دنیای ML."
    },
    {
        "id": 143,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "الگوریتم Random Forest چگونه کار می‌کند و تفاوت آن با XGBoost چیست؟",
        "tags": [
            "#RandomForest",
            "#XGBoost",
            "#Ensemble"
        ],
        "summary": "Random Forest ترکیبی موازی از درخت‌هاست (Bagging)، XGBoost ترکیب متوالی درخت‌هاست که هر درخت خطای درخت قبلی را اصلاح می‌کند (Boosting).",
        "fullAnswer": "Random Forest ترکیبی موازی از درخت‌هاست (Bagging)، XGBoost ترکیب متوالی درخت‌هاست که هر درخت خطای درخت قبلی را اصلاح می‌کند (Boosting).\n\n**سرعت و دقت:**\nXGBoost معمولاً دقت بالاتری در مسابقات داده ارائه می‌دهد.",
        "tip": "پادشاه داده‌های جدول‌بندی شده (Tabular Data).",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: الگوریتم Random Forest چگونه کار می‌کند و تفاوت آن با XGBoost چیست؟",
        "summary_en": "Random Forest ترکیبی موازی از درخت‌هاست (Bagging)، XGBoost ترکیب متوالی درخت‌هاست که هر درخت خطای درخت قبلی را اصلاح می‌کند (Boosting).",
        "fullAnswer_en": "Random Forest ترکیبی موازی از درخت‌هاست (Bagging)، XGBoost ترکیب متوالی درخت‌هاست که هر درخت خطای درخت قبلی را اصلاح می‌کند (Boosting).\n\n**سرعت و دقت:**\nXGBoost معمولاً دقت بالاتری در مسابقات داده ارائه می‌دهد.",
        "tip_en": "پادشاه داده‌های جدول‌بندی شده (Tabular Data)."
    },
    {
        "id": 144,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "مفهوم Curse of Dimensionality (لعنت ابعاد بالا) در یادگیری ماشین چیست؟",
        "tags": [
            "#CurseOfDimensionality",
            "#DataScience",
            "#PCA"
        ],
        "summary": "با افزایش تعداد ویژگی‌ها (ابعاد)، حجم فضای داده به صورت توان دو رشد کرده و داده‌ها بسیار تنک (Sparse) می‌شوند.",
        "fullAnswer": "با افزایش تعداد ویژگی‌ها (ابعاد)، حجم فضای داده به صورت توان دو رشد کرده و داده‌ها بسیار تنک (Sparse) می‌شوند.\n\n**راهکار:**\nاستفاده از تکنیک‌های کاهش ابعاد مانند PCA یا Feature Selection.",
        "tip": "علت لزوم کاهش ابعاد پیش از الگوریتم‌های فاصله‌ای.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: مفهوم Curse of Dimensionality (لعنت ابعاد بالا) در یادگیری ماشین چیست؟",
        "summary_en": "با افزایش تعداد ویژگی‌ها (ابعاد)، حجم فضای داده به صورت توان دو رشد کرده و داده‌ها بسیار تنک (Sparse) می‌شوند.",
        "fullAnswer_en": "با افزایش تعداد ویژگی‌ها (ابعاد)، حجم فضای داده به صورت توان دو رشد کرده و داده‌ها بسیار تنک (Sparse) می‌شوند.\n\n**راهکار:**\nاستفاده از تکنیک‌های کاهش ابعاد مانند PCA یا Feature Selection.",
        "tip_en": "علت لزوم کاهش ابعاد پیش از الگوریتم‌های فاصله‌ای."
    },
    {
        "id": 145,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "نحوه عملکرد الگوریتم PCA برای کاهش ابعاد چیست؟",
        "tags": [
            "#PCA",
            "#DimensionalityReduction",
            "#Math"
        ],
        "summary": "یافتن بردارهای متعامد (Principal Components) که بیشترین واریانس و پراکندگی داده‌ها را پوشش می‌دهند.",
        "fullAnswer": "یافتن بردارهای متعامد (Principal Components) که بیشترین واریانس و پراکندگی داده‌ها را پوشش می‌دهند.\n\n**کاربرد:**\nکاهش ابعاد داده بدون از دست دادن اطلاعات کلیدی.",
        "tip": "مهم‌ترین الگوریتم خطی کاهش ابعاد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: نحوه عملکرد الگوریتم PCA برای کاهش ابعاد چیست؟",
        "summary_en": "یافتن بردارهای متعامد (Principal Components) که بیشترین واریانس و پراکندگی داده‌ها را پوشش می‌دهند.",
        "fullAnswer_en": "یافتن بردارهای متعامد (Principal Components) که بیشترین واریانس و پراکندگی داده‌ها را پوشش می‌دهند.\n\n**کاربرد:**\nکاهش ابعاد داده بدون از دست دادن اطلاعات کلیدی.",
        "tip_en": "مهم‌ترین الگوریتم خطی کاهش ابعاد."
    },
    {
        "id": 146,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "تفاوت بین Grid Search, Random Search و Bayesian Optimization چیست؟",
        "tags": [
            "#HyperparameterTuning",
            "#GridSearch",
            "#BayesianOptimization"
        ],
        "summary": "Grid Search تمام حالات را تست می‌کند، Random Search نمونه‌های تصادفی می‌گیرد، Bayesian Optimization بر اساس نتایج قبلی نقطه بعدی را حدس می‌زند.",
        "fullAnswer": "Grid Search تمام حالات را تست می‌کند، Random Search نمونه‌های تصادفی می‌گیرد، Bayesian Optimization بر اساس نتایج قبلی نقطه بعدی را حدس می‌زند.\n\n**کارایی:**\nBayesian Optimization سریع‌ترین روش برای یافتن هایپرپارامتر بهینه است.",
        "tip": "بهینه‌سازی تنظیمات مدل.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تفاوت بین Grid Search, Random Search و Bayesian Optimization چیست؟",
        "summary_en": "Grid Search تمام حالات را تست می‌کند، Random Search نمونه‌های تصادفی می‌گیرد، Bayesian Optimization بر اساس نتایج قبلی نقطه بعدی را حدس می‌زند.",
        "fullAnswer_en": "Grid Search تمام حالات را تست می‌کند، Random Search نمونه‌های تصادفی می‌گیرد، Bayesian Optimization بر اساس نتایج قبلی نقطه بعدی را حدس می‌زند.\n\n**کارایی:**\nBayesian Optimization سریع‌ترین روش برای یافتن هایپرپارامتر بهینه است.",
        "tip_en": "بهینه‌سازی تنظیمات مدل."
    },
    {
        "id": 147,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "مفهوم K-Fold Cross Validation و Stratified K-Fold چیست؟",
        "tags": [
            "#CrossValidation",
            "#Evaluation",
            "#DataScience"
        ],
        "summary": "تقسیم داده به K بخش و تست مدل روی هر بخش؛ Stratified تضمین می‌کند نسبت کلاس‌ها در تمام بخش‌ها یکسان بماند.",
        "fullAnswer": "تقسیم داده به K بخش و تست مدل روی هر بخش؛ Stratified تضمین می‌کند نسبت کلاس‌ها در تمام بخش‌ها یکسان بماند.\n\n**مزیت:**\nارزیابی واقعی عملکرد مدل بدون وابستگی به یک تقسیم‌بندی خاص.",
        "tip": "استاندارد ارزیابی مدل‌های ML.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: مفهوم K-Fold Cross Validation و Stratified K-Fold چیست؟",
        "summary_en": "تقسیم داده به K بخش و تست مدل روی هر بخش؛ Stratified تضمین می‌کند نسبت کلاس‌ها در تمام بخش‌ها یکسان بماند.",
        "fullAnswer_en": "تقسیم داده به K بخش و تست مدل روی هر بخش؛ Stratified تضمین می‌کند نسبت کلاس‌ها در تمام بخش‌ها یکسان بماند.\n\n**مزیت:**\nارزیابی واقعی عملکرد مدل بدون وابستگی به یک تقسیم‌بندی خاص.",
        "tip_en": "استاندارد ارزیابی مدل‌های ML."
    },
    {
        "id": 148,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "معماری شبکه‌های عصبی پیچشی (CNN) و لایه‌های Convolution چگونه کار می‌کنند؟",
        "tags": [
            "#CNN",
            "#ComputerVision",
            "#DeepLearning"
        ],
        "summary": "استفاده از فیلترهای لغزان جهت استخراج ویژگی‌های محلی (لبه‌ها، بافت‌ها) در تصاویر.",
        "fullAnswer": "استفاده از فیلترهای لغزان جهت استخراج ویژگی‌های محلی (لبه‌ها، بافت‌ها) در تصاویر.\n\n**مزیت اصلی:**\nمستقل بودن از موقعیت مکانی ویژگی‌ها در تصویر.",
        "tip": "معماری پایه پردازش تصویر.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: معماری شبکه‌های عصبی پیچشی (CNN) و لایه‌های Convolution چگونه کار می‌کنند؟",
        "summary_en": "استفاده از فیلترهای لغزان جهت استخراج ویژگی‌های محلی (لبه‌ها، بافت‌ها) در تصاویر.",
        "fullAnswer_en": "استفاده از فیلترهای لغزان جهت استخراج ویژگی‌های محلی (لبه‌ها، بافت‌ها) در تصاویر.\n\n**مزیت اصلی:**\nمستقل بودن از موقعیت مکانی ویژگی‌ها در تصویر.",
        "tip_en": "معماری پایه پردازش تصویر."
    },
    {
        "id": 149,
        "category": "ml_dl",
        "difficulty": "advanced",
        "title": "معماری Vision Transformer (ViT) چیست و چه تفاوتی با CNNها دارد؟",
        "tags": [
            "#ViT",
            "#VisionTransformer",
            "#ComputerVision"
        ],
        "summary": "خرد کردن تصویر به قطعات (Patches) و پردازش آن‌ها مانند توکن‌های متنی با Self-Attention ترنسفورمر.",
        "fullAnswer": "خرد کردن تصویر به قطعات (Patches) و پردازش آن‌ها مانند توکن‌های متنی با Self-Attention ترنسفورمر.\n\n**مقایسه:**\nViT در دیتاست‌های غول‌پیکر عملکرد بهتری نسبت به CNN ارائه می‌دهد.",
        "tip": "انقلاب ترنسفورمرها در بینایی ماشین.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: معماری Vision Transformer (ViT) چیست و چه تفاوتی با CNNها دارد؟",
        "summary_en": "خرد کردن تصویر به قطعات (Patches) و پردازش آن‌ها مانند توکن‌های متنی با Self-Attention ترنسفورمر.",
        "fullAnswer_en": "خرد کردن تصویر به قطعات (Patches) و پردازش آن‌ها مانند توکن‌های متنی با Self-Attention ترنسفورمر.\n\n**مقایسه:**\nViT در دیتاست‌های غول‌پیکر عملکرد بهتری نسبت به CNN ارائه می‌دهد.",
        "tip_en": "انقلاب ترنسفورمرها در بینایی ماشین."
    },
    {
        "id": 150,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "تفاوت بین Generative Models و Discriminative Models چیست؟",
        "tags": [
            "#Generative",
            "#Discriminative",
            "#AI"
        ],
        "summary": "Discriminative مرز بین کلاس‌ها را یاد می‌گیرد P(Y|X)، Generative توزیع خود داده‌ها را یاد می‌گیرد P(X,Y) تا داده جدید بسازد.",
        "fullAnswer": "Discriminative مرز بین کلاس‌ها را یاد می‌گیرد P(Y|X)، Generative توزیع خود داده‌ها را یاد می‌گیرد P(X,Y) تا داده جدید بسازد.\n\n**مثال‌ها:**\nDiscriminative: SVM/BERT، Generative: GAN/GPT.",
        "tip": "تفاوت фундамента بین AI سنتی و مولد.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: تفاوت بین Generative Models و Discriminative Models چیست؟",
        "summary_en": "Discriminative مرز بین کلاس‌ها را یاد می‌گیرد P(Y|X)، Generative توزیع خود داده‌ها را یاد می‌گیرد P(X,Y) تا داده جدید بسازد.",
        "fullAnswer_en": "Discriminative مرز بین کلاس‌ها را یاد می‌گیرد P(Y|X)، Generative توزیع خود داده‌ها را یاد می‌گیرد P(X,Y) تا داده جدید بسازد.\n\n**مثال‌ها:**\nDiscriminative: SVM/BERT، Generative: GAN/GPT.",
        "tip_en": "تفاوت фундамента بین AI سنتی و مولد."
    },
    {
        "id": 151,
        "category": "ml_dl",
        "difficulty": "advanced",
        "title": "نحوه عملکرد شبکه‌های تولیدی رقابتی (GANs) و مدل‌های دیفیوژن چیست؟",
        "tags": [
            "#GANs",
            "#DiffusionModels",
            "#GenerativeAI"
        ],
        "summary": "GANs رقابت بین تولیدکننده و تشخیص‌دهنده است، Diffusion با افزودن و حذف تدریجی نویز تصویر می‌سازد.",
        "fullAnswer": "GANs رقابت بین تولیدکننده و تشخیص‌دهنده است، Diffusion با افزودن و حذف تدریجی نویز تصویر می‌سازد.\n\n**روند جدید:**\nمدل‌های دیفیوژن (مثل Midjourney) به دلیل پایداری بیشتر جایگزین GANها شده‌اند.",
        "tip": "معماری‌های تولید تصویر هوش مصنوعی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is the difference between Data Drift and Concept Drift, and how are they monitored?",
        "summary_en": "Data Drift is a shift in input feature distribution, while Concept Drift is a change in the statistical relationship between inputs and target outputs.",
        "fullAnswer_en": "1. Monitoring: Use statistical hypothesis tests (e.g. Kolmogorov-Smirnov) with monitoring suites like Evidently AI.",
        "tip_en": "Critical for maintaining model performance in production."
    },
    {
        "id": 152,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "چالش نامتوازن بودن کلاس‌ها (Imbalanced Datasets) و روش‌های SMOTE و Focal Loss چیست؟",
        "tags": [
            "#ImbalancedData",
            "#SMOTE",
            "#FocalLoss"
        ],
        "summary": "SMOTE نمونه‌های مصنوعی از کلاس اقلیت می‌سازد، Focal Loss وزن نمونه‌های سخت را در زمان آموزش افزایش می‌دهد.",
        "fullAnswer": "SMOTE نمونه‌های مصنوعی از کلاس اقلیت می‌سازد، Focal Loss وزن نمونه‌های سخت را در زمان آموزش افزایش می‌دهد.\n\n**کاربرد:**\nحل مشکل کشف تقلب و تشخیص بیماری‌های نادر.",
        "tip": "از متداول‌ترین چالش‌های داده‌های واقعی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "How do you design a high-throughput model serving architecture with vLLM or Triton?",
        "summary_en": "By deploying optimized inference engines featuring Continuous Batching and PagedAttention to maximize GPU throughput.",
        "fullAnswer_en": "1. vLLM Advantage: Eliminates VRAM fragmentation and serves hundreds of concurrent user requests efficiently.",
        "tip_en": "The gold standard for production LLM serving."
    },
    {
        "id": 153,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "مفهوم Early Stopping در آموزش مدل‌های یادگیری عمیق چیست؟",
        "tags": [
            "#EarlyStopping",
            "#Overfitting",
            "#DeepLearning"
        ],
        "summary": "توقف خودکار آموزش زمانی که خطای داده Validation شروع به افزایش کند جهت جلوگیری از Overfitting.",
        "fullAnswer": "توقف خودکار آموزش زمانی که خطای داده Validation شروع به افزایش کند جهت جلوگیری از Overfitting.\n\n**کاربرد:**\nصرفه‌جویی در زمان GPU و حفظ بهترین وزن‌های مدل.",
        "tip": "تکنیک اجباری در آموزش شبکه‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is the role of Docker and Kubernetes in MLOps model deployment?",
        "summary_en": "Docker packages model code and CUDA dependencies into isolated containers, while Kubernetes manages orchestration and auto-scaling.",
        "fullAnswer_en": "1. Advantage: Eliminates 'works on my machine' CUDA driver mismatch bugs in cloud infrastructure.",
        "tip_en": "The backbone of modern MLOps infrastructure."
    },
    {
        "id": 154,
        "category": "ml_dl",
        "difficulty": "intermediate",
        "title": "نقش تابع فعال‌سازی GELU در مقایسه با ReLU در ترنسفورمرها چیست؟",
        "tags": [
            "#GELU",
            "#ReLU",
            "#ActivationFunction"
        ],
        "summary": "GELU ورودی‌ها را بر اساس توزیع نرمال به صورت نرم وزن‌دهی می‌کند و عملکرد بهتری در مدل‌های زبانی دارد.",
        "fullAnswer": "GELU ورودی‌ها را بر اساس توزیع نرمال به صورت نرم وزن‌دهی می‌کند و عملکرد بهتری در مدل‌های زبانی دارد.\n\n**استفاده:**\nدر تمام ترنسفورمرهای مدرن مانند BERT و GPT استفاده شده است.",
        "tip": "تابع اکتیویشن مدرن.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: نقش تابع فعال‌سازی GELU در مقایسه با ReLU در ترنسفورمرها چیست؟",
        "summary_en": "GELU ورودی‌ها را بر اساس توزیع نرمال به صورت نرم وزن‌دهی می‌کند و عملکرد بهتری در مدل‌های زبانی دارد.",
        "fullAnswer_en": "GELU ورودی‌ها را بر اساس توزیع نرمال به صورت نرم وزن‌دهی می‌کند و عملکرد بهتری در مدل‌های زبانی دارد.\n\n**استفاده:**\nدر تمام ترنسفورمرهای مدرن مانند BERT و GPT استفاده شده است.",
        "tip_en": "تابع اکتیویشن مدرن."
    },
    {
        "id": 155,
        "category": "ml_dl",
        "difficulty": "beginner",
        "title": "نحوه محاسبه تعداد پارامترهای قابل آموزش در یک لایه شبکه عصبی چیست؟",
        "tags": [
            "#NeuralNetworks",
            "#Parameters",
            "#Math"
        ],
        "summary": "ضرب تعداد ورودی‌ها در تعداد خروجی‌ها به اضافه تعداد بایاس‌ها: `(Input_Dim * Output_Dim) + Output_Dim`.",
        "fullAnswer": "ضرب تعداد ورودی‌ها در تعداد خروجی‌ها به اضافه تعداد بایاس‌ها: `(Input_Dim * Output_Dim) + Output_Dim`.\n\n**محاسبه:**\nپایه ریاضی تخمین حجم رم مورد نیاز برای مدل.",
        "tip": "سوال کلاسیک مصاحبه یادگیری عمیق.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Machine Learning & Deep Learning Question: نحوه محاسبه تعداد پارامترهای قابل آموزش در یک لایه شبکه عصبی چیست؟",
        "summary_en": "ضرب تعداد ورودی‌ها در تعداد خروجی‌ها به اضافه تعداد بایاس‌ها: `(Input_Dim * Output_Dim) + Output_Dim`.",
        "fullAnswer_en": "ضرب تعداد ورودی‌ها در تعداد خروجی‌ها به اضافه تعداد بایاس‌ها: `(Input_Dim * Output_Dim) + Output_Dim`.\n\n**محاسبه:**\nپایه ریاضی تخمین حجم رم مورد نیاز برای مدل.",
        "tip_en": "سوال کلاسیک مصاحبه یادگیری عمیق."
    },
    {
        "id": 156,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "مفهوم Data Drift و Concept Drift چیست و چگونه در تولید مانیتور می‌شوند؟",
        "tags": [
            "#DataDrift",
            "#ConceptDrift",
            "#MLOps"
        ],
        "summary": "Data Drift تغییر توزیع ورودی است، Concept Drift تغییر معنای رابطه ورودی و خروجی است.",
        "fullAnswer": "Data Drift تغییر توزیع ورودی است، Concept Drift تغییر معنای رابطه ورودی و خروجی است.\n\n**مانیتورینگ:**\nاستفاده از تست‌های آماری (مثل Kolmogorov-Smirnov) با ابزار Evidently AI.",
        "tip": "ضروری برای حفظ کیفیت مدل در پروداکشن.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: مفهوم Data Drift و Concept Drift چیست و چگونه در تولید مانیتور می‌شوند؟",
        "summary_en": "Data Drift تغییر توزیع ورودی است، Concept Drift تغییر معنای رابطه ورودی و خروجی است.",
        "fullAnswer_en": "Data Drift تغییر توزیع ورودی است، Concept Drift تغییر معنای رابطه ورودی و خروجی است.\n\n**مانیتورینگ:**\nاستفاده از تست‌های آماری (مثل Kolmogorov-Smirnov) با ابزار Evidently AI.",
        "tip_en": "ضروری برای حفظ کیفیت مدل در پروداکشن."
    },
    {
        "id": 157,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "چگونه یک سیستم سروینگ مدل پرسرعت با vLLM یا Triton Inference Server طراحی می‌کنید؟",
        "tags": [
            "#vLLM",
            "#Triton",
            "#ModelServing"
        ],
        "summary": "استفاده از سرورهای بهینه‌شده با Continuous Batching و PagedAttention جهت افزایش ۲۴ برابری Throughput.",
        "fullAnswer": "استفاده از سرورهای بهینه‌شده با Continuous Batching و PagedAttention جهت افزایش ۲۴ برابری Throughput.\n\n**مزیت vLLM:**\nحذف اتلاف حافظه VRAM و اجرای همزمان صدها درخواست.",
        "tip": "استاندارد استقرار سروری LLMها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: چگونه یک سیستم سروینگ مدل پرسرعت با vLLM یا Triton Inference Server طراحی می‌کنید؟",
        "summary_en": "استفاده از سرورهای بهینه‌شده با Continuous Batching و PagedAttention جهت افزایش ۲۴ برابری Throughput.",
        "fullAnswer_en": "استفاده از سرورهای بهینه‌شده با Continuous Batching و PagedAttention جهت افزایش ۲۴ برابری Throughput.\n\n**مزیت vLLM:**\nحذف اتلاف حافظه VRAM و اجرای همزمان صدها درخواست.",
        "tip_en": "استاندارد استقرار سروری LLMها."
    },
    {
        "id": 158,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "نقش Docker و Kubernetes در چرخه حیات استقرار مدل‌های هوش مصنوعی چیست؟",
        "tags": [
            "#Docker",
            "#Kubernetes",
            "#Deployment"
        ],
        "summary": "بسته‌بندی مدل با کانتینر ایزوله Docker و مدیریت مقیاس‌پذیری خودکار و GPU با Kubernetes.",
        "fullAnswer": "بسته‌بندی مدل با کانتینر ایزوله Docker و مدیریت مقیاس‌پذیری خودکار و GPU با Kubernetes.\n\n**مزیت:**\nحذف مشکل اختلال در درایورهای CUDA و لایبرری‌ها در سرورهای مختلف.",
        "tip": "پایه اصلی زیرساخت MLOps.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: نقش Docker و Kubernetes در چرخه حیات استقرار مدل‌های هوش مصنوعی چیست؟",
        "summary_en": "بسته‌بندی مدل با کانتینر ایزوله Docker و مدیریت مقیاس‌پذیری خودکار و GPU با Kubernetes.",
        "fullAnswer_en": "بسته‌بندی مدل با کانتینر ایزوله Docker و مدیریت مقیاس‌پذیری خودکار و GPU با Kubernetes.\n\n**مزیت:**\nحذف مشکل اختلال در درایورهای CUDA و لایبرری‌ها در سرورهای مختلف.",
        "tip_en": "پایه اصلی زیرساخت MLOps."
    },
    {
        "id": 159,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "معماری یک سیستم بهینه‌سازی Cache برای پرامپت‌ها (Semantic Caching) چیست؟",
        "tags": [
            "#SemanticCaching",
            "#GPTCache",
            "#Redis"
        ],
        "summary": "ذخیره پاسخ‌های قبلی در Vector DB و بازگرداندن ۵ میلی‌ثانیه‌ای پاسخ به سوالات مشابه معنایی.",
        "fullAnswer": "ذخیره پاسخ‌های قبلی در Vector DB و بازگرداندن ۵ میلی‌ثانیه‌ای پاسخ به سوالات مشابه معنایی.\n\n**کاهش هزینه:**\nکاهش چشمگیر هزینه‌های API و زمان پاسخ‌دهی به کاربران.",
        "tip": "سریع‌ترین روش کاهش هزینه عملیاتی AI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: معماری یک سیستم بهینه‌سازی Cache برای پرامپت‌ها (Semantic Caching) چیست؟",
        "summary_en": "ذخیره پاسخ‌های قبلی در Vector DB و بازگرداندن ۵ میلی‌ثانیه‌ای پاسخ به سوالات مشابه معنایی.",
        "fullAnswer_en": "ذخیره پاسخ‌های قبلی در Vector DB و بازگرداندن ۵ میلی‌ثانیه‌ای پاسخ به سوالات مشابه معنایی.\n\n**کاهش هزینه:**\nکاهش چشمگیر هزینه‌های API و زمان پاسخ‌دهی به کاربران.",
        "tip_en": "سریع‌ترین روش کاهش هزینه عملیاتی AI."
    },
    {
        "id": 160,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "چرخه CI/CD برای مدل‌های هوش مصنوعی (Continuous Training) چه تفاوتی با نرم‌افزار سنتی دارد؟",
        "tags": [
            "#CICD",
            "#MLOps",
            "#ContinuousTraining"
        ],
        "summary": "در ML علاوه بر تست کد، باید ارزیابی داده (Data Validation) و آموزش مجدد خودکار (Auto-Retrain) اضافه شود.",
        "fullAnswer": "در ML علاوه بر تست کد، باید ارزیابی داده (Data Validation) و آموزش مجدد خودکار (Auto-Retrain) اضافه شود.\n\n**تفاوت:**\nنسخه‌بندی همزمان کد، داده و مدل با ابزار DVC.",
        "tip": "شاخص ارشدیت مهندس MLOps.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: چرخه CI/CD برای مدل‌های هوش مصنوعی (Continuous Training) چه تفاوتی با نرم‌افزار سنتی دارد؟",
        "summary_en": "در ML علاوه بر تست کد، باید ارزیابی داده (Data Validation) و آموزش مجدد خودکار (Auto-Retrain) اضافه شود.",
        "fullAnswer_en": "در ML علاوه بر تست کد، باید ارزیابی داده (Data Validation) و آموزش مجدد خودکار (Auto-Retrain) اضافه شود.\n\n**تفاوت:**\nنسخه‌بندی همزمان کد، داده و مدل با ابزار DVC.",
        "tip_en": "شاخص ارشدیت مهندس MLOps."
    },
    {
        "id": 161,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "استراتژی‌های انتشار مدل مانند Canary Deployment و Blue-Green Deployment چیستند؟",
        "tags": [
            "#CanaryDeployment",
            "#BlueGreen",
            "#MLOps"
        ],
        "summary": "هدایت تدریجی ۵٪ ترافیک به مدل جدید (Canary) جهت تست پایداری قبل از جایگزینی کامل.",
        "fullAnswer": "هدایت تدریجی ۵٪ ترافیک به مدل جدید (Canary) جهت تست پایداری قبل از جایگزینی کامل.\n\n**کاهش ریسک:**\nجلوگیری از دان‌تایم و قطع ناگهانی سرویس در پروداکشن.",
        "tip": "معماری استقرار امن.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: استراتژی‌های انتشار مدل مانند Canary Deployment و Blue-Green Deployment چیستند؟",
        "summary_en": "هدایت تدریجی ۵٪ ترافیک به مدل جدید (Canary) جهت تست پایداری قبل از جایگزینی کامل.",
        "fullAnswer_en": "هدایت تدریجی ۵٪ ترافیک به مدل جدید (Canary) جهت تست پایداری قبل از جایگزینی کامل.\n\n**کاهش ریسک:**\nجلوگیری از دان‌تایم و قطع ناگهانی سرویس در پروداکشن.",
        "tip_en": "معماری استقرار امن."
    },
    {
        "id": 162,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "معماری Feature Store در سیستم‌های MLOps چه نقشی ایفا می‌کند؟",
        "tags": [
            "#FeatureStore",
            "#Feast",
            "#MLOps"
        ],
        "summary": "مخزن مرکزی برای ذخیره، نسخه‌بندی و اشتراک‌گذاری ویژگی‌های استخراج‌شده بین آموزش و سروینگ زنده.",
        "fullAnswer": "مخزن مرکزی برای ذخیره، نسخه‌بندی و اشتراک‌گذاری ویژگی‌های استخراج‌شده بین آموزش و سروینگ زنده.\n\n**ابزار مطرح:**\nاستفاده از فریم‌ورک Feast جهت یکسانی ویژگی‌ها در آموزش و استنتاج.",
        "tip": "مورد استفاده در سازمان‌های بزرگ.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: معماری Feature Store در سیستم‌های MLOps چه نقشی ایفا می‌کند؟",
        "summary_en": "مخزن مرکزی برای ذخیره، نسخه‌بندی و اشتراک‌گذاری ویژگی‌های استخراج‌شده بین آموزش و سروینگ زنده.",
        "fullAnswer_en": "مخزن مرکزی برای ذخیره، نسخه‌بندی و اشتراک‌گذاری ویژگی‌های استخراج‌شده بین آموزش و سروینگ زنده.\n\n**ابزار مطرح:**\nاستفاده از فریم‌ورک Feast جهت یکسانی ویژگی‌ها در آموزش و استنتاج.",
        "tip_en": "مورد استفاده در سازمان‌های بزرگ."
    },
    {
        "id": 163,
        "category": "mlops_system",
        "difficulty": "beginner",
        "title": "تفاوت بین Batch Inference و Real-time Streaming Inference چیست؟",
        "tags": [
            "#BatchInference",
            "#RealtimeInference",
            "#Architecture"
        ],
        "summary": "Batch پردازش حجیم داده‌ها در زمان‌های مشخص است، Real-time پاسخ‌دهی آنی زیر چند میلی‌ثانیه به درخواست کاربر است.",
        "fullAnswer": "Batch پردازش حجیم داده‌ها در زمان‌های مشخص است، Real-time پاسخ‌دهی آنی زیر چند میلی‌ثانیه به درخواست کاربر است.\n\n**انتخاب:**\nBatch برای پیش‌بینی‌های شبانه، Real-time برای چت‌بات‌ها.",
        "tip": "پایه سیستم‌دیزاین سرویس‌ها.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: تفاوت بین Batch Inference و Real-time Streaming Inference چیست؟",
        "summary_en": "Batch پردازش حجیم داده‌ها در زمان‌های مشخص است، Real-time پاسخ‌دهی آنی زیر چند میلی‌ثانیه به درخواست کاربر است.",
        "fullAnswer_en": "Batch پردازش حجیم داده‌ها در زمان‌های مشخص است، Real-time پاسخ‌دهی آنی زیر چند میلی‌ثانیه به درخواست کاربر است.\n\n**انتخاب:**\nBatch برای پیش‌بینی‌های شبانه، Real-time برای چت‌بات‌ها.",
        "tip_en": "پایه سیستم‌دیزاین سرویس‌ها."
    },
    {
        "id": 164,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "نحوه تبدیل مدل به فرمت ONNX و استفاده از ONNX Runtime برای بهینه‌سازی سرعت چیست؟",
        "tags": [
            "#ONNX",
            "#ONNXRuntime",
            "#Optimization"
        ],
        "summary": "تبدیل مدل PyTorch به فرمت عمومی ONNX جهت اجرای بسیار سریع‌تر روی پردازنده‌های مختلف.",
        "fullAnswer": "تبدیل مدل PyTorch به فرمت عمومی ONNX جهت اجرای بسیار سریع‌تر روی پردازنده‌های مختلف.\n\n**افزایش سرعت:**\nافزایش ۲ تا ۵ برابری سرعت استنتاج روی CPU و GPU.",
        "tip": "تکنیک عمومی بهینه‌سازی مدل.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: نحوه تبدیل مدل به فرمت ONNX و استفاده از ONNX Runtime برای بهینه‌سازی سرعت چیست؟",
        "summary_en": "تبدیل مدل PyTorch به فرمت عمومی ONNX جهت اجرای بسیار سریع‌تر روی پردازنده‌های مختلف.",
        "fullAnswer_en": "تبدیل مدل PyTorch به فرمت عمومی ONNX جهت اجرای بسیار سریع‌تر روی پردازنده‌های مختلف.\n\n**افزایش سرعت:**\nافزایش ۲ تا ۵ برابری سرعت استنتاج روی CPU و GPU.",
        "tip_en": "تکنیک عمومی بهینه‌سازی مدل."
    },
    {
        "id": 165,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "تکنیک TensorRT برای شتاب‌دهی استنتاج روی GPUهای Nvidia چیست؟",
        "tags": [
            "#TensorRT",
            "#NVIDIA",
            "#GPU"
        ],
        "summary": "موتور بهینه‌سازی انویدیا که با ادغام لایه‌ها و کوانتیزیشن، حداکثر سرعت استنتاج را روی کارت‌های انویدیا می‌گیرد.",
        "fullAnswer": "موتور بهینه‌سازی انویدیا که با ادغام لایه‌ها و کوانتیزیشن، حداکثر سرعت استنتاج را روی کارت‌های انویدیا می‌گیرد.\n\n**کاربرد:**\nبهینه‌سازی مدل‌های سنگین بینایی و متن برای پروداکشن.",
        "tip": "ابزار رسمی انویدیا برای شتاب‌دهی.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: تکنیک TensorRT برای شتاب‌دهی استنتاج روی GPUهای Nvidia چیست؟",
        "summary_en": "موتور بهینه‌سازی انویدیا که با ادغام لایه‌ها و کوانتیزیشن، حداکثر سرعت استنتاج را روی کارت‌های انویدیا می‌گیرد.",
        "fullAnswer_en": "موتور بهینه‌سازی انویدیا که با ادغام لایه‌ها و کوانتیزیشن، حداکثر سرعت استنتاج را روی کارت‌های انویدیا می‌گیرد.\n\n**کاربرد:**\nبهینه‌سازی مدل‌های سنگین بینایی و متن برای پروداکشن.",
        "tip_en": "ابزار رسمی انویدیا برای شتاب‌دهی."
    },
    {
        "id": 166,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "نحوه مانیتورینگ مصرف منابع (GPU Memory, GPU Utilization, Latency) در پروداکشن چیست؟",
        "tags": [
            "#Prometheus",
            "#Grafana",
            "#GPUMonitoring"
        ],
        "summary": "استفاده از Prometheus و dcgm-exporter انویدیا برای رسم داشبوردهای زنده مصرف GPU در Grafana.",
        "fullAnswer": "استفاده از Prometheus و dcgm-exporter انویدیا برای رسم داشبوردهای زنده مصرف GPU در Grafana.\n\n**داشبورد پایش:**\nدیدن لحظه‌ای پر شدن حافظه VRAM و داغ شدن سرورها.",
        "tip": "ضروری برای تیم‌های پشتیبانی زیرساخت.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is Vectorization in NumPy/Pandas and why is it faster than Python for-loops?",
        "summary_en": "Vectorization executes SIMD operations on contiguous memory arrays in compiled C code, bypassing Python GIL overhead.",
        "fullAnswer_en": "1. Speed Reason: NumPy arrays are stored in contiguous RAM blocks, executing matrix ops at C speed.",
        "tip_en": "Never use explicit Python for-loops over numeric arrays."
    },
    {
        "id": 167,
        "category": "mlops_system",
        "difficulty": "beginner",
        "title": "معماری Microservices در مقایسه با Monolithic برای استقرار سرویس‌های AI چیست؟",
        "tags": [
            "#Microservices",
            "#Monolith",
            "#Architecture"
        ],
        "summary": "جداسازی ماژول سنگین مدل هوش مصنوعی در یک سرویس ایزوله جهت عدم کندی سایر بخش‌های وب‌سایت.",
        "fullAnswer": "جداسازی ماژول سنگین مدل هوش مصنوعی در یک سرویس ایزوله جهت عدم کندی سایر بخش‌های وب‌سایت.\n\n**مقیاس‌پذیری:**\nامکان مقیاس‌دهی مجزای سرور GPU از سرورهای معمولی.",
        "tip": "طراحی استاندارد سیستم‌های مدرن.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "What is the Python GIL (Global Interpreter Lock) and how does it impact AI applications?",
        "summary_en": "GIL is a mutex preventing multithreaded Python bytecode execution across multiple CPU cores.",
        "fullAnswer_en": "1. AI Solution: Heavy libraries like PyTorch release GIL during C++/CUDA tensor operations.",
        "tip_en": "Shows deep understanding of Python internals."
    },
    {
        "id": 168,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "تکنیک Model Distillation (تقطیر دانش) برای کوچک‌سازی مدل‌ها چیست؟",
        "tags": [
            "#ModelDistillation",
            "#KnowledgeDistillation",
            "#Optimization"
        ],
        "summary": "آموزش یک مدل دانش‌آموز کوچک با استفاده از خروجی‌های احتمالاتی یک مدل معلم بزرگ جهت انتقال دانش.",
        "fullAnswer": "آموزش یک مدل دانش‌آموز کوچک با استفاده از خروجی‌های احتمالاتی یک مدل معلم بزرگ جهت انتقال دانش.\n\n**نتیجه:**\nداشتن مدلی با سایز ۱۰٪ اما دقت ۹۰٪ مدل اصلی.",
        "tip": "ساخت مدل‌های سریع و سبک.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: تکنیک Model Distillation (تقطیر دانش) برای کوچک‌سازی مدل‌ها چیست؟",
        "summary_en": "آموزش یک مدل دانش‌آموز کوچک با استفاده از خروجی‌های احتمالاتی یک مدل معلم بزرگ جهت انتقال دانش.",
        "fullAnswer_en": "آموزش یک مدل دانش‌آموز کوچک با استفاده از خروجی‌های احتمالاتی یک مدل معلم بزرگ جهت انتقال دانش.\n\n**نتیجه:**\nداشتن مدلی با سایز ۱۰٪ اما دقت ۹۰٪ مدل اصلی.",
        "tip_en": "ساخت مدل‌های سریع و سبک."
    },
    {
        "id": 169,
        "category": "mlops_system",
        "difficulty": "advanced",
        "title": "نحوه پیاده‌سازی سیستم‌های Auto-scaling بر اساس شاخص‌های اختصاصی GPU در Kubernetes چیست؟",
        "tags": [
            "#Autoscaling",
            "#KEDA",
            "#Kubernetes"
        ],
        "summary": "افزایش خودکار تعداد کانتینرها با KEDA بر اساس میزان صف درخواست‌ها یا درصد درگیر بودن GPU.",
        "fullAnswer": "افزایش خودکار تعداد کانتینرها با KEDA بر اساس میزان صف درخواست‌ها یا درصد درگیر بودن GPU.\n\n**مدیریت ترافیک:**\nجلوگیری از دان شدن سرور در زمان هجوم ناگهانی کاربران.",
        "tip": "تنظیم زیرساخت ابری هوشمند.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: نحوه پیاده‌سازی سیستم‌های Auto-scaling بر اساس شاخص‌های اختصاصی GPU در Kubernetes چیست؟",
        "summary_en": "افزایش خودکار تعداد کانتینرها با KEDA بر اساس میزان صف درخواست‌ها یا درصد درگیر بودن GPU.",
        "fullAnswer_en": "افزایش خودکار تعداد کانتینرها با KEDA بر اساس میزان صف درخواست‌ها یا درصد درگیر بودن GPU.\n\n**مدیریت ترافیک:**\nجلوگیری از دان شدن سرور در زمان هجوم ناگهانی کاربران.",
        "tip_en": "تنظیم زیرساخت ابری هوشمند."
    },
    {
        "id": 170,
        "category": "mlops_system",
        "difficulty": "intermediate",
        "title": "چالش‌های مدیریت ورژن داده و مدل با ابزار DVC (Data Version Control) چیست؟",
        "tags": [
            "#DVC",
            "#DataVersioning",
            "#MLOps"
        ],
        "summary": "اتصال نسخه‌های داده‌های چندین گیگابایتی به Commitهای Git بدون ذخیره فایل‌های سنگین در مخزن Git.",
        "fullAnswer": "اتصال نسخه‌های داده‌های چندین گیگابایتی به Commitهای Git بدون ذخیره فایل‌های سنگین در مخزن Git.\n\n**گردش کار:**\nDVC فایل‌های داده را در S3 یا MinIO ذخیره کرده و فایل متادیتا pointer در Git نگه می‌دارد.",
        "tip": "ابزار استاندارد نسخه‌بندی داده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "System Design & MLOps Question: چالش‌های مدیریت ورژن داده و مدل با ابزار DVC (Data Version Control) چیست؟",
        "summary_en": "اتصال نسخه‌های داده‌های چندین گیگابایتی به Commitهای Git بدون ذخیره فایل‌های سنگین در مخزن Git.",
        "fullAnswer_en": "اتصال نسخه‌های داده‌های چندین گیگابایتی به Commitهای Git بدون ذخیره فایل‌های سنگین در مخزن Git.\n\n**گردش کار:**\nDVC فایل‌های داده را در S3 یا MinIO ذخیره کرده و فایل متادیتا pointer در Git نگه می‌دارد.",
        "tip_en": "ابزار استاندارد نسخه‌بندی داده."
    },
    {
        "id": 171,
        "category": "data_python",
        "difficulty": "beginner",
        "title": "بردارسازی (Vectorization) در NumPy و Pandas چیست و چرا از حلقه‌های for سریع‌تر است؟",
        "tags": [
            "#Vectorization",
            "#NumPy",
            "#Pandas"
        ],
        "summary": "اجرای همزمان عملیات ریاضی روی کل آرایه با کدهای بهینه‌شده زبان C و دستورات SIMD پردازنده.",
        "fullAnswer": "اجرای همزمان عملیات ریاضی روی کل آرایه با کدهای بهینه‌شده زبان C و دستورات SIMD پردازنده.\n\n**علت سرعت:**\nآرایه‌های NumPy متوالی در رم ذخیره شده و قفل GIL پایتون را آزاد می‌کنند.",
        "tip": "هرگز در آرایه‌های عددی پایتون از حلقه for استفاده نکنید.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: بردارسازی (Vectorization) در NumPy و Pandas چیست و چرا از حلقه‌های for سریع‌تر است؟",
        "summary_en": "اجرای همزمان عملیات ریاضی روی کل آرایه با کدهای بهینه‌شده زبان C و دستورات SIMD پردازنده.",
        "fullAnswer_en": "اجرای همزمان عملیات ریاضی روی کل آرایه با کدهای بهینه‌شده زبان C و دستورات SIMD پردازنده.\n\n**علت سرعت:**\nآرایه‌های NumPy متوالی در رم ذخیره شده و قفل GIL پایتون را آزاد می‌کنند.",
        "tip_en": "هرگز در آرایه‌های عددی پایتون از حلقه for استفاده نکنید."
    },
    {
        "id": 172,
        "category": "data_python",
        "difficulty": "intermediate",
        "title": "مفهوم GIL (Global Interpreter Lock) در پایتون چیست و چگونه در کارهای AI تاثیر می‌گذارد؟",
        "tags": [
            "#GIL",
            "#Python",
            "#Multiprocessing"
        ],
        "summary": "قفل جهانی پایتون که اجازه اجرای همزمان کدهای پایتون روی چند هسته CPU را در نیدها نمی‌دهد.",
        "fullAnswer": "قفل جهانی پایتون که اجازه اجرای همزمان کدهای پایتون روی چند هسته CPU را در نیدها نمی‌دهد.\n\n**راهکار AI:**\nکتابخانه‌های سنگین مثل PyTorch محاسبات C++/CUDA را خارج از GIL اجرا می‌کنند.",
        "tip": "درک عمیق سیستم‌عامل پایتون.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: مفهوم GIL (Global Interpreter Lock) در پایتون چیست و چگونه در کارهای AI تاثیر می‌گذارد؟",
        "summary_en": "قفل جهانی پایتون که اجازه اجرای همزمان کدهای پایتون روی چند هسته CPU را در نیدها نمی‌دهد.",
        "fullAnswer_en": "قفل جهانی پایتون که اجازه اجرای همزمان کدهای پایتون روی چند هسته CPU را در نیدها نمی‌دهد.\n\n**راهکار AI:**\nکتابخانه‌های سنگین مثل PyTorch محاسبات C++/CUDA را خارج از GIL اجرا می‌کنند.",
        "tip_en": "درک عمیق سیستم‌عامل پایتون."
    },
    {
        "id": 173,
        "category": "data_python",
        "difficulty": "beginner",
        "title": "روش‌های برخورد با داده‌های گمشده (Missing Data) و نویز در دیتاست‌ها چیست؟",
        "tags": [
            "#MissingData",
            "#Pandas",
            "#DataCleaning"
        ],
        "summary": "حذف سطرها، جایگزینی با میانه/میانگین، یا استفاده از الگوریتم‌های پیشرفته مانند KNNImputer.",
        "fullAnswer": "حذف سطرها، جایگزینی با میانه/میانگین، یا استفاده از الگوریتم‌های پیشرفته مانند KNNImputer.\n\n**Imputation:**\nاستفاده از میانه برای داده‌های دارای چولگی شدید جهت عدم دستکاری توزیع داده.",
        "tip": "فاز اول پاکسازی داده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: روش‌های برخورد با داده‌های گمشده (Missing Data) و نویز در دیتاست‌ها چیست؟",
        "summary_en": "حذف سطرها، جایگزینی با میانه/میانگین، یا استفاده از الگوریتم‌های پیشرفته مانند KNNImputer.",
        "fullAnswer_en": "حذف سطرها، جایگزینی با میانه/میانگین، یا استفاده از الگوریتم‌های پیشرفته مانند KNNImputer.\n\n**Imputation:**\nاستفاده از میانه برای داده‌های دارای چولگی شدید جهت عدم دستکاری توزیع داده.",
        "tip_en": "فاز اول پاکسازی داده."
    },
    {
        "id": 174,
        "category": "data_python",
        "difficulty": "advanced",
        "title": "چگونه نشتی حافظه (Memory Leak) و کمبود RAM را در پردازش داده‌های بزرگ مدیریت می‌کنید؟",
        "tags": [
            "#MemoryLeak",
            "#PyTorch",
            "#Generators"
        ],
        "summary": "استفاده از Generatorها، پاکسازی تانسورها با torch.cuda.empty_cache() و استفاده از with torch.no_grad().",
        "fullAnswer": "استفاده از Generatorها، پاکسازی تانسورها با torch.cuda.empty_cache() و استفاده از with torch.no_grad().\n\n**no_grad:**\nجلوگیری از ساخت گراف گرادیان‌ها در زمان استنتاج جهت آزادسازی رم.",
        "tip": "نکته حیاتی پردازش داده‌های کلان.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: چگونه نشتی حافظه (Memory Leak) و کمبود RAM را در پردازش داده‌های بزرگ مدیریت می‌کنید؟",
        "summary_en": "استفاده از Generatorها، پاکسازی تانسورها با torch.cuda.empty_cache() و استفاده از with torch.no_grad().",
        "fullAnswer_en": "استفاده از Generatorها، پاکسازی تانسورها با torch.cuda.empty_cache() و استفاده از with torch.no_grad().\n\n**no_grad:**\nجلوگیری از ساخت گراف گرادیان‌ها در زمان استنتاج جهت آزادسازی رم.",
        "tip_en": "نکته حیاتی پردازش داده‌های کلان."
    },
    {
        "id": 175,
        "category": "data_python",
        "difficulty": "beginner",
        "title": "تفاوت‌های اصلی بین PyTorch و TensorFlow/Keras در پروژه‌های مدرن هوش مصنوعی چیست؟",
        "tags": [
            "#PyTorch",
            "#TensorFlow",
            "#DeepLearning"
        ],
        "summary": "PyTorch دارای گراف محاسباتی پویا (Dynamic Graph) است و دیباگ بسیار ساده‌تری ارائه می‌دهد.",
        "fullAnswer": "PyTorch دارای گراف محاسباتی پویا (Dynamic Graph) است و دیباگ بسیار ساده‌تری ارائه می‌دهد.\n\n**تسلط بر بازار:**\nبیش از ۹۰٪ مقالات پژوهشی و مدل‌های HuggingFace با PyTorch نوشته می‌شوند.",
        "tip": "فریم‌ورک اصلی انتخاب مهندسان AI.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: تفاوت‌های اصلی بین PyTorch و TensorFlow/Keras در پروژه‌های مدرن هوش مصنوعی چیست؟",
        "summary_en": "PyTorch دارای گراف محاسباتی پویا (Dynamic Graph) است و دیباگ بسیار ساده‌تری ارائه می‌دهد.",
        "fullAnswer_en": "PyTorch دارای گراف محاسباتی پویا (Dynamic Graph) است و دیباگ بسیار ساده‌تری ارائه می‌دهد.\n\n**تسلط بر بازار:**\nبیش از ۹۰٪ مقالات پژوهشی و مدل‌های HuggingFace با PyTorch نوشته می‌شوند.",
        "tip_en": "فریم‌ورک اصلی انتخاب مهندسان AI."
    },
    {
        "id": 176,
        "category": "data_python",
        "difficulty": "beginner",
        "title": "متد groupby در Pandas چگونه کار می‌کند و مفهوم Split-Apply-Combine چیست؟",
        "tags": [
            "#Pandas",
            "#Groupby",
            "#DataAnalysis"
        ],
        "summary": "تقسیم داده‌ها به گروه‌ها، اعمال تابع محاسباتی روی هر گروه و ادغام مجدد نتایج.",
        "fullAnswer": "تقسیم داده‌ها به گروه‌ها، اعمال تابع محاسباتی روی هر گروه و ادغام مجدد نتایج.\n\n**مراحل:**\nSplit: گروه‌بندی، Apply: محاسبات، Combine: ادغام در جدول جدید.",
        "tip": "اصلی‌ترین متد خلاصه‌سازی داده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: متد groupby در Pandas چگونه کار می‌کند و مفهوم Split-Apply-Combine چیست؟",
        "summary_en": "تقسیم داده‌ها به گروه‌ها، اعمال تابع محاسباتی روی هر گروه و ادغام مجدد نتایج.",
        "fullAnswer_en": "تقسیم داده‌ها به گروه‌ها، اعمال تابع محاسباتی روی هر گروه و ادغام مجدد نتایج.\n\n**مراحل:**\nSplit: گروه‌بندی، Apply: محاسبات، Combine: ادغام در جدول جدید.",
        "tip_en": "اصلی‌ترین متد خلاصه‌سازی داده."
    },
    {
        "id": 177,
        "category": "data_python",
        "difficulty": "intermediate",
        "title": "تفاوت‌های Copy و View در آرایه‌های NumPy و Pandas چیست؟",
        "tags": [
            "#NumPy",
            "#Pandas",
            "#Memory"
        ],
        "summary": "View ارجاعی به همان آدرس حافظه اصلی است، Copy حافظه جدیدی در RAM اختصاص می‌دهد.",
        "fullAnswer": "View ارجاعی به همان آدرس حافظه اصلی است، Copy حافظه جدیدی در RAM اختصاص می‌دهد.\n\n**خطای متداول:**\nعدم توجه باعث بروز خطای معروف SettingWithCopyWarning در Pandas می‌شود.",
        "tip": "جلوگیری از باگ‌های پنهان داده.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: تفاوت‌های Copy و View در آرایه‌های NumPy و Pandas چیست؟",
        "summary_en": "View ارجاعی به همان آدرس حافظه اصلی است، Copy حافظه جدیدی در RAM اختصاص می‌دهد.",
        "fullAnswer_en": "View ارجاعی به همان آدرس حافظه اصلی است، Copy حافظه جدیدی در RAM اختصاص می‌دهد.\n\n**خطای متداول:**\nعدم توجه باعث بروز خطای معروف SettingWithCopyWarning در Pandas می‌شود.",
        "tip_en": "جلوگیری از باگ‌های پنهان داده."
    },
    {
        "id": 178,
        "category": "data_python",
        "difficulty": "beginner",
        "title": "تفاوت بین List, Tuple, Set و Dictionary در پایتون از نظر پیچیدگی زمانی چیست؟",
        "tags": [
            "#PythonDataStructures",
            "#TimeComplexity",
            "#Python"
        ],
        "summary": "جستجو در List و Tuple زمان O(N) دارد، جستجو در Set و Dictionary بر اساس Hash Table زمان O(1) دارد.",
        "fullAnswer": "جستجو در List و Tuple زمان O(N) دارد، جستجو در Set و Dictionary بر اساس Hash Table زمان O(1) دارد.\n\n**بهینه‌سازی:**\nبرای سرچ سریع وجود یک عنصر همیشه از Set استفاده کنید.",
        "tip": "اصول الگوریتم در پایتون.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: تفاوت بین List, Tuple, Set و Dictionary در پایتون از نظر پیچیدگی زمانی چیست؟",
        "summary_en": "جستجو در List و Tuple زمان O(N) دارد، جستجو در Set و Dictionary بر اساس Hash Table زمان O(1) دارد.",
        "fullAnswer_en": "جستجو در List و Tuple زمان O(N) دارد، جستجو در Set و Dictionary بر اساس Hash Table زمان O(1) دارد.\n\n**بهینه‌سازی:**\nبرای سرچ سریع وجود یک عنصر همیشه از Set استفاده کنید.",
        "tip_en": "اصول الگوریتم در پایتون."
    },
    {
        "id": 179,
        "category": "data_python",
        "difficulty": "intermediate",
        "title": "مفهوم Decoratorها در پایتون و کاربرد آن‌ها در لاگ‌گیری و اندازه‌گیری زمان اجرا چیست؟",
        "tags": [
            "#Decorators",
            "#Python",
            "#Logging"
        ],
        "summary": "توابعی که تابع دیگری را به عنوان ورودی گرفته و رفتار آن را بدون تغییر کد اصلی توسعه می‌دهند.",
        "fullAnswer": "توابعی که تابع دیگری را به عنوان ورودی گرفته و رفتار آن را بدون تغییر کد اصلی توسعه می‌دهند.\n\n**کاربرد در AI:**\nساخت دکوراتور `@timer` برای ثبت زمان اجرای هر گام مدل.",
        "tip": "کدنویسی تمیز در پایتون.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: مفهوم Decoratorها در پایتون و کاربرد آن‌ها در لاگ‌گیری و اندازه‌گیری زمان اجرا چیست؟",
        "summary_en": "توابعی که تابع دیگری را به عنوان ورودی گرفته و رفتار آن را بدون تغییر کد اصلی توسعه می‌دهند.",
        "fullAnswer_en": "توابعی که تابع دیگری را به عنوان ورودی گرفته و رفتار آن را بدون تغییر کد اصلی توسعه می‌دهند.\n\n**کاربرد در AI:**\nساخت دکوراتور `@timer` برای ثبت زمان اجرای هر گام مدل.",
        "tip_en": "کدنویسی تمیز در پایتون."
    },
    {
        "id": 180,
        "category": "data_python",
        "difficulty": "intermediate",
        "title": "نحوه کار با کتابخانه Asyncio در پایتون برای ارسال همزمان صدها درخواست به APIهای LLM چیست؟",
        "tags": [
            "#Asyncio",
            "#Python",
            "#Concurrency"
        ],
        "summary": "اجرای غیربسته‌ای (Non-blocking I/O) درخواست‌های شبکه بدون گیر کردن برنامه روی منتظر ماندن پاسخ API.",
        "fullAnswer": "اجرای غیربسته‌ای (Non-blocking I/O) درخواست‌های شبکه بدون گیر کردن برنامه روی منتظر ماندن پاسخ API.\n\n**سرعت:**\nارسال همزمان ۱۰۰ پرامپت در ۵ ثانیه به جای ۵۰ ثانیه متوالی.",
        "tip": "کلید ساخت سرویس‌های پرسرعت API.",
        "codeSnippet": "",
        "diagramSvg": "",
        "title_en": "Python & Data Analysis Technical Question: نحوه کار با کتابخانه Asyncio در پایتون برای ارسال همزمان صدها درخواست به APIهای LLM چیست؟",
        "summary_en": "اجرای غیربسته‌ای (Non-blocking I/O) درخواست‌های شبکه بدون گیر کردن برنامه روی منتظر ماندن پاسخ API.",
        "fullAnswer_en": "اجرای غیربسته‌ای (Non-blocking I/O) درخواست‌های شبکه بدون گیر کردن برنامه روی منتظر ماندن پاسخ API.\n\n**سرعت:**\nارسال همزمان ۱۰۰ پرامپت در ۵ ثانیه به جای ۵۰ ثانیه متوالی.",
        "tip_en": "کلید ساخت سرویس‌های پرسرعت API."
    }
];
