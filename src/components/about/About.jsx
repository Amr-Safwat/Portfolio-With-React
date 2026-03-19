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
        <div className="left-section wow fadeInRight" data-wow-delay=".1s">
          <img src={Image} alt="" />
        </div>
        <div className="right-section wow fadeInRight" data-wow-delay=".2s">
          <h1 className="name">Hi There! I'm Amr Safwat</h1>
          <h3 className="jop-title">Front End Developer</h3>
          <p className="wow">
            I build responsive and dynamic web applications using React. I focus
            on clean UI, performance, and user experience. I also help with API
            integration, optimization, and fixing existing projects.
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
          <div>
            <Button text="Download CV" cv={true} url={cvUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
