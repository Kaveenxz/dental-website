import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex-shrink-0 w-[85vw] sm:w-[calc(33.333%-1rem)] snap-center">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="#4A9E8E" color="#4A9E8E" />
        ))}
      </div>
      <p className="font-playfair italic text-text-dark mb-4 leading-relaxed">
        “{quote}”
      </p>
      <p className="font-medium text-primary">— {name}</p>
    </div>
  );
}