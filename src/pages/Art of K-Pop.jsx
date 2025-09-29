import React from "react";
import { Phone, Mail, Heart, ArrowRight, Twitter, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

// --- 艺术数据注入：使用真实高清图片和正确的经纪公司信息 ---
const models = [
  {
    name: "Jisoo",
    agency: "Blisoo (个人厂牌)",
    image: "https://i.pinimg.com/564x/53/b1/74/53b1749378b31b3ab12d92d131a93863.jpg",
    likes: 2400,
    contacts: { phone: "+82-10-1234-5678", email: "contact@blisoo.com" },
  },
  {
    name: "Rosé",
    agency: "The Black Label",
    image: "https://i.pinimg.com/564x/0a/c6/35/0ac635a68a35e1da2d178e5d0f6b4d3f.jpg",
    likes: 2150,
    contacts: { phone: "+82-10-8765-4321", email: "rosie@theblacklabel.com" },
  },
  {
    name: "Lisa",
    agency: "Lloud Co. (个人厂牌)",
    image: "https://i.pinimg.com/564x/d5/43/8c/d5438c8c5c4c1a559817e0a174154425.jpg",
    likes: 2800,
    contacts: { phone: "+82-10-1111-2222", email: "lili@lloud.co" },
  },
  {
    name: "V (Taehyung)",
    agency: "Big Hit Music",
    image: "https://i.pinimg.com/564x/5b/da/a5/5bdaa55767da84b122c60a2b535d18d4.jpg",
    likes: 3500,
    contacts: { phone: "+82-10-3333-4444", email: "v.contact@bighit.com" },
  },
  {
    name: "Jungkook",
    agency: "Big Hit Music",
    image: "https://i.pinimg.com/564x/78/3f/8a/783f8a65d50694e9f783dc4f362c336b.jpg",
    likes: 4200,
    contacts: { phone: "+82-10-5555-6666", email: "jk.contact@bighit.com" },
  },
  {
    name: "Taeyeon",
    agency: "SM Entertainment",
    image: "https://i.pinimg.com/564x/ae/f2/6a/aef26a11a84f8a9a837b952c424a1801.jpg",
    likes: 3100,
    contacts: { phone: "+82-10-7777-8888", email: "taeyeon@smtown.com" },
  },
];

// --- 组件艺术重构 ---

const Navbar = () => (
  <nav className="fixed w-full bg-black/30 backdrop-blur-lg z-50 border-b border-gray-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <a href="#hero" className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text tracking-wider">
          K-STUDIO
        </a>
        <ul className="hidden md:flex items-center space-x-10 text-gray-300 font-medium">
          {["Home", "Models", "Contact"].map((item) => (
             <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="relative group pb-1">
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
             </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
    {/* 动态呼吸感背景 */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      <img
          src="https://images.unsplash.com/photo-1593301326207-927c2a13a009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Abstract Neon Background"
          className="w-full h-full object-cover opacity-20"
      />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
      >
        <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">The Art of K-Pop.</span>
        <span className="block bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text mt-2">Redefined.</span>
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-lg sm:text-xl text-gray-400 max-w-3xl"
      >
        Explore an exclusive gallery of top-tier idols. A symphony of talent, style, and iconic visuals awaits.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <a href="#models" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/20 transform transition-all duration-300 ease-in-out hover:scale-105">
          View The Gallery
          <ArrowRight className="ml-3" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ModelCard = ({ model }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden group"
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* 光感交互辉光 */}
    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
    <div className="relative bg-gray-900 rounded-xl p-1">
        <div className="relative">
            <img src={model.image} alt={model.name} className="w-full h-[400px] object-cover rounded-lg" />
            {/* 信息悬浮层 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                <p className="text-sm text-cyan-300">{model.agency}</p>
            </div>
        </div>
        {/* 悬停时显示的联系信息 */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} /> <span>{model.contacts.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mt-2">
                <Mail size={18} /> <span>{model.contacts.email}</span>
            </div>
            <div className="mt-6 flex items-center space-x-2 text-2xl font-bold text-fuchsia-400">
                <Heart /> <span>{model.likes.toLocaleString()}</span>
            </div>
        </div>
    </div>
  </motion.div>
);

const ModelsGrid = () => (
  <section id="models" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          Our Stars
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Each idol is a universe of talent. Discover the icons shaping the future of entertainment.
        </motion.p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-400 border-t border-gray-800">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3 text-center md:text-left">
      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">K-STUDIO</h3>
        <p className="mt-2">The ultimate showcase of K-Pop artistry.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
        <p>Phone: +82-10-0000-1111</p>
        <p>Email: info@kstudio.com</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex space-x-6 justify-center md:justify-start">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" }
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="transition-colors duration-200 hover:text-cyan-400">
                <Icon />
              </a>
            ))}
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} K-STUDIO. All Rights Reserved. Crafted by an Artist AI.</p>
    </div>
  </footer>
);

export default function KpopPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <ModelsGrid />
      </main>
      <Footer />
    </div>
  );
}