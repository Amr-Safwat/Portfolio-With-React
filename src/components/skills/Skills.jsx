import React from 'react'
import './skills.css'
import SectionTitle from '../sec-title/SectionTitle'

function Skills() {
  return (
    <div className="skills section-p">
      <SectionTitle sectionName={'SKILLS'} />
      <div className="container">
        <div className="left-section wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
          <h2>
            All the skills that I have in that field of work are mentioned.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </p>
        </div>
        <div className="right-section">
          <ul>
            <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <span>JavaScript</span>
              <span>95%</span>
              <span className='progress'></span>
            </li>
            <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
              <span>React</span>
              <span>85%</span>
              <span className='progress'></span>
            </li>
            <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
              <span>CSS</span>
              <span>90%</span>
              <span className='progress'></span>
            </li>
            <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
              <span>HTML</span>
              <span>95%</span>
              <span className='progress'></span>
            </li>
            <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
              <span>Front End Development</span>
              <span>95%</span>
              <span className='progress'></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills
