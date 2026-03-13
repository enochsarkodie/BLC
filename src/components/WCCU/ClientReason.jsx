import React from 'react'
import  './ClientReason.css'
import reason_img from '../../assets/image6.jpg'
import { FaCirclePlay } from "react-icons/fa6";
import {FaLongArrowAltRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const ClientReason = ({setPlayState}) => {
  return (
<div className='reason container'>
  <div className="reason-left">
   <img src={reason_img} alt="" className='reason-img' />
   <FaCirclePlay className='play-icon' onClick={()=>{
    setPlayState(true)
   }}/>
  </div>
  <div className="reason-right">
    <h3>WHY CLIENTS CHOOSE US</h3>
  <h2>What we are experts at</h2>
  <h4>Due to the investment of time and
     experience into our work, our legal outputs are distinctively unique.</h4>
     <p>
      We involve the client in the design of our legal solutions and profess the best 
      advice in all circumstances to aid our clients’ choices. Our ability to exceed clients’ expectations is anchored in our collective entrepreneurial and managerial experience
       coupled with sound legal understanding.
     </p>
    <div className="reason-button">
           <Link to="/about" className="reason-btn">learn more<FaLongArrowAltRight/></Link>
        </div>
  </div>

</div>
  )
}

export default ClientReason
