import React, { useState, useEffect } from 'react'
import './Testimonial.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import user_1 from '../../assets/lawyer_5.jpg'
import user_2 from '../../assets/user1.jpg'

const testimonials = [
  { img: user_1, name: "William Jackson", location: "Accra, Takoradi",  text: "Exceptional legal expertise! The team at Black Law Consult guided me through a complex legal issue with precision and dedication. Grateful for their professionalism and positive results." },
  { img: user_2, name: "Abena Mensah",    location: "Kumasi, Ghana",    text: "Professional, discreet, and genuinely invested in my outcome. I would recommend Black Law Consult to anyone navigating a difficult legal matter. Top-tier service." },
  { img: user_1, name: "Kwame Asante",    location: "Accra, Ghana",     text: "Their availability alone sets them apart. I sent a WhatsApp at 9pm and had a response within the hour. That level of dedication is incredibly rare." },
  { img: user_2, name: "Sandra Boateng", location: "Takoradi, Ghana",  text: "Black Law Consult handled our corporate dispute with remarkable efficiency. They kept us informed every step of the way. Truly a firm that puts clients first." },
  { img: user_1, name: "Kofi Mensah",    location: "Accra, Ghana",     text: "Their availability alone sets them apart. I sent a WhatsApp at 9pm and had a response within the hour. That level of dedication is incredibly rare." },
  { img: user_2, name: "Ama Serwaa",     location: "Takoradi, Ghana",  text: "Black Law Consult handled our corporate dispute with remarkable efficiency. They kept us informed every step of the way. Truly a firm that puts clients first." },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(window.innerWidth <= 640 ? 1 : 2);

  useEffect(() => {
    const onResize = () => setPerPage(window.innerWidth <= 640 ? 1 : 2);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = testimonials.length - perPage;

  // clamp current if perPage changes
  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [perPage]);

  const prev = () => setCurrent(c => c > 0 ? c - 1 : maxIndex);
  const next = () => setCurrent(c => c < maxIndex ? c + 1 : 0);

  // simply slice the visible items — no CSS transform math needed
  const visible = testimonials.slice(current, current + perPage);

  return (
    <div className='testimonial container' id="testimonials">
      <p className='testimonial-eyebrow'>Client Voices</p>
      <h1>What Our Clients Say</h1>

      <div className="testimonial-slider-wrap">

        <button className='back-btn' onClick={prev} aria-label="Previous">
          <IoIosArrowBack />
        </button>

        <div className="slider">
          <div className="slides-grid">
            {visible.map((t, i) => (
              <div className="slide" key={`${current}-${i}`}>
                <div className="slide-quote">"</div>
                <p>{t.text}</p>
                <div className="user-info">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h3>{t.name}</h3>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className='next-btn' onClick={next} aria-label="Next">
          <IoIosArrowForward />
        </button>

      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`testimonial-dot ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;