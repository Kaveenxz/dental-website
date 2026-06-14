import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar"; // will create
import TestimonialsCarousel from "@/components/TestimonialsCarousel"; // will create
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative bg-surface overflow-hidden">
        {/* Subtle radial gradient */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #4A9E8E 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-primary leading-tight animate-[fadeUp_0.6s_ease-out]">
              Precision care,
              <br />
              <span className="text-accent">for every patient.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-md animate-[fadeUp_0.6s_0.15s_ease-out_both]">
              Meridian Health is a private clinic focused on preventive medicine, chronic disease
              management, and whole‑person care.
            </p>
            <div className="flex gap-4 pt-2 animate-[fadeUp_0.6s_0.3s_ease-out_both]">
              <Link href="/book" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/about" className="btn-secondary">
                Meet Dr. Mercer
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="rounded-3xl overflow-hidden shadow-md lg:ml-auto animate-[fadeIn_0.8s_0.4s_ease-out_both]">
            <Image
              src="/images/clinic-interior.jpg"
              alt="Modern clinic interior"
              width={600}
              height={500}
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // optional
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary text-center mb-4">
              What we treat
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.slice(0, 6).map((service, i) => {
              const IconComponent = {
                Stethoscope,
                HeartPulse,
                Activity,
                Brain,
                Venus,
                Globe,
              }[service.icon] || Stethoscope;
              return (
                <ScrollReveal key={service.slug} staggerClass={`stagger-${i + 1}`}>
                  <ServiceCard
                    icon={IconComponent}
                    title={service.title}
                    description={service.shortDesc}
                    slug={service.slug}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full border-4 border-accent/30 p-2">
              <div className="rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/dr-mercer.jpg"
                  alt="Dr. Alana Mercer"
                  width={320}
                  height={320}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,..."
                />
              </div>
            </div>
            {/* Decorative arc */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-accent/20 rounded-tr-full hidden lg:block" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary">
              Dr. Alana Mercer
            </h2>
            <p className="text-accent font-medium mt-2">MBBS, FRACGP — 15 years in private practice</p>
            <p className="text-text-muted mt-6 leading-relaxed">
              Dr. Mercer believes that exceptional healthcare starts with listening. With over 15 years
              of clinical experience, she combines evidence‑based medicine with a compassionate,
              whole‑person approach. Whether you need a preventive check‑up or ongoing disease
              management, you’ll be treated as a partner in your own health.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Fellow of the Royal Australian College of General Practitioners",
                "Former Senior Registrar at Royal Prince Alfred Hospital",
                "Special interest in preventive & lifestyle medicine",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-text-dark">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 text-accent font-medium mt-6 hover:text-primary">
              Read full profile <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary text-center">
              What our patients say
            </h2>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Booking CTA Strip */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">
            Ready to take control of your health?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Book a private consultation with Dr. Mercer and start your journey to better health.
          </p>
          <Link
            href="/book"
            className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-dm font-medium text-lg hover:brightness-110 hover:scale-105 transition-all duration-300"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}