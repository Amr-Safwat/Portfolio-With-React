import React from 'react'
import './hero.css'
function Hero() {
  return (
    <div className="hero section-p">
      <div className="container">
        <div className="sec-left">
          <span className="hello wow bounceInUp">Hello, I'm</span>
          <div className="name wow bounceInUp" data-wow-delay=".2s">
            Amr Safwat
          </div>

          <div className="jop-title wow bounceInUp" data-wow-delay=".4s">
            Front End Developer
          </div>
          <button className="hire-me wow bounceInUp" data-wow-delay=".6s">
            Hire Me
          </button>
        </div>
        <div className="sec-right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero
