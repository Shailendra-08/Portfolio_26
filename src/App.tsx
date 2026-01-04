// import { useState } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import Navigation from './components/Navigation';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// function App() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   // ✅ Explicitly typed as Variants
//   const pageVariants: Variants = {
//     initial: {
//       opacity: 0,
//       x: -100,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.25, 0.1, 0.25, 1], // easeOut
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: 100,
//       transition: {
//         duration: 0.3,
//         ease: [0.42, 0, 1, 1], // easeIn
//       },
//     },
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Home':
//         return <Home />;
//       case 'About':
//         return <About />;
//       case 'Projects':
//         return <Projects />;
//       case 'Contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] text-white">
//       <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentPage}
//           variants={pageVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//         >
//           {renderPage()}
//         </motion.div>
//       </AnimatePresence>

//       {/* Background animation */}
//       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: [0.4, 0, 0.2, 1],
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.5, 0.3, 0.5],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: [0.4, 0, 0.2, 1],
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;



import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] text-white">
      <Navigation />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Background animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}

export default App;
