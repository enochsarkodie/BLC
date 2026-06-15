import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      subTitle:"A criminal investigation or prosecution is one of the most consequential situations a person or organisation can face. The decisions made in the earliest stages, from the moment of police contact through to arrest, detention, and charge, can shape everything that follows. Having experienced legal counsel at that point is not a luxury. It is a necessity. Black Law Consult's criminal law practice provides representation and advisory services to individuals and corporate entities at every stage of the process, including police investigations, bail applications, trial proceedings, and appeals before the higher courts",
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
      subTitle:"Disputes are rarely convenient, and the cost of handling them poorly, whether in time, money, or reputation, can be significant. When litigation becomes necessary, the quality of legal representation at every stage of the proceedings can make all the difference. Black Law Consult's litigation practice spans the full hierarchy of Ghana's court system, from the District and Circuit Courts through to the High Court, Court of Appeal, and Supreme Court, as well as specialised tribunals and regulatory bodies where particular disputes are best resolved. The practice covers commercial disputes, land and property litigation, contractual claims, debt recovery, employment matters, corporate conflicts, and judicial review proceedings, among others" ,
       description:" We adopt a strategic and results-oriented approach to dispute resolution, carefully analyzing each case to determine the most effective course of action. While we are fully prepared to pursue matters through trial where necessary, we also explore alternative dispute resolution methods such as negotiation, mediation, and arbitration to achieve efficient and practical outcomes for our clients. Our goal is to deliver strong advocacy, sound legal strategy, and effective representation to protect our clients’ interests and secure favorable resolutions to complex legal disputes.",  },
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
      subTitle:"The relationship between medicine and the law is one of the most sensitive intersections in legal practice. When things go wrong in a clinical setting, the consequences for patients, families, and healthcare professionals alike can be profound and lasting. It is an area that demands legal counsel with both technical understanding and genuine sensitivity to the human stakes involved.",
      description:"Our medical law practice serves both sides of the clinical relationship. For patients and families, we advise on claims arising from surgical errors, misdiagnosis, birth injuries, medication errors, and breaches of informed consent. For healthcare professionals and institutions, we provide representation in disciplinary proceedings before regulatory bodies, defence of negligence claims, and counsel on risk management and clinical governance. We also advise hospitals, clinics, and healthcare investors on regulatory compliance, licensing, and the contractual frameworks that govern the delivery of healthcare services in Ghana. Medical law cases are rarely straightforward. They require a careful reading of clinical records, an understanding of accepted medical standards, and the ability to translate complex facts into clear legal arguments. We bring all of that to every matter we handle."
    },
     {
      id: 'sports-law',
      title:'Sports Law',
      image:image_8,
      subTitle:"Sport in Ghana is no longer just competition. It is contracts, broadcasting rights, sponsorship agreements, disciplinary proceedings, and increasingly, significant money. The legal dimensions of the sports industry are expanding as fast as the industry itself, and the athletes, clubs, federations, and investors operating within it require counsel that understands both the law and the business of sport. ",
      description:"Whether you're an athlete, club, or federation, We will provide tailored advice and representation. We will guide you through Ghana's sports laws, negotiate contracts, resolve disputes, and ensure compliance with governing bodies. Let us protect your reputation, secure your rights, and achieve your goals in the sports arena. Contact us for a consultation and let's score a win"    
    },
     {
      id: 'maritime-law',
      title:'Maritime Law',
      image:image_9,
      subTitle:"At Black Law Consult, we advise clients across the full breadth of maritime law. Our practice covers ship arrests and releases under Ghanaian admiralty jurisdiction, charter party disputes, bills of lading claims, cargo loss and damage, collision liability, salvage, and general average. We understand the commercial urgency that maritime disputes demand and are equipped to act with the speed this industry requires.",
      description:"For shipowners, operators, and managers, we advise on vessel registration, mortgage financing, flag state compliance, and port state control matters. For charterers and cargo interests, we provide counsel on freight disputes, demurrage claims, and the enforcement of maritime liens. For insurers and P&I clubs, we offer experienced local correspondent services, including attendance at casualties, surveys, and the management of hull and cargo claims. Contact us for a consultation and let's keep your business afloat."    
    },
     {
      id: 'oil-gas',
      title:'Oil & Gas',
      image:image_10,
      subTitle:"Ghana's emergence as a petroleum-producing nation, anchored by discoveries in the Jubilee, TEN, and Sankofa fields, has created a sophisticated legal environment that demands specialist knowledge. The sector is governed by a layered framework that includes the Petroleum (Exploration and Production) Act, 2016 (Act 919), the Ghana National Petroleum Corporation Act, and the oversight mandates of the Petroleum Commission, all operating alongside Ghana's international treaty obligations and industry-standard contractual practice. ",
      description:"We advise clients across the full value chain of Ghana's petroleum sector. For upstream matters, we assist with petroleum agreements, including Petroleum Agreements with the State, joint operating agreements, farm-in and farm-out transactions, and unitisation arrangements. We guide clients through the Petroleum Commission's licensing and regulatory processes and advise on local content compliance under the Petroleum (Local Content and Local Participation) Regulations. In midstream and downstream operations, we advise on infrastructure agreements, transportation and storage arrangements, supply contracts, and the regulatory requirements governing refining and distribution activities. Where disputes arise, whether through arbitration under international rules or proceedings before Ghanaian courts and regulatory bodies, we represent our clients' interests with precision and persistence."    
    },
     {
      id: 'environmental-law',
      title:'Environmental Law',
      image:image_11,
      subTitle:" Every project that breaks ground, every business that operates, and every community that depends on clean land and water has a stake in environmental law. At Black Law Consult, we understand that environmental legal matters carry consequences that extend far beyond the courtroom or the boardroom",
      description:"We advise developers, corporations, public institutions, and private individuals on how to operate responsibly within Ghana's environmental legal framework. From securing the right permits and navigating the Environmental Protection Authority's requirements, to managing compliance obligations and responding to enforcement actions, we are equipped to guide you through every stage. Where environmental harm has occurred or is threatened, we represent clients in disputes, regulatory proceedings, and litigation, ensuring that the law works in the interest of those it is meant to protect."    
    },
     {
      id: 'insurance',
      title:'Banking & Insurance Law',
      image:image_12,
      subTitle:" Ghana's banking and insurance landscape is heavily regulated and constantly evolving. Black Law Consult advises clients on compliance, transactions, and disputes, drawing on a deep understanding of the financial laws that govern this space",
      description:"Whether you're a financial institution, insurer, or policyholder, We will provide skilled guidance on Ghana's banking and insurance laws. We will help you navigate licensing, contracts, claims, and regulatory issues, ensuring compliance and protecting your interests. Let us secure your financial interests and drive your business forward. Contact us for a consultation and let us build a stronger financial future."    
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
      subTitle:"Making a positive impact? At Black Law Consult, we support charities and NGOs in Ghana.  Our experts handle registrations, governance, compliance, and more, helping you focus on your mission.",
      description:"Whether you're starting, scaling, or facing legal challenges, we will provide tailored advice and representation. We will guide you through Ghana's NGO laws, ensure compliance, and help you achieve your goals. Let us amplify your impact together. Contact us for a consultation and let us drive change"    
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
        <Helmet>
      <link rel="canonical" href="https://blacklawconsult.com/practice-areas" />
      <title>Black Law Consult| Practice Areas</title>
    </Helmet>
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
