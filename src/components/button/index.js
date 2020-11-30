import React from 'react';

const Button = (title, linkTo, size) => (
 <a href={linkTo} className={`button-component button-${size}`}>
  {title}
 </a>
);

export default Button;
