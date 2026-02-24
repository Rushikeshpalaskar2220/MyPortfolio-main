import { motion } from "framer-motion";
import { FaBriefcase, FaTrophy, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Associate Software Engineer",
      company: "Tech Mahindra",
      type: "Full-time",
      duration: "Aug 2024 - Present",
      period: "1 yr 7 mos",
      location: "Pune, Maharashtra",
      award: "Innovator Of the Month Award",
      description: "Contributing to organizational growth through technology-driven solutions. Recognized for ability to adapt, learn continuously, and deliver innovative solutions.",
      responsibilities: [
        "Developing and maintaining enterprise-level Java applications using Spring Boot",
        "Building scalable microservices architecture for large-scale systems",
        "Implementing REST APIs with Spring Security and JWT authentication",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Optimizing application performance and ensuring code quality"
      ],
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Spring Security", "MySQL", "Postman", "Git", "Problem Solving"],
      color: "#3b82f6"
    },
    {
      id: 2,
      position: "Software Developer Intern",
      company: "RSL Solution Private Limited",
      type: "Hybrid",
      duration: "Dec 2023 - July 2024",
      period: "8 mos",
      location: "Pune, Maharashtra, India",
      description: "Handled frontend development using modern JavaScript frameworks, ensuring seamless and dynamic user experiences.",
      responsibilities: [
        "Developed responsive frontend interfaces using React.js and JavaScript",
        "Collaborated effectively on API development with backend teams",
        "Ensured seamless integration between frontend and backend systems",
        "Implemented dynamic user interfaces with optimal performance",
        "Worked in an agile environment with strong teamwork"
      ],
      skills: ["React.js", "JavaScript", "SQL", "API Development", "Frontend Development"],
      color: "#60a5fa"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container experience-container">
        
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building robust solutions and contributing to innovative projects
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ background: exp.color }}></div>

              {/* Experience Card */}
              <div className="experience-card">
                
                {/* Header Section */}
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)` }}>
                    <FaBriefcase />
                  </div>
                  <div className="exp-title-section">
                    <h3 className="exp-position">{exp.position}</h3>
                    <h4 className="exp-company">{exp.company} · {exp.type}</h4>
                  </div>
                </div>

                {/* Award Badge (if exists) */}
                {exp.award && (
                  <motion.div 
                    className="award-badge"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <FaTrophy className="trophy-icon" />
                    <span>{exp.award}</span>
                  </motion.div>
                )}

                {/* Meta Info */}
                <div className="exp-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.duration} · {exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="exp-description">{exp.description}</p>

                {/* Responsibilities */}
                <div className="exp-responsibilities">
                  <h5>Key Contributions:</h5>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="exp-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag" style={{ borderColor: exp.color }}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;