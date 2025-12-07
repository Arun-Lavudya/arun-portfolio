import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Expertise",
      skills: ["ServiceNow Development", "JavaScript (ES6+)", "Business Rules", "Script Includes", "Flow Designer", "Integrations (REST/SOAP)", "Service Catalog", "CMDB", "ACLs & Security", "Git/GitHub"]
    },
    {
      title: "Technical Skills",
      skills: ["JavaScript", "JSON", "XML", "SQL", "HTML & CSS", "AngularJS", "React", "Postman"]
    },
    {
      title: "Certifications",
      skills: ["ServiceNow Flow Designer", "Virtual Agent", "Performance Analytics", "Welcome to ServiceNow"]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>

        {/* Sticky Sub-Navbar */}
        <div className="skills-nav">
          {skillCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(`skill-cat-${index}`)}
              className="skill-nav-btn"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} id={`skill-cat-${catIndex}`} style={{ marginBottom: "60px", scrollMarginTop: "150px" }}>
            <h3 style={{ marginBottom: "20px", color: "#00d2ff" }}>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
