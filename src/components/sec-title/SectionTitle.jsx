import React from 'react'
import './sectionTitle.css'

function SectionTitle({sectionName}) {
  return (
    <div className="sec-title wow fadeInUp">
      <div className="container">
        <div className="title">{sectionName}</div>
        <div className="layer">{sectionName}</div>
      </div>
    </div>
  );
}

export default SectionTitle
