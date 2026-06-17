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
  { icon: TrendingUp, title: "الاستشارات المالية", desc: "تحليل مالي معمّق، تخطيط استراتيجي، وإدارة تدفقات نقدية لبناء نظام مالي سليم وضمان الاستغلال الأمثل للموارد." },
  { icon: Briefcase, title: "الاستشارات الإدارية", desc: "إعادة هيكلة المؤسسات، تطوير السياسات والإجراءات، وبناء أنظمة الحوكمة لرفع الكفاءة التشغيلية." },
  { icon: FileSearch, title: "دراسات الجدوى", desc: "دراسات شاملة تكشف فرص النجاح وتقلل مخاطر القرارات الاستثمارية وتدعم اتخاذ القرار." },
  { icon: Calculator, title: "هندسة التكاليف", desc: "تحليل الانحرافات وتصميم أنظمة تكاليف متطورة لقطاع المطاعم والكافيهات والمصانع." },
  { icon: Cog, title: "تطبيق أنظمة الـ ERP", desc: "اختيار وتصميم وتطبيق برامج تخطيط موارد المؤسسات لضمان دقة وسرعة التقارير." },
  { icon: ShieldCheck, title: "الحوكمة وإدارة المخاطر", desc: "أطر رقابة داخلية متكاملة لحماية الأصول وضمان الامتثال للمعايير الدولية والمحلية." },
];

const strategicGoals = [
  { icon: ShieldCheck, title: "حوكمة الأنظمة المالية", desc: "بناء هياكل مالية متينة تضمن الامتثال الكامل للمعايير الدولية والمحلية لرفع الكفاءة والربحية." },
  { icon: Calculator, title: "رفع الكفاءة التشغيلية", desc: "حلول نوعية في هندسة التكاليف خاصة في قطاع الأغذية والمشروبات لتعظيم الربحية وتقليل الهدر." },
  { icon: Cog, title: "التحول الرقمي المالي", desc: "دعم الشركات في الانتقال نحو الأنظمة السحابية والأتمتة المحاسبية لضمان سرعة ودقة التقارير." },
  { icon: GraduationCap, title: "التطوير المستمر", desc: "تدريب وتطوير القائمين بالعمل المحاسبي والإداري لرفع كفاءة الأداء." },
  { icon: Award, title: "الريادة في الاستشارات", desc: "تقديم دعم احترافي لخدمات استشارية مالية وإدارية عالية الجودة." },
  { icon: Users, title: "بناء الشراكات المستدامة", desc: "مرافقة عملائنا في مراحل التنفيذ والرقابة لضمان تحقيق النتائج من خلال خدمات متميزة وشفافية عالية." },
];

const financialServices = [
  "التحليل والتقييم المالي ودراسة الوضع المالي الحالي لتحديد نقاط القوة والضعف والمخاطر.",
  "إعداد ومراجعة وتحليل القوائم والتقارير المالية (الميزانية، الأرباح والخسائر، التدفقات النقدية).",
  "إدارة التدفقات النقدية وتحسينها.",
  "إعداد الخطط المالية طويلة وقصيرة المدى والموازنات التقديرية.",
  "تحديد هيكل رأس المال الأمثل واختيار مصادر التمويل المناسبة.",
  "وضع استراتيجيات لتقليل المخاطر المالية المحتملة.",
  "تقديم استشارات حول الضرائب والزكاة لضمان الامتثال القانوني.",
  "إجراء دراسات الجدوى الاقتصادية لتقييم المشاريع والفرص الجديدة.",
  "المساعدة في اختيار وتطبيق برامج محاسبية متكاملة (ERP).",
  "تصميم وتطبيق الأنظمة المحاسبية ودورات العمل المستندية المتكاملة.",
  "الإشراف على الدورة المحاسبية والرقابية وإعداد القوائم المالية وفقاً للمعايير الدولية.",
  "تدريب وتطوير المحاسبين وتطوير نظم الرقابة الداخلية لحماية الأصول ودقة البيانات.",
];

