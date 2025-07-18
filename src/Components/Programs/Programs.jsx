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
  const autoSlideInterval = useRef(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const vs = w >= 1200 ? 3 : w >= 768 ? 2 : 1;
      setVisibleSlides(vs);
    };
    update();
    window.addEventListener("resize", update);
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

  const startAuto = () => {
    clearInterval(autoSlideInterval.current);
    const t = window.innerWidth < 768 ? 1500 : 3000;
    autoSlideInterval.current = setInterval(() => {
      if (!isInteracting.current) nextSlide();
    }, t);
  };

  const pauseAuto = () => {
    isInteracting.current = true;
    clearInterval(autoSlideInterval.current);
  };

  const resumeAuto = () => {
    isInteracting.current = false;
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoSlideInterval.current);
  }, [visibleSlides]);

  const onTouchStart = e => {
    pauseAuto();
    carouselRef.current.startX = e.touches[0].clientX;
  };

  const onTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;
    const diff = carouselRef.current.startX - endX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    resumeAuto();
  };

  return (
    <div className="Prog-container" id="programs">
      <div
        className="programs-page-container"
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button className="carousel-prev" onClick={prevSlide}>
          &#10094;
        </button>
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
                  <img src={p.img} alt={p.title} />
                  <div className="program-overlay"></div>
                </div>
                <div className="program-caption">
                  <p>{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Programs;