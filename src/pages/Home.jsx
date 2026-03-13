import { useState } from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Value from "../components/Value/Value";
import Ratings from "../components/Ratings/Ratings";
import PracticeAreas from "../components/PracticeAreas/PracticeAreas";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import ClientReason from "../components/WCCU/ClientReason";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

const Home = () => {
    const [playState,setPlayState] = useState(false);
  return (
    <>
      <Element name="hero" id="hero">
      <Hero />
      </Element>
      <About id="about-section"  />
      <Value />
      <Ratings />
      <PracticeAreas />
      <Team />

      <Element name="testimonials" id="testimonials">
       <Testimonials />
      </Element>

     <Element name="contact" id="contact-section">
      <Contact />
      </Element>

      <ClientReason setPlayState={setPlayState} />
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  );
};

export default Home;