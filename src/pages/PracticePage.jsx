import { useState,useEffect } from 'react';
import './PracticePage.css'
import { useParams } from "react-router-dom";
import practiceBg from '../assets/practice-areas.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import image_1 from '../assets/family-law.avif'
import image_2 from '../assets/conference.avif'
import image_3 from '../assets/criminal-law.jpg'
import image_4 from '../assets/estate.jpg'
import image_5 from '../assets/litigation.jpg'
import image_6 from '../assets/adr.jpg'
import image_7 from '../assets/medical-law.jpg'
import image_8 from '../assets/sports.avif'
import image_9 from '../assets/maritime-law.jpg'
import image_10 from '../assets/oil-and-gas.jpg'
import image_11 from '../assets/environmental-law.jpg'
import image_12 from '../assets/banking-insurance.jpg'
import image_13 from '../assets/pro-bono.jpg'
import image_14 from '../assets/charity.jpg'

const PracticePage = () => {
  const {id} = useParams();

  const practiceAreas = [
    {
      id: 'family-law',
      title:'Family Law',
      image:image_1,
      subTitle:'At its core, family law deals with the legal rights and obligations that arise from family relationships — whether by blood, marriage, or court order. The main areas include:',
      description: "We offer comprehensive legal support throughout the industry’s value chain, including exploration, production, licensiMarriage & Civil Partnerships The legal requirements to get married, rights that come with marriage (property, inheritance, next-of-kin status), and the recognition of civil partnerships for same-sex or unmarried couples where applicable. Divorce & Separation This is the biggest area of family law in practice. It covers the legal process of dissolving a marriage, including grounds for divorce, how long the process takes, and legal separation as an alternative. Most modern legal systems have moved toward 'no-fault' divorce, meaning you no longer have to prove wrongdoing — irretrievable breakdown of the marriage is sufficient. ",   
    },
     {
      id: 'corperate-law',
      title:'Corperate Law',
      image:image_2,
      subTitle:"Need expert guidance in corporate matters? At Black Law Consult, we're your trusted partner in Ghana. 😊 Our corporate law specialists help businesses thrive, navigating complexities with ease",
      description:"From startups to established companies, we've got you covered. Whether it's entity formation, contracts, mergers, or disputes, our team provides tailored solutions. We'll help you understand Ghana's regulatory landscape, protect your interests, and drive growth. Let's work together to turn your business goals into reality. Contact us for a consultation and let's drive your business forward, legally and smartly"    
    },
     {
      id: 'criminal-law',
      title:'Criminal Law',
      image:image_3,
      subTitle:" Need a shield in tough times?  At Black Law Consult, we're your go-to for criminal law expertise in Ghana.  Our team of seasoned lawyers has your back when the heat is on. ",
      description:" We've handled diverse cases, from misdemeanors to felonies, with in-depth knowledge of Ghana's criminal code and procedures. Don't face it alone. Contact us for a consultation. Your freedom, our priority. We're here to listen, strategize, and fight for your rights."    
    },
     {
      id: 'real-estate',
      title:'Property & Real Estate',
      image:image_4,
      subTitle:" Need a solid foundation for your property dealings? At Black Law Consult, we're your trusted partner in Ghana's real estate scene.  Our property law experts ensure smooth transactions, protecting your interests every step of the way.",
      description:"From land acquisition and sales to leases, disputes, and development projects, we've got you covered. We'll guide you through Ghana's property laws, handle paperwork, and negotiate terms. Whether you're buying, selling, or investing, let's secure your assets and make your property dreams a reality. Contact us for a consultation and let's build a solid future, together. "    
    },
     {
      id: 'litigation',
      title:'Litigation',
      image:image_5,
      subTitle:"Facing a legal battle? At Black Law Consult, we're your fierce advocates in Ghana's courts.  Our litigation experts fight for your rights, with experience in diverse cases and a deep understanding of Ghana's legal system. We've handled complex disputes, negotiated settlements, and won landmark cases",
      description:"From commercial disputes to personal matters, we'll represent you with strategy and skill. Our team prepares meticulously, argues passionately, and resolves effectively. We'll guide you through the process, protect your interests, and work towards the best possible outcome. Don't go it alone - let's take on the challenge together. Contact us for a consultation and let's secure your victory."
    },
     {
      id: 'adr',
      title:'Alternate Dispute Resolution',
      image:image_6,
      subTitle:" Looking for a smarter way to resolve disputes? At Black Law Consult, we offer expert Alternate Dispute Resolution (ADR) services in Ghana.  Our skilled mediators and arbitrators help you settle conflicts efficiently, saving time and costs. With extensive experience in mediation, arbitration, and negotiation, we'll guide you through the process and work towards a mutually beneficial outcome.",
      description:"Whether it's commercial disagreements, family matters, or workplace issues, we'll facilitate constructive dialogue and help parties find common ground. Our ADR processes are flexible, confidential, and effective, preserving relationships and avoiding the uncertainty of court proceedings. Let's resolve disputes amicably and move forward. Contact us for a consultation and let's find a win-win outcome."    
    },
     {
      id: 'medical-law',
      title:'Medical Law',
      image:image_7,
      subTitle:'Concerned about medical negligence or healthcare disputes? At this firm, we offer expert medical law services in Ghana.  Our experienced lawyers understand the complexities of healthcare and will guide you through the legal process.',
      description:"Whether you're a patient seeking justice or a healthcare professional facing a claim, we'll provide skilled representation and support. We'll help you navigate Ghana's medical laws, ensure your rights are protected, and work towards a fair outcome. Contact us for a consultation and let's address your medical law concerns."
    },
     {
      id: 'sports-law',
      title:'Sports Law',
      image:image_8,
      subTitle:" Got a sports-related issue? At Black Law Consult, we're passionate about sports law in Ghana.  Our experts handle athlete contracts, disputes, doping cases, and more, with a deep understanding of sports regulations.",
      description:"Whether you're an athlete, club, or federation, we'll provide tailored advice and representation. We'll guide you through Ghana's sports laws, negotiate contracts, resolve disputes, and ensure compliance with governing bodies. Let's protect your reputation, secure your rights, and achieve your goals in the sports arena. Contact us for a consultation and let's score a win"    
    },
     {
      id: 'maritime-law',
      title:'Maritime Law',
      image:image_9,
      subTitle:" Facing maritime challenges? At Black Law Consult, we're your trusted partners in Ghana's maritime sector.  Our experts handle shipping disputes, cargo claims, vessel arrests, and more, with in-depth knowledge of international maritime laws.",
      description:"Whether you're a shipowner, charterer, or cargo owner, we'll provide skilled representation and advice. We'll guide you through Ghana's maritime regulations, handle collisions, salvage, and insurance claims, and protect your interests in the global shipping industry. From charter party disputes to port and terminal issues, our team will work diligently to resolve your maritime issues efficiently. Let's navigate the complexities together. Contact us for a consultation and let's keep your business afloat."    
    },
     {
      id: 'oil-gas',
      title:'Oil & Gas',
      image:image_10,
      subTitle:"Navigating Ghana's oil and gas industry? At Black law consult, we're your experienced partners.  Our team handles upstream, midstream, and downstream matters, with expertise in local and international regulations.",
      description:"Whether you're an operator, investor, or service provider, we'll provide tailored advice on licenses, contracts, disputes, and compliance. We'll help you manage risks, negotiate deals, and protect your interests in Ghana's energy sector. From exploration and production agreements to joint operating agreements, farm-ins, and unitization, our expertise ensures your projects are legally sound. Let's unlock opportunities and drive your energy projects forward. Contact us for a consultation and let's fuel your success."    
    },
     {
      id: 'environmental-law',
      title:'Environmental Law',
      image:image_11,
      subTitle:" Dealing with banking and insurance complexities? At Black Law Consult, we're your trusted advisors in Ghana.  Our experts handle regulatory compliance, transactions, disputes, and more, with a deep understanding of financial laws.",
      description:"Whether you're a financial institution, insurer, or policyholder, we'll provide skilled guidance on Ghana's banking and insurance laws. We'll help you navigate licensing, contracts, claims, and regulatory issues, ensuring compliance and protecting your interests. Let's secure your financial interests and drive your business forward. Contact us for a consultation and let's build a stronger financial future."    
    },
     {
      id: 'insurance',
      title:'Banking & Insurance Law',
      image:image_12,
      subTitle:" Dealing with banking and insurance complexities? At Black Law Consult, we're your trusted advisors in Ghana.  Our experts handle regulatory compliance, transactions, disputes, and more, with a deep understanding of financial laws.",
      description:"Whether you're a financial institution, insurer, or policyholder, we'll provide skilled guidance on Ghana's banking and insurance laws. We'll help you navigate licensing, contracts, claims, and regulatory issues, ensuring compliance and protecting your interests. Let's secure your financial interests and drive your business forward. Contact us for a consultation and let's build a stronger financial future."    
     },
     {
      id: 'probono',
      title:'Pro Bono',
      image:image_13,
      subTitle:"Giving back to the community matters. In here, we're committed to pro bono services in Ghana. 😊 Our lawyers offer free legal support to those in need, championing justice and equality.",
      description: " Whether it's human rights, women's empowerment, or supporting vulnerable groups, we'll provide skilled advocacy and care. We'll handle cases with sensitivity and expertise, from consultations to court representation. Our pro bono services aim to bridge the justice gap, empower communities, and uphold the rule of law. Let's make a difference together. Contact us to learn how you can benefit or get involved."    
    },
     {
      id:'charity',
      title:"Charity and NGO's",
      image:image_14,
      subTitle:"Making a positive impact? At this firm, we support charities and NGOs in Ghana.  Our experts handle registrations, governance, compliance, and more, helping you focus on your mission.",
      description:"Whether you're starting, scaling, or facing legal challenges, we'll provide tailored advice and representation. We'll guide you through Ghana's NGO laws, ensure compliance, and help you achieve your goals. Let's amplify your impact together. Contact us for a consultation and let's drive change"    
    },

  ]


  const [activeTab, setActiveTab] = useState(id || practiceAreas[0].id);
  
  useEffect(() => {
     if (id) {
      setActiveTab(id);
             }
      }, [id]);
  

  return (
    <div className='practice-areas-page'>
      <section
          className="practice-hero"
                style={{ backgroundImage: `url(${practiceBg})` }}
              >
                <div className="practice-overlay">
                  <h1>Practice-Areas</h1>
                  <p>Professional and Reliable Services</p>
                </div>
      </section>

       <section className="tab-section">
      {/* LEFT SIDE */}
      <div className="tab">
        {practiceAreas.map((area) => (
          <button
            key={area.id}
            className={`tablinks ${
              activeTab === area.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(area.id)}
          >
            <FaLongArrowAltRight className="arrow" />
            {area.title}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="tab-content">
        {practiceAreas.map(
          (area) =>
            activeTab === area.id && (
              <div key={area.id}>
               
                <h3>{area.title}</h3>
                 <img src={area.image} alt="" className='practice-right-img' />
                <h4>{area.subTitle}</h4>
                <p>{area.description}</p>
              </div>
            )
        )}
      </div>

    </section>
  
    </div>
  )
}

export default PracticePage
