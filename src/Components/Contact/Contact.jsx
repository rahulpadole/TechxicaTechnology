import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

// React Icons
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', 'ed49543b-1c5e-4089-b3fe-d82e39c3c7b2');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult('Thanks! Your message has been sent.');
        event.target.reset();
      } else {
        setResult('Error: ' + data.message);
      }
    } catch (error) {
      setResult('Network error. Please try later.');
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Inquiry about Techxica Services');
    const body = encodeURIComponent(
      'Hello Techxica Team,\n\n' +
      "I'm interested in your services and would like more information about:\n\n" +
      '[Please specify your inquiry here]\n\n' +
      'Best regards,\n' +
      '[Your Name]'
    );

    // Primary method - works on most devices
    window.location.href = `mailto:techxicatechnology@gmail.com?subject=${subject}&body=${body}`;

    // Fallback method after short delay
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=techxicatechnology@gmail.com&su=${subject}&body=${body}`,
        '_blank'
      );
    }, 300);
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          <span>SEND US A MESSAGE</span>{' '}
          <img src={msg_icon} alt="Message icon" className="contact-icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback is valuable.
        </p>

        <ul className="contact-list">
          <li>
            <a href="#" className="contact-link" onClick={handleEmailClick}>
              <img src={mail_icon} alt="Email icon" className="contact-icon" />
              <span>techxicatechnology@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+918149713034" className="contact-link">
              <img src={phone_icon} alt="Phone icon" className="contact-icon" />
              <span>+91 8149713034</span>
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/crrthZXWgbS184Tp9" className="contact-link">
              <img src={location_icon} alt="Location icon" className="contact-icon" />
              <span>
                Chh Sambhajinagar
                <br />
                Pin 431007, IND
              </span>
            </a>
          </li>
        </ul>
        <br />
        <h3>FOLLOW US ON SOCIAL MEDIA</h3>
        <div className="social-links">
          <a
            href="https://www.instagram.com/techxicatechnology?igsh=dnh3eDltenU0YWE0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaInstagram className="contact-icon" /> <span>INSTAGRAM</span>
          </a>
          <a
            href="https://x.com/techxica"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaXTwitter className="contact-icon" /> <span>X</span>
          </a>
          <a
            href="https://www.linkedin.com/company/techxicatechnology/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" /> <span>LINKEDIN</span>
          </a>
          <a
            href="https://www.facebook.com/share/1AwM7MVqEu/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaFacebook className="contact-icon" /> <span>FACEBOOK</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaYoutube className="contact-icon" /> <span>YOUTUBE</span>
          </a>
        </div>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit} className="contact-form">
          <label className="contact-label">YOUR NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="contact-input"
          />

          <label className="contact-label">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="contact-input"
          />

          <label className="contact-label">PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            className="contact-input"
          />

          <label className="contact-label">WRITE YOUR MESSAGES HERE</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="contact-textarea"
          ></textarea>

          <button type="submit" className="btn contact-btn" disabled={result === 'Sending....'}>
            {result === 'Sending....' ? 'SENDING...' : 'SUBMIT NOW'}{' '}
            <img src={white_arrow} alt="Submit arrow" className="contact-icon" />
          </button>
        </form>

        <span
          className={`form-result ${
            result.includes('Thanks') ? 'success' : result.includes('Error') ? 'error' : ''
          }`}
        >
          {result}
        </span>
      </div>
    </div>
  );
};

export default Contact;