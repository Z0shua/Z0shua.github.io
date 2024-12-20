import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface BannerProps {
  darkMode: boolean;
  handleDownloadCV: () => void;
}

export default function Banner({ darkMode, handleDownloadCV }: BannerProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home" 
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className={`${darkMode ? 'text-chartreuse' : 'text-deepBlue'} name-underline`}>Joshua</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            A Doctor & Data Scientist passionate about healthcare innovation
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Z0shua/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? 'text-chartreuse hover:text-white' : 'text-deepBlue hover:text-gray-600'} transition-colors duration-300`}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/joshua-adeyemi-5a0b23251/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? 'text-chartreuse hover:text-white' : 'text-deepBlue hover:text-gray-600'} transition-colors duration-300`}
            >
              <Linkedin size={32} />
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className={`${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-colors duration-300`}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}