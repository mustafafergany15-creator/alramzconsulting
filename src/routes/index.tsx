import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Phone, Mail, Users, Sparkles, Target, Award,
  TrendingUp, FileSearch, Briefcase, Compass, ShieldCheck,
  ArrowLeft, MapPin, Facebook, Linkedin, Instagram,
  Eye, Flag, ListChecks, Scale, Lightbulb, Heart, Building2,
  GraduationCap, CheckCircle2, BarChart3, Calculator, Cog,
  Search, PenTool, PlayCircle, Activity, Repeat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function AnimatedNumber({
  value,
  duration = 1600,
  suffix = "",
  prefix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const from = 0;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(from + (value - from) * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "دورنا", href: "#role" },
  { label: "الرؤية والرسالة", href: "#vision" },
  { label: "خدماتنا", href: "#services" },
  { label: "منهجيتنا", href: "#methodology" },
  { label: "فريقنا", href: "#team" },
  { label: "تواصل معنا", href: "#contact" },
];

const SOCIAL = {
  facebook: "https://www.facebook.com/share/18UzuBstJe/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/alramzalmethly?igsh=MXVuNjFjcDRramdpMA==",
  linkedin: "https://www.linkedin.com/company/al-ramz-al-methaly/posts/?feedView=all",
  whatsapp: "https://wa.me/201204442060",
  whatsappDisplay: "+20 120 444 2060",
  email: "alramzalmethaly@gmail.com",
};

const features = [
  { icon: Users, title: "فريق من الخبراء", desc: "نخبة من المستشارين ذوي الخبرات الواسعة في الأسواق الخليجية والعربية." },
  { icon: Sparkles, title: "حلول مخصصة", desc: "نصمم حلولاً مالية وإدارية تناسب طبيعة عملك وأهدافك الاستراتيجية." },
  { icon: Target, title: "نتائج ملموسة", desc: "نلتزم بتحقيق نتائج قابلة للقياس ترفع كفاءة وأرباح منشأتك." },
  { icon: Award, title: "أعلى معايير الجودة", desc: "نعمل وفق أرقى المعايير المهنية العالمية في الاستشارات المالية." },
];

const services = [
  { icon: TrendingUp, title: "الاستشارات المالية والخدمات المحاسبية", desc: "تحليل مالي معمّق، تخطيط استراتيجي، وإدارة تدفقات نقدية لبناء نظام مالي سليم وضمان الاستغلال الأمثل للموارد." },
  { icon: Briefcase, title: "الاستشارات الإدارية", desc: "إعادة هيكلة المؤسسات، تطوير السياسات والإجراءات، وبناء أنظمة الحوكمة لرفع الكفاءة التشغيلية." },
  { icon: FileSearch, title: "دراسات الجدوى", desc: "دراسات شاملة تكشف فرص النجاح وتقلل مخاطر القرارات الاستثمارية وتدعم اتخاذ القرار." },
  { icon: Calculator, title: "هندسة التكاليف", desc: "تحليل الانحرافات وتصميم أنظمة تكاليف متطورة لقطاع المطاعم والكافيهات والمصانع." },
  { icon: Cog, title: "تطبيق أنظمة الـ ERP", desc: "اختيار وتصميم وتطبيق برامج تخطيط موارد المؤسسات لضمان دقة وسرعة التقارير." },
  { icon: ShieldCheck, title: "الحوكمة وإدارة المخاطر", desc: "أطر رقابة داخلية متكاملة لحماية الأصول وضمان الامتثال للمعايير الدولية والمحلية." },
];

const strategicGoals = [
  { icon: ShieldCheck, title: "حوكمة الأنظمة المالية", desc: "بناء وتطوير هياكل مالية متينة تضمن الامتثال الكامل للمعايير الدولية والمحلية لتحقيق أعلى درجات الكفاءة المالية وزيادة الربحية." },
  { icon: Calculator, title: "رفع الكفاءة التشغيلية", desc: "تقديم حلول نوعية في هندسة التكاليف خاصة في قطاع الأغذية والمشروبات لتعظيم الربحية وتقليل الهدر." },
  { icon: Cog, title: "التحول الرقمي المالي", desc: "دعم الشركات في الانتقال نحو الأنظمة السحابية والأتمتة المحاسبية لضمان سرعة ودقة التقارير." },
  { icon: GraduationCap, title: "التطوير المستمر", desc: "تدريب وتطوير القائمين بالعمل المحاسبي والإداري لرفع كفاءة الأداء." },
  { icon: Award, title: "الريادة في الاستشارات", desc: "تقديم دعم احترافي لخدمات استشارية مالية وإدارية عالية الجودة." },
  { icon: Users, title: "بناء الشراكات المستدامة", desc: "لا نكتفي بتقديم التوصيات، بل نهدف إلى مرافقة عملائنا في مراحل التنفيذ والرقابة لضمان تحقيق النتائج المرجوة من خلال خدمات متميزة وشفافية عالية." },
];

const financialServices = [
  {
    title: "التحليل والتقييم المالي",
    items: [
      "دراسة شاملة للوضع المالي الحالي للعميل لتحديد نقاط القوة والضعف والمخاطر.",
      "اعداد ومراجعة وتحليل القوائم والتقارير المالية لإدارة الشركة.",
      "إدارة التدفقات النقدية وتحسينها.",
    ],
  },
  {
    title: "التخطيط الاستراتيجي والتشغيلي",
    items: [
      "إعداد الخطط المالية طويلة وقصيرة المدى والموازنات التقديرية.",
      "تحديد هيكل رأس المال الأمثل واختيار مصادر التمويل المناسبة.",
    ],
  },
  {
    title: "إدارة المخاطر والامتثال",
    items: [
      "وضع استراتيجيات لتقليل المخاطر المالية المحتملة.",
      "تقديم استشارات حول الضرائب والزكاة لضمان الامتثال القانوني.",
    ],
  },
  {
    title: "دعم القرارات الاستثمارية",
    items: [
      "إجراء دراسات الجدوى الاقتصادية لتقييم المشاريع والفرص الجديدة.",
      "اختيار أفضل الطرق الاستثمارية.",
    ],
  },
  {
    title: "المحاسبة والإشراف",
    items: [
      "المساعدة في اختيار برنامج محاسبي متكامل (ERP).",
      "تصميم وتطبيق الأنظمة المحاسبية ودورات العمل المستندية المتكاملة.",
      "المساعدة في ادخالات المعاملات المالية (القيود المحاسبية).",
      "الإشراف على الدورة المحاسبية والرقابية والتأكد من إعداد القوائم المالية وفقاً للمعايير الدولية.",
      "تدريب وتطوير المحاسبين لرفع كفاءتهم.",
      "تطوير نظم الرقابة الداخلية لضمان حماية الأصول ودقة البيانات.",
    ],
  },
];

const adminServices = [
  {
    title: "التنظيم والهيكلة",
    items: [
      "إعادة هيكلة المؤسسة وتصميم الهياكل التنظيمية التي تتناسب مع الأهداف الاستراتيجية.",
      "توصيف وتحديد صلاحيات ومسؤوليات الوظائف والمستويات الإدارية.",
      "وضع اللوائح التنظيمية والادارية الداخلية.",
    ],
  },
  {
    title: "تطوير العمليات والسياسات",
    items: [
      "وضع وتطوير السياسات والإجراءات الإدارية والتشغيلية الموحدة (SOPs).",
      "تحسين كفاءة العمليات التشغيلية (مثل المشتريات، الإنتاج، المخازن) لخفض التكاليف وزيادة الجودة.",
    ],
  },
  {
    title: "التخطيط الاستراتيجي",
    items: [
      "صياغة الرؤية والرسالة والقيم وتحديد الأهداف الاستراتيجية.",
      "بناء خطط العمل التفصيلية ومؤشرات الأداء الرئيسية (KPIs) لمتابعة التنفيذ.",
    ],
  },
  {
    title: "إدارة الأداء والموارد البشرية",
    items: [
      "تطوير أنظمة لتقييم أداء الموظفين ورفع الكفاءات القيادية والإدارية.",
      "تقديم حلول لتحسين رضا الموظفين وإدارة التغيير داخل المنظمة.",
    ],
  },
];

const methodology = [
  {
    icon: Search,
    title: "الاكتشاف والتشخيص",
    lead: "نبدأ بالاستماع إليكم ودراسة الوضع الراهن لشركتكم.",
    items: [
      "عقد جلسات استشارية أولية لفهم أهدافكم وتحدياتكم.",
      "جمع البيانات المالية والإدارية الحالية وتحليلها.",
      "تشخيص الفجوات في النظام المحاسبي أو الهيكل الإداري.",
    ],
  },
  {
    icon: PenTool,
    title: "التخطيط وبناء الاستراتيجية",
    lead: "نضع خارطة طريق مناسبة لحجم أعمالكم.",
    items: [
      "تصميم الحلول المالية والإدارية البديلة (تطوير الدورة المستندية، إعادة الهيكلة، خفض التكاليف).",
      "إعداد الموازنات التقديرية والتوقعات المالية المستقبلية.",
      "تحديد مؤشرات الأداء الرئيسية (KPIs).",
    ],
  },
  {
    icon: PlayCircle,
    title: "التنفيذ",
    lead: "تطبيقها على أرض الواقع.",
    items: [
      "الإشراف على ضبط القيود والأنظمة المحاسبية وتطوير السياسات والإجراءات.",
      "تدريب الكوادر الداخلية على الأنظمة والسياسات الجديدة.",
      "جدولة التزاماتكم المالية والضريبية وفقاً للقوانين السارية.",
    ],
  },
  {
    icon: Activity,
    title: "المراقبة والتقييم",
    lead: "نتابع سير العمل لضمان أن كل شيء يسير وفق الخطة الموضوعة.",
    items: [
      "إصدار تقارير دورية (شهرية/ربع سنوية) توضح الأداء المالي والإداري.",
      "مقارنة الأداء الفعلي بالمستهدف ومعالجة أي انحرافات فوراً.",
      "مراجعة وتدقيق الحسابات لضمان أعلى درجات الشفافية والامتثال.",
    ],
  },
  {
    icon: Repeat,
    title: "التطوير المستمر والاستدامة",
    lead: "شركاء نجاح دائمين.",
    items: [
      "تقديم توصيات دورية لمواكبة التغيرات الاقتصادية أو القانونية.",
      "تطوير الاستراتيجيات المالية والإدارية لدعم التوسع المستقبلي للشركة.",
    ],
  },
];

const coreValues = [
  { icon: ShieldCheck, title: "الأمانة والسرية المطلقة", desc: "نتعامل مع بيانات عملائنا بوصفها أمانة مهنية، ونلتزم بأعلى معايير السرية والخصوصية في كافة مراحل العمل." },
  { icon: Target, title: "الدقة المتناهية", desc: "نعتمد منهجية تدقيق صارمة تضمن صحة التقارير والتحليلات المالية والامتثال للمعايير المالية الدولية." },
  { icon: Users, title: "الشراكة من أجل النمو", desc: "شركاء نجاح نعمل جنباً إلى جنب مع عملائنا لتحقيق أهدافهم الاستراتيجية وتجاوز التحديات." },
  { icon: Eye, title: "الشفافية والوضوح", desc: "نقدّم الحقائق المالية والإدارية كما هي، مع توفير حلول واقعية وقابلة للتنفيذ." },
  { icon: Lightbulb, title: "الابتكار في الحلول", desc: "نسعى دائماً لدمج التكنولوجيا والأنظمة الذكية في العمليات المالية والإدارية لضمان كفاءة أعلى وجهد أقل." },
  { icon: Heart, title: "القيمة المضافة", desc: "هدفنا الأساسي تحقيق أعلى عائد وقيمة مضافة لكل عميل نعمل معه." },
];

const advantages = [
  "الاحترافية ودقة الأداء والالتزام بأعلى معايير السرية المهنية والمواثيق الأخلاقية.",
  "خبرات كبيرة في الأنظمة وبرامج ERP المنتشرة بالمملكة العربية السعودية.",
  "الامتثال التام لأحدث المعايير الدولية للتقرير المالي (IFRS) والأنظمة الضريبية المحلية.",
  "نعمل كشركاء هدفهم تحقيق أعلى عائد وقيمة مضافة، لا كمزوّد خدمة.",
  "الابتكار وتقديم حلول قابلة للتطبيق سمة رئيسية لفريق عملنا.",
  "استشارة مالية وإدارية أولية بدون مقابل.",
  "خبرة استثنائية في تصميم نظم تكاليف للمطاعم والكافيهات وهندسة الوصفات (Recipe Engineering).",
];

const sectorExperience = [
  {
    title: "قطاع الأغذية والمطاعم",
    items: [
      "مصانع إنتاج وتصنيع لحوم الدواجن ومصانع الأعلاف بمصر.",
      "شركة مجموعة مصانع منتجات الألبان والعصائر والحلويات شهيرة بمصر.",
      "عدة شركات مطاعم كبرى في الرياض (أحياء طويق والنهضة والياسمين والروابي) والقاهرة (مدينة نصر).",
    ],
  },
  {
    title: "القطاع الصناعي",
    items: [
      "شركة صناعة المنظفات الكيميائية والورقية والبلاستيكية بالدمام (+15 فرعاً).",
      "شركة مصانع المنتجات البلاستيكية الكبرى بالعاشر من رمضان، المورد الرئيسي لشركات الطيران والفنادق العالمية.",
      "شركة مصانع للموبيليا والأثاث الراقي بمصر.",
    ],
  },
  {
    title: "القطاعات الخدمية والتجارية",
    items: [
      "شركة كبرى للاستشارات المهنية لتقييم الأصول في الرياض، وهي من الشركات المعتمدة والمتميزة في المملكة العربية السعودية.",
      "شركة مجموعة قابضة من أكبر العلامات التجارية في مجال الأدوية البيطرية في مصر.",
      "شركات استثمار وتطوير عقاري.",
    ],
  },
];


function TopBar() {
  return (
    <div className="bg-emerald-gradient text-ivory text-sm">
      <div className="container mx-auto flex flex-wrap items-center gap-6 px-6 py-2.5">
        <div className="flex items-center gap-6">
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ivory transition">
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span dir="ltr">{SOCIAL.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${SOCIAL.email}`} className="hidden sm:flex items-center gap-2 hover:text-ivory transition">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {SOCIAL.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function Navbar() {
  const ids = navItems.map((n) => n.href.replace("#", ""));
  const active = useActiveSection(ids);
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gold/20 shadow-soft">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="الرمز المثالي - للاستشارات المالية والإدارية"
            width={384}
            height={210}
            decoding="async"
            fetchPriority="high"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((n) => {
            const id = n.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`font-medium transition relative group ${
                    isActive ? "text-gold" : "text-foreground/85 hover:text-gold"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute -bottom-1 right-0 h-0.5 bg-gold-gradient transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#contact" className="bg-emerald-gradient text-ivory px-6 py-2.5 rounded-full text-sm font-semibold shadow-luxury transition-all hover:shadow-gold hover:-translate-y-0.5 hover:scale-[1.03]">
          احجز استشارة
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} loading="lazy" decoding="async" />
      </div>
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-gradient opacity-[0.16] blur-2xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-gradient opacity-[0.12] blur-2xl" />

      <div className="container relative mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center px-6 py-14 md:py-20 lg:py-28">
        {/* Text right (RTL natural) */}
        <div className="order-2 lg:order-1 text-right">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-emerald tracking-wide">
            <span className="h-2 w-2 rounded-full bg-gold-gradient" />
            شركة استشارات مالية وإدارية رائدة
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-bold text-emerald-deep leading-[1.25]">
            نحو نجاح
            <span className="block text-emerald-gradient">مستدام</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-emerald">
            لحلول مالية وإدارية متكاملة
          </p>
          <p className="mt-6 text-base sm:text-lg text-foreground/75 leading-relaxed max-w-[54ch] mr-0 ml-auto">
            في <strong className="text-emerald">الرمز المثالي</strong> نقدّم استشارات احترافية تجمع بين الخبرة المحلية والمعايير العالمية،
            لنرسم معك خارطة طريق واضحة نحو نمو منشأتك واستدامة أعمالها في الأسواق العربية.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-end">
            <a href="#contact" className="group bg-emerald-gradient text-ivory px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-luxury transition-all hover:shadow-gold hover:-translate-y-1 hover:scale-[1.03] flex items-center gap-2">
              تواصل معنا
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" />
            </a>
            <a href="#services" className="bg-gold-gradient text-emerald-deep px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-gold transition-all hover:shadow-luxury hover:-translate-y-1 hover:scale-[1.03] hover:brightness-105">
              استكشف خدماتنا
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 max-w-md mr-0 ml-auto">
            {[
              { v: 30, suffix: "+", l: "عام خبرة الفريق" },
              { v: null as number | null, text: "IFRS", l: "معايير دولية" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-gradient tabular-nums tracking-tight">
                  {s.v === null ? s.text : <AnimatedNumber value={s.v} suffix={s.suffix} />}
                </div>
                <div className="text-[11px] sm:text-xs text-foreground/60 mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo left */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
          <div className="relative inline-block">
            {/* Calm gold halo that blends into the ivory background */}
            <div
              aria-hidden
              className="absolute -inset-20 rounded-full blur-3xl opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent 72%)",
              }}
            />
            <img
              src={logo}
              alt="شعار الرمز المثالي"
              width={384}
              height={210}
              decoding="async"
              fetchPriority="high"
              className="relative w-[220px] sm:w-[300px] md:w-[420px] lg:w-[475px] h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 14px 22px rgba(1,67,45,0.18)) drop-shadow(0 3px 6px rgba(205,164,94,0.12))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-emerald font-semibold tracking-widest text-sm">لماذا الرمز المثالي</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-emerald-deep mt-3">
            مميزات تصنع الفارق
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="group relative bg-ivory rounded-3xl p-8 border border-gold/15 hover:border-gold/60 transition-all hover:-translate-y-2 hover:shadow-luxury overflow-hidden flex flex-col">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="font-display text-4xl font-bold text-gold tabular-nums">0{i + 1}</div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury group-hover:scale-110 transition shrink-0">
                  <f.icon className="h-7 w-7 text-gold" />
                </div>
              </div>
              <h3 className="mt-5 font-bold text-xl text-emerald-deep leading-[1.6] text-right">{f.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-[1.85] text-right">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-emerald-gradient opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="text-right">
          <span className="text-emerald font-semibold tracking-widest text-sm">من نحن</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3 leading-tight">
            شركاؤكم نحو <span className="text-emerald-gradient">التميّز المؤسسي</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-loose">
            <strong className="text-emerald">شركة الرمز المثالي للاستشارات المالية والإدارية</strong> — شركة مصرية ذات مسؤولية محدودة خاضعة لأحكام القانون رقم 159 لسنة 1981، ومسجلة بالسجل التجاري برقم 55295، ويقع مقرها الرئيسي بالجيزة — جمهورية مصر العربية. نلتزم بتقديم خدمات استشارية محاسبية وإدارية عالية الجودة وذات قيمة مضافة وفقاً للمعايير الدولية للتقارير المالية لتلبية احتياجات عملائنا.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-gradient rounded-3xl p-6 md:p-8 text-ivory shadow-luxury translate-y-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-gold-soft tabular-nums">
                <AnimatedNumber value={30} suffix="+" />
              </div>
              <div className="mt-2 text-sm opacity-90">عاماً من خبرة فريق العمل</div>
            </div>
            <div className="glass-card rounded-3xl p-6 md:p-8 shadow-gold">
              <div className="font-display text-4xl md:text-5xl font-bold text-emerald-gradient tabular-nums">
                <AnimatedNumber value={2} />
              </div>
              <div className="mt-2 text-sm text-foreground/70">سوقان: مصر والسعودية</div>
            </div>
            <div className="bg-gold-gradient rounded-3xl p-6 md:p-8 text-emerald-deep shadow-gold col-span-2 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold">IFRS</div>
              <div className="mt-2 text-sm font-semibold">وفق المعايير الدولية للتقارير المالية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders' message */}
      <div className="container mx-auto px-6 mt-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-right shadow-luxury">
          <span className="text-emerald font-semibold tracking-widest text-sm">كلمة المؤسسين</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mt-3">لماذا تأسسنا؟</h3>
          <div className="mt-6 space-y-5 text-foreground/80 leading-loose text-lg">
            <p>
              إن الهدف الأسمى الذي انطلقت منه شركتنا هو تخفيف الأعباء المالية والإدارية عن كاهل المنشآت الصغيرة والمتوسطة، لتكون شراكتنا هي الحل الأمثل لتحديات النمو.
            </p>
            <p>
              ندرك تماماً أنه من الصعب على المنشآت في هذا القطاع استقطاب والاحتفاظ بكفاءات وخبرات متخصصة وعالية الأجر في شتى فروع المحاسبة والإدارة بشكل دائم، خاصة وأن بعض هذه المهام الحساسة لا يتطلب تواجداً يومياً كامل الوقت، بل يحتاج إلى إشراف وتوجيه دوري محترف وحيادية تامة.
            </p>
            <p>
              ومن هنا، واعتزازاً بخبرات فريقنا الممتدة لأكثر من ثلاثين عاماً في مختلف الأنشطة الاقتصادية، جئنا لنَسُد الفجوة بين الإمكانات المتاحة للمنشأة وتطلعات إدارتها. نحن نعمل وفق أسس علمية وخبرات مهنية محترفة؛ لنمنح الإدارة الركيزة الأساسية لاتخاذ قرارات استراتيجية صائبة بأقل تكلفة ممكنة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurRole() {
  return (
    <section id="role" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[400px] w-[400px] bg-emerald-gradient opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <div className="text-right max-w-3xl mb-10">
          <span className="text-emerald font-semibold tracking-widest text-sm">دورنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3 leading-tight">
            الفرق بيننا وبين <span className="text-emerald-gradient">مكاتب المراجعة القانونية</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gold-gradient rounded-full mr-0" />
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 text-right shadow-luxury space-y-6 text-foreground/85 leading-loose text-lg">
          <p>
            هناك خلط شائع بين دور مكاتب المحاسبة والمراجعة القانونية، وبين ما نقدمه في شركات الاستشارات المالية والإدارية.
          </p>
          <p>
            إن مكاتب المراجعة القانونية ينصبّ تركيزها الأساسي على فحص واعتماد القوائم المالية بعد انتهاء العام؛ لتقديم تقرير فني محايد يخدم الأطراف الخارجية بالمقام الأول (كالجهات الحكومية، والبنوك، والمستثمرين). وتُعرض النتائج لديهم في صياغة رقمية مجمعة دون الدخول في التفاصيل التشغيلية؛ كأن يُذكر إجمالي المبيعات السنوية في رقم واحد، دون بيان تفاصيل السلع، ومعدلات الدوران، ومساهمة كل صنف في الربحية، أو التغيرات الموسمية.
          </p>
          <p>
            أما نحن، فنعمل معك كشريك استراتيجي داخل المنشأة؛ تبدأ رحلتنا معك من بناء شجرة الحسابات وتدقيق القيود والمستندات يومياً، والاهتمام بأدق التفاصيل التشغيلية حتى إعداد مسودة القوائم المالية. نحن لا ننتظر نهاية العام لنخبرك بما حدث، بل نضع أنظمة التكاليف والرقابة الذكية، ونحلل الانحرافات فوراً لتقديم تقارير دورية تخدم (الإدارة الداخلية) وتدعم صناعة القرار في الوقت المناسب.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] bg-gold-gradient opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald font-semibold tracking-widest text-sm">توجّهنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            الرؤية والرسالة والأهداف
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-gradient rounded-3xl p-10 text-ivory shadow-luxury text-right relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <div className="h-14 w-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <Eye className="h-7 w-7 text-emerald-deep" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold text-ivory">الرؤية</h3>
              <p className="mt-4 leading-loose text-ivory/90">
                أن نكون الشريك الاستراتيجي الأكثر موثوقية في صياغة المستقبل المالي والإداري للشركات، من خلال تحويل الأنظمة المحاسبية التقليدية إلى أدوات ذكية لصناعة القرار وتقديم حلول مبتكرة تضمن الجودة والنجاح والاستدامة.
              </p>
            </div>
          </div>
          <div className="glass-card rounded-3xl p-10 shadow-gold text-right relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald/15 blur-3xl" />
            <div className="relative">
              <div className="h-14 w-14 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <Flag className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold text-emerald-deep">الرسالة</h3>
              <p className="mt-4 leading-loose text-foreground/80">
                تمكين قطاع الأعمال عبر تقديم حلول استشارية مالية وإدارية متكاملة تجمع بين الدقة التقنية والمعايير المالية الدولية، مع التركيز على الابتكار في إدارة التكاليف والعمليات التشغيلية، لضمان استدامة ونمو أعمال عملائنا في بيئة اقتصادية متغيرة وتقديم حلول إدارية متطورة واستراتيجيات موارد بشرية عالية القيمة.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-right max-w-2xl">
          <span className="text-emerald font-semibold tracking-widest text-sm">الأهداف الاستراتيجية</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mt-3">ست ركائز نقود بها التحوّل</h3>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicGoals.map((g, i) => (
            <div key={g.title} className="group relative bg-ivory rounded-3xl p-7 lg:p-6 border border-gold/20 hover:border-gold/50 transition-all hover:-translate-y-2 hover:shadow-luxury overflow-hidden text-right">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="font-display text-4xl font-bold text-gold">0{i + 1}</div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury shrink-0">
                  <g.icon className="h-7 w-7 text-gold" />
                </div>
              </div>
              <h4 className="mt-5 font-bold text-xl text-emerald-deep">{g.title}</h4>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 text-right">
          <div className="bg-ivory rounded-3xl p-8 border border-gold/20">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-gold" />
              <h4 className="font-bold text-xl text-emerald-deep">مجالات العمل</h4>
            </div>
            <ul className="mt-5 space-y-3 text-foreground/80">
              {[
                "إدارة حسابات الشركات والمؤسسات المتوسطة وصغيرة الحجم عن بُعد.",
                "أحد فريقنا متخصص في تأسيس وتشغيل وإدارة الحسابات شركات المطاعم والكافيهات.",
                "الاستشارات المالية والخدمات المحاسبية للشركات والمؤسسات.",
                "استشارات إدارية للشركات والمؤسسات.",
              ].map((t) => (
                <li key={t} className="grid grid-cols-[1.25rem_1fr] gap-x-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-deep text-ivory rounded-3xl p-8 shadow-luxury">
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-gold-soft" />
              <h4 className="font-bold text-xl text-ivory">فروقات جوهرية إضافية</h4>
            </div>
            <ul className="mt-5 space-y-4 text-ivory/85 text-sm leading-relaxed">
              <li><strong className="text-gold-soft">الاستقلالية مقابل التدخل التشغيلي:</strong> نحن مهندسو النظام — نصمم الدورة المستندية، ونختار ونشرف على تطبيق أنظمة الـ ERP (مثل أودو ودفترة)، ونضع لائحة الصلاحيات المالية.</li>
              <li><strong className="text-gold-soft">هندسة التكاليف والتسعير:</strong> نحلل الانحراف بين التكلفة المعيارية والفعلية، ونحدد نقاط الهدر في المواد الخام، ونضع استراتيجيات التسعير بناءً على هوامش الربح المستهدفة ونقاط التعادل (Break-even Point).</li>
              <li><strong className="text-gold-soft">الوقاية واستشراف المستقبل:</strong> نضع أدوات الرقابة الوقائية لمنع الأخطاء قبل وقوعها، ونُعدّ الموازنات التقديرية لضمان عدم انحراف الشركة عن مستهدفاتها خلال العام.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald font-semibold tracking-widest text-sm">خدماتنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            باقة استشارية متكاملة
          </h2>
          <p className="mt-4 text-foreground/70">حلول مالية وإدارية مصممة لتُمكّن منشأتك من النمو والريادة.</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`group relative rounded-3xl p-8 transition-all hover:-translate-y-2 overflow-hidden ${i === 0 ? "bg-emerald-gradient text-ivory shadow-luxury" : "bg-ivory border border-gold/20 hover:shadow-luxury hover:border-gold/50"}`}>
              <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-gold/30 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center shadow-gold ${i === 0 ? "bg-gold-gradient" : "bg-emerald-gradient"}`}>
                  <s.icon className={`h-8 w-8 ${i === 0 ? "text-emerald-deep" : "text-gold"}`} />
                </div>
                <h3 className={`mt-6 font-bold text-2xl ${i === 0 ? "text-ivory" : "text-emerald-deep"}`}>{s.title}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-ivory/85" : "text-foreground/70"}`}>{s.desc}</p>
                <a href="#contact" className={`mt-6 inline-flex items-center gap-2 font-semibold text-sm ${i === 0 ? "text-gold-soft" : "text-emerald"}`}>
                  اعرف المزيد <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed service lists */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-gold/20 text-right shadow-soft">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <BarChart3 className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep">أولاً: الاستشارات المالية</h3>
            </div>
            <p className="mt-3 text-foreground/70">الكفاءة المحاسبية والربحية — بناء نظام مالي سليم وضمان الاستغلال الأمثل للموارد.</p>
            <div className="mt-6 space-y-6">
              {financialServices.map((group) => (
                <div key={group.title}>
                  <h4 className="font-bold text-emerald-deep text-lg mb-3">{group.title}</h4>
                  <ul className="space-y-2 pr-2">
                    {group.items.map((t) => (
                      <li key={t} className="grid grid-cols-[1.25rem_1fr] gap-x-3 items-start text-foreground/85 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mt-1" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-gold/20 text-right shadow-soft">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <ListChecks className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep">ثانياً: الاستشارات الإدارية</h3>
            </div>
            <p className="mt-3 text-foreground/70">الحوكمة والهيكل التنظيمي — تحسين الكفاءة التشغيلية وهيكلة الإدارة لزيادة الفاعلية.</p>
            <div className="mt-6 space-y-6">
              {adminServices.map((group) => (
                <div key={group.title}>
                  <h4 className="font-bold text-emerald-deep text-lg mb-3">{group.title}</h4>
                  <ul className="space-y-2 pr-2">
                    {group.items.map((t) => (
                      <li key={t} className="grid grid-cols-[1.25rem_1fr] gap-x-3 items-start text-foreground/85 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mt-1" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-gold-gradient opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald font-semibold tracking-widest text-sm">منهجية العمل</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            خمس خطوات نحو النجاح
          </h2>
          <p className="mt-4 text-foreground/70">رحلة واضحة المعالم تبدأ بالاستماع وتنتهي بشراكة نمو مستدامة.</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {methodology.map((step, i) => (
            <div key={step.title} className="relative bg-white rounded-3xl p-7 border border-gold/20 hover:border-gold/50 hover:shadow-luxury transition-all hover:-translate-y-2 text-right">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center text-emerald-deep font-display font-bold shadow-gold">
                0{i + 1}
              </div>
              <div className="h-14 w-14 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <step.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-5 font-bold text-lg text-emerald-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-semibold">{step.lead}</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/70 leading-relaxed">
                {step.items.map((it) => (
                  <li key={it} className="grid grid-cols-[1.25rem_1fr] gap-x-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-emerald shrink-0 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald font-semibold tracking-widest text-sm">قيمنا الجوهرية</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            مبادئ نلتزم بها كل يوم
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="group bg-ivory rounded-3xl p-8 border border-gold/15 hover:border-gold/50 transition-all hover:-translate-y-2 hover:shadow-luxury text-right">
              <div className="h-14 w-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition">
                <v.icon className="h-7 w-7 text-emerald-deep" />
              </div>
              <h3 className="mt-5 font-bold text-xl text-emerald-deep">{v.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[400px] w-[400px] bg-emerald-gradient opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <div className="text-right max-w-3xl mb-12">
          <span className="text-emerald font-semibold tracking-widest text-sm">فريق العمل</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3 leading-tight">
            خبرة تمتد لأكثر من <span className="text-emerald-gradient">30 عاماً</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75 leading-loose">
            مسيرة مهنية ميدانية وقيادية في الإدارة المالية والتدقيق وتطوير الأنظمة الرقابية، ساهم فريقنا فيها بصياغة النجاح المالي والإداري لكيانات اقتصادية بارزة في مصر والمملكة العربية السعودية.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-gold/20 shadow-soft text-right">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-gold" />
              <h3 className="font-display text-2xl font-bold text-emerald-deep">المؤهلات الأكاديمية والمهنية</h3>
            </div>
            <ul className="mt-6 space-y-3 text-foreground/80">
              {[
                "بكالوريوس التجارة — تخصص محاسبة.",
                "بكالوريوس التجارة — تخصص إدارة أعمال.",
                "دراسات عليا — تخصص محاسبة مالية.",
                "برنامج المحاسب الإداري المعتمد (CMA).",
                "المعايير الدولية للتقارير المالية ونظم المعلومات المحاسبية (IFRS & AIS).",
                "نظام تحليل المخاطر ونقاط التحكم الحرجة (HACCP).",
              ].map((t) => (
                <li key={t} className="grid grid-cols-[1.25rem_1fr] gap-x-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gold/20 shadow-soft text-right">
            <div className="flex items-center gap-3">
              <Award className="h-7 w-7 text-gold" />
              <h3 className="font-display text-2xl font-bold text-emerald-deep">إنجازات ومهارات محورية</h3>
            </div>
            <ul className="mt-6 space-y-4 text-foreground/80 text-sm leading-relaxed">
              <li><strong className="text-emerald">هيكلة الأنظمة:</strong> الريادة في بناء الأنظمة المالية والرقابية وتكاليف التصنيع باستخدام أحدث برامج الـ ERP.</li>
              <li><strong className="text-emerald">الجودة والسلامة:</strong> تطبيق نظام HACCP العالمي لضمان كفاءة وسلامة التشغيل في مصانع الأغذية والمطاعم.</li>
              <li><strong className="text-emerald">التحليل المالي الاستراتيجي:</strong> قراءة وتحليل الأرقام، إعداد الموازنات التخطيطية، وتصميم قوائم التدفقات النقدية المتوقعة للمشاريع التوسعية.</li>
              <li><strong className="text-emerald">تحليل الفجوات (Gap Analysis):</strong> تشخيص الفجوات التنظيمية والمالية وابتكار خطط تصحيحية لتحويل نقاط الضعف إلى نقاط قوة.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-right max-w-3xl">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep">الخبرات العملية والقطاعات</h3>
          <p className="mt-3 text-foreground/70">تولّى أعضاء الفريق مناصب قيادية في قطاعات حيوية متنوعة:</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {sectorExperience.map((sec) => (
            <div key={sec.title} className="bg-emerald-deep text-ivory rounded-3xl p-7 shadow-luxury text-right">
              <h4 className="font-bold text-lg text-gold-soft">{sec.title}</h4>
              <ul className="mt-4 space-y-3 text-ivory/85 text-sm leading-relaxed">
                {sec.items.map((i) => (
                  <li key={i} className="grid grid-cols-[1.25rem_1fr] gap-x-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-soft mt-2 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald font-semibold tracking-widest text-sm">مزايانا التنافسية</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            لماذا تختار الرمز المثالي؟
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div key={a} className="flex items-start gap-4 bg-ivory border border-gold/20 rounded-2xl p-6 hover:border-gold/50 hover:shadow-luxury transition-all text-right">
              <div className="font-display text-2xl font-bold text-emerald-gradient shrink-0 w-10 text-center">0{i + 1}</div>
              <p className="text-foreground/85 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !phone || !message) {
      toast.error("يرجى تعبئة جميع الحقول");
      return;
    }

    setSubmitting(true);
    const loadingId = toast.loading("جاري إرسال طلبك...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      toast.dismiss(loadingId);
      if (res.ok && data.success === true) {
        toast.success("تم إرسال طلبك بنجاح، سنتواصل معك قريباً");
        form.reset();
      } else {
        throw new Error(data?.message || "Submission failed");
      }
    } catch (err) {
      toast.dismiss(loadingId);
      toast.error("تعذّر إرسال الطلب حالياً، يرجى المحاولة مرة أخرى بعد قليل.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-gradient p-12 md:p-16 shadow-luxury">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold-gradient opacity-15 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-right text-ivory">
              <span className="text-gold-soft font-semibold tracking-widest text-sm">ابدأ اليوم</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
                جاهزون لمرافقتك نحو <span className="text-gold-soft">القمة</span>
              </h2>
              <p className="mt-5 text-lg opacity-90">
                احجز استشارتك الأولى مجاناً وتعرّف على الحلول التي نقدّمها لمنشأتك بكل احترافية وسرية تامة.
              </p>
              <div className="mt-8 space-y-3">
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-end hover:text-ivory transition">
                  <span dir="ltr">{SOCIAL.whatsappDisplay}</span>
                  <Phone className="h-5 w-5 text-gold" />
                </a>
                <a href={`mailto:${SOCIAL.email}`} className="flex items-center gap-3 justify-end hover:text-ivory transition">
                  <span>{SOCIAL.email}</span>
                  <Mail className="h-5 w-5 text-gold" />
                </a>
                <div className="flex items-center gap-3 justify-end">
                  <span>جمهورية مصر العربية</span>
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
              </div>
            </div>

            <form
              className="glass-card rounded-3xl p-8 space-y-4"
              onSubmit={handleSubmit}
            >
              <h3 className="font-display text-2xl font-bold text-emerald-deep text-right">أرسل لنا رسالة</h3>
              <input name="name" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="الاسم الكامل" />
              <input name="email" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="البريد الإلكتروني" type="email" />
              <input name="phone" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="رقم الجوال" type="tel" />
              <textarea name="message" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right min-h-28" placeholder="كيف يمكننا مساعدتك؟" />
              <button type="submit" disabled={submitting} className="w-full bg-emerald-gradient text-ivory font-bold py-4 rounded-xl shadow-luxury hover:shadow-gold transition disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "جاري الإرسال..." : "إرسال الطلب"}
              </button>
              <p className="text-xs text-foreground/60 text-right">سيتم إرسال طلبك مباشرة إلى بريد الشركة دون مغادرة الصفحة.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-emerald-deep text-ivory pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 text-right">
          <div className="md:col-span-2">
            <div className="flex justify-end">
              <img src={logoDark} alt="الرمز المثالي - للاستشارات المالية والإدارية" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
            </div>
            <p className="mt-5 text-ivory/70 leading-relaxed max-w-md mr-0 ml-auto">
              شركة الرمز المثالي للاستشارات المالية والإدارية — شركة مصرية ذات مسؤولية محدودة، تقدّم حلولاً متكاملة تمكّن منشآت المنطقة من النمو والاستدامة.
            </p>
            <div className="mt-6 flex gap-3 justify-end">
              {[
                { Icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
                { Icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold-gradient hover:text-emerald-deep transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gold-soft mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-ivory/70 text-sm">
              {navItems.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-ivory transition">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold-soft mb-4">تواصل</h4>
            <ul className="space-y-2 text-ivory/70 text-sm">
              <li>
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-right hover:text-ivory transition">
                  <span>واتساب: </span>
                  <bdi dir="ltr" style={{ unicodeBidi: "isolate" }}>{SOCIAL.whatsappDisplay}</bdi>
                </a>
              </li>
              <li>
                <a href={`mailto:${SOCIAL.email}`} className="hover:text-ivory transition break-all">{SOCIAL.email}</a>
              </li>
              <li>جمهورية مصر العربية</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-ivory/10 text-center text-xs text-ivory/50">
          © {new Date().getFullYear()} الرمز المثالي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ivory font-arabic" dir="rtl">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <OurRole />
        <VisionMission />
        <Services />
        <Methodology />
        <Values />
        <Team />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
