import { useEffect } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
