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
      transition={{ duration: 1 }}
      id="home" 
      className={`pt-32 pb-20 ${darkMode ? 'bg-deepBlack' : 'bg-white'}`}
    >
      <motion.div className="container mx-auto px-4 text-center">
        <h1 className={`text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'} name-underline inline-block font-['Inter']`}>
          Zhangshu Joshua Jiang
        </h1>
        <p className={`text-4xl mb-12 ${darkMode ? 'text-white' : 'text-black'} font-light font-['Inter']`}>
          Doctor & Data Scientist
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:zhangshu.j.jiang@gmail.com" 
            className={`${darkMode ? 'text-chartreuse' : 'text-deepBlue'} hover:opacity-80 transition-opacity duration-300`}
          >
            <Mail size={32} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/zhangshu-jiang/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-chartreuse' : 'text-deepBlue'} hover:opacity-80 transition-opacity duration-300`}
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-chartreuse' : 'text-deepBlue'} hover:opacity-80 transition-opacity duration-300`}
          >
            <Github size={32} />
          </motion.a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className={`${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} py-3 px-6 rounded-md hover:opacity-90 transition-colors duration-300 flex items-center mx-auto text-lg font-medium`}
        >
          <Download size={24} className="mr-2" />
          Download CV
        </motion.button>
      </motion.div>
    </motion.section>
  );
}