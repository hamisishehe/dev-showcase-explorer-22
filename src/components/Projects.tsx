
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    delay: "0.1s",
  },
  {
    title: "Task Management App",
    description: "A kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    delay: "0.2s",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application featuring current conditions, forecasts, and location search with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
    tags: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    delay: "0.3s",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in-up">Some Things I've Built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-navy-light border border-slate-dark project-card" style={{ animationDelay: project.delay }}>
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-navy px-2 py-1 rounded text-green">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
