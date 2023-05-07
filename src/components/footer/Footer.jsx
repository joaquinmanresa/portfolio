import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Joaquin Manresa</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/joaquin-manresa-073a7020b/"><FaLinkedin /></a>
        <a href="https://instagram.com/joacomanresa"><FiInstagram /></a>
      </div>

      <div className='footer__copyrigth'>
        <small>&copy; Joaquin Manresa  -  All rights reserved</small>

      </div>
    </footer>
  )
}

export default Footer