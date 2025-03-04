
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "NEURAL_INTERFACE",
      description: "// A clean, modern portfolio website built with React and Tailwind CSS. Features smooth animations and responsive design.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "QUANTUM_DASHBOARD",
      description: "// An admin dashboard for e-commerce platforms with analytics, order management, and product inventory functionality.",
      technologies: ["React", "Chart.js", "Node.js", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ORBITAL_SCANNER",
      description: "// A beautiful weather application that shows current conditions and forecasts. Uses geolocation and weather APIs.",
      technologies: ["JavaScript", "APIs", "CSS", "HTML"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="mb-16 animate-fade-up">
        <span className="block text-sm text-primary font-medium font-mono mb-2">// PORTFOLIO</span>
        <h2 className="font-['Orbitron'] section-title">FEATURED_PROJECTS</h2>
        <p className="section-subtitle font-mono">
          // Here are some projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            isEven={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
