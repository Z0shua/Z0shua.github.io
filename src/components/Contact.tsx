import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from './contact/ContactForm';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="contact" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Send className={`mr-2 ${darkMode ? 'text-chartreuse' : 'text-deepBlue'}`} />
          Contact Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <ContactForm darkMode={darkMode} />
        </div>
      </div>
    </motion.section>
  );
}