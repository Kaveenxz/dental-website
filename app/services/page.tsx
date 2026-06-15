"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { services } from "@/lib/services";

/* ------------------------------------------------------------------ */
/*  Icon mapping                                                       */
/* ------------------------------------------------------------------ */
const iconComponents: Record<string, any> = {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
};

/* ------------------------------------------------------------------ */
/*  Animation helper                                                    */
/* ------------------------------------------------------------------ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

/* ================================================================ */
/*  Hero                                                              */
/* ================================================================ */
function Hero() {
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
      className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden"
    >
      {/* Soft dynamic background glow */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 text-center text-white"
      >
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
        >
          Expert Care, Tailored to You
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold leading-tight"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          From preventive screenings to chronic disease management, every
          service is delivered with precision, empathy, and a whole‑person
          approach.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">
            Explore Services
          </span>
          <ChevronDown size={22} className="animate-bounce" />
        </motion.div>
      </motion.div>

      
    </section>
  );
}

/* ================================================================ */
/*  Service Cards                                                     */
/* ================================================================ */
function ServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => {
            const Icon = iconComponents[service.icon] || Stethoscope;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-surface rounded-2xl p-8 shadow-sm border border-surface-2 hover:border-accent/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background tint on hover */}
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-medium group/link"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/*  Why Choose Us Strip (Trust)                                       */
/* ================================================================ */
function WhyChooseUs() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "15+", label: "Years Experience" },
          { value: "2,000+", label: "Patients Cared For" },
          { value: "98%", label: "Satisfaction Rate" },
          { value: "Same-day", label: "Appointments" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-playfair font-bold text-primary">
              {stat.value}
            </div>
            <div className="mt-2 text-text-muted text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/*  Final CTA                                                         */
/* ================================================================ */
function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 max-w-2xl mx-auto px-6 space-y-6"
      >
        <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">
          Ready to experience the difference?
        </h2>
        <p className="text-lg text-white/70">
          Book a private consultation with Dr. Mercer today.
        </p>
        <Link
          href="/book"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-xl font-dm font-medium text-lg hover:brightness-110 transition-all shadow-2xl shadow-accent/30"
        >
          Book Your Appointment
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
}

/* ================================================================ */
/*  Main Page                                                         */
/* ================================================================ */
export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}