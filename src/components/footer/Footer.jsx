import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>RedaTech</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://linkedin.com" target='_blank'><FaFacebookF /></a>
            <a href="https://github.com" target='_blank'><FaInstagram /></a>
            <a href="https://driblle.com" target='_blank'><FaXTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#">RedaTech</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer