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
          <div className="space-y-8">
            {/* King's College London PhD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                <span className={`${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} px-4 py-2 rounded`}>
                  King's College London
                </span>
              </h3>
              <p className="text-xl mb-2">MPhil/PhD in Health Data Science and Medical AI</p>
              <p className="text-lg mb-6 opacity-75">2025 – 2029 (expected) | EPSRC DRIVE-Health CDT</p>
              <ul className="list-disc list-inside space-y-4">
                <li className="text-base">Focus: LLM evaluation, post-training, long-horizon benchmarks, counterfactual reasoning, and retrieval-augmented systems.</li>
                <li className="text-base">Building long-horizon benchmarks for temporal and counterfactual reasoning over longitudinal EHRs.</li>
                <li className="text-base">QLoRA/PEFT fine-tuning of Qwen-family models with Unsloth; rubric-based evaluation of factuality, grounding, and adversarial robustness.</li>
              </ul>
            </motion.div>

            {/* University of Sheffield */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                <span className={`${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} px-4 py-2 rounded`}>
                  University of Sheffield
                </span>
              </h3>
              <p className="text-xl mb-2">MBChB – Medicine</p>
              <p className="text-lg mb-6 opacity-75">2018 – 2023</p>
              <ul className="list-disc list-inside space-y-4">
                <li className="text-base">GMC full registration with licence to practise.</li>
                <li className="text-base">Mentored aspiring healthcare professionals as part of the BAME Medics program.</li>
                <li className="text-base">Conducted research on AI-assisted medical imaging analysis and delivered peer lectures on clinical topics.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}