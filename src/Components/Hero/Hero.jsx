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
    }, 150); // Increased debounce time for performance
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
    }, 5000); // Increased to 5s to reduce main-thread work

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
        <picture>
          <source
            srcSet={`${currentImages[current]} 1x, ${currentImages[current].replace(".webp", "-2x.webp")} 2x`}
            type="image/webp"
            media={isMobile ? "(max-width: 768px)" : "(min-width: 769px)"}
          />
          <img
            src={currentImages[current]}
            alt={`Hero slide ${current + 1}`}
            className="cyber-carousel-slide active"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </picture>
        {currentImages.map((src, index) =>
          index !== current ? (
            <picture key={index}>
              <source
                srcSet={`${src} 1x, ${src.replace(".webp", "-2x.webp")} 2x`}
                type="image/webp"
                media={isMobile ? "(max-width: 768px)" : "(min-width: 769px)"}
              />
              <img
                src={src}
                alt={`Hero slide ${index + 1}`}
                className="cyber-carousel-slide"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                aria-hidden="true"
              />
            </picture>
          ) : null
        )}
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
