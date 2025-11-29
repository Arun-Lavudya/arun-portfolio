import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "ServiceNow",
    "Glide Scripting",
    "Flow Designer",
    "REST APIs",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-containe">   {/* ✅ ADD THIS */}
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div> {/* ✅ CONTAINER END */}
    </section>
  );
}
