import React from 'react';
import './about.css';
import SectionTitle from '../sec-title/SectionTitle';
import Image from '../../assets/image.png';
import Button from '../button/Button';
import cvUrl from '../../assets/Amr_Safwat_CV_With_Project_Links.pdf';

function About() {
  return (
    <div className="about-sec section-p" id="about">
      <SectionTitle sectionName="ABOUT ME" />
      <div className="container">
        <div className="left-section wow slideInRight" data-wow-delay=".1s">
          <img src={Image} alt="" />
        </div>
        <div className="right-section wow slideInRight" data-wow-delay=".2s">
          <h1 className="name wow slideInRight" data-wow-delay=".3s">
            Hi There! I'm Amr Safwat
          </h1>
          <h3 className="jop-title wow slideInRight" data-wow-delay=".4s">
            Front End Developer
          </h3>
          <p className="wow slideInRight" data-wow-delay=".5s">
            I am a Visual Designer with a strong focus on digital branding.
            Visul design seeks to attract, inspire, create desires and otivate
            people to respond to messages, with a view to making a favorable
            impact.
          </p>
          <ul className="Birthday-info">
            <li className="wow slideInRight" data-wow-delay=".6s">
              <span>Birthday</span> : <span>July 05, 2001</span>
            </li>
            <li className="wow slideInRight" data-wow-delay=".7s">
              <span>Phone</span> : <span>+201033792397</span>
            </li>
            <li className="wow slideInRight" data-wow-delay=".8s">
              <span>Email</span> : <span>amrsafwat02@gmail.com</span>
            </li>
            <li className="wow slideInRight" data-wow-delay=".9s">
              <span>From</span> : <span>Cairo, Egypt</span>
            </li>
            <li className="wow slideInRight" data-wow-delay="1s">
              <span>Language</span> : <span>English, Arabic</span>
            </li>
            <li className="wow slideInRight" data-wow-delay="1.1s">
              <span>Freelance</span> : <span>Available</span>
            </li>
          </ul>
          <div className="wow slideInRight" data-wow-delay="1.2s">
            <Button text="Download CV" cv={true} url={cvUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
