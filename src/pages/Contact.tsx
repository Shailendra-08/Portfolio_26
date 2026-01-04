import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail  } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email:Mail,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Con<span className="text-[#00d4ff]">tact</span>
        </motion.h1>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-[#00d4ff]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#00d4ff] focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border-2 border-[#00d4ff]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#00d4ff] focus:outline-none transition-colors"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border-2 border-[#00d4ff]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#00d4ff] focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border-2 border-[#00d4ff]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#00d4ff] focus:outline-none transition-colors"
              />
            </motion.div>
          </div>

          <motion.div
            whileFocus={{ scale: 1.01 }}
          >
            <textarea
              name="message"
              placeholder="Type your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 bg-transparent border-2 border-[#00d4ff]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-transparent border-2 border-[#00d4ff] text-white rounded-xl font-medium hover:bg-[#00d4ff]/10 transition-colors"
          >
            Send
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-6 justify-center"
        >
          <h2 className="text-2xl font-bold">Social:</h2>
          <div className="flex gap-4">
            {portfolioData.contact.social.map((social, index) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-shadow"
                >
                  <Icon className="text-[#0f1419]" size={32} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
