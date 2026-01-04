import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-12"
        >
          <h1 className="text-5xl font-bold">
            Pro<span className="text-[#00d4ff]">jects</span>
          </h1>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Info className="text-[#00d4ff]" size={32} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#1a1f2e]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00d4ff]/10"></div>
                {/* <span className="text-6xl z-10">🖥️</span> */}

                 <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover z-10"
  />
              </div>

              <div className="p-6">
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <h3 className="text-xl font-semibold text-[#00d4ff] hover:underline">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
