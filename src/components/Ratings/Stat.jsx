import { useEffect, useRef, useState } from "react";

const Stat = ({ end, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) observer.observe(statRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <div className="info" ref={statRef}>
      <p>
        {count}
        <span className="suffix">{suffix}</span>
      </p>
      <span className="label">{label}</span>
    </div>
  );
};

export default Stat;
