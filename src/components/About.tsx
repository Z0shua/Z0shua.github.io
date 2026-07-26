import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className={`font-mono text-[12px] tracking-[0.12em] uppercase ${darkMode ? 'text-tealDark' : 'text-teal'}`}
          >
            01 — Profile
          </motion.p>

          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`font-serif text-3xl md:text-4xl leading-tight mb-8 ${darkMode ? 'text-bone' : 'text-ink'}`}
            >
              Trained to treat patients. Working now to keep language models honest about them.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`space-y-5 text-base md:text-[17px] leading-relaxed font-light ${darkMode ? 'text-bone/75' : 'text-inkMuted'}`}
            >
              <p>
                My PhD at King&rsquo;s College London examines how language models behave over long clinical
                horizons — post-training with QLoRA, rubric-based evaluation of factuality and grounding, and
                multi-step reasoning assessment where a confident answer and a correct one can diverge.
              </p>
              <p>
                At the Lancashire and South Cumbria Secure Data Environment, I led ML architecture for OMCP, an
                open-source natural-language-to-SQL system the team went on to deploy across five research
                teams, and I currently evaluate frontier model outputs as a Medical Fellow at Scale AI.
                The clinical training is what makes me useful here: I notice when an answer sounds complete but
                leaves out the thing that would change a decision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
