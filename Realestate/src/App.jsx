import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Hero from "./section/Hero";
import About from "./section/About";
import Header from "./Components/Header";
import PopularArea from "./section/PopularArea";
import Clients from "./section/Clients";
import Services from "./section/Services";
import Contact from "./section/Contact";
import Properties from "./section/Properties";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularArea />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
