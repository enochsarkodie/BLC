import { useState, useEffect } from "react";
import logo from "../../assets/blc_logoo.png";
import "./Navbar.css";
import { CiChat2 } from "react-icons/ci";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky]     = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate   = useNavigate();
  const location   = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`navbar ${sticky ? "dark-nav" : ""}`}>

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-item">
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/practice-areas">Practice Areas</Link></li>
          <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="nav-right">
          <span className="btn" onClick={() => scrollToSection("contact-section")}>
            <CiChat2 className="nav-right-icon" />
            Book Appointment
          </span>
        </div>

        {/* HAMBURGER */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      <div className={`nav-drawer ${menuOpen ? "nav-drawer--open" : ""}`}>
        <ul className="nav-drawer-links">
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/practice-areas" onClick={() => setMenuOpen(false)}>Practice Areas</Link></li>
          <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        <span
          className="btn nav-drawer-btn"
          onClick={() => scrollToSection("contact-section")}
        >
          <CiChat2 className="nav-right-icon" />
          Book Appointment
        </span>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;