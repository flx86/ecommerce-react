import React from "react";

// import HeroSvg from "./svg/Hero.svg";
import LaptopGirl from "../svg/laptop-girl.svg";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-img-container">
          <div className="call-to-action">
            <div className="laptop-girl-container">
              <img src={LaptopGirl} alt="laptop girl" />
            </div>
            <div className="text-container">
              <h1 className="big-text">find your perfect computer with us.</h1>
              <button className="btn">go shop now</button>
            </div>
          </div>
        </div>
      </div>
      <main className="main">
        <h1 className="our-products">Our Products</h1>
      </main>
    </div>
  );
};

export default Home;
