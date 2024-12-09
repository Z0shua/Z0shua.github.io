import { useState, useEffect } from 'react';
import { ChevronUp, User, Briefcase, FolderOpen, GraduationCap, Send } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import ExperienceProjects from '../components/ExperienceProjects';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Component() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('experience');

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

      <About darkMode={darkMode} />
      
      <ExperienceProjects 
        darkMode={darkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Education darkMode={darkMode} />

      <Contact darkMode={darkMode} />

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