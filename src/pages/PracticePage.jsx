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
      subTitle:"Our Family Law Practice Area offers full-spectrum legal support for family and domestic matters. We counsel and represent clients on key issues like divorce, separation, child custody and access, maintenance claims, matrimonial property division, and adoption. We also manage paternity disputes, guardianship, domestic violence cases, and family estate settlements.",
       description: "Blending legal acumen with empathy, we understand the emotional weight of family conflicts. We focus on amicable solutions via negotiation, mediation, and settlements, but stand ready to litigate vigorously to defend your rights when needed. Dedicated to children’s best interests, equitable property splits, and smooth navigation of family changes, we deliver clear guidance and robust representation for lasting, practical results."  },
     {
      id: 'corporate-law',
      title:'Corporate Law',
      image:image_2,
      subTitle:"Our Corporate Law Practice Area delivers strategic legal counsel and representation for businesses, entrepreneurs, and investors across all phases of commercial operations. We guide clients through company formation and registration, corporate governance, regulatory compliance, shareholder dynamics, and restructuring. Our experts also cover directors’ duties, beneficial ownership rules, and adherence to relevant corporate regulations.",
       description:"We handle diverse transactions such as share purchases, joint ventures, mergers and acquisitions, corporate financing, and investment setups. Additionally, we draft and review essential documents like shareholder agreements, partnership contracts, commercial deals, and other paperwork to streamline business functions. We prioritize practical, business-savvy solutions that minimize risks, ensure compliance, boost efficiency, and drive enduring growth—partnering closely with you for lasting success." },
     {
      id: 'criminal-law',
      title:'Criminal Law',
      image:image_3,
      subTitle:"Our Criminal Law Practice Area provides dedicated legal representation and advisory services to individuals and corporate entities involved in criminal investigations and prosecutions. We represent clients at every stage of the criminal process, including police investigations, arrest and detention, bail applications, trial proceedings, and appeals.",
      description:"Our lawyers handle a wide range of criminal matters such as fraud, stealing, dishonest appropriation, assault, cybercrime, white-collar offences, regulatory offences, and other criminal allegations. We also advise clients on their constitutional rights, due process protections, and interactions with law enforcement agencies, ensuring that their rights are safeguarded throughout the criminal justice process. The practice is committed to providing vigorous defence, strategic advocacy, and careful case analysis in order to secure the best possible outcome for our clients. Whether through early intervention, negotiation, or full trial representation, we strive to ensure that justice is fairly administered and that our clients receive strong and professional legal representation." },
     {
      id: 'real-estate',
      title:'Property & Real Estate',
      image:image_4,
      subTitle:"Our Property and Real Estate Practice Area provides comprehensive legal services in relation to the acquisition, ownership, development, and transfer of land and real property. We advise individuals, families, developers, and corporate clients on a wide range of real estate matters, including land acquisition, title verification, preparation and review of indentures and leases, land registration, and due diligence investigations.",
       description:"We represent clients in transactions involving sales, purchases, mortgages, and leasing of property, ensuring that all dealings are properly documented and compliant with the applicable land laws and regulatory requirements. Our practice also provides legal guidance on property development projects, joint venture arrangements, and financing structures involving real estate assets. In addition to transactional work, we represent clients in property and land disputes, including matters relating to title to land, trespass, boundary disputes, recovery of possession, and enforcement of property rights before the courts and other dispute resolution forums. Our objective is to help clients secure clear title, minimize risk, and protect their real estate investments, while providing practical legal solutions that facilitate smooth and legally compliant property transactions"},
     {
      id: 'litigation',
      title:'Litigation',
      image:image_5,
      subTitle:"Our Litigation Practice Area provides comprehensive representation to individuals, businesses, and institutions in resolving disputes through the courts and other dispute resolution mechanisms. We represent clients in a broad range of civil and commercial disputes before the District Courts, Circuit Courts, High Courts, the Court of Appeal, and the Supreme Court, as well as before specialized tribunals and regulatory bodies." ,
       description:"Our litigation team handles matters involving commercial disputes, land and property litigation, contractual disputes, debt recovery, employment disputes, corporate conflicts, and other civil claims. We also provide representation in judicial review proceedings, enforcement of rights, and appeals at various levels of the court system. We adopt a strategic and results-oriented approach to dispute resolution, carefully analyzing each case to determine the most effective course of action. While we are fully prepared to pursue matters through trial where necessary, we also explore alternative dispute resolution methods such as negotiation, mediation, and arbitration to achieve efficient and practical outcomes for our clients. Our goal is to deliver strong advocacy, sound legal strategy, and effective representation to protect our clients’ interests and secure favorable resolutions to complex legal disputes.",  },
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
      subTitle:"Our Pro Bono Practice reflects our firm’s commitment to promoting access to justice and the protection of fundamental rights within our communities. We provide legal services without charge to individuals and groups who may not have the financial means to obtain legal representation but whose matters raise significant legal or social concerns.",
       description:"Through our pro bono work, we assist clients with legal advice, representation in court proceedings, and guidance on matters involving human rights, family disputes, landlord and tenant issues, and other areas affecting vulnerable or underserved members of society. We also support community initiatives, non-profit organizations, and public interest causes by providing legal assistance and advocacy where needed. Our lawyers are dedicated to using their professional skills and experience to advance justice, promote fairness, and contribute positively to the development of the legal system and the communities we serve." },
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
