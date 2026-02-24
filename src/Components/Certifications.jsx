import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaTrophy, FaMedal, FaExternalLinkAlt, FaFilePdf, FaCheckCircle } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import "../styles/Certifications.css";

const Certifications = () => {
  // Certifications and Awards
  const certifications = [
    {
      id: 1,
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      icon: <FaCertificate />,
      type: "certificate", // certificate or award
      image: "/certificates/azure-ai-cert.jpeg",
      verifyLink: "https://learn.microsoft.com/en-us/users/rushikeshpalaskar-5999/credentials/b2de69719a510d2f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      credentialId: "B2DE69719A510D2F"
    },
    {
      id: 2,
      title: "Innovator of the Month",
      issuer: "Tech Mahindra",
      date: "2024",
      icon: <FaTrophy />,  // Trophy icon for awards
      type: "award", // This is an award, not a certificate
      image: "/certificates/Innovator_Award.jpeg"
      // No verifyLink or credentialId for awards
    },
    // Add more certifications or awards...
  ];

  // Research Papers published
  const researchPapers = [
    {
      id: 1,
      title: "Fund-Crypt: Blockchain based Crowdfunding Platform using SHA-256 & POS Algo",
      authors: "Rushikesh Palaskar",
      journal: "IEEE Conference/International Conference on Edge Computing and Applications (ICECAA)",
      year: "2024",
      icon: <SiIeee />,
      type: "IEEE",
      abstract: "This study explores the potential of utilizing blockchain technology in crowdfunding. Crowdfunding has gained significant popularity as a means of project funding, enabling individuals and businesses to raise capital through online platforms from a diverse pool of investors and donors. However, traditional crowdfunding platforms face various challenges, including high fees, lack of transparency, and vulnerability to fraud. This research paper aims to investigate how blockchain technology can address these challenges and enhance the crowdfunding experience by leveraging decentralized networks and smart contracts. Blockchain-based crowdfunding platforms offer a decentralized and transparent ledger, providing unique features that can revolutionize the crowdfunding process. The findings of this survey are valuable for entrepreneurs, investors, and developers seeking to create and utilize such platforms in a repeatable manner....",
      doi: "10.1109/ICECAA.2024.10212407",
      pdfLink: "https://ieeexplore.ieee.org/document/10212407",
      image: "/certificates/Ieee.jpg" // Optional
    },
    // Add more papers...
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="container certifications-container">
        
        {/* CERTIFICATIONS & AWARDS SECTION */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and awards that showcase my expertise and recognition
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`certification-card ${cert.type}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Icon Badge - Different styling for awards */}
              <div className={`cert-icon-badge ${cert.type}`}>
                {cert.icon}
              </div>
              
              {/* Certificate/Award Image */}
              <div className="cert-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="cert-image"
                />
                {/* Different overlay for certificates vs awards */}
                {cert.type === 'certificate' ? (
                  <div className="cert-overlay">
                    <FaCheckCircle className="verified-icon" />
                    <span>Verified</span>
                  </div>
                ) : (
                  <div className="cert-overlay award-overlay">
                    <FaTrophy className="award-icon" />
                    <span>Achievement</span>
                  </div>
                )}
              </div>

              {/* Certificate/Award Details */}
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.date && <p className="cert-date">{cert.date}</p>}
                
                {/* Show credential ID only for certificates */}
                {cert.credentialId && cert.type === 'certificate' && (
                  <p className="cert-credential">
                    <strong>ID:</strong> {cert.credentialId}
                  </p>
                )}

                {/* Show Verify button only for certificates */}
                {cert.verifyLink && cert.type === 'certificate' && (
                  <a 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="verify-btn"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Verify Certificate
                  </a>
                )}

                {/* For awards, show achievement badge */}
                {cert.type === 'award' && (
                  <div className="award-badge-text">
                    <FaTrophy className="award-badge-icon" />
                    <span>Recognition Award</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESEARCH PAPERS SECTION */}
        {researchPapers.length > 0 && (
          <>
            <motion.div
              className="section-header research-header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Research Publications</h2>
              <p className="section-subtitle">
                Published research papers in IEEE and Scopus indexed journals
              </p>
            </motion.div>

            <div className="research-papers-grid">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  className="research-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Paper Type Badge */}
                  <div className={`paper-type-badge ${paper.type.toLowerCase()}`}>
                    {paper.icon}
                    <span>{paper.type}</span>
                  </div>

                  <div className="research-content">
                    {/* Paper Preview Image (Optional) */}
                    {paper.image && (
                      <div className="paper-preview">
                        <img src={paper.image} alt={paper.title} />
                      </div>
                    )}

                    {/* Paper Details */}
                    <div className="paper-details">
                      <h3 className="paper-title">{paper.title}</h3>
                      <p className="paper-authors">
                        <strong>Author{paper.authors.includes(',') ? 's' : ''}:</strong> {paper.authors}
                      </p>
                      <p className="paper-journal">
                        <strong>{paper.journal}</strong> • {paper.year}
                      </p>
                      
                      <p className="paper-abstract">{paper.abstract}</p>
                      
                      <div className="paper-meta">
                        <span className="paper-doi">
                          <strong>DOI:</strong> {paper.doi}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="paper-actions">
                        <a 
                          href={paper.pdfLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="paper-btn primary"
                        >
                          <FaFilePdf className="btn-icon" />
                          Read Paper
                        </a>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(paper.doi);
                            alert('DOI copied to clipboard!');
                          }}
                          className="paper-btn secondary"
                        >
                          Copy DOI
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Certifications;