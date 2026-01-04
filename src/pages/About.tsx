// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';

// export default function About() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           {portfolioData.about.greeting.split('!')[0]}
//           <span className="text-[#00d4ff]">!</span>
//         </motion.h1>

//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
//         >
//           {portfolioData.about.description}
//         </motion.p>

//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
//           >
//             {portfolioData.about.techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="aspect-square bg-white rounded-3xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all"
//               >
//                 <div className={`w-12 h-12 ${tech.color} rounded-2xl flex items-center justify-center text-white ${tech.textColor || ''}`}>
//                   <span className="text-xl font-bold">{tech.icon}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Work <span className="text-[#00d4ff]">Experience:</span>
//           </h2>

//           <div className="space-y-8">
//             {portfolioData.about.experience.map((exp, expIndex) => (
//               <motion.div
//                 key={expIndex}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 + expIndex * 0.2 }}
//                 className="space-y-4"
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
//                   <p className="text-gray-400 text-lg">
//                     {exp.company}, {exp.location} — {exp.period}
//                   </p>
//                 </div>

//                 {exp.projects.map((project, projIndex) => (
//                   <div key={projIndex} className="ml-6 space-y-3">
//                     <h4 className="text-xl font-semibold text-[#00d4ff]">
//                       {project.name}
//                     </h4>
//                     <ul className="space-y-2 ml-6">
//                       {project.achievements.map((achievement, achIndex) => (
//                         <li
//                           key={achIndex}
//                           className="text-gray-300 list-disc leading-relaxed"
//                         >
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';

// export default function About() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           {portfolioData.about.greeting.split('!')[0]}
//           <span className="text-[#00d4ff]">!</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
//         >
//           {portfolioData.about.description}
//         </motion.p>

//         {/* Tech Stack */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
//           >
//             {portfolioData.about.techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative group aspect-square bg-white rounded-3xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all overflow-hidden"
//               >
//                 {/* Icon */}
//                 <div
//                   className={`w-14 h-14 ${tech.color} rounded-2xl flex items-center justify-center ${
//                     tech.textColor || 'text-white'
//                   }`}
//                 >
//                   <span className="text-xl font-bold">{tech.icon}</span>
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-[#0f1419]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-white text-sm font-semibold tracking-wide">
//                     {tech.name}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Work Experience */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Work <span className="text-[#00d4ff]">Experience:</span>
//           </h2>

//           <div className="space-y-8">
//             {portfolioData.about.experience.map((exp, expIndex) => (
//               <motion.div
//                 key={expIndex}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 + expIndex * 0.2 }}
//                 className="space-y-4"
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold text-white">
//                     {exp.title}
//                   </h3>
//                   <p className="text-gray-400 text-lg">
//                     {exp.company}, {exp.location} — {exp.period}
//                   </p>
//                 </div>

//                 {exp.projects.map((project, projIndex) => (
//                   <div key={projIndex} className="ml-6 space-y-3">
//                     <h4 className="text-xl font-semibold text-[#00d4ff]">
//                       {project.name}
//                     </h4>
//                     <ul className="space-y-2 ml-6">
//                       {project.achievements.map((achievement, achIndex) => (
//                         <li
//                           key={achIndex}
//                           className="text-gray-300 list-disc leading-relaxed"
//                         >
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }













// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';

// export default function About() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           initial={{ y: -40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           {portfolioData.about.greeting.split('!')[0]}
//           <span className="text-[#00d4ff]">!</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
//         >
//           {portfolioData.about.description}
//         </motion.p>

//         {/* Tech Stack */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
//           >
//             {portfolioData.about.techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="group perspective"
//               >
//                 <div className="relative aspect-square w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  
//                   {/* FRONT – IMAGE */}
//                   <div className="absolute inset-0 bg-white rounded-3xl shadow-lg flex items-center justify-center backface-hidden">
//                     <img
//                       src={tech.image}
//                       alt={tech.name}
//                       className="w-12 h-12 object-contain"
//                     />
//                   </div>

//                   {/* BACK – TEXT */}
//                   <div className="absolute inset-0 bg-white rounded-3xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
//                     <span className="text-black text-sm font-semibold text-center px-2">
//                       {tech.name}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }






// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';

// export default function About() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           initial={{ y: -40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           {portfolioData.about.greeting.split('!')[0]}
//           <span className="text-[#00d4ff]">!</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
//         >
//           {portfolioData.about.description}
//         </motion.p>

//         {/* Tech Stack */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
//           >
//             {portfolioData.about.techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="group perspective"
//               >
//                 {/* CARD */}
//                 <div className="relative aspect-square w-full max-w-[96px] mx-auto transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  
//                   {/* FRONT – IMAGE */}
//                   <div className="absolute inset-0 bg-white rounded-3xl shadow-lg flex items-center justify-center backface-hidden">
//                     <img
//                       src={tech.image}
//                       alt={tech.name}
//                       className="w-full h-full p-4 object-contain"
//                     />
//                   </div>

//                   {/* BACK – TEXT */}
//                   <div className="absolute inset-0 bg-white rounded-3xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
//                     <span className="text-black text-sm font-semibold text-center px-2">
//                       {tech.name}
//                     </span>
//                   </div>

//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';

// export default function About() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           initial={{ y: -40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           {portfolioData.about.greeting.split('!')[0]}
//           <span className="text-[#00d4ff]">!</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
//         >
//           {portfolioData.about.description}
//         </motion.p>

//         {/* Tech Stack */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">
//             Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
//           >
//             {portfolioData.about.techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative group aspect-square w-full max-w-[96px] mx-auto bg-white rounded-3xl shadow-lg cursor-pointer overflow-hidden"
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={tech.image}
//                   alt={tech.name}
//                   className="w-full h-full p-4 object-contain transition-opacity duration-300 group-hover:opacity-20"
//                 />

//                 {/* HOVER OVERLAY */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-black text-sm font-semibold text-center px-2">
//                     {tech.name}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }






// version 9



import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-6"
        >
          {portfolioData.about.greeting.split('!')[0]}
          <span className="text-[#00d4ff]">!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed mb-12 max-w-5xl"
        >
          {portfolioData.about.description}
        </motion.p>

        {/* TECH STACK */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            Tech Stack <span className="text-[#00d4ff]">and Tools:</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
          >
            {portfolioData.about.techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="relative group aspect-square w-full max-w-[96px] mx-auto bg-white rounded-3xl shadow-lg cursor-pointer overflow-hidden"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full p-4 object-contain transition-opacity duration-300 group-hover:opacity-20"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-black text-sm font-semibold text-center px-2">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* WORK EXPERIENCE (RESTORED) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Work <span className="text-[#00d4ff]">Experience:</span>
          </h2>

          <div className="space-y-8">
            {portfolioData.about.experience.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + expIndex * 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {exp.company}, {exp.location} — {exp.period}
                  </p>
                </div>

                {exp.projects.map((project, projIndex) => (
                  <div key={projIndex} className="ml-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#00d4ff]">
                      {project.name}
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {project.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-300 list-disc leading-relaxed"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
