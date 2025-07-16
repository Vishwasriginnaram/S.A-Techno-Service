import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all([
      import("../../assests/washine_machine_repair.jpeg"),
      import("../../assests/fridge_repair.jpeg"),
      import("../../assests/microwave_oven_repair.jpg"),
      import("../../assests/AC_repair.jpeg"),
    ]).then((imgs) => {
      setImages(imgs.map((m) => m.default));
    });
  }, []);

  const slides = images.map((img, idx) => {
    const titles = [
      "Washing Machine Service",
      "Fridge Service",
      "Microwave Oven Service",
      "AC Service",
    ];
    const descs = [
      "Expert repair and maintenance for all washing machine brands.",
      "Fast and reliable fridge repair at your doorstep.",
      "Microwave oven service and parts replacement.",
      "Professional AC installation and repair.",
    ];
    return { image: img, title: titles[idx], desc: descs[idx] };
  });

  const services = [
    {
      icon: "bi bi-droplet-half",
      title: "Washing Machine Repair",
      desc: "Expert repair for all brands",
      link: "/washing-machine-repair",
    },
    {
      icon: "bi bi-snow",
      title: "Fridge Repair",
      desc: "Fast and reliable fridge repair",
      link: "/fridge-repair",
    },
    {
      icon: "bi bi-lightning-charge",
      title: "Microwave Repair",
      desc: "Microwave oven service and parts replacement",
      link: "/oven-repair",
    },
    {
      icon: "bi bi-wind",
      title: "AC Repair",
      desc: "Professional AC installation and repair",
      link: "/ac-repair",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    <>
      <Helmet>
        <title>S.A Techno Service | Home Appliance Repair Services</title>
        <meta
          name="description"
          content="Professional appliance repair services in Kukatpally, Pragati Nagar, Nizampet. Washing Machine, Fridge, Microwave, AC repairs & more."
        />
        <meta
          name="keywords"
          content="AC repair, fridge service, washing machine repair, microwave repair, Kukatpally, Pragati Nagar, Nizampet, Hyderabad"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://satechnoservice.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="S.A Techno Service - Appliance Repair at Your Doorstep" />
        <meta property="og:description" content="Quick, affordable, and reliable appliance repair services in Hyderabad." />
        <meta property="og:image" content="https://satechnoservice.in/assets/og-image.webp" />
        <meta property="og:url" content="https://satechnoservice.in/" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:title" content="S.A Techno Service" />
        <meta name="twitter:description" content="Reliable appliance repair services near you!" />
        <meta name="twitter:image" content="https://satechnoservice.in/assets/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://satechnoservice.in/#business",
            "name": "S.A Techno Service",
            "image": "https://satechnoservice.in/assets/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kukatpally, Pragati Nagar, Nizampet",
              "addressRegion": "Telangana",
              "addressCountry": "India"
            },
            "telephone": "+91-9848734770",
            "url": "https://satechnoservice.in",
            "sameAs": [
              "https://www.facebook.com/satechnoservice",
              "https://www.instagram.com/satechnoservice"
            ]
          }
        `}</script>
      </Helmet>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}></Suspense>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-12">
        {/* Carousel */}
        <div className="relative h-[350px] md:h-[550px] w-auto overflow-hidden shadow-2xl mx-auto mb-8">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`flex justify-center items-center absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              style={{ width: "100%" }}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="w-auto absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-lg">{slide.title}</h2>
                <p className="text-base md:text-xl mb-3 md:mb-6 drop-shadow">{slide.desc}</p>
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-5 md:px-8 rounded-full shadow-lg transition duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Dots BELOW image */}
        <div className="w-full flex justify-center mt-2 mb-4 md:mb-8">
          {slides.map((_, dotIdx) => (
            <span
              key={dotIdx}
              onClick={() => setCurrent(dotIdx)}
              className={`w-2 md:w-3 h-2 md:h-3 mx-2 rounded-full cursor-pointer transition border-2 border-blue-500 ${dotIdx === current ? "bg-blue-600" : "bg-white"} shadow-lg`}
            ></span>
          ))}
        </div>
        {/* Services Section */}
        <section className="pt-2 pb-8 md:py-16">
          <div className="max-w-7xl mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 text-center mb-6 md:mb-12">Our Services</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col justify-between h-full border-t-4 border-blue-400 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center text-center flex-grow">
                    <i className={`${service.icon} text-5xl text-blue-500 mb-4`}></i>
                    <h3 className="text-base md:text-lg font-bold text-blue-700 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{service.desc}</p>
                  </div>
                  <div className="text-center mt-auto">
                    <a href={service.link} className="text-blue-600 hover:text-blue-700 font-semibold inline-block">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-6 md:py-16 bg-gradient-to-br from-gray-100 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-6 md:mb-12">Why Choose S.A Techno Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
              {[
                { icon: "🛠️", title: "Certified Technicians", desc: "Our experts are certified and highly trained" },
                { icon: "⚡", title: "Fast Response", desc: "Quick service at your doorstep" },
                { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges, clear quotes" },
                { icon: "⭐", title: "Top Rated", desc: "Loved by hundreds of customers" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl shadow-xl p-4 md:p-8 text-center border-t-4 border-gray-300 hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-4xl mb-2 md:mb-4 inline-block text-blue-500">{feature.icon}</span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="px-2 md:px-4 py-6 md:py-16 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-3xl mx-auto text-center mb-4 md:mb-8 px-3 md:px-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-2">What Our Clients Say</h2>
            <p className="text-sm text-gray-600">Real stories from happy customers across all our services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto px-1 md:px-4">
            {[
              {
                name: "John Smith",
                role: "AC Repair Customer",
                icon: "bi bi-person-circle",
                text: "QuickFix repaired my AC in no time! The technician was professional and friendly. Highly recommended!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Washing Machine Service",
                icon: "bi bi-person-fill",
                text: "Excellent service for my washing machine. Transparent pricing and quick response.",
                rating: 5,
              },
              {
                name: "Rahul Verma",
                role: "Fridge Repair",
                icon: "bi bi-person-badge",
                text: "My fridge was fixed the same day I called. Great experience!",
                rating: 4,
              },
              {
                name: "Sneha Patel",
                role: "Microwave Service",
                icon: "bi bi-person-hearts",
                text: "Very polite staff and excellent microwave repair. Will use again!",
                rating: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400"
              >
                <i className={`${t.icon} text-4xl text-blue-500 mb-1 md:mb-2`}></i>
                <h3 className="text-base font-bold text-blue-700 mb-0.5">{t.name}</h3>
                <span className="text-xs text-gray-500 mb-1">{t.role}</span>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic text-xs mb-1 text-center">“{t.text}”</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-6 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-12">Contact Us</h2>
            <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
              <div>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-2 md:space-y-6 p-5 md:p-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="service">Service Type</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Refrigerator Repair">Refrigerator Repair</option>
                      <option value="Washing Machine Repair">Washing Machine Repair</option>
                      <option value="Microwave Repair">Microwave Repair</option>
                      <option value="AC Repair">AC Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
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
                </form>
              </div>
              <div className="bg-blue-50 p-4 md:p-8 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-2 md:space-y-4">
                  <p className="flex items-center"><span className="text-blue-600 mr-2 md:mr-4">📍</span>Doorstep Service: Kukatpally, Pragati Nagar, Nizampet (Primary)</p>
                  <p className="flex items-center"><span className="text-blue-600 mr-2 md:mr-4">🏙️</span>Also Available: Across Hyderabad</p>
                  <p className="flex items-center"><span className="text-blue-600 mr-2 md:mr-4">📞</span>+91 98487 34770</p>
                  <p className="flex items-center"><span className="text-blue-600 mr-2 md:mr-4">✉️</span>satechnoservice123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
