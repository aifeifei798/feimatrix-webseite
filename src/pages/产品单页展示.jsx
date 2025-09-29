import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 p-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent"
        >
          《破晓之声》
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          “沉默是一座堡垒，真言是唯一的钥匙。”  
          —— 这首歌献给每一个在黑暗中等待破晓的人。
        </p>
      </header>

      {/* Emotional Journey Section */}
      <section className="relative z-10 px-8 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-pink-200 to-indigo-200 bg-clip-text text-transparent">
            情绪脉络：一场灵魂的旅程
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Verse 1",
                feeling: "紧张、孤独、无助",
                pressure: "必须保持哑巴假象，不能让任何人怀疑她",
                imagery: "耳膜里的鼓点｜空洞的剧本"
              },
              {
                title: "Pre-Chorus",
                feeling: "渴望被理解、内在冲突",
                pressure: "一句话关系到国家真相，失手后果极端",
                imagery: "如刀刃般的词句｜潜伏的火焰"
              },
              {
                title: "Chorus",
                feeling: "解放、恐惧、坚定",
                pressure: "全场注视，她的声音将被记录与解读",
                imagery: "破晓之声｜第一道光"
              },
              {
                title: "Bridge",
                feeling: "失控、脆弱、觉醒",
                pressure: "她明白声音已不仅是工具，而是身份宣言",
                imagery: "我不是哑巴，我就是钥匙"
              },
              {
                title: "Outro / Fade-Out",
                feeling: "平静、满足、自豪",
                pressure: "一切取决于她说的话，但‘破晓之声’已在空气中炸裂",
                imagery: "星光依旧灿烂，因为我不再隐藏"
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-pink-300 pl-6 hover:border-purple-300 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
                  <p><strong>内部感受：</strong>{item.feeling}</p>
                  <p><strong>外部压力：</strong>{item.pressure}</p>
                  <p><strong>关键意象：</strong>{item.imagery}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Musical Framework Section */}
      <section className="relative z-10 px-8 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-3xl p-8 border border-indigo-400/30 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            和弦与旋律：声音的结构
          </h2>
          
          <div className="space-y-6">
            {[
              {
                part: "Verse",
                key: "Am–Em–F",
                mood: "囚笼氛围",
                melody: "短小、断裂，像练习中的停顿与呼吸",
                instruments: "钢琴或木管"
              },
              {
                part: "Pre-Chorus",
                key: "Bm (Am的第二度)",
                mood: "逼迫张力",
                melody: "音阶上升，准备爆发",
                instruments: "微妙转调，增强紧张感"
              },
              {
                part: "Chorus",
                key: "C Major 或 D Major",
                mood: "强烈释放",
                melody: "连贯高昂，全乐队加入，鼓点有节奏",
                instruments: "所有乐器齐奏，旋律延长音突出"
              },
              {
                part: "Bridge",
                key: "F#m",
                mood: "内心挣扎与觉醒",
                melody: "低沉独奏后升华至大调合唱",
                instruments: "木管/弦乐 → 大调合唱"
              },
              {
                part: "Outro",
                key: "渐弱回归",
                mood: "宁静与完成",
                melody: "剥离外部声音，仅留钢琴/吉他对话",
                instruments: "单音钢琴 + 轻声独白"
              }
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-cyan-300 pl-6 hover:border-blue-300 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-pink-100">{item.part}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
                  <p><strong>和弦/调式：</strong>{item.key}</p>
                  <p><strong>情绪氛围：</strong>{item.mood}</p>
                  <p><strong>旋律设计：</strong>{item.melody}</p>
                  <p><strong>配器建议：</strong>{item.instruments}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Imagery & Sound Section */}
      <section className="relative z-10 px-8 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-200 to-teal-200 bg-clip-text text-transparent">
            场景意象与声音设计
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                scene: "准备时刻",
                sound: "喉咙里像是被紧绷的弦，一触即破",
                rhyme: "弦、声、破"
              },
              {
                scene: "观众席凝视",
                sound: "眼神像巨浪拍岸，我在海底呼吸",
                rhyme: "岸、呼吸、深"
              },
              {
                scene: "说出瞬间",
                sound: "唇边颤抖，却像是敲响了钟，所有人都停下脚步",
                rhyme: "钟、停、动"
              },
              {
                scene: "内心独白",
                sound: "我不是哑巴，我只是在等那个时刻，用‘真相’这把钥匙打开自己的囚笼",
                rhyme: "笨/不笨（内部押韵）"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6 border border-green-300/50">
                <h3 className="text-xl font-semibold mb-3 text-yellow-100">{item.scene}</h3>
                <p className="mb-2 leading-relaxed"><strong>声音/形象：</strong>{item.sound}</p>
                <p className="text-sm italic bg-gradient-to-r from-green-200 to-teal-200 bg-clip-text text-transparent">
                  {item.rhyme}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Summary & Call to Action */}
      <section className="relative z-10 px-8 py-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-pink-800/50 to-purple-800/50 backdrop-blur-lg rounded-3xl p-12 border border-yellow-400/50 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-100 to-indigo-100 bg-clip-text text-transparent">
            总结一句话
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto italic text-gray-100 font-light mb-8">
            “这首歌不是关于一个女孩冒险嫁给新闻发布人的浪漫，  
            而是关于那句在沉默中被慢慢雕琢、在恐惧里被一点点点燃的‘我’，  
            以及她用来照亮他人眼睛的坚硬真相。”
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-pink-400 to-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              听一听《破晓之声》
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              在纸上写下你的破晓之言
            </motion.button>
          </div>

          <div className="mt-12">
            <p className="text-sm italic text-gray-300 max-w-xl mx-auto">
              由一个沉默的她，写给所有在黑暗中等待光的人。
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-6 text-center text-gray-300 border-t border-purple-500/20">
        <p>© 2024 《破晓之声》创作项目 | 献给每一个敢于说真话的灵魂</p>
      </footer>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed bottom-1/4 right-1/4 w-3 h-3 bg-indigo-300 rounded-full animate-bounce opacity-50"></div>
    </div>
  );
}
