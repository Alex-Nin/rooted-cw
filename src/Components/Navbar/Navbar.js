import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineSearch } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx"; //exit menu icon
import { GiFruitTree } from "react-icons/gi"; //Menu icon //Every minute or so it shakes //in the future
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`Navbar ${isOpen ? 'navbar-color-change' : ''}`}>
      <div className='logo'>
        <h1 className='tempLogo'>Rooted</h1>
        <p>Care & Wellness</p>
      </div> {/* Change to icon/logo */}
      <button className='menu-btn' onClick={toggleMenu} style={{...(isOpen ? { display: 'none'}: {})}}>
        <RxHamburgerMenu />
      </button>
      <button className={`close-menu-btn ${isOpen ? 'close-btn-visible' : ''}`} onClick={closeMenu} ><RxCross1 /></button>
      <div className={`left-nav-bar ${isOpen ? 'menu-open' : ''}`}>
        <div className='links'>
            <ul>
                <li><Link to='/rooted-cw' >Home</Link></li>
                <li><Link to='/rooted-cw/about' >About us</Link></li>
                <li><Link to='/rooted-cw/services'>Services</Link></li>
                <li><Link to='/rooted-cw/contact-us' >Contact Us</Link></li>
            </ul>
        </div>
        
        <div className='newsletter-btn-container'> {/* Maybe blog instead of newsletter */}
          <button id='newsletter-btn'>Blog</button>
        </div> {/* Navigates to a lower part on the page */}
        <span className='search-btn-container'>
          <HiOutlineSearch className='search-btn'/>
        </span>
      </div>
    </div>
  )
}

export default Navbar
