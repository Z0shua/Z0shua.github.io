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
      className="py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center flex items-center justify-center">
          <User className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          About Me
        </h2>
        <div className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-300 backdrop-blur-md bg-opacity-80`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-48 md:w-1/3"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241031_002938-vAdn2XugCOVKagJ06cB971bYxqfDVI.png" 
                alt="Joshua Jiang" 
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-lg" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-2/3"
            >
              <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                I'm a doctor and AI researcher building trustworthy clinical AI that fits how clinicians think and work. My PhD research at King's College London's MAI Lab explores methods for temporal electronic health records, including patient-aware transformers, time-series imputation, RLHF and reward modelling, bias mitigation, healthcare NLP with OMOP CDM, and clinician-in-the-loop validation.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                This work aims to improve accuracy, explainability, and safety for clinical predictions and synthetic data generation. I split my time between Cleveland Clinic London and the DRIVE health BHI Data Lab.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}