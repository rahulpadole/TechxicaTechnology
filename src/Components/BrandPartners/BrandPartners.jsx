import React from 'react';
import './BrandPartners.css';
import gurukulLogo from '../../assets/gurukul-logo.png';

const BrandPartner = () => {
  const partner = {
    img: gurukulLogo,
    title: 'Gurukul Olympiad School',
    tagline: 'Empowering Young Minds in Chhatrapati Sambhajinagar',
    description: 'Our premier brand partner, Gurukul Olympiad School, is a leading institution committed to fostering academic excellence and holistic development of students. They believe in nurturing future leaders.',
    link: 'https://www.gurukulschool.net'
  };

  return (
    <section id="brand-partner">
      <div className="section-header">
        <h1 className="section-title">Patents & Collaborations</h1>
        <div className="title-underline"></div>
      </div>
      <div className="brand-container">
        <div className="logo-section">
          <a href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={partner.img} alt={partner.title} className="brand-logo" />
          </a>
        </div>
        <div className="info-section">
          <h2>{partner.title}</h2>
          <h4>{partner.tagline}</h4>
          <p>{partner.description}</p>
          <a href={partner.link} target="_blank" rel="noopener noreferrer" className="visit-button">
            Visit Gurukul School
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPartner;