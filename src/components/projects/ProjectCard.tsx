import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  darkMode: boolean;
  index: number;
}

export default function ProjectCard({ title, description, tech, darkMode, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80 border-2 border-transparent ${darkMode ? 'hover:border-chartreuse' : 'hover:border-deepBlue'}`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-base mb-4 opacity-75">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((tech, i) => (
          <span key={`tech-${i}`} className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}`}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}