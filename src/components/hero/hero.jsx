import React from 'react';
import './hero.css';
import Button from '../button/Button';
function Hero() {
  return (
    <div id="home" className="hero section-p">
      <div className="container">
        <div className="sec-left">
          <span className="hello wow bounceInUp">Hello, I'm</span>
          <div className="name wow bounceInUp" data-wow-delay=".2s">
            Amr Safwat
          </div>

          <div className="jop-title wow bounceInUp" data-wow-delay=".4s">
            Front End Developer
          </div>
          <div className="hire-me wow bounceInUp" data-wow-delay=".6s">
            <Button text={'Hire Me'} />
          </div>
        </div>
        <div className="sec-right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
