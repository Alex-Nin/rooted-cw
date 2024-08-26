import React, {useState} from 'react'

import { PiGlobeThin } from "react-icons/pi"
import { PiHospitalThin } from "react-icons/pi";
import { PiMonitorThin } from "react-icons/pi";
import './HomepageTitleContent.css'
const HomepageTitleContent = () => {

  const [bgImage, setbgImage] = useState('https://images.pexels.com/photos/4473896/pexels-photo-4473896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')

  const handleMouseEnter = () => {
    setbgImage('https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  };

  const handleMouseLeave = () => {
    setbgImage('https://images.pexels.com/photos/4473896/pexels-photo-4473896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  };

  const iconStyles = {
    color: 'var(--primary-green)',
    width: '25px',
    height: '25px'
  }

  return (
    <div className='HomepageTitleContent'>
      <div className='homepage-main-container'>
        <div className='homepage-main-image' style={{backgroundImage: `url(${bgImage})`}}>

            <div className='homepage-main-info-icons'>
              <div className='homepage-slogan'><p>Match with a <br /><span>culturally aligned</span> <br />provider</p></div>
              <div className='homepage-services-info'><p>Experience personalized telehealth services from the comfort of<br />
              your home. Our platform connects you</p></div> {/* make text smaller */}
              <div className='homepage-explore-btn-container'><button id='explore-btn'>Explore More</button></div>
              <ul>
                <li>
                  <button 
                    className='icon-container-btn'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className='icon-container'><PiHospitalThin /></div> 
                    Health Consultation
                  </button>
                </li>
                <li>
                  <button className='icon-container-btn'>
                    <div className='icon-container'><PiGlobeThin /></div>
                    Mental Health
                  </button>
                </li>
                <li>
                  <button className='icon-container-btn'>
                    <span className='icon-container'><PiMonitorThin /></span>
                    Perscription
                  </button>
                </li>
              </ul>
            </div>

        </div>
      </div>
    </div>
  )
}

export default HomepageTitleContent
