import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const titleText = "ServiceNow Developer (3+ Years Experience)";

  return (
    <section className="section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "48px", fontWeight: "bold" }}
      >
        Arun Lavudya
      </motion.h1>

      <h2 style={{ fontSize: "28px", color: "#00e5ff", marginTop: "10px", minHeight: "34px" }}>
        {titleText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ marginTop: "20px", fontSize: "18px", color: "#aaa", lineHeight: "1.6" }}
      >
        +91 88975 22375 | <a href="mailto:lavudyaarun1@gmail.com" style={{ color: "#00e5ff" }}>lavudyaarun1@gmail.com</a> | Hyderabad, India
        <br />
        <a href="https://linkedin.com/in/arun-lavudya-8a4388219/" target="_blank" rel="noopener noreferrer" style={{ color: "#00e5ff" }}>LinkedIn Profile</a>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}
      >
        <Link to="/projects">
          <button style={{ padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            View Projects
          </button>
        </Link>
        <Link to="/contact">
          <button style={{ padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
