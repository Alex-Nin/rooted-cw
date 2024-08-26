import React from 'react'
import './NewsletterSignup.css'

const NewsletterSignup = () => {
  return (
    <div className='NewsletterSignup'>
        <div className='newsletter-title-container'>
            <h3 className='newsletter-title'>Stay up to date!</h3>
        </div>
        <div className='newsletter-info-container'>
            <p className='newsletter-info'>
                Join our newsletter to receive the latest news, updates, and<br />exclusive offers straight to your inbox.
            </p>
        </div>
      <div className='newsletter-signup-container'>
        <input type='email' className='newsletter-email' placeholder='Email address'/>
        <button className='submit-newsletter-email-btn'>Submit</button>
      </div>
    </div>
  )
}

export default NewsletterSignup
