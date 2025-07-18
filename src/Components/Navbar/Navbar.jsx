import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/TechLogo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atHero, setAtHero] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return; // Debounce scroll events
      scrollTimeout = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        setAtHero(window.scrollY < 100 && location.pathname === '/');
        scrollTimeout = null;
      }, 100); // Debounce delay
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [location]);

  useEffect(() => {
    setMenuOpen(false);
    setAtHero(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollTo = (target) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`cyber-nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''} ${atHero ? 'at-hero' : ''}`}>
      <div className="cyber-nav-container">
        <Link 
          to="/" 
          className="cyber-logo-link"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Company Logo" className="cyber-nav-logo" />
        </Link>

        <button 
          className="cyber-menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`cyber-nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="cyber-nav-menu-inner">
            <button 
              className="cyber-nav-link"
              onClick={() => {
                setMenuOpen(false);
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              HOME
            </button>

            <button 
              className="cyber-nav-link"
              onClick={() => handleScrollTo('about-container')}
            >
              ABOUT
            </button>

            <button 
              className="cyber-nav-link"
              onClick={() => handleScrollTo('program-section')}
            >
              PROGRAM
            </button>

            <button 
              className="cyber-nav-link"
              onClick={() => handleScrollTo('gallery')}
            >
              GALLERY
            </button>

            <Link 
              to="/careers" 
              className="cyber-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              CAREER
            </Link>

            <button 
              className="cyber-nav-link"
              onClick={() => handleScrollTo('expert-section')}
            >
              OUR TEAM
            </button>

            <button 
              className="cyber-nav-button"
              onClick={() => handleScrollTo('contact')}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;