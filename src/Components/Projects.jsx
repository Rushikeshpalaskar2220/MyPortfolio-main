import { motion } from "framer-motion";
import "../styles/Projects.css";

import aiExpense from "../images/ai-expense.png"
import task from "../images/task.png"
import portfolio from "../images/portfolio.png"
import textutils from "../images/textutils.png"




const projectsData = [
  {
    name: "AI Expense Tracker",
    description:
     "The AI Expense Tracker is a full-stack web application that helps users manage and analyze their daily expenses efficiently. It allows users to securely register and log in, add, update, and delete their income and expense records, and view real-time financial summaries through an interactive dashboard. The system uses AI-based categorization to automatically classify transactions and provide smart spending insights.",
    image: aiExpense,
    github: "https://github.com/Akanksha0217/AI_Expense_Tracker",
    tech: ["React", "Node.js","Express", "MongoDB", "Boostrap"],
  },
  {
    name: "Personal Task Management",
    description:
      "The Personal Task Management System is a full-stack web application designed to help users organize and track their daily tasks efficiently. It allows users to create, update, delete, and mark tasks as completed with proper deadline management and priority levels. The application includes secure user authentication and a responsive dashboard to monitor pending and completed tasks.",
    image: task,
    github:"https://github.com/Akanksha0217/Personal_Task_management_system_client",
    tech: ["Node.js","React", "Express", "MongoDB","JWT"],
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website developed to showcase my projects, technical skills, resume, and contact information in a structured and visually appealing way. It includes smooth navigation, responsive design, project sections, GitHub integration, and a contact form.",
    image: portfolio,
    github: "https://github.com/Akanksha0217/textutil-react",
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    name: "TextUtils Application",
    description:
      "TextUtils is a React-based web application that provides multiple text processing features such as converting text to uppercase/lowercase, removing extra spaces, copying text, clearing text, and real-time word and character count analysis.This project helped me strengthen my understanding of React components, props, state management, event handling, and conditional rendering.",
    image: textutils,
    github: "https://github.com/Akanksha0217/textutil-react",
    tech: ["React", "Bootstrap"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Image */}
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>

            {/* Right Content */}
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
