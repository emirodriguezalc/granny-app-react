import React from 'react';
import "./styles.css";
import arrowLeft from "../../icons/arrow-left.svg"
import home from "../../icons/home.svg"

const Header = ({ title, backTo }) => (
 <section className="header-section">
  <a href={backTo}>
   <img class="icon--action" src={arrowLeft} alt="icon--back" />
  </a>
  <h2 class="logo--text">
   {title}
  </h2>
  <a href="/home">
   <img class="icon--action" src={home} alt="icon--home" />
  </a>
 </section>
);

export default Header;
