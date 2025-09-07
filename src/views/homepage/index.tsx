import React from "react";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import Project from "./_components/project";
import Experience from "./_components/experience";
import ContactSection from "./_components/contact";
import SkillsSection from "./_components/skill";
import Navbar from "./_components/navbar";

const HomepageView = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <SkillsSection />
      <Project />
      <Experience />
      <ContactSection />
    </div>
  );
};

export default HomepageView;
