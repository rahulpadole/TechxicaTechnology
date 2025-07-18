import { useEffect, useRef, useState } from 'react';
import './Board.css';
import image2 from '../../assets/2.png';

const ManagementCard = ({ name, title, image, fullText, delay }) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef();

  const shortText = fullText.length > 300 ? fullText.slice(0, 300) + '...' : fullText;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay || 0);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div className="card-wrapper" ref={cardRef}>
      <div className={`single-box ${visible ? 'animate' : ''}`}>
        <div className="img-area">
          <img src={image} alt={name} />
        </div>
        <div className="img-text">
          <h5>{name}</h5>
          <span>{title}</span>
          <p>{expanded ? fullText : shortText}</p>
          <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Board = () => {
  const boardMembers = [
    {
      name: 'John Doe',
      title: 'Board Member',
      image: image2,
      fullText:
        'John has over 20 years of experience in leading tech teams and building scalable platforms. He mentors startups and inspires teams with his leadership.',
      delay: 100,
    },
    {
      name: 'Jane Smith',
      title: 'Co-Director',
      image: image2,
      fullText:
        'Jane has worked globally in product innovation and team management. She brings a strategic outlook and people-first approach to the organization.',
      delay: 200,
    },
  ];

  return (
    <section className="board-section" id="management">
      <h2 className="board-title">Our Management Board</h2>
      <div className="board-container">
        {boardMembers.map((member, index) => (
          <ManagementCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Board;
