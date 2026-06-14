import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({ icon: Icon, title, description, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-surface-2 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 border-l-4 border-transparent hover:border-accent transition-all duration-300"
    >
      <div className="text-accent mb-4">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-muted mb-4">{description}</p>
      <span className="text-accent font-medium group-hover:underline">Learn more →</span>
    </Link>
  );
}