import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

const skillGroups = [
  {
    heading: 'LLM Post-training',
    items: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Unsloth', 'QLoRA / PEFT', 'Supervised fine-tuning', 'Instruction tuning', 'vLLM', 'LangChain']
  },
  {
    heading: 'Evaluation & Quality',
    items: ['Benchmark design', 'Rubric construction', 'Factuality & citation assessment', 'Hallucination evaluation', 'Adversarial testing', 'Failure-mode analysis']
  },
  {
    heading: 'Search & Retrieval',
    items: ['Retrieval-augmented generation', 'Natural-language-to-SQL', 'Advanced SQL', 'ETL pipelines', 'Knowledge graphs', 'Neo4j']
  },
  {
    heading: 'Infrastructure',
    items: ['Docker', 'FastAPI', 'REST APIs', 'GitHub Actions', 'Azure', 'AWS', 'GCP']
  }
];

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Code2 className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <motion.div
              key={`skill-group-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`}>
                {group.heading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={`skill-${index}-${i}`}
                    className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
