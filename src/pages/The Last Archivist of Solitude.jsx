import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Icosahedron } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, ChevronDown } from 'lucide-react';

// Narrative text blocks from the story
const storySections = [
    `I am lying on the interface table, a lattice of silver filaments pressed against my scalp like a crown of thorns... it is the low‑frequency thrum of a thousand frozen worlds keeping their breath for me.`,
    `The archive is an orbital cathedral, a lattice of crystalline pods suspended in microgravity like lanterns in a void. Each pod cradles the final memory of an extinct species...`,
    `A new label flickers into existence on my HUD. It is a single line of plaintext: Subject: You. My pulse... spikes for the first time in decades.`,
    `The pod labeled “Subject: You” slides open... A thin filament of light—pure data—spools into my vision... I am standing in a city I have never seen.`,
    `A woman with eyes like liquid mercury looks directly at me. “It’s about time you arrived.” The words vibrate against the interior of my skull.`,
    `The scene fractures... The woman’s voice returns: “There are many versions of you... All the futures we could have imagined… they live here now.”`,
    `The memory capsule is not a simple recording; it is a narrative—a story that contains within it entire possible worlds.`,
    { 
      type: 'highlight', 
      content: `“This archive does not store past. It constructs future.”`,
      icon: BrainCircuit
    },
    `The memories are being used as seeds, not as tombstones... My own mind is now part of that tapestry; I am both weaver and thread.`,
    `A voice emerges... “Archivist 12‑B-7, your lifespan is nearing its predetermined threshold. Initiate final protocol.”`,
    `The weight of silence has lifted entirely now, replaced by something almost tangible: the feeling that all moments—past, present, possible future—co‑exist within this endless vault of memory.`,
    `My final thought... is a question that hangs in the vacuum of my mind: If the archive writes futures, then who—if anyone—gets to choose which ones?`,
    `I am both keeper and story.`,
    { 
      type: 'final', 
      content: `Subject: You – Archive 9`
    },
];

// 3D Scene Components
function Pod({ position }) {
    const ref = useRef();
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y += delta * 0.1;
        ref.current.rotation.x += delta * 0.05;
        ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
    });

    return (
        <Icosahedron ref={ref} args={[0.8, 1]} position={position}>
            <meshPhysicalMaterial
                roughness={0.1}
                transmission={1}
                thickness={1.5}
                color="#87CEEB"
                transparent
                opacity={0.8}
            />
        </Icosahedron>
    );
}

function Scene3D() {
    const { scrollYProgress } = useScroll();
    const { viewport } = useThree();
    const cameraGroup = useRef();

    useFrame((state) => {
        const scroll = scrollYProgress.get();
        cameraGroup.current.position.y = -scroll * viewport.height * (storySections.length / 2);
        cameraGroup.current.rotation.z = -scroll * 0.1;
        state.camera.lookAt(0, cameraGroup.current.position.y, 0);
    });
    
    const podCount = 40;
    const pods = Array.from({ length: podCount }, (_, i) => {
        const angle = (i / podCount) * Math.PI * 2;
        const radius = 4 + Math.random() * 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = -5 - (i * 2.5);
        return <Pod key={i} position={[x, y, z]} />;
    });

    return (
        <group ref={cameraGroup}>
            <Stars radius={150} depth={50} count={5000} factor={5} saturation={0} fade speed={1.2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2.0} color="#AFDBF5"/>
            {pods}
        </group>
    );
}

// UI Components
const NarrativeBlock = ({ children, index, total }) => {
    const { scrollYProgress } = useScroll();
    
    const start = index / total;
    const end = (index + 1) / total;

    const opacity = useTransform(
      scrollYProgress,
      [start, start + 0.05, end - 0.05, end],
      [0, 1, 1, 0]
    );

    const y = useTransform(
      scrollYProgress,
      [start, end],
      ['50px', '-50px']
    );

    return (
        <motion.div 
            style={{ opacity, y }} 
            className="absolute inset-0 flex items-center justify-center p-6"
        >
            <div className="w-full max-w-3xl text-center text-slate-300 font-light leading-relaxed text-lg md:text-xl">
              {children}
            </div>
        </motion.div>
    );
};

const CinematicHeader = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

    return (
        <motion.div style={{ opacity, scale }} className="h-screen w-full flex flex-col items-center justify-center text-center fixed top-0 left-0 z-20">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wider">
                The Last Archivist of Solitude
            </h1>
            <p className="text-cyan-300 text-lg">A scroll-driven narrative experience</p>
            <div className="absolute bottom-10 animate-pulse">
                <ChevronDown className="w-8 h-8 text-white" />
            </div>
        </motion.div>
    );
};

// Main Page Component
export default function ArchivistPage() {
    return (
        <div className="bg-black text-white selection:bg-cyan-500 selection:text-black">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <Suspense fallback={null}>
                    <Canvas>
                        <Scene3D />
                    </Canvas>
                </Suspense>
            </div>
            
            <CinematicHeader />
            
            <div style={{ height: `${storySections.length * 120}vh` }} className="relative">
                <div className="sticky top-0 h-screen overflow-hidden">
                    {storySections.map((section, index) => (
                        <NarrativeBlock key={index} index={index} total={storySections.length}>
                            {typeof section === 'object' ? (
                                <>
                                  {section.type === 'highlight' && (
                                    <div className="flex flex-col items-center">
                                      {section.icon && <section.icon className="w-10 h-10 text-cyan-400 mb-4 animate-pulse" />}
                                      <p className="text-3xl text-cyan-200 font-serif italic">"{section.content}"</p>
                                    </div>
                                  )}
                                  {section.type === 'final' && (
                                     <p className="text-4xl text-white font-serif tracking-widest">{section.content}</p>
                                  )}
                                </>
                            ) : (
                                <p>{section}</p>
                            )}
                        </NarrativeBlock>
                    ))}
                </div>
            </div>
        </div>
    );
}