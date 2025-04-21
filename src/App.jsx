import "./App.css";
import Home from "./components/Home";
import Banner from "./components/layouts/Banner";

import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Works from "./components/layouts/Works";
import Sarvice from "./components/layouts/Sarvice";
import ScrollToTop from "./components/layouts/Scroll";
import Skills from "./components/layouts/Skills";

import { Routes, Route } from "react-router";
import Clients from "./components/layouts/Clients";

function App() {
  return (
    <>
      <div className="bg-[#070824] w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/sarvice" element={<Sarvice />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>

        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
