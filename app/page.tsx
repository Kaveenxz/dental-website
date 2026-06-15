"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import dentist from "/public/images/dentist.jpg";	
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
import { useCountUp } from "@/hook/useCountUp";
import { useMousePosition } from "@/hook/useMousePosition"; // we'll create this

import ServicesPreview from "@/components/ServicesPreviewEnhanced";
import TestimonialsShowcase from "@/components/TestimonialsShowcasePremium";
import CTABanner from "@/components/CTABannerEnhanced";


/* ---------- REUSABLE ANIMATION VARIANTS ---------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ---------- HERO ---------- */
function HeroSection() {
  const mouse = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-surface"
    >
      {/* ---- Animated floating orbs (CSS only) ---- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full border border-accent/20 animate-[spin_12s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-accent/10 backdrop-blur-sm animate-[float_15s_ease-in-out_infinite_2s]" />
        <div className="absolute top-2/3 right-1/5 w-32 h-32 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full py-20 relative z-10">
        {/* LEFT COLUMN */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            custom={0}
            className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-primary leading-tight"
          >
            Precision care,
            <br />
            <span className="text-accent relative inline-block">
              for every patient.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-lg text-text-muted max-w-md"
          >
            Meridian Health is a private clinic focused on preventive medicine,
            chronic disease management, and whole‑person care.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={2}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/book"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-dm font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-teal-600 transition-all duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Book a Consultation</span>
            </Link>
            <Link
              href="/about"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-dm font-medium hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              Meet Dr. Mercer
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Image with parallax & floating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
          style={{ y: imageParallax, opacity: opacityParallax }}
        >
          {/* Floating decorative ring */}
          <div className="absolute -inset-6 rounded-3xl border-2 border-accent/20 rotate-6 animate-[spin_25s_linear_infinite]" />
          <div className="absolute -inset-6 rounded-3xl border-2 border-primary/10 -rotate-6 animate-[spin_30s_linear_infinite_reverse]" />
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative z-10">
            <Image
              src="/images/dental.jpg"
              alt="Modern clinic interior"
              width={600}
              height={500}
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50 flex items-center gap-3 z-20">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Stethoscope size={24} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary">15+ Years</p>
              <p className="text-xs text-text-muted">Private Practice</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-text-muted">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-accent animate-bounce"
        />
      </motion.div>
    </section>
  );
}

/* ---------- TRUST BAR (glass version) ---------- */
function TrustBarEnhanced() {
  const stats = [
    { end: 15, suffix: "+", label: "Years Experience" },
    { end: 2000, suffix: "+", label: "Patients" },
    { end: 98, suffix: "%", label: "Satisfaction" },
    { end: 1, suffix: "", label: "Same-day Appointments", prefix: "✓ " },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative -mt-16 z-20">
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat, i) => (
          <div key={i} className="relative group">
            <div className="text-3xl md:text-4xl font-playfair font-bold text-primary">
              {stat.prefix || ""}
              {inView ? (
                <CountUp end={stat.end} duration={2000} />
              ) : (
                "0"
              )}
              {stat.suffix}
            </div>
            <div className="text-text-muted mt-1 text-sm">{stat.label}</div>
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-surface-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Separate component for CountUp to keep hooks clean
function CountUp({ end, duration }: { end: number; duration: number }) {
  const count = useCountUp(end, duration, true);
  return <span>{count}</span>;
}

/* ---------- SERVICES GRID (tilt + glass) ---------- */


/* ---------- DOCTOR SPOTLIGHT (with badge animation) ---------- */
function DoctorSpotlight() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#4A9E8E_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto lg:mx-0">
            {/* Rotating ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
            <div className="rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/dentist.png"
                alt="Dr. Alana Mercer"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
            {/* Floating credential badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-surface-2 flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                ✓
              </span>
              <span className="text-sm font-bold text-primary">FRACGP</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary">
            Dr. Alana Mercer
          </h2>
          <p className="text-accent font-medium">
            MBBS, FRACGP — 15 years in private practice
          </p>
          <p className="text-text-muted leading-relaxed">
            Dr. Mercer believes that exceptional healthcare starts with listening.
            With over 15 years of clinical experience, she combines evidence‑based
            medicine with a compassionate, whole‑person approach.
          </p>
          <ul className="space-y-3">
            {[
              "Fellow of the Royal Australian College of General Practitioners",
              "Former Senior Registrar at Royal Prince Alfred Hospital",
              "Special interest in preventive & lifestyle medicine",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span className="text-text-dark">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
          >
            Read full profile <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS (infinite smooth scroll) ---------- */


/* ---------- MAIN HOME PAGE ---------- */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBarEnhanced />
      <ServicesPreview />
      <DoctorSpotlight />
      <TestimonialsShowcase />
      <CTABanner />
    </>
  );
}