import { useRef,useEffect } from "react";
import "./AboutPage.css";
import aboutBg from "../assets/aboutUs.jpg"; // use a professional law image
import lawyer1 from "../assets/reena.jpg";
import lawyer2 from "../assets/david.jpg";
import lawyer3 from "../assets/black.jpg";
import lawyer4 from "../assets/abigail.jpg";
import lawyer5 from "../assets/josh.jpg";
import lawyer6 from "../assets/uncle.jpg";
import lawyer7 from "../assets/emma.jpg";
import lawyer8 from '../assets/sharon.jpg';
import lawyer9 from '../assets/lawyer_12.jpg';
import { Link } from "react-router-dom";

import { FaCirclePlay } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { GiOnTarget } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const AboutPage = () => {
   
const pillars = [
  { icon: "⚖️", title: "Unwavering Integrity",  text: "We uphold the highest ethical standards in every matter — trust, confidentiality, and strict avoidance of conflict of interest are not aspirations; they are our professional baseline." },
  { icon: "💡", title: "Innovative Thinking",    text: "We are a forward-thinking, evolving practice. Our people and systems are built to deliver creative, strategically sound solutions — even in the most complex situations." },
  { icon: "📞", title: "Always Within Reach",    text: "Call, SMS, WhatsApp, or email — we embrace every modern channel of communication. Our open-door policy means a member of our team is always available when you need us most." },
  { icon: "🤝", title: "Client-First Approach",  text: "Every decision we make is driven by your interests. We combine legal excellence with genuine care to ensure you feel fully supported from first consultation to final resolution." },
  { icon: "🏛️", title: "Depth of Experience",   text: "Our team brings decades of combined expertise across corporate, criminal, family, and commercial law — delivering dependable outcomes across every practice area." },
  { icon: "🔒", title: "Strict Confidentiality", text: "Every matter entrusted to us is handled with the utmost discretion. Your privacy is not a formality — it is a professional obligation we honour without exception." },
];
 
const stats = [
  { num: "1000+",  label: "Clients Consultation"    },
  { num: "87%",  label: "Success Rate"  },
  { num: "300+", label: "Cases Resolved"        },
  { num: "15+",  label: "Affiliations"  },
];
function FadePillar({ children, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add("cr-visible"), delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="cr-pillar-card">{children}</div>;
}
 
  return (
    <div className="about-page">

     
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>Trusted legal excellence with integrity and dedication</p>
        </div>
      </section>
      <section className="about-detail-section"> 
      <div className="about-des">
      <div className="aboutp-left">
        <img src={lawyer3} alt="" />
        <FaCirclePlay className="about-play"/> 
      </div>
        <div className="aboutp-right">
          <h3>ABOUT BLACK LAW CONSULT</h3>
          <h2>Our Value Preposition</h2>
          <h4>
      While rooted in Ghana, our practice is not limited by borders. We advise businessess across Africa and internationally, 
      offering support on cross-border matters and global transactions. Our expertise spans corporate and commercial law, dispute resolution, family law, 
      medical law,
       maritime law, intellectual property, and related advisory services-allowing us to serve clients holistically across diverse sectors.
     </h4>
     <p>
      We involve the client in the design of our legal solutions and profess the best 
      advice in all circumstances to aid our clients’ choices. Our ability to exceed clients’ expectations is anchored in our collective entrepreneurial and managerial experience
       coupled with sound legal understanding.
       We involve the client in the design of our legal solutions and profess the best 
      advice in all circumstances to aid our clients’ choices. Our ability to exceed clients’ expectations is anchored in our collective entrepreneurial and managerial experience
       coupled with sound legal understanding.
     </p>
     {/* replace the two lines at the bottom of aboutp-right */}
<div className="signature-block">
  <h6 className="managing-name">Emmanuel Buabeng Tsibuah</h6>
  <h5>MANAGING PARTNER</h5>
</div>
        </div>
      </div>
      </section>

<section className="value-section">
  <div className="value-overlay">

    <div className="value-container">

      <div className="value-des">
        <FcIdea className="value-icon" />
        <h3>VISION</h3>
        <p>
          To be a trusted legal partner delivering clear, effective, and 
          forward-thinking solutions for individuals and businesses
        </p>
      </div>

      <div className="value-des">
        <GiOnTarget className="value-icon" />
        <h3>MISSION</h3>
        <p>
          We provide strategic legal guidance with integrity, professionalism,
          and a deep commitment to our clients’ success
        </p>
      </div>

      <div className="value-des">
        <FaBalanceScale className="value-icon" />
        <h3>MOTTO</h3>
        <p>
          Justice with purpose, clarity in counsel, 
          and excellence in every legal solution we deliver.
        </p>
      </div>

    </div>

  </div>
</section>

<section>
  <h1 className="our-team">OUR TEAM</h1>
  <p className="our-team-p"> Dedicated professionals committed to achieving the best outcomes 
            for our clients.</p>

  <div className="about-team">

    <Link to='/about/team-page/emmanuel-buabeng-tsibuah' className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer3} alt="" />
         </div>
      <div className="team-card-content">
        <h2>EMMANUEL BUABENG TSIBUAH</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
  </div>
</div>
    </Link>

     <Link to='/about/' className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer7} alt="" />
        </div>
      <div className="team-card-content">
        <h2>EMMANUEL BUABENG TSIBUAH</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </Link>
    

   <Link to='/about/team-page/moses-benefo-antwi' className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer6} alt="" />
        </div>
      <div className="team-card-content">
        <h2>MOSES ANTWI BENEFO</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </Link>

     <Link to='/about/team-page/moses-benefo-antwi' className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer9} alt="" />
        </div>
      <div className="team-card-content">
        <h2>MOSES ANTWI BENEFO</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </Link>

     <Link to='/about/team-page/joshua-gyan' className="about-team-grid">
     <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer5} alt="" />
        </div>
      <div className="team-card-content">
        <h2>JOSUAH GYAN-MENSAH</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </Link>

      <Link to='/about/team-page/sharon-vanessa-gyan-mensah' className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer8} alt="" />
        </div>
      <div className="team-card-content">
        <h2>SHARON VANESSA GYAN-MENSAH</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </Link>

     <div className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer4} alt="" />
        </div>
      <div className="team-card-content">
        <h2>EMMANUEL BUABENG TSIBUAH</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </div>

     <div className="about-team-grid">
      <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer1} alt="" />
        </div>
      <div className="team-card-content">
        <h2>REENA JACKSON</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </div>

