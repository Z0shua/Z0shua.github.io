import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

const GROUPS = [
  {
    heading: 'LLM Post-training',
    items: ['PyTorch', 'Hugging Face Transformers', 'Unsloth', 'QLoRA / PEFT', 'Instruction tuning', 'vLLM', 'LangChain'],
  },
  {
    heading: 'Evaluation & Quality',
    items: ['Benchmark design', 'Rubric construction', 'Factuality & citation assessment', 'Adversarial testing', 'Failure-mode analysis'],
  },
  {
    heading: 'Search & Retrieval',
    items: ['Retrieval-augmented generation', 'Natural-language-to-SQL', 'Advanced SQL', 'ETL pipelines', 'Neo4j / Knowledge graphs'],
  },
  {
    heading: 'Infrastructure',
    items: ['Docker', 'FastAPI', 'GitHub Actions', 'Azure', 'AWS', 'GCP'],
  },
];

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <section id="skills" className={`border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className={`font-mono text-[12px] tracking-[0.12em] uppercase ${darkMode ? 'text-tealDark' : 'text-teal'}`}
          >
            04 — Capabilities
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
            {GROUPS.map((group, i) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h3 className={`font-serif text-lg mb-4 ${darkMode ? 'text-bone' : 'text-ink'}`}>
                  {group.heading}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className={`text-[15px] font-light ${darkMode ? 'text-bone/65' : 'text-inkMuted'}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
