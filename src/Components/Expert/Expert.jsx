import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Expert.css';

// Image imports

import Robo_train from "../../assets/Ajay.jpg";
import it_head from "../../assets/IT-Head.jpg";
import web_dev from "../../assets/Prajwal..jpg";

const ProfileCard = ({ img, name, role, description }) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState('6em');
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.setProperty('--rotate-x', `${y * 8}deg`);
      card.style.setProperty('--rotate-y', `${-x * 8}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
      setIsHovered(false);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`profile-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="image-container">
            <img 
              src={img} 
              alt={`Portrait of ${name}`} 
              className={`profile-image ${isHovered ? 'zoomed' : ''}`}
              loading="lazy"
            />
            <div className="image-overlay" />
          </div>
          <div className="card-content">
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
            <div className="animated-border" />
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <div 
              ref={contentRef}
              className={`description-container ${expanded ? 'expanded' : ''}`}
              style={{ height: expanded ? contentHeight : '6em' }}
            >
              <p className="description">{description}</p>
            </div>
            {description.length > 100 && (
              <button 
                className="read-more"
                onClick={toggleExpand}
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

const TeamSlider = ({ title, subtitle, members }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="team-section">
      <h3 className="team-title">{title}</h3>
      {subtitle && <p className="team-subtitle">{subtitle}</p>}
      <div className="slider-container">
        <Slider {...settings}>
          {members.map((member, index) => (
            <div key={`team-slide-${index}`}>
              <ProfileCard {...member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const TeamSection = ({ title, subtitle, members }) => {
  return (
    <div className="team-section">
      <h3 className="team-title">{title}</h3>
      {subtitle && <p className="team-subtitle">{subtitle}</p>}
      <div className="team-grid">
        {members.map((member, index) => (
          <ProfileCard key={`${title}-${index}`} {...member} />
        ))}
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
      role: "IT Director",
      description: "As the IT Director at Techxica Technology, I oversee the strategic planning, implementation, and management of our IT infrastructure and AI initiatives. I am responsible for aligning technology operations with business goals, ensuring system reliability, cybersecurity, and continuous innovation across platforms. In addition to managing our technical roadmap, I collaborate closely with the Human Resources and Social Media teams to strengthen internal communication, digital outreach, and organizational branding. With a strong focus on leadership, execution, and cross-departmental synergy, I aim to foster a resilient, scalable, and future-ready technology environment that empowers both our teams and our vision."
    },
    
    {
      img: Robo_train,
      name: "Ajay Gawande",
      role: "Training Team Lead",
      description: "Our Training Team Lead plays a pivotal role in driving both learning and digital growth at Techxica Technology. In addition to leading training initiatives, they oversee digital marketing and social media strategies across all platforms. Their responsibilities include managing social media accounts, creating engaging content, handling brand promotion, posting job openings, and ensuring consistent and impactful online presence. With a strong focus on communication, branding, and team development, they help shape the company's digital voice and internal growth."
    }
  ];

  return (
    <section className="expert-section" id="expert-team">
      <div className="container">
        <h2 className="section-title">Our Expert Team</h2>
        <p className="section-subtitle">Meet the talented professionals behind Techxica's success</p>

        

        <TeamSlider
          title="Tech & Robotics Team"
          subtitle="Innovators building our technological future"
          members={techTeamMembers}
        />
      </div>
    </section>
  );
};

export default OurExpertTeam;
