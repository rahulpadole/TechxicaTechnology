import React from 'react';
import { Link } from 'react-router-dom';
import './JobApplicationPrivacy.css';

const JobApplicationPrivacy = () => {
  return (
    <div className="job-app-privacy-container">
      <div className="privacy-header">
        <h1>Job Application Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="privacy-content">
        <section>
          <h2>1. Data Collection for Job Applications</h2>
          <p>When you apply for a position with us, we collect:</p>
          <ul>
            <li>Personal identification information (name, email, phone)</li>
            <li>Professional information (work history, education, skills)</li>
            <li>Application materials (responses to our questions)</li>
            <li>Any additional information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2>2. Purpose of Processing</h2>
          <p>We use your application data exclusively for:</p>
          <ul>
            <li>Evaluating your candidacy for current openings</li>
            <li>Communicating with you about the application process</li>
            <li>Improving our recruitment processes</li>
            <li>Complying with legal employment requirements</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Retention</h2>
          <p>We retain application data:</p>
          <ul>
            <li>For active candidates: Throughout the recruitment process</li>
            <li>For unsuccessful applicants: Up to 12 months (unless you request deletion)</li>
            <li>For hired candidates: Becomes part of your employment record</li>
          </ul>
        </section>

        <section>
          <h2>4. Your Rights</h2>
          <p>As an applicant, you can:</p>
          <ul>
            <li>Request access to your application data</li>
            <li>Correct inaccurate information</li>
            <li>Withdraw your application and request deletion</li>
            <li>Request restriction of processing</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>We protect your application data with:</p>
          <ul>
            <li>Secure encrypted form submissions</li>
            <li>Limited access to HR personnel only</li>
            <li>Regular security audits of our systems</li>
          </ul>
        </section>

        <div className="contact-info">
          <h3>Contact Our Recruitment Team</h3>
          <p>For questions about your application data:</p>
          <address>
            Techxica Technology HR Department<br />
            Chh. Sambhajinagar, 431007<br />
            Email: info@techxicatechnology.com<br />
            Phone: +91 8149713034
          </address>
        </div>

        <div className="navigation-links">
          <Link to="/apply" className="back-link">
            ← Return to Application Form
          </Link>
          <Link to="/privacy" className="main-policy-link">
            View Our Main Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPrivacy;