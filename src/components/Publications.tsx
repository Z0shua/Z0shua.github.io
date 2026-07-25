import { BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface PublicationsProps {
  darkMode: boolean;
}

const items = [
  {
    kind: 'Publication',
    title: 'Grounding Large Language Models in Clinical Evidence: A Retrieval-Augmented Generation System for Querying UK NICE Clinical Guidelines',
    authors: 'Jiang et al.',
    venue: 'Under review, Nature Communications',
    link: null as string | null
  },
  {
    kind: 'Open Source',
    title: 'OMCP — Open-source Model Context Protocol server for auditable LLM access to structured databases via natural-language-to-SQL',
    authors: 'Lead author and maintainer',
    venue: 'github.com/fastomcp/omcp_py',
    link: 'https://github.com/fastomcp/omcp_py'
  }
];

export default function Publications({ darkMode }: PublicationsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="publications"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <BookOpen className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          Publications & Open Source
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={`pub-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
            >
              <span className={`inline-block text-xs px-3 py-1 rounded-full mb-3 ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'}`}>
                {item.kind}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-start gap-2 ${darkMode ? 'hover:text-chartreuse' : 'hover:text-deepBlue'} transition-colors`}
                  >
                    <span>{item.title}</span>
                    <ExternalLink size={16} className="mt-1 flex-shrink-0" />
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm opacity-75">{item.authors}</p>
              <p className="text-sm italic opacity-75">{item.venue}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
