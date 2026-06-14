"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo with subtle glow */}
          <Link href="/" className="relative group flex flex-col">
            <span className="font-playfair text-2xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(74,158,142,0.4)]">
              Meridian Health
            </span>
            <span className="text-[11px] text-text-muted tracking-[0.2em] uppercase -mt-1">
              by Dr. Alana Mercer
            </span>
            {/* Subtle glow dot */}
            <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-accent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Desktop navigation with sliding indicator */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-text-dark/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {/* Active pill indicator */}
                  {isActive && (
                    <span className="absolute inset-0 bg-accent/10 rounded-full -z-10 animate-[fadeIn_0.3s_ease-out]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA with animated gradient border */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-dm font-medium text-sm text-white overflow-hidden group"
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-teal-600 rounded-xl transition-all duration-500 group-hover:scale-105" />
              {/* Shine effect on hover */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles size={16} className="relative z-10" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>

          {/* Mobile hamburger with morphing icon */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 top-2.5" : "rotate-0 top-0"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-primary rounded-full top-2 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 top-2.5" : "rotate-0 top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Scroll progress bar (thin line at bottom of nav) */}
        <div
          className={`h-[2px] bg-gradient-to-r from-accent/40 via-accent to-accent/40 origin-left transition-transform duration-1000 ${
            scrolled ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </nav>

      {/* Mobile menu overlay with frosted glass */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
        
        {/* Menu panel */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-white/80 backdrop-blur-2xl border-b border-white/60 shadow-2xl transition-all duration-500 origin-top ${
            mobileOpen
              ? "opacity-100 translate-y-0 scale-y-100"
              : "opacity-0 -translate-y-8 scale-y-75"
          }`}
        >
          <div className="px-8 py-10 flex flex-col gap-6">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-playfair transition-all duration-500 delay-[${
                    idx * 75
                  }ms] ${
                    mobileOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${
                    isActive
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-3 inline-block w-2 h-2 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
            <div
              className={`transition-all duration-500 delay-[375ms] ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 mt-2 px-8 py-3 rounded-xl bg-accent text-white font-dm font-medium hover:brightness-110 transition-all"
              >
                <Sparkles size={18} />
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}