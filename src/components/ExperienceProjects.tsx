import { Briefcase, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from './experience/ExperienceCard';
import ProjectCard from './projects/ProjectCard';

interface ExperienceProjectsProps {
  darkMode: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const experienceData = [
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
      'Developed a phone attachment for the FNE scope via 3D modeling and printing, improving diagnostic capabilities in the ENT department.',
    ]
  }
];

const projectsData = [
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
];

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
                {experienceData.map((job, index) => (
                  <ExperienceCard
                    key={index}
                    {...job}
                    darkMode={darkMode}
                    index={index}
                  />
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
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  darkMode={darkMode}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}