// components/CTABannerRefined.tsx
"use client";
import Link from "next/link";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import { useRef } from "react";                     
import { motion, useScroll, useTransform, useInView } from "framer-motion";
export default function CTABannerRefined() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-primary overflow-hidden"
    >
      {/* ---- Subtle background glow (static) ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl opacity-60" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-2xl" />
      </div>

      {/* ---- Bottom wave only ---- */}
     

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-semibold text-white leading-tight"
        >
          Ready to take control
          <br />
          <span className="text-accent">of your health?</span>
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-white/70 max-w-xl mx-auto"
        >
          Book a private consultation with Dr. Mercer and start your journey
          to whole‑person wellness.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-xl font-dm font-medium text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-2xl shadow-accent/30 group"
          >
            <Calendar size={22} />
            Book Your Appointment
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Phone number – calm, secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <a
            href="tel:+61291234567"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <Phone size={16} />
            (02) 9123 4567
          </a>
        </motion.div>

        {/* Trust stats – subtle, not dominant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex justify-center gap-10 text-white/80"
        >
          <div className="text-center">
            <p className="text-2xl font-playfair font-bold">15+</p>
            <p className="text-xs text-white/50 mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-playfair font-bold">2,000+</p>
            <p className="text-xs text-white/50 mt-1">Patients Cared For</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-playfair font-bold">98%</p>
            <p className="text-xs text-white/50 mt-1">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}