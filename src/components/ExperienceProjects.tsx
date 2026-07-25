import { Briefcase, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceProjectsProps {
  darkMode: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ExperienceProjects({ darkMode, activeTab, setActiveTab }: ExperienceProjectsProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="experience-projects" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Briefcase className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          Experience & Projects
        </h2>
        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('experience')}
            className={`mr-4 px-6 py-3 rounded-md ${activeTab === 'experience' ? `${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}` : ''} transition-all duration-300`}
          >
            <Briefcase className="inline-block mr-2" />
            Work Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-md ${activeTab === 'projects' ? `${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}` : ''} transition-all duration-300`}
          >
            <FolderOpen className="inline-block mr-2" />
            Projects
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-12">
                {[
                  {
                    title: 'PhD Researcher: LLM Evaluation and Applied Generative AI',
                    company: "King's College London, EPSRC DRIVE-Health CDT",
                    date: 'Oct 2025 – Present',
                    description: [
                      'Building long-horizon benchmarks for temporal and counterfactual reasoning over longitudinal EHRs — designed so plausible intermediate reasoning that leads to a wrong final answer is caught, not just outcomes.',
                      'Fine-tuning Qwen-family models using QLoRA/PEFT with Unsloth across five reasoning task categories, evaluating instruction-following, consistency, and robustness under targeted prompting.',
                      'Built an eight-domain evaluation suite covering factual grounding, citation support, and adversarial robustness across 200+ constructed queries; reduced unsupported outputs by ~30% vs a prompted baseline.',
                      'Built a retrieval-augmented generation pipeline over 500+ clinical documents, cutting unsupported recommendations by ~35%. Manuscript under review at Nature Communications.',
                      'Tools: PyTorch, Hugging Face Transformers, Unsloth, QLoRA/PEFT, LangChain.'
                    ]
                  },
                  {
                    title: 'Medical Fellow: Model Evaluation and Rubric Assessment (Part-time)',
                    company: 'Scale AI',
                    date: 'Jun 2026 – Present',
                    description: [
                      'Evaluate frontier-model outputs in medicine against expert-developed rubrics for factual accuracy, reasoning quality, and safety.',
                      'Contribute to rubric calibration and failure-mode analysis, focused on spotting answers that sound complete but leave out something that matters clinically.',
                      'Feed recurring error patterns back into the evaluation process to improve consistency over time.'
                    ]
                  },
                  {
                    title: 'Neuroscience Fellow and Digital Health AI Fellow (Part-time)',
                    company: 'Cleveland Clinic London',
                    date: 'Sep 2025 – Present',
                    description: [
                      'Lead development of AI-assisted decision tools, focusing on interpretability and failure-mode analysis in clinician-facing workflows.',
                      'Translate requirements from 15+ clinical domain experts into data models and evaluation dashboards.'
                    ]
                  },
                  {
                    title: 'Clinical AI Research Fellow and Lead ML Architect',
                    company: 'Lancashire and South Cumbria Secure Data Environment',
                    date: 'Nov 2024 – Oct 2025',
                    description: [
                      'Shipped OMCP, an open-source Model Context Protocol server for controlled natural-language access to structured databases, with audit logging, role-based access control, and privilege separation.',
                      'Built a natural-language-to-SQL pipeline with query rewriting, caching, and batching — sub-second responses across federated data sources spanning four organisations.',
                      'Packaged and documented the system for adoption across five research teams, cutting partner onboarding time by ~60%.',
                      'Processed 2M+ records using transformer-based NLP for entity extraction and normalisation.'
                    ]
                  },
                  {
                    title: 'Medical Doctor: ICU, Neurosurgery, Acute Medicine',
                    company: 'Lancashire Teaching Hospitals NHS Foundation Trust',
                    date: 'Aug 2023 – Aug 2025',
                    description: [
                      'Built and deployed a deterioration-detection alert system across four clinical teams. Cut false-positive rates by ~20% without missing more real events.',
                      'Worked with real-time multimodal ICU data, where ground truth is delayed and the wrong call has real consequences.'
                    ]
                  }
                ].map((job, index) => (
                  <motion.div 
                    key={`job-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
                  >
                    <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} inline-block px-4 py-2 rounded`}>
                      {job.title}
                    </h3>
                    <p className="text-xl mb-2">{job.company}</p>
                    <p className="text-lg mb-4 opacity-75">{job.date}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {job.description.map((item, i) => (
                        <li key={`job-${index}-desc-${i}`} className="text-base">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="projects"
            >
              {[
                {
                  title: "OMCP: Open-source LLM Systems Tool",
                  description: "Open-source Model Context Protocol server for auditable LLM access to structured databases via natural-language-to-SQL. Audit logging, role-based access control, and privilege separation. Adopted by five research teams; cut partner onboarding time by ~60%.",
                  tech: ["Python", "FastAPI", "MCP", "NL-to-SQL", "SQL", "Docker", "Open Source"],
                  link: "https://github.com/fastomcp/omcp_py"
                },
                {
                  title: "Dyad Labs (concept and design phase)",
                  description: "AI-native simulator for evaluating human–AI performance in clinical workflows, comparing clinician-only, model-only, and clinician-plus-model outcomes. Developed as a pitch for Perplexity's Billion Pound Build.",
                  tech: ["LLM Evaluation", "Clinical AI", "Simulation", "Human-AI"]
                },
                {
                  title: "62M-node Biomedical Knowledge Graph",
                  description: "Retrieval system over 12 biomedical ontologies. Optimised traversal cut query latency by 65%.",
                  tech: ["Neo4j", "Knowledge Graph", "Ontologies", "Retrieval"]
                },
                {
                  title: "Federated Analytics Platform",
                  description: "Privacy-preserving analytics across three NHS trusts and 500K+ patient records, cutting cross-trust query time by ~50%.",
                  tech: ["Federated Compute", "Privacy", "SQL", "NHS", "ETL"]
                },
                {
                  title: "Long-horizon Clinical LLM Benchmark",
                  description: "Constructing a clinician-anchored benchmark for temporal and counterfactual reasoning over longitudinal patient trajectories — testing whether models can reason about what would have happened under different interventions, not just predict the next observation.",
                  tech: ["LLM Evaluation", "Benchmarks", "EHR", "Counterfactuals"]
                },
                {
                  title: "RAG over UK NICE Clinical Guidelines",
                  description: "Retrieval-augmented generation pipeline over 500+ clinical documents, cutting unsupported recommendations by ~35% vs a prompted baseline. Manuscript under review at Nature Communications.",
                  tech: ["RAG", "LLMs", "Clinical Evidence", "Evaluation"]
                }
              ].map((project, index) => (
                <motion.div
                  key={`project-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80 border-2 border-transparent ${darkMode ? 'hover:border-chartreuse' : 'hover:border-deepBlue'}`}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'hover:text-chartreuse' : 'hover:text-deepBlue'} transition-colors`}>
                        {project.title}
                      </a>
                    ) : project.title}
                  </h3>
                  <p className="text-base mb-4 opacity-75">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={`project-${index}-tech-${i}`} className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
