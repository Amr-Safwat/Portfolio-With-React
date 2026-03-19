import React from 'react'
import './skills.css'
import SectionTitle from '../sec-title/SectionTitle'

function Skills() {
  return (
    <div className="skills">
      <SectionTitle sectionName={'SKILLS'} />
      <div className="container">
        <div className="left-section">
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
            <li>
              <span>JavaScript</span>
              <span>95%</span>
              <span className='progress'></span>
            </li>
            <li>React</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills
