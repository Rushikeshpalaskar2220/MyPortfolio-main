import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.avif";
import ParticleBackground from "./backgrounds/ParticleBackground";
import "../styles/Hero.css";

const roles = [
  "Full Stack Java Developer",
  "Backend Developer",
  "Problem Solver",
  "Microservices Architect"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* ANIMATED PARTICLE BACKGROUND */}
      <ParticleBackground />

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Available Badge */}
          <div className="available-badge">
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="hero-name-modern">
            <span className="line">Engineer. Innovator.</span>
            <span className="line accent">Java Platform Builder.</span>
          </h1>

          <h3 className="hero-role-modern">
            I am a{" "}
            <motion.span
              className="role-highlight"
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </h3>

          <p className="hero-desc-modern">
            I'm a passionate <strong>Full Stack Java Developer</strong> specializing in building robust, 
            scalable backend systems with <strong>Spring Boot and Microservices</strong>. I love solving 
            complex problems and creating efficient solutions with clean architecture.
          </p>

          {/* Tech Stack Badges */}
          <div className="tech-badges-hero">
            <span className="tech-pill">Java</span>
            <span className="tech-pill">Spring Boot</span>
            <span className="tech-pill">Microservices</span>
            <span className="tech-pill">MySQL</span>
            <span className="tech-pill">Docker</span>
            <span className="tech-pill">React</span>
          </div>

          <a href="/resume.pdf" className="hero-btn-modern">
            DOWNLOAD CV
          </a>

          {/* Contact Info */}
          <div className="contact-info-hero">
            <div className="info-item-hero">
              <span className="info-label-hero">📍 LOCATION</span>
              <span className="info-value-hero">Pune, India</span>
            </div>
            <div className="info-item-hero">
              <span className="info-label-hero">🏢 COMPANY</span>
              <span className="info-value-hero">Tech Mahindra</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE + ACHIEVEMENTS */}
        <motion.div
          className="hero-right-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image */}
          <div className="hero-img-modern">
            <img src={profile} alt="Rushikesh Palaskar" />
          </div>

          {/* Stats Row */}
          <div className="stats-row-hero">
            <div className="stat-card-hero">
              <div className="stat-value-hero">2+</div>
              <div className="stat-label-hero">Years Exp</div>
            </div>
            <div className="stat-card-hero">
              <div className="stat-value-hero">BRAVO</div>
              <div className="stat-label-hero">Award</div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="achievement-card-hero">
            <div className="achievement-icon-hero">🏆</div>
            <div className="achievement-content-hero">
              <div className="achievement-title-hero">Innovator of the Month</div>
              <div className="achievement-desc-hero">Tech Mahindra Excellence Award</div>
            </div>
          </div>

          <div className="achievement-card-hero">
            <div className="achievement-icon-hero">📚</div>
            <div className="achievement-content-hero">
              <div className="achievement-title-hero">IEEE Research Published</div>
              <div className="achievement-desc-hero">Blockchain Crowdfunding Platform</div>
            </div>
          </div>

          <div className="achievement-card-hero">
            <div className="achievement-icon-hero">🎓</div>
            <div className="achievement-content-hero">
              <div className="achievement-title-hero">Azure AI Certified</div>
              <div className="achievement-desc-hero">Microsoft AI Fundamentals</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;