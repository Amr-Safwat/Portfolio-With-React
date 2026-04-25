import React from 'react';
import './card.css';

function Card({icon, title, description, delay}) {
  return (
    <div className="card wow fadeInUpBig" data-wow-delay={delay}>
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
