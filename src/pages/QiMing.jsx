import React from 'react';
import { motion } from 'framer-motion';
import { Feather, BrainCircuit, BookOpen, Sunrise } from 'lucide-react';

// --- A helper component for the narrative scroll effect ---
const StaggeredFadeIn = ({ children, once = true }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }, // A gentle, slow ease
  },
};

// --- Main App Component ---
export default function Page2() {
  const principles = [
    {
      icon: <Feather size={32} className="text-amber-200" />,
      title: '大道至简',
      desc: '于纷繁万象中，洞见本质。启明以极简的结构，承载至繁的智慧。',
    },
    {
      icon: <BrainCircuit size={32} className="text-amber-200" />,
      title: '思接千载',
      desc: '融贯古今之识，跨越时空之界。每一次交互，都是与文明长河的对话。',
    },
    {
      icon: <BookOpen size={32} className="text-amber-200" />,
      title: '润物无声',
      desc: '智慧的生长，应如春雨之默然。启明将深邃的思考，化为无形的助力。',
    },
    {
      icon: <Sunrise size={32} className="text-amber-200" />,
      title: '知行合一',
      desc: '从认知到创造，仅一步之遥。启明不仅是思想的容器，更是行动的开端。',
    },
  ];

  return (
    <div className="bg-slate-900 font-sans text-slate-300 antialiased overflow-x-hidden">
      {/* Act I: The Question */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <StaggeredFadeIn>
          <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-light tracking-wider text-center">
            何以<span className="text-amber-200">启明</span>？
          </motion.h1>
          <motion.p variants={childVariants} className="mt-6 text-lg text-slate-400 text-center">
            在答案之外，我们探寻更深刻的提问。
          </motion.p>
        </StaggeredFadeIn>
      </section>

      {/* Act II: The Unveiling */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-24">
          {principles.map((principle, index) => (
            <StaggeredFadeIn key={index}>
              <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div variants={childVariants} className="flex-shrink-0">
                  {principle.icon}
                </motion.div>
                <motion.div variants={childVariants}>
                  <h2 className="text-3xl font-normal text-amber-200 mb-4">{principle.title}</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">{principle.desc}</p>
                </motion.div>
              </div>
            </StaggeredFadeIn>
          ))}
        </div>
      </section>
      
      {/* Act III: The Core */}
      <section className="py-24 sm:py-32 text-center">
        <StaggeredFadeIn>
          <motion.h2 variants={childVariants} className="text-4xl text-amber-200 font-light tracking-wide mb-4">
            智慧的形态
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            启明系列，是为不同深度的思考而生的思想容器。
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div variants={childVariants} className="border border-slate-800 rounded-xl p-8 bg-slate-900/50">
              <h3 className="text-2xl mb-2">启明 · 观山</h3>
              <p className="text-slate-400">洞察全局，于万象纷呈中把握脉络。</p>
            </motion.div>
            <motion.div variants={childVariants} className="border border-amber-200/20 rounded-xl p-8 bg-slate-800/50 shadow-2xl shadow-amber-200/5">
              <h3 className="text-2xl text-amber-200 mb-2">启明 · 问道</h3>
              <p className="text-slate-400">深入本质，于层层迷雾中探寻真理。</p>
            </motion.div>
            <motion.div variants={childVariants} className="border border-slate-800 rounded-xl p-8 bg-slate-900/50">
              <h3 className="text-2xl mb-2">启明 · 渡海</h3>
              <p className="text-slate-400">跨越未知，于无垠瀚海中开辟新途。</p>
            </motion.div>
          </div>
        </StaggeredFadeIn>
      </section>

      {/* Act IV: The Horizon */}
      <footer className="py-20 text-center border-t border-slate-800">
        <StaggeredFadeIn>
          <motion.p variants={childVariants} className="text-lg text-slate-400">
            当光明被点亮，前路已在脚下。
          </motion.p>
          <motion.div variants={childVariants} className="mt-8">
            <a
              href="mailto:contact@qiming.ai"
              className="text-amber-200 text-xl font-light hover:text-amber-100 transition-colors duration-300"
            >
              contact@feimatrix.com
            </a>
          </motion.div>
        </StaggeredFadeIn>
      </footer>
    </div>
  );
}