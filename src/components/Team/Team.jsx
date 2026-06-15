import "./Team.css";
import {FaLongArrowAltRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import lawyer1 from "../../assets/ama.jpg";

import lawyer3 from "../../assets/black.jpg";
import lawyer4 from "../../assets/josh.jpg";



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
            <img src={lawyer3} alt="" />
            <div className="client-content">
                <h2>EMMANUEL BUABENG TSIBUAH</h2>
                <p className='title'>MASTER OF CHAMBERS</p>
                
            </div>
        </div>
      </div>
      
      <div className="column">
        <div className="card">
            <img src={lawyer4} alt="" />
            <div className="client-content">
                <h2>JOSHUA GYAN-MENSAH</h2>
                <p className='title'>FIRM MANAGER</p>
                
            </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
            <img src={lawyer1} alt="" />
            <div className="client-content">
                <h2>AMA KOOMSON</h2>
                <p className='title'>LAWYER</p>
                
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
