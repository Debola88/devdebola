import React from "react";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import Project from "./_components/project";

const HomepageView = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
    </div>
  );
};

export default HomepageView;
