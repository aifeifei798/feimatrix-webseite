import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { 
    Target, 
    Zap, 
    MapPin, 
    AlertTriangle, 
    Goal, 
    Megaphone, 
    Edit3, 
    Users, 
    Building, 
    Handshake, 
    Heart,
    BarChart2,
    CheckCircle,
    Shield,
    Flag,
    Rocket,
    ChevronDown
} from 'lucide-react';

const AstroEraStrategyDashboard = () => {
    // Data from the provided document
    const overviewData = [
        { icon: <Target className="h-8 w-8 text-cyan-400" />, title: "品牌定位", description: "“科技美学 + 智能驾驶体验” 的中高端智能电动汽车" },
        { icon: <Zap className="h-8 w-8 text-cyan-400" />, title: "核心卖点", description: "未来主义外观、星尘 OS 无缝互联、领航 L2+ 智能驾驶" },
        { icon: <MapPin className="h-8 w-8 text-cyan-400" />, title: "目标市场", description: "中国一线（京、沪、深）与新一线城市（成、杭、汉等）" },
        { icon: <AlertTriangle className="h-8 w-8 text-red-400" />, title: "核心挑战", description: "市场竞争内卷、品牌零知名度、消费者对“智能”宣传麻木" },
        { icon: <Goal className="h-8 w-8 text-green-400" />, title: "战略目标", description: "12个月内 30%+ 目标用户主动联想品牌，首年销售订单 10,000 台" }
    ];

    const budgetData = [
        { name: '数字广告', value: 35, budget: 700, color: '#06b6d4', icon: <Megaphone/> },
        { name: '内容营销', value: 10, budget: 200, color: '#22d3ee', icon: <Edit3/> },
        { name: '社交媒体 & KOL', value: 20, budget: 400, color: '#67e8f9', icon: <Users/> },
        { name: '品牌活动 / POP-UP', value: 25, budget: 500, color: '#a5f3fc', icon: <Building/> },
        { name: '公关 & 媒体投放', value: 10, budget: 200, color: '#cffafe', icon: <Handshake/> },
    ];
     const otherBudgetData = [
        { name: '渠道合作 & 营销支持', value: 5, budget: 100, color: '#8b5cf6' },
        { name: '品牌社区 & 客户关怀', value: 5, budget: 100, color: '#a78bfa' },
    ];
    const combinedBudgetData = [...budgetData, ...otherBudgetData];

    const executionPlan = [
        {
            months: "1–2",
            title: "前期预热 & 品牌定位",
            weeks: [
                { week: "1-4", action: "制作“星航者-7”概念片、发布预告短视频、开通社媒账号、核心 KOL 访谈", kpi: "视频播放量 100 万, 小程序关注 1 万" },
                { week: "5-8", action: "撰写“星尘 OS”技术白皮书、开启社交话题标签、与科技媒体合作试驾视频", kpi: "文章阅读量 50 万, 社交提及率 5%" }
            ]
        },
        {
            months: "3–4",
            title: "软性曝光 & 渠道预热",
            weeks: [
                { week: "9-12", action: "在汽车行业门户投放原生广告、与经销商签订合作协议、收集试驾预约", kpi: "经销商数 5 家, 预定试驾人次 800" }
            ]
        },
        {
            months: "5",
            title: "官方发布 & 首发媒体日",
            weeks: [
                { week: "13-14", action: "举行“星航者-7”官方发布会（线上+线下）、媒体同步报道、开启限量预订窗口", kpi: "发布会观看人数 30 万, 预定订单 3000 台" }
            ]
        },
        {
            months: "6–8",
            title: "渠道推广 & 体验营销",
            weeks: [
                { week: "15-20", action: "在高端购物中心设置 POP-UP 体验车、开展“领航智驾”实测挑战赛、推出会员制度", kpi: "体验车曝光量 1.2M, 活动参与 1500, 会员注册 800" }
            ]
        },
         {
            months: "9–10",
            title: "深化内容与技术赋能",
            weeks: [
                { week: "21-24", action: "发布“星尘 OS”深度拆解系列、与高校 AI 实验室合作直播、推出试驾套餐", kpi: "视频观看量 200 万, 试驾订单 3500 台" }
            ]
        },
        {
            months: "11–12",
            title: "销售冲刺 & 社区闭环",
            weeks: [
                { week: "25-28", action: "开展年度促销活动、联合经销商举办签约仪式、启动口碑营销", kpi: "销售订单累计 10,000 台, 社交分享量 3M" }
            ]
        },
    ];

    const creativeThemes = [
        { title: "星航者-7：未来之旅", message: "“驾驶不只是移动，而是一次星际旅行。”", elements: "流线型外观、星尘 OS 交互动画、宇宙轨迹背景" },
        { title: "领航智驾，让驾驶更自如", message: "“智能与安全同行，领航无忧。”", elements: "激光雷达扫描特效、AI 驾驶画面、真实道路案例" },
        { title: "科技美学：设计即是情感", message: "“极简而不失温度，科技与艺术的碰撞。”", elements: "极简数字座舱、材质细节、灯光秀效果" },
        { title: "星尘 OS：全景互联生态", message: "“把你的一切设备都塞进车里，让一切都成为你的助手。”", elements: "设备互联场景、多屏协同演示" }
    ];

    const kpis = [
        { metric: "品牌有效认知度", target: "≥30%", tool: "Brandwatch、问卷星" },
        { metric: "社交提及率 / 分享量", target: "≥5%", tool: "头条指数、微博热搜" },
        { metric: "网站 & 小程序访问量", target: "月均 50 万 PV", tool: "百度统计、腾讯分析" },
        { metric: "预订单数", target: "10,000 台", tool: "经销商 CRM 数据" },
        { metric: "媒体曝光量", target: "30+ 主流媒体", tool: "Meltwater" },
        { metric: "活动参与人数", target: "累计 4500+ 人", tool: "活动后台登记系统" },
    ];

    const risks = [
        { risk: "市场竞争加剧", impact: "销售冲击、品牌曝光抢占", solution: "加大差异化内容营销，提升技术权威性；启动限时优惠降低购买门槛。" },
        { risk: "消费者对“智能”宣传麻木", impact: "认知度难以突破", solution: "强化体验式营销，让消费者亲身感受价值；用故事化内容激发情感共鸣。" },
        { risk: "经销商渠道落地慢", impact: "销售订单延迟", solution: "签订激励合约，提供培训支持；同时在核心区开展直营体验站补位。" },
        { risk: "预算控制失衡", impact: "后续资源不足", solution: "月度预算监控 + KPI 对齐评估；若渠道回报低于预期，及时调整投放比例。" },
    ];
    
    const milestones = [
        { milestone: "概念片与技术白皮书上线", time: "第 2 周" },
        { milestone: "首批预定订单（5000 台）", time: "第 14 周" },
        { milestone: "官方发布会", time: "第 18 周" },
        { milestone: "POP-UP 体验站覆盖 5 城市", time: "第 22 周" },
        { milestone: "年度销售订单 10,000 台", time: "第 52 周" },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg shadow-lg text-white">
                    <p className="font-bold">{`${payload[0].name}`}</p>
                    <p className="text-cyan-400">{`占比: ${payload[0].value}%`}</p>
                    <p className="text-gray-400">{`预算: ${payload[0].payload.budget} 万元`}</p>
                </div>
            );
        }
        return null;
    };
    
    const Section = ({ title, children, subtitle }) => (
        <motion.section 
            className="py-16 px-4 md:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">{title}</h2>
            {subtitle && <p className="text-center text-lg text-slate-400 mb-12 max-w-3xl mx-auto">{subtitle}</p>}
            {children}
        </motion.section>
    );

    const RiskAccordion = ({ risk, impact, solution, index }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-5 text-left"
                >
                    <span className="text-lg font-semibold text-white flex items-center"><Shield className="h-5 w-5 mr-3 text-red-400"/>{risk}</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="h-6 w-6 text-slate-400"/>
                    </motion.div>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="p-5 border-t border-slate-700">
                                <p className="text-slate-300 mb-2"><strong className="text-slate-100">影响:</strong> {impact}</p>
                                <p className="text-slate-300"><strong className="text-slate-100">对策:</strong> {solution}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    }

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent"></div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-purple-500">
                            极星纪元 (Astro Era)
                        </span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-300">12个月上市整合营销传播战略</p>
                    <div className="mt-8 text-2xl font-bold text-white bg-slate-800/50 border border-slate-700 rounded-full px-8 py-3 inline-block">
                        预算总额：<span className="text-cyan-400">2000 万元</span>
                    </div>
                </motion.div>
            </div>
            
            <main className="relative z-10">
                {/* 1. Strategic Overview */}
                <Section title="1️⃣ 战略概述">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {overviewData.map((item, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-start h-full"
                            >
                                <div className="p-3 bg-slate-700/50 rounded-lg mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
                
                {/* 2. Budget Allocation */}
                <Section title="2️⃣ IMC 核心渠道与预算分配">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="h-96 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={combinedBudgetData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="85%" fill="#8884d8" paddingAngle={5}>
                                        {combinedBudgetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} className="focus:outline-none"/>)}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}/>
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-3xl font-bold">¥2000万</text>
                                    <text x="50%" y="50%" dy={28} textAnchor="middle" className="fill-slate-400 text-lg">总预算</text>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-4">
                            {budgetData.map((item, index) => (
                                <motion.div 
                                    key={item.name} 
                                    className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-white">{item.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-white">{item.budget} 万</span>
                                        <span className="ml-4 text-slate-400">{item.value}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
                
                {/* 3. Monthly Execution Plan */}
                <Section title="3️⃣ 月度执行计划 (12个月)">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {executionPlan.map((phase, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                            >
                                <div className="mb-4">
                                    <span className="text-cyan-400 font-bold text-sm bg-cyan-900/50 px-3 py-1 rounded-full">Month {phase.months}</span>
                                    <h3 className="text-2xl font-bold text-white mt-2">{phase.title}</h3>
                                </div>
                                <div className="space-y-4">
                                    {phase.weeks.map((week, weekIndex) => (
                                        <div key={weekIndex} className="p-4 bg-slate-800 rounded-lg border-l-4 border-slate-600">
                                            <p className="font-semibold text-slate-300">Week {week.week}: <span className="font-normal">{week.action}</span></p>
                                            <p className="text-sm text-green-400 mt-1"><strong className="font-semibold">KPI:</strong> {week.kpi}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
                
                {/* 4. Creative & Information Mainline */}
                <Section title="4️⃣ 创意与信息主线" subtitle="通过四大核心主题，构建品牌叙事，与用户建立情感链接。">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {creativeThemes.map((theme, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors duration-300 group"
                            >
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{theme.title}</h3>
                                <p className="text-slate-300 italic mb-3">"{theme.message}"</p>
                                <p className="text-sm text-slate-400"><strong className="text-slate-200">视觉元素:</strong> {theme.elements}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* 5. KPIs */}
                <Section title="5️⃣ KPI 与测量方法">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {kpis.map((kpi, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 text-center"
                            >
                                <div className="flex justify-center mb-3">
                                  <CheckCircle className="h-8 w-8 text-green-400"/>
                                </div>
                                <h4 className="text-lg font-semibold text-white">{kpi.metric}</h4>
                                <p className="text-2xl font-bold text-cyan-400 my-2">{kpi.target}</p>
                                <p className="text-sm text-slate-500">{kpi.tool}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* 6. Risk Assessment */}
                <Section title="6️⃣ 风险评估与应对策略">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {risks.map((item, index) => (
                           <RiskAccordion key={index} {...item} index={index}/>
                        ))}
                    </div>
                </Section>
                
                {/* 7. Milestones */}
                <Section title="7️⃣ 关键里程碑 & 时间节点">
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                        <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                variants={{
                                    hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                    <p className="font-bold text-lg text-white">{item.milestone}</p>
                                    <p className="text-cyan-400">{item.time}</p>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 p-1 bg-slate-900 rounded-full">
                                    <div className="h-4 w-4 bg-cyan-400 rounded-full border-2 border-slate-900"></div>
                                </div>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                </Section>

                {/* 8. Conclusion */}
                <Section title="8️⃣ 后续延伸与展望">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                           <h3 className="text-xl font-bold text-white mb-2">跨品牌合作</h3>
                           <p className="text-slate-400">与华为鸿蒙、腾讯云 AI 合作，提升“星尘 OS”生态吸引力。</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                           <h3 className="text-xl font-bold text-white mb-2">数字孪生体验</h3>
                           <p className="text-slate-400">开发 AR/VR 虚拟试驾，让用户在家感受“领航智驾”。</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                           <h3 className="text-xl font-bold text-white mb-2">社群运营升级</h3>
                           <p className="text-slate-400">建立会员社区，定期邀请行业专家线上 AMA，提升品牌粘性。</p>
                        </motion.div>
                    </div>
                </Section>
                 
                 <footer className="text-center py-16 px-4">
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                     >
                        <p className="max-w-4xl mx-auto text-slate-400">
                            在竞争激烈的中国新能源汽车市场，成功需要精准的传播、差异化的内容与深度的体验有机结合。本战略将通过多渠道同步放量，形成强势认知与情感共鸣双轮驱动，在有限预算内实现战略目标。
                        </p>
                        <p className="mt-8 text-2xl font-bold text-white">
                           祝 极星纪元（Astro Era）上市成功，驶向“星辰大海”的未来！ 
                           <Rocket className="inline-block ml-3 h-8 w-8 text-purple-400 animate-pulse"/>
                        </p>
                     </motion.div>
                 </footer>

            </main>
        </div>
    );
};

export default AstroEraStrategyDashboard;