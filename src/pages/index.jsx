import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// 魔法发生的地方：我们直接导入由插件生成的所有路由！
import routes from '~react-pages';

// 这是一个辅助函数，用来美化路径名
// 例如：将 "/page1" 变成 "Page 1"
function formatRouteName(path) {
  if (path === '/') return 'Home';
  
  return path
    .replace('/', '') // 移除斜杠
    .replace(/(\d+)/, ' $1') // 在数字前加个空格
    .replace(/^\w/, (c) => c.toUpperCase()); // 将首字母大写
}

// 我们的自动导航组件
const AutoNav = () => {
  // 1. 过滤掉我们不想在导航中显示的路由（比如首页本身）
  const pagesToDisplay = routes.filter(route => 
    route.path !== '/' && !route.path.includes(':') // 过滤掉首页和动态路由
  );

  // 2. 对页面进行排序，确保 page1, page2, page10 的顺序是正确的
  pagesToDisplay.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

  // 动画变体，用于交错显示卡片
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 每个子元素动画延迟0.1秒
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
            className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 h-full"
          >
            <h3 className="text-2xl font-bold text-white">
              {formatRouteName(page.path)}
            </h3>
            <p className="text-slate-400 mt-2">
              导航至 {page.path}
            </p>
            <div className="mt-4 text-indigo-400 flex items-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              查看页面 <ArrowRight className="ml-2 h-5 w-5" />
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
    <div className="bg-slate-900 min-h-screen text-white p-8 sm:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            页面导航中心
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            这是一个自动生成的导航。在 <code>src/pages</code> 目录下添加或删除页面，这里的链接会自动更新。
          </p>
        </header>

        <main>
          <AutoNav />
        </main>
      </div>
    </div>
  );
}