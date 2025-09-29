// --- START OF FILE 璞玉工坊数字化方案.jsx (占位符版本) ---

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Gem, ArrowDown, Sparkles } from 'lucide-react';

// --- VISUAL ASSETS GALLERY ---
// 未来您只需要在这里替换图片URL，即可更新整个网站的视觉效果
const visualAssets = {
  heroBackground: "https://placehold.co/1920x1080/000000/FFFFFF/png?text=大师雕刻背景图",
  rawJade: "https://placehold.co/800x1200/333333/FFFFFF/png?text=璞玉原石",
  cutJade: "https://placehold.co/800x1200/555555/FFFFFF/png?text=切割后玉石",
  carvedJade: "https://placehold.co/800x1200/777777/FFFFFF/png?text=精雕细琢",
  polishedJade: "https://placehold.co/800x1200/999999/FFFFFF/png?text=抛光入魂",
  finalJadeCta: "https://placehold.co/400x400/1a1a1a/FFFFFF/png?text=传世之璧",
};

// --- FONT INTEGRATION & Tailwind Config (请确保已按之前说明配置) ---

const Section = React.forwardRef(({ children, className = "" }, ref) => (
    <section ref={ref} className={`relative w-full py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="max-w-5xl mx-auto">
            {children}
        </div>
    </section>
));

const HeroSection = () => (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        >
            <img 
                src={visualAssets.heroBackground} 
                alt="老师傅正在专注雕刻玉石" 
                className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center">
            <motion.h1 
                className="font-serif text-5xl md:text-7xl text-white font-bold tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                璞玉有灵 · 匠心传承
            </motion.h1>
            <motion.p 
                className="mt-4 font-sans text-lg md:text-xl text-white/80 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                您的传世技艺，值得被世界看见
            </motion.p>
        </div>

        <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
            <span className="font-sans text-sm text-white/70 mb-2">开启雕琢之旅</span>
            <ArrowDown className="w-6 h-6 text-white animate-bounce" />
        </motion.div>
    </div>
);

const PainPointSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start center', 'end center']
    });

    const opacityCrack = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
    const opacityDust = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 0]);
    const opacityFog = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 0]);
    
    return (
        <Section ref={targetRef} className="h-[300vh] bg-[#f5f3f0]">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="relative w-[400px] h-[600px]">
                    <img src={visualAssets.rawJade} alt="璞玉原石" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center text-center p-8 bg-black/20 rounded-2xl">
                        <AnimatePresence>
                            <motion.div style={{ opacity: opacityCrack }} className="absolute inset-0 flex flex-col items-center justify-center">
                                <h2 className="font-serif text-3xl font-bold text-white drop-shadow-lg">传承危机</h2>
                                <p className="mt-2 text-white/90 drop-shadow-md">璞玉之中，有代代相传的血脉，<br/>亦有后继无人的隐忧。</p>
                            </motion.div>
                            <motion.div style={{ opacity: opacityDust }} className="absolute inset-0 flex flex-col items-center justify-center">
                                <h2 className="font-serif text-3xl font-bold text-white drop-shadow-lg">市场老化</h2>
                                <p className="mt-2 text-white/90 drop-shadow-md">光华内敛，<br/>却难映入新的眼眸。</p>
                            </motion.div>
                            <motion.div style={{ opacity: opacityFog }} className="absolute inset-0 flex flex-col items-center justify-center">
                                <h2 className="font-serif text-3xl font-bold text-white drop-shadow-lg">营销困境</h2>
                                <p className="mt-2 text-white/90 drop-shadow-md">藏于深巷，<br/>与世界隔着一堵无形的墙。</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const SolutionSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end']
    });

    const cutOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const text1Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const carvedOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const text2Opacity = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const polishedOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
    const text3Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

    return (
        <div ref={targetRef} className="relative h-[400vh] bg-black text-white">
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center gap-16">
                <div className="w-[300px] h-[450px] lg:w-[400px] lg:h-[600px] relative">
                    <img src={visualAssets.rawJade} alt="璞玉原石" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                    <motion.img style={{opacity: cutOpacity}} src={visualAssets.cutJade} alt="切割后的玉石" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                    <motion.img style={{opacity: carvedOpacity}} src={visualAssets.carvedJade} alt="精雕细琢的玉石" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                    <motion.img style={{opacity: polishedOpacity}} src={visualAssets.polishedJade} alt="抛光完成的玉器" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-full max-w-md h-[450px] lg:h-[600px] relative text-center lg:text-left">
                    <motion.div style={{opacity: text1Opacity}} className="absolute inset-0 flex flex-col justify-center">
                        <h3 className="font-serif text-4xl font-bold bg-gradient-to-r from-[#a7f3d0] to-[#6ee7b7] text-transparent bg-clip-text">第一刀：破石见光</h3>
                        <p className="mt-4 text-lg text-white/80">让世界初见你的光芒。我们用AI重塑您的品牌故事，通过现代化网站与社交内容矩阵，精准触达新一代的审美之心。</p>
                    </motion.div>
                    <motion.div style={{opacity: text2Opacity}} className="absolute inset-0 flex flex-col justify-center">
                        <h3 className="font-serif text-4xl font-bold bg-gradient-to-r from-[#a7f3d0] to-[#6ee7b7] text-transparent bg-clip-text">第二刀：精雕细琢</h3>
                        <p className="mt-4 text-lg text-white/80">将百年匠心，化为数字时代的传承。我们打造“数字化学徒制度”，通过AR教学与AI评测，让手艺的温度跨越时空。</p>
                    </motion.div>
                    <motion.div style={{opacity: text3Opacity}} className="absolute inset-0 flex flex-col justify-center">
                        <h3 className="font-serif text-4xl font-bold bg-gradient-to-r from-[#a7f3d0] to-[#6ee7b7] text-transparent bg-clip-text">第三刀：抛光入魂</h3>
                        <p className="mt-4 text-lg text-white/80">让每一份匠心，都成为被珍藏的传世资产。我们构建线上商城与数据闭环，让您的作品，找到命中注定的藏家。</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const CtaSection = () => (
    <Section className="bg-[#f5f3f0] text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative inline-block">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                    className="absolute -inset-4"
                >
                    <Sparkles className="w-full h-full text-amber-400/50" />
                </motion.div>
                <img src={visualAssets.finalJadeCta} alt="最终的玉石艺术品" className="relative w-48 h-48 object-cover rounded-full shadow-2xl" />
            </div>
            
            <h2 className="mt-12 font-serif text-5xl md:text-6xl text-[#1a1a1a] font-bold">
                璞玉已成，只待君藏
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                您的传世蓝图已经绘就。现在，是时候为这份匠心，赋予数字时代的永恒生命力。
            </p>
            <motion.button
                className="mt-10 inline-block px-12 py-5 bg-[#1a1a1a] text-white font-serif text-xl tracking-widest rounded-lg shadow-lg transition-transform duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                【 约谈 】
            </motion.button>
        </motion.div>
    </Section>
);

export default function PuyuWorkshopArtisticWebsite() {
  return (
    <div className="font-sans">
      <HeroSection />
      <PainPointSection />
      <SolutionSection />
      <CtaSection />
      <footer className="bg-black text-center py-6 text-sm text-white/50">
        © {new Date().getFullYear()} 飞矩阵 (FeiMatrix) 为 璞玉工坊 献上
      </footer>
    </div>
  );
}

// --- END OF FILE 璞玉工坊数字化方案.jsx (占位符版本) ---