import React, { useState, useEffect } from "react";
import "./Gallery.css";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
import gallery7 from "../../assets/gallery7.jpg";

const galleryItems = [
  { image: gallery1, title: "STUDENTS WORKING IN TECH LAB" },
  { image: gallery2, title: "CODING WORKSHOP SESSION" },
  { image: gallery3, title: "TEAM PROJECT PRESENTATION" },
  { image: gallery4, title: "LAB WORK" },
  { image: gallery5, title: "ROBOTICS COMPETITION" },
  { image: gallery6, title: "TRAINING SESSION" },
  { image: gallery7, title: "VISION AI" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = autoPlay
      ? setInterval(() => setCurrentIndex((prev) => (prev + 1) % galleryItems.length), 3000)
      : null;

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setAutoPlay(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTimeout(() => setAutoPlay(true), 4000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 4000);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">GALLERY</h2>
      <p className="gallery-subheading">Explore our innovations and tech showcase</p>

      <div
        className="gallery-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {galleryItems.map((item, index) => (
            <div className="gallery-slide" key={index}>
              <div
                className="gallery-image-wrapper"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-caption">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prevSlide} aria-label="Prev">
          &#10094;
        </button>
        <button className="arrow right" onClick={nextSlide} aria-label="Next">
          &#10095;
        </button>

        <div className="gallery-indicators">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
            <button onClick={() => setSelectedImage(null)} className="modal-close">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