const adminServices = [
  "إعادة هيكلة المؤسسة وتصميم الهياكل التنظيمية المناسبة للأهداف الاستراتيجية.",
  "توصيف وتحديد صلاحيات ومسؤوليات الوظائف والمستويات الإدارية.",
  "وضع اللوائح التنظيمية والإدارية الداخلية.",
  "وضع وتطوير السياسات والإجراءات الإدارية والتشغيلية الموحدة (SOPs).",
  "تحسين كفاءة العمليات التشغيلية (المشتريات، الإنتاج، المخازن) لخفض التكاليف ورفع الجودة.",
  "صياغة الرؤية والرسالة والقيم وتحديد الأهداف الاستراتيجية.",
  "بناء خطط العمل التفصيلية ومؤشرات الأداء الرئيسية (KPIs) لمتابعة التنفيذ.",
  "تطوير أنظمة تقييم أداء الموظفين ورفع الكفاءات القيادية والإدارية.",
  "تقديم حلول لتحسين رضا الموظفين وإدارة التغيير داخل المنظمة.",
];

const methodology = [
  { icon: Search, title: "الاكتشاف والتشخيص", desc: "نبدأ بالاستماع إليكم ودراسة الوضع الراهن: جلسات استشارية أولية، جمع وتحليل البيانات، وتشخيص الفجوات في النظام المحاسبي أو الهيكل الإداري." },
  { icon: PenTool, title: "التخطيط وبناء الاستراتيجية", desc: "خارطة طريق مخصصة: تصميم حلول إعادة الهيكلة وخفض التكاليف، إعداد الموازنات والتوقعات، وتحديد مؤشرات الأداء (KPIs)." },
  { icon: PlayCircle, title: "التنفيذ", desc: "الإشراف على ضبط القيود وأنظمة الـ ERP، تطوير السياسات، تهيئة الكوادر وتدريبهم، وترتيب الالتزامات الضريبية وفقاً للقوانين السارية." },
  { icon: Activity, title: "المراقبة والتقييم", desc: "تقارير دورية شهرية وربع سنوية، مقارنة الأداء الفعلي بالمستهدف ومعالجة الانحرافات فوراً، ومراجعة الحسابات لأعلى درجات الشفافية." },
  { icon: Repeat, title: "التطوير المستمر والاستدامة", desc: "شراكة دائمة عبر توصيات دورية لمواكبة التغيرات الاقتصادية والقانونية، وتطوير الاستراتيجيات لدعم التوسع المستقبلي." },
];

const coreValues = [
  { icon: ShieldCheck, title: "الأمانة والسرية المطلقة", desc: "نتعامل مع بيانات عملائنا بوصفها أمانة مهنية، ونلتزم بأعلى معايير السرية والخصوصية." },
  { icon: Target, title: "الدقة المتناهية", desc: "منهجية تدقيق صارمة تضمن صحة التقارير والامتثال للمعايير المالية الدولية." },
  { icon: Users, title: "الشراكة من أجل النمو", desc: "شركاء نجاح نعمل جنباً إلى جنب مع عملائنا لتحقيق أهدافهم الاستراتيجية." },
  { icon: Eye, title: "الشفافية والوضوح", desc: "نقدّم الحقائق المالية والإدارية كما هي مع حلول واقعية وقابلة للتنفيذ." },
  { icon: Lightbulb, title: "الابتكار في الحلول", desc: "دمج التكنولوجيا والأنظمة الذكية في العمليات لضمان كفاءة أعلى وجهد أقل." },
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
  { title: "قطاع الأغذية والمطاعم", items: ["مصانع إنتاج وتصنيع لحوم الدواجن ومصانع الأعلاف بمصر.", "مجموعة مصانع منتجات الألبان والعصائر والحلويات الشهيرة بمصر.", "سلاسل مطاعم كبرى في الرياض (طويق، النهضة، الياسمين، الروابي) والقاهرة (مدينة نصر)."] },
  { title: "القطاع الصناعي", items: ["شركة صناعة المنظفات الكيميائية والورقية والبلاستيكية بالدمام (+15 فرعاً).", "مصانع المنتجات البلاستيكية الكبرى بالعاشر من رمضان — مورد رئيسي لشركات الطيران والفنادق العالمية.", "مصانع الموبيليا والأثاث الراقي بمصر."] },
  { title: "القطاعات الخدمية والتجارية", items: ["شركة استشارات مهنية لتقييم الأصول بالرياض من الكبرى المعتمدة في المملكة.", "مجموعة قابضة من أكبر العلامات التجارية في الأدوية البيطرية بمصر.", "شركات استثمار وتطوير عقاري."] },
];

