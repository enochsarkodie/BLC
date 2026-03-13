import React from 'react'
import './Value.css'
import { FcIdea } from "react-icons/fc";
import { GiOnTarget } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const Value = () => {
  return (
    <div className='value'>
        <h1>OUR <a>VALUE</a></h1> 
        <h2>Professional and Reliable Services</h2>
        
        <div className="value-grid">
          
          <div className="value-card">
            <FcIdea className='value-icon'/>
            <h3>Our Vision</h3>
            <p>To be a trusted legal partner delivering clear, effective, and
              forward-thinking solutions for individuals and businesses</p>
          </div>

           <div className="value-card-2">
            <GiOnTarget className='value-icon'/>
            <h3>Our Mission</h3>
            <p>We provide strategic legal guidance with integrity, professionalism,
              and a deep commitment to our clients’ success</p>
          </div>

           <div className="value-card">
            <FaBalanceScale className='value-icon'/>
            <h3>Our Motto</h3>
            <p>Justice with purpose, clarity in counsel, and excellence in every
              legal solution we deliver.</p>
          </div>
        </div>
    </div>
  )
}

export default Value
