import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Facilities />
      <Projects /> 
      <Testimonials />
      <Footer />
      <Contact />
    </div>
  );
};

export default App;
