import React from 'react'
import './about.css'
import SectionTitle from '../sec-title/SectionTitle'
import Image from '../../assets/image.png'
import Button from '../button/Button';
import cvUrl from '../../assets/Amr_Safwat_CV_With_Project_Links.pdf';

function About() {
  return (
    <div className="about-sec section-p">
      <SectionTitle sectionName="ABOUT ME" />
      <div className="container">
        <div className="left-section">
          <img src={Image} alt="" />
        </div>
        <div className="right-section">
          <h1 className="name">Hi There! I'm Amr Safwat</h1>
          <h3 className="jop-title">Front End Developer</h3>
          <p>
            I am a Visual Designer with a strong focus on digital branding.
            Visul design seeks to attract, inspire, create desires and otivate
            people to respond to messages, with a view to making a favorable
            impact.
          </p>
          <ul className="Birthday-info">
            <li>
              <span>Birthday</span> : <span>July 05, 2001</span>
            </li>
            <li>
              <span>Phone</span> : <span>+201033792397</span>
            </li>
            <li>
              <span>Email</span> : <span>amrsafwat02@gmail.com</span>
            </li>
            <li>
              <span>From</span> : <span>Cairo, Egypt</span>
            </li>
            <li>
              <span>Language</span> : <span>English, Arabic</span>
            </li>
            <li>
              <span>Freelance</span> : <span>Available</span>
            </li>
          </ul>
          <Button text="Download CV" cv={true} url={cvUrl} />
        </div>
        <div className="wow" style={{color: 'red'}}>Content to Reveal Here</div>
        <section
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="5s"
        ></section>

        <section
          className="wow slideInRight"
          data-wow-offset="10"
          data-wow-iteration="10"
        ></section>
      </div>
    </div>
  );
}

export default