import React from 'react'
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";

import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='logo-social'>
        <div className='logo-container'>
          <h1 className='tempLogo'>Rooted</h1>
          <p>Care and Wellness</p>
        </div>
        <div className='copywrite-container'><p>© 2024 All Rights Reserved.</p></div>
        <div className='social-icons'>
          <a href='instagram.com' className='social-link insta-link'><div className='social-icon-container'><PiInstagramLogo /></div></a>
          <a href='facebook.com' className='social-link fb-link'><div className='social-icon-container'><PiFacebookLogo /></div></a>
          <a href='linkedin.com' className='social-link linkedin-link'><div className='social-icon-container'><RxLinkedinLogo /></div></a>
          <a href='x.com' className='social-link x-link'><div className='social-icon-container'><RiTwitterXLine /></div></a>
        </div>
      </div>
      <ul className='footer-links-left'></ul>
      <ul className='footer-links-right'></ul>
    </div>
  )
}

export default Footer
