// src/pages/index.jsx (已修复)

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { 
    // ... 所有的 import 保持不变 ...
    Lightbulb, HelpCircle, ChevronDown, Rocket, Shield, Users as UsersIcon, MapPin, BarChart2, CheckCircle, Database, Scale, CalendarDays, Zap,
    Target, AlertTriangle, Goal, Megaphone, Edit3, Building, Handshake,
    TrendingUp, ShoppingCart, Wallet, DollarSign, Mail, MousePointer, UsersRound, HeartHandshake, Gem
} from 'lucide-react';

// --- DATA: The single source of truth for our report ---
// ... 您的所有数据 (analysisSteps, reportData) 保持不变 ...
const analysisSteps = [
    { text: "接收到战略推演请求...", icon: <Zap className="animate-pulse" /> },
    { text: "正在初始化“启明-战略家-20B”核心...", icon: <Lightbulb /> },
    { text: "接入实时市场数据库...", icon: <Database /> },
    { text: "扫描宏观经济与政策环境 (PEST分析)...", icon: <Scale /> },
    { text: "解构核心竞争对手产品矩阵 (SWOT分析)...", icon: <UsersIcon /> },
    { text: "构建目标用户画像与触点地图...", icon: <MapPin /> },
    { text: "模拟多渠道预算分配模型 (Monte Carlo)...", icon: <BarChart2 /> },
    { text: "生成整合营销战役时间轴...", icon: <CalendarDays /> },
    { text: "评估潜在风险与设计应对预案...", icon: <Shield /> },
    { text: "渲染最终战略沙盘...", icon: <Rocket className="animate-bounce" /> },
];

const reportData = {
    overview: [
        { icon: <Target className="h-8 w-8 text-cyan-400" />, title: "品牌定位", description: "“科技美学 + 智能驾驶体验” 的中高端智能电动汽车" },
        { icon: <Zap className="h-8 w-8 text-cyan-400" />, title: "核心卖点", description: "未来主义外观、星尘 OS 无缝互联、领航 L2+ 智能驾驶" },
        { icon: <MapPin className="h-8 w-8 text-cyan-400" />, title: "目标市场", description: "中国一线与新一线城市" },
        { icon: <AlertTriangle className="h-8 w-8 text-red-400" />, title: "核心挑战", description: "市场竞争内卷、品牌零知名度、消费者对“智能”宣传麻木" },
        { icon: <Goal className="h-8 w-8 text-green-400" />, title: "战略目标", description: "12个月内 30%+ 认知度，首年订单 10,000 台" }
    ],
    budget: [
        { name: '数字广告', value: 35, budget: 700, color: '#06b6d4' },
        { name: '内容营销', value: 10, budget: 200, color: '#22d3ee' },
        { name: '社交媒体 & KOL', value: 20, budget: 400, color: '#67e8f9' },
        { name: '品牌活动 / POP-UP', value: 25, budget: 500, color: '#a5f3fc' },
        { name: '公关 & 媒体投放', value: 10, budget: 200, color: '#cffafe' },
    ],
    executionPlan: [
        { months: "1–2", title: "前期预热 & 品牌定位", weeks: [{ week: "1-8", action: "制作概念片、发布预告、开通社媒、核心KOL访谈、撰写技术白皮书", kpi: "视频播放量100万, 社交提及率5%" }] },
        { months: "3–4", title: "软性曝光 & 渠道预热", weeks: [{ week: "9-12", action: "在汽车门户投放原生广告、与经销商签订协议、收集试驾预约", kpi: "经销商数5家, 预定试驾800人" }] },
        { months: "5", title: "官方发布 & 首发媒体日", weeks: [{ week: "13-14", action: "举行官方发布会、媒体同步报道、开启限量预订", kpi: "发布会观看30万, 预定3000台" }] },
        { months: "6–8", title: "渠道推广 & 体验营销", weeks: [{ week: "15-20", action: "在高端购物中心设置POP-UP体验车、开展智驾挑战赛、推出会员制", kpi: "体验车曝光1.2M, 会员注册800" }] },
        { months: "9–10", title: "深化内容与技术赋能", weeks: [{ week: "21-24", action: "发布“星尘OS”深度拆解系列、与高校AI实验室合作直播", kpi: "视频观看200万, 试驾订单3500台" }] },
        { months: "11–12", title: "销售冲刺 & 社区闭环", weeks: [{ week: "25-28", action: "开展年度促销活动、联合经销商举办签约仪式、启动口碑营销", kpi: "累计订单10,000台, 社交分享3M" }] },
    ],
    risks: [
        { risk: "市场竞争加剧", impact: "销售冲击、品牌曝光抢占", solution: "加大差异化内容营销，提升技术权威性；启动限时优惠降低购买门槛。" },
        { risk: "消费者对“智能”宣传麻木", impact: "认知度难以突破", solution: "强化体验式营销，让消费者亲身感受价值；用故事化内容激发情感共鸣。" },
        { risk: "经销商渠道落地慢", impact: "销售订单延迟", solution: "签订激励合约，提供培训支持；同时在核心区开展直营体验站补位。" },
    ]
};


