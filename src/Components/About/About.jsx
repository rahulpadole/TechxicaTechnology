import React from "react";
import "./About.css";
import about_img from "../../assets/pic1.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about-container">
      <div className="welcome-section">
        <h1 className="welcome-heading">
          <span className="gradient-text-primary">WELCOME TO</span>
          <span className="gradient-text-secondary">TECHXICA TECHNOLOGY</span>
        </h1>
        <div className="welcome-underline"></div>
      </div>

      <div className="about-content">
        <div className="video-column">
          <div className="video-wrapper" onClick={() => setPlayState(true)}>
            <img src={about_img} alt="Techxica Technology" className="video-thumbnail" />
            <div className="play-overlay">
              <img src={play_icon} alt="Play" className="play-icon" />
              <div className="play-pulse"></div>
            </div>
          </div>
          <div className="video-caption">
            <p className="caption-line gradient-text-accent">WATCH OUR INNOVATION JOURNEY</p>
            <p className="caption-line gradient-text-highlight">SEE HOW WE TRANSFORM TECH</p>
          </div>
        </div>

        <div className="text-column">
          <h2 className="about-title">
            <span className="gradient-text-accent">WE DON'T JUST WRITE CODE –</span>
            <span className="gradient-text-highlight">WE CRAFT SOLUTIONS.</span>
          </h2>
          <div className="paragraph-group">
            <p className="about-paragraph">
              At Techxica Technology, we engineer the future of digital transformation through relentless innovation. As a premier IT and development powerhouse, we craft scalable software solutions, AI-driven platforms, and enterprise-grade systems that redefine what’s possible. From razor-sharp code to cloud-native architectures, we empower businesses to disrupt, build, and dominate their industries—because the future doesn’t just need technology; it needs our code.
            </p>
            <p className="about-paragraph">
              At Techxica Technology, we bridge the gap between education and industry by engineering hands-on tech mastery. Our mission: to forge the next generation of innovators through cutting-edge robotics labs, immersive workshops, and real-world development projects. We don’t just teach code, we build future ready problem solvers who will disrupt industries with tomorrow’s tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;