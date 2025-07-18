import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheck,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './TechxicaFooter.css';

const TechxicaFooter = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Techxica Inquiry");
    const body = encodeURIComponent(
      "Hello Techxica Team,\n\n" +
      "I'm interested in your services and would like more information about:\n\n" +
      "[Please specify your inquiry]\n\n" +
      "Best regards,\n" +
      "[Your Name]"
    );

    // Try opening default mail client
    window.location.href = `mailto:techxicatechnology@gmail.com?subject=${subject}&body=${body}`;

    // Fallback to Gmail after short delay
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=techxicatechnology@gmail.com&su=${subject}&body=${body}`,
        '_blank'
      );
    }, 300);
  };

  const TechxicaSocialLinks = [
    { icon: <FaInstagram />, url: 'https://www.instagram.com/techxicatechnology?igsh=dnh3eDltenU0YWE0', label: 'Instagram' },
    { icon: <FaXTwitter />, url: 'https://x.com/techxica', label: 'X (Twitter)' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/techxicatechnology/', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: '/', label: 'YouTube' },
  ];

  const TechxicaContactItems = [
    {
      icon: <FaMapMarkerAlt className="cyber-footer__contact-icon" />,
      text: 'Chh Sambhajinagar, Pin 431007, IND',
      link: 'https://maps.app.goo.gl/crrthZXWgbS184Tp9',
      type: 'link',
    },
    {
      icon: <FaPhoneAlt className="cyber-footer__contact-icon" />,
      text: '+91 8149713034',
      link: 'tel:+918149713034',
      type: 'link'
    },
    {
      icon: <FaEnvelope className="cyber-footer__contact-icon" />,
      text: 'techxicatechnology@gmail.com',
      type: 'mail',
      onClick: handleEmailClick
    },
    {
      icon: <FaClock className="cyber-footer__contact-icon" />,
      text: 'Mon-Fri: 9AM - 5PM',
      type: 'text'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setSubscribed(true);
    setEmail('');
    setError('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="cyber-footer">
      <div className="cyber-footer__gradient-bg">
        <div className="cyber-footer__container">
          <div className="cyber-footer__content">
            {/* Brand Section */}
            <div className="cyber-footer__brand">
              <h3 className="cyber-footer__logo">
                <span className="cyber-footer__logo-text">TECHXICA</span>
                <span className="cyber-footer__logo-underline"></span>
              </h3>
              <div className="cyber-footer__social">
                {TechxicaSocialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="cyber-footer__social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="cyber-footer__contacts">
              {TechxicaContactItems.map((item, index) => (
                <div className="cyber-footer__contact-item" key={index}>
                  {item.type === 'link' ? (
                    <a 
                      href={item.link} 
                      className="cyber-footer__contact-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ) : item.type === 'mail' ? (
                    <a
                      href="#"
                      className="cyber-footer__contact-link"
                      onClick={item.onClick}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="cyber-footer__contact-link">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="cyber-footer__newsletter">
              <h4 className="cyber-footer__newsletter-title">GET UPDATES</h4>
              {subscribed ? (
                <div className="cyber-footer__success">
                  <FaCheck className="cyber-footer__success-icon" />
                  <span>SUBSCRIBED!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cyber-footer__form">
                  <div className="cyber-footer__input-group">
                    <input
                      type="email"
                      placeholder="YOUR EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="cyber-footer__input"
                    />
                    <button type="submit" className="cyber-footer__submit">
                      <FaPaperPlane className="cyber-footer__submit-icon" />
                    </button>
                  </div>
                  {error && <p className="cyber-footer__error">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Legal Section */}
          <div className="cyber-footer__legal">
            <p className="cyber-footer__copyright">
              © {currentYear} TECHXICA TECHNOLOGY PVT. LTD. ALL RIGHTS RESERVED. |{' '}
              <Link to="/privacy" className="cyber-footer__legal-link">Privacy Policy</Link>
              {' '}|{' '}
              <Link to="/terms" className="cyber-footer__legal-link">
                TERMS
              </Link>{' '}
              |{' '}
              <Link to="/cookies" className="cyber-footer__legal-link">
                COOKIES
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TechxicaFooter;