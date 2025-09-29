import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Gem, Users, ShoppingBag, Cpu, Sparkles, BarChart, GraduationCap, Bot, UserCheck, Phone, GanttChartSquare, CheckCircle, ArrowRight, Dna, Rocket, Target, Handshake } from 'lucide-react';

// Mock Data from the Markdown file
const data = {
  hero: {
    title: "璞玉工坊",
    subtitle: "我们不是在说“让AI替代老师傅”，而是在帮您把那些温度、故事和技艺搬到更多人的视野里，让它们有机会继续发光。",
    callToAction: "探索我们的数字化方案"
  },
  steps: [
    {
      id: 1,
      emoji: "1️⃣",
      title: "让工坊有个“门面”，让世界能看到您",
      painPoints: [
        {
          name: "营销困境",
          solution: "把“说故事”变成机器可复制的内容流，让网站、社交账号都在不停地向潜在客户推送品牌价值。",
          actions: [
            "搭建一个现代化但不失温度的网站：用AI生成的文案转换您口述的故事。",
            "创建短视频内容库：AI剪辑工具自动提取雕刻记录的关键节奏，配上音乐与字幕。",
            "开启社交媒体（微博 + 小红书）：每周一次“幕后大曝光”，创造“窥视大师工坊”的体验感。"
          ]
        },
        {
          name: "市场老化",
          solution: "用数据告诉我们哪一类年轻人最有可能被这种传统文化吸引，让营销更精准、更有效率。",
          actions: [
            "社交听力工具：AI扫描社交平台，找出潜在用户画像。",
            "定向广告投放：以精准人群为目标，用低预算测试不同创意组合。"
          ]
        }
      ],
      implementation: [
        { task: "网站+内容", time: "第1-2周", help: "UI/UX设计师, AI辅助文案, 开发团队, SEO优化" },
        { task: "社交媒体", time: "第1-3周", help: "短视频脚本与剪辑, UGC激励方案" }
      ]
    },
    {
      id: 2,
      emoji: "2️⃣",
      title: "把匠心传给下一代——数字化学徒制度",
      painPoints: [
        {
          name: "传承危机",
          solution: "把传统手艺拆解成可学习、可衡量的“技能模块”，让年轻人体验“雕玉”的乐趣。",
          actions: [
            "AR/VR 现场教学：老师傅用头显雕刻，学生戴设备“跟着手”操作。",
            "AI 评测系统：图像识别判断作品平整度，给出改进建议，形成社群效应。"
          ]
        },
        {
          name: "市场老化",
          solution: "让年轻人自己动手、创作，激发他们对玉石文化的兴趣，从而扩大潜在客户基础。",
          actions: [
            "作品定制赛：线上举办“新锐匠心”大赛，优胜者可获大师定制或参与产品设计。"
          ]
        }
      ],
      implementation: [
        { task: "平台搭建", time: "第1-6周", help: "AR/VR开发, UI设计, 内容策划" },
        { task: "社群运营", time: "第3-6周", help: "社群经理, AI自动化工具, 内容日历" },
        { task: "评测系统", time: "第3-8周", help: "AI模型训练, API开发, UI集成" }
      ]
    },
    {
      id: 3,
      emoji: "3️⃣",
      title: "让工坊成为真正的“数字资产”",
      painPoints: [
        {
          name: "营销困境",
          solution: "把线下客流转化为可追踪、可优化的线上订单，不再只靠“老客户口碑”。",
          actions: [
            "电商平台 + 独立网站双轨：京东/天猫旗舰店获取曝光，自建商城提供深度品牌体验。",
          ]
        },
        {
          name: "传承危机",
          solution: "把工坊的“唯一性”变成可量化的销售数据，判断热门产品，制定培训重点。",
          actions: [
            "AI 推荐引擎：根据用户行为推荐合适的玉器。",
            "库存与需求预测：用时间序列模型预测热销风格，帮助老师傅提前准备。"
          ]
        },
        {
            name: "市场老化",
            solution: "让年轻人更容易“发现”并“购买”，把他们从奢侈品消费拉回到文化收藏。",
            actions: [
                "内容 + 商城一体化：短视频可直接跳转到产品页面。",
                "会员社群 + 限量版策略：先做“小众”“定制”体验，形成口碑后再规模化。"
            ]
        }
      ],
      implementation: [
        { task: "商城搭建", time: "第1-6周", help: "技术选型(Shopify/自研), 数据集成" },
        { task: "推荐引擎", time: "第2-7周", help: "用户行为日志收集, 模型训练" },
        { task: "会员体系", time: "第3-6周", help: "分级会员, 专属权益设计" }
      ]
    }
  ],
  servicePackage: [
    { 
      stage: "1️⃣ 数字门面", 
      scope: "网站 + 社媒内容 + 数据追踪", 
      timeline: "第1-3周", 
      roi: "网站访客与停留时间提升，社交曝光量翻倍",
      icon: Layers
    },
    { 
      stage: "2️⃣ 学徒孵化器", 
      scope: "AR/VR教学平台 + 社群运营 + AI评测系统", 
      timeline: "第4-12周", 
      roi: "学徒报名与参与度提升，潜在客户转化",
      icon: GraduationCap
    },
    { 
      stage: "3️⃣ 线上商城闭环", 
      scope: "商城搭建 + 推荐引擎 + 数据分析", 
      timeline: "第13-20周", 
      roi: "订单量与客单价提升，库存周转率改善",
      icon: ShoppingBag
    }
  ],
  whyUs: [
    { title: "“温度+科技”双管齐下", description: "让 AI 成为匠心故事的助力，而不是代替者。", icon: Dna },
    { title: "可操作、可测量", description: "每一项投入都有 KPI，您可以随时查看 ROI。", icon: BarChart },
    { title: "从小规模试点到全业务闭环", description: "风险最小化、收益最大化。", icon: Rocket }
  ],
  nextSteps: [
    { title: "15分钟快速评估通话", description: "了解工坊日常、教学风格及现有线上资产。", icon: Phone },
    { title: "30分钟方案演示", description: "用甘特图为您展示每一步如何落地。", icon: GanttChartSquare },
    { title: "签约 + 资源对接", description: "技术团队与您工坊的师傅、销售人员形成协作矩阵。", icon: Handshake }
  ],
  footer: {
    title: "璞玉工坊，您准备好让这份传世匠心在数字时代继续发光了吗？",
    subtitle: "期待与您一起，把每一块玉石的故事，用最现代、最精准的方式讲给世界。",
    button: "立即开启合作"
  }
};

