import React from 'react'
import './TeamModal.css'

const TeamModal = () => {
  return (
    <div className='TeamModal'>
      <div className='team-modal-title-container'><h2 className='team-modal-title'>Meet Our Team</h2></div>
      <div className='team-modal-container'>
        <div className='team-modal-info member-left'>
          <div className='team-card-image-container'>
            <div className='image'></div>
          </div>
          <div className='name'><p>fName <span className='last-name'>lName</span></p></div>
          <div className='info'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
        </div>
        <div className='team-modal-info member-mid'>
          <div className='team-card-image-container'>
            <div className='image'></div>
          </div>
          <div className='name'><p>fName <span className='last-name'>lName</span></p></div>
          <div className='info'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
        </div>
        <div className='team-modal-info member-right'>
          <div className='team-card-image-container'>
            <div className='image'></div>
          </div>
          <div className='name'><p>fName <span className='last-name'>lName</span></p></div>
          <div className='info'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
        </div>
      </div>
    </div>
  )
}

export default TeamModal
