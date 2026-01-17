function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      <h3>{project.title}</h3>

      <p className="description">{project.description}</p>

      <ul className="highlights">
        {project.highlights.map((item, i) => (
          <li key={i}>✨ {item}</li>
        ))}
      </ul>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
