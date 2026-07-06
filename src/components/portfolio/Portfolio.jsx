import React, {useState} from 'react';
import './portfolio.css';
import SectionTitle from '../sec-title/SectionTitle';
import imageOne from '/src/assets/work1.png';
import imageTwo from '/src/assets/work2.png';
import Button from '../button/Button';
import {images} from '../../utils/Images';
import {PiLinkBold} from 'react-icons/pi';
import Card from './card';
import {urls} from '../../utils/Images';

function Portfolio() {
  const [visibilityImages, setVisibilityImages] = useState(6);
  function showMoreProjects() {
    setVisibilityImages((prev) => prev + 4);
  }
  return (
    <div className="portfolio section-p" id="portfolio">
      <SectionTitle sectionName={'PORTFOLIO'} />
      <div className="container">
        <div className="cards">
          {images.slice(0, visibilityImages).map((img, index) => {
            return (
              <Card
                img={img}
                index={index}
                key={index}
                url={urls[index]}
              />
            );
          })}
        </div>
        <div className="button">
          <button className="btn" onClick={showMoreProjects}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
