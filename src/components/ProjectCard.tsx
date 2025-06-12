import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  index,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card overflow-hidden flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        
      </div>
    </motion.div>
  );
};

export default ProjectCard;