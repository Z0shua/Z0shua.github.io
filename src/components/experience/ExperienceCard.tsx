import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  darkMode: boolean;
  index: number;
}

export default function ExperienceCard({ title, company, date, description, darkMode, index }: ExperienceCardProps) {
  return (
    <motion.div 
      key={`job-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
    >
      <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} inline-block px-4 py-2 rounded`}>
        {title}
      </h3>
      <p className="text-xl mb-2">{company}</p>
      <p className="text-lg mb-4 opacity-75">{date}</p>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, i) => (
          <li key={`job-${index}-desc-${i}`} className="text-base">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}