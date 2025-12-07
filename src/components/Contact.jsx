import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container">
      <h2 className="section-title">Contact Me</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <p>Email: <a href="mailto:lavudyaarun1@gmail.com">lavudyaarun1@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/arun-lavudya-8a4388219" target="_blank" rel="noopener noreferrer">Profile</a></p>
        <p>Phone: 8897522375</p>

        <form className="contact-form">
          <input placeholder="Your Name" required />
          <input placeholder="Your Email" required />
          <textarea rows="4" placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}
