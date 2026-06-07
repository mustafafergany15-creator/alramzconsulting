import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Phone, Mail, Users, Sparkles, Target, Award,
  TrendingUp, FileSearch, Briefcase, Compass, ShieldCheck,
  ArrowLeft, MapPin, Facebook, Linkedin, Instagram,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "مميزاتنا", href: "#features" },
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
  { icon: TrendingUp, title: "الاستشارات المالية", desc: "تحليل مالي معمّق وتخطيط استثماري يعزز الاستقرار والنمو المستدام." },
  { icon: FileSearch, title: "دراسات الجدوى", desc: "دراسات شاملة تكشف فرص النجاح وتقلل مخاطر القرارات الاستثمارية." },
  { icon: Briefcase, title: "الاستشارات الإدارية", desc: "إعادة هيكلة وتطوير الأداء التشغيلي والمؤسسي بأعلى الكفاءات." },
  { icon: Compass, title: "التخطيط الاستراتيجي", desc: "رسم خرائط طريق واضحة المعالم تُمكّن منشأتك من قيادة قطاعها." },
  { icon: ShieldCheck, title: "إدارة المخاطر", desc: "أطر حوكمة وامتثال متكاملة لحماية أصولك واستدامة أعمالك." },
];

const buildConsultationWhatsAppUrl = (form: HTMLFormElement) => {
  const fd = new FormData(form);
  const name = String(fd.get("name") || "").trim();
  const email = String(fd.get("email") || "").trim();
  const phone = String(fd.get("phone") || "").trim();
  const message = String(fd.get("message") || "").trim();
  const text = [
    "طلب استشارة جديد من موقع الرمز المثالي",
    "",
    `الاسم: ${name}`,
    `البريد الإلكتروني: ${email}`,
    `رقم الجوال: ${phone}`,
    `الرسالة: ${message}`,
  ].join("\n");

  const params = new URLSearchParams({
    phone: "201204442060",
    text,
    type: "phone_number",
    app_absent: "0",
  });

  return `https://api.whatsapp.com/send/?${params.toString()}`;
};

function TopBar() {
  return (
    <div className="bg-emerald-gradient text-ivory text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-2.5">
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
        <div className="flex items-center gap-3">
          <span className="opacity-80">فروعنا:</span>
          <span className="flex items-center gap-1.5 text-base" title="مصر">🇪🇬</span>
          <span className="flex items-center gap-1.5 text-base" title="السعودية">🇸🇦</span>
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
          <img src={logo} alt="الرمز المثالي" className="h-14 w-14 rounded-full shadow-gold" width={56} height={56} />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-xl font-bold text-emerald">الرمز المثالي</div>
            <div className="text-[11px] tracking-widest text-gold uppercase">Al Ramz Al Methaly</div>
          </div>
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
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
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

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mr-0 ml-auto">
            {[
              { n: "+15", l: "عام خبرة" },
              { n: "+250", l: "عميل ناجح" },
              { n: "98%", l: "رضا العملاء" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-bold text-gold-gradient">{s.n}</div>
                <div className="text-xs text-foreground/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo left */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-gradient rounded-full blur-3xl opacity-30 scale-110" />
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-gold/40" style={{ animation: "spin 30s linear infinite" }} />
            <div className="relative p-6 rounded-full bg-gradient-to-br from-white to-ivory shadow-luxury ring-1 ring-gold/30">
              <img
                src={logo}
                alt="شعار الرمز المثالي"
                className="h-72 w-72 md:h-[420px] md:w-[420px] rounded-full object-contain drop-shadow-2xl"
                width={420}
                height={420}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-5 py-3 shadow-gold">
              <div className="text-[10px] text-foreground/60">منذ</div>
              <div className="font-display text-2xl font-bold text-emerald">2026</div>
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
            تأسست <strong className="text-emerald">الرمز المثالي</strong> لتكون بيتاً للخبرة في تقديم الاستشارات المالية والإدارية للمؤسسات والشركات الطموحة.
            نمتلك فريقاً متعدد التخصصات يجمع بين العمق الأكاديمي والممارسة الميدانية، نعمل على تمكين عملائنا من اتخاذ قرارات واثقة ومدروسة.
          </p>
          <ul className="mt-8 space-y-3">
            {["رؤية واضحة وأهداف قابلة للقياس", "منهجية عمل وفق أفضل الممارسات الدولية", "تواجد إقليمي في السعودية ومصر"].map((t) => (
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
              <div className="font-display text-5xl font-bold text-gold">15+</div>
              <div className="mt-2 text-sm opacity-90">عاماً من العمل المؤسسي</div>
            </div>
            <div className="glass-card rounded-3xl p-8 shadow-gold">
              <div className="font-display text-5xl font-bold text-gold-gradient">250+</div>
              <div className="mt-2 text-sm text-foreground/70">عميل في المنطقة</div>
            </div>
            <div className="glass-card rounded-3xl p-8 shadow-gold">
              <div className="font-display text-5xl font-bold text-gold-gradient">40+</div>
              <div className="mt-2 text-sm text-foreground/70">مستشار خبير</div>
            </div>
            <div className="bg-gold-gradient rounded-3xl p-8 text-emerald-deep shadow-gold translate-y-8">
              <div className="font-display text-5xl font-bold">98%</div>
              <div className="mt-2 text-sm font-semibold">نسبة رضا عملائنا</div>
            </div>
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
      </div>
    </section>
  );
}

function CTA() {
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
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                window.location.href = buildConsultationWhatsAppUrl(form);
              }}
            >
              <h3 className="font-display text-2xl font-bold text-emerald-deep text-right">أرسل لنا رسالة</h3>
              <input name="name" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="الاسم الكامل" />
              <input name="email" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="البريد الإلكتروني" type="email" />
              <input name="phone" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right" placeholder="رقم الجوال" type="tel" />
              <textarea name="message" required className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-right min-h-28" placeholder="كيف يمكننا مساعدتك؟" />
              <button type="submit" className="w-full bg-emerald-gradient text-ivory font-bold py-4 rounded-xl shadow-luxury hover:shadow-gold transition">
                إرسال الطلب
              </button>
              <p className="text-xs text-foreground/60 text-right">سيتم فتح واتساب في نفس الصفحة لتجنب حظر النوافذ المنبثقة وإرسال طلبك مباشرة.</p>
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
            <div className="flex items-center gap-3 justify-end">
              <div className="leading-tight">
                <div className="font-display text-2xl font-bold text-gold">الرمز المثالي</div>
                <div className="text-[11px] tracking-widest text-ivory/60 uppercase">Al Ramz Al Methaly</div>
              </div>
              <img src={logo} alt="شعار" className="h-14 w-14 rounded-full shadow-gold" width={56} height={56} loading="lazy" />
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
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" dir="ltr" className="block text-right hover:text-gold transition">
                  واتساب: {SOCIAL.whatsappDisplay}
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
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
