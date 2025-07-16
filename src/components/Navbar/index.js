import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">S.A TECHNO SERVICE</a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/aboutus" className="text-gray-700 hover:text-blue-600">About</a>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Services
                <svg className={`ml-2 w-4 h-4 transition-transform ${servicesOpen ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-blue-100 z-50">
                  <a href="/washing-machine-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Washing Machine Repair</a>
                  <a href="/fridge-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Fridge Repair</a>
                  <a href="/oven-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Oven Repair</a>
                  <a href="/ac-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">AC Repair</a>
                </div>
              )}
            </div>
            <a href="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="/faq" className="text-gray-700 hover:text-blue-600">FAQs</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          <button className="md:hidden" onClick={handleToggleMenu}>
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white pb-4${menuOpen ? "" : " hidden"}`}
      >
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</a>
        <a href="/aboutus" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
        <div className="relative">
          <button
            className="flex items-center w-full text-gray-700 hover:text-blue-600 focus:outline-none px-4 py-2"
            onClick={() => setServicesOpen((prev) => !prev)}
          >
            Services
            <svg className={`ml-2 w-4 h-4 transition-transform ${servicesOpen ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 z-50">
              <a href="/washing-machine-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Washing Machine Repair</a>
              <a href="/fridge-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Fridge Repair</a>
              <a href="/oven-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Oven Repair</a>
              <a href="/ac-repair" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">AC Repair</a>
            </div>
          )}
        </div>
        <a href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Testimonials</a>
        <a href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">FAQs</a>
        <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;