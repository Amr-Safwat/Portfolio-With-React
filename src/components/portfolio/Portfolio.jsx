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
          <div className="card">
            <img src={imageOne} alt="" />
          </div>
          <div className="card">
            <img src={imageTwo} alt="" />
          </div>
          <div className="card">
            <img src={imageOne} alt="" />
          </div>
          <div className="card">
            <img src={imageTwo} alt="" />
          </div>
          <div className="card">
            <img src={imageOne} alt="" />
          </div>
          <div className="card">
            <img src={imageTwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