// --- SCREEN 1: BRIEFING ---
const BriefingScreen = ({ onStartAnalysis }) => {
    // ... (内部代码保持不变)
    const [isFormValid, setIsFormValid] = useState(false);
    const validateForm = (e) => {
        const form = e.currentTarget.form;
        setIsFormValid(form && form.checkValidity());
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-4 font-sans">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-4xl bg-slate-800/50 border border-slate-700 rounded-2xl shadow-2xl shadow-cyan-500/10">
                <form onChange={validateForm} onSubmit={(e) => { e.preventDefault(); onStartAnalysis(); }}>
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-700">
                            <motion.div animate={{ scale: [1, 1.1, 1]}} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                <Lightbulb className="w-20 h-20 text-cyan-400" />
                            </motion.div>
                            <h1 className="text-4xl font-bold text-white mt-4">战略推演委托书</h1>
                            <p className="text-slate-400 mt-2">启明-战略家模型已准备就绪。</p>
                        </div>
                        <div className="p-8 md:p-12 space-y-6">
                            <InputField label="项目名称" placeholder="例如：极星纪元上市战略" />
                            <InputField label="公司/产品描述" placeholder="一家主打科技美学的DTC电动汽车品牌" isTextarea />
                            <InputField label="核心挑战或战略目标" placeholder="如何在12个月内，用2000万预算..." isTextarea required />
                        </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-b-2xl">
                        <motion.button type="submit" disabled={!isFormValid} className="w-full p-4 text-lg font-bold text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: isFormValid ? 1.02 : 1 }} whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                            animate={{ background: isFormValid ? "linear-gradient(to right, #22d3ee, #06b6d4)" : "#334155" }}>
                            开始推演
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};
const InputField = ({ label, placeholder, isTextarea, required }) => (
    <div>
        <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
            {label}{required && <span className="text-red-400 ml-1">*</span>}
        </label>
        {isTextarea ? (<textarea placeholder={placeholder} required={required} className="w-full bg-slate-700/50 border border-slate-600 rounded-md p-3 text-white focus:ring-2 focus:ring-cyan-400" rows="3"/>
        ) : (<input type="text" placeholder={placeholder} required={required} className="w-full bg-slate-700/50 border border-slate-600 rounded-md p-3 text-white focus:ring-2 focus:ring-cyan-400"/>
        )}
    </div>
);


// --- SCREEN 2: ANALYZING ---
const AnalyzingScreen = ({ onAnalysisComplete }) => {
    // ... (内部代码保持不变)
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        if (currentStep < analysisSteps.length - 1) {
            const timer = setTimeout(() => setCurrentStep(currentStep + 1), 1000);
            return () => clearTimeout(timer);
        } else {
            const finalTimer = setTimeout(onAnalysisComplete, 2500);
            return () => clearTimeout(finalTimer);
        }
    }, [currentStep, onAnalysisComplete]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-4 font-sans">
            <div className="text-center w-full max-w-2xl">
                <motion.div animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 mx-auto mb-16 border-8 border-dashed border-cyan-400/30 rounded-full flex items-center justify-center">
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                        <Lightbulb className="w-24 h-24 text-cyan-400" />
                    </motion.div>
                </motion.div>
                <div className="h-16">
                    <AnimatePresence mode="wait">
                        <motion.div key={currentStep} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex items-center justify-center text-2xl text-white space-x-4">
                            <div className="text-cyan-400">{analysisSteps[currentStep].icon}</div>
                            <span className="tracking-wide">{analysisSteps[currentStep].text}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5 mt-12">
                    <motion.div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2.5 rounded-full"
                        initial={{ width: "0%" }} animate={{ width: `${((currentStep + 1) / analysisSteps.length) * 100}%` }} transition={{ duration: 0.8, ease: "easeInOut" }}/>
                </div>
            </div>
        </div>
    );
};

