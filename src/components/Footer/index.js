import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Brand Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">S.A Techno Service</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for all home appliance repairs. Quality service with expert professionals at your doorstep.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/aboutus" className="text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="hidden md:block">
          <h4 className="text-xl font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/fridge-repair" className="text-gray-400 hover:text-white transition">Refrigerator Repair</a></li>
            <li><a href="/washing-machine-repair" className="text-gray-400 hover:text-white transition">Washing Machine Repair</a></li>
            <li><a href="/oven-repair" className="text-gray-400 hover:text-white transition">Microwave Oven Repair</a></li>
            <li><a href="/ac-repair" className="text-gray-400 hover:text-white transition">AC Repair</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Email: <span className="text-white">satechnoservice123@gmail.com</span></li>
            <li>Phone: <span className="text-white">+91 9848734770</span></li>
            <li>Door Services: <span className="text-white">Kukatpally, Pragati Nagar, Nizampet(Primary)</span></li>
             <li><span className="text-white">Also Available: Across Hyderabad</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom border and copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">&copy; 2025 S.A Techno Service. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
