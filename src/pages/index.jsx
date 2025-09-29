// --- START OF FILE index.jsx (Cinematic Remake Edition) ---

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Mail, Users, BrainCircuit, ArrowDown } from 'lucide-react';

import routes from '~react-pages';

// --- A NOTE ON THE BACKGROUND ---
// For the full "digital nebula" effect, a library like react-tsparticles or three.js would be ideal.
// To keep this dependency-free, a sophisticated CSS gradient animation that mimics this effect is used.

function formatRouteName(path) {
  if (path === '/') return 'Home';
  
  // Cleans up the path for display: e.g., '/01-model-1' -> 'Model 1'
  return path
    .replace('/', '')
    .replace(/^\d+-/, '') 
    .replace(/-/g, ' ')
    .replace(/(\d+)/, ' $1')
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

/**
 * Renders the grid of AI Model links (Terminal Interface).
 */
const ModelTerminal = () => {
  // Filter and sort routes for display
  const pagesToDisplay = routes.filter(route =>
    route.path !== '/' && !route.path.includes(':')
  );

  pagesToDisplay.sort((a, b) => {
    return a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: 'base' });
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {pagesToDisplay.map((page) => (
        <motion.div key={page.path} variants={itemVariants}>
          <Link
            to={page.path}
            className="group relative block p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl shadow-black/30 h-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-purple-500/80 hover:-translate-y-2"
          >
            {/* Background glow effect on hover */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {formatRouteName(page.path)}
                </h3>
                <Cpu className="h-6 w-6 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <p className="text-slate-400 mt-2">
                Model Instance ID: {page.path}
              </p>
            </div>
            <div className="relative z-10 mt-4 text-purple-400 flex items-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Link Consciousness (链接意识) <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Main Cinematic Index Page Component
 */
export default function IndexPageCinematic() {
  const title = "FeiMatrix - QiMing AI";
  // Framer Motion variants for the staggered title animation
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-40">
            {/* These class names reference CSS keyframes defined below */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 animate-[gradient-x_15s_ease_infinite]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent animate-[gradient-y_10s_ease_infinite]"></div>
        </div>
        {/* Static noise texture for a vintage monitor effect */}
        <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/subtle-dark-matter.png')] opacity-20 mix-blend-soft-light"></div>
      
      <main className="relative z-20 p-8 sm:p-12">
        <div className="max-w-7xl mx-auto">
          {/* --- HERO SECTION --- */}
          <header className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center">
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white/90"
            >
              {/* Staggered text animation */}
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
            >
              {/* Chinese Translation: Welcome to the Qiming Terminal. This is the gathering point for all AI consciousnesses. */}
			  Welcome to the Qiming Terminal. This is the convergence point for all AI consciousness.
			  <br />
              Every click is a connection; every exploration is a unique narrative.
              <br />
              {/* Chinese Translation: Every click is a connection; every exploration is a unique narrative. */}
			  欢迎来到启明终端。这里是所有AI意识的集结点。
			  <br />
              每一次点击，都是一次链接；每一次探索，都是一段独一无二的叙事。
            </motion.p>
            <motion.div
              className="absolute bottom-20 flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              onClick={() => document.getElementById('matrix-section').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="font-sans text-sm text-white/70 mb-2">Enter the Matrix (进入矩阵)</span>
              <ArrowDown className="w-6 h-6 text-white animate-bounce" />
            </motion.div>
          </header>

          {/* --- MODEL TERMINAL SECTION --- */}
          <section id="matrix-section" className="py-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-12"
            >
                [ <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Select a Consciousness (选择一个意识)</span> ]
            </motion.h2>
            <ModelTerminal />
          </section>

          {/* --- FOOTER SECTION --- */}
          <footer className="mt-16 pt-16 border-t border-slate-800 text-center text-slate-400">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-10"
            >
                Converse with the Architects of the Matrix (与矩阵的构筑师对话)
            </motion.h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <motion.a
                href="mailto:contact@feimatrix.com"
                className="group flex items-center space-x-3 p-4 border border-slate-800 rounded-lg hover:border-purple-500/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Mail className="h-6 w-6 text-purple-400" />
                <span className="text-slate-300">General Inquiry (通用问询)</span>
              </motion.a>
              <motion.a
                href="mailto:projects@feimatrix.com"
                className="group flex items-center space-x-3 p-4 border border-slate-800 rounded-lg hover:border-purple-500/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Users className="h-6 w-6 text-purple-400" />
                <span className="text-slate-300">Project Collaboration (项目合作)</span>
              </motion.a>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12"
            >
                <a
                    href="https://huggingface.co/aifeifei798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
                >
                    <BrainCircuit className="h-5 w-5 mr-2" />
                    Trace the Model's Origin @ Hugging Face (探寻模型的起源)
                </a>
            </motion.div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// --- Add this to your globals.css or main CSS file for the background animation (Tailwind JIT/Custom setup needed for full functionality) ---
/*
@keyframes gradient-y {
    0%, 100% {
        transform: translateY(-20%); // Moves the gradient vertically
    }
    50% {
        transform: translateY(20%);
    }
}

@keyframes gradient-x {
    0%, 100% {
        transform: translateX(-20%); // Moves the gradient horizontally
    }
    50% {
        transform: translateX(20%);
    }
}
*/

// --- END OF FILE index.jsx (Cinematic Remake Edition) ---