const SectionWrapper = ({ children, className = '' }) => (
  <motion.section
    className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ children, className = '' }) => (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 text-center ${className}`}>
        {children}
    </h2>
);

const SectionSubtitle = ({ children, className = '' }) => (
    <p className={`mt-4 max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 ${className}`}>
        {children}
    </p>
);

const JadeGradientText = ({ children }) => (
    <span className="bg-gradient-to-r from-emerald-500 to-teal-400 text-transparent bg-clip-text">
        {children}
    </span>
);

export default function PuyuWorkshopWebsite() {
  const [activeTab, setActiveTab] = useState(data.steps[0].id);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/50 via-gray-50 to-teal-50/50 dark:from-emerald-900/10 dark:via-gray-900 dark:to-teal-900/10 -z-10"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Gem className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-serif font-semibold text-gray-800 dark:text-gray-100">璞玉工坊</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5" style={{backgroundImage: "url('https://placehold.co/1920x1080/e2e8f0/e2e8f0/svg?text=玉')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent dark:from-gray-900"></div>
          <motion.div 
            className="z-10 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-gray-900 dark:text-white leading-tight">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              {data.hero.subtitle}
            </p>
            <motion.button
              className="mt-10 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(22, 163, 74, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              {data.hero.callToAction}
            </motion.button>
          </motion.div>
        </section>

        {/* 3 Step Solution Section */}
        <SectionWrapper>
          <SectionTitle>我们的三步走 <JadeGradientText>“AI+人性”</JadeGradientText> 方案</SectionTitle>
          <SectionSubtitle>
            我们围绕一个核心目标：把匠心故事变成可以复制、传播、学习的内容与工具，为您解决三大痛点。
          </SectionSubtitle>
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
              {data.steps.map(step => (
                <button
                  key={step.id}
                  className={`relative px-4 py-3 sm:px-6 font-medium text-sm sm:text-base transition-colors duration-300 ${
                    activeTab === step.id 
                    ? 'text-emerald-600 dark:text-emerald-400' 
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(step.id)}
                >
                  {step.emoji} {step.title.split('——')[0]}
                  {activeTab === step.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                      layoutId="underline"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              {data.steps.filter(step => step.id === activeTab).map(step => (
                <motion.div
                  key={step.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white mb-6">{step.title}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {step.painPoints.map((pp, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-4">
                          <span className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full mr-3">
                            <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          </span>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{pp.name}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold"><JadeGradientText>{pp.solution}</JadeGradientText></p>
                        <ul className="space-y-2">
                          {pp.actions.map((action, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">立即可落地</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead className="border-b border-gray-200 dark:border-gray-700">
                              <tr>
                                <th className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-200">任务</th>
                                <th className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-200">时间</th>
                                <th className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-200">我们帮您</th>
                              </tr>
                          </thead>
                          <tbody>
                            {step.implementation.map((item, i) => (
                              <motion.tr 
                                key={i} 
                                className="border-b border-gray-100 dark:border-gray-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                              >
                                <td className="p-4 font-medium text-gray-900 dark:text-gray-100">{item.task}</td>
                                <td className="p-4 text-gray-600 dark:text-gray-300">{item.time}</td>
                                <td className="p-4 text-gray-600 dark:text-gray-400">{item.help}</td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </SectionWrapper>

        {/* Service Package Section */}
        <SectionWrapper className="bg-emerald-600/5 dark:bg-emerald-900/20">
            <SectionTitle>我们的服务 <JadeGradientText>套餐</JadeGradientText></SectionTitle>
            <SectionSubtitle>我们不只是交付软件，还会把技术拆解成“可复制、可运营”的业务流程，让您团队可以自己跑起来。</SectionSubtitle>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {data.servicePackage.map((pkg, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500 flex flex-col"
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                    >
                        <div className="flex-shrink-0 mb-4">
                            <pkg.icon className="h-12 w-12 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-2">{pkg.stage}</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{pkg.scope}</p>
                        <div className="mt-auto space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                           <div className="flex items-center text-sm">
                                <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">时间节点:</span>
                                <span className="text-gray-600 dark:text-gray-400">{pkg.timeline}</span>
                           </div>
                           <div className="flex items-start text-sm">
                                <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">投资回报:</span>
                                <span className="text-gray-600 dark:text-gray-400">{pkg.roi}</span>
                           </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        {/* Next Steps & Why Us Section */}
        <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                <div>
                    <SectionTitle className="text-left !text-3xl sm:!text-4xl">下一步：<JadeGradientText>让我们一起行动</JadeGradientText></SectionTitle>
                    <div className="mt-8 space-y-6">
                        {data.nextSteps.map((step, i) => (
                            <motion.div 
                              key={i}
                              className="flex items-start space-x-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{step.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div>
                    <SectionTitle className="text-left !text-3xl sm:!text-4xl">为什么<JadeGradientText>选择我们？</JadeGradientText></SectionTitle>
                    <div className="mt-8 space-y-6">
                        {data.whyUs.map((reason, i) => (
                            <motion.div 
                              key={i}
                              className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="flex-shrink-0">
                                    <reason.icon className="w-8 h-8 text-emerald-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{reason.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
        
        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto py-16 px-4 text-center">
                <Sparkles className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{data.footer.title}</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{data.footer.subtitle}</p>
                <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 flex items-center mx-auto"
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(22, 163, 74, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    {data.footer.button} <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
            </div>
            <div className="py-4 bg-gray-900 dark:bg-black/20 text-center text-sm text-gray-400 border-t border-gray-700">
                <p>&copy; {new Date().getFullYear()} 璞玉工坊数字化方案. All Rights Reserved.</p>
            </div>
        </footer>

      </main>
    </div>
  );
}