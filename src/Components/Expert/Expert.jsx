import { useState, useRef, useEffect } from 'react';
import './Expert.css';
import Robo_train from "../../assets/Ajay.jpg";
import it_head from "../../assets/IT-Head.jpg";
import web_dev from "../../assets/Prajwal..jpg";

const ProfileCard = ({ img, name, role, description }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = expanded ? `${contentRef.current.scrollHeight}px` : '6em';
      contentRef.current.style.height = height;
    }
  }, [expanded]);

  return (
    <div className="profile-card">
      <div className="card-inner">
        <div className="card-front">
          <div className="image-container">
            <img
              src={img}
              alt={`Portrait of ${name}`}
              className="profile-image"
              loading="lazy"
              decoding="async"
              width="280"
              height="280"
            />
            <div className="image-overlay" />
          </div>
          <div className="card-content">
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <div
              ref={contentRef}
              className={`description-container ${expanded ? 'expanded' : ''}`}
            >
              <p className="description">{description}</p>
            </div>
            {description.length > 100 && (
              <button
                className="read-more"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const OurExpertTeam = () => {
  const techTeamMembers = [
    {
      img: it_head,
      name: "Rahul Padole",
      role: "Chief Information Officer",
      description: "As the Chief Information Officer at Techxica Technology, I lead our IT and AI teams with a focus on driving innovation, operational efficiency, and strategic alignment with business goals. My role extends beyond core technology leadership—I actively support our Human Resources and Social Media departments, helping to enhance internal systems, digital engagement, and talent outreach. By bridging technical expertise with cross-functional collaboration, I strive to ensure that our organization remains future-ready, people-centered, and digitally forward."
    },
    {
      img: web_dev,
      name: "Prajwal Nakhate",
      role: "Senior Manager",
      description: "As a Senior Manager at Techxica Technology, I lead and coordinate the efforts of our IT and AI teams, focusing on operational excellence, team performance, and the successful delivery of technology-driven solutions. My role also involves close collaboration with the Human Resources and Social Media departments, where I support digital engagement, talent outreach, branding, and internal communications. With a strong emphasis on execution, cross-functional alignment, and continuous improvement, I strive to contribute to a cohesive, innovative, and agile organizational environment."
    },
    {
      img: Robo_train,
      name: "Ajay Gawande",
      role: "Training Team Lead",
      description: "Our Training Team Lead plays a pivotal role in driving both learning and digital growth at Techxica Technology. In addition to leading training initiatives, they oversee digital marketing and social media strategies across all platforms. Their responsibilities include managing social media accounts, creating engaging content, handling brand promotion, posting job openings, and ensuring consistent and impactful online presence. With a strong focus on communication, branding, and team development, they help shape the company's digital voice and internal growth."
    }
  ];

  return (
    <section className="expert-section" id="expert-section">
      <div className="container">
        <h2 className="section-title">Our Expert Team</h2>
        <p className="section-subtitle">Meet the talented professionals behind Techxica's success</p>
        <div className="team-grid">
          {techTeamMembers.map((member, index) => (
            <ProfileCard key={`team-${index}`} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertTeam;
