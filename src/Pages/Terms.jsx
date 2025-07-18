import React, { useEffect } from 'react';
import './Terms.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="terms-cyber-container">
      <div className="terms-cyber-content">
        <h1 className="terms-cyber-title">Terms of Service</h1>

        <section className="terms-section">
          <h2 className="terms-section-title">1. Acceptance of Terms</h2>
          <div className="terms-section-content">
            <p>By accessing or using the Techxica website, services, or related platforms, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">2. Use of Services</h2>
          <div className="terms-section-content">
            <p>You agree to use our website and services solely for lawful purposes and in a manner that does not infringe the rights or restrict the use of the platform by others.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">3. Intellectual Property</h2>
          <div className="terms-section-content">
            <p>All content on this website — including but not limited to text, graphics, code, logos, and visuals — is the property of Techxica and protected by intellectual property laws. You may not reproduce, distribute, or reuse any materials without written consent.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">4. User Accounts</h2>
          <div className="terms-section-content">
            <p>If you create an account with us, you are responsible for maintaining its security and for all activities under your account. We reserve the right to suspend or terminate accounts found to be violating our terms.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">5. Third-Party Links</h2>
          <div className="terms-section-content">
            <p>Our services may contain links to third-party websites. Techxica does not control or endorse these sites and is not responsible for their content or practices. Use them at your own risk.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">6. Service Modifications</h2>
          <div className="terms-section-content">
            <p>We reserve the right to modify or discontinue our services at any time without notice. We are not liable for any disruption or loss incurred as a result of such changes.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">7. Limitation of Liability</h2>
          <div className="terms-section-content">
            <p>To the fullest extent permitted by law, Techxica shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use our services.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">8. Indemnification</h2>
          <div className="terms-section-content">
            <p>You agree to indemnify and hold harmless Techxica and its affiliates from any claims, damages, losses, liabilities, or expenses resulting from your violation of these terms or misuse of the platform.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">9. Governing Law</h2>
          <div className="terms-section-content">
            <p>These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising will be subject to the jurisdiction of courts located in Nagpur, Maharashtra.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">10. Changes to Terms</h2>
          <div className="terms-section-content">
            <p>We may revise these Terms of Service at any time. By continuing to use our services, you accept the current version of the terms.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">11. Contact</h2>
          <div className="terms-section-content">
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              Email: <strong>legal@techxica.com</strong><br />
              Website: <strong>www.techxica.com</strong>
            </p>
          </div>
        </section>

        <p className="terms-cyber-update">
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

export default Terms;