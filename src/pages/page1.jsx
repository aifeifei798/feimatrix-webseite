import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Cpu, Code, Database, Server } from 'lucide-react';

// --- Mock Data ---
const projects = [
  {
    title: 'Project Cygnus',
    description: 'A decentralized social network built on blockchain technology.',
    tags: ['React', 'Node.js', 'Solidity', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Project Chimera',
    description: 'Real-time neural style transfer application using TensorFlow.js.',
    tags: ['TensorFlow.js', 'Next.js', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Project Hydra',
    description: 'An IoT data pipeline for smart city analytics and visualization.',
    tags: ['Python', 'Kafka', 'Grafana', 'PostgreSQL'],
    link: '#',
  },
];

const skills = [
  { name: 'React / Next.js', icon: <Code size={24} /> },
  { name: 'Node.js / Python', icon: <Server size={24} /> },
  { name: 'PostgreSQL / MongoDB', icon: <Database size={24} /> },
  { name: 'AI / ML Frameworks', icon: <Cpu size={24} /> },
];

// --- Animated Text Component for Hero Section ---
const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.01 },
    }),
  };
  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-100"
    >
      {letters.map((letter, index) => (
        <motion.span variants={childVariants} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};


// --- Main App Component ---
export default function Page1() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 font-sans antialiased relative">
      {/* Background Scanlines Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_5px_rgba(0,246,255,0.5)]">
              &lt;A/V&gt;
            </div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText text="Crafting Digital Realities." />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-4 text-lg md:text-xl text-gray-400"
            >
              A creative developer focused on building immersive and performant web experiences.
            </motion.p>
            <motion.a 
              href="#projects"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mt-8 inline-block px-8 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full shadow-[0_0_15px_rgba(0,246,255,0.5)] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(0,246,255,0.8)] transition-all duration-300"
            >
              View My Work
            </motion.a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">PROJECTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/60 border border-cyan-500/20 rounded-lg p-6 group hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">{tag}</span>)}
                  </div>
                  <a href={project.link} className="text-cyan-400 group-hover:underline">View Project →</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">SKILLS</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 border border-transparent hover:border-cyan-500/30 rounded-lg"
                >
                  <div className="text-cyan-400 mb-3">{skill.icon}</div>
                  <p className="font-semibold">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold mb-4">Get In Touch</p>
          <div className="flex justify-center space-x-6">
             <a href="#" className="text-gray-400 hover:text-cyan-400"><Github size={28} /></a>
             <a href="#" className="text-gray-400 hover:text-cyan-400"><Linkedin size={28} /></a>
             <a href="#" className="text-gray-400 hover:text-cyan-400"><Mail size={28} /></a>
          </div>
          <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} A/V. All rights reserved. System online.</p>
        </div>
      </footer>
    </div>
  );
}