<div className="about-team-grid">
     <div className="about-team-card">
        <div className="img-wrap">         {/* ← add this wrapper */}
         <img src={lawyer2} alt="" />
        </div>
      <div className="team-card-content">
        <h2>DAVID JACKSON</h2>
        <p className="team-card-title">SENIOR PARTNER</p>
     </div>
     </div>
    </div>

      
     

  </div>
</section>

<section>
  <div className="client-reason-section">
    <h1>WHAT WE ARE EXPERTS AT</h1>
     <h2>WHY CLIENTS CHOOSE US? </h2>
  </div>
  <div className="client-reason-section-1">
  <div className="client-reason-section-left">
 <p>We are a reliable, innovative, and evolving business, and with our people, systems, and strategic approach to handling every problem, you can rely on us for all your business support </p>

<p>Also, we are easy to reach – not only do we adopt an open-door policy encouraging our clients to reach out to us at all times,  we also combine the new ways of communication 
in order to be available at all times. We are a call, a text/SMS, WhatsApp, Email, etc. away from each client issue.</p>
</div>
<div className="client-reason-section-right">
  <p>We reckon our continuous existence is because of our devotion to complying with the highest
     ethical standards. We strive to maintain the highest level of integrity, trust, confidentiality
      and avoid conflict of interest in all our work. Our commitment to
     our ethical codes is the hallmark of our practice.</p>
</div>
</div>
  <hr className="cr-divider" />
 
        {/* ── PILLARS ── */}
        <div className="cr-pillars-wrap">
          <div className="cr-pillars-heading">
            <h3>The Six Pillars of Our Practice</h3>
            <p>Every commitment we make to our clients is backed by these core principles — principles that have guided our practice from day one.</p>
          </div>
          <div className="cr-pillars-grid">
            {pillars.map((p, i) => (
              <FadePillar key={i} delay={i * 90}>
                <div className="cr-pillar-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </FadePillar>
            ))}
          </div>
        </div>
 
        {/* ── STATS BAR ── */}
        <div className="cr-stats-bar">
          {stats.map((s, i) => (
            <div className="cr-stat" key={i}>
              <span className="cr-stat-num">{s.num}</span>
              <span className="cr-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
</section>
    
    </div>
  );
};

export default AboutPage;