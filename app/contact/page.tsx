"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */
const fadeInUp:any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

/* ================================================================ */
/*  Hero Section                                                       */
/* ================================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden"
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 text-center text-white"
      >
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
        >
          We're Here to Help
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 text-xl text-white/70 max-w-2xl mx-auto"
        >
          Have a question or ready to book? We're just a message away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </motion.div>

      
    </section>
  );
}

/* ================================================================ */
/*  Contact Form + Info                                                */
/* ================================================================ */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Please enter your message";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSent(true);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary mb-8">
            Send us a message
          </h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-accent/5 rounded-2xl p-10 text-center border border-accent/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle size={64} className="mx-auto text-accent mb-6" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                Thank You!
              </h3>
              <p className="text-text-muted max-w-md mx-auto">
                Your message has been received. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-200 ${
                    focused === "name" || form.name
                      ? "top-2 text-xs text-accent"
                      : "top-4 text-text-muted"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-text-dark focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-surface-2 focus:border-accent"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-200 ${
                    focused === "email" || form.email
                      ? "top-2 text-xs text-accent"
                      : "top-4 text-text-muted"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-text-dark focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-surface-2 focus:border-accent"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-200 ${
                    focused === "message" || form.message
                      ? "top-2 text-xs text-accent"
                      : "top-4 text-text-muted"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  value={form.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={6}
                  className={`w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-text-dark focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-surface-2 focus:border-accent"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-dm font-medium text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/20"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-primary">
            Visit Us
          </h2>

          {/* Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "123 Wellness Way, Sydney NSW 2000",
                link: null,
              },
              {
                icon: Phone,
                title: "Phone",
                content: "(02) 9123 4567",
                link: "tel:+61291234567",
              },
              {
                icon: Mail,
                title: "Email",
                content: "hello@meridianhealth.com.au",
                link: "mailto:hello@meridianhealth.com.au",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-surface-2 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-medium text-primary hover:text-accent transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-medium text-primary">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Clinic Hours */}
          <div className="bg-surface rounded-2xl p-6 border border-surface-2">
            <div className="flex items-center gap-3 mb-5">
              <Clock size={22} className="text-accent" />
              <h3 className="text-lg font-semibold text-primary">
                Clinic Hours
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-text-muted">{item.day}</span>
                  <span
                    className={`font-medium ${
                      item.hours === "Closed"
                        ? "text-text-muted italic"
                        : "text-primary"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/book"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-dm font-medium hover:bg-primary/90 transition-all"
          >
            Book an Appointment
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================ */
/*  Full‑width Map                                                     */
/* ================================================================ */
function MapSection() {
  return (
    <section className="relative w-full h-[400px] bg-surface-2 overflow-hidden">
      <iframe
        title="Clinic Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d8e5f5f5f%3A0x5017d681632b5e0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1610000000000"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(30%)" }}
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Frosted overlay card */}
      <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 max-w-xs">
        <p className="text-sm font-semibold text-primary flex items-center gap-2">
          <MapPin size={16} className="text-accent" />
          Meridian Health
        </p>
        <p className="text-xs text-text-muted mt-1">
          123 Wellness Way, Sydney NSW 2000
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent mt-2 inline-block hover:underline"
        >
          Open in Google Maps →
        </a>
      </div>
    </section>
  );
}

/* ================================================================ */
/*  Main Page                                                           */
/* ================================================================ */
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ContactForm />
      <MapSection />
    </main>
  );
}