import React, { useState, useEffect }  from "react";
import "./Hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import img1 from "../../assets/top-building.jpg";
import img2 from "../../assets/top-landing-4.jpg";
import img3 from "../../assets/top-landing-2.jpg";

const slides = [
  {
    image: img1,
    title: "LEGAL SOLUTIONS FOR BUSINESS AND PERSONAL NEEDS",
    subtitle: "Where legal insights meet practical solutions!"
  },
  {
    image: img2,
    title: "PROTECTING YOUR RIGHTS WITH CONFIDENCE",
    subtitle: "Trusted legal expertise you can rely on."
  },
  {
    image: img3,
    title: "DEDICATED TO YOUR SUCCESS",
    subtitle: "Committed to excellence in legal service."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000); // slower for elegance

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `
              linear-gradient(
                95deg,
                rgba(0, 5, 19, 0.9) 25%,
                rgba(3, 12, 38, 0.75) 43%,
                rgba(3, 12, 38, 0.4) 68%,
                rgba(3, 12, 38, 0) 78%
              ),
              url(${slide.image})
            `
          }}
        >
          <div className="hero-content">
            <span>TRUSTED AND RELIABLE</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="direction">
        <div className="prev" onClick={prevSlide}>
          <IoIosArrowBack />
        </div>

        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}

        <div className="next" onClick={nextSlide}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Hero;
