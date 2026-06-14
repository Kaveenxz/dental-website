"use client";
import { useCountUp } from "@/hook/useCountUp";
import { useScrollReveal } from "@/hook/useScrollReveal";

const stats = [
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 2000, suffix: "+", label: "Patients" },
  { end: 98, suffix: "%", label: "Satisfaction" },
  { end: 1, suffix: "", label: "Same-day Appointments", prefix: "✓ " },
];

// Separate component to use hooks properly
function StatItem({
  end,
  suffix,
  label,
  prefix = "",
  isVisible,
}: {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
  isVisible: boolean;
}) {
  const count = useCountUp(end, 2000, isVisible);

  return (
    <div className="px-4">
      <div className="text-3xl md:text-4xl font-playfair font-bold text-primary">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-text-muted mt-1 text-sm">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <div ref={ref} className="bg-white border-b border-surface-2 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-surface-2">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}