import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scale, Users, Target, ShieldCheck, Milestone, BotMessageSquare, BarChart3, Gem } from 'lucide-react';

// A placeholder 3D model representing Aura's core: timeless design & sustainability.
const AuraModel = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x += delta * 0.1;
  });
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 200, 20]} />
        <meshStandardMaterial color="#EAE0D5" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};

const Section = ({ icon: Icon, title, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative max-w-3xl mx-auto py-24 px-6"
    >
      <div className="flex items-center mb-8">
        <Icon className="w-8 h-8 mr-4 text-amber-200/50" />
        <h2 className="text-4xl md:text-5xl font-serif text-stone-200">{title}</h2>
      </div>
      <div className="prose prose-invert prose-lg max-w-none text-stone-400 prose-headings:text-stone-300 prose-headings:font-serif">
        {children}
      </div>
    </motion.section>
  );
};

export default function AuraStrategyPage() {
  const { scrollYProgress } = useScroll();
  
  const modelOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.03, 0.08], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.08], [0, -100]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);


  return (
    <div className="bg-zinc-950 font-sans cursor-default overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full h-screen">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-7xl md:text-9xl font-serif text-stone-100">Aura</h1>
          <p className="text-lg text-amber-200/70 tracking-widest mt-4">A 3-Year Omnichannel Vision</p>
        </motion.div>
        
        <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 5] }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1.5} />
          
          <motion.group style={{ opacity: modelOpacity }}>
             <AuraModel />
          </motion.group>
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        
        <motion.div 
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 text-sm tracking-widest"
        >
            SCROLL
        </motion.div>
      </header>
      
      <main className="relative z-20 mt-[100vh]">
        <div className="bg-gradient-to-b from-transparent via-zinc-950 to-zinc-950 pt-20">
          <Section title="The Vision" icon={Gem}>
              <p>To navigate a shifting economic landscape and evolving consumer consciousness, this strategy outlines a three-year journey for Aura. Our north star is to harmonize ambitious growth with profound brand equity, ensuring Aura's legacy as a leader in sustainable luxury.</p>
          </Section>

          <Section title="Budget Allocation" icon={Scale}>
            <h4>The Elastic Budget Model</h4>
            <p>We will balance Brand Building and Performance Marketing with a dynamic model. Budgets will flex quarterly based on the Brand Health Index (BHI), ensuring we invest in our story when it needs telling and drive conversion when opportunity knocks.</p>
            <ul>
                <li><strong>Year 1:</strong> 60% Brand / 40% Performance — Establish our narrative and capture new generations.</li>
                <li><strong>Year 2:</strong> 52.5% Brand / 47.5% Performance — Optimize for efficiency and scale.</li>
                <li><strong>Year 3:</strong> 60% Brand / 40% Performance — Consolidate brand equity and drive profitability.</li>
            </ul>
          </Section>

          <Section title="Cross-Generational Creative" icon={Users}>
            <h4>One Core DNA, Many Voices</h4>
            <p>Our core message—"High-quality, Responsible, Timeless"—remains constant. The delivery is tailored.</p>
            <ul>
              <li><strong>Gen Z (TikTok/Reels):</strong> Authentic, entertaining challenges and behind-the-scenes content. Trigger: Community & self-expression.</li>
              <li><strong>Millennials (Instagram/Pinterest):</strong> Aspirational lifestyle stories and aesthetic inspiration. Trigger: Value alignment & life upgrades.</li>
              <li><strong>Gen X (CTV/Podcasts):</strong> In-depth narratives on quality, durability, and expert endorsements. Trigger: Trust & long-term investment.</li>
            </ul>
          </Section>
          
          <Section title="Post-Cookie Measurement" icon={BarChart3}>
              <h4>From Attribution to Insight</h4>
              <p>In a world without third-party cookies, we build our own universe of data. Our framework is layered to capture the full picture of our impact.</p>
              <ol>
                  <li><strong>First-Party Data:</strong> A unified CDP becomes our single source of truth.</li>
                  <li><strong>Holistic Models:</strong> Marketing Mix Modeling (MMM) and Incrementality Testing reveal true channel contribution.</li>
                  <li><strong>Proxy Metrics:</strong> Brand search volume, social sentiment, and NPS provide a constant pulse on our brand's health.</li>
              </ol>
          </Section>
          
          <Section title="Value & Pricing Integrity" icon={ShieldCheck}>
              <h4>Narrate Value, Not Price</h4>
              <p>In an era of price sensitivity, we reinforce our premium by focusing on lifecycle value, not discounts. Promotions are rare, ritualistic, and always reinforce our brand ethos.</p>
              <ul>
                <li><strong>Core Communication:</strong> Emphasize total cost of ownership, carbon footprint savings, and our lifetime warranty.</li>
                <li><strong>Strategic Promotions:</strong> "Eco-Swap" trade-in programs and exclusive member events that enhance perceived value rather than eroding it.</li>
              </ul>
          </Section>

          <Section title="The Roadmap" icon={Milestone}>
            <p>A phased, three-year execution plan ensures methodical progress and agile adaptation.</p>
            <ul>
              <li><strong>2025: Foundation.</strong> Deploy our CDP, codify our brand DNA, and launch our first Z-Gen UGC campaign.</li>
              <li><strong>2026: Expansion.</strong> Scale our media mix to reach Gen X, launch pop-up experiences, and refine our MMM.</li>
              <li><strong>2027: Mastery.</strong> Achieve full integration of our ROI models, launch a comprehensive loyalty program, and attain our target of LTV/CAC ≥ 3.0.</li>
            </ul>
          </Section>
          
          <footer className="text-center py-24 text-stone-600">
            <p>The Aura Strategy. 2025-2027.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}