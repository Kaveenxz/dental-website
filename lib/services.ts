export interface Service {
    slug: string;
    title: string;
    icon: string; // Lucide icon name
    shortDesc: string;
    fullDesc: string;
    benefits: string[];
    faqs: { q: string; a: string }[];
  }
  
  export const services: Service[] = [
    {
      slug: "general-medicine",
      title: "General Medicine",
      icon: "Stethoscope",
      shortDesc: "Comprehensive primary care for acute and chronic conditions.",
      fullDesc:
        "Our general medicine service offers expert diagnosis and management of a wide spectrum of health concerns. Dr. Mercer provides personalised treatment plans that combine evidence‑based medicine with compassionate, whole‑person care. From acute illnesses to ongoing health maintenance, you’re in trusted hands.",
      benefits: [
        "Same‑day appointments for urgent concerns",
        "Integrated chronic disease management",
        "On‑site pathology and referrals",
      ],
      faqs: [
        {
          q: "Do you accept walk‑ins?",
          a: "We prefer scheduled appointments to minimise waiting times, but same‑day slots are often available.",
        },
        {
          q: "Can I get a prescription refill?",
          a: "Yes, after a brief review. We may require a consultation if it’s been over 12 months.",
        },
      ],
    },
    {
      slug: "preventive-health-checks",
      title: "Preventive Health Checks",
      icon: "HeartPulse",
      shortDesc: "Proactive screenings to keep you well, longer.",
      fullDesc:
        "Prevention is the cornerstone of long‑term health. Our comprehensive health assessments include advanced blood panels, cardiovascular risk profiling, and lifestyle evaluations. Every check‑up is tailored to your age, gender, and family history, giving you a clear picture of your health and actionable next steps.",
      benefits: [
        "Early detection of silent diseases",
        "Personalised wellness plan",
        "Annual tracking of key health markers",
      ],
      faqs: [
        {
          q: "How long does a preventive check‑up take?",
          a: "About 45–60 minutes, including consultation and immediate tests.",
        },
        {
          q: "Will I receive a written report?",
          a: "Yes, you’ll get a detailed digital report within 48 hours.",
        },
      ],
    },
    {
      slug: "chronic-disease-management",
      title: "Chronic Disease Management",
      icon: "Activity",
      shortDesc: "Expert, ongoing care for long‑term conditions.",
      fullDesc:
        "Living with a chronic condition requires more than just medication. Dr. Mercer creates structured care plans for diabetes, hypertension, thyroid disorders, and more. We focus on regular monitoring, lifestyle adjustments, and clear communication so you can live life fully, despite your diagnosis.",
      benefits: [
        "Dedicated care coordinator",
        "Bulk‑billed annual cycle of care (private gap rates apply)",
        "Integrated dietitian and physiotherapist referrals",
      ],
      faqs: [
        {
          q: "Can you manage multiple chronic conditions?",
          a: "Absolutely. We specialise in complex, multi‑morbidity care.",
        },
        {
          q: "How often will I need appointments?",
          a: "Typically every 3–6 months, depending on stability.",
        },
      ],
    },
    {
      slug: "mental-wellness",
      title: "Mental Wellness",
      icon: "Brain",
      shortDesc: "Confidential mental health support with a whole‑person approach.",
      fullDesc:
        "Mental health is health. We offer a safe, non‑judgemental space to discuss anxiety, depression, stress, and burnout. Dr. Mercer provides initial assessment, mental health care plans, and referrals to trusted psychologists. Together we’ll build a path to resilience and calm.",
      benefits: [
        "Longer consultation times (30–45 mins)",
        "Private, discreet environment",
        "Bulk‑billed mental health care plans (eligibility criteria apply)",
      ],
      faqs: [
        {
          q: "Do you prescribe medication for mental health?",
          a: "Yes, where clinically appropriate and after thorough discussion.",
        },
        {
          q: "Is this service covered by private health insurance?",
          a: "Consultations are rebatable via Medicare; check your extras cover for psychology.",
        },
      ],
    },
    {
      slug: "womens-health",
      title: "Women’s Health",
      icon: "Venus",
      shortDesc: "Dedicated care for every stage of a woman’s life.",
      fullDesc:
        "From reproductive health to menopause and beyond, our women’s health service offers sensitive, expert care. Services include cervical screening, breast checks, contraceptive counselling, and hormonal management. We take the time to listen and empower you with knowledge.",
      benefits: [
        "Female GP available for all consultations",
        "Longer appointment times",
        "On‑site pregnancy testing & referrals",
      ],
      faqs: [
        {
          q: "Do you offer IUD insertion?",
          a: "We provide counselling and referral to a trusted gynaecologist.",
        },
        {
          q: "Can I have a telehealth consultation?",
          a: "Yes, for certain follow‑ups. Initial consults are preferably in‑clinic.",
        },
      ],
    },
    {
      slug: "travel-medicine",
      title: "Travel Medicine",
      icon: "Globe",
      shortDesc: "Stay healthy wherever your journey takes you.",
      fullDesc:
        "Comprehensive pre‑travel consultations including destination‑specific advice, vaccinations, and preventive medications. We’ll review your itinerary and medical history to ensure you’re fully protected, so you can travel with confidence.",
      benefits: [
        "Yellow fever vaccination accredited",
        "Tailored travel health kits",
        "Post‑travel illness assessment",
      ],
      faqs: [
        {
          q: "How far in advance should I book?",
          a: "Ideally 4–6 weeks before departure to complete vaccination schedules.",
        },
        {
          q: "Do you provide COVID‑19 travel tests?",
          a: "Yes, we offer PCR and rapid antigen tests for travel requirements.",
        },
      ],
    },
  ];