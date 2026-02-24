import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out for collaboration or opportunities.</p>

          <div className="social-icons">
            <a
              href="https://github.com/Rushikeshpalaskar2220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rushikesh-palaskar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:rushikeshpalaskar2220@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
