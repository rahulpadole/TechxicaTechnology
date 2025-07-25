import { useState, useEffect, useRef } from "react";
import "./Programs.css";
import program_1 from "../../assets/ai_ml.jpg";
import program_2 from "../../assets/cloud_computing.jpg";
import program_3 from "../../assets/web_dev.jpg";
import program_4 from "../../assets/mobile_dev.jpg";
import program_5 from "../../assets/data_science.jpg";
import program_6 from "../../assets/cybersecurity.jpg";
import program_7 from "../../assets/devops.jpg";
import program_8 from "../../assets/blockchain.jpg";
import program_9 from "../../assets/software_architecture.jpg";

const programsData = [
  { img: program_1, title: "AI/ML DEVELOPMENT" },
  { img: program_2, title: "CLOUD COMPUTING" },
  { img: program_3, title: "WEB DEVELOPMENT" },
  { img: program_4, title: "MOBILE APP DEVELOPMENT" },
  { img: program_5, title: "DATA SCIENCE" },
  { img: program_6, title: "CYBERSECURITY" },
  { img: program_7, title: "DEVOPS ENGINEERING" },
  { img: program_8, title: "BLOCKCHAIN DEVELOPMENT" },
  { img: program_9, title: "SOFTWARE ARCHITECTURE" },
];

const Programs = () => {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleSlides(w >= 1200 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = programsData.length;
  const clonesBefore = programsData.slice(-visibleSlides);
  const clonesAfter = programsData.slice(0, visibleSlides);
  const carouselData = [...clonesBefore, ...programsData, ...clonesAfter];

  useEffect(() => {
    setCurrentIndex(visibleSlides);
  }, [visibleSlides]);

  const handleTransitionEnd = () => {
    if (currentIndex >= total + visibleSlides) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleSlides);
    } else if (currentIndex <= 0) {
      setTransitionEnabled(false);
      setCurrentIndex(total);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const t = setTimeout(() => setTransitionEnabled(true), 20);
      return () => clearTimeout(t);
    }
  }, [transitionEnabled]);

  const nextSlide = () => setCurrentIndex(i => i + 1);
  const prevSlide = () => setCurrentIndex(i => i - 1);

  return (
    <div className="Prog-container" id="program-section">
      <div className="programs-page-container" ref={carouselRef}>
        <button className="carousel-prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
        <div className="programs-carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
              transition: transitionEnabled ? "transform 0.5s ease" : "none"
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselData.map((p, i) => (
              <div className="program-card" key={i}>
                <div className="program-image-wrapper">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="320"
                  />
                  <div className="program-overlay"></div>
                </div>
                <div className="program-caption">
                  <p>{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-next" onClick={nextSlide} aria-label="Next slide">❯</button>
      </div>
    </div>
  );
};

export default Programs;
