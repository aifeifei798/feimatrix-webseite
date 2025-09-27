import React from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const models = [
  {
    name: "Jisoo",
    agency: "SM Entertainment",
    image: "https://placehold.co/600x800?text=Jisoo",
    likes: 1200,
    contacts: { phone: "+82-10-1234-5678", email: "j.isoo@sme.com" },
  },
  {
    name: "Rosé",
    agency: "YG Entertainment",
    image: "https://placehold.co/600x800?text=Rosé",
    likes: 950,
    contacts: { phone: "+82-10-8765-4321", email: "r.rose@yg.com" },
  },
  {
    name: "Lisa",
    agency: "JYP Entertainment",
    image: "https://placehold.co/600x800?text=Lisa",
    likes: 1100,
    contacts: { phone: "+82-10-1111-2222", email: "l.lisa@jyp.com" },
  },
  {
    name: "V",
    agency: "SM Entertainment",
    image: "https://placehold.co/600x800?text=V",
    likes: 1400,
    contacts: { phone: "+82-10-3333-4444", email: "v@sme.com" },
  },
  {
    name: "Jungkook",
    agency: "YG Entertainment",
    image: "https://placehold.co/600x800?text=Jungkook",
    likes: 1650,
    contacts: { phone: "+82-10-5555-6666", email: "jk@yg.com" },
  },
  {
    name: "Taeyeon",
    agency: "SM Entertainment",
    image: "https://placehold.co/600x800?text=Taeyeon",
    likes: 1300,
    contacts: { phone: "+82-10-7777-8888", email: "t.taeyeon@sme.com" },
  },
];

const Navbar = () => (
  <nav className="fixed w-full bg-white/70 backdrop-blur-md z-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          KPop Models
        </a>
        <ul className="hidden md:flex space-x-8 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
          <li><a href="#hero">Home</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="relative h-screen bg-black text-white overflow-hidden">
    <img
      src="https://placehold.co/1920x1080?text=KPop+Background"
      alt="Hero Background"
      className="w-full h-full object-cover filter blur-md opacity-70 absolute inset-0 z-[-1]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900 opacity-60 z-[-1]"></div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start space-y-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 text-transparent bg-clip-text"
      >
        KPop Models Gallery
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg sm:text-xl md:text-2xl max-w-3xl"
      >
        Discover the most stunning KPop models from top Korean entertainment agencies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6"
      >
        <a href="#models" className="inline-flex items-center px-7 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg transform transition-transform duration-200 ease-in-out motion-reduce:transition-none">
          View Gallery
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="ml-2"
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </div>
  </section>
);

const ModelCard = ({ model }) => (
  <motion.article
    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
  >
    <img src={model.image} alt={model.name} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{model.name}</h3>
      <p className="text-sm text-indigo-600 mb-4">{model.agency}</p>
      <div className="flex items-center space-x-2 text-gray-500">
        <Phone size={16} />
        <span>{model.contacts.phone}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 mt-1">
        <Mail size={16} />
        <span>{model.contacts.email}</span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 flex items-center space-x-1 text-gray-400 group-hover:text-indigo-600"
      >
        💖 {model.likes}
      </motion.div>
    </div>
  </motion.article>
);

const ModelsGrid = () => (
  <section id="models" className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4"
      >
        Meet the Models
      </motion.h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Each model brings a unique charm and style. Explore their profiles, stats, and contact info.
      </p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {models.map((model) => (
        <ModelCard key={model.name} model={model} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-indigo-700 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>Phone: +82-10-0000-1111</p>
        <p>Email: info@kpopmodels.com</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <ul className="flex space-x-6">
          {["Facebook", "Instagram", "Twitter"].map((platform) => (
            <li key={platform}>
              <a href="#" aria-label={platform} className="transition-colors duration-200 hover:text-indigo-300">
                {platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default function KpopPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ModelsGrid />
      </main>
      <Footer />
    </>
  );
}
