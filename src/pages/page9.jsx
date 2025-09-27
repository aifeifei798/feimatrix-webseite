import { useState, useEffect } from "react";

const Page9 = () => {
  const [activeSection, setActiveSection] = useState("concept");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Mock lyrics with emotion mapping
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

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentLineIndex((prev) => (prev + 1) % lyrics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, lyrics.length]);

  // Section data
  const sections = [
    {
      id: "concept",
      title: "概念核心",
      icon: "💬",
      content: (
        <div className="space-y-4 text-lg leading-relaxed">
          <p className="text-blue-600 font-semibold">"沉默是一座堡垒，真言是唯一的钥匙。"</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>女主角在两集中始终装哑——既是执行计划，也是最深层的自我保护</li>
            <li>每一次呼吸、每一个无声练习，都在为“堡垒”加固钢筋</li>
            <li>那句“第一次公开讲话”，是对自己、社会与所爱之人的真诚宣告：{" "} 
              <span className="font-bold text-red-600">"我在这里，我想改变这一切。"</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "emotions",
      title: "情绪脉络",
      icon: "❤️",
      content: (
        <div className="space-y-4 text-lg leading-relaxed">
          <table className="w-full border-collapse border border-gray-200 overflow-x-auto">
            <thead>
              <tr className="bg-gray-50 font-semibold">
                <th className="border p-3 text-center">段落</th>
                <th className="border p-3 text-center">内部感受</th>
                <th className="border p-3 text-center">外部压力</th>
                <th className="border p-3 text-center">关键字/意象</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Verse 1", "紧张、孤独、无助", "必须保持哑巴假象", "耳膜里的鼓点｜空洞的剧本"],
                ["Pre-Chorus", "渴望被理解｜内在冲突", "一句话关系到国家真相", "如刀刃般的词句｜潜伏的火焰"],
                ["Chorus", "解放、恐惧、坚定", "全场注视，话语将被记录", "破晓之声｜第一道光"],
                ["Bridge", "失控、脆弱、觉醒", "声音成为身份宣言", "我不是哑巴，我就是钥匙"],
                ["Outro", "平静、满足、自豪", "一切取决于她说的话", "星光依旧灿烂"]
              ].map((row, i) => (
                <tr key={i} className={`hover:bg-gray-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  {row.map((cell, j) => (
                    <td key={j} className="border p-3 text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: "music",
      title: "和弦与旋律框架",
      icon: "🎵",
      content: (
        <div className="space-y-4 text-lg leading-relaxed">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-300">
            <h3 className="font-bold text-purple-800 mb-2">Verse</h3>
            <p>使用低音域持续和弦（Am–Em–F），营造“囚笼”氛围。</p>
            <p><strong>主旋律：</strong>短小、断裂，如练习中的停顿与呼吸。</p>
            <p><strong>配器：</strong>仅钢琴或木管，突出内心声音。</p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-300">
            <h3 className="font-bold text-orange-800 mb-2">Pre-Chorus → Chorus</h3>
            <p>转调至 Bm（Am 的第二度），音乐产生“逼迫”张力。</p>
            <p>音阶上升，为爆发做准备；随后跳到 C 或 D 大调，全乐队加入，鼓点有节奏感。</p>
            <p><strong>"破晓之声"：</strong>延长音或颤音突出其重要性。</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-300">
            <h3 className="font-bold text-green-800 mb-2">Bridge & Outro</h3>
            <p>回到 F#m 调式，木管/弦乐低沉独奏，表现觉醒。</p>
            <p>随后再次升华至大调合唱，“钥匙”宣言显得磅礴。</p>
            <p><strong>Outro：</strong>剥离外部声音，仅留单音钢琴与轻声独白，画面定格在她微笑闭眼的瞬间。</p>
          </div>
        </div>
      )
    },
    {
      id: "imagery",
      title: "具体意象与押韵灵感",
      icon: "✨",
      content: (
        <div className="space-y-4 text-lg leading-relaxed">
          {[
            ["准备时", "喉咙里像是被紧绷的弦，一触即破。", "弦、声、破"],
            ["观众席凝视", "眼神像巨浪拍岸，我在海底呼吸。", "岸、呼吸、深"],
            ["说出口瞬间", "唇边颤抖，却像是敲响了钟，所有人都停下脚步。", "钟、停、动"],
            ["内心独白", "我不是哑巴，我只是在等那个时刻，用‘真相’这把钥匙打开自己的囚笼。", "笨/不笨"]
          ].map((item, i) => (
            <div key={i} className="border-l-4 pl-4 border-blue-300 bg-blue-50 p-4 rounded-r-lg">
              <strong className="text-blue-700">{item[0]}</strong>
              <p className="mt-1 text-gray-700">"{item[1]}"</p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-xs font-mono rounded">
                {item[2]}
              </span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "performance",
      title: "录音与演绎建议",
      icon: "🎛️",
      content: (
        <div className="space-y-4 text-lg leading-relaxed">
          <ol className="list-decimal list-inside space-y-3 ml-5">
            <li><strong>前奏：</strong>用细微的鼓点或木管“呼吸”声开场，瞬间建立紧张感。</li>
            <li><strong>第一句台词：</strong>作为即兴演说小节，过渡到 Chorus 旋律。</li>
            <li><strong>动态处理：</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Pre-Chorus：音量渐强的“压迫”效果，体现内心挣扎</li>
                <li>Chorus：如“冲破天花板”的巨大释放感，情绪爆发</li>
              </ul>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: "summary",
      title: "一句话总结",
      icon: "🌟",
      content: (
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-xl border border-gray-600 shadow-lg">
          <p className="text-xl font-bold leading-relaxed mb-4">
            “这首歌不是关于一个女孩冒险嫁给新闻发布人的浪漫，  
            而是关于那句在沉默中被慢慢雕琢、在恐惧里被一点点点燃的‘我’，  
            以及她用来照亮他人眼睛的坚硬真相。”
          </p>
          <div className="flex justify-center items-center space-x-2 mt-6">
            <span className="text-yellow-300">🎵</span>
            <span className="text-sm font-medium">《破晓之声》—— 每一句沉默，都是对真相的守望</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">🎵</span>
            <h1 className="text-3xl font-bold text-indigo-700">《破晓之声》</h1>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
            }`}
          >
            {isPlaying ? "⏸️ 停止" : "▶️ 播放"}
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className={`transition-all duration-500 ${activeSection === "summary" ? 'opacity-100' : 'opacity-70'}`}>
          {sections.find(s => s.id === activeSection)?.content}
        </div>

        {/* Live Lyrics Display */}
        {isPlaying && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-300 animate-pulse">
            <h3 className="text-xl font-bold text-center mb-4 text-indigo-700">✨ 当前歌词</h3>
            <div className="text-center text-lg text-gray-800 leading-relaxed font-medium">
              {lyrics[currentLineIndex]}
            </div>
          </div>
        )}

        {/* Visual Effects */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-gradient-to-br ${
                i === 0 ? 'from-blue-50 to-indigo-100' :
                i === 1 ? 'from-green-50 to-teal-100' :
                'from-purple-50 to-pink-100'
              } border border-dashed border-gray-200 transition-all duration-300 hover:shadow-md hover:border-indigo-400`}
            >
              <div className="text-3xl mb-3">{i === 0 ? "🔥" : i === 1 ? "💡" : "🌟"}</div>
              <h3 className="font-bold text-lg">情绪之光</h3>
              <p className="mt-2 text-sm opacity-80">
                {i === 0 && "从沉默到爆发的火焰"}
                {i === 1 && "内在觉醒的微光"}
                {i === 2 && "真相照进世界的星光"}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 border-t pt-8">
          <p>✨ 《破晓之声》—— 每一句沉默，都是对真相的守望</p>
          <p className="text-sm mt-2">设计灵感来自真实的创作情绪与艺术表达</p>
        </footer>
      </main>

      {/* Floating Decorative Element */}
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
    </div>
  );
};

export default Page9;