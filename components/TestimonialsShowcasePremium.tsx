// components/TestimonialsShowcasePremium.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Dr. Mercer took the time to really understand my health concerns. I finally feel heard.",
    name: "Sarah L.",
    role: "Patient since 2021",
    avatar: "/images/patient-1.jpg", // placeholder
  },
  {
    quote:
      "The preventive check‑up was incredibly thorough. I walked away with a clear plan for my wellbeing.",
    name: "Michael T.",
    role: "Patient since 2022",
    avatar: "/images/patient-2.jpg",
  },
  {
    quote:
      "A beautiful clinic with a human touch. Meridian Health sets the standard for private care.",
    name: "Priya K.",
    role: "Patient since 2020",
    avatar: "/images/patient-3.jpg",
  },
  {
    quote:
      "I’ve never felt rushed. Dr. Mercer is empathetic, professional, and truly brilliant.",
    name: "James R.",
    role: "Patient since 2023",
    avatar: "/images/patient-4.jpg",
  },
];

export default function TestimonialsShowcasePremium() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#4A9E8E_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-playfair font-semibold text-primary">
            What our patients say
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-md mx-auto">
            Real stories from people we’ve cared for.
          </p>
        </motion.div>

        {/* Hero testimonial with autoplay */}
        <div
          className="relative max-w-4xl mx-auto mb-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-10 lg:p-14 text-center relative border border-surface-2"
            >
              {/* Large quote icon */}
              <Quote
                size={60}
                className="text-accent/10 absolute top-6 left-6"
              />

              {/* Star rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill="#4A9E8E"
                    stroke="#4A9E8E"
                    className="text-accent"
                  />
                ))}
              </div>

              {/* Quote text with typewriter-like decoration */}
              <p className="text-2xl lg:text-3xl font-playfair italic text-primary leading-relaxed mb-8">
                “{testimonials[activeIndex].quote}”
              </p>

              {/* Patient info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-2">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={56}
                    height={56}
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image missing
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24' fill='none' stroke='%234A9E8E' stroke-width='1'%3E%3Ccircle cx='12' cy='8' r='4'/%3E%3Cpath d='M4 20c0-4 4-7 8-7s8 3 8 7'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-primary">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-text-muted text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-accent scale-125"
                    : "bg-surface-2 hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bento grid of secondary testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-surface-2 cursor-pointer group"
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    fill="#4A9E8E"
                    stroke="#4A9E8E"
                  />
                ))}
              </div>
              <p className="text-text-dark italic mb-4 line-clamp-3">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <span className="font-medium text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-dm text-sm uppercase tracking-widest hover:text-primary transition-colors group"
          >
            Share your experience
            <span className="w-8 h-px bg-accent group-hover:bg-primary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}