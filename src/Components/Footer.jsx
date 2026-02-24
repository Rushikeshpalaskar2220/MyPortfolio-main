import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Rushi Palaskar. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    padding: "30px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
  },
  name: {
    marginBottom: "15px",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
    fontSize: "20px",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
  },
  copy: {
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;
