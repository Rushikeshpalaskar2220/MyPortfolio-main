import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">

        {/* LEFT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>

          <p>
            Hello! I'm <span>Rushi Palaskar</span>, a passionate
            <strong> Full Stack Java Developer</strong> specializing in building
            scalable, secure, and high-performance backend systems.
          </p>
          <p className="about-intro">
            With expertise in Spring Boot, Microservices, and advanced Java technologies,
            I focus on creating robust solutions that solve real-world problems.
          </p>

          <p>Outside of coding, I'm passionate about:</p>

          <ul className="about-hobbies">
            <li>🏍️ Riding Bikes & Exploring New Roads</li>
            <li>✈️ Traveling & Discovering New Places</li>
            <li>💰 Fintech Technology & Innovation</li>
            <li>💻 Learning Advanced Backend Architectures</li>
          </ul>

          <p>
            I'm always eager to dive deep into new technologies, optimize systems,
            and build products that make a real impact in the fintech space.
          </p>
          <p className="quote">
            "Code with purpose, solve with passion!"
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="about-right-wrapper">

          {/* WHAT I DO – STATIC */}
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>What I Do</h3>
            <ul>
              <li>⚡ Build Scalable Spring Boot Applications</li>
              <li>⚡ Design RESTful APIs & Microservices</li>
              <li>⚡ Implement Spring Security & Authentication</li>
              <li>⚡ Work with SQL Databases & Optimization</li>
              <li>⚡ Deploy & Monitor Backend Systems</li>
            </ul>
          </motion.div>

          {/* FLOATING CARD – FOCUS & GOAL */}
          <motion.div
            className="floating-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h3>🎯 Focus</h3>
            <p>Clean Code, Performance & Security</p>

            <h3>🚀 Goal</h3>
            <p>Master Fintech Backend Architecture</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