// --- SCREEN 3: THE FULL "ART PIECE" REPORT ---
const ReportScreen = () => {
    // ... (内部代码保持不变)
    const Section = ({ title, children, subtitle }) => (
        <motion.section className="py-16 px-4 md:px-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">{title}</h2>
            {subtitle && <p className="text-center text-lg text-slate-400 mb-12 max-w-3xl mx-auto">{subtitle}</p>}
            {children}
        </motion.section>
    );

    const RiskAccordion = ({ risk, impact, solution, index }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
                <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-5 text-left">
                    <span className="text-lg font-semibold text-white flex items-center"><Shield className="h-5 w-5 mr-3 text-red-400"/>{risk}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown className="h-6 w-6 text-slate-400"/></motion.div>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="p-5 border-t border-slate-700">
                                <p className="text-slate-300 mb-2"><strong className="text-slate-100">影响:</strong> {impact}</p>
                                <p className="text-slate-300"><strong className="text-slate-100">对策:</strong> {solution}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    };

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
    
    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-purple-500">极星纪元</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-300">12个月上市整合营销传播战略</p>
                </motion.div>
            </div>
            <main>
                <Section title="1️⃣ 战略概述">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {reportData.overview.map((item, index) => (
                             <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-start h-full">
                                <div className="p-3 bg-slate-700/50 rounded-lg mb-4">{React.cloneElement(item.icon, {className: "h-8 w-8 text-cyan-400"})}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
                <Section title="2️⃣ IMC 核心渠道与预算分配">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="h-96 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={reportData.budget} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="85%" paddingAngle={5}>
                                        {reportData.budget.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}/>
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-3xl font-bold">¥2000万</text>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-4">
                            {reportData.budget.map((item, index) => (
                                <motion.div key={item.name} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-white">{item.name}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">{item.budget} 万</span>
                                        <span className="ml-4 text-slate-400">{item.value}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
                 <Section title="3️⃣ 月度执行计划 (12个月)">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {reportData.executionPlan.map((phase, index) => (
                             <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
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
                <Section title="4️⃣ 风险评估与应对策略">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {reportData.risks.map((item, index) => <RiskAccordion key={index} {...item} index={index}/>)}
                    </div>
                </Section>
                 <footer className="text-center py-16 px-4">
                     <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <p className="mt-8 text-2xl font-bold text-white">
                           祝 极星纪元 上市成功，驶向“星辰大海”的未来！ 
                           <Rocket className="inline-block ml-3 h-8 w-8 text-purple-400 animate-pulse"/>
                        </p>
                     </motion.div>
                 </footer>
            </main>
        </div>
    );
};


// --- THE MAIN PAGE COMPONENT (STATE MACHINE) ---
// 1. 将 'export default function App()' 修改为 'function HomePage()'
function HomePage() {
    const [appState, setAppState] = useState('BRIEFING'); // 'BRIEFING', 'ANALYZING', 'REPORT'

    const handleStartAnalysis = () => {
        setAppState('ANALYZING');
    };

    const handleAnalysisComplete = () => {
        setAppState('REPORT');
    };
    
    const handleReset = () => {
      setAppState('BRIEFING');
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {appState === 'BRIEFING' && (
                    <motion.div key="briefing" exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                        <BriefingScreen onStartAnalysis={handleStartAnalysis} />
                    </motion.div>
                )}
                {appState === 'ANALYZING' && (
                    <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
                        <AnalyzingScreen onAnalysisComplete={handleAnalysisComplete} />
                    </motion.div>
                )}
                {appState === 'REPORT' && (
                    <motion.div key="report" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <ReportScreen />
                    </motion.div>
                )}
            </AnimatePresence>
            
            {appState === 'REPORT' && (
                <motion.button onClick={handleReset} className="fixed bottom-8 right-8 bg-cyan-500 text-white p-4 rounded-full shadow-lg z-50"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <Lightbulb />
                </motion.button>
            )}
        </>
    );
}

// 2. 删除错误的 'export default HomePage;'
// 3. 在文件末尾只保留这一个正确的 default 导出
export default HomePage;