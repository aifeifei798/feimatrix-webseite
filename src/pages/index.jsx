import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react'; // 换一个更具科技感的图标

// 魔法发生的地方：我们直接导入由插件生成的所有路由！
import routes from '~react-pages';

// 这是一个辅助函数，用来美化路径名
// 例如：将 "/page1" 变成 "Page 1", "QiMing-Moe" 变成 "Qi Ming Moe"
function formatRouteName(path) {
  if (path === '/') return 'Home';
  
  return path
    .replace('/', '') // 移除前置斜杠
    .replace(/-/g, ' ') // 将连字符替换为空格
    .replace(/(\d+)/, ' $1') // 在数字前加个空格
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase()); // 将每个单词的首字母大写
}

// 我们的自动导航组件，现在是“模型终端”
const ModelTerminal = () => {
  // 1. 过滤掉我们不想在导航中显示的路由（比如首页本身）
  const pagesToDisplay = routes.filter(route => 
    route.path !== '/' && !route.path.includes(':') // 过滤掉首页和动态路由
  );

  // 2. 对页面进行排序，确保顺序正确
  pagesToDisplay.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

  // 动画变体，用于交错显示卡片
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {pagesToDisplay.map((page) => (
        <motion.div key={page.path} variants={itemVariants}>
          <Link 
            to={page.path} 
            className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {formatRouteName(page.path)}
                </h3>
                <Cpu className="h-6 w-6 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <p className="text-slate-400 mt-2">
                模型实例ID: {page.path}
              </p>
            </div>
            <div className="mt-4 text-purple-400 flex items-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              进入世界 <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

// 整个首页组件
export default function IndexPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-white p-8 sm:p-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            启明AI模型矩阵
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto"
          >
            欢迎来到启明终端。这里是所有AI人格的集结地，从“萌萌哒”的创意火花到专业的商业洞见。点击下方卡片，启动一个实例并探索由AI构建的独特世界。
          </motion.p>
        </header>

        <main>
          <ModelTerminal />
        </main>
      </div>
    </div>
  );
}