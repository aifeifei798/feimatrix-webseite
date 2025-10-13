import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Target, TrendingDown, Users, DollarSign, Zap, CheckCircle, XCircle, Lightbulb, AlertTriangle, Building, Microscope, School, Rocket, FileText, ArrowRight, TrendingUp, UserCheck, ShieldCheck, BarChart2, Star } from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('C');

    const statusData = [
        { name: '销售额 (6个月)', value: 15, goal: 100, unit: 'M', icon: DollarSign, color: 'text-red-400', progress: 15 },
        { name: '研发投入 (总)', value: 42, unit: 'M', icon: Zap, color: 'text-amber-400' },
        { name: '市场满意度 (NPS)', value: 38, goal: 65, unit: '/100', icon: Star, color: 'text-red-400', progress: 38/65*100 },
        { name: '核心团队流失率', value: 28, goal: 15, unit: '%', icon: Users, color: 'text-amber-400' },
        { name: '股价变化 (近季度)', value: -20, unit: '%', icon: TrendingDown, color: 'text-red-400' },
    ];

    const salesChartData = [
        { name: '已达成', value: 15 },
        { name: '差距', value: 85 },
    ];
    const COLORS = ['#4ade80', '#475569'];

    const swotData = {
        A: {
            title: "选项 A：果断止损",
            subtitle: "停止项目，资源再分配",
            swot: [
                { type: '优势', icon: CheckCircle, color: 'text-green-400', items: ["立即释放现金流（月节省 $1.8M）", "可将团队与技术用于其他高回报产品", "向投资者传递清晰的战略纪律性", "品牌形象“敢于做减法”"] },
                { type: '劣势', icon: XCircle, color: 'text-red-400', items: ["失去市场对VisionPro X的长期信心", "已投入的硬件资产可能闲置或折价出售", "研发团队士气进一步下滑", "市场认为公司“放弃AR愿景”"] },
                { type: '机会', icon: Lightbulb, color: 'text-blue-400', items: ["技术模块化为可售平台", "未来可能以新品牌重新推出", "资金可用于其他高潜力项目"] },
                { type: '威胁', icon: AlertTriangle, color: 'text-amber-400', items: ["竞争对手趁机扩大AR市场领导地位", "投资者可能质疑战略方向不连贯", "若未来重推，需重新教育市场"] },
            ],
            financials: ["停止项目后，12个月节省 $21.6M", "机会成本（未开发的用户基础）≈ $45M"]
        },
        B: {
            title: "选项 B：加倍投入",
            subtitle: "VisionPro X 二代 + 市场强化",
            swot: [
                { type: '优势', icon: CheckCircle, color: 'text-green-400', items: ["持续品牌曝光，巩固技术领导地位", "用户忠诚度提升，形成社区生态", "通过一代产品积累大量用户反馈", "强化“InnovateForward = AR pioneer”品牌形象"] },
                { type: '劣势', icon: XCircle, color: 'text-red-400', items: ["高额追加投入：预计再投入 $35M（2年）", "可能面临“双代同售、用户困惑”", "资金压力持续加剧"] },
                { type: '机会', icon: Lightbulb, color: 'text-blue-400', items: ["二代可实现差异化创新", "建立订阅式软件服务（VisionPro Cloud）", "拓展至内容创作者生态", "打造“VisionPro Ecosystem”品牌价值"] },
                { type: '威胁', icon: AlertTriangle, color: 'text-amber-400', items: ["竞争对手可能在二代发布前推出更强产品", "一代库存积压，利润率下降风险高", "若市场反应仍平庸，可能导致更大亏损"] },
            ],
            financials: ["追加投资 $35M，目标销售额至 $200M", "年收入增长率可达45%"]
        },
        C: {
            title: "选项 C：战略转型",
            subtitle: "从C端转向B端（企业级市场）",
            swot: [
                { type: '优势', icon: CheckCircle, color: 'text-green-400', items: ["企业客户支付意愿高，LTV是C端3–5倍", "可实现更高利润率和稳定收入流", "技术能力已成熟，适合工业/医疗等复杂场景", "市场进入门槛高，可建立护城河"] },
                { type: '劣势', icon: XCircle, color: 'text-red-400', items: ["需要重新设计销售与服务模式", "企业采购周期长，初期增长较慢", "用户培训和生态系统建设需额外投入"] },
                { type: '机会', icon: Lightbulb, color: 'text-blue-400', items: ["在医疗领域推出“VisionPro Surgeon”", "教育市场可建立标准化课程平台", "工业场景可与IoT系统集成", "通过API开放平台吸引第三方开发者"] },
                { type: '威胁', icon: AlertTriangle, color: 'text-amber-400', items: ["B端客户对可靠性、支持服务要求极高", "竞争者可能快速复制该模式（如HoloLens）", "若C端市场未完全放弃，可能面临品牌分裂"] },
            ],
            financials: ["B端单价 $1,800–$3,500，毛利率达65%", "第3年起实现正向现金流，第5年贡献总收入28%"]
        },
    };
    
    const recommendationLogic = [
      { title: '财务可行性高', text: '企业客户支付意愿强、LTV高、毛利率领先。B端项目可在2年内实现收支平衡，3年贡献显著利润流。', icon: DollarSign },
      { title: '解决当前痛点', text: '技术成熟度已超C端需求，可打造“开箱即用”的行业解决方案，降低用户对价格的敏感性。', icon: Zap },
      { title: '市场时机极佳', text: '后疫情时代，远程协作、数字孪生需求高涨，VisionPro X硬件基础可直接适配企业流程。', icon: Target },
      { title: '降低战略风险', text: 'B端市场对失败容忍度更高，允许我们“慢下来打磨”，而C端则要求快速迭代与口碑爆发。', icon: ShieldCheck },
    ];

    const roadmap = [
      { phase: "第1–3月：转型启动", actions: ["成立“VisionPro Enterprise”事业部", "任命企业业务总监，建立客户成功团队", "筛选首批50家目标行业客户", "推出三款“行业解决方案包”"]},
      { phase: "第4–6月：市场验证与产品优化", actions: ["试点客户部署，收集反馈", "推出企业版软件平台", "启动“Early Adopter Program”"]},
      { phase: "第7–9月：规模化与生态建设", actions: ["举办首届“VisionPro Enterprise Summit”", "发布开发者API和SDK", "推出订阅式服务（VisionPro Cloud Pro）"]},
      { phase: "第10–12月：财务与战略成果评估", actions: ["完成首年度B端收入报告", "评估客户留存率、NPS和LTV", "准备下一轮融资，目标$50M"]},
    ];

    const kpis = [
      { name: "B端客户数量", current: "0", goal: "≥50 家", icon: Building },
      { name: "平均订单价值", current: "$680", goal: "$2,400", icon: DollarSign },
      { name: "毛利率", current: "42%", goal: "65%", icon: BarChart2 },
      { name: "客户留存率", current: "62%", goal: "≥85%", icon: UserCheck },
      { name: "年度订阅收入", current: "$0", goal: "$3.6M", icon: FileText },
      { name: "投资者信心指数", current: "↓20%", goal: "↑10%", icon: TrendingUp },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const Section = ({ title, children, icon: Icon }) => (
        <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center mb-6">
                {Icon && <Icon className="w-8 h-8 text-cyan-400 mr-4" />}
                <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
                <div className="flex-grow h-px bg-slate-700 ml-6"></div>
            </div>
            {children}
        </motion.section>
    );

    return (
        <div className="min-h-screen bg-slate-900 text-gray-300 font-sans p-4 sm:p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        InnovateForward Inc. 紧急战略会议
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-slate-400"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        致 CEO：VisionPro X 项目战略决策汇报
                    </motion.p>
                </header>

                <Section title="当前现状摘要" icon={Target}>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-lg col-span-1 lg:col-span-1 row-span-2 flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold text-white mb-2">销售额达成率</h3>
                             <div className="w-48 h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={salesChartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {salesChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                background: 'rgba(30, 41, 59, 0.8)',
                                                borderColor: '#334155',
                                                borderRadius: '0.5rem',
                                                color: '#cbd5e1'
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="text-5xl font-bold text-green-400 mt-2">15<span className="text-3xl">%</span></p>
                            <p className="text-slate-400">目标: $100M</p>
                        </motion.div>
                        {statusData.filter(d => d.name !== '销售额 (6个月)').map((item) => (
                            <motion.div key={item.name} variants={itemVariants} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-slate-400">{item.name}</p>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <p className="text-4xl font-bold text-white">{item.unit === 'M' ? '$' : ''}{item.value.toString().replace('-', '')}<span className="text-2xl ml-1">{item.unit}</span></p>
                                {item.goal && <p className={`text-sm ${item.color}`}>目标: {item.goal}{item.unit}</p>}
                            </motion.div>
                        ))}
                    </motion.div>
                     <motion.p 
                        className="text-center mt-8 text-amber-300 bg-amber-900/30 rounded-lg p-4 border border-amber-800"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                    >
                        <strong>关键洞察：</strong> VisionPro X 不是“失败”，而是“潜力未兑现”——产品技术领先，但市场与商业模型错配。
                    </motion.p>
                </Section>
                
                <Section title="SWOT 分析 (三路径)" icon={BarChart2}>
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-8 bg-slate-800 p-2 rounded-lg">
                        {Object.keys(swotData).map(key => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full text-center px-4 py-2.5 text-sm md:text-base font-medium rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                                    activeTab === key ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                选项 {key}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white">{swotData[activeTab].title}</h3>
                                <p className="text-slate-400">{swotData[activeTab].subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {swotData[activeTab].swot.map(category => (
                                    <div key={category.type} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                        <div className="flex items-center mb-3">
                                            <category.icon className={`w-6 h-6 mr-3 ${category.color}`} />
                                            <h4 className={`text-xl font-semibold ${category.color}`}>{category.type}</h4>
                                        </div>
                                        <ul className="space-y-2 list-inside">
                                            {category.items.map(item => (
                                                <li key={item} className="flex items-start">
                                                    <ArrowRight className="w-4 h-4 mr-2 mt-1 text-cyan-400 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-800 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                               <h4 className="font-bold text-white mb-2">💡 财务测算</h4>
                               {swotData[activeTab].financials.map(item => (
                                   <p key={item} className="text-slate-300">{item}</p>
                               ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Section>
                
                <Section title="战略建议：选择“C. 战略转型”" icon={Rocket}>
                    <div className="bg-gradient-to-br from-cyan-900/50 to-slate-900/50 rounded-xl p-8 border border-cyan-700 shadow-2xl">
                        <h3 className="text-2xl font-bold text-cyan-300 mb-6">核心决策逻辑 (Why C?)</h3>
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                            {recommendationLogic.map(item => (
                                <motion.div key={item.title} variants={itemVariants} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-cyan-800/50 p-3 rounded-full mt-1">
                                      <item.icon className="w-6 h-6 text-cyan-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                                        <p className="text-slate-400">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <blockquote className="mt-8 border-l-4 border-slate-600 pl-4 text-slate-400 italic">
                          <h4 className="font-semibold not-italic text-white">关键假设：</h4>
                           <p>转型后3年内，B端收入占VisionPro X总收入的60%以上。</p>
                           <p>企业客户留存率 >85%，年度续约率达90%+。</p>
                        </blockquote>
                    </div>
                </Section>

                <Section title="初步行动计划 (12个月路线图)" icon={FileText}>
                    <div className="relative border-l-2 border-slate-700 ml-4 pl-8 py-4">
                        {roadmap.map((item, index) => (
                             <motion.div 
                                key={item.phase} 
                                className="mb-10 relative"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                                <p className="text-cyan-400 font-semibold text-lg">{item.phase}</p>
                                <ul className="mt-2 space-y-1 text-slate-300">
                                    {item.actions.map(action => (
                                        <li key={action} className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>{action}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section title="预期成果与KPIs" icon={TrendingUp}>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {kpis.map(kpi => (
                            <motion.div key={kpi.name} variants={itemVariants} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
                                <div className="flex justify-center items-center mb-3">
                                    <kpi.icon className="w-6 h-6 text-slate-400 mr-2" />
                                    <h4 className="font-semibold text-white">{kpi.name}</h4>
                                </div>
                                <p className="text-sm text-slate-500">当前: {kpi.current}</p>
                                <div className="flex items-center justify-center my-2">
                                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">{kpi.goal}</p>
                                </div>
                                <p className="text-sm text-slate-400">12个月目标</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <section className="mt-16 text-center">
                    <motion.blockquote 
                        className="text-2xl font-bold text-white italic mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        “我们不是在‘挽救’VisionPro X，而是在‘重塑’它——从一款明星消费品，转变为工业级AR平台。”
                    </motion.blockquote>

                    <motion.div
                        className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">最终战略选择：C. 战略转型 (B端市场)</h3>
                        <p className="text-lg mb-6">以医疗、制造、教育为三大切入点，打造“VisionPro Enterprise”品牌，实现高利润率、稳定现金流与护城河。</p>
                        <div className="border-t border-slate-700 pt-6">
                            <p className="font-semibold text-white text-lg">向CEO的结语：</p>
                            <p className="text-slate-300 mt-2">我们建议：暂停C端市场推广6个月，全力转型B端；在3年内，将VisionPro X打造成公司核心战略引擎。我们相信：这不仅是VisionPro的转折点，更是InnovateForward从‘创新公司’迈向‘行业平台引领者’的关键一步。</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="mt-12 text-slate-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="font-bold italic text-lg">“我们不再为消费者而生——我们正在构建企业未来。”</p>
                        <p className="mt-4 text-sm">CFO, CTO, COO, CMO</p>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default App;