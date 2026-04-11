import React from 'react';
import './service.css';
import SectionTitle from '../sec-title/SectionTitle';
import {FaReact} from 'react-icons/fa';
import Card from '../card/card';
import {FaEdit} from 'react-icons/fa';
import {MdOutlineDeveloperMode} from 'react-icons/md';
import {TbSettingsCog} from 'react-icons/tb';
import {TbApi} from 'react-icons/tb';
import {BsTools} from 'react-icons/bs';

function Service() {
  return (
    <div className="service section-p">
        <SectionTitle sectionName="SERVICE" />
      <div className="container">
        <div className="cards">
          <Card
            icon={<MdOutlineDeveloperMode />}
            title="Front-End Development"
            description="I build modern, responsive websites using React, HTML, CSS, and JavaScript. Focused on clean code, performance, and user experience."
          />
          <Card
            icon={<FaReact />}
            title="React Web Applications"
            description="I develop dynamic and scalable web applications using React, including dashboards, landing pages, and interactive UIs."
          />
          <Card
            icon={<FaEdit />}
            title="UI Implementation"
            description="I convert designs from Figma or Adobe XD into pixel-perfect, fully functional websites."
          />
          <Card
            icon={<TbSettingsCog />}
            title="Website Optimization"
            description="I improve website speed, responsiveness, and performance for better user experience and SEO."
          />
          <Card
            icon={<TbApi />}
            title="API Integration"
            description="I connect front-end applications with APIs to display real-time data and build dynamic features."
          />
          <Card
            icon={<BsTools />}
            title="Bug Fixing & Maintenance"
            description="I fix issues, refactor code, and maintain existing projects to keep them running smoothly."
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
