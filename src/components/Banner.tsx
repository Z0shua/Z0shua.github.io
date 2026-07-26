import { Mail, Github, Linkedin, ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

interface BannerProps {
  darkMode: boolean;
  handleDownloadCV: () => void;
  scrollToSection: (section: string) => void;
}

export default function Banner({ darkMode, handleDownloadCV, scrollToSection }: BannerProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Extra density layer on top of the site-wide faint field, masked so it never sits behind dense copy */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 35%, black 0%, black 40%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 35%, black 0%, black 40%, transparent 78%)',
        }}
      >
        <ParticleField darkMode={darkMode} variant="primary" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-40 md:pt-52 pb-24 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`font-mono text-[12px] md:text-[13px] tracking-[0.12em] uppercase mb-8 ${
            darkMode ? 'text-tealDark' : 'text-teal'
          }`}
        >
          Medicine → LLM Evaluation &amp; Clinical AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`font-sans font-medium leading-[0.98] tracking-tight text-[11vw] md:text-[5.4vw] lg:text-[5rem] max-w-4xl ${
            darkMode ? 'text-bone' : 'text-ink'
          }`}
        >
          Zhangshu Joshua Jiang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-8 max-w-2xl text-lg md:text-xl leading-relaxed font-light ${
            darkMode ? 'text-bone/80' : 'text-inkMuted'
          }`}
        >
          A medical doctor working on the evaluation, post-training, and grounded generation of language models for high-stakes clinical use — where a plausible answer and a correct one are not the same thing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <button
            onClick={handleDownloadCV}
            className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase border-b pb-1 transition-colors duration-300 ${
              darkMode
                ? 'text-bone border-bone/40 hover:border-tealDark hover:text-tealDark'
                : 'text-ink border-ink/30 hover:border-teal hover:text-teal'
            }`}
          >
            Download CV
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </button>

          <div className={`flex items-center gap-5 ${darkMode ? 'text-bone/60' : 'text-inkMuted'}`}>
            <a
              href="mailto:zhangshu.j.jiang@gmail.com"
              aria-label="Email"
              className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}
            >
              <Mail size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/zhangshu-jiang/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://github.com/Z0shua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}
            >
              <Github size={17} />
            </a>
            <a
              href="https://github.com/fastomop/omcp_py"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 font-mono text-[13px] transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}
            >
              OMCP <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
