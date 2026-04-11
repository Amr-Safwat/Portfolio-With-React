import React from 'react';
import './hero.css';
import Button from '../button/Button';
import Image from '../../assets/image.png';
import {FaGithub} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {FaFacebook} from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';

function Hero() {
  return (
    <div id="home" className="hero section-p">
      <div className="container">
        <div className="sec-left">
          <span className="hello wow fadeInUp">Hello, I'm</span>
          <div className="name wow fadeInUp" data-wow-delay=".2s">
            Amr Safwat
          </div>

          <div className="jop-title wow fadeInUp" data-wow-delay=".4s">
            Front End Developer
          </div>
          <div className="hire-me wow fadeInUp" data-wow-delay=".6s">
            <Button text={'Hire Me'} />
          </div>
        </div>
        <div className="sec-right  wow fadeInRight" data-wow-delay=".8s">
          <img src={Image} alt="Amr Safwat" />
          <div className="social-icons wow fadeInLeft" data-wow-delay="1s">
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <IoLogoLinkedin />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <RiWhatsappFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
