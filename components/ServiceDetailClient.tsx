// components/ServiceDetailClient.tsx
"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/services";
import FAQAccordion from "@/components/FAQAccordion";
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
} from "lucide-react";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
} from "lucide-react";

const iconComponents: Record<string, any> = {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
};

const fadeInUp:any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function Hero({ service }: { service: (typeof services)[0] }) {
  const Icon = iconComponents[service.icon] || Stethoscope;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={ref}
      className="relative min-h-[55vh] flex items-center bg-primary overflow-hidden"
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm"
        >
          <ChevronLeft size={16} />
          All Services
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 rounded-3xl bg-accent/20 flex items-center justify-center text-white shadow-lg"
          >
            <Icon size={48} strokeWidth={1.5} />
          </motion.div>

          <div>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold"
            >
              {service.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-4 text-xl text-white/70 max-w-2xl"
            >
              {service.shortDesc}
            </motion.p>
          </div>
        </div>
      </motion.div>

      
    </section>
  );
}

function Content({ service }: { service: (typeof services)[0] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              About This Service
            </h2>
            <p className="text-text-muted leading-relaxed text-lg">
              {service.fullDesc}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={16} className="text-accent" />
                  </div>
                  <span className="text-text-dark group-hover:text-primary transition-colors">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </motion.div>
        </div>

        <aside className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sticky top-28 space-y-6"
          >
            <div className="bg-surface backdrop-blur-xl rounded-2xl p-8 border border-surface-2 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">
                  Book This Service
                </h3>
              </div>
              <p className="text-text-muted text-sm mb-6">
                Ready to discuss {service.title.toLowerCase()}? Schedule a private consultation.
              </p>
              <Link
                href="/book"
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 rounded-xl font-dm font-medium hover:brightness-110 transition-all"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-surface backdrop-blur-xl rounded-2xl p-8 border border-surface-2 shadow-xl space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Contact & Hours
              </h3>
              <div className="flex items-start gap-3 text-text-muted">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span>123 Wellness Way, Sydney NSW 2000</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+61291234567" className="hover:text-accent transition-colors">
                  (02) 9123 4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:hello@meridianhealth.com.au" className="hover:text-accent transition-colors">
                  hello@meridianhealth.com.au
                </a>
              </div>
              <div className="flex items-start gap-3 text-text-muted">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p>Mon–Fri: 8am–6pm</p>
                  <p>Sat: 9am–1pm</p>
                </div>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}

function RelatedServices({ service }: { service: (typeof services)[0] }) {
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-playfair font-semibold text-primary text-center mb-12"
        >
          Related Services
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {related.map((rs, i) => {
            const RelIcon = iconComponents[rs.icon] || Stethoscope;
            return (
              <motion.div
                key={rs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/services/${rs.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-surface-2 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <RelIcon size={32} className="text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{rs.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{rs.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailClient({
  service,
}: {
  service: (typeof services)[0];
}) {
  return (
    <main className="overflow-hidden">
      <Hero service={service} />
      <Content service={service} />
      <RelatedServices service={service} />
    </main>
  );
}