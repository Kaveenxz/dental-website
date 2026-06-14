"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
};

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  service: "",
  date: "",
  timeSlot: "",
  notes: "",
};

const servicesList = [
  "General Medicine",
  "Preventive Health Checks",
  "Chronic Disease Management",
  "Mental Wellness",
  "Women’s Health",
  "Travel Medicine",
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const errs: typeof errors = {};
    if (!formData.firstName.trim()) errs.firstName = "Required";
    if (!formData.lastName.trim()) errs.lastName = "Required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      errs.email = "Valid email required";
    if (!formData.phone.trim()) errs.phone = "Required";
    if (!formData.dob) errs.dob = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: typeof errors = {};
    if (!formData.service) errs.service = "Select a service";
    if (!formData.date) errs.date = "Choose a date";
    if (!formData.timeSlot) errs.timeSlot = "Select a time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleConfirm = () => {
    // In a real app, send data to API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 bg-surface rounded-2xl shadow-sm">
        <CheckCircle size={64} className="mx-auto text-accent mb-4" />
        <h2 className="text-3xl font-playfair font-semibold text-primary">
          Booking Confirmed!
        </h2>
        <p className="text-text-muted mt-2 max-w-md mx-auto">
          We’ll be in touch within 24 hours to finalise your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex gap-2 mb-10">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`h-2 flex-1 rounded-full ${
              step >= num ? "bg-accent" : "bg-surface-2"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Personal Details */}
      {step === 1 && (
        <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
          <h2 className="text-2xl font-playfair font-semibold text-primary">
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(v) => update("firstName", v)}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => update("lastName", v)}
              error={errors.lastName}
            />
          </div>
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(v) => update("email", v)}
            error={errors.email}
          />
          <InputField
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={(v) => update("phone", v)}
            error={errors.phone}
          />
          <InputField
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={(v) => update("dob", v)}
            error={errors.dob}
          />
          <div className="pt-4">
            <button onClick={nextStep} className="btn-primary w-full">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Appointment Details */}
      {step === 2 && (
        <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
          <h2 className="text-2xl font-playfair font-semibold text-primary">
            Appointment Details
          </h2>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Service
            </label>
            <select
              value={formData.service}
              onChange={(e) => update("service", e.target.value)}
              className="w-full border border-surface-2 rounded-xl px-4 py-3 text-text-dark bg-white focus:outline-accent"
            >
              <option value="">Select a service</option>
              {servicesList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
          </div>
          <InputField
            label="Preferred Date"
            type="date"
            value={formData.date}
            onChange={(v) => update("date", v)}
            error={errors.date}
          />
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Time Slot
            </label>
            <div className="grid grid-cols-3 gap-3">
              {["Morning", "Afternoon", "Evening"].map((slot) => (
                <button
                  key={slot}
                  onClick={() => update("timeSlot", slot)}
                  className={`border rounded-xl py-2 text-sm font-medium transition-colors ${
                    formData.timeSlot === slot
                      ? "border-accent bg-accent text-white"
                      : "border-surface-2 hover:border-accent"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Notes (optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={3}
              className="w-full border border-surface-2 rounded-xl px-4 py-3 text-text-dark bg-white focus:outline-accent"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button onClick={prevStep} className="btn-secondary flex-1">
              Back
            </button>
            <button onClick={nextStep} className="btn-primary flex-1">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
          <h2 className="text-2xl font-playfair font-semibold text-primary">
            Confirm Your Booking
          </h2>
          <div className="bg-surface-2 rounded-2xl p-6 space-y-3">
            <SummaryRow label="Name" value={`${formData.firstName} ${formData.lastName}`} />
            <SummaryRow label="Email" value={formData.email} />
            <SummaryRow label="Phone" value={formData.phone} />
            <SummaryRow label="Date of Birth" value={formData.dob} />
            <SummaryRow label="Service" value={formData.service} />
            <SummaryRow label="Date" value={formData.date} />
            <SummaryRow label="Time" value={formData.timeSlot} />
            {formData.notes && <SummaryRow label="Notes" value={formData.notes} />}
          </div>
          <div className="flex gap-4 pt-4">
            <button onClick={prevStep} className="btn-secondary flex-1">
              Back
            </button>
            <button onClick={handleConfirm} className="btn-primary flex-1">
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper components (inline, no form tags)
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

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-text-muted">{label}</span>
      <span className="font-medium text-primary">{value}</span>
    </div>
  );
}