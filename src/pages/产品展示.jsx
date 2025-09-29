import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Heart, Music, Sparkles, Mic, CheckCircle, Play, Pause, ChevronDown } from "lucide-react";

// --- 数据保持不变，艺术在于呈现 ---
const lyrics = [
  "耳膜里的鼓点，敲打在沉默的墙上",
  "空洞的剧本，写满了无人看见的光",
  "如刀刃般的词句，在胸膛里发烫",
  "潜伏的火焰，烧穿了我伪装的霜",
  "破晓之声——第一道光，刺破夜的长廊",
  "我不是哑巴，我只是在等那个时刻",
  "用‘真相’这把钥匙，打开自己的囚笼",
  "星光依旧灿烂，因为我不再隐藏"
];

const sections = {
  concept: {
    title: "概念核心",
    icon: SlidersHorizontal,
    content: (
        <>
            <p className="text-xl leading-relaxed text-cyan-300 font-semibold mb-6">"沉默是一座堡垒，真言是唯一的钥匙。"</p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>女主角在两集中始终装哑——既是执行计划，也是最深层的自我保护。</li>
                <li>每一次呼吸、每一个无声练习，都在为“堡垒”加固钢筋。</li>
                <li>那句“第一次公开讲话”，是对自己、社会与所爱之人的真诚宣告：{" "}
                    <span className="font-bold text-yellow-300 animate-pulse">"我在这里，我想改变这一切。"</span>
                </li>
            </ul>
        </>
    )
  },
  emotions: {
    title: "情绪脉络",
    icon: Heart,
    content: (
        <div className="space-y-6">
            {/* 艺术化的表格替代方案 */}
            {[
                { part: "Verse 1", internal: "紧张、孤独、无助", external: "必须保持哑巴假象", keyword: "耳膜里的鼓点｜空洞的剧本" },
                { part: "Pre-Chorus", internal: "渴望被理解｜内在冲突", external: "一句话关系到国家真相", keyword: "如刀刃般的词句｜潜伏的火焰" },
                { part: "Chorus", internal: "解放、恐惧、坚定", external: "全场注视，话语将被记录", keyword: "破晓之声｜第一道光" },
                { part: "Bridge", internal: "失控、脆弱、觉醒", external: "声音成为身份宣言", keyword: "我不是哑巴，我就是钥匙" },
                { part: "Outro", internal: "平静、满足、自豪", external: "一切取决于她说的话", keyword: "星光依旧灿烂" }
            ].map((row, i) => (
                <div key={i} className="border-l-2 border-gray-700 pl-6 relative hover:border-cyan-400 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                    <h3 className="font-bold text-lg text-white mb-2">{row.part}</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <p><strong className="text-purple-400">内部感受:</strong> {row.internal}</p>
                        <p><strong className="text-pink-400">外部压力:</strong> {row.external}</p>
                        <p><strong className="text-yellow-400">意象:</strong> {row.keyword}</p>
                    </div>
                </div>
            ))}
        </div>
    )
  },
    music: {
    title: "旋律框架",
    icon: Music,
    content: (
        <div className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-purple-400 mb-2 text-lg">Verse</h3>
                <p>低音域持续和弦 (Am–Em–F)，营造“囚笼”氛围。主旋律短小、断裂，如练习中的停顿与呼吸。仅钢琴或木管突出内心声音。</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-pink-400 mb-2 text-lg">Pre-Chorus → Chorus</h3>
                <p>转调至 Bm，音乐产生“逼迫”张力。音阶上升，随后跳到 C 或 D 大调，全乐队加入。“破晓之声”用延长音或颤音突出其重要性。</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-cyan-400 mb-2 text-lg">Bridge & Outro</h3>
                <p>回到 F#m 调式，木管/弦乐低沉独奏表现觉醒。随后再次升华至大调合唱。Outro 剥离外部声音，仅留单音钢琴与轻声独白。</p>
            </div>
        </div>
    )
  },
  imagery: {
      title: "意象灵感",
      icon: Sparkles,
      content: (
          <div className="grid md:grid-cols-2 gap-4">
              {[
                  ["准备时", "喉咙里像是被紧绷的弦，一触即破。", "弦、声、破"],
                  ["观众席凝视", "眼神像巨浪拍岸，我在海底呼吸。", "岸、呼吸、深"],
                  ["说出口瞬间", "唇边颤抖，却像是敲响了钟，所有人都停下脚步。", "钟、停、动"],
                  ["内心独白", "我不是哑巴，我只是在等那个时刻，用‘真相’这把钥匙打开自己的囚笼。", "钥匙/囚笼"]
              ].map((item, i) => (
                  <div key={i} className="border border-gray-700 bg-gray-800/30 p-4 rounded-lg">
                      <strong className="text-white">{item[0]}</strong>
                      <p className="mt-2 text-gray-300">"{item[1]}"</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-gray-700 text-cyan-300 text-xs font-mono rounded-full">{item[2]}</span>
                  </div>
              ))}
          </div>
      )
  },
  performance: {
    title: "演绎建议",
    icon: Mic,
    content: (
      <ol className="list-decimal list-inside space-y-4 text-gray-300">
        <li><strong>前奏：</strong>用细微的鼓点或木管“呼吸”声开场，瞬间建立紧张感。</li>
        <li><strong>第一句台词：</strong>作为即兴演说小节，过渡到 Chorus 旋律。</li>
        <li><strong>动态处理：</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li><span className="text-pink-400 font-semibold">Pre-Chorus:</span> 音量渐强的“压迫”效果，体现内心挣扎。</li>
            <li><span className="text-yellow-300 font-semibold">Chorus:</span> 如“冲破天花板”的巨大释放感，情绪爆发。</li>
          </ul>
        </li>
      </ol>
    )
  },
  summary: {
    title: "一句话总结",
    icon: CheckCircle,
    content: (
        <div className="text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <p className="text-xl font-bold leading-relaxed text-gray-200 mb-4">
                “这首歌不是关于一个女孩冒险嫁给新闻发布人的浪漫，而是关于那句在沉默中被慢慢雕琢、在恐惧里被一点点点燃的‘我’，以及她用来照亮他人眼睛的坚硬真相。”
            </p>
            <div className="flex justify-center items-center space-x-3 mt-6 text-yellow-300">
                <Music size={18} />
                <span className="text-sm font-medium tracking-wider">《破晓之声》—— 每一句沉默，都是对真相的守望</span>
            </div>
        </div>
    )
  }
};

