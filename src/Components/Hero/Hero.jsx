import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/robotic_3_hand.jpg";
import hero1Mobile from "./mobileview1.jpg";
import hero2Mobile from "./mobileview2.jpg";
import hero3Mobile from "./mobileview3.jpg";
import hero4Mobile from "./mobileview4.jpg";

const images = {
  desktop: [hero1, hero2, hero3, hero4],
  mobile: [hero1Mobile, hero2Mobile, hero3Mobile, hero4Mobile]
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.desktop.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, images.desktop.length]);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("Program");
    if (programsSection) {
      programsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const currentImages = isMobile ? images.mobile : images.desktop;

  return (
    <section className="cyber-hero-container">
      <div 
        className="cyber-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentImages.map((src, index) => (
          <div
            key={index}
            className={`cyber-carousel-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={index !== current}
          />
        ))}
        <div className="cyber-carousel-overlay" />
        <div className="cyber-grid-overlay" />
      </div>

      <div className="cyber-hero-content">
        <h1 className="cyber-hero-title">DISRUPT. BUILD. DOMINATE. THE FUTURE RUNS ON OUR CODE</h1>
        <p className="cyber-hero-subtitle">
          WE'RE REWRITING THE RULES OF DIGITAL TRANSFORMATION THROUGH CUTTING-EDGE ENGINEERING, AI-POWERED SOLUTIONS, AND INFRASTRUCTURE THAT SCALES AT THE SPEED OF YOUR AMBITION.
          WHERE OTHERS SEE CHALLENGES, WE SEE CLEAN CODE AND LIMITLESS POTENTIAL.
        </p>
        <button 
          className="cyber-hero-button" 
          onClick={scrollToPrograms}
          aria-label="Explore our programs"
        >
          EXPLORE PROGRAMS
          <span className="cyber-button-icon">→</span>
        </button>
        
        <div className="cyber-carousel-indicators">
          {images.desktop.map((_, index) => (
            <button
              key={index}
              className={`cyber-indicator ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;