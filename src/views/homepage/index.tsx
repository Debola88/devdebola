import React from "react";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import Project from "./_components/project";
import Experience from "./_components/experience";
import ContactSection from "./_components/contact";

const HomepageView = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
      <Experience />
      <ContactSection />
    </div>
  );
};

export default HomepageView;
