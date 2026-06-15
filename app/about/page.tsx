// app/about/page.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  HeartHandshake,
  Crosshair,
  ShieldCheck,
  RefreshCcw,
  ChevronDown,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                   */
/* ------------------------------------------------------------------ */
const fadeInUp:any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Values data (icons are Lucide components)                          */
/* ------------------------------------------------------------------ */
const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    desc: "We treat every patient with genuine empathy and respect, never forgetting the person behind the symptoms.",
  },
  {
    icon: Crosshair,
    title: "Precision",
    desc: "Evidence‑based diagnostics and tailored care plans — no guesswork, just clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    desc: "Clear communication, upfront costs, and no hidden surprises at any stage of your care.",
  },
  {
    icon: RefreshCcw,
    title: "Continuity",
    desc: "A lasting relationship with your doctor, because your health is a lifelong journey.",
  },
];

/* ------------------------------------------------------------------ */
/*  Education timeline data                                            */
/* ------------------------------------------------------------------ */
const education = [
  { year: "2009", text: "MBBS (Hons), University of Sydney" },
  { year: "2012", text: "FRACGP, Royal Australian College of GPs" },
  { year: "2014", text: "Advanced Diploma in Lifestyle Medicine" },
  { year: "2018", text: "Certificate in Travel Medicine" },
];

const approachSteps = [
  {
    step: "01",
    title: "Listen",
    desc: "We spend unhurried time understanding your story, concerns, and personal health goals.",
  },
  {
    step: "02",
    title: "Diagnose",
    desc: "Thorough examination and, when needed, advanced on‑site diagnostics to get the full picture.",
  },
  {
    step: "03",
    title: "Support",
    desc: "A clear, collaborative care plan with ongoing support and regular follow‑up.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="overflow-hidden">

      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold"
          >
            About Meridian Health
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
          >
            A private clinic where precision medicine meets whole‑person care,
            led by Dr. Alana Mercer.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs tracking-widest uppercase">Our Mission</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary leading-snug">
              “We believe every patient deserves a doctor who truly listens.”
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              This isn’t just a tagline — it’s the foundation of every
              consultation. We’ve created a space where appointments are never
              rushed, questions are welcomed, and your health is treated as a
              partnership, not a transaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface rounded-2xl p-8 border border-surface-2"
          >
            <Stethoscope size={32} className="text-accent mb-4" />
            <p className="text-text-dark leading-relaxed">
              Meridian Health combines the rigour of academic medicine with the
              warmth of a family doctor. We believe in clear explanations,
              evidence‑based decisions, and giving you the confidence to take
              control of your own wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_20%_80%,#4A9E8E_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* Doctor image with soft frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-72 h-72 lg:w-80 lg:h-80"
          >
            <div className="absolute -inset-3 rounded-2xl border border-accent/20 rotate-3" />
            <div className="absolute -inset-3 rounded-2xl border border-primary/10 -rotate-3" />
            <Image
              src="/images/dentist.png"
              alt="Dr. Alana Mercer"
              fill
              className="rounded-2xl object-cover shadow-xl relative z-10"
            />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary">
              Dr. Alana Mercer
            </h2>
            <p className="text-accent font-medium mt-2">
              MBBS (Hons), FRACGP — 15 Years in Private Practice
            </p>
            <p className="text-text-muted mt-6 leading-relaxed">
              After graduating with honours from the University of Sydney,
              Dr. Mercer trained at Royal Prince Alfred Hospital before moving
              into private practice. Her 15‑year career has been dedicated to
              preventive medicine, chronic disease management, and building
              lasting patient relationships.
            </p>

            {/* Education timeline (vertical) */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
                <GraduationCap size={20} className="text-accent" />
                Education & Training
              </h3>
              <ul className="space-y-5 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-surface-2">
                {education.map((item) => (
                  <li key={item.year} className="flex gap-5 items-start">
                    <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                      {item.year}
                    </span>
                    <span className="text-text-dark pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary">
              Our Approach
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              A calm, structured process that puts you at the centre.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Dashed line on desktop */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px border-t-2 border-dashed border-surface-2" />

            {approachSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-playfair font-semibold text-primary text-center mb-14"
          >
            Our Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-surface-2 flex gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {v.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}