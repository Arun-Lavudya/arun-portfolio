export default function Hero() {
    return (
      <section className="section">
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Hello, I'm <span style={{ color: "#00e5ff" }}>Arun Lavudya</span>
        </h1>
  
        <p style={{ marginTop: "20px", fontSize: "20px", color: "#aaa" }}>
          ServiceNow Developer | ITSM Specialist | Automation Engineer
        </p>
  
        <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
          <a href="#projects">
            <button style={{ padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button style={{ padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
              Contact Me
            </button>
          </a>
        </div>
      </section>
    );
  }
  