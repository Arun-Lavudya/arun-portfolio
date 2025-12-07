import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* Header Profile */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
            <span style={{ color: "#fff" }}>About </span>
            <span style={{ color: "#00d2ff" }}>Me</span>
          </h2>
          <div className="profile-card">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
              ServiceNow Developer with <strong>3+ years</strong> of hands-on experience designing, developing, and optimizing enterprise ITSM solutions.
              Strong expertise in <strong>JavaScript (ES5/ES6)</strong>, advanced client/server scripting, Flow Designer automations, and large-scale integrations with Azure, Jira, and Tipalti.
              <br /><br />
              Proven success improving operational efficiency <strong>(35%+)</strong>, enhancing CMDB accuracy, and delivering scalable platform solutions.
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="timeline-section">
          <h3 style={{ color: "#00d2ff", fontSize: "2rem", marginBottom: "40px", textAlign: "center" }}>Professional Journey</h3>

          {/* Role 1 */}
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="role-title">Software Engineer</h4>
              <span className="company-name">DAZN Software Pvt Ltd | Oct 2022 – Present</span>
              <ul className="role-list">
                <li>Developed advanced JavaScript-based Business Rules, Script Includes, and Client Scripts to automate ITSM workflows.</li>
                <li>Built scalable Scripted REST APIs and SOAP integrations with Azure, Jira, and Halo.</li>
                <li>Designed custom tables, extended CMDB classes, and created CI validations improving accuracy to 99%.</li>
                <li>Automated routing, approvals, and notifications using Flow Designer + Scripted Actions.</li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <h3 style={{ color: "#00d2ff", fontSize: "2rem", marginBottom: "40px", marginTop: "60px", textAlign: "center" }}>Education</h3>

          <motion.div
            className="timeline-item education-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="timeline-dot" style={{ borderColor: "#fff", background: "#3a7bd5" }}></div>
            <div className="timeline-content">
              <h4 className="role-title">Bachelor of Technology</h4>
              <span className="company-name">CVR College of Engineering | 2018 – 2022</span>
              <p style={{ color: "#ccc" }}>Graduated with specialized coursework in Computer Science and Engineering.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
