"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // Simulate send
    setSent(true);
  };

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left: contact form */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary mb-8">
            Get in touch
          </h1>
          {sent ? (
            <div className="bg-accent/10 rounded-2xl p-8 text-center">
              <Send size={40} className="mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-semibold text-primary">Message Sent</h2>
              <p className="text-text-muted mt-2">We’ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <InputField
                label="Full Name"
                value={form.name}
                onChange={(v) => handleChange("name", v)}
                error={errors.name}
              />
              <InputField
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => handleChange("email", v)}
                error={errors.email}
              />
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className={`w-full border rounded-xl px-4 py-3 text-text-dark bg-white focus:outline-accent ${
                    errors.message ? "border-red-400" : "border-surface-2"
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button onClick={handleSubmit} className="btn-primary flex items-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </div>
          )}
        </div>

        {/* Right: contact info card */}
        <div className="bg-surface rounded-2xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
          <div className="space-y-4 text-text-muted">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              123 Wellness Way, Sydney NSW 2000
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-accent" />
              (02) 9123 4567
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-accent" />
              hello@meridianhealth.com.au
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-accent" />
              <div>
                <p>Mon–Fri: 8am–6pm</p>
                <p>Sat: 9am–1pm</p>
              </div>
            </div>
          </div>
          {/* Map placeholder */}
          <div className="w-full h-48 rounded-xl overflow-hidden bg-surface-2">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d8e5f5f5f%3A0x5017d681632b5e0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1610000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-xs text-text-muted">
            (Replace with your exact clinic location in production)
          </p>
        </div>
      </div>
    </section>
  );
}

// Reusable input component (no form tag)
function InputField({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded-xl px-4 py-3 text-text-dark bg-white focus:outline-accent ${
          error ? "border-red-400" : "border-surface-2"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}