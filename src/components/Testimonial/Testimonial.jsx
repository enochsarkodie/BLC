import React, { useState, useEffect } from 'react'
import './Testimonial.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import user_1 from '../../assets/lawyer_5.jpg'
import user_2 from '../../assets/user1.jpg'

const testimonials = [
  { img: user_1, name: "Janet Opoku-Darkwa:", location: "Accra, Takoradi",  text: "They gave me my life back I was at my lowest point after my accident unable to work, buried in medical bills, and completely lost. The team at Black Law Consult didn’t just take my case, they took care of me. My scheduled attorney checked in regularly, remembered details about my family, and genuinely seemed invested in my recovery, not just my case. When we finally reached a settlement, I cried not just because of the outcome, but because I finally felt like someone had truly fought for me. I will be forever grateful." },
  { img: user_2, name: "Emmanuel Ntim",    location: "Kumasi, Ghana",    text: "Divorce is devastating, and I was barely holding it together when I first got in touch with Black Law consult. I was surprised to have had the entire legal team at my side and they were patient, kind, and never once made me feel like just another case on their desk. They fought fiercely for my children while helping me stay grounded when emotions ran high. The compassion I was shown during such a painful chapter means more than I can express. I came out the other side with a fair outcome and my dignity intact. I owe that entirely to this incredible team" },
  { img: user_1, name: "Withheld",    location: "Accra, Ghana",     text: "As someone totally unknown to the law, facing criminal charges is terrifying, and I felt completely alone. From day one, my lawyers looked me in the eye and told me they would stand by me and they meant it. The relief I felt when the charges were dismissed is indescribable. This firm didn’t just defend me, they restored my faith that justice is possible. I cannot thank them enough" },
  { img: user_2, name: "Grace Salomey Nkansah", location: "Takoradi, Ghana",  text: "Black Law Consult handled our corporate dispute with remarkable efficiency. They kept us informed every step of the way. Truly a firm that puts clients first." },
  { img: user_1, name: "Samuel Gyamfi",    location: "Accra, Ghana",     text: "Their availability alone sets them apart. I sent a WhatsApp at 9pm and had a response within the hour. That level of dedication is incredibly rare." },
  { img: user_2, name: "David Quayson",     location: "Takoradi, Ghana",  text: "Black Law Consult handled our corporate dispute with remarkable efficiency. They kept us informed every step of the way. Truly a firm that puts clients first." },
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
                  {/* <img src={t.img} alt={t.name} /> */}
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