import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutUs";
import ContactPage from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Faq from "./components/FAQ";
import WashingMachineRepair from "./components/WashingMachineRepair";
import FridgeRepair from "./components/FridgeRepair";
import ACRepair from "./components/ACRepair";
import OvenRepair from "./components/OvenRepair";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/washing-machine-repair" element={<WashingMachineRepair />} />
        <Route path="/fridge-repair" element={<FridgeRepair />} />
        <Route path="/ac-repair" element={<ACRepair />} />
        <Route path="/oven-repair" element={<OvenRepair />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
