import  React,  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './TeamPage.css'
import lawyerBg from '../assets/team-view.jpg'
import lawyer2 from "../assets/josh.jpg";
import lawyer3 from "../assets/black.jpg";
import lawyer4 from "../assets/sharon.jpg";
import lawyer5 from "../assets/uncle.jpg";
import lawyer6 from "../assets/keziah.jpg";
import lawyer7 from "../assets/ama.jpg";
import lawyer8 from '../assets/emma.jpg';
import lawyer9 from '../assets/abigail.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';


const TeamPage = () => {

 const { lawyerId  } = useParams();
    const lawyers = [
  {
    id: "emmanuel-buabeng-tsibuah",
    name: "Emmanuel Buabeng Tsibuah",
    title: "MASTER OF CHAMBERS",
    image: lawyer3,
    bio: "Emmanuel Buabeng Tsibuah, the Master of Chambers, is a seasoned Legal Practitioner with over fourteen years of experience at the Bar. A member of the Ghana Bar Association in good standing, he holds a Bachelor of Arts Degree (BA - Sociology, Philosophy) and a Bachelor of Laws (LLB) from the University of Ghana, and a Qualifying Certificate in Law from the Ghana School of Law. Over the course of his career, Emmanuel has carved a distinguished niche in land-related matters, chieftaincy disputes, family law, and general litigation. He previously served as Head of Litigation at a renowned law firm in Takoradi, where he was instrumental in resolving complex and high-stakes legal challenges. He has represented traditional leaders, individuals, and corporate entities in some of the most contentious matters before the courts, earning a reputation for strategic depth and authoritative courtroom presence. Emmanuel has lectured in law-related courses at a number of institutions, and has participated in numerous conferences, seminars, and symposia within and beyond the legal community. His contributions to the profession have been recognised through several notable awards." },
  {
    id: "joshua-gyan",
    name: "Joshua Gyan-Mensah",
    title: "FIRM MANAGER",
    image: lawyer2,
    bio: "Upon his call to the Ghana Bar, Joshua Gyan-Mensah began his legal career at a renowned law firm in Takoradi, where he built his footing across a mixed practice gaining early exposure to litigation, commercial matters, land disputes, and client advisory work. Those early years gave him a versatility that continues to inform how he approaches every brief. He has since joined Black Law Consult, where he serves as both a practitioner and Firm Manager, bringing the same rigour he applies in the courtroom to the day-to-day running of the firm. He holds an LLB from Central University and a Professional Law Certificate from the Ghana School of Law and is currently pursuing a Masters degree in  Law at a very reputable university. Joshua's practice spans land and title disputes, criminal litigation, commercial litigation, banking and secured transactions. He advises corporate entities, financial institutions, traditional authorities, and private clients on matters involving large-scale land interests, stool property governance, and commercial and corporate disputes. He is known for his disciplined litigation strategy, strong command of both statutory and customary land law, and precise procedural advocacy. He also advises on natural resources, land-based investments, and regulatory compliance within Ghana's evolving legal framework. Joshua brings a methodical and research-driven approach to each brief, grounded by a genuine commitment to client outcomes and the rigorous application of legal principle." },
    {
    id: "ama-koomson",
    name: "Ama Koomson",
    title: "LAWYER",
    image: lawyer7,
    bio: "Ama Koomson is a Legal Practitioner called to the Ghana Bar with over five years of experience spanning both corporate and private legal practice. A member of the Ghana Bar Association in good standing, she holds a Bachelor of Laws (LLB) with First Class Honours from Central University, Ghana, and a Qualifying Certificate in Law from the Ghana School of Law. Ama's practice covers a broad range of areas including criminal and civil litigation, dispute resolution, corporate law, and regulatory compliance. She has served at the Legal Department of the Ghana Railway Company Limited in Takoradi and as an Associate Lawyer with a private law firm, engaging in matters across diverse practice areas. She currently serves as Internal Legal Counsel for an Oil Marketing Company, where she manages legal and compliance matters and ensures operational alignment with relevant regulatory and licensing requirements, including ISO standards and certifications. Beyond her legal practice, Ama is a trained Mediator and Arbitrator, holding a Professional Executive Master of Alternative Dispute Resolution (ADR) from the Gamey and Gamey ADR Institute. She brings strong attention to detail, diligence, and a consistent commitment to professional competence to all her engagements."   },

        {
    id: "keziah-amponsah-jackson",
    name: "Keziah Amponsah Jackson",
    title: "LAWYER",
    image: lawyer6,
    bio: "At Black Law Consult, Keziah Amponsah Jackson advises individuals, families, and businesses across family and matrimonial law, land transactions, commercial practice, labour law, and maritime law. She holds a Bachelor of Arts in French and Psychology and a Master of Arts in Alternative Dispute Resolution from the University of Ghana, and is currently completing a Master of Laws specialising in Law of the Sea and Ocean Governance. What distinguishes Keziah's practice is the care she brings to each client relationship. In matrimonial and family matters, she guides clients through every stage from initial petitions to contested hearings with sensitivity and commitment to their dignity. Her background in psychology is not incidental; as a Member of the Chartered Institute of Arbitrators (MCIArb), she draws on it deliberately to navigate the emotional and strategic complexity of high-stakes disputes, always steering toward early, constructive resolution where possible. Her transactional work in land, estate planning, and trust instruments reflects the same attention to detail, particularly at the intersection of Ghana's statutory and customary law frameworks.Keziah’s ongoing specialisation in Law of the Sea and Ocean Governance has given her practice a forward-looking dimension, with growing engagement in shipping, coastal regulation, and Ghana's blue economy. Combined with her fluency in French, Keziah brings a rare breadth to the firm: one that extends its reach well beyond domestic borders into Francophone West Africa."
  },   
    {
    id: "emmanuel-maasodoh-ziekah",
    name: "Emmanuel Maasodoh Ziekah",
    title: "LAWYER",
    image: lawyer8,
    bio: "Emmanuel Maasodoh Ziekah is a Legal Practitioner called to the Ghana Bar, bringing to the profession a background that is anything but conventional. He holds a Professional Law Certificate from the Ghana School of Law, an LLB from Central University, and a Doctor of Pharmacy (PharmD) from the Kwame Nkrumah University of Science and Technology, a combination that positions him at a compelling intersection of law, healthcare, and commerce. Emmanuel's areas of interest are naturally informed by his professional background, spanning pharmaceutical and healthcare law, regulatory compliance, commercial law, and corporate practice. With over twenty years of experience as a licensed pharmacist, including his current role as Superintendent Pharmacist of Eddymanuel Pharmacy in Takoradi, he brings a practitioner's understanding of the healthcare industry to his legal work, particularly in matters touching on drug regulation, healthcare governance, and business operations. Beyond the Bar, Emmanuel remains an active figure in Ghana's pharmaceutical sector. His career spans hospital dispensing, medical representation, and pharmaceutical management at both branch and executive level. That depth of industry experience makes him a uniquely resourced adviser who understands not just the law, but the environment in which his clients operate. As a lawyer, he has made quite a name for himself since joining the Firm and has helped to successfully handle a varied number of cases to the admiration of our clients, judges and other lawyers." },
    
    {
    id: "moses-benefo-antwi",
    name: "Moses Benefo Antwi ",
    title: "LAWYER",
    image: lawyer5,
    bio: "Moses Benefo Antwi is a Legal Practitioner and member in good standing of the Ghana Bar Association. He holds a Master of Arts in Journalism and Mass Communication (MAJM) from Sikkim Manipal University, an LLB from the Ghana Institute of Management and Public Administration (GIMPA), and a Professional Law Certificate from the Ghana School of Law. Moses practises across a wide range of areas including corporate and commercial law, sports and entertainment disputes, criminal litigation, family law, ADR, human rights, constitutional law, intellectual property, and natural resources disputes. He is known for the quality of his legal opinions and the clarity of his advice, qualities grounded in intellectual rigour, wisdom and discernment, an honest approach to client counsel, and a commanding presence in court. Above all, he is a people's person in the legal ecosystem. He possesses both the physical and intellectual stamina that demanding legal practice requires, and balances that with a deep sense of humility, humanity, and genuine regard for the people he serves. It is that rare combination of professional precision and human warmth that defines his place in the profession." },

    {
    id: "sharon-vanessa-gyan-mensah",
    name: "Sharon Vanessa Gyan-Mensah",
    title: "LAWYER",
    image: lawyer4,
    bio: "Sharon Vanessa Gyan-Mensah is a Legal Practitioner and a member in good standing of the Ghana Bar Association. She holds an LLB from the Kwame Nkrumah University of Science and Technology (KNUST), a Qualifying Certificate in Law from the Ghana School of Law, and is currently pursuing a Master of Laws (LLM) at KNUST. Sharon's areas of interest span family law, oil and gas law, environmental law, and criminal law: a range that reflects both the breadth of her curiosity and a clear eye on where she intends to build. She approaches every matter with diligence and sound legal reasoning, and is steadily carving out her place in the profession with integrity and purpose. Sharon has participated in several professional conferences and seminars aimed at deepening her understanding of emerging legal trends. Her commitment to continuous learning and her passion for excellence mark her as a practitioner to watch." 
   },

   {
    id: "grace-mensah",
    name: "Grace Mensah",
    title: "LAWYER",
    image: lawyer9,
    bio: "Grace Mensah is a dedicated legal practitioner, called to the Bar after obtaining her Barrister-at-Law certificate from the Gambia Law School. She holds a Bachelor of Laws (LL.B) degree from Kwame Nkrumah University of Science and Technology and is currently pursuing her Master’s degree at the same institution, further strengthening her academic and professional foundation. She is known for her respectful, bold, and confident demeanor. She is deeply committed to the principles of justice, unity, and the promotion of a peaceful society. Her passion for alternative dispute resolution (ADR) has been shaped through practical, hands-on experience during her national service with the Legal Aid Commission, where she served as a co-mediator. In this role, she handled cases involving individuals who could not afford legal representation, as well as parties who preferred amicable, non-litigious methods of resolving disputes. Her professional development has also been enriched through mentorship under a judge, giving her valuable insight into judicial reasoning and courtroom dynamics. This experience enhances her ability to approach legal issues with both strategic depth and practical awareness. Currently practicing as a general practitioner, She has a growing interest in International Trade and Maritime Law, with a clear ambition to specialize in Maritime Law in the future. She remains committed to continuous learning and excellence in legal practice, with the goal of making meaningful contributions both locally and internationally." 
   },
 

];


// ✅ Fixed — finds the matching lawyer first, falls back to first if not found

const matchedLawyer = lawyers.find(l => l.id === lawyerId);
const [activeLawyer, setActiveLawyer] = useState(matchedLawyer ? lawyerId : lawyers[0].id);

useEffect(() => {
  window.scrollTo({ top: 50, behavior: 'instant' }); // on page load
}, []);

useEffect(() => {
  window.scrollTo({ top: 50, behavior: 'smooth' }); // on tab switch
}, [activeLawyer]);
const active = lawyers.find(l => l.id === activeLawyer);

  return (
    <div className="team-detailed-page">
        <Helmet>
       <link rel="canonical" href="https://blacklawconsult.com/about/team-page/:lawyerId" />
       <title>Black Law Consult |About Us| Team-Page </title>
        </Helmet>
 
      {/* HERO */}
      <section className="team-hero" style={{ backgroundImage: `url(${lawyerBg})` }}>
        <div className="team-overlay">
          <p className="team-eyebrow">Black Law Consult</p>
          <h1>Our Attorneys</h1>
          <p className="team-hero-sub">Meet the professional team behind the firm</p>
        </div>
      </section>
 
      {/* TAB SECTION */}
      <section className="lawyer-tab-section">
 
        {/* LEFT */}
        <div className="lawyer-tab">
          <p className="lawyer-tab-label">Our Team</p>
          {lawyers.map((lawyer) => (
            <button
              key={lawyer.id}
              className={`lawyer-tablinks ${activeLawyer === lawyer.id ? "active" : ""}`}
              onClick={() => setActiveLawyer(lawyer.id)}
            >
              <span className="lawyer-tab-inner">
                <span className="lawyer-tab-name">{lawyer.name}</span>
                <span className="lawyer-tab-role">{lawyer.title}</span>
              </span>
              <FaLongArrowAltRight className="arrow" />
            </button>
          ))}
        </div>
 
        {/* RIGHT */}
        <div className="lawyer-tab-content">
          {active && (
            <div className="lawyer-profile" key={active.id}>
              <div className="lawyer-profile-top">
                <div className="lawyer-profile-img-wrap">
                  <img src={active.image} alt={active.name} />
                </div>
                <div className="lawyer-profile-identity">
                  <h3>{active.name}</h3>
                  <p className="lawyer-title">{active.title}</p>
                </div>
              </div>
              <div className="lawyer-divider" />
              <div className="lawyer-bio">
                <h4>Profile</h4>
                <p>{active.bio}</p>
              </div>
            </div>
          )}
        </div>
 
      </section>
    </div>
  )
}

export default TeamPage