const comparisonRows = [
  { label: "الهدف الأساسي", us: "تطوير الأداء المالي والتشغيلي وتوليد القيمة (بناء وتطوير).", them: "إبداء رأي محايد حول عدالة القوائم المالية (امتثال وتدقيق تاريخي)." },
  { label: "المستفيد الأول", us: "أطراف داخلية: مجلس الإدارة، الإدارة التنفيذية، الملاك.", them: "أطراف خارجية: الجهات الحكومية، البنوك، المستثمرون." },
  { label: "نطاق الزمن", us: "مستقبلي (Proactive): تخطيط، موازنات، تنبؤ.", them: "تاريخي: بعد إغلاق الحسابات." },
  { label: "مستوى التفاصيل", us: "تحليلي ودقيق: ربحية المنتج، تكلفة الهدر، هندسة المنيو، كفاءة الفروع.", them: "إجمالي ومجمع وفق المعايير الدولية (IFRS)." },
  { label: "العلاقة بالمنشأة", us: "شراكة وتكامل: تدخل مباشر في هيكلة الأنظمة وتوجيه الإدارة.", them: "علاقة تعاقدية مستقلة ومحايدة." },
  { label: "التقارير الصادرة", us: "تقارير إدارية مخصصة وتحليل انحرافات ودراسات جدوى.", them: "تقرير المراجع القانوني السنوي." },
];

