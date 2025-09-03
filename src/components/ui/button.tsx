import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  id?: string;
  icon?: ReactNode;
}

const Button = ({ text, className, id, icon, type, ...props }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        // Only prevent default and handle scroll for buttons with an id (navigation buttons)
        // Let form submission buttons work normally
        if (id && type !== 'submit') {
          e.preventDefault();
          const target = document.getElementById(id);
          if (target) {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
        // For submit buttons or buttons without id, let the normal behavior happen
      }}
      type={type}
      className={`${className ?? ''} cta-wrapper`}
      id={id}
      {...props}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          {icon}
        </div>
      </div>
    </button>
  );
};

export default Button;