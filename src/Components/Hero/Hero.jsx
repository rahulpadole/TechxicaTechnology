import React, { useState, useEffect, useCallback } from "react";
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
  mobile: [hero1Mobile, hero2Mobile, hero3Mobile, hero4Mobile],
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsMobile(window.innerWidth < 768);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.desktop.length);
    }, 4000); // Increased interval to 4s for performance

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("Program");
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const currentImages = isMobile ? images.mobile : images.desktop;

  return (
    <section className="cyber-hero-container" aria-label="Hero section with carousel">
      <div
        className="cyber-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentImages.map((src, index) => (
          <picture key={index}>
            <source srcSet={src} type="image/webp" />
            <img
              src={src}
              alt={`Hero slide ${index + 1}`}
              className={`cyber-carousel-slide ${index === current ? "active" : ""}`}
              loading={index === 0 && current === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              aria-hidden={index !== current}
            />
          </picture>
        ))}
        <div className="cyber-carousel-overlay" />
        <div className="cyber-grid-overlay" />
      </div>

      <div className="cyber-hero-content">
        <h1 className="cyber-hero-title">
          DISRUPT. BUILD. DOMINATE. THE FUTURE RUNS ON OUR CODE
        </h1>
        <p className="cyber-hero-subtitle">
          WE'RE REWRITING THE RULES OF DIGITAL TRANSFORMATION THROUGH CUTTING-EDGE ENGINEERING,
          AI-POWERED SOLUTIONS, AND INFRASTRUCTURE THAT SCALES AT THE SPEED OF YOUR AMBITION.
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

        <div className="cyber-carousel-indicators" role="tablist">
          {images.desktop.map((_, index) => (
            <button
              key={index}
              className={`cyber-indicator ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
