import projects from "../data/projects";
import ProjectCard from "../components/projectcard";
import "./Projects.css";

function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      {/* FEATURED PROJECT */}
      {featuredProject && (
        <div className="featured-wrapper">
          <ProjectCard project={featuredProject} />
        </div>
      )}

      {/* OTHER PROJECTS */}
      <div className="projects-grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
