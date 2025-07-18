import React, { useEffect } from 'react';
import './Cookies.css';

const Cookies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="cookies-cyber-container">
      <div className="cookies-cyber-content">
        <h1 className="cookies-cyber-title">Cookies Policy</h1>

        <section className="cookies-section">
          <h2 className="cookies-section-title">1. Introduction</h2>
          <div className="cookies-section-content">
            <p>This Cookies Policy explains how Techxica uses cookies and similar technologies when you visit our website. By using our services, you agree to the use of cookies as outlined below.</p>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">2. What Are Cookies?</h2>
          <div className="cookies-section-content">
            <p>Cookies are small text files that are placed on your device by a website. They help enhance user experience by remembering preferences, analyzing usage, and ensuring functionality.</p>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">3. Types of Cookies We Use</h2>
          <div className="cookies-section-content">
            <ul className="cookies-cyber-list">
              <li><strong>Essential Cookies:</strong> Required for core functionality such as navigation and session management.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site (e.g., Google Analytics).</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings (language, region, etc.).</li>
              <li><strong>Marketing Cookies:</strong> Used for delivering relevant ads or tracking user engagement across sites (if used).</li>
            </ul>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">4. How We Use Cookies</h2>
          <div className="cookies-section-content">
            <ul className="cookies-cyber-list">
              <li>To maintain secure sessions and logins.</li>
              <li>To analyze traffic patterns and improve performance.</li>
              <li>To remember your display and accessibility preferences.</li>
              <li>To serve localized or personalized content when applicable.</li>
            </ul>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">5. Managing Cookies</h2>
          <div className="cookies-section-content">
            <p>You can manage or disable cookies in your browser settings. Most browsers allow you to:</p>
            <ul className="cookies-cyber-list">
              <li>Delete existing cookies.</li>
              <li>Block all cookies or third-party cookies.</li>
              <li>Receive notifications before cookies are set.</li>
            </ul>
            <p>Note: Disabling cookies may affect certain features and performance of the website.</p>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">6. Third-Party Cookies</h2>
          <div className="cookies-section-content">
            <p>We may use third-party services (e.g., analytics or marketing providers) that also place cookies on your device. These providers are responsible for their own cookie and privacy policies.</p>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">7. Changes to This Policy</h2>
          <div className="cookies-section-content">
            <p>We may update this Cookies Policy to reflect changes in technology or legal requirements. Any updates will be posted on this page with a revised date.</p>
          </div>
        </section>

        <section className="cookies-section">
          <h2 className="cookies-section-title">8. Contact Us</h2>
          <div className="cookies-section-content">
            <p>If you have any questions or concerns about our use of cookies, please contact us at:</p>
            <p>
              Email: <strong>privacy@techxica.com</strong><br />
              Website: <strong>www.techxica.com</strong>
            </p>
          </div>
        </section>

        <p className="cookies-cyber-update">
          Last Updated: {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  );
};

export default Cookies;