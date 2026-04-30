import React from 'react'
import './Footer.css'
import logo from '../../assets/blc_logoo.png'
import {  FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'


const Footer = () => {
  return (
    <footer className='footer'>
  <div className="row">

    <div className="col col-brand">
      <img src={logo} alt="Black Law Consult" className='logo' />
      {/* <p className="brand-name">Black Law Consult</p> */}
      <p className="brand-tag">Advocates &amp; Legal Consultants</p>
      <div className="brand-divider" />
      <p className="brand-desc">Committed to delivering principled legal counsel with integrity, precision, and client dignity at the forefront.</p>
    </div>

    <div className="col">
      <h3>Navigation</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/practice-areas">Practice Areas</a></li>
        <li><a href="/about">Our Team</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="col col-contact">
      <h3>Contact</h3>

      <div className="contact-item">
        <div className="contact-icon"><MdLocationOn /></div>
        <p>1st Floor, Vans International Building<br />Near Effia Washing Bay, Effia Takoradi<br />P.O. Box TD 509, Takoradi, Ghana</p>
      </div>

      <div className="contact-item">
        <div className="contact-icon"><MdEmail /></div>
        <p><a href="mailto:info@blacklawconsult.com">info@blacklawconsult.com</a></p>
      </div>

      <div className="contact-item">
        <div className="contact-icon"><MdPhone /></div>
        <p>+233 55 307 6529</p>
      </div>
    </div>

  </div>

  <hr />

  <div className="footer-bottom">
    <p className='copyright'>© 2026 Black Law Consult. All rights reserved.</p>
    <div className="social-icons">
      <a
        href="https://wa.me/233553076529?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services."
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className='fab' />
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer
