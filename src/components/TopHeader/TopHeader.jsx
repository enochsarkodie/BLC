import React from 'react'
import './topHeader.css'
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md'
import { FaFacebookF,FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const TopHeader = () => {
  return (
   <div className="top-header ">
      <div className="top-header-left">
        <div className="top-item">
          <MdEmail className='top-header-icons' />
          <span>info@blacklawconsult.com</span>
        </div>
        
       <div className="top-item">
          <MdPhone  className='top-header-icons'/>
          <span className='header-phone'>+233 55 307 6529</span>
        </div>
      

        <div className="top-item">
          <MdAccessTime  className='top-header-icons'/>
          <span>Mon – Fri: 8:00am – 8:00pm</span>
        </div>
      </div>
      
      <div className="top-header-right">
       
        <a href="https://wa.me/233553076529?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services." 
         target="_blank" 
       rel="noreferrer"
        ><FaWhatsapp/></a>
      </div>
    </div>
  )
}

export default TopHeader
