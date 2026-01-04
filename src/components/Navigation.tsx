// // import { motion } from 'framer-motion';
// // import { portfolioData } from '../data/portfolio';

// // interface NavigationProps {
// //   currentPage: string;
// //   onNavigate: (page: string) => void;
// // }

// // export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
// //   const pages = ['Home', 'About', 'Projects', 'Contact'];

// //   return (
// //     <motion.nav
// //       initial={{ y: -100, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       className="fixed top-0 left-0 right-0 z-50 bg-[#0f1419]/80 backdrop-blur-sm"
// //     >
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// //         <motion.div
// //           whileHover={{ scale: 1.05 }}
// //           className="text-2xl font-bold"
// //         >
// //           <span className="text-[#00d4ff]">&lt;</span>
// //           <span className="text-white">Shailendra</span>
// //           <span className="text-[#00d4ff]">&gt;</span>
// //         </motion.div>

// //         <div className="flex gap-8">
// //           {pages.map((page) => (
// //             <motion.button
// //               key={page}
// //               onClick={() => onNavigate(page)}
// //               className={`text-lg font-medium transition-colors relative ${
// //                 currentPage === page ? 'text-white' : 'text-gray-400 hover:text-white'
// //               }`}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {page}
// //               {currentPage === page && (
// //                 <motion.div
// //                   layoutId="underline"
// //                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00d4ff]"
// //                 />
// //               )}
// //             </motion.button>
// //           ))}
// //         </div>
// //       </div>
// //     </motion.nav>
// //   );
// // }

// import { motion } from 'framer-motion';

// const navItems = [
//   { label: 'Home', id: 'home' },
//   { label: 'About', id: 'about' },
//   { label: 'Projects', id: 'projects' },
//   { label: 'Contact', id: 'contact' },
// ];

// export default function Navigation() {
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-[#0f1419]/80 backdrop-blur-sm"
//     >
//       <div className="max-w-7xl mx-auto px-14 py-6 flex justify-between items-center">
//         <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
//           <span className="text-[#00d4ff]">&lt;</span>
//           <span className="text-white">Shailendra</span>
//           <span className="text-[#00d4ff]">&gt;</span>
//         </div>

//         <div className="flex gap-8">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.label}
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </motion.nav>
//   );
// }



// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navItems = [
//   { label: 'Home', id: 'home' },
//   { label: 'About', id: 'about' },
//   { label: 'Projects', id: 'projects' },
//   { label: 'Contact', id: 'contact' },
// ];

// export default function Navigation() {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setOpen(false); // close menu on click
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-[#0f1419]/80 backdrop-blur-sm"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           className="text-2xl font-bold cursor-pointer"
//           onClick={() => scrollToSection('home')}
//         >
//           <span className="text-[#00d4ff]">&lt;</span>
//           <span className="text-white">Shailendra</span>
//           <span className="text-[#00d4ff]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.label}
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//             className="md:hidden bg-[#0f1419]/95 backdrop-blur-sm"
//           >
//             <div className="flex flex-col items-center gap-6 py-6">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-xl font-medium text-gray-300 hover:text-white"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }







// version 3



// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navItems = [
//   { label: 'Home', id: 'home' },
//   { label: 'About', id: 'about' },
//   { label: 'Projects', id: 'projects' },
//   { label: 'Contact', id: 'contact' },
// ];

// export default function Navigation() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState('home');

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setOpen(false);
//   };

//   // 🔥 Scroll Spy Logic
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     navItems.forEach((item) => {
//       const section = document.getElementById(item.id);
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-[#0f1419]/80 backdrop-blur-sm"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           className="text-2xl font-bold cursor-pointer"
//           onClick={() => scrollToSection('home')}
//         >
//           <span className="text-[#00d4ff]">&lt;</span>
//           <span className="text-white">Shailendra</span>
//           <span className="text-[#00d4ff]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 relative">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`relative text-lg font-medium transition-colors ${
//                 active === item.id
//                   ? 'text-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               {item.label}

//               {active === item.id && (
//                 <motion.div
//                   layoutId="nav-underline"
//                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00d4ff]"
//                   transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//             className="md:hidden bg-[#0f1419]/95 backdrop-blur-sm"
//           >
//             <div className="flex flex-col items-center gap-6 py-6">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`text-xl font-medium ${
//                     active === item.id
//                       ? 'text-[#00d4ff]'
//                       : 'text-gray-300'
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }







// version 4



import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // <motion.nav
    //   initial={{ y: -40, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   className="fixed top-4 left-0 right-0 z-50"

    // >
      <motion.nav
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
  className="fixed top-4 left-0 right-0 z-50"
>

      {/* NAV CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#0f1419]/80 backdrop-blur-md rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg">
          
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-[#00d4ff]">&lt;</span>
            <span className="text-white">Shailendra</span>
            <span className="text-[#00d4ff]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-lg font-medium transition-colors ${
                  active === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}

                {active === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00d4ff]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-6"
          >
            <div className="bg-[#0f1419]/95 backdrop-blur-md rounded-2xl py-6 flex flex-col items-center gap-6 shadow-lg">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xl font-medium ${
                    active === item.id
                      ? 'text-[#00d4ff]'
                      : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
