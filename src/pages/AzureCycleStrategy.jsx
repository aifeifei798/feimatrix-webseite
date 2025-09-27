import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Target, Gem, Users, AlertTriangle, TrendingUp, ShieldCheck, Megaphone, BotMessageSquare, PencilRuler, CalendarDays, Rocket, GitBranch, Zap, Waves, Recycle, Leaf, Lightbulb, BrainCircuit, Scale } from 'lucide-react';

const AzureCycleStrategy = () => {
    const brandColors = {
        primary: '#00BFFF', // DeepSkyBlue
        secondary: '#4682B4', // SteelBlue
        accent: '#5F9EA0', // CadetBlue
        text: '#E0FFFF', // LightCyan
        background: '#0B1215',
        card: 'rgba(17, 24, 39, 0.6)',
        border: 'rgba(255, 255, 255, 0.1)',
    };

    const overviewData = [
        { icon: Target, title: "品牌定位", content: "现代都市青年（22‑35岁）在“环保、品质、有设计感”之间寻找平衡。我们是“零排放、无缝对接、即刻穿戴”的首选。" },
        { icon: Gem, title: "核心卖点", content: "• 100%海洋塑料瓶再生纤维\n• 男女同款，兼顾功能与时尚\n• 极简设计，适配多场合\n• 可持续包装 & 可回收产品生命周期\n• 与第三方环保认证机构合作，保证透明溯源" },
        { icon: Users, title: "目标市场", content: "• 人群画像：22‑35岁，一/二线城市青年，高学历，月可支配收入≥1.5k RMB，关注环保议题，活跃于社交平台。" },
        { icon: AlertTriangle, title: "核心挑战", content: "1️⃣ 极低预算下的差异化竞争。\n2️⃣ “绿色”标签的信任建立。\n3️⃣ 从零开始的电商渠道建设。" },
        { icon: TrendingUp, title: "战略目标 (6个月内)", content: "• 品牌知名度：总曝光≥5M次，UGC >10k条\n• 用户获取：邮件订阅 >20k，社群成员 >15k\n• 销售目标：订单量 ≥10k件，收入 ≥12M RMB" },
    ];

    const budgetData = [
        { name: '数字广告', value: 30, amount: '150万', color: '#0088FE', icon: Megaphone },
        { name: 'KOL合作', value: 25, amount: '125万', color: '#00C49F', icon: Users },
        { name: '内容创作', value: 20, amount: '100万', color: '#FFBB28', icon: PencilRuler },
        { name: '社群运营', value: 15, amount: '75万', color: '#FF8042', icon: BotMessageSquare },
        { name: '公关与活动', value: 10, amount: '50万', color: '#AF19FF', icon: CalendarDays },
    ];

    const executionPlanData = [
        {
            time: "第 1-2 月 (Pre-Launch)",
            theme: "“种子”：打造话题与预热",
            icon: Leaf,
            actions: [
                "官方抖音/小红书账号上线，发布幕后工厂短片。",
                "与 10–15 位 micro‑KOL签约，完成“先行试穿”种草。",
                "开设邮件订阅漏斗，推出「海洋塑料瓶故事」电子书。",
                "启动付费广告：品牌认知 + 注册转化。",
                "建立社群，发起「环保挑战」UGC抽奖。"
            ],
            kpi: {
                曝光: "总视频播放量 ≥ 5M 次；话题讨论 > 10k 条",
                获取: "邮件订阅 ≥ 15k 名；社群成员 ≥ 8k 人",
                转化: "预售订单（限定折扣）≥ 2k 件"
            }
        },
        {
            time: "第 3 月 (Launch)",
            theme: "“破晓”：正式上市，最大化销量冲刺",
            icon: Zap,
            actions: [
                "抖音直播首发，邀请主流时尚KOL现场试穿。",
                "官方预售 + “限量闪购”双轨策略。",
                "举办沪津快闪店，配合「回收瓶即送礼」活动。",
                "开展社群“品牌日”活动，促进即时下单。",
                "付费广告加码，目标 ROAS ≥ 3.0。"
            ],
            kpi: {
                销量: "首季订单量 ≥ 4k 件；收入 ≥ 6M RMB",
                转化率: "网站访问 → 下单转换 ≥ 5%",
                品牌信任: "UGC产品试穿视频 > 2k 条；正面情绪占比 ≥ 80%"
            }
        },
        {
            time: "第 4-6 月",
            theme: "“深耕”：巩固认知，可持续增长",
            icon: GitBranch,
            actions: [
                "社群“可持续生活挑战”，培育忠诚粉丝。",
                "启动小程序商城，优化购物体验。",
                "发布配饰系列，扩张产品线。",
                "与“海洋守护者”NGO合作，提升CSR形象。",
                "全渠道数据整合评估，优化下季度策略。"
            ],
            kpi: {
                忠诚度: "社群日活 ≥ 30%；复购率 ≥ 10%",
                总业绩: "累计订单 ≥ 10k 件；收入 ≥ 12M RMB",
                品牌口碑: "正面情绪占比 > 85%；媒体曝光 ≥ 300 次"
            }
        }
    ];

    const risksData = [
        {
            risk: "市场同质化竞争激烈",
            solution: "• **差异化创新**：推出“零碳排放”包装。\n• **故事化营销**：打造“人与海洋”的情感联结短片。"
        },
        {
            risk: "原材料供应不稳定",
            solution: "• **多元化采购**：与3–4家回收伙伴签订长期协议。\n• **技术升级**：投资开发更高效的再生纤维生产线。"
        },
        {
            risk: "消费者对环保承诺持疑",
            solution: "• **第三方认证**：公开国际认可的回收认证。\n• **透明溯源**：设立“追踪之路”页面，扫码查看产品全流程。"
        },
        {
            risk: "物流 & 售后体验不佳",
            solution: "• **自建物流节点**：在核心城市设小型仓储中心。\n• **售后保障**：提供免费退换、一站式客服与抗压包装。"
        }
    ];
    
    const landingSuggestions = [
        { icon: Lightbulb, title: "先做内容，再卖货", description: "通过高质量短视频与UGC，让消费者在“看”中“信”，再用推广把“感情”转化为订单。" },
        { icon: BrainCircuit, title: "社群 + 数据闭环", description: "社群不仅提升复购率，更是第一手用户数据来源，支持精准投放与产品迭代。" },
        { icon: Scale, title: "可持续的利润模型", description: "关注毛利率 > 55%，通过高端定位与合理定价维持成本收益平衡，再利用品牌溢价扩张。" },
        { icon: ShieldCheck, title: "风险随行，预案必备", description: "将 Contingency 预算与项目里程碑结合，阶段性评估风险并及时调整策略。" },
    ];

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
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };
    
    const [flippedCard, setFlippedCard] = useState(null);

    const SectionTitle = ({ title, subtitle }) => (
         <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
         >
            <h2 className="text-4xl font-bold" style={{ color: brandColors.primary }}>{title}</h2>
            <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
            <div className="mt-4 h-1 w-24 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.accent})` }}></div>
        </motion.div>
    );

    return (
        <div style={{ backgroundColor: brandColors.background, color: brandColors.text }} className="min-h-screen font-sans antialiased overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <motion.header 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center py-20 px-4"
            >
                <div className="flex justify-center items-center gap-4 mb-4">
                    <Waves className="w-12 h-12" style={{ color: brandColors.primary }}/>
                    <Recycle className="w-12 h-12" style={{ color: brandColors.accent }}/>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
                    「蔚蓝循环」
                </h1>
                <p className="text-lg md:text-2xl mt-4 font-light text-slate-300">
                    Azure Cycle 品牌上市整合营销战略
                </p>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-xl italic" style={{ color: brandColors.primary }}
                >
                    “时尚不应以牺牲地球为代价。”
                </motion.p>
            </motion.header>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 pb-24">
                
                <section>
                    <SectionTitle title="1️⃣ 战略概述" subtitle="Overview" />
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {overviewData.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="p-6 rounded-xl border backdrop-blur-sm"
                                style={{ backgroundColor: brandColors.card, borderColor: brandColors.border }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <item.icon className="w-8 h-8" style={{ color: brandColors.primary }}/>
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                </div>
                                <p className="text-slate-300 whitespace-pre-line">{item.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                
                 <section>
                    <SectionTitle title="2️⃣ 预算分配" subtitle="Budget Allocation" />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                        <motion.div 
                            className="md:col-span-3 h-96 w-full relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={budgetData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" fill="#8884d8" paddingAngle={5}>
                                        {budgetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: brandColors.card,
                                            borderColor: brandColors.border,
                                            color: brandColors.text
                                        }}
                                        itemStyle={{ color: brandColors.text }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <p className="text-slate-300 text-lg">总预算</p>
                                <p className="text-4xl font-bold text-white">500万</p>
                                <p className="text-slate-300 text-lg">RMB</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="md:col-span-2 space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {budgetData.map((item) => (
                                <motion.div key={item.name} variants={itemVariants} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: brandColors.card }}>
                                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                                    <item.icon className="w-5 h-5 mr-3" style={{ color: item.color }}/>
                                    <span className="flex-1 text-slate-200">{item.name}</span>
                                    <span className="font-semibold text-white">{item.value}%</span>
                                    <span className="text-sm text-slate-400 w-20 text-right">{item.amount}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                
                <section>
                    <SectionTitle title="3️⃣ 月度执行计划" subtitle="Execution Plan Timeline" />
                    <div className="relative">
                        <div className="absolute left-10 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" aria-hidden="true"></div>
                        
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-16"
                        >
                            {executionPlanData.map((phase, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                    className="relative flex items-center justify-between group"
                                >
                                    <div className="sm:hidden absolute left-10 transform -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full border-2" style={{ backgroundColor: brandColors.background, borderColor: brandColors.primary }}>
                                        <phase.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" style={{ color: brandColors.primary }}/>
                                    </div>
                                    
                                    <div className={`hidden sm:flex w-5/12 ${index % 2 !== 0 ? 'order-1' : ''}`}></div>

                                    <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-20 h-20 rounded-full border-2" style={{ backgroundColor: brandColors.background, borderColor: brandColors.primary }}>
                                        <phase.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" style={{ color: brandColors.primary }}/>
                                    </div>

                                    <div className="w-full sm:w-5/12 pl-28 sm:pl-0">
                                        <div className={`p-6 rounded-xl border backdrop-blur-sm ${index % 2 !== 0 ? 'sm:text-right' : ''}`} style={{ backgroundColor: brandColors.card, borderColor: brandColors.border }}>
                                            <p className="font-bold text-lg" style={{color: brandColors.primary}}>{phase.time}</p>
                                            <h4 className="text-2xl font-semibold mt-1 text-white">{phase.theme}</h4>
                                            <ul className={`mt-4 list-disc list-inside text-left space-y-1 ${index % 2 !== 0 ? 'sm:text-right sm:list-none' : ''}`}>
                                                {phase.actions.map((action, i) => <li key={i}>{action}</li>)}
                                            </ul>
                                            <div className="mt-4 border-t pt-4 text-left" style={{borderColor: brandColors.border}}>
                                                <h5 className={`font-semibold text-white ${index % 2 !== 0 ? 'sm:text-right' : ''}`}>关键KPI:</h5>
                                                <ul className="mt-2 text-slate-400 text-sm space-y-1">
                                                        {Object.entries(phase.kpi).map(([key, value]) => <li key={key}><strong>{key}:</strong> {value}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section>
                    <SectionTitle title="4️⃣ 风险评估 & 应对方案" subtitle="Risks & Solutions" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {risksData.map((item, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="h-64 [perspective:1000px]"
                            >
                                <motion.div
                                    className="relative w-full h-full cursor-pointer transition-transform duration-700"
                                    style={{ transformStyle: "preserve-3d" }}
                                    animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                                    onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                                >
                                    {/* Front Face */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] p-6 rounded-xl border flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(128, 0, 0, 0.3)', borderColor: 'rgba(255, 100, 100, 0.4)'}}>
                                        <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
                                        <h4 className="text-xl font-semibold text-white">{item.risk}</h4>
                                        <p className="mt-2 text-sm text-slate-300">点击查看应对方案</p>
                                    </div>
                                    
                                    {/* Back Face */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-xl border flex flex-col justify-center" style={{ backgroundColor: 'rgba(0, 128, 128, 0.3)', borderColor: 'rgba(100, 255, 255, 0.4)'}}>
                                        <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
                                        <h4 className="text-lg font-semibold text-white mb-2">解决方案</h4>
                                        <p className="text-slate-300 whitespace-pre-line text-left">{item.solution}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                
                <section>
                    <SectionTitle title="🚀 项目落地建议" subtitle="Execution Recommendations" />
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {landingSuggestions.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="p-6 rounded-xl border backdrop-blur-sm text-center transform hover:-translate-y-2 transition-transform duration-300"
                                style={{ backgroundColor: brandColors.card, borderColor: brandColors.border }}
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <div className="p-3 rounded-full" style={{ background: `radial-gradient(circle, ${brandColors.primary} 0%, rgba(0,0,0,0) 70%)`}}>
                                        <item.icon className="w-8 h-8 text-white"/>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>
            
            <footer className="text-center py-12 px-4 border-t" style={{borderColor: brandColors.border}}>
                <p className="text-slate-400">祝「蔚蓝循环」开启绿色高效的新型消费旅程！</p>
                <div className="flex justify-center items-center gap-4 mt-4 text-cyan-400">
                    <Waves />
                    <span className="font-bold text-xl">Azure Cycle</span>
                    <Recycle />
                </div>
            </footer>
        </div>
    );
};

export default AzureCycleStrategy;