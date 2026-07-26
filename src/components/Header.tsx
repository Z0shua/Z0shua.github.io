import { useState } from 'react';
import { Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (section: string) => void;
}

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Header({ activeSection, darkMode, setDarkMode, scrollToSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (key: string) => {
    setMenuOpen(false);
    scrollToSection(key);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
        darkMode ? 'bg-charcoal/85 border-hairlineDark' : 'bg-paper/85 border-hairline'
      } backdrop-blur-md`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-[68px] flex justify-between items-center">
        <button
          onClick={() => goTo('home')}
          className={`font-mono text-[13px] tracking-wide ${darkMode ? 'text-bone' : 'text-ink'} hover:opacity-70 transition-opacity`}
        >
          Z. JIANG
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const key = item.toLowerCase();
            const isActive = activeSection === key;
            return (
              <button
                key={item}
                onClick={() => goTo(key)}
                className={`relative text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive
                    ? darkMode ? 'text-tealDark' : 'text-teal'
                    : darkMode ? 'text-bone/70 hover:text-bone' : 'text-inkMuted hover:text-ink'
                }`}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-2 left-0 right-0 h-[1.5px] ${darkMode ? 'bg-tealDark' : 'bg-teal'}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`md:hidden font-mono text-[12px] tracking-wide uppercase transition-colors duration-300 ${
              darkMode ? 'text-bone/80 hover:text-bone' : 'text-inkMuted hover:text-ink'
            }`}
          >
            {menuOpen ? <X size={16} /> : 'Menu'}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-300 ${
              darkMode
                ? 'border-hairlineDark text-bone hover:border-tealDark hover:text-tealDark'
                : 'border-hairline text-ink hover:border-teal hover:text-teal'
            }`}
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}
          >
            <div className="px-6 py-2">
              {NAV_ITEMS.map((item) => {
                const key = item.toLowerCase();
                const isActive = activeSection === key;
                return (
                  <button
                    key={item}
                    onClick={() => goTo(key)}
                    className={`block w-full text-left py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      isActive
                        ? darkMode ? 'text-tealDark' : 'text-teal'
                        : darkMode ? 'text-bone/70' : 'text-inkMuted'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
