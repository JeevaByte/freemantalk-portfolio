
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects, getAllTags, Project } from "@/data/projects";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const allTags = getAllTags();

  const handleFilterChange = (selectedTags: string[], searchTerm: string) => {
    let filtered = projects;
    
    // Filter by tags if any are selected
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }
    
    // Filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A showcase of my cloud engineering and DevOps projects. These represent my hands-on 
              experience with various technologies and infrastructure solutions.
            </p>
          </div>
          
          <ProjectFilter tags={allTags} onFilterChange={handleFilterChange} />
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects found matching your filters</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or clear filters</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