function TopBar() {
  return (
    <div className="bg-emerald-gradient text-ivory text-sm">
      <div className="container mx-auto flex flex-wrap items-center gap-6 px-6 py-2.5">
        <div className="flex items-center gap-6">
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition">
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span dir="ltr">{SOCIAL.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${SOCIAL.email}`} className="hidden sm:flex items-center gap-2 hover:text-gold transition">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {SOCIAL.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
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
            className="h-11 md:h-12 w-auto object-contain"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-foreground/85 hover:text-emerald font-medium transition relative group">
                {n.label}
                <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-gold-gradient transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="bg-emerald-gradient text-ivory px-6 py-2.5 rounded-full text-sm font-semibold shadow-luxury hover:shadow-gold transition-all hover:-translate-y-0.5">
          احجز استشارة
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} loading="lazy" decoding="async" />
      </div>
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-gradient opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-gradient opacity-15 blur-3xl" />

      <div className="container relative mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-20 lg:py-28">
        {/* Text right (RTL natural) */}
        <div className="order-2 lg:order-1 text-right">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-emerald tracking-wide">
            <span className="h-2 w-2 rounded-full bg-gold-gradient" />
            شركة استشارات مالية وإدارية رائدة
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold text-emerald-deep leading-[1.1]">
            نحو نجاح
            <span className="block text-gold-gradient">مستدام</span>
          </h1>
          <p className="mt-5 text-2xl md:text-3xl font-semibold text-gold">
            لحلول مالية وإدارية متكاملة
          </p>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl mr-0 ml-auto">
            في <strong className="text-emerald">الرمز المثالي</strong> نقدّم استشارات احترافية تجمع بين الخبرة المحلية والمعايير العالمية،
            لنرسم معك خارطة طريق واضحة نحو نمو منشأتك واستدامة أعمالها في الأسواق العربية.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-end">
            <a href="#contact" className="group bg-emerald-gradient text-ivory px-8 py-4 rounded-full font-bold shadow-luxury hover:shadow-gold transition-all hover:-translate-y-1 flex items-center gap-2">
              تواصل معنا
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" />
            </a>
            <a href="#services" className="bg-gold-gradient text-emerald-deep px-8 py-4 rounded-full font-bold shadow-gold hover:shadow-luxury transition-all hover:-translate-y-1">
              استكشف خدماتنا
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mr-0 ml-auto">
            {[
              { v: 30, suffix: "+", l: "عام خبرة الفريق" },
              { v: 2026, l: "عام التأسيس" },
              { v: null as number | null, text: "IFRS", l: "معايير دولية" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-gradient tabular-nums tracking-tight">
                  {s.v === null ? s.text : <AnimatedNumber value={s.v} suffix={s.suffix} />}
                </div>
                <div className="text-[11px] sm:text-xs text-foreground/60 mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo left */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-start pb-16 md:pb-20 lg:pb-0">
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
              className="relative w-[240px] sm:w-[300px] md:w-[440px] h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 14px 22px rgba(1,67,45,0.18)) drop-shadow(0 3px 6px rgba(205,164,94,0.12))",
              }}
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-bottom-16 md:-left-20 glass-card rounded-2xl px-4 py-2.5 md:px-5 md:py-3 shadow-gold flex items-center gap-3 whitespace-nowrap">
              <div className="h-7 md:h-8 w-px bg-gold/40" />
              <div className="text-right">
                <div className="text-[10px] tracking-widest text-foreground/60 uppercase">EST</div>
                <div className="font-display text-xl md:text-2xl font-bold text-emerald leading-none tabular-nums">2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold tracking-widest text-sm">لماذا الرمز المثالي</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            مميزات تصنع الفارق
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="group relative bg-ivory rounded-3xl p-8 border border-gold/15 hover:border-gold/50 transition-all hover:-translate-y-2 hover:shadow-luxury overflow-hidden">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury group-hover:scale-110 transition">
                  <f.icon className="h-8 w-8 text-gold" />
                </div>
                <div className="absolute top-0 left-0 font-display text-5xl font-bold text-gold/15">0{i + 1}</div>
              </div>
              <h3 className="mt-6 font-bold text-xl text-emerald-deep">{f.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
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
          <span className="text-gold font-semibold tracking-widest text-sm">من نحن</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3 leading-tight">
            شركاؤكم نحو <span className="text-gold-gradient">التميّز المؤسسي</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-loose">
            <strong className="text-emerald">شركة الرمز المثالي للاستشارات المالية والإدارية</strong> — شركة مصرية ذات مسؤولية محدودة خاضعة لأحكام القانون رقم 159 لسنة 1981، ومسجلة بالسجل التجاري برقم 55295، ويقع مقرها الرئيسي بالجيزة — جمهورية مصر العربية. نلتزم بتقديم خدمات استشارية محاسبية وإدارية عالية الجودة وذات قيمة مضافة وفقاً للمعايير الدولية للتقارير المالية لتلبية احتياجات عملائنا.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "مسجّلة وفق القانون المصري رقم 159 لسنة 1981 — سجل تجاري 55295",
              "خبرات فريق تمتد لأكثر من 30 عاماً في مصر والمملكة العربية السعودية",
              "خدمات وفق المعايير الدولية للتقارير المالية (IFRS)",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 justify-end">
                <span className="text-foreground/85">{t}</span>
                <span className="h-7 w-7 rounded-full bg-gold-gradient flex items-center justify-center text-emerald-deep font-bold text-xs shrink-0">✓</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-gradient rounded-3xl p-8 text-ivory shadow-luxury translate-y-8">
              <div className="font-display text-5xl font-bold text-gold tabular-nums">
                <AnimatedNumber value={30} suffix="+" />
              </div>
              <div className="mt-2 text-sm opacity-90">عاماً من خبرة فريق العمل</div>
            </div>
            <div className="glass-card rounded-3xl p-8 shadow-gold">
              <div className="font-display text-5xl font-bold text-gold-gradient tabular-nums">
                <AnimatedNumber value={2026} duration={2000} />
              </div>
              <div className="mt-2 text-sm text-foreground/70">عام تأسيس الشركة</div>
            </div>
            <div className="glass-card rounded-3xl p-8 shadow-gold">
              <div className="font-display text-5xl font-bold text-gold-gradient tabular-nums">
                <AnimatedNumber value={2} />
              </div>
              <div className="mt-2 text-sm text-foreground/70">سوقان: مصر والسعودية</div>
            </div>
            <div className="bg-gold-gradient rounded-3xl p-8 text-emerald-deep shadow-gold translate-y-8">
              <div className="font-display text-5xl font-bold">IFRS</div>
              <div className="mt-2 text-sm font-semibold">وفق المعايير الدولية للتقارير المالية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders' message */}
      <div className="container mx-auto px-6 mt-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-right shadow-luxury">
          <span className="text-gold font-semibold tracking-widest text-sm">كلمة المؤسسين</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mt-3">لماذا تأسسنا؟</h3>
          <div className="mt-6 space-y-5 text-foreground/80 leading-loose text-lg">
            <p>
              الهدف الأسمى الذي انطلقت منه شركتنا هو تخفيف الأعباء المالية والإدارية عن كاهل المنشآت الصغيرة والمتوسطة، لتكون شراكتنا هي الحل الأمثل لتحديات النمو.
            </p>
            <p>
              ندرك تماماً أنه من الصعب على المنشآت في هذا القطاع استقطاب والاحتفاظ بكفاءات وخبرات متخصصة وعالية الأجر في شتى فروع المحاسبة والإدارة بشكل دائم، خاصة وأن بعض هذه المهام الحساسة لا يتطلب تواجداً يومياً كامل الوقت، بل يحتاج إلى إشراف وتوجيه دوري محترف وحيادية تامة.
            </p>
            <p>
              ومن هنا، واعتزازاً بخبرات فريقنا الممتدة لأكثر من ثلاثين عاماً في مختلف الأنشطة الاقتصادية، جئنا لنَسُد الفجوة بين الإمكانات المتاحة للمنشأة وتطلعات إدارتها. نعمل على تحويل الطموحات إلى واقع من خلال توفير البيانات الدقيقة والتحليلات المالية العميقة وهيكلة الأعمال وفق أسس علمية، لنمنح الإدارة الركيزة الأساسية لاتخاذ قرارات استراتيجية صائبة بأقل تكلفة ممكنة.
            </p>
          </div>
        </div>
      </div>

      {/* Our role + comparison */}
      <div className="container mx-auto px-6 mt-16">
        <div className="text-right max-w-4xl">
          <span className="text-gold font-semibold tracking-widest text-sm">دورنا</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mt-3">
            الفرق بيننا وبين <span className="text-gold-gradient">مكاتب المراجعة القانونية</span>
          </h3>
          <p className="mt-5 text-foreground/75 leading-loose text-lg">
            مكاتب المراجعة القانونية ينصبّ تركيزها على فحص واعتماد القوائم المالية بعد انتهاء العام لتقديم تقرير محايد يخدم الأطراف الخارجية. أما نحن فنعمل كشريك استراتيجي داخل المنشأة من بناء شجرة الحسابات وتدقيق القيود يومياً حتى إعداد القوائم المالية، مع أنظمة تكاليف ورقابة ذكية وتحليل فوري للانحرافات.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-3xl border border-gold/20 shadow-soft bg-white">
          <table className="w-full text-right text-sm md:text-base">
            <thead>
              <tr className="bg-emerald-gradient text-ivory">
                <th className="p-4 font-bold">وجه المقارنة</th>
                <th className="p-4 font-bold">شركتنا الاستشارية</th>
                <th className="p-4 font-bold">مكاتب المراجعة القانونية</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "bg-ivory" : "bg-white"}>
                  <td className="p-4 font-semibold text-emerald-deep align-top whitespace-nowrap">{r.label}</td>
                  <td className="p-4 text-foreground/80 align-top">{r.us}</td>
                  <td className="p-4 text-foreground/70 align-top">{r.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <span className="text-gold font-semibold tracking-widest text-sm">توجّهنا</span>
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
              <h3 className="mt-5 font-display text-3xl font-bold text-gold">الرؤية</h3>
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
                تمكين قطاع الأعمال عبر تقديم حلول استشارية مالية وإدارية متكاملة تجمع بين الدقة التقنية والمعايير المالية الدولية، مع التركيز على الابتكار في إدارة التكاليف والعمليات لضمان استدامة ونمو أعمال عملائنا في بيئة اقتصادية متغيرة.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-right max-w-2xl">
          <span className="text-gold font-semibold tracking-widest text-sm">الأهداف الاستراتيجية</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mt-3">ست ركائز نقود بها التحوّل</h3>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicGoals.map((g, i) => (
            <div key={g.title} className="group relative bg-ivory rounded-3xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:-translate-y-2 hover:shadow-luxury overflow-hidden text-right">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="font-display text-4xl font-bold text-gold/20">0{i + 1}</div>
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
            <div className="flex items-center gap-3 justify-end">
              <h4 className="font-bold text-xl text-emerald-deep">مجالات العمل</h4>
              <Building2 className="h-6 w-6 text-gold" />
            </div>
            <ul className="mt-5 space-y-3 text-foreground/80">
              {[
                "إدارة حسابات الشركات والمؤسسات المتوسطة وصغيرة الحجم عن بُعد.",
                "تأسيس وتشغيل وإدارة حسابات شركات المطاعم والكافيهات.",
                "استشارات مالية ومحاسبية للشركات والمؤسسات.",
                "استشارات إدارية للشركات والمؤسسات.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 justify-end">
                  <span>{t}</span>
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-deep text-ivory rounded-3xl p-8 shadow-luxury">
            <div className="flex items-center gap-3 justify-end">
              <h4 className="font-bold text-xl text-gold">فروقات جوهرية إضافية</h4>
              <Scale className="h-6 w-6 text-gold" />
            </div>
            <ul className="mt-5 space-y-4 text-ivory/85 text-sm leading-relaxed">
              <li><strong className="text-gold">الاستقلالية مقابل التدخل التشغيلي:</strong> نحن مهندسو النظام — نصمم الدورة المستندية ونشرف على تطبيق الـ ERP ونضع لائحة الصلاحيات المالية.</li>
              <li><strong className="text-gold">هندسة التكاليف والتسعير:</strong> نحلل الانحراف بين التكلفة المعيارية والفعلية، ونحدد نقاط الهدر، ونضع استراتيجيات التسعير ونقاط التعادل (Break-even).</li>
              <li><strong className="text-gold">الوقاية واستشراف المستقبل:</strong> نضع أدوات رقابة وقائية لمنع الخطأ قبل حدوثه، ونُعدّ موازنات تقديرية لضمان عدم الانحراف خلال العام.</li>
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
          <span className="text-gold font-semibold tracking-widest text-sm">خدماتنا</span>
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
                <a href="#contact" className={`mt-6 inline-flex items-center gap-2 font-semibold text-sm ${i === 0 ? "text-gold" : "text-emerald"}`}>
                  اعرف المزيد <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed service lists */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-gold/20 text-right shadow-soft">
            <div className="flex items-center gap-3 justify-end">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep">أولاً: الاستشارات المالية</h3>
              <div className="h-12 w-12 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <BarChart3 className="h-6 w-6 text-gold" />
              </div>
            </div>
            <p className="mt-3 text-foreground/70">الكفاءة المحاسبية والربحية — بناء نظام مالي سليم وضمان الاستغلال الأمثل للموارد.</p>
            <ul className="mt-6 space-y-3">
              {financialServices.map((t) => (
                <li key={t} className="flex items-start gap-3 justify-end text-foreground/85 leading-relaxed">
                  <span>{t}</span>
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-1" />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-gold/20 text-right shadow-soft">
            <div className="flex items-center gap-3 justify-end">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep">ثانياً: الاستشارات الإدارية</h3>
              <div className="h-12 w-12 rounded-2xl bg-emerald-gradient flex items-center justify-center shadow-luxury">
                <ListChecks className="h-6 w-6 text-gold" />
              </div>
            </div>
            <p className="mt-3 text-foreground/70">الحوكمة والهيكل التنظيمي — تحسين الكفاءة التشغيلية وهيكلة الإدارة لزيادة الفاعلية.</p>
            <ul className="mt-6 space-y-3">
              {adminServices.map((t) => (
                <li key={t} className="flex items-start gap-3 justify-end text-foreground/85 leading-relaxed">
                  <span>{t}</span>
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-1" />
                </li>
              ))}
            </ul>
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
          <span className="text-gold font-semibold tracking-widest text-sm">منهجية العمل</span>
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
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
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
          <span className="text-gold font-semibold tracking-widest text-sm">قيمنا الجوهرية</span>
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
          <span className="text-gold font-semibold tracking-widest text-sm">فريق العمل</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3 leading-tight">
            خبرة تمتد لأكثر من <span className="text-gold-gradient">30 عاماً</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75 leading-loose">
            مسيرة مهنية ميدانية وقيادية في الإدارة المالية والتدقيق وتطوير الأنظمة الرقابية، ساهم فريقنا فيها بصياغة النجاح المالي والإداري لكيانات اقتصادية بارزة في مصر والمملكة العربية السعودية.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-gold/20 shadow-soft text-right">
            <div className="flex items-center gap-3 justify-end">
              <h3 className="font-display text-2xl font-bold text-emerald-deep">المؤهلات الأكاديمية والمهنية</h3>
              <GraduationCap className="h-7 w-7 text-gold" />
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
                <li key={t} className="flex items-start gap-2 justify-end">
                  <span>{t}</span>
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gold/20 shadow-soft text-right">
            <div className="flex items-center gap-3 justify-end">
              <h3 className="font-display text-2xl font-bold text-emerald-deep">إنجازات ومهارات محورية</h3>
              <Award className="h-7 w-7 text-gold" />
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
              <h4 className="font-bold text-lg text-gold">{sec.title}</h4>
              <ul className="mt-4 space-y-3 text-ivory/85 text-sm leading-relaxed">
                {sec.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 justify-end">
                    <span>{i}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
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
          <span className="text-gold font-semibold tracking-widest text-sm">مزايانا التنافسية</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mt-3">
            لماذا تختار الرمز المثالي؟
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div key={a} className="flex items-start gap-4 bg-ivory border border-gold/20 rounded-2xl p-6 hover:border-gold/50 hover:shadow-luxury transition-all text-right">
              <div className="font-display text-2xl font-bold text-gold-gradient shrink-0 w-10 text-center">0{i + 1}</div>
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
              <span className="text-gold font-semibold tracking-widest text-sm">ابدأ اليوم</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
                جاهزون لمرافقتك نحو <span className="text-gold-gradient">القمة</span>
              </h2>
              <p className="mt-5 text-lg opacity-90">
                احجز استشارتك الأولى مجاناً وتعرّف على الحلول التي نقدّمها لمنشأتك بكل احترافية وسرية تامة.
              </p>
              <div className="mt-8 space-y-3">
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-end hover:text-gold transition">
                  <span dir="ltr">{SOCIAL.whatsappDisplay}</span>
                  <Phone className="h-5 w-5 text-gold" />
                </a>
                <a href={`mailto:${SOCIAL.email}`} className="flex items-center gap-3 justify-end hover:text-gold transition">
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
            <h4 className="font-bold text-gold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-ivory/70 text-sm">
              {navItems.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-gold transition">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-4">تواصل</h4>
            <ul className="space-y-2 text-ivory/70 text-sm">
              <li>
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-right hover:text-gold transition">
                  <span>واتساب: </span>
                  <bdi dir="ltr" style={{ unicodeBidi: "isolate" }}>{SOCIAL.whatsappDisplay}</bdi>
                </a>
              </li>
              <li>
                <a href={`mailto:${SOCIAL.email}`} className="hover:text-gold transition break-all">{SOCIAL.email}</a>
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
