

import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a service appointment?",
    answer: "You can book a service by calling us, using our contact form, or clicking the 'Book Now' button on our website.",
  },
  {
    question: "Which appliances do you repair?",
    answer: "We repair washing machines, refrigerators, microwaves, air conditioners, and more.",
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, all our technicians are certified and highly trained in their respective fields.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency repair services for urgent appliance issues.",
  },
  {
    question: "Is there a warranty on repairs?",
    answer: "We offer a warranty on all repairs. Please ask our team for details specific to your service.",
  },
  {
    question: "How do I pay for the service?",
    answer: "We accept cash, credit/debit cards, and UPI payments for your convenience.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can reschedule by contacting us at least 24 hours before your appointment.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "We use only genuine and high-quality spare parts for all repairs.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <section className="bg-gradient-to-br from-blue-50 via-gray-100 to-white min-h-screen py-8 md:py-20 px-4 pt-24">
      <div className="max-w-7xl md:max-w-3xl mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl md:text-4xl font-extrabold text-blue-700 mb-2 md:mb-4 drop-shadow-lg">Frequently Asked Questions</h2>
        <p className="text-base md:text-lg text-gray-600">Find answers to common queries about our services and support.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`mb-4 md:mb-6 rounded-2xl shadow-xl border-l-8 transition-all duration-300 ${openIdx === idx ? "border-blue-500 bg-white" : "border-gray-300 bg-blue-50"}`}
          >
            <button
              className="w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-5 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span className="text-base md:text-lg font-semibold text-blue-700">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${openIdx === idx ? "rotate-180 text-blue-500" : "rotate-0 text-gray-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`text-sm md:text-base px-4 pb-5 text-gray-700 overflow-hidden transition-all duration-500 ${openIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              {openIdx === idx && <div>{faq.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
