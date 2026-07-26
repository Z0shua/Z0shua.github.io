import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProjectsProps {
  darkMode: boolean;
}

const JOBS = [
  {
    title: 'PhD Researcher — LLM Evaluation & Applied Generative AI',
    org: "King's College London, EPSRC DRIVE-Health CDT",
    date: 'Oct 2025 — Present',
    points: [
      'Building long-horizon benchmarks for temporal and counterfactual reasoning over longitudinal EHRs, designed so plausible intermediate reasoning that leads to a wrong final answer is caught, not just outcomes.',
      'Fine-tuning Qwen-family models using QLoRA/PEFT with Unsloth across five reasoning task categories, evaluating instruction-following, consistency, and robustness under targeted prompting.',
      'Built an eight-domain evaluation suite covering factual grounding, citation support, and adversarial robustness across 200+ constructed queries; reduced unsupported outputs by ~30% vs a prompted baseline.',
      'Built a retrieval-augmented generation pipeline over 500+ clinical documents, cutting unsupported recommendations by ~35%. Manuscript under review at Nature Communications.',
    ],
    tools: 'PyTorch · Hugging Face Transformers · Unsloth · QLoRA/PEFT · LangChain',
  },
  {
    title: 'Medical Fellow — Model Evaluation & Rubric Assessment',
    org: 'Scale AI · Part-time',
    date: 'Jun 2026 — Present',
    points: [
      'Evaluate frontier-model outputs in medicine against expert-developed rubrics for factual accuracy, reasoning quality, and safety.',
      'Contribute to rubric calibration and failure-mode analysis, focused on spotting answers that sound complete but leave out something that matters clinically.',
      'Feed recurring error patterns back into the evaluation process to improve consistency over time.',
    ],
  },
  {
    title: 'Neuroscience Fellow & Digital Health AI Fellow',
    org: 'Cleveland Clinic London · Part-time',
    date: 'Sep 2025 — Present',
    points: [
      'Lead development of AI-assisted decision tools, focusing on interpretability and failure-mode analysis in clinician-facing workflows.',
      'Translate requirements from 15+ clinical domain experts into data models and evaluation dashboards.',
    ],
  },
  {
    title: 'Clinical AI Research Fellow & Lead ML Architect',
    org: 'Lancashire and South Cumbria Secure Data Environment',
    date: 'Nov 2024 — Oct 2025',
    points: [
      'Led ML architecture and contributed to the design and delivery of OMCP, an open-source Model Context Protocol server for controlled natural-language access to structured databases, with audit logging, role-based access control, and privilege separation.',
      'Built core natural-language-to-SQL workflows — query rewriting, caching, and batching — supporting sub-second responses across federated data sources spanning four organisations.',
      'As part of the team, packaged and documented the system for adoption across five research teams, an effort that cut partner onboarding time by ~60%.',
      'Processed 2M+ records using transformer-based NLP for entity extraction and normalisation.',
    ],
  },
  {
    title: 'Medical Doctor — ICU, Neurosurgery, Acute Medicine',
    org: 'Lancashire Teaching Hospitals NHS Foundation Trust',
    date: 'Aug 2023 — Aug 2025',
    points: [
      'Built and deployed a deterioration-detection alert system across four clinical teams, cutting false-positive rates by ~20% without missing more real events.',
      'Worked with real-time multimodal ICU data, where ground truth is delayed and the wrong call has real consequences.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'OMCP',
    subtitle: 'Open-source LLM systems tool — Lancashire & South Cumbria SDE',
    description:
      'Model Context Protocol server for auditable LLM access to structured databases via natural-language-to-SQL. Led ML architecture and contributed to core system design — audit logging, role-based access control, and privilege separation. Adopted across five research teams as a team effort, cutting partner onboarding time by ~60%.',
    tags: ['Python', 'FastAPI', 'MCP', 'NL-to-SQL', 'Open Source'],
    link: 'https://github.com/fastomop/omcp_py',
    featured: true,
  },
  {
    title: 'RAG over UK NICE Clinical Guidelines',
    subtitle: 'Grounded generation for clinical evidence',
    description:
      'Retrieval-augmented generation pipeline over 500+ clinical documents, cutting unsupported recommendations by ~35% vs a prompted baseline. Manuscript under review at Nature Communications.',
    tags: ['RAG', 'LLM Evaluation', 'Clinical Evidence'],
    featured: true,
  },
  {
    title: 'Dyad Labs',
    subtitle: 'Concept and design phase',
    description:
      'AI-native simulator for evaluating human–AI performance in clinical workflows, comparing clinician-only, model-only, and clinician-plus-model outcomes. Developed as a pitch for Perplexity\u2019s Billion Pound Build.',
    tags: ['Clinical AI', 'Simulation', 'Human-AI'],
  },
  {
    title: '62M-node Biomedical Knowledge Graph',
    subtitle: 'Retrieval across 12 ontologies',
    description: 'Optimised traversal over a large biomedical ontology graph cut query latency by 65%.',
    tags: ['Neo4j', 'Knowledge Graph', 'Retrieval'],
  },
  {
    title: 'Federated Analytics Platform',
    subtitle: 'Cross-trust privacy-preserving analytics',
    description: 'Privacy-preserving analytics across three NHS trusts and 500K+ patient records, cutting cross-trust query time by ~50%.',
    tags: ['Federated Compute', 'Privacy', 'NHS'],
  },
  {
    title: 'Long-horizon Clinical LLM Benchmark',
    subtitle: 'Temporal & counterfactual reasoning',
    description: 'A clinician-anchored benchmark testing whether models can reason about what would have happened under different interventions, not just predict the next observation.',
    tags: ['Benchmarks', 'EHR', 'Counterfactuals'],
  },
];

export default function ExperienceProjects({ darkMode }: ExperienceProjectsProps) {
  return (
    <>
      {/* Experience */}
      <section id="experience" className={`border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`font-mono text-[12px] tracking-[0.12em] uppercase ${darkMode ? 'text-tealDark' : 'text-teal'}`}
            >
              02 — Experience
            </motion.p>

            <div className="max-w-3xl">
              {JOBS.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`py-9 ${i !== 0 ? `border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}` : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                    <h3 className={`font-serif text-xl md:text-[22px] leading-snug ${darkMode ? 'text-bone' : 'text-ink'}`}>
                      {job.title}
                    </h3>
                    <span className={`font-mono text-[12px] whitespace-nowrap ${darkMode ? 'text-bone/45' : 'text-boneMuted'}`}>
                      {job.date}
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-tealDark' : 'text-teal'}`}>{job.org}</p>
                  <ul className="space-y-2.5">
                    {job.points.map((point, pi) => (
                      <li
                        key={pi}
                        className={`text-[15px] leading-relaxed font-light pl-4 relative ${darkMode ? 'text-bone/70' : 'text-inkMuted'}`}
                      >
                        <span className={`absolute left-0 top-[0.6em] w-1 h-1 rounded-full ${darkMode ? 'bg-bone/40' : 'bg-ink/30'}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {job.tools && (
                    <p className={`font-mono text-[12px] mt-4 ${darkMode ? 'text-bone/40' : 'text-boneMuted'}`}>
                      {job.tools}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`font-mono text-[12px] tracking-[0.12em] uppercase ${darkMode ? 'text-tealDark' : 'text-teal'}`}
            >
              03 — Selected Work
            </motion.p>

            <div className="max-w-3xl">
              {PROJECTS.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`group block ${project.featured ? 'py-10' : 'py-8'} ${
                    i !== 0 ? `border-t ${darkMode ? 'border-hairlineDark' : 'border-hairline'}` : ''
                  } ${project.link ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3
                      className={`font-serif leading-snug transition-colors duration-300 ${
                        project.featured ? 'text-2xl md:text-[26px]' : 'text-xl'
                      } ${darkMode ? 'text-bone group-hover:text-tealDark' : 'text-ink group-hover:text-teal'}`}
                    >
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowUpRight
                        size={18}
                        className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${darkMode ? 'text-bone/40' : 'text-boneMuted'}`}
                      />
                    )}
                  </div>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-bone/50' : 'text-inkMuted'}`}>{project.subtitle}</p>
                  <p className={`text-[15px] leading-relaxed font-light max-w-2xl mb-4 ${darkMode ? 'text-bone/70' : 'text-inkMuted'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`font-mono text-[11px] tracking-wide ${darkMode ? 'text-bone/40' : 'text-boneMuted'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
