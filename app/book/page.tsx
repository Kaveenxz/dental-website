import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <section className="pt-24 pb-20 bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-playfair font-semibold text-primary text-center mb-12">
          Book a Consultation
        </h1>
        <BookingForm />
      </div>
    </section>
  );
}