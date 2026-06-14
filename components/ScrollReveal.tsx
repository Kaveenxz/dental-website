"use client";
import { useScrollReveal } from "@/hook/useScrollReveal";

export default function ScrollReveal({
  children,
  className = "",
  staggerClass = "",
}: {
  children: React.ReactNode;
  className?: string;
  staggerClass?: string;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`fade-up ${className} ${isVisible ? "is-visible" : ""} ${staggerClass}`}
    >
      {children}
    </div>
  );
}