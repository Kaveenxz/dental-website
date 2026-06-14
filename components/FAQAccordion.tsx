"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-surface-2 rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-primary bg-white hover:bg-surface transition-colors"
          >
            {faq.q}
            <ChevronDown
              size={20}
              className={`transform transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-40 py-4" : "max-h-0"
            }`}
          >
            <p className="text-text-muted">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}