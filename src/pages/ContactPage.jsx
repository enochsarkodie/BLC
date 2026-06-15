import React, { useState } from 'react';
import './ContactPage.css';
import contactBg from '../assets/contact.avif'; // ✅ fixed: removed trailing slash

// ─── Constants ────────────────────────────────────────────────────────────────

const INFO_CARDS = [
  {
    icon: '📍',
    title: 'Office Address',
    content: (
      <>
        1st Floor, Vans International Building. Efia, Washing Bay.
        <br />
        Takoradi, Ghana
      </>
    ),
  },
  {
    icon: '📞',
    title: 'Phone',
    content: <a href="tel:+233553076529">+233 55 307 6529</a>,
  },
  {
    icon: '✉️',
    title: 'Email',
    content: (
      <a href="mailto:info@blacklawconsult.com">info@blacklawconsult.com</a>
    ),
  },
  {
    icon: '🕐',
    title: 'Working Hours',
    content: (
      <>
        Mon – Fri &nbsp;·&nbsp; 8AM – 8PM
        <br />
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Sat: 10AM – 2PM</span>
      </>
    ),
  },
];

const PRACTICE_AREAS = [
  'Corporate & Commercial Law',
  'Criminal Defence',
  'Family & Divorce Law',
  'Real Estate & Property',
  'Immigration & Nationality',
  'Intellectual Property',
  'Other',
];

const WEB3FORMS_KEY = 'e44a4c95-5c49-471a-addb-1fc35ebcb3b6';

// ─── Sub-components ───────────────────────────────────────────────────────────

const ContactHero = () => (
  <section
    className="contact-hero"
    style={{ backgroundImage: `url(${contactBg})` }}
  >
    <div className="contact-overlay">
      <h1>Contact Us</h1>
      <p>Get in touch — let&apos;s get your case sorted!</p>
    </div>
  </section>
);

const InfoCard = ({ icon, title, content }) => (
  <div className="contact-card">
    <span className="contact-card-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
    {INFO_CARDS.map((card) => (
      <InfoCard key={card.title} {...card} />
    ))}
  </div>
);

const ContactMap = () => (
  <div className="contact-map">
    <iframe
      title="Office Location"
      src="https://www.google.com/maps?q=Takoradi,Ghana&output=embed"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div className="contact-map-label">📍 Takoradi, Ghana</div>
  </div>
);

const SuccessMessage = () => (
  <div className="form-success-msg">
    ✓ Message Received
    <span>
      Thank you for reaching out. A member of our team will be in touch shortly.
    </span>
  </div>
);

const ContactForm = ({ onSubmit, loading, error }) => (
  <form onSubmit={onSubmit}>
    {/* Web3Forms spam protection */}
    <input type="hidden" name="subject" value="New Contact Form Submission" />
    <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

    <div className="form-row">
      <div className="form-group">
        <label>Full Name</label>
        <input name="name" placeholder="John Mensah" required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          required
        />
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
          {PRACTICE_AREAS.map((area) => (
            <option key={area}>{area}</option>
          ))}
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

    {error && (
      <p className="form-error-msg">⚠️ {error}</p>
    )}

    <div className="form-footer">
      <p className="form-note">
        All enquiries are handled with strict <span>confidentiality</span>.
      </p>
      <button
        type="submit"
        className="contact-submit-btn"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </div>
  </form>
);

// ─── Custom Hook ──────────────────────────────────────────────────────────────

const useContactForm = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.target);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        event.target.reset();
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return {
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    error,
    handleSubmit,
  };
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ContactPage = () => {
  const { isLoading, isSuccess, error, handleSubmit } = useContactForm();

  return (
    <div className="contact-page">
      <ContactHero />

      <section className="contact-section">
        <div className="contact-overlay">

          <div className="contact-section-header">
            <div className="contact-eyebrow">Get In Touch</div>
            <h2>We Are Here to <em>Help You</em></h2>
          </div>

          <div className="contact-container">
            <ContactInfo />
            <ContactMap />
          </div>

          <hr className="contact-section-divider" />

          <div className="contact-form-container">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Our team will respond within one business day.</p>
            </div>

            <div className="contact-form">
              {isSuccess ? (
                <SuccessMessage />
              ) : (
                <ContactForm
                  onSubmit={handleSubmit}
                  loading={isLoading}
                  error={error}
                />
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;