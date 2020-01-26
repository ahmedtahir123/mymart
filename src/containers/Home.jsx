import React, { Component } from "react";
import Slider from "../components/Slider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Body from "../components/Body";

function Home() {
  return (
    <div className="app">
      <Header />
      <Slider/>
      <Body/>
      <Footer/>



    </div>
  );
}

export default Home;
