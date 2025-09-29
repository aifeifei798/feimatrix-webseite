import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  Clock,
  BookOpen,
  AlertTriangle,
  XOctagon,
} from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "tomb", label: "墓道" },
  { id: "gallery", label: "图鉴" },
  { id: "clues", label: "线索" },
  { id: "exit", label: "离去" },
];

const galleryImages = Array.from({ length: 8 }).map((_, i) => ({
  src: `https://placehold.co/300x200?text=图${i + 1}`,
  alt: `图${i + 1}`,
}));

const cluesData = [
  {
    title: "石门的咯吱",
    icon: Search,
    excerpt:
      "木头在潮湿空气中发出嘎吱，仿佛有人曾尝试开启此门。",
  },
  {
    title: "不死者之路",
    icon: Clock,
    excerpt:
      "石柱刻着古老符文，警示前行者不可停留，否则将成为墓中永生。",
  },
  {
    title: "昆虫的低鸣",
    icon: AlertTriangle,
    excerpt:
      "夜蚀在黑暗中嗡鸣，它们对光线和热能极度敏感，这是唯一的逃脱之道。",
  },
  {
    title: "铜锤与遗失宝物",
    icon: XOctagon,
    excerpt:
      "手中的铜锤是存活的证明，却也提醒自己失去了真正财富——古币与玉佩。",
  },
];

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden"
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/70" />
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative z-10 text-center px-4"
    >
      <h1 className="text-6xl font-extrabold text-yellow-400 mb-4">
        长安古墓
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        在黑暗与腐朽之间，血与铁的呼吸交织成恐怖的乐章。你敢深入探寻那被遗忘的深渊吗？
      </p>
    </motion.div>
  </section>
);

const Tomb = () => (
  <section
    id="tomb"
    className="py-20 bg-gray-900 text-gray-200 px-6 md:px-12 lg:px-24 flex flex-col gap-8"
  >
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-yellow-400 flex items-center gap-3"
    >
      <BookOpen size={36} />
      墓道
    </motion.h2>
    {storyParagraphs.map((p, i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.3, duration: 0.6 }}
        className="text-lg leading-relaxed max-w-4xl mx-auto"
      >
        {p}
      </motion.p>
    ))}
  </section>
);

const storyParagraphs = [
  "李铭从城墙顶端一把扔进地宫深处，脚踩碎石与落叶混杂的腐朽木板。手电筒的光柱在暗红色壁画上跳跃——残破的神祇面容、血迹斑驳的祭礼场景；墙角滴下的水珠仿佛时间的泪痕，哗啦声与他心脏剧烈搏动交织成同一节奏。",
  "“咔嗒。” 他轻抬手电，寻找那张被掩埋数百年的石门。木头在潮湿空气中发出嘎吱，他的汗水从额头滴落，像是对这座废墟无声的敬畏。",
  "他用随身携带的镐子和小钩子，小心翼翼地撬动锁眼。铁环在木制框架下发出沉闷的咯吱，空气瞬间变得刺鼻：腐烂肉体与潮湿土壤混合成一股腥臭，如同被掘走的尸骸正呼吸着。",
  "门缓缓开启，光束照射到一个宽敞而狭长的墓道。石柱之间镌刻着古老符文——“不死者之路”，字迹斑驳，却仍可辨认其凶险与诅咒。",
  "走廊中央，一具骷髅正处于战斗姿态：长矛骨柄向他指去，胸腔内的盔甲碎片像破裂的玻璃般闪烁寒光。他不敢停下脚步，只能加速。背后，是无数张被掩埋、未被发现的棺材——每一处都隐藏着未知的危险。",
  "忽然，墙面上某段浮雕似乎被触碰到：石块轻轻震动，仿佛有人在旁边悄声低吟。李铭抬头望向前方——墓室的尽头，隐藏着一个更大的空间。",
];

const Gallery = () => (
  <section
    id="gallery"
    className="py-20 bg-gray-800 text-yellow-200 px-6 md:px-12 lg:px-24 flex flex-col gap-8"
  >
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-yellow-400 flex items-center gap-3"
    >
      <Search size={36} />
      图鉴
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {galleryImages.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

const Clues = () => (
  <section
    id="clues"
    className="py-20 bg-gray-900 text-gray-200 px-6 md:px-12 lg:px-24 flex flex-col gap-8"
  >
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-yellow-400 flex items-center gap-3"
    >
      <AlertTriangle size={36} />
      线索
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {cluesData.map((clue, i) => {
        const Icon = clue.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="p-6 bg-gray-800 rounded-lg shadow-xl flex items-start gap-4"
          >
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={32} color="#FBBF24" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg text-yellow-400 mb-1">
                {clue.title}
              </h3>
              <p className="text-sm">{clue.excerpt}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

const Exit = () => (
  <section
    id="exit"
    className="py-20 bg-gray-900 text-yellow-200 px-6 md:px-12 lg:px-24 flex flex-col items-center gap-8"
  >
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-extrabold text-yellow-400 flex items-center gap-3"
    >
      <XOctagon size={36} />
      离去
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-lg leading-relaxed max-w-3xl text-center"
    >
      “我会再回来的。” 他在心里低语，声音几乎被风吹散。脚步轻盈地踏向墓园的另一端，背后是无尽尘土与不死者的呼吸；前方，是未知的陷阱和更深层次的诅咒。但此刻，他最渴望的，只是一丝活着的证明——那根被血迹沾染、仍在灯光下闪烁寒光的铜锤。
    </motion.p>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-6 px-4 md:px-12 flex flex-col items-center gap-2">
    <p className="text-sm">
      ©2025 长安古墓 | 你敢在月光下再次踏入这片禁地吗？
    </p>
    <a
      href="#hero"
      className="text-yellow-400 hover:text-yellow-200 transition-colors duration-300"
    >
      回到顶部
    </a>
  </footer>
);

export default function Page3() {
  return (
    <div className="font-sans antialiased text-base leading-relaxed">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-md z-20">
        <ul className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 gap-4 text-yellow-400 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-yellow-200 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <main>
        <Hero />
        <Tomb />
        <Gallery />
        <Clues />
        <Exit />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
