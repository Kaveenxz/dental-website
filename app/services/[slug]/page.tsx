// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;  // ✅ params is now a Promise
}) {
  const { slug } = await params;       // ✅ await it first
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}