import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: "#00e5ff", fontSize: "32px" }}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: "20px", lineHeight: "1.6", color: "#ccc" }}
        >
          ServiceNow Developer with 3+ years of hands-on experience designing, developing, and optimizing enterprise ITSM solutions. Strong expertise in JavaScript (ES5/ES6), advanced client/server scripting, Script Includes, Business Rules, Flow Designer automations, and large-scale integrations with Azure, Jira, Power Automate, Tipalti and Halo.
          <br /><br />
          Proven success improving operational efficiency (35%+), automating workflows, enhancing CMDB accuracy, and delivering scalable, high-quality platform solutions aligned with CSDM and ITIL best practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ color: "#00e5ff", fontSize: "24px", marginTop: "40px" }}>Professional Experience</h3>
          <div style={{ marginTop: "20px", color: "#ccc" }}>
            <h4 style={{ color: "#fff", fontSize: "18px" }}>Software Engineer — DAZN Software Pvt Ltd</h4>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "10px" }}>Hyderabad | Oct 2022 – Present</p>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
              <li>Developed advanced JavaScript-based Business Rules, Script Includes, UI Actions, and Client Scripts to automate ITSM workflows.</li>
              <li>Built scalable Scripted REST APIs and SOAP integrations with Azure, Jira, and Halo using retry logic and async processors.</li>
              <li>Designed custom tables, extended CMDB classes, and created CI validations improving CMDB accuracy to 99%.</li>
              <li>Automated routing, approvals, and notifications using Flow Designer + Scripted Actions in ES5/ES6.</li>
              <li>Improved performance by refactoring heavy synchronous scripts into async patterns.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 style={{ color: "#00e5ff", fontSize: "24px", marginTop: "40px" }}>Education</h3>
          <div style={{ marginTop: "20px", color: "#ccc" }}>
            <h4 style={{ color: "#fff", fontSize: "18px" }}>Bachelor of Technology</h4>
            <p>CVR College of Engineering | 2018 – 2022</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
