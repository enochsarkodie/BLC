import  React,  { useState } from 'react'
import { useParams } from 'react-router-dom';
import './TeamPage.css'
import lawyerBg from '../assets/team-view.jpg'
import lawyer1 from "../assets/FLIK2370.jpg";
import lawyer2 from "../assets/josh.jpg";
import lawyer3 from "../assets/black.jpg";
import lawyer4 from "../assets/sharon.jpg";
import lawyer5 from "../assets/uncle.jpg";
import lawyer6 from "../assets/FLIK2441.jpg";
import lawyer7 from "../assets/FLIK2450.jpg";
import lawyer8 from '../assets/FLIK2418.jpg';
import lawyer9 from '../assets/lawyer_12.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';


const TeamPage = () => {
    const lawyers = [
  {
    id: "emmanuel-buabeng-tsibuah",
    name: "Emmanuel Buabeng Tsibuah",
    title: "Senior Partner",
    image: lawyer3,
    bio: "Emmanuel Buabeng Tsibuah, the Master of Chambers has over fourteen years of legal experience. In his several years of practice, he served as Head of Litigation for a renowned Law Firm in Takoradi where he helped unravel very complex legal challenges and also lectured in law related courses in a number of institutions.He holds a B.A and an LLB from the University of Ghana and a qualifying certificate in law from the Ghana School of Law. He is a good standing member of the Ghana Bar Association.He has over the years carved a niche for himself in the handling of land related issues, chieftaincy matters, family law matters and general litigation. Indeed, by reason of his varied experience has been consulted extensively and also represented several traditional leaders, individuals and corporate entities in very key and contentious matters.He has participated in several conferences, seminars, symposia and others and also won various awards within and without the legal community.",
  },
  {
    id: "joshua-gyan",
    name: "Joshua Gyan-Mensah",
    title: "Associate",
    image: lawyer2,
    bio: "Joshua is a legal practitioner whose practice extends across diverse areas of legal practice including land and title disputes, criminal litigation, commercial litigation, and banking and secured transactions. He advises corporate entities, financial institutions, traditional authorities, and private clients on matters involving large-scale land interests, stool property governance, commercial and corporate disputes. He holds an LL.B. from Central University and the Professional Law Certificate from the Ghana School of Law, and was called to the Ghana Bar in 2023 Joshua is known for his disciplined litigation strategy, strong command of statutory and customary land law, and precise procedural advocacy. He also advises on matters relating to natural resources, land-based investments, and regulatory compliance within Ghana’s evolving legal framework.",
  },
  {
    id: "sharon-vanessa-gyan-mensah",
    name: "Sharon Vanessa Gyan-Mensah",
    title: "Managing Partner",
    image: lawyer4,
    bio: "Sharon Vanessa Gyan-Mensah is a dedicated and promising legal practitioner. She demonstrates strong professional commitment, sound legal knowledge, and a passion for excellence in the legal profession.She holds an LL.B from the Kwame Nkrumah University of Science and Technology, a Qualifying Certificate in Law from the Ghana School of Law an LLM candidate from Kwame Nkrumah University of Science and Technology She is a member in good standing of the Ghana Bar Association.Sharon is committed to building a solid foundation in legal practice through diligence, integrity, and continuous learning. She has participated in several conferences and seminars aimed at enhancing professional development and deepening her understanding of emerging legal trends and practice areas.She approaches each task with dedication and professionalism, steadily carving a path for herself within the legal community.",
  },
  {
    id: "moses-benefo-antwi",
    name: "Moses Benefo Antwi ",
    title: "Associate",
    image: lawyer5,
    bio: "Moses Benefo Antwi is a private legal practitioner who is specialised in the specialty of corporate and commercial law, sports and entertainment disputes, criminal litigation, family law, ADR matters, human rights issues, constitutional law matters, intellectual property matters, natural resources disputes, inter alia.He holds an MAJM from Sikkim Manipal University, an LLB from Ghana Institute of Management and Public Administration(GIMPA) and a Professional Law Certificate from the Ghana School of Law. He is a member in good standing of the Ghana Bar Association.Typified features of Moses are his expert opinions and advice on legal matters, wisdom and discernment, possessing physical and intellectual stamina, presence in court, humility, honesty, hardworking, humanity and human relations. Above all, he is a people’s person in the legal ecosystem.",
  },
];


 const { lawyerId } = useParams();
const [activeLawyer, setActiveLawyer] = useState(
  lawyers.find(l => l.id === lawyerId)?.id ?? lawyers[0].id
);
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
