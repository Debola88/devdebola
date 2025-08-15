import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  icon?: ReactNode;
}

const Button = ({ text, className, id, icon }: ButtonProps) => {
  return (
    <button 
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
          {icon}
        </div>
      </div>
    </button>
  );
};

export default Button;