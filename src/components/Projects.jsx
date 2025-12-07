import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="container">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="tech-list">
              {p.tech.map((t, j) => (
                <span key={j} className="tech">{t}</span>
              ))}
            </div>

            <a className="project-btn" href={p.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
