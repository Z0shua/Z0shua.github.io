import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactFormProps {
  darkMode: boolean;
}

export default function ContactForm({ darkMode }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className={`${darkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80`}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-chartreuse' : 'focus:ring-deepBlue'}`}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-chartreuse' : 'focus:ring-deepBlue'}`}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-chartreuse' : 'focus:ring-deepBlue'}`}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className={`w-full ${darkMode ? 'bg-chartreuse text-deepBlack' : 'bg-deepBlue text-white'} py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-300`}
      >
        Send Message
      </motion.button>
      {formStatus && (
        <p className={`mt-4 text-center ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {formStatus}
        </p>
      )}
    </motion.form>
  );
}