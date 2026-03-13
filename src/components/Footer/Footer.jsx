import React from 'react'
import './Footer.css'
import logo from '../../assets/blc_logoo.png'
import { FaEnvelope,FaArrowRight, FaFacebookF, FaTwitter, FaWhatsapp,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="row">
            <div className="col">
                <img src={logo} alt="" className='logo' />
                <p>Feel free to reach use through our form or find our contact information below  </p>
            </div>
             <div className="col">
              <h3>Office</h3>
              <p>EffiaKuma Road</p>
              <p>Behind Effia Washing Bay</p>
              <p>Takoradi, Ghana</p>
              <p className='email-id'>info@blacklawconsult.com</p>
              <h4>+233 545 3423 32</h4>
             </div>

              <div className="col">
                <h3>Links</h3>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Practice Areas</a></li>
                  <li><a href="">Testimonials</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
               <div className="col">
                <h3>Newsletter</h3>
                <form action="">
                  <FaEnvelope className='far fa-envlope'/>
                  <input type="email" placeholder='Enter your email' required />
                 <button><FaArrowRight className='fas' /></button> 
                </form>
                <div className="social-icons">
                  <FaFacebookF className='fab'/>
                  <FaTwitter className='fab'/>
                  <FaWhatsapp className='fab'/>
                  <FaLinkedin className='fab'/>
                </div>
               </div>
        </div>
        <hr />
        <p className='copyright'>Copyright @ 2026 Black Law Consult, All rights reserved</p>
    </footer>
  )
}

export default Footer
