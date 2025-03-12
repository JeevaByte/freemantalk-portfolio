import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = ({ projects }) => {
  return (
    <>
      <Header />
      <section className="projects">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
              <a href={project.liveDemo} className="cta-button">Live Demo</a>
              <a href={project.githubLink} className="cta-button">GitHub Repo</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Commented out for testing
  // const res = await fetch('https://api.example.com/projects'); 
  const projects = [
    {
      title: "Cloud Automation with Terraform",
      description: "A project to automate cloud infrastructure provisioning using Terraform.",
      techStack: ["AWS", "Terraform", "Bash"],
      liveDemo: "https://example.com/demo",
      githubLink: "https://github.com/your-username/project1"
    },
    {
      title: "CI/CD Pipeline with Jenkins",
      description: "Setup of a CI/CD pipeline for a full-stack application.",
      techStack: ["Jenkins", "Docker", "AWS"],
      liveDemo: "https://example.com/demo",
      githubLink: "https://github.com/your-username/project2"
    },
  ];

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
