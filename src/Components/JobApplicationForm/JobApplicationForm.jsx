// src/JobApplicationForm.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JobApplicationForm.css';
import msg_icon from '../../assets/msg-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { FaArrowUp } from 'react-icons/fa';

const JobApplicationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const jobTitle = location.state?.jobTitle || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState(""); // Track experience level

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Show scroll button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Available options
  const departments = [
    "Engineering",
    "Design",
    "Marketing",
    "Human Resources",
    "Business Development",
    "Operations",
    "Product Management",
    "Quality Assurance",
    "Data Science",
    "Customer Support"
  ];

  const locations = [
    "Remote (India)",
    "Hybrid (Aurangabad)",
    "On-site (Aurangabad)",
    "Hybrid (Mumbai)",
    "On-site (Mumbai)",
    "Hybrid (Pune)",
    "On-site (Pune)",
    "Other Location"
  ];

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Freelance",
    "Temporary",
    "Volunteer"
  ];

  const experienceLevels = [
    "Student/Fresh Graduate",
    "Entry Level (0-2 years)",
    "Mid Level (2-5 years)",
    "Senior Level (5-10 years)",
    "Executive (10+ years)"
  ];

  const educationLevels = [
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other"
  ];

  const noticePeriods = [
    "Immediately Available",
    "15 days",
    "1 month",
    "2 months",
    "3 months",
    "Currently Serving Notice"
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ed49543b-1c5e-4089-b3fe-d82e39c3c7b2");
    formData.append("subject", `Job Application: ${jobTitle}`);
    formData.append("from_name", "Career Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Application submitted successfully! We'll contact you soon.");
        event.target.reset();
        setExperienceLevel(""); // Reset experience level
        setTimeout(() => navigate('/careers'), 3000);
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExperienceChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  return (
    <div className='job-application-container'>
      {/* Scroll to top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      )}

      <div className='application-header'>
        <h3>
          <img src={msg_icon} alt="Application icon" className="contact-icon" />
          <span>APPLICATION FORM: {jobTitle.toUpperCase() || "SELECTED POSITION"}</span>
        </h3>
        <p className='application-note'>
          Please fill out all required fields (*) to submit your application.
        </p>
      </div>

      <form onSubmit={onSubmit} className='application-form'>
        <input type="hidden" name="job_title" value={jobTitle} />

        <div className="form-section">
          <h4>Position Details</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>Department*</label>
              <select name="department" required>
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Job Type*</label>
              <select name="job_type" required>
                <option value="">Select Job Type</option>
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Location*</label>
              <select name="location" required>
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Expected Joining Date</label>
              <input 
                type="date" 
                name="joining_date" 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Personal Information</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input 
                type="text" 
                name="first_name" 
                required 
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input 
                type="text" 
                name="last_name" 
                required 
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address*</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+91 1234567890"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Current Address*</label>
            <textarea 
              name="address" 
              required 
              rows="3" 
              placeholder="Enter your full address with postal code"
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth</label>
              <input 
                type="date" 
                name="dob" 
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender">
                <option value="">Prefer not to say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Education Background</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>Highest Education Level*</label>
              <select name="education_level" required>
                <option value="">Select Education Level</option>
                {educationLevels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Field of Study</label>
              <input 
                type="text" 
                name="field_of_study" 
                placeholder="e.g. Computer Science, Business Administration"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Institution Name*</label>
            <input 
              type="text" 
              name="institution" 
              required
              placeholder="Name of your university/college"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Year of Graduation</label>
              <input 
                type="number" 
                name="graduation_year" 
                min="1900" 
                max={new Date().getFullYear()}
                placeholder="YYYY"
              />
            </div>
            <div className="form-group">
              <label>Current GPA/Percentage</label>
              <input 
                type="text" 
                name="gpa" 
                placeholder="e.g. 3.8 or 85%"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Professional Background</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>Experience Level*</label>
              <select 
                name="experience_level" 
                required 
                onChange={handleExperienceChange}
                value={experienceLevel}
              >
                <option value="">Select Experience Level</option>
                {experienceLevels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
            {experienceLevel !== "Student/Fresh Graduate" && (
              <div className="form-group">
                <label>Years of Relevant Experience*</label>
                <input 
                  type="number" 
                  name="years_experience" 
                  required 
                  min="0"
                  max="50"
                  placeholder="Enter years of experience"
                />
              </div>
            )}
          </div>

          {experienceLevel !== "Student/Fresh Graduate" && (
            <div className="form-row">
              <div className="form-group">
                <label>Current/Most Recent Job Title*</label>
                <input 
                  type="text" 
                  name="current_position" 
                  required
                  placeholder="e.g. Software Developer"
                />
              </div>
              <div className="form-group">
                <label>Current/Most Recent Company*</label>
                <input 
                  type="text" 
                  name="current_company" 
                  required
                  placeholder="Company Name"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Key Skills* (comma separated)</label>
            <textarea 
              name="skills" 
              required 
              rows="3" 
              placeholder="JavaScript, React, Project Management, etc."
            ></textarea>
          </div>

          {experienceLevel !== "Student/Fresh Graduate" && (
            <div className="form-group">
              <label>Professional Certifications</label>
              <textarea 
                name="certifications" 
                rows="2" 
                placeholder="List any relevant certifications you hold"
              ></textarea>
            </div>
          )}
        </div>

        <div className="form-section">
          <h4>Employment Details</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>Current Employment Status*</label>
              <select name="employment_status" required>
                <option value="">Select Status</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>
            <div className="form-group">
              <label>Notice Period</label>
              <select name="notice_period">
                <option value="">Select Notice Period</option>
                {noticePeriods.map((period, index) => (
                  <option key={index} value={period}>{period}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Willing to Relocate?</label>
              <select name="relocation">
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe, depending on opportunity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Visa Sponsorship Needed?</label>
              <select name="visa_sponsorship">
                <option value="">Select Option</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Not now, but in future">Not now, but may need in future</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Additional Information</h4>
          
          <div className="form-group">
            <label>Why are you interested in this position at our company?*</label>
            <textarea 
              name="interest_reason" 
              required 
              rows="4" 
              placeholder="Tell us what excites you about this opportunity"
            ></textarea>
          </div>

          <div className="form-group">
            <label>What unique skills or perspectives would you bring to this role?*</label>
            <textarea 
              name="unique_skills" 
              required 
              rows="4" 
              placeholder="Describe what makes you stand out"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Professional References</label>
            <textarea 
              name="references" 
              rows="3" 
              placeholder="Name, Relationship, Contact Info (optional)"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Additional Comments</label>
            <textarea 
              name="comments" 
              rows="3" 
              placeholder="Anything else you'd like us to know"
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="privacy_policy" 
              name="privacy_policy" 
              required 
            />
            <label htmlFor="privacy_policy">
              I agree to the processing of my personal data according to the <a href="/job-application-privacy" target="_blank">Privacy Policy</a>
            </label>
          </div>

          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="future_opportunities" 
              name="future_opportunities" 
            />
            <label htmlFor="future_opportunities">
              I'd like to be considered for future opportunities that match my profile
            </label>
          </div>

          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="information_accurate" 
              name="information_accurate" 
              required 
            />
            <label htmlFor="information_accurate">
              I confirm that all information provided is accurate and complete*
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
          <img src={white_arrow} alt="Submit" />
        </button>

        {result && (
          <div className={`form-result ${result.includes("successfully") ? "success" : "error"}`}>
            {result}
          </div>
        )}
      </form>
    </div>
  );
};

export default JobApplicationForm;