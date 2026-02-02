import React from 'react'
import "./Button.css";
import "../../universal.css"

const Button = ({ text, bgColor, textColor, className, link }) => {
  return (
    <a href={link}>
      <button
        className={`btn ${className}`}
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
