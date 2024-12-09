import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="education" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <GraduationCap className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              <span className={`${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} px-4 py-2 rounded`}>
                University of Sheffield
              </span>
            </h3>
            <p className="text-xl mb-2">MBChB – Medicine</p>
            <p className="text-lg mb-6 opacity-75">Graduation Date: Jul 2023</p>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-base">Mentored aspiring healthcare professionals as part of the BAME Medics program, fostering diversity and inclusion in medicine.</li>
              <li className="text-base">Conducted research on AI-assisted medical imaging analysis</li>
              <li className="text-base">Delivered peer lectures on clinical topics, supporting fellow students in their medical education.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}