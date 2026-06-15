"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Cake,
  Stethoscope,
  FileText,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                        */
/* ------------------------------------------------------------------ */
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
  "Women's Health",
  "Travel Medicine",
];

const timeSlots = [
  { label: "Morning", time: "8:00 AM – 12:00 PM", icon: "🌅" },
  { label: "Afternoon", time: "12:00 PM – 4:00 PM", icon: "☀️" },
  { label: "Evening", time: "4:00 PM – 6:00 PM", icon: "🌆" },
];

const stepLabels = ["Personal Details", "Appointment", "Confirm"];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                   */
/* ------------------------------------------------------------------ */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

/* ================================================================ */
/*  Main Component                                                      */
/* ================================================================ */
export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const errs: typeof errors = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.dob) errs.dob = "Date of birth is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: typeof errors = {};
    if (!formData.service) errs.service = "Please select a service";
    if (!formData.date) errs.date = "Please choose a date";
    if (!formData.timeSlot) errs.timeSlot = "Please select a time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setDirection(1);
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setDirection(1);
      setStep(3);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(1, s - 1));
  };

  const handleConfirm = () => {
    setSubmitted(true);
  };

  /* ============================================================ */
  /*  Success State                                                  */
  /* ============================================================ */
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center py-16 bg-white rounded-3xl shadow-xl border border-surface-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
          >
            <CheckCircle size={48} className="text-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-playfair font-semibold text-primary"
          >
            Booking Confirmed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-text-muted mt-3 max-w-md mx-auto"
          >
            Thank you, {formData.firstName}. We'll be in touch within 24 hours
            to finalise your appointment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 inline-flex items-center gap-2 text-accent font-medium"
          >
            <Sparkles size={18} />
            A confirmation email has been sent to {formData.email}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  /* ============================================================ */
  /*  Form Layout                                                     */
  /* ============================================================ */
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step > i + 1
                    ? "bg-accent text-white"
                    : step === i + 1
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-surface-2 text-text-muted"
                }`}
              >
                {step > i + 1 ? (
                  <CheckCircle size={16} />
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span
                className={`hidden sm:block text-sm font-medium transition-colors ${
                  step >= i + 1 ? "text-primary" : "text-text-muted"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((step - 1) / 2) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-accent rounded-full"
          />
        </div>
      </div>

      {/* Step content with animated transitions */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <Step1
              key="step1"
              direction={direction}
              formData={formData}
              update={update}
              errors={errors}
              focused={focused}
              setFocused={setFocused}
              onNext={nextStep}
            />
          )}
          {step === 2 && (
            <Step2
              key="step2"
              direction={direction}
              formData={formData}
              update={update}
              errors={errors}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {step === 3 && (
            <Step3
              key="step3"
              direction={direction}
              formData={formData}
              onPrev={prevStep}
              onConfirm={handleConfirm}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================================================================ */
/*  Step 1: Personal Details                                            */
/* ================================================================ */
function Step1({
  direction,
  formData,
  update,
  errors,
  focused,
  setFocused,
  onNext,
}: any) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-5"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <User size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-playfair font-semibold text-primary">
          Personal Details
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FloatingInput
          label="First Name"
          icon={<User size={16} />}
          value={formData.firstName}
          onChange={(v) => update("firstName", v)}
          error={errors.firstName}
          focused={focused}
          setFocused={setFocused}
          field="firstName"
        />
        <FloatingInput
          label="Last Name"
          icon={<User size={16} />}
          value={formData.lastName}
          onChange={(v) => update("lastName", v)}
          error={errors.lastName}
          focused={focused}
          setFocused={setFocused}
          field="lastName"
        />
      </div>

      <FloatingInput
        label="Email Address"
        icon={<Mail size={16} />}
        type="email"
        value={formData.email}
        onChange={(v) => update("email", v)}
        error={errors.email}
        focused={focused}
        setFocused={setFocused}
        field="email"
      />
      <FloatingInput
        label="Phone Number"
        icon={<Phone size={16} />}
        type="tel"
        value={formData.phone}
        onChange={(v) => update("phone", v)}
        error={errors.phone}
        focused={focused}
        setFocused={setFocused}
        field="phone"
      />
      <FloatingInput
        label="Date of Birth"
        icon={<Cake size={16} />}
        type="date"
        value={formData.dob}
        onChange={(v) => update("dob", v)}
        error={errors.dob}
        focused={focused}
        setFocused={setFocused}
        field="dob"
      />

      <div className="pt-4">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-dm font-medium text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/20"
        >
          Continue
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}

/* ================================================================ */
/*  Step 2: Appointment Details                                         */
/* ================================================================ */
function Step2({
  direction,
  formData,
  update,
  errors,
  onNext,
  onPrev,
}: any) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-5"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Calendar size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-playfair font-semibold text-primary">
          Appointment Details
        </h2>
      </div>

      {/* Service selection */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <Stethoscope size={16} className="text-accent" />
          Select Service
        </label>
        <div className="grid grid-cols-2 gap-3">
          {servicesList.map((s) => (
            <button
              key={s}
              onClick={() => update("service", s)}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                formData.service === s
                  ? "border-accent bg-accent/5 text-accent font-medium"
                  : "border-surface-2 text-text-dark hover:border-accent/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {errors.service && (
          <p className="text-red-500 text-xs mt-2">{errors.service}</p>
        )}
      </div>

      {/* Date picker */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <Calendar size={16} className="text-accent" />
          Preferred Date
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => update("date", e.target.value)}
          className={`w-full bg-surface border rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-accent transition-colors ${
            errors.date ? "border-red-400" : "border-surface-2"
          }`}
        />
        {errors.date && (
          <p className="text-red-500 text-xs mt-2">{errors.date}</p>
        )}
      </div>

      {/* Time slots */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <Clock size={16} className="text-accent" />
          Time Slot
        </label>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot.label}
              onClick={() => update("timeSlot", slot.label)}
              className={`p-4 rounded-xl border text-center transition-all ${
                formData.timeSlot === slot.label
                  ? "border-accent bg-accent text-white shadow-lg shadow-accent/20"
                  : "border-surface-2 bg-surface hover:border-accent/50"
              }`}
            >
              <span className="text-2xl block mb-1">{slot.icon}</span>
              <span
                className={`text-xs font-medium block ${
                  formData.timeSlot === slot.label
                    ? "text-white"
                    : "text-primary"
                }`}
              >
                {slot.label}
              </span>
              <span
                className={`text-[10px] block mt-1 ${
                  formData.timeSlot === slot.label
                    ? "text-white/70"
                    : "text-text-muted"
                }`}
              >
                {slot.time}
              </span>
            </button>
          ))}
        </div>
        {errors.timeSlot && (
          <p className="text-red-500 text-xs mt-2">{errors.timeSlot}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <FileText size={16} className="text-accent" />
          Notes (optional)
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => update("notes", e.target.value)}
          rows={3}
          placeholder="Any specific concerns or requests..."
          className="w-full bg-surface border border-surface-2 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onPrev}
          className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 rounded-xl font-dm font-medium hover:bg-primary hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-dm font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20"
        >
          Review
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

/* ================================================================ */
/*  Step 3: Confirmation                                                */
/* ================================================================ */
function Step3({
  direction,
  formData,
  onPrev,
  onConfirm,
}: any) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-5"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <CheckCircle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-playfair font-semibold text-primary">
          Confirm Your Booking
        </h2>
      </div>

      <div className="bg-surface rounded-2xl p-6 space-y-4 border border-surface-2">
        <SummaryRow
          label="Full Name"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <SummaryRow label="Email" value={formData.email} />
        <SummaryRow label="Phone" value={formData.phone} />
        <SummaryRow label="Date of Birth" value={formData.dob} />
        <div className="border-t border-surface-2 pt-4">
          <SummaryRow label="Service" value={formData.service} />
          <SummaryRow label="Date" value={formData.date} />
          <SummaryRow label="Time Slot" value={formData.timeSlot} />
          {formData.notes && (
            <SummaryRow label="Notes" value={formData.notes} />
          )}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onPrev}
          className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 rounded-xl font-dm font-medium hover:bg-primary hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
          Edit
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-dm font-medium text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/20"
        >
          Confirm Booking
          <Sparkles size={20} />
        </button>
      </div>
    </motion.div>
  );
}

/* ================================================================ */
/*  Reusable Components                                                 */
/* ================================================================ */
function FloatingInput({
  label,
  icon,
  value,
  onChange,
  type = "text",
  error,
  focused,
  setFocused,
  field,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  focused: string | null;
  setFocused: (f: string | null) => void;
  field: string;
}) {
  return (
    <div className="relative">
      <label
        className={`absolute left-4 flex items-center gap-2 transition-all duration-200 pointer-events-none ${
          focused === field || value
            ? "top-2 text-xs text-accent"
            : "top-4 text-text-muted"
        }`}
      >
        {icon}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onFocus={() => setFocused(field)}
        onBlur={() => setFocused(null)}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-text-dark focus:outline-none transition-colors ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-surface-2 focus:border-accent"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-text-muted text-sm">{label}</span>
      <span className="font-medium text-primary text-sm text-right">
        {value}
      </span>
    </div>
  );
}