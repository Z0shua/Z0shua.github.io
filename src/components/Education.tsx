import { motion } from 'framer-motion';

interface EducationProps {
  darkMode: boolean;
}

const SCHOOLS = [
  {
    institution: "King's College London",
    degree: 'MPhil/PhD, Health Data Science and Medical AI',
    date: '2025 — 2029 (expected)',
    detail: 'EPSRC DRIVE-Health CDT. Focus: LLM evaluation, post-training, long-horizon benchmarks, counterfactual reasoning, retrieval-augmented systems.',
  },
  {
    institution: 'University of Sheffield',
    degree: 'MBChB, Medicine',
    date: '2018 — 2023',
    detail: 'GMC full registration with licence to practise. BAME Medics mentoring programme.',
  },
];

export default function Education({ darkMode }: EducationProps) {
  return (
    <section id="education" className={`border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className={`font-mono text-[12px] tracking-[0.12em] uppercase ${darkMode ? 'text-tealDark' : 'text-teal'}`}
          >
            05 — Education
          </motion.p>

          <div className="max-w-2xl">
            {SCHOOLS.map((school, i) => (
              <motion.div
                key={school.institution}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`py-7 ${i !== 0 ? `border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}` : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1.5">
                  <h3 className={`font-serif text-lg ${darkMode ? 'text-bone' : 'text-ink'}`}>{school.institution}</h3>
                  <span className={`font-mono text-[12px] ${darkMode ? 'text-bone/45' : 'text-boneMuted'}`}>{school.date}</span>
                </div>
                <p className={`text-[15px] mb-1.5 ${darkMode ? 'text-tealDark' : 'text-teal'}`}>{school.degree}</p>
                <p className={`text-sm leading-relaxed font-light ${darkMode ? 'text-bone/60' : 'text-inkMuted'}`}>{school.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
