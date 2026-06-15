// components/ServicesPreviewEnhanced.tsx
"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/services";

const iconComponents: Record<string, any> = {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
};

export default function ServicesPreviewEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const iconY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* ---- Background decoration (unchanged) ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1A3C5E_1px,transparent_1px),linear-gradient(to_bottom,#1A3C5E_1px,transparent_1px)] bg-[size:80px_80px]" />
        <motion.div
          style={{ y: iconY }}
          className="absolute top-20 left-10 text-accent/10"
        >
          <HeartPulse size={80} strokeWidth={1} />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
          className="absolute top-40 right-16 text-primary/5"
        >
          <Stethoscope size={100} strokeWidth={1} />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          className="absolute bottom-32 left-1/3 text-accent/5"
        >
          <Activity size={120} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading (unchanged) */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-playfair font-semibold text-primary"
          >
            What we treat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-text-muted max-w-xl mx-auto"
          >
            Comprehensive care across general medicine, prevention, and
            lifestyle‑driven health.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 mx-auto w-24 h-1 bg-accent rounded-full origin-center"
          />
        </div>

        {/* Carousel – cards with a gentle hover */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar">
          {services.map((service, i) => {
            const Icon = iconComponents[service.icon] || Stethoscope;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)",
                  borderColor: "#4A9E8E40",
                }}
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[340px] 
                           bg-white rounded-2xl p-8 shadow-sm 
                           border border-surface-2 
                           transition-colors duration-300
                           group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle background tint on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <div className="mb-6 text-accent bg-accent/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-medium text-sm group/link"
                  >
                    View details
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all link (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-dm text-sm uppercase tracking-widest group"
          >
            View all services
            <span className="w-8 h-px bg-primary group-hover:bg-accent transition-colors" />
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}