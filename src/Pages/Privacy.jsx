import React, { useEffect } from 'react';
import './Privacy.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="privacy-cyber-container">
      <div className="privacy-cyber-content">
        <h1 className="privacy-cyber-title">Privacy Policy</h1>

        <p className="privacy-section-content">
          At Techxica, we are committed to respecting your privacy and protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you interact with our IT and Robotics services.
        </p>

        <section className="privacy-section">
          <h2 className="privacy-section-title">1. Introduction</h2>
          <div className="privacy-section-content">
            <p>This Privacy Policy applies to all products, services, and websites offered by Techxica. It outlines our data practices and your rights regarding your personal data.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">2. Information We Collect</h2>
          <div className="privacy-section-content">
            <ul className="privacy-cyber-list">
              <li><strong>Personal Identifiers:</strong> name, email address, phone number, company/institution name.</li>
              <li><strong>Technical Data:</strong> IP address, device type, browser, operating system, and interaction logs.</li>
              <li><strong>Usage Data:</strong> pages visited, time spent, links clicked, and referral sources.</li>
              <li><strong>Communication Data:</strong> messages, emails, forms, and chat interactions.</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">3. How We Use Your Information</h2>
          <div className="privacy-section-content">
            <ul className="privacy-cyber-list">
              <li>To provide and maintain our IT and robotics education services.</li>
              <li>To respond to customer inquiries and technical support requests.</li>
              <li>To personalize your experience on our site.</li>
              <li>To analyze and improve our offerings and user interface.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">4. Legal Basis for Processing</h2>
          <div className="privacy-section-content">
            <p>If you are located in the EEA or UK, our processing of your data is based on:</p>
            <ul className="privacy-cyber-list">
              <li>Your explicit consent.</li>
              <li>The performance of a contract with you.</li>
              <li>Compliance with legal obligations.</li>
              <li>Legitimate interests such as improving services or enhancing security.</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">5. Cookies and Analytics</h2>
          <div className="privacy-section-content">
            <p>We use cookies and analytics tools to:</p>
            <ul className="privacy-cyber-list">
              <li>Understand how users interact with our site.</li>
              <li>Maintain session continuity and preferences.</li>
              <li>Improve our platform's usability and performance.</li>
            </ul>
            <p>You can adjust your browser settings to refuse or delete cookies.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">6. Data Sharing and Third Parties</h2>
          <div className="privacy-section-content">
            <p>We may share your information with:</p>
            <ul className="privacy-cyber-list">
              <li>Cloud hosting services (e.g., AWS, Firebase).</li>
              <li>Analytics and marketing platforms (e.g., Google Analytics).</li>
              <li>Law enforcement or regulators when legally required.</li>
              <li>Buyers in case of a merger, acquisition, or asset sale.</li>
            </ul>
            <p>All third-party services are bound by confidentiality agreements and privacy standards.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">7. Data Retention</h2>
          <div className="privacy-section-content">
            <p>We retain your personal information only as long as necessary to fulfill the purposes described in this policy, unless required by law to retain it longer.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">8. Data Security</h2>
          <div className="privacy-section-content">
            <p>We implement industry-grade technical and organizational security measures including:</p>
            <ul className="privacy-cyber-list">
              <li>HTTPS and SSL encryption</li>
              <li>Firewall and intrusion detection systems</li>
              <li>Role-based access control</li>
              <li>Regular data audits and backups</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">9. Your Rights</h2>
          <div className="privacy-section-content">
            <p>You may have the following rights depending on your jurisdiction:</p>
            <ul className="privacy-cyber-list">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Object to or restrict processing in certain cases</li>
            </ul>
            <p>To exercise your rights, email us at <strong>privacy@techxica.com</strong>.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">10. International Transfers</h2>
          <div className="privacy-section-content">
            <p>Your information may be transferred to and maintained on servers located outside your country. We ensure adequate safeguards such as standard contractual clauses when transferring data internationally.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">11. Children's Privacy</h2>
          <div className="privacy-section-content">
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect data from children without verifiable parental consent.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">12. Changes to This Policy</h2>
          <div className="privacy-section-content">
            <p>We may update this Privacy Policy periodically. All changes will be posted on this page, and your continued use of our services constitutes acceptance of those changes.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">13. Contact Us</h2>
          <div className="privacy-section-content">
            <p>If you have questions or concerns about our Privacy Policy or practices, please contact us:</p>
            <p>Email: <strong>privacy@techxica.com</strong><br />Website: <strong>www.techxica.com</strong></p>
          </div>
        </section>

        <p className="privacy-cyber-update">
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

export default Privacy;