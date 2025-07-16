import React, { useState } from "react";
import oven_service1 from "../../assests/oven_service1.jpeg"
import oven_service2 from "../../assests/oven_service2.jpeg"

const faqs = [
  {
    question: "Do you repair all types of ovens?",
    answer: "Yes, we repair all types of microwave and convection ovens, including solo, grill, and combination models.",
  },
  {
    question: "Do you replace oven parts?",
    answer: "We replace faulty oven parts with genuine spares and provide warranty on all replacements.",
  },
  {
    question: "Is there a warranty on repairs?",
    answer: "Yes, all repairs and replaced parts come with a warranty.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, we offer same-day oven repair service in most cases.",
  },
  {
    question: "Do you service branded ovens?",
    answer: "Yes, we service all major oven brands.",
  },
];

const OvenRepair = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen pt-24 pb-8 md:py-24 md:px-2">
      <div className="max-w-7xl mx-auto md:bg-white md:rounded-2xl md:shadow-2xl p-3 md:p-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-700 text-center mb-3 md:mb-6">Oven Repair Experts</h1>
        <p className="text-base text-center text-gray-600 mb-4 md:mb-8">Professional repair for microwave, convection, and grill ovens</p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-8">
          <img
            src={oven_service1}
            alt="Oven Repair"
            className="rounded-xl w-full md:w-1/2 object-cover object-center h-64 border-4 border-blue-100 shadow"
            loading="lazy"
          />
          <img
            src={oven_service2}
            alt="Technician Repairing Oven"
            className="rounded-xl w-full md:w-1/2 object-cover object-center h-64 border-4 border-blue-100 shadow"
            loading="lazy"
          />
        </div>

        <h2 className="text-center text-xl font-bold text-blue-700 mb-4">We Repair All Types of Ovens</h2>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Microwave Oven",
            "Convection Oven",
            "Grill Oven",
            "Solo Oven",
            "Combination Oven",
          ].map((type, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4 shadow flex flex-col items-start">
              <span className="text-blue-700 font-semibold text-base mb-1">{type}</span>
              <span className="block w-16 h-1 bg-blue-300 rounded-full mb-1"></span>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-blue-700 mb-2">Our Services Include:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Not heating</li>
          <li>Plate not rotating</li>
          <li>Sparking inside oven</li>
          <li>Buttons not working</li>
          <li>Strange noises</li>
          <li>Complete oven servicing</li>
        </ul>

        <h2 className="text-lg font-bold text-blue-700 mb-4">Frequently Asked Questions</h2>
        <div className="mb-4 md:mb-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`mb-2 md:mb-4 rounded-xl border border-blue-100 bg-blue-50 shadow transition-all duration-300 ${
                openIdx === idx ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-3 md:px-6 py-2 md:py-4 text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span className="text-[15px] md:text-base font-semibold text-blue-700">{faq.question}</span>
                <svg
                  className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180 text-blue-500" : "rotate-0 text-blue-300"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 text-sm md:text-base overflow-hidden transition-all duration-500 ${
                  openIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
              >
                {openIdx === idx && <div>{faq.answer}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-3 md:p-6 text-center mt-4 md:mt-8">
          <h3 className="text-base md:text-lg font-bold text-blue-700 mb-2">Book Your Oven Repair Today</h3>
          <p className="text-gray-700 mb-4">
            Call us at <span className="font-semibold">+91 9848734770</span> or fill the form to schedule your service.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default OvenRepair;
