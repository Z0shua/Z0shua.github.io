import { User } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <User className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          About Me
        </h2>
        <div className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-colors duration-300 backdrop-blur-md bg-opacity-80`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241031_002938-vAdn2XugCOVKagJ06cB971bYxqfDVI.png" 
                alt="Joshua Jiang" 
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-2/3"
            >
              <p className="text-lg mb-6 leading-relaxed">
                Hi, I'm Josh, a doctor and data scientist dedicated to innovating efficient patient care through machine learning and health-tech. By day (and often by nights), I'm a doctor working in the NHS, and outside of clinical hours, I focus on transforming complex healthcare data into actionable insights.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not in the hospital or coding, you can find me exploring the latest developments in health-tech, contributing to open-source medical projects, or sharing my knowledge through medical data science workshops and presentations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}