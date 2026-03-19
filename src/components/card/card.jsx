import React from 'react';
import './card.css';

function Card({icon, title, description}) {
  return (
    <div className="card wow fadeInLeft" data-wow-delay=".1s">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
