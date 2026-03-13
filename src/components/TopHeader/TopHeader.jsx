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
          <span>info@lawfirm.com</span>
        </div>
        
       <div className="top-item">
          <MdPhone  className='top-header-icons'/>
          <span className='header-phone'>+233 (0) 234 3242342</span>
        </div>
      

        <div className="top-item">
          <MdAccessTime  className='top-header-icons'/>
          <span>Mon – Fri: 8:00am – 8:00pm</span>
        </div>
      </div>
      
      <div className="top-header-right">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaWhatsapp/></a>
      </div>
    </div>
  )
}

export default TopHeader
