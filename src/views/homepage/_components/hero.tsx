/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
// import bgimage from "@/";
import firstimg from "@/assets/public/images/ideas.svg";
import secondimg from "@/assets/public/images/concepts.svg";
import thirdimg from "@/assets/public/images/code.svg";
import fourthimg from "@/assets/public/images/designs.svg";
import Button from "@/components/ui/button";
import HeroExperience from "@/components/models/heromodels/hero-experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface words {
  imagePath: any;
  text: string;
}

const words = [
  { text: "idea", imagePath: firstimg },
  { text: "Concepts", imagePath: secondimg },
  { text: "Code", imagePath: thirdimg },
  { text: "Designs", imagePath: fourthimg },
  { text: "idea", imagePath: firstimg },
  { text: "Concepts", imagePath: secondimg },
  { text: "Code", imagePath: thirdimg },
  { text: "Designs", imagePath: fourthimg },
];

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <Image src="/" height={100} width={100} alt="" className="" />
      </div>
      <div className=" hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <Image
                        height={100}
                        width={100}
                        src={word.imagePath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into real Projects</h1>
            <h1>that Deliever results</h1>
          </div>
          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I&apos;m Adebola based in Nigeria with a passion for code.
          </p>
          <Button
            className="md:w-60 md:h-16 w-60 h-12 my-4"
            id="button"
            text="see my work"
          />
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
