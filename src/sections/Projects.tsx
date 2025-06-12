import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "Multi-Vendor E-commerce Solution",
    description:
      "A powerful multi-vendor platform that includes product listings, cart, secure payment gateways, and order tracking for both buyers and sellers.",
    imageUrl:
      "https://s3u.tmimgcdn.com/800x0/u2180526/c5b4e4d3585fe173317ed1fe1f1f38ed.png",
    tags: ["HTML", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Minimal & Clean Online Shop",
    description:
      "A modern e-commerce front-end with a clean layout, interactive UI components, and fully responsive design built using Bootstrap.",
    imageUrl:
      "https://themes.getbootstrap.com/wp-content/uploads/2021/12/preview-screenshot-2.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Product Showcase Landing Page",
    description:
      "Landing page focused on highlighting product collections with vibrant visuals, smooth animations, and optimized call-to-actions.",
    imageUrl:
      "https://codyhouse.co/web/assets/img/templates/bundle-thumb.jpg",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Admin Dashboard Interface",
    description:
      "Fully responsive admin dashboard template with interactive charts, sidebar navigation, and neatly organized content panels.",
    imageUrl:
      "https://www.tooplate.com/thumbnails/tooplate-2125-artxibition.jpg",
    tags: ["Bootstrap", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Developer Portfolio Website",
    description:
      "A personal portfolio website showcasing web development projects, technical skills, and contact information. Built with React for smooth navigation.",
    imageUrl:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/selling-free-template-353x278.jpg",
    tags: ["JavaScript", "ReactJS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section bg-white dark:bg-secondary-900">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Check out some of my recent work"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
