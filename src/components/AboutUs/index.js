import React from "react";
import "./index.css";
import about_us from "../../assests/about_us.jpg"

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern pt-32 md:pt-36 pb-16 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white md:text-6xl">About Our Journey</h1>
            <p className="mt-2 max-w-md mx-auto text-base text-gray-100 md:mt-5 md:text-xl md:max-w-3xl">
              Discover how we became the leading appliance repair service in the region
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white pt-8 pb-6 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Mobile view */}
              <img
                src={about_us}
                alt="About Us Mobile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Beginning</h2>
              <div className="ml-8 space-y-4 md:space-y-8">
                <div className="timeline-item md:pl-6">
                  <div className="timeline-dot"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Founded in 2015</h3>
                  <p className="text-[15px] md:text-base mt-2 text-gray-600">
                    Started with a small team of certified technicians serving local neighborhoods.
                  </p>
                </div>
                <div className="timeline-item md:pl-6">
                  <div className="timeline-dot"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Major Milestones</h3>
                  <p className="text-[15px] md:text-base mt-2 text-gray-600">
                    Expanded to cover the entire city with 24/7 emergency services.
                  </p>
                </div>
                <div className="timeline-item md:pl-6">
                  <div className="timeline-dot"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Present Day</h3>
                  <p className="text-[15px] md:text-base mt-2 text-gray-600">
                    Now serving over 5000 customers annually with a team of 50+ expert technicians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <section
        className="bg-gray-50 py-6 md:py-16"
        id="team"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-12" itemProp="name">
            Meet Our Expert Team
          </h2>
          <meta itemProp="description" content="Our certified appliance repair experts are dedicated to providing the best service in Hyderabad." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 px-1">
            {[{
              name: "Dr. Emma Johnson",
              role: "Technical Director",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              alt: "Dr. Emma Johnson - Technical Director"
            },
            {
              name: "Mr. Rajesh Kumar",
              role: "Senior Technician",
              img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              alt: "Mr. Rajesh Kumar - Senior Technician"
            },
            {
              name: "Ms. Priya Singh",
              role: "Customer Service Lead",
              img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              alt: "Ms. Priya Singh - Customer Service Lead"
            },
            {
              name: "Mr. Ahmed Ali",
              role: "Field Engineer",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              alt: "Mr. Ahmed Ali - Field Engineer"
            }].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/Person"
              >
                <img
                  src={member.img}
                  alt={member.alt}
                  className="w-full h-48 md:h-48 object-cover"
                  itemProp="image"
                  loading="lazy"
                />
                <div className="p-3 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900" itemProp="name">{member.name}</h3>
                  <p className="text-gray-600" itemProp="jobTitle">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-400 py-6 md:py-16">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Ready to Experience Our Service?</h2>
          <p className="text-white text-base md:text-lg mb-4 md:mb-8">
            Book a service call today and join our satisfied customers
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
