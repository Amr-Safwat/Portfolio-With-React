import React from 'react'
import './contact.css'
import SectionTitle from '../sec-title/SectionTitle';
import {HiOutlineMail} from 'react-icons/hi';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {FaFacebook} from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';

function Contact() {
  return (
    <div className="contact section-p" id="contact">
      <SectionTitle sectionName={'CONTACT'} />
      <div className="container wow fadeInUp">
        <div className="left-section">
          <h3>Just Say Hello</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Subject" />
          <textarea placeholder="Your Message" rows={8} />
          <input className="btn" type="submit" value="Send Message" />
        </div>
        <div className="right-section">
          <h3>Contact Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula
            nulla tincidunt id faucibus sed suscipit feugiat.
          </p>
          <div className="info">
            <div className="row-info">
              <div className="icon">
                <HiOutlineMail />
              </div>
              <div className="data">
                <div className="head">Email</div>
                <div>amrsafwat02@gmail.com</div>
                <div>info@support.com</div>
              </div>
            </div>
            <div className="row-info">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="data">
                <div className="head">Phone</div>
                <div>+201033792397</div>
                <div>--</div>
              </div>
            </div>
            <div className="row-info">
              <div className="icon">
                <MdLocationOn />
              </div>
              <div className="data">
                <div className="head">Address</div>
                <div>amrsafwat02@gmail.com</div>
                <div>Email</div>
              </div>
            </div>
          </div>
          <div className="social">
            <div>Visite my social profile and get connected</div>
            <div className="social-icons">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <IoLogoLinkedin />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <RiWhatsappFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
