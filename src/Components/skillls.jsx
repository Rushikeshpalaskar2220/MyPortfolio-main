import { motion } from "framer-motion";
import "../styles/Skills.css";

const SkillBar = ({ name, level, color }) => (
  <div className="skill">
    <div className="skill-header">
      <span>{name}</span>
      <span>{level}%</span>
    </div>

    <div className="skill-bar">
      <motion.div
        className="skill-progress"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills & Technologies</h2>

      <div className="skills-grid">

        <div className="skills-card">
          <h3>Core Java</h3>
          <SkillBar name="Java 8+" level={90} color="#3b82f6" />
          <SkillBar name="Advanced Java" level={85} color="#3b82f6" />
          <SkillBar name="OOPs & Design Patterns" level={88} color="#3b82f6" />
          <SkillBar name="Collections Framework" level={92} color="#3b82f6" />
          <SkillBar name="Multithreading" level={80} color="#3b82f6" />
        </div>

        <div className="skills-card">
          <h3>Backend Framework</h3>
          <SkillBar name="Spring Framework" level={88} color="#22c55e" />
          <SkillBar name="Spring Boot" level={92} color="#22c55e" />
          <SkillBar name="Spring MVC" level={85} color="#22c55e" />
          <SkillBar name="Spring Data JPA" level={87} color="#22c55e" />
        </div>

        <div className="skills-card">
          <h3>Security & Architecture</h3>
          <SkillBar name="Spring Security" level={85} color="#8b5cf6" />
          <SkillBar name="Microservices" level={80} color="#8b5cf6" />
          <SkillBar name="REST APIs" level={90} color="#8b5cf6" />
          <SkillBar name="JWT & OAuth2" level={82} color="#8b5cf6" />
        </div>

        <div className="skills-card">
          <h3>Databases</h3>
          <SkillBar name="MySQL" level={88} color="#0ea5e9" />
          <SkillBar name="PostgreSQL" level={80} color="#0ea5e9" />
          <SkillBar name="SQL Optimization" level={82} color="#0ea5e9" />
          <SkillBar name="Hibernate/JPA" level={85} color="#0ea5e9" />
        </div>

        <div className="skills-card">
          <h3>Tools & DevOps</h3>
          <SkillBar name="Git & GitHub" level={90} color="#f97316" />
          <SkillBar name="Postman" level={92} color="#f97316" />
          <SkillBar name="Maven/Gradle" level={85} color="#f97316" />
          <SkillBar name="Docker (Basic)" level={70} color="#f97316" />
        </div>

        <div className="skills-card learning">
          <h3>Currently Learning 🚀</h3>
          <SkillBar name="Kafka" level={50} color="#facc15" />
          <SkillBar name="AWS/Cloud" level={55} color="#facc15" />
          <SkillBar name="Kubernetes" level={45} color="#facc15" />
        </div>

      </div>
    </section>
  );
};

export default Skills;
