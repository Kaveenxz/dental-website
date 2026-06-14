import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle } from "lucide-react";

const values = [
  { icon: "💙", title: "Compassion", desc: "We treat every patient with genuine empathy and respect." },
  { icon: "🎯", title: "Precision", desc: "Evidence‑based diagnostics and tailored care plans." },
  { icon: "🪟", title: "Transparency", desc: "Clear communication, no hidden surprises." },
  { icon: "🔁", title: "Continuity", desc: "A lasting relationship for your lifelong health." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary text-white py-24 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-semibold">About Meridian Health</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <blockquote className="text-3xl lg:text-4xl font-playfair italic text-primary leading-relaxed">
              “We believe every patient deserves a doctor who truly listens.”
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-muted leading-relaxed">
              Meridian Health was founded on the principle that private healthcare should be warm,
              unhurried, and deeply personal. We combine the rigour of academic medicine with the
              compassion of a family doctor, creating a space where you feel safe to discuss your
              health openly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Expanded Doctor Bio */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative mx-auto lg:mx-0 w-72 h-72">
              <Image
                src="/images/dr-mercer.jpg"
                alt="Dr. Alana Mercer"
                fill
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold text-primary">Dr. Alana Mercer</h2>
              <p className="text-accent mt-2">MBBS, FRACGP</p>
              <p className="text-text-muted mt-4">
                After graduating with honours from the University of Sydney, Dr. Mercer trained at
                Royal Prince Alfred Hospital before moving into private practice. Her 15‑year career
                has been dedicated to preventive medicine and chronic disease management.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Education & Training</h3>
                <ul className="space-y-4 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-surface-2">
                  {[
                    { year: "2009", text: "MBBS, University of Sydney" },
                    { year: "2012", text: "FRACGP, Royal Australian College of GPs" },
                    { year: "2014", text: "Advanced Diploma in Lifestyle Medicine" },
                  ].map((item) => (
                    <li key={item.year} className="flex gap-4 items-start">
                      <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 z-10">
                        {item.year}
                      </span>
                      <span className="text-text-dark pt-2">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (3 steps) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary text-center mb-8">
              Our Approach
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Dashed line on desktop */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px border-t-2 border-dashed border-surface-2" />
            {[
              { step: "01", title: "Listen", desc: "We spend time understanding your story, concerns, and goals." },
              { step: "02", title: "Diagnose", desc: "Thorough examination and, if needed, advanced diagnostics." },
              { step: "03", title: "Support", desc: "A clear care plan with ongoing support and follow‑up." },
            ].map((item, i) => (
              <ScrollReveal key={i} staggerClass={`stagger-${i + 1}`} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values (2x2 grid) */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-playfair font-semibold text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm flex gap-5 items-start">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{v.title}</h3>
                  <p className="text-text-muted mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}