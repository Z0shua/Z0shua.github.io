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

                {/* Clinical Data Scientist and AI Research Fellow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
                >
                  <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} inline-block px-4 py-2 rounded`}>
                    Clinical Data Scientist and AI Research Fellow
                  </h3>
                  <p className="text-xl mb-2">Lancashire and South Cumbria Secure Data Environment Programme · Part-time</p>
                  <p className="text-lg mb-2 opacity-75">Dec 2024 – Present · 7 mos</p>
                  <p className="text-base mb-2 opacity-75">Hybrid</p>
                  <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                    <li>
                      Integrated transformer-based NLP into a federated OMOP CDM workflow, reverse-engineering Achilles SQL in Jupyter notebooks to extract structured clinical concepts from free-text notes.
                    </li>
                    <li>
                      Expanded and tuned OMOP CDM across multiple NHS trusts, mapping local codes to SNOMED-CT and automating ETL pipelines to cut data-to-insight time.
                    </li>
                    <li>
                      Built low-code web dashboards and a natural-language-to-SQL interface, enabling clinicians to query cohorts, visualise trends and generate reports without coding.
                    </li>
                    <li>
                      Collaborated with clinical and technical colleagues to refine prompt designs, ensure usability and embed solutions seamlessly into existing NHS systems.
                    </li>
                  </ul>
                </motion.div>

                {/* Medical Doctor */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
                >
                  <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} inline-block px-4 py-2 rounded`}>
                    Medical Doctor
                  </h3>
                  <p className="text-xl mb-2">Lancashire Teaching Hospitals NHS Foundation Trust · Full-time</p>
                  <p className="text-lg mb-2 opacity-75">Aug 2023 – Present · 1 yr 11 mos</p>
                  <p className="text-base mb-2 opacity-75">Lancashire, England, United Kingdom · On-site</p>
                  <div className="mt-4 space-y-2">
                    <p className="font-semibold">Foundation Year 2 Doctor | Aug 2024 – Present</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        <strong>ICU (Aug 2024 – Dec 2024):</strong> Performed ultrasound-guided central lines and arterial lines, managed patients with multi-organ failure and sepsis, contributed to daily rounds and M&amp;M reviews.
                      </li>
                      <li>
                        <strong>Community GP (Dec 2024 – Apr 2025):</strong> Delivered primary care in underserved urban communities, managed long-term conditions (diabetes, COPD, hypertension), conducted home visits and virtual consultations, and worked with social prescribers and mental-health teams to tackle social determinants of health.
                      </li>
                      <li>
                        <strong>Psychiatry, The Harbour Inpatient Unit (Apr 2025 – Present):</strong> Clerking and ongoing care for inpatients with severe affective and psychotic disorders, carrying out risk assessments, leading MDT ward rounds, prescribing and monitoring psychotropic medications, and facilitating therapeutic groups and family liaison.
                      </li>
                    </ul>
                    <p className="font-semibold mt-4">Foundation Year 1 Doctor | Aug 2023 – Aug 2024</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        <strong>Otolaryngology:</strong> Managed a range of ENT conditions, assisted in robotic and open surgeries, performed flexible nasoendoscopy and co-authored patient education materials.
                      </li>
                      <li>
                        <strong>Gastroenterology:</strong> Provided specialised care for complex GI cases, served on the on-call medical and crash teams, and implemented cloud-based documentation workflows to improve efficiency.
                      </li>
                      <li>
                        <strong>Upper GI Surgery:</strong> Participated in emergency and elective procedures, supported on-call surgical teams, enhanced handover and documentation via cloud tools, and managed pre- and post-operative patient care.
                      </li>
                    </ul>
                  </div>
                </motion.div>
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
                  title: "Federated OMOP CDM NLP Pipeline",
                  description: "Integrated transformer-based NLP into a federated OMOP CDM workflow, reverse-engineering Achilles SQL in Jupyter notebooks to extract structured clinical concepts from free-text notes.",
                  tech: ["NLP", "Transformers", "OMOP CDM", "Jupyter", "SQL", "Python"]
                },
                {
                  title: "Multi-Trust OMOP CDM Expansion & Automation",
                  description: "Expanded and tuned OMOP CDM across multiple NHS trusts, mapping local codes to SNOMED-CT and automating ETL pipelines to cut data-to-insight time.",
                  tech: ["OMOP CDM", "ETL", "SNOMED-CT", "Automation", "Python"]
                },
                {
                  title: "Low-Code Clinical Analytics Platform",
                  description: "Built low-code web dashboards and a natural-language-to-SQL interface, enabling clinicians to query cohorts, visualise trends, and generate reports without coding.",
                  tech: ["Dashboards", "NLP", "SQL", "React", "UX/UI"]
                },
                {
                  title: "MCP Server Pipelines for OMOP CDM Navigation",
                  description: "Built MCP server pipelines for navigating OMOP CDM, including agent-to-agent pipelines to interact with MCP servers and expand OMOP CDM capabilities.",
                  tech: ["MCP Server", "OMOP CDM", "Pipelines", "Agent Systems", "Python"]
                },
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

const experiences = [
    {
        title: "Clinical Data Scientist and AI Research Fellow",
        company: "Lancashire and South Cumbria Secure Data Environment Programme · Part-time",
        date: "Dec 2024 - Present · 7 mos",
        location: "Hybrid",
        description: [
            "Integrated transformer-based NLP into a federated OMOP CDM workflow, reverse-engineering Achilles SQL in Jupyter notebooks to extract structured clinical concepts from free-text notes.",
            "Expanded and tuned OMOP CDM across multiple NHS trusts, mapping local codes to SNOMED-CT and automating ETL pipelines to cut data-to-insight time.",
            "Built low-code web dashboards and a natural-language-to-SQL interface, enabling clinicians to query cohorts, visualise trends and generate reports without coding.",
            "Collaborated with clinical and technical colleagues to refine prompt designs, ensure usability and embed solutions seamlessly into existing NHS systems."
        ]
    },
    {
        title: "Medical Doctor",
        company: "Lancashire Teaching Hospitals NHS Foundation Trust · Full-time",
        date: "Aug 2023 - Present",
        location: "On-site, Lancashire, England, United Kingdom",
        description: [
            "Foundation Year 2 Doctor (Aug 2024 – Present):",
            "• ICU (Aug 2024 – Dec 2024): Performed ultrasound-guided central lines and arterial lines, managed patients with multi-organ failure and sepsis, contributed to daily rounds and M&M reviews.",
            "• Community GP (Dec 2024 – Apr 2025): Delivered primary care in underserved urban communities, managed long-term conditions (diabetes, COPD, hypertension), conducted home visits and virtual consultations.",
            "• Psychiatry, The Harbour Inpatient Unit (Apr 2025 – Present): Clerking and ongoing care for inpatients with severe affective and psychotic disorders, carried out risk assessments, led MDT ward rounds, prescribed and monitored psychotropic medications, and facilitated therapeutic groups and family liaison.",
            "",
            "Foundation Year 1 Doctor (Aug 2023 – Aug 2024):",
            "• Otolaryngology: Managed a range of ENT conditions, assisted in robotic and open surgeries, performed flexible nasoendoscopy and co-authored patient education materials.",
            "• Gastroenterology: Provided specialised care for complex GI cases, served on the on-call medical and crash teams, and implemented cloud-based documentation workflows to improve efficiency.",
            "• Upper GI Surgery: Participated in emergency and elective procedures, supported on-call surgical teams, enhanced handover and documentation via cloud tools, and managed pre- and post-operative patient care."
        ]
    }
];