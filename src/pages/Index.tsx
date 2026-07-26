import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import ExperienceProjects from '../components/ExperienceProjects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

export default function Component() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400);

    for (const section of SECTIONS) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -68;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_July_2026.pdf';
    link.download = 'Zhangshu_Jiang_CV_July_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-charcoal text-bone' : 'bg-paper text-ink'}`}>
      <Header
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />

      <Banner darkMode={darkMode} handleDownloadCV={handleDownloadCV} scrollToSection={scrollToSection} />
      <About darkMode={darkMode} />
      <ExperienceProjects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300 ${
              darkMode
                ? 'bg-charcoal/80 border-hairlineDark text-bone hover:border-tealDark hover:text-tealDark'
                : 'bg-paper/80 border-hairline text-ink hover:border-teal hover:text-teal'
            }`}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
