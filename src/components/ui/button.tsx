import Image from "next/image";
import React from "react";
import btnarrow from "@/assets/public/images/arrow-down.svg";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({ text, className, id }: ButtonProps) => {
  return (
    <a 
    onClick={(e)=> {
      e.preventDefault();
      const target = document.getElementById('')

      if(target && id) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({top, behavior: 'smooth'})
      }
    }}
    className={`${className ?? ''} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text} </p>
        <div className="arrow-wrapper">
          <Image src={btnarrow} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;