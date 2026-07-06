import React from 'react'
import {PiLinkBold} from 'react-icons/pi';


function Card({img, index, url}) {
  return (
    <div className="card wow fadeInUp" data-wow-delay={`0.${index + 2}s`}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="layer">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinkBold />
        </a>
      </div>
    </div>
  );
}

export default Card
