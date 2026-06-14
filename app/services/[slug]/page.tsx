import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  Venus,
  Globe,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Stethoscope;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="text-accent mb-4">
              <Icon size={48} strokeWidth={1} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary">
              {service.title}
            </h1>
          </div>
          <p className="text-lg text-text-muted leading-relaxed">{service.fullDesc}</p>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <FAQAccordion faqs={service.faqs} />
          </div>

          {/* Related services */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rs) => {
                const RelIcon = iconMap[rs.icon] || Stethoscope;
                return (
                  <Link
                    key={rs.slug}
                    href={`/services/${rs.slug}`}
                    className="bg-surface-2 rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <RelIcon size={24} className="text-accent mb-3" />
                    <h3 className="font-semibold">{rs.title}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-surface-2 rounded-2xl p-6 sticky top-24 space-y-6 shadow-sm">
            <h3 className="text-xl font-semibold text-primary">Book this service</h3>
            <p className="text-text-muted text-sm">
              Ready to discuss {service.title.toLowerCase()}? Schedule a private consultation.
            </p>
            <Link href="/book" className="btn-primary w-full text-center block">
              Book Appointment
            </Link>
            <hr className="border-surface-2" />
            <div className="text-sm text-text-muted space-y-1">
              <p className="font-medium text-primary">Contact</p>
              <p>(02) 9123 4567</p>
              <p>hello@meridianhealth.com.au</p>
            </div>
            <div className="text-sm text-text-muted space-y-1">
              <p className="font-medium text-primary">Clinic Hours</p>
              <p>Mon–Fri: 8am–6pm</p>
              <p>Sat: 9am–1pm</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}