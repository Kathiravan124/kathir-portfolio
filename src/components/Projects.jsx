import React from "react";
// import "./Projects.css";

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="card shadow-sm border-0 project-card flex-fill">
        <div className="card-img-container">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="mb-3">
            {technologies.map((tech, index) => (
              <span key={index} className="badge bg-secondary me-1 mb-1">
                {tech}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2 mt-auto">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <i className="bi bi-eye me-1"></i> Live Demo
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <i className="bi bi-github me-1"></i> Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions and forecasts with interactive maps and location-based services.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Bootstrap, featuring smooth animations and dark mode toggle.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A community-driven recipe sharing platform with user ratings, comments, and advanced search functionality.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Cloud Storage"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">My Projects</h2>
          <div className="section-divider mx-auto"></div>
          <p className="lead">Here are some of my recent works</p>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
