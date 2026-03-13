import React, { useState } from "react";
import "./Team.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {FaLongArrowAltRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import lawyer1 from "../../assets/reena.jpg";
import lawyer2 from "../../assets/FLIK2385.jpg";
import lawyer3 from "../../assets/black.jpg";
import lawyer4 from "../../assets/josh.jpg";

const team = [
  { img: lawyer1, name: "Kwame Mensah", role: "Corporate Lawyer" },
  { img: lawyer2, name: "Ama Boateng", role: "Family Law Specialist" },
  { img: lawyer3, name: "Daniel Owusu", role: "Litigation Attorney" },
  { img: lawyer4, name: "Nana Asante", role: "Property Lawyer" }
];

const Team = () => {


  return (
   
<section className="team">
  <div className="team-header">
    <h1>MEET THE <a>TEAM</a></h1>
    <div className="team-rule">
      <span className="team-rule-diamond" />
    </div>
    <p>Dedicated professionals committed to achieving the best outcomes for our clients.</p>
  </div>

      <div className='client container'>
      <div className="column">
        <div className="card">
            <img src={lawyer4} alt="" />
            <div className="client-content">
                <h2>JOSHUA GYAN</h2>
                <p className='title'>SENIOR PARTNER</p>
                
            </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
            <img src={lawyer1} alt="" />
            <div className="client-content">
                <h2>REENA JACKSON</h2>
                <p className='title'>SENIOR PARTNER</p>
                
            </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
            <img src={lawyer3} alt="" />
            <div className="client-content">
                <h2>HARVEY JACKSON</h2>
                <p className='title'>SENIOR PARTNER</p>
                
            </div>
        </div>
      </div>
    </div>
    <div className="team-button">
       <Link to="/about" className="team-btn">View all team<FaLongArrowAltRight/></Link>
    </div>
   
    </section>
   
  );
};

export default Team;
