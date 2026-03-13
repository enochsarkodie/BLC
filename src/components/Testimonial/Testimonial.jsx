import React, { useRef, useState, useEffect } from 'react'
import './Testimonial.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import user_1 from '../../assets/lawyer_5.jpg'
import user_2 from '../../assets/user1.jpg'

const testimonials = [
  { img: user_1, name: "William Jackson", location: "Accra, Takoradi", text: "Exceptional legal expertise! The team at Black Law Consult guided me through a complex legal issue with precision and dedication. Grateful for their professionalism and positive results." },
  { img: user_2, name: "Abena Mensah",    location: "Kumasi, Ghana",   text: "Professional, discreet, and genuinely invested in my outcome. I would recommend Black Law Consult to anyone navigating a difficult legal matter. Top-tier service." },
  { img: user_1, name: "Kwame Asante",    location: "Accra, Ghana",    text: "Their availability alone sets them apart. I sent a WhatsApp at 9pm and had a response within the hour. That level of dedication is incredibly rare." },
  { img: user_2, name: "Sandra Boateng",  location: "Takoradi, Ghana", text: "Black Law Consult handled our corporate dispute with remarkable efficiency. They kept us informed every step of the way. Truly a firm that puts clients first." },
 
];

const Testimonial = () => {
  const SLIDES_VISIBLE = window.innerWidth <= 640 ? 1 : 2;


  const slider = useRef();
  const [current, setCurrent] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(
    window.innerWidth <= 640 ? 1 : 2
  );

  // update slidesVisible on resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesVisible(window.innerWidth <= 640 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - slidesVisible;
  const slidePercent = 100 / slidesVisible;       // e.g. 50% if 2 visible
  const ulWidthPercent = (testimonials.length / slidesVisible) * 100; // e.g. 400% for 8 items, 2 visible

  const slideTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
    slider.current.style.transform = `translateX(-${clamped * slidePercent}%)`;
  };

  return (
    <div className='testimonial container' id="testimonials">
      <p className='testimonial-eyebrow'>Client Voices</p>
      <h1>What Our Clients Say</h1>

      <div className="testimonial-slider-wrap">
        <button className='back-btn' onClick={() => slideTo(current > 0 ? current - 1 : maxIndex)} aria-label="Previous">
          <IoIosArrowBack />
        </button>

        <div className="slider">
          {/* ul width set inline based on actual count */}
          <ul ref={slider} style={{ width: `${ulWidthPercent}%` }}>
            {testimonials.map((t, i) => (
              <li key={i} style={{ width: `${100 / testimonials.length}%` }}>
                <div className="slide">
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
              </li>
            ))}
          </ul>
        </div>

        <button className='next-btn' onClick={() => slideTo(current < maxIndex ? current + 1 : 0)} aria-label="Next">
          <IoIosArrowForward />
        </button>
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`testimonial-dot ${current === i ? "active" : ""}`}
            onClick={() => slideTo(i)}
          />
        ))}
      </div>
    </div>
  );
};



export default Testimonial