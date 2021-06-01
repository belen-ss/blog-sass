import React from "react";
import "./hero.sass";

const Hero = () => {
  return (
    <div className="hero-container">
      <h2>A modern publishing platform</h2>
      <h3>Grow your audience and build your online brand</h3>
      <div className="buttons-container">
        <button id="button-free">Start for free</button>
        <button id="button-more">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
