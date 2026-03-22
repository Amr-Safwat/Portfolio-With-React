import React from 'react';
import './portfolio.css';
import SectionTitle from '../sec-title/SectionTitle';
import imageOne from '/src/assets/work1.png';
import imageTwo from '/src/assets/work2.png';

function Portfolio() {
  return (
    <div className="portfolio section-p">
      <SectionTitle sectionName={'PORTFOLIO'} />
      <div className="container">
        <div className="cards">
          <div className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.4s">
            <img src={imageTwo} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.6s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.8s">
            <img src={imageTwo} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="1.0s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="1.2s">
            <img src={imageTwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
