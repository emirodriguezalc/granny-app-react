import React from 'react';
import "./styles.css";
import button from "../../components/button"
import Button from '../../components/button';

const Home = () => (
 <section className="home-section">
  <Button title="Take care of my body" linkTo="/bodyMenu" size="big" />
  <Button title="Take care of my mind" linkTo="/mindMenu" size="big" />
  <Button title="Have fun" linkTo="/haveFun" size="big" />
 </section>
);

export default Home;
