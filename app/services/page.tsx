import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-24 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-semibold">Our Services</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <ScrollReveal key={s.slug} staggerClass={`stagger-${i + 1}`}>
                  <ServiceCard
                    icon={Icon}
                    title={s.title}
                    description={s.shortDesc}
                    slug={s.slug}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}