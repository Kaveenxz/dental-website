import Link from "next/link";
import { User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h4 className="font-playfair text-2xl font-bold text-primary">
            Meridian Health
          </h4>
          <p className="text-text-muted mt-2">Where precision meets care.</p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-2">
          <h5 className="font-medium text-primary mb-1">Quick Links</h5>
          <Link href="/about" className="text-text-muted hover:text-accent">About</Link>
          <Link href="/services" className="text-text-muted hover:text-accent">Services</Link>
          <Link href="/book" className="text-text-muted hover:text-accent">Book</Link>
          <Link href="/contact" className="text-text-muted hover:text-accent">Contact</Link>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="font-medium text-primary mb-1">Contact</h5>
          <p className="text-text-muted">123 Wellness Way, Sydney NSW 2000</p>
          <p className="text-text-muted">(02) 9123 4567</p>
          <p className="text-text-muted">hello@meridianhealth.com.au</p>
          <div className="flex gap-4 mt-4 text-accent">
            <User size={20} className="hover:text-primary cursor-pointer" />
            <User size={20} className="hover:text-primary cursor-pointer" />
            <User size={20} className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-surface-2 py-4 text-center text-text-muted text-sm">
        © {new Date().getFullYear()} Meridian Health. All rights reserved.
      </div>
    </footer>
  );
}