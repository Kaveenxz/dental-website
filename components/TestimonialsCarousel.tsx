"use client";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Dr. Mercer took the time to really understand my health concerns. I finally feel heard.",
    name: "Sarah L.",
  },
  {
    quote:
      "The preventive check‑up was incredibly thorough. I walked away with a clear plan for my wellbeing.",
    name: "Michael T.",
  },
  {
    quote:
      "A beautiful clinic with a human touch. Meridian Health sets the standard for private care.",
    name: "Priya K.",
  },
  {
    quote:
      "I’ve never felt rushed. Dr. Mercer is empathetic, professional, and truly brilliant.",
    name: "James R.",
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [autoPlay]);

  return (
    <div
      className="mt-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6 pb-4"
      ref={scrollRef}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} quote={t.quote} name={t.name} />
      ))}
    </div>
  );
}