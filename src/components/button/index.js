import React from 'react';
import "./styles.css";

const Button = ({ title, linkTo, size }) => (
 <a href={linkTo} className={`button-component button-${size}`}>
  {title}
 </a>
);

export default Button;
