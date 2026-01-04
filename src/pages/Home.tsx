import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import profileImg from "../assets/profile.png";
import cv from "../assets/Shailendra_Mahadule_CV.pdf";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative flex-shrink-0"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00d4ff]/30 shadow-2xl shadow-[#00d4ff]/20">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GLOW RING */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-[#00d4ff]/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {portfolioData.home.greeting}{" "}
              <span className="text-[#00d4ff]">{portfolioData.home.name}</span>
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-[#00d4ff] text-lg sm:text-xl font-medium mb-6 tracking-wide"
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div
              className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.home.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center lg:justify-start gap-6"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/Shailendra-08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border-2 border-[#00d4ff]/40 flex items-center justify-center text-white hover:bg-[#00d4ff]/10 transition-colors"
              >
                <Github size={22} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/shailendra-mahadule-96955b200/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border-2 border-[#00d4ff]/40 flex items-center justify-center text-white hover:bg-[#00d4ff]/10 transition-colors"
              >
                <Linkedin size={22} />
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                href="https://x.com/Shailen64591797"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border-2 border-[#00d4ff]/40 flex items-center justify-center text-white hover:bg-[#00d4ff]/10 transition-colors"
              >
                <Twitter size={22} />
              </motion.a>

              {/* LeetCode */}
              <motion.a
                href="https://leetcode.com/u/Shailendra_08/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border-2 border-[#00d4ff]/40 flex items-center justify-center text-white hover:bg-[#00d4ff]/10 transition-colors"
              >
                <span className="text-lg font-bold">LC</span>
              </motion.a>
            </motion.div>

            {/* DOWNLOAD CV */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <a
                href={cv}
                download
                className="px-6 py-3 border-2 border-[#FF0000] text-white rounded-lg font-medium hover:bg-[#00d4ff]/10 transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// //[#00d4ff]
