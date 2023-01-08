import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Team />
      <Careers />
      <Footer />
    </>
  );
};

export default App;
