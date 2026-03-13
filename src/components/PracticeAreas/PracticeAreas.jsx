import React from 'react'
import {Link} from 'react-router-dom'
import './PracticeAreas.css'
import image_1 from '../../assets/family-law.avif'
import image_2 from '../../assets/conference.avif'
import image_3 from '../../assets/criminal-law.jpg'
import image_4 from '../../assets/estate.jpg'



const PracticeAreas = () => {
  return (
    <div className='practice-area'>
      <h1>OUR PRACTICE <a>AREAS</a></h1>
      <p>Professional and Reliable Services</p>
      
      <div className="practice">
        <div className="practice-card">
          <img src={image_1} alt="" />
          <h3>Family Law</h3>
          <div className="overlay">
          <p>Legal guidance and representation for family-related matters with care
        and professionalism</p>
          <Link to="/practice-areas/family-law" className='practice-button' >
          Learn more 
         </Link>
          </div>
        </div>

        <div className="practice-card">
          <img src={image_2} alt="" />
          <h3>Corporate Law</h3>
          <div className="overlay">
          <p> Legal support for businesses, contracts, compliance, and corporate
            governance.</p>
          <Link to="/practice-areas/corperate-law"className='practice-button' >
          Learn more 
         </Link>
          </div>
        </div>

        <div className="practice-card">
          <img src={image_3} alt="" />
          <h3>Criminal Law</h3>
          <div className="overlay">
          <p>Strong representation to protect your rights and ensure fair
            treatment under the law.</p>
          <Link to="/practice-areas/criminal-law" className='practice-button' >
          Learn more 
         </Link>
          </div>
        </div>

        <div className="practice-card">
          <img src={image_4} alt="" />
          <h3>Property & Real Estate</h3>
          <div className="overlay">
          <p> Legal services for property transactions, land disputes, and
            documentation.</p>
          <Link to="/practice-areas/real-estate" className='practice-button' >
          Learn more 
         </Link>
          </div>
        </div>

        

        
      </div>
    </div>
  ) 
}

export default PracticeAreas
