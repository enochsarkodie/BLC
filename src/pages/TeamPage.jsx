import  React,  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './TeamPage.css'
import lawyerBg from '../assets/team-view.jpg'
import lawyer1 from "../assets/FLIK2370.jpg";
import lawyer2 from "../assets/josh.jpg";
import lawyer3 from "../assets/black.jpg";
import lawyer4 from "../assets/sharon.jpg";
import lawyer5 from "../assets/uncle.jpg";
import lawyer6 from "../assets/keziah.jpg";
import lawyer7 from "../assets/ama.jpg";
import lawyer8 from '../assets/FLIK2418.jpg';
import lawyer9 from '../assets/lawyer_12.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';


const TeamPage = () => {

 const { lawyerId  } = useParams();
    const lawyers = [
  {
    id: "emmanuel-buabeng-tsibuah",
    name: "Emmanuel Buabeng Tsibuah",
    title: "MASTER OF CHAMBERS",
    image: lawyer3,
    bio: "Emmanuel Buabeng Tsibuah, the Master of Chambers has over fourteen years of legal experience. In his several years of practice, he served as Head of Litigation for a renowned Law Firm in Takoradi where he helped unravel very complex legal challenges and also lectured in law related courses in a number of institutions.He holds a B.A and an LLB from the University of Ghana and a qualifying certificate in law from the Ghana School of Law. He is a good standing member of the Ghana Bar Association.He has over the years carved a niche for himself in the handling of land related issues, chieftaincy matters, family law matters and general litigation. Indeed, by reason of his varied experience has been consulted extensively and also represented several traditional leaders, individuals and corporate entities in very key and contentious matters.He has participated in several conferences, seminars, symposia and others and also won various awards within and without the legal community.",
  },
  {
    id: "joshua-gyan",
    name: "Joshua Gyan-Mensah",
    title: "FIRM MANAGER",
    image: lawyer2,
    bio: "Joshua is a legal practitioner whose practice extends across diverse areas of legal practice including land and title disputes, criminal litigation, commercial litigation, and banking and secured transactions. He advises corporate entities, financial institutions, traditional authorities, and private clients on matters involving large-scale land interests, stool property governance, commercial and corporate disputes. He holds an LL.B. from Central University and the Professional Law Certificate from the Ghana School of Law, and was called to the Ghana Bar in 2023 Joshua is known for his disciplined litigation strategy, strong command of statutory and customary land law, and precise procedural advocacy. He also advises on matters relating to natural resources, land-based investments, and regulatory compliance within Ghana’s evolving legal framework.",
  },
  {
    id: "sharon-vanessa-gyan-mensah",
    name: "Sharon Vanessa Gyan-Mensah",
    title: "LAWYER",
    image: lawyer4,
    bio: "Sharon Vanessa Gyan-Mensah is a dedicated and promising legal practitioner. She demonstrates strong professional commitment, sound legal knowledge, and a passion for excellence in the legal profession.She holds an LL.B from the Kwame Nkrumah University of Science and Technology, a Qualifying Certificate in Law from the Ghana School of Law an LLM candidate from Kwame Nkrumah University of Science and Technology She is a member in good standing of the Ghana Bar Association.Sharon is committed to building a solid foundation in legal practice through diligence, integrity, and continuous learning. She has participated in several conferences and seminars aimed at enhancing professional development and deepening her understanding of emerging legal trends and practice areas.She approaches each task with dedication and professionalism, steadily carving a path for herself within the legal community.",
  },
  {
    id: "moses-benefo-antwi",
    name: "Moses Benefo Antwi ",
    title: "LAWYER",
    image: lawyer5,
    bio: "Moses Benefo Antwi is a private legal practitioner who is specialised in the specialty of corporate and commercial law, sports and entertainment disputes, criminal litigation, family law, ADR matters, human rights issues, constitutional law matters, intellectual property matters, natural resources disputes, inter alia.He holds an MAJM from Sikkim Manipal University, an LLB from Ghana Institute of Management and Public Administration(GIMPA) and a Professional Law Certificate from the Ghana School of Law. He is a member in good standing of the Ghana Bar Association.Typified features of Moses are his expert opinions and advice on legal matters, wisdom and discernment, possessing physical and intellectual stamina, presence in court, humility, honesty, hardworking, humanity and human relations. Above all, he is a people’s person in the legal ecosystem.",
  },
  {
    id: "keziah-amponsah-jackson",
    name: "Keziah Amponsah Jackson",
    title: "LAWYER",
    image: lawyer6,
    bio: "Keziah Amponsah Jackson is an Associate at Black Law Firm, advising individuals, families, and businesses across a broad portfolio of practice areas including family and matrimonial law, land transactions, commercial practice, labour law, and maritime law. In matrimonial and family matters, Keziah provides end-to-end counsel — from petitions and affidavits through to contested hearings and cross-examination strategy — with a practice philosophy rooted in sensitivity, thoroughness, and client dignity. Her transactional work encompasses land documentation, deeds of gift, trust instruments, and estate planning, with particular attention to the intersection of statutory and customary law frameworks in Ghana. A Member of the Chartered Institute of Arbitrators (MCIArb), Keziah approaches dispute resolution with a preference for early, constructive intervention. She advises clients on arbitration clauses, ADR processes, and negotiated settlement — drawing on a background in psychology to navigate high-stakes interpersonal and commercial conflicts with clarity and composure. Keziah holds a Bachelor of Arts in French and Psychology and a Master of Arts in Alternative Dispute Resolution from the University of Ghana and is currently completing a Master of Laws specialising in Law of the Sea and Ocean Governance. This advanced study informs her growing maritime law practice, which engages with shipping, coastal regulation, and Ghana’s evolving blue economy framework. Her French-language fluency extends the firm’s capacity to serve Francophone West African clients and counterparties." },
  {
    id: "ama-koomson",
    name: "Ama Koomson",
    title: "LAWYER",
    image: lawyer7,
    bio: "Ama Koomson is an astute Legal Practitioner with five (5)years’ experience in both corporate and private legal practiceand a member of the Ghana Bar Association in good standing. She is also a trained Mediator and Arbitrator who holds a Professional Executive Master of Alternative Dispute Resolution (ADR) from Gamey and Gamey ADR Institute. Ama holds a qualifying certificate in law from the Ghana School of Law and graduated from Central University in Ghana with a First Class Honours in Bachelor of Laws (LLB). She served at the Legal Department of the Ghana Railway Company Limited in Takoradi and also took up the role as an Associate Lawyer with a private law firm in Takoradi where she engaged in both criminal and civil litigation and dispute resolution across all law practice areas. She also works with an Oil Marketing Company as its Internal Legal Counsel. With her experience in Corporate Law Practice, she manages the company’s legal and compliance matters and ensures that its operations align well with relevant regulatory and licensing requirements, especially ISO standards and certifications. Ama offers strong attention to detail and accuracy and discharges her duties efficiently, diligently and always maintains professional competence."
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
                <h4>Biography</h4>
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
