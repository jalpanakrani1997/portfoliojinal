import React from "react";
import {
  Code,
  Layout,
  Database,
  Terminal,
  Gauge,
  Server,
  Smartphone,
  Figma,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

const skillsData = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "React.js",
    description:
      "Building fast and dynamic frontends using React.js, hooks, context API, and modern JavaScript.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Node.js & Express",
    description:
      "Creating scalable and efficient backend services and RESTful APIs with Node.js and Express.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "MongoDB",
    description:
      "Designing flexible NoSQL databases using MongoDB and Mongoose ODM for seamless data handling.",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "REST API & Authentication",
    description:
      "Securing applications with JWT authentication and integrating clean REST APIs.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Performance & Optimization",
    description:
      "Optimizing frontend and backend performance for faster load times and better UX.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive UI with Bootstrap",
    description:
      "Building modern, responsive UI using Bootstrap for all screen sizes.",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Full Stack Integration",
    description:
      "End-to-end integration of frontend, backend, and database to deliver full stack web apps.",
  },
  {
    icon: <Figma className="w-6 h-6" />,
    title: "Deployment & Version Control",
    description:
      "Using GitHub for code versioning and deploying full stack apps on Vercel, Render, or Railway.",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="section bg-secondary-50 dark:bg-secondary-800"
    >
      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="These are the services I offer and the skills I have"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
