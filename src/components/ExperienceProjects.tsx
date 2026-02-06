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
                    title: 'Neuroscience Fellow & Clinical Digital Health Fellow',
                    company: 'Cleveland Clinic London',
                    date: 'Sep 2025 – Present',
                    description: [
                      'Providing comprehensive neurological care across acute and chronic settings.',
                      'Collaborating with data science team on OMOP CDM implementation for clinical research infrastructure.',
                      'Translating clinical requirements into actionable data architecture specifications.'
                    ]
                  },
                  {
                    title: 'Clinician Researcher & PhD Candidate',
                    company: 'DRIVE-Health Centre for Doctoral Training, King\'s College London',
                    date: 'Oct 2025 – Present',
                    description: [
                      'Conducting EPSRC-funded research on ML approaches for clinical decision-making.',
                      'Focusing on reinforcement learning, explainable AI, and trustworthy AI in healthcare.',
                      'Designing data-driven methodologies for model behavior analysis.'
                    ]
                  },
                  {
                    title: 'Clinical Data Scientist & Data Research Engineer',
                    company: 'Lancashire and South Cumbria Secure Data Environment Programme',
                    date: 'Nov 2024 – Oct 2025',
                    description: [
                      'Architected scalable ETL pipelines for multimodal data ingestion and processing across federated NHS trusts.',
                      'Expanded OMOP CDM across multiple NHS organizations; automated ETL reducing data-to-insight time.',
                      'Integrated transformer-based NLP extracting clinical concepts from unstructured notes.',
                      'Built validation pipelines assessing quality, diversity, and relevance across NHS data.',
                      'Created low-code dashboards and natural-language-to-SQL interfaces for stakeholders.',
                      'Architected OMCP—Model Context Protocol server for secure LLM access to OMOP databases.'
                    ]
                  },
                  {
                    title: 'Medical Doctor',
                    company: 'Lancashire Teaching Hospitals NHS Foundation Trust',
                    date: 'Aug 2023 – Aug 2025',
                    description: [
                      'ICU, Community Primary Care, Psychiatry, Otolaryngology, Gastroenterology, Upper GI Surgery.',
                      'Managed complex clinical cases and implemented cloud-based documentation workflows improving efficiency.'
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
                  title: "CareTrack: Seamless Care Transitions",
                  description: "Developed a digital platform to streamline patient data sharing between care homes and hospitals, reducing hospital readmissions by 20%.",
                  tech: ["React", "TypeScript", "Tailwind", "API integration", "SQL", "Node.js", "UX/UI"]
                },
                {
                  title: "LLM-Powered SOP Optimization",
                  description: "Developed an RAG agentic LLM model trained on local trust guidelines, streamlining SOP searches and queries, reducing search times by 50% and enhancing operational efficiency.",
                  tech: ["RAG", "LLM", "NLP", "AI Integration", "Data Training", "Python"]
                },
                {
                  title: "Cloud-Based Handover System",
                  description: "Transitioned from a static, local document to a cloud-based solution using SharePoint and Azure, enabling real-time collaboration for seamless staff handovers and improving efficiency by 40%.",
                  tech: ["Azure", "SharePoint", "Cloud Solutions", "Security"]
                },
                {
                  title: "FastOMOP: Open-Source A2A Framework & MCP Server",
                  description: "Developed and open-sourced FastOMOP, a Model Context Protocol (MCP) server enabling secure, role-based LLM access to OMOP CDM databases. The platform translates natural-language queries into optimized SQL, automates cohort discovery and analytics, integrates SNOMED-CT for semantic consistency, and enforces governance and audit logging—accelerating clinical research across NHS sites.",
                  tech: ["TypeScript", "Node.js", "SQL", "NLP", "OMOP CDM", "SNOMED-CT", "Security", "Open Source"]
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
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
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