import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "AC Repair Customer",
    text: "QuickFix repaired my AC in no time! The technician was professional and friendly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Washing Machine Service",
    text: "Excellent service for my washing machine. Transparent pricing and quick response.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Fridge Repair",
    text: "My fridge was fixed the same day I called. Great experience!",
    rating: 4,
  },
  {
    name: "Sneha Patel",
    role: "Microwave Service",
    text: "Very polite staff and excellent microwave repair. Will use again!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Fridge Repair",
    text: "Prompt and efficient fridge repair. Highly satisfied!",
    rating: 5,
  },
  {
    name: "Sara Lee",
    role: "AC Service",
    text: "AC servicing was quick and thorough. Great team!",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Microwave Repair",
    text: "Microwave fixed perfectly. Friendly staff.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Washing Machine Service",
    text: "Very professional and quick washing machine repair.",
    rating: 5,
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
  </svg>
);

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12 md:py-28 px-4">
      <div className="max-w-7xl md:max-w-6xl mx-auto text-center mb-6 md:mb-16">
        <h1 className="text-2xl md:text-5xl font-extrabold text-blue-700 mb-2 md:mb-4">
          What Our Clients Say
        </h1>
        <p className="text-base lg:text-lg text-gray-600">
          Real stories from happy customers across all our services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 max-w-7xl md:max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-3 md:p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400"
          >
            <i className="bi bi-person-hearts text-5xl text-blue-400 mb-2 md:mb-4"></i>
            <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-1">
              {t.name}
            </h3>
            <span className="text-sm text-gray-500 mb-2">{t.role}</span>
            <div className="flex mb-1 md:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < t.rating} />
              ))}
            </div>
            <p className="text-sm md:text-base text-gray-700 italic mb-2">
              “{t.text}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
