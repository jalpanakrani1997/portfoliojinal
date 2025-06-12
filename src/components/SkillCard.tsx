import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card p-6 hover:bg-primary-50 dark:hover:bg-secondary-700/50"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary-600 dark:text-secondary-400">{description}</p>
    </motion.div>
  );
};

export default SkillCard;