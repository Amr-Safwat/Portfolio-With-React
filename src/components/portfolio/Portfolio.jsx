import React from 'react';
import './portfolio.css';
import SectionTitle from '../sec-title/SectionTitle';
import imageOne from '/src/assets/work1.png';
import imageTwo from '/src/assets/work2.png';
import Button from '../button/Button';
import {images} from '../../utils/Images'

function Portfolio() {
  return (
    <div className="portfolio section-p" id="portfolio">
      <SectionTitle sectionName={'PORTFOLIO'} />
      <div className="container">
        <div className="cards">
          <div className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={imageOne} alt="" />
          </div>
          <div className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={imageOne} alt="" />
          </div>
        </div>
        <div className="button">
          <Button text={'Load More'} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
