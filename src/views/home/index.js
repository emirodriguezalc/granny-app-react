import React from 'react';
import "./styles.css";
import Button from '../../components/button';
import Header from '../../components/header';

const Home = () => (
 <section className="home-section">
  <Header title="Home" backTo="" />
  <Button title="Take care of my body" linkTo="/bodyMenu" size="big" />
  <Button title="Take care of my mind" linkTo="/mindMenu" size="big" />
  <Button title="Have fun" linkTo="/haveFun" size="big" />
 </section>
);

export default Home;
