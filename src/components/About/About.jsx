import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import about_img from "../../assets/image7.avif"
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-header">
      <h1>ABOUT <a>US</a></h1>

      <div className='about container'>

        <div className="about-left">
          <div className="about-img-wrap">
            <img src={about_img} alt="About Black Law Consult" />
          </div>
        </div>

        <div className="about-right">
          <span className="about-eyebrow">Who We Are</span>
          <h3>A Legacy of <a>Legal</a> and <a>Professional</a> Excellence</h3>

          <p>Black Law Consult is a Ghana-based legal consultancy delivering strategic, practical, and
            business-focused solutions to individuals, startups, and institutions. We advise with clarity and precision,
            ensuring that legal insight translates into real-world advantage. Our work is grounded in professional excellence
            and a deep understanding of Ghana's legal and commercial landscape.</p>

          <p>While rooted in Ghana, our practice is not limited by borders. We advise businesses across Africa and internationally, offering support
            on cross-border matters and global transactions. Our expertise spans corporate and commercial law, dispute resolution,
            family law, medical law, maritime law, intellectual property, and related advisory services — allowing us to serve clients
            holistically across diverse sectors.</p>

          <div className='btn-position'>
            <Link to="/about" className="about-button">
              Read more <FaLongArrowAltRight />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About