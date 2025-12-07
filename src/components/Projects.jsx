import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="tech-tags">
              {p.techStack.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              {/* Assuming link is always present or placeholder */}
              <a href={p.link} target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
