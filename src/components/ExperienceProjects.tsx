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
                    title: 'Clinical Data Scientist and AI Research Fellow',
                    company: 'Lancashire and South Cumbria Secure Data Environment Programme',
                    date: 'Dec 2024 - Present (8 months)',
                    description: [
                      'Architected and open-sourced OMCP, a Model Context Protocol server that securely brokers LLM access to OMOP CDM databases, handling role-based authentication, natural-language-to-SQL translation, and plugin-ready extensions for audit-grade analytics.',
                      'Integrated transformer-based NLP into a federated OMOP CDM workflow, reverse-engineering Achilles SQL in Jupyter notebooks to extract structured clinical concepts from free-text notes.',
                      'Expanded and tuned OMOP CDM across multiple NHS trusts, mapping local codes to SNOMED-CT and automating ETL pipelines to cut data-to-insight time.',
                      'Built low-code web dashboards and a natural-language-to-SQL interface, enabling clinicians to query cohorts, visualise trends and generate reports without coding.',
                      'Collaborated with clinical and technical colleagues to refine prompt designs, ensure usability and embed solutions seamlessly into existing NHS systems.'
                    ]
                  },
                  {
                    title: 'NHS Clinical Entrepreneur',
                    company: 'NHS Clinical Entrepreneur Programme',
                    date: 'Apr 2025 - Present (4 months)',
                    description: [
                      'Cohort 9 - Dementia Innovator.'
                    ]
                  },
                  {
                    title: 'Medical Doctor',
                    company: 'Lancashire Teaching Hospitals NHS Foundation Trust',
                    date: 'Aug 2023 - Present (2 years)',
                    description: [
                      'Foundation Year 2 Doctor | Aug 2024 – Present',
                      'ICU (Aug 2024 – Dec 2024): Performed ultrasound-guided central lines and arterial lines, managed patients with multi-organ failure and sepsis, contributed to daily rounds and M&M reviews.',
                      'Community GP (Dec 2024 – Apr 2025): Delivered primary care in underserved urban communities, managed long-term conditions (diabetes, COPD, hypertension), conducted home visits and virtual consultations, and worked with social prescribers and mental-health teams to tackle social determinants of health.'
                    ]
                  },
                  {
                    title: 'Data Scientist',
                    company: 'Lancashire and South Cumbria Integrated Care Board (ICB)',
                    date: 'Jan 2024 - Present',
                    description: [
                      'Managed the data engineering of OMOP OHDSI database with integration of LLMs to facilitate ease of access and query generation using NLP, making large health data more accessible.',
                      'Collaborated with clinical teams to develop data models that enhance virtual healthcare, improving the accessibility of care through technological innovation.',
                      'Implemented machine learning algorithms to predict patient readmission risks, resulting in a 20% reduction in unnecessary readmissions.',
                      'Developed a real-time dashboard for resource allocation, improving emergency response times by 15%.'
                    ]
                  },
                  {
                    title: 'Foundation Doctor',
                    company: 'Lancashire Teaching Hospitals',
                    date: 'Aug 2023 - Present',
                    description: [
                      'Initiated cloud-based solutions for patient handovers in the Gastro department, streamlining workflow and reducing errors by 15%.',
                      'Expanded the online patient handover system implementation across the entire surgical department, improving care coordination.',
                      'Utilised data analysis and patient management software to enhance care delivery and patient outcomes.',
                      'Contributed to multidisciplinary team meetings, improving patient care plan efficiency by 20%.',
                      'Achieved an increased 95% patient satisfaction rate through improving patient information access.',
                      'Developed a phone attachment for the FNE scope via 3D modeling and printing, improving diagnostic capabilities in the ENT department.'
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