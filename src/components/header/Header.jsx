import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/transparente2.png' 
import HeaderSocials from './HeaderSocials'
// import fondo from '../../assets/fondo.mp4'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        {/* <video src={fondo} autoPlay loop muted ></video> */}

        <h5>Hello I'm</h5>
        <h1>Joaquin Manresa</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me1' /> 
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>  
      </div>
    </header>
  )
}

export default Header