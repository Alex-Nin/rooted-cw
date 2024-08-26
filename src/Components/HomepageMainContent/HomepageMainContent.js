import React from 'react'
import { BsPersonFillAdd } from "react-icons/bs";
import TeamModal from '../TeamModal/TeamModal'
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import Footer from '../Footer/Footer'

import './HomepageMainContent.css'

const HomepageMainContent = () => {

    const iconStyles = {
        width: '57px',
        height: '46px',
        color: 'rgba(112, 180, 150, 0.2)'
    }
  return (
    <div className='HomepageMainContent'>
        <div className='services-steps-container'>
            <div className='steps-title-container'>
                <h3 className='steps-title'>How It Works</h3>
                <p>Click on any of the boxes to get started</p>
            </div>
            <section className='steps-card-container'>
                <div className='steps-card'>
                    <div className='step-card-icon-container'><BsPersonFillAdd style={iconStyles}/></div>
                    <div className='step-number'><p>01</p></div>
                    <div className='step-name'><p>Sign Up</p></div>
                    <div className='step-description'><p>Create your account in a few easy steps. Simply provide some basic information.</p></div>
                </div>
                <div className='steps-card offset-card'>
                    <div className='step-card-icon-container'><BsPersonFillAdd style={iconStyles}/></div>
                    <div className='step-number'><p>02</p></div>
                    <div className='step-name'><p>Match</p></div>
                    <div className='step-description'><p>Create your account in a few easy steps. Simply provide some basic information.</p></div>
                </div>
                <div className='steps-card'>
                    <div className='step-card-icon-container'><BsPersonFillAdd style={iconStyles}/></div>
                    <div className='step-number'><p>03</p></div>
                    <div className='step-name'><p>Select Provider</p></div>
                    <div className='step-description'><p>Create your account in a few easy steps. Simply provide some basic information.</p></div>
                </div>
            </section>
        </div>
        <TeamModal />
        <NewsletterSignup />
        <Footer />
    </div>
  )
}

export default HomepageMainContent
