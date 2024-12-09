import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (section: string) => void;
}

export default function Header({ activeSection, darkMode, setDarkMode, scrollToSection }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-deepBlack' : 'bg-white'} z-50 transition-colors duration-300`}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'About', 'Experience', 'Projects', 'Education'].map((item) => (
            <li key={item}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${
                  activeSection === item.toLowerCase() 
                    ? darkMode ? 'text-chartreuse' : 'text-deepBlue' 
                    : darkMode ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}