import React,{useState} from 'react'
import './ContactPage.css'
import contactBg from '../assets/contact.avif/'
import { FaCirclePlay } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { GiOnTarget } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const ContactPage = () => {
    const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "1d6fd7f1-ca39-4bc5-9ecc-8002d157582d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const infoCards = [
  { icon: "📍", title: "Office Address",  content: <>Effiakuma Post Office<br />Takoradi, Ghana</> },
  { icon: "📞", title: "Phone",           content: <a href="tel:+233201234567">+233 20 123 4567</a> },
  { icon: "✉️", title: "Email",           content: <a href="mailto:info@blacklawfirm.com">info@blacklawconsult.com</a> },
  { icon: "🕐", title: "Working Hours",   content: <>Mon – Fri &nbsp;·&nbsp; 8AM – 8PM<br /><span style={{fontSize:'0.8rem', opacity:0.6}}>Sat: 10AM – 2PM</span></> },
];
  return (
    <div className='contact-page'>
       <section
                className="contact-hero"
                      style={{ backgroundImage: `url(${contactBg})` }}
                    >
                      <div className="contact-overlay">
                        <h1>Contact Us</h1>
                        <p>Get in touch lets get your cases sorted!</p>
                      </div>
            </section>

      <section className="contact-section">
        <div className="contact-overlay">
 
          {/* ── HEADER ── */}
          <div className="contact-section-header">
            <div className="contact-eyebrow">Get In Touch</div>
            <h2>We Are Here to <em>Help You</em></h2>
          </div>
 
          {/* ── INFO + MAP ── */}
          <div className="contact-container">
 
            <div className="contact-info">
              {infoCards.map((c, i) => (
                <div className="contact-card" key={i}>
                  <span className="contact-card-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.content}</p>
                </div>
              ))}
            </div>
 
            <div className="contact-map">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Takoradi,Ghana&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-label">📍 Takoradi , Ghana</div>
            </div>
 
          </div>
 
          <hr className="contact-section-divider" />
 
          {/* ── FORM ── */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Our team will respond within one business day.</p>
            </div>
 
             <div className="contact-form">
      {result === "success" ? (
        <div className="form-success-msg">
          ✓ Message Received
          <span>Thank you for reaching out. A member of our team will be in touch shortly.</span>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          {/* hidden honeypot — web3forms spam protection */}
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" placeholder="John Mensah" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+233 00 000 0000" />
            </div>
            <div className="form-group">
              <label>Practice Area</label>
              <select name="practice_area">
                <option value="">Select an area...</option>
                <option>Corporate & Commercial Law</option>
                <option>Criminal Defence</option>
                <option>Family & Divorce Law</option>
                <option>Real Estate & Property</option>
                <option>Immigration & Nationality</option>
                <option>Intellectual Property</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-full">
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Briefly describe your situation or enquiry..."
                required
              />
            </div>
          </div>

          {/* error message */}
          {result && result !== "success" && (
            <p style={{
              color: "#ff6b6b",
              fontSize: "0.85rem",
              marginBottom: "12px",
              textAlign: "center"
            }}>
              ⚠️ {result}
            </p>
          )}

          <div className="form-footer">
            <p className="form-note">
              All enquiries are handled with strict <span>confidentiality</span>.
            </p>
            <button type="submit" className="contact-submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </div>
        </form>
      )}
    </div>
          </div>
 
        </div>
      </section>
    </div>
  )
}

export default ContactPage
