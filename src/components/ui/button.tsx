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
    <a className={`${className ?? ''} cta-wrapper`} id={id}>
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