import React, { useState } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value.trim();
    const address = form.address.value.trim();
    const message = form.message.value.trim();
    const timestamp = new Date().toISOString();

    const formData = {
      name,
      phone,
      service,
      address,
      message,
      timestamp,
    };

    try {
      const response = await fetch(process.env.REACT_APP_GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("✅ Form submitted successfully!");
        form.reset();
      } else {
        alert("⚠️ Submission failed. Please try again.");
        console.error(result);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("🚫 Network error or invalid script URL.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-20 pb-8 md:pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-blue-700  mb-6 md:mb-12">
          Contact Us
        </h1>
      <div className="">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 border-l-8 border-blue-400 overflow-hidden">
            <h2 className="text-xl font-bold text-blue-700 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <ContactInfo
                icon="bi-envelope"
                label="Email"
                value="satechnoservice123@gmail.com"
                link="mailto:satechnoservice123@gmail.com"
              />
              <ContactInfo
                icon="bi-telephone"
                label="Phone"
                value="+91 9848734770"
                link="tel:+919848734770"
              />
              <ContactInfo
                icon="bi-geo-alt"
                label="Address"
                value={
                   <>
                    Door Service: Kukatpally, Pragati Nagar, Nizampet (Primary)<br />
                    Also available: Across Hyderabad
                    </>
                  }
              />
              <ContactInfo
                icon="bi-clock"
                label="Office Hours"
                value={`Mon–Fri: 8 AM - 6 PM\nSat–Sun: 9 AM - 9 PM`}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-400">
            <h2 className="text-xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput label="Name *" name="name" type="text" required />
              <FormInput
                label="Phone Number *"
                name="phone"
                type="tel"
                pattern="[0-9]{10}"
                inputMode="numeric"
                required
              />
              <FormInput label="Address *" name="address" type="text" required />
              <FormSelect
                label="Service Type *"
                name="service"
                options={[
                  "Refrigerator Repair",
                  "Washing Machine Repair",
                  "Microwave Repair",
                  "AC Repair",
                ]}
                required
              />
              <FormTextarea label="Message *" name="message" rows={4} required />
              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </div>
        </div>
      </div>
        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
            Door Services
          </h2>
          <div className="rounded-2xl shadow-lg overflow-hidden h-[400px] border-l-8 border-blue-400 bg-blue-50">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/d/u/0/embed?mid=1bz1RcIyTcDDABsuW-QEONH2L7PesXeQ&ehbc=2E312F"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1bz1RcIyTcDDABsuW-QEONH2L7PesXeQ&ehbc=2E312F"
            className="inline-block mt-4 text-blue-700 hover:underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-geo-alt"></i> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Components
const ContactInfo = ({ icon, label, value, link }) => (
  <div className="flex items-start space-x-3">
    <i className={`bi ${icon} text-blue-600 text-xl`}></i>
    <div>
      <p className="text-gray-600">{label}</p>
      {link ? (
        <a href={link} className="text-base text-blue-700 hover:underline font-semibold">
          {value}
        </a>
      ) : (
        <p className="text-base text-gray-800 font-semibold">{value}</p>
      )}
    </div>
  </div>
);

const FormInput = ({ label, name, type, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 mb-2 font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

const FormTextarea = ({ label, name, rows, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 mb-2 font-semibold">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    ></textarea>
  </div>
);

const FormSelect = ({ label, name, options, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 mb-2 font-semibold">
      {label}
    </label>
    <select
      name={name}
      id={name}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      <option value="">Select a service</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold flex items-center justify-center"
  >
    {isSubmitting ? (
      <>
        <svg
          className="animate-spin mr-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
          ></path>
        </svg>
        Sending...
      </>
    ) : (
      "Send Message"
    )}
  </button>
);

export default ContactPage;
