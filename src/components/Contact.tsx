import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  return (
    <section id="contact" className={`relative border-t overflow-hidden ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-[12px] tracking-[0.12em] uppercase mb-6 ${darkMode ? 'text-tealDark' : 'text-teal'}`}
        >
          06 — Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif text-3xl md:text-5xl leading-tight max-w-2xl mx-auto mb-10 ${darkMode ? 'text-bone' : 'text-ink'}`}
        >
          Open to conversations on clinical AI, evaluation, and research collaboration.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:zhangshu.j.jiang@gmail.com"
            className={`group inline-flex items-center gap-2 font-serif text-xl md:text-2xl border-b pb-1 transition-colors duration-300 ${
              darkMode ? 'text-bone border-bone/40 hover:text-tealDark hover:border-tealDark' : 'text-ink border-ink/30 hover:text-teal hover:border-teal'
            }`}
          >
            zhangshu.j.jiang@gmail.com
            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className={`flex items-center gap-6 mt-2 ${darkMode ? 'text-bone/60' : 'text-inkMuted'}`}>
            <a href="https://www.linkedin.com/in/zhangshu-jiang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}>
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Z0shua" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}>
              <Github size={18} />
            </a>
            <a href="mailto:zhangshu.j.jiang@gmail.com" aria-label="Email" className={`transition-colors duration-300 ${darkMode ? 'hover:text-tealDark' : 'hover:text-teal'}`}>
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className={`relative border-t py-6 ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
        <p className={`text-center font-mono text-[11px] tracking-wide ${darkMode ? 'text-bone/35' : 'text-boneMuted'}`}>
          © {new Date().getFullYear()} Zhangshu Joshua Jiang
        </p>
      </div>
    </section>
  );
}
