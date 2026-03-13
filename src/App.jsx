import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PracticePage from "./pages/PracticePage";
import ContactPage from "./pages/ContactPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import TeamPage from "./pages/TeamPage";

function App() {
    
  return (

    <Router>
      <TopHeader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice-areas" element={<PracticePage />} />
        <Route path="/practice-areas/:id" element={<PracticePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about/team-page/:id" element={<TeamPage />} />
      </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;