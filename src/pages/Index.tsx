import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Component() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('experience');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowBackToTop(scrollPosition > 300);

    const sections = ['home', 'about', 'experience-projects', 'education', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section === 'experience-projects' ? activeTab : section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    let element;
    if (sectionId === 'experience' || sectionId === 'projects') {
      element = document.getElementById('experience-projects');
      setActiveTab(sectionId);
    } else {
      element = document.getElementById(sectionId);
    }
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    alert("Downloading CV... (This is a placeholder action)");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-deepBlack text-white' : 'bg-white text-black'} transition-colors duration-300 font-['Inter']`}>
      <Header 
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />
      
      <Banner 
        darkMode={darkMode}
        handleDownloadCV={handleDownloadCV}
      />

      {/* About Me */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="about" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <User className={`mr-2 text-[${highlightColor}]`} />
            About Me
          </h2>
          <div className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-colors duration-300 backdrop-blur-md bg-opacity-80`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/3"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241031_002938-vAdn2XugCOVKagJ06cB971bYxqfDVI.png" 
                  alt="Joshua Jiang" 
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:w-2/3"
              >
                <p className="text-lg mb-6 leading-relaxed">
                  Hi, I'm Josh, a doctor and data scientist dedicated to innovating efficient patient care through machine learning and health-tech. By day (and often by nights), I'm a doctor working in the NHS, and outside of clinical hours, I focus on transforming complex healthcare data into actionable insights.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not in the hospital or coding, you can find me exploring the latest developments in health-tech, contributing to open-source medical projects, or sharing my knowledge through medical data science workshops and presentations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Work Experience and Projects */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="experience-projects" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className={`mr-2 text-[${highlightColor}]`} />
            Experience & Projects
          </h2>
          <div className="flex justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('experience')}
              className={`mr-4 px-6 py-3 rounded-md ${activeTab === 'experience' ? `bg-[${highlightColor}] text-${darkMode ? `[${deepBlack}]` : 'white'}` : ''} transition-all duration-300`}
            >
              <Briefcase className="inline-block mr-2" />
              Work Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-md ${activeTab === 'projects' ? `bg-[${highlightColor}] text-${darkMode ? `[${deepBlack}]` : 'white'}` : ''} transition-all duration-300`}
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
                  ].map((job, index) => (
                    <motion.div 
                      key={`job-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
                    >
                      <h3 className={`text-2xl font-semibold mb-4 bg-[${highlightColor}] ${darkMode ? `text-[${deepBlack}]` : 'text-white'} inline-block px-4 py-2 rounded`}>
                        {job.title}
                      </h3>
                      <p  className="text-xl mb-2">{job.company}</p>
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
                  }
                ].map((project, index) => (
                  <motion.div
                    key={`project-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? `bg-[${deepBlack}]` : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80 border-2 border-transparent hover:border-[${highlightColor}]`}
                  >
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-base mb-4 opacity-75">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={`project-${index}-tech-${i}`} className={`text-sm px-3 py-1 rounded-full bg-[${highlightColor}] text-${darkMode ? `[${deepBlack}]` : 'white'}`}>
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

      {/* Education */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="education" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <GraduationCap className={`mr-2 text-[${highlightColor}]`} />
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
                <span className={`bg-[${highlightColor}] ${darkMode ? `text-[${deepBlack}]` : 'text-white'} px-4 py-2 rounded`}>University of Sheffield</span>
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

      {/* Contact Me */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="contact" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Send className={`mr-2 text-[${highlightColor}]`} />
            Contact Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.form 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-[${highlightColor}]`}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-[${highlightColor}]`}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-[${highlightColor}]`}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full bg-[${highlightColor}] text-${darkMode ? `[${deepBlack}]` : 'white'} py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-300`}
              >
                Send Message
              </motion.button>
              {formStatus && (
                <p className={`mt-4 text-center ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {formStatus}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`${darkMode ? `bg-black text-[${highlightColor}]` : 'bg-gray-800 text-white'} py-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Zhangshu Joshua Jiang. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 ${
              darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'
            } p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
