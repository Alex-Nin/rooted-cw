import React from 'react'

import HomepageTitleContent from '../Components/HomepageTitleContent/HomepageTitleContent';
import HomepageMainContent from '../Components/HomepageMainContent/HomepageMainContent';

import './styles.css'

const Homepage = () => {

  return (
    <div className='Homepage'>
      <HomepageTitleContent />
      <HomepageMainContent />
    </div>
  )
}

export default Homepage