const Page9 = () => {
    const [activeSection, setActiveSection] = useState("concept");
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentLineIndex((prev) => (prev + 1) % lyrics.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const ActiveIcon = sections[activeSection].icon;
    const activeTitle = sections[activeSection].title;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 font-sans bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="flex">
                {/* 艺术化的垂直导航 */}
                <aside className="w-20 md:w-64 bg-gray-900/30 backdrop-blur-sm border-r border-gray-800/50 p-4 md:p-6 flex flex-col h-screen sticky top-0">
                    <div className="flex items-center space-x-3 mb-10">
                        <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-purple-500">🎵</span>
                        <h1 className="hidden md:block text-2xl font-bold text-white">破晓之声</h1>
                    </div>
                    <nav className="flex flex-col space-y-2">
                        {Object.entries(sections).map(([id, { title, icon: Icon }]) => (
                            <button
                                key={id}
                                onClick={() => setActiveSection(id)}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                                    activeSection === id ? 'bg-cyan-500/20 text-cyan-300' : 'hover:bg-gray-800/50 text-gray-400'
                                }`}
                            >
                                <Icon size={20} />
                                <span className="hidden md:block font-medium">{title}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* 主内容区 */}
                <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                    <header className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <ActiveIcon size={28} className="text-cyan-400" />
                            <h2 className="text-3xl font-bold text-white">{activeTitle}</h2>
                        </div>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`flex items-center justify-center w-32 h-12 rounded-full font-semibold transition-all duration-300 text-white shadow-lg ${
                                isPlaying
                                    ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20'
                                    : 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-cyan-500/20'
                            }`}
                        >
                            {isPlaying ? <Pause className="mr-2"/> : <Play className="mr-2"/>}
                            {isPlaying ? "停止" : "播放"}
                        </button>
                    </header>
                    
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/30 p-8 rounded-xl border border-gray-800/50"
                    >
                        {sections[activeSection].content}
                    </motion.div>

                    {/* 艺术化的歌词播放器和声波 */}
                    <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-yellow-300/20"
                        >
                            <h3 className="text-lg font-bold text-center mb-4 text-yellow-300">✨ 当前歌词</h3>
                            <div className="text-center text-2xl text-white leading-relaxed font-semibold">
                                {lyrics[currentLineIndex]}
                            </div>
                            {/* 模拟声波 */}
                            <div className="flex justify-center items-center space-x-1 mt-6 h-10">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-yellow-300"
                                        animate={{ height: [2, 20, 5, 15, 4, 25, 8, 2, 20, 5, 15, 4, 25, 8, 2, 20, 5, 15, 4, 25].map(h => h * (Math.sin(i) + 1.5)) }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>

                    <footer className="mt-16 text-center text-gray-600 border-t border-gray-800 pt-8">
                        <p>《破晓之声》—— 每一句沉默，都是对真相的守望</p>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Page9;