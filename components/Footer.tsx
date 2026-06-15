"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// Tiny inline SVG components for socials
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Australia/Sydney",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-transparent bg-gradient-to-b from-white/60 via-white/70 to-surface/80 backdrop-blur-xl">
      {/* Gradient top bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-50 hover:opacity-100 transition-opacity duration-500" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Brand */}
        <ScrollReveal staggerClass="stagger-1">
          <div>
            <Link href="/" className="group inline-block">
              <h4 className="font-playfair text-3xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(74,158,142,0.4)]">
                Meridian Health
              </h4>
            </Link>
            <p className="text-text-muted mt-2 font-inter italic">
              Where precision meets care.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-text-muted/60">
              <Clock size={14} className="text-accent" />
              <span>Sydney {time}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Links */}
        <ScrollReveal staggerClass="stagger-2">
          <div>
            <h5 className="font-dm text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
              Explore
            </h5>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/book", label: "Book" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-text-dark/80 hover:text-accent transition-colors group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Contact & Social */}
        <ScrollReveal staggerClass="stagger-3">
          <div>
            <h5 className="font-dm text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
              Get in touch
            </h5>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span>123 Wellness Way, Sydney NSW 2000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:+61291234567"
                  className="hover:text-accent transition-colors"
                >
                  (02) 9123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:hello@meridianhealth.com.au"
                  className="hover:text-accent transition-colors"
                >
                  hello@meridianhealth.com.au
                </a>
              </li>
            </ul>

            {/* Social icons with inline SVGs */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom shimmer */}
      <div className="border-t border-surface-2/50 py-5 text-center relative">
        <p className="text-sm text-text-muted bg-clip-text bg-gradient-to-r from-accent/60 via-accent to-accent/60 text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
          © {new Date().getFullYear()} Meridian Health. All rights reserved.
        </p>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </footer>
  );
}