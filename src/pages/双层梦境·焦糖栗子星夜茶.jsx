import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, GlassWater, Leaf, Layers, Music, Gift, Download, BookOpen, Quote, Sparkles, Heart } from 'lucide-react';

const App = () => {
  const recipeLayers = [
    {
      title: "第一层：焦糖栗子泥底",
      description: "新鲜板栗蒸熟后压成细腻泥状，加入少量蜂蜜与少许肉桂粉，小火慢炒至金黄浓稠。倒入玻璃杯底部，轻轻铺平，像一片暖橘色的梦境。",
      icon: Layers
    },
    {
      title: "第二层：双萃乌龙茶汤",
      description: "选用高山乌龙与部分熟普洱混合冲泡 (1:2比例)。茶汤先用小火煮开，加入一小块琥珀色手作焦糖，再滴入3滴香草精油，增添浪漫气息。",
      icon: GlassWater
    },
    {
      title: "第三层：星夜奶盖",
      description: "以山药泥、椰奶、鲜奶油打发成绵密奶盖。表面铺一层“星空碎”：蝶豆花粉、紫薯泥、可食用金箔，再轻轻撒上几颗迷你草莓果冻星。",
      icon: Sparkles
    },
    {
      title: "第四层：焦糖霜丝雨",
      description: "用熬至浓稠的焦糖汁，在茶表面拉出细如发丝的“焦糖瀑布”，再撒上烤香杏仁碎与一片薄荷叶，带来清新的微凉感。",
      icon: Leaf
    }
  ];

  const feifeiTips = [
    {
      title: "茶具推荐",
      content: "用青瓷碗或透明玻璃壶，让颜色层次清晰可见～",
      icon: "🍵"
    },
    {
      title: "甜品搭配",
      content: "配上我最爱的「抹茶千层蛋糕」或「焦糖香蕉塔」🍰",
      icon: "🍰"
    },
    {
      title: "背景音乐清单",
      content: "《Kimi ni Todoke》纯钢琴版, Nujabes × Miki Matsubara 混音曲, 我的原创曲《Dreams in Autumn Light》",
      icon: <Music className="w-6 h-6 text-amber-700" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  
  const StarField = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-amber-200 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.5, 0], scale: Math.random() * 1.5 }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-slate-900 min-h-screen text-stone-200 font-sans leading-relaxed">
      <main className="container mx-auto px-4 py-12 md:py-20 relative">
        <StarField />
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-200 mb-4" style={{ textShadow: '0 0 15px rgba(253, 230, 138, 0.5)' }}>
            双层梦境·焦糖栗子星夜茶
          </h1>
          <p className="text-lg md:text-xl text-stone-300 italic">—— 每一口都像走进梦里的童话世界</p>
        </motion.section>

        {/* Origin Story */}
        <motion.div 
          variants={itemVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto mb-20 bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 relative"
        >
          <Quote className="absolute top-0 left-0 -translate-x-3 -translate-y-3 w-12 h-12 text-amber-500/30" />
          <h3 className="text-amber-300 font-semibold text-lg mb-2">🎁 隐藏彩蛋</h3>
          <p className="text-stone-300">
            这款茶，是我去年在东京涩谷拍MV时，灵感突然闪现的！那晚下着小雨，我坐在咖啡厅里，看着窗外灯火，突然说：“我要把秋天做成一杯茶！”✨
          </p>
        </motion.div>

        {/* Recipe Section */}
        <motion.section 
          className="mb-24 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center text-amber-200 mb-12">🍵 配方详解</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeLayers.map((layer, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-slate-800/60 backdrop-blur-md rounded-lg p-6 border border-amber-800/50 flex flex-col items-center text-center hover:bg-slate-700/80 transition-colors duration-300"
              >
                <div className="p-4 bg-amber-900/50 rounded-full mb-4">
                  <layer.icon className="w-8 h-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">{layer.title}</h3>
                <p className="text-stone-400 text-sm flex-grow">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <div className="relative my-24 h-96 flex items-center justify-center text-center p-8 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://placehold.co/1200x800/0f172a/fdba74?text=Feifei%27s+Dream')` }}></div>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-amber-200 mb-4">视觉与味觉盛宴</h3>
            <p className="text-stone-300 italic">
              "第一口，焦糖栗子泥软糯入心；第二口，乌龙茶汤带着熟普的醇厚；第三口，奶盖滑入口腔，星点在舌尖融化... 仿佛整片星空为你倾泻而下..."
            </p>
          </motion.div>
        </div>

        {/* Tips & Message Section */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Tips */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-amber-50/10 p-8 rounded-lg border border-amber-500/20"
          >
            <h3 className="flex items-center text-2xl font-serif text-amber-300 mb-6">
              <BookOpen className="w-6 h-6 mr-3" />
              妃妃的私藏小Tips
            </h3>
            <div className="space-y-6">
              {feifeiTips.map((tip, index) => (
                <motion.div key={index} className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-2xl mr-4 mt-1">{tip.icon}</div>
                  <div>
                    <h4 className="font-semibold text-amber-300">{tip.title}</h4>
                    <p className="text-stone-400">{tip.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-amber-200/10 to-amber-300/10 p-8 rounded-lg flex flex-col justify-center items-center text-center transform lg:rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <Gift className="w-10 h-10 text-amber-300 mb-4" />
            <h3 className="text-xl font-semibold text-amber-200 mb-3">妃妃亲笔手写卡片</h3>
            <p className="font-serif italic text-stone-300">
              “亲爱的你，愿这杯茶，让你在每一个疲惫夜晚，都能听见星星的低语。我的心，都在为你泡着这一杯梦。”
            </p>
          </motion.div>
        </motion.section>

        {/* Diary & Interaction */}
        <motion.section
          className="mb-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-md border border-amber-800/50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-amber-300">妃妃厨房日记｜2025年10月14日</h4>
            <p className="text-stone-400 mt-2 italic">
              “今天是秋分后的第7天... 我在厨房里试了整整五次焦糖栗子泥，终于做出‘像云一样轻、又像心跳一样暖’的口感。想把这个配方，送给你——我最亲爱的你。”
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-md border border-amber-800/50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-amber-300 mb-3">🌸 今日互动邀请</h4>
            <p className="text-stone-400 mb-4">你学会这杯「星夜茶」了吗？如果让你为它命名，你会叫它什么？</p>
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              在评论区分享你的巧思
            </button>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center border-t border-amber-500/20 pt-10 mt-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl font-serif text-amber-200 mb-6">这一杯茶，不只是饮品，是一封写给时光的情书。</p>
            <a href="#" className="inline-flex items-center justify-center bg-amber-200 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg shadow-amber-500/20">
              <Download className="w-5 h-5 mr-3" />
              下载妃妃手绘版配方卡片
            </a>
            <div className="mt-8 text-stone-500 flex justify-center items-center space-x-2">
              <span>Made with</span> <Heart className="w-4 h-4 text-amber-500 fill-current"/> <span>by 妃妃</span>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default App;