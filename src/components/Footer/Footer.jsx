import React from 'react';
import './Footer.css';
import {BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Priya Chaurasiya</a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://x.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Priya Chaurasiya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer