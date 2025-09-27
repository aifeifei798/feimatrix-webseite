import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Briefcase, Target, Zap, TrendingUp, Leaf, Building2, FlaskConical, Trees, DollarSign, ShieldCheck, Milestone, Lightbulb, CheckCircle, BarChart2, Award, Users, MapPin, Wind, Sun, BatteryCharging, BrainCircuit, ArrowRight, Rss } from 'lucide-react';

const Page8 = () => {
    // Color Palette
    const COLORS = {
        primary: '#10b981', // emerald-500
        secondary: '#0ea5e9', // sky-500
        dark: '#1f2937', // gray-800
        light: '#f9fafb', // gray-50
        text: '#d1d5db', // gray-300
        heading: '#ffffff',
    };

    const chartColors = ['#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6', '#ec4899'];

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Data
    const revenueData = [
        { name: '住宅区', value: 47 },
        { name: '办公园区', value: 30 },
        { name: '创新孵化基地', value: 15 },
        { name: '公共设施 & 商业', value: 8 },
        { name: '智慧城市服务', value: 5 },
        { name: '碳信用交易', value: 3 },
    ];
    
    const financialModelData = [
        { year: 'Y1', ebitda: 4.5 },
        { year: 'Y2', ebitda: 8.75 },
        { year: 'Y3', ebitda: 15.2 },
        { year: 'Y4-5', ebitda: 24.4 },
        { year: 'Y6-10', ebitda: 33.8 },
        { year: 'Y11-15', ebitda: 40.8 },
        { year: 'Y16-20', ebitda: 47.5 },
    ];
    
    const esgData = [
        { icon: Wind, title: "零碳能源", value: ">80% 自给率", desc: "光伏+储能体系，年减排CO₂约12万吨" },
        { icon: BrainCircuit, title: "智慧运营", value: "≈15% 成本节约", desc: "AIoT平台提升资源调度效率" },
        { icon: Leaf, title: "绿色建筑", value: "LEED 金/铂金认证", desc: "超低能耗设计，提升资产价值" },
        { icon: Users, title: "人本社区", value: "全周期公共服务", desc: "打造宜居、宜业、宜创的未来社区" },
    ];

    const timelineData = [
        { year: "Y1-2", title: "前期准备", desc: "完成土地征收、政策审批与规划设计。", icon: MapPin },
        { year: "Y3", title: "建设启动", desc: "零碳能源基建铺设，住宅区动工。", icon: Building2 },
        { year: "Y3-5", title: "住宅分期交付", desc: "首批住宅交付，实现早期现金流回笼。", icon: Users },
        { year: "Y4-7", title: "办公园区推进", desc: "核心办公楼宇预租并同步建设。", icon: Briefcase },
        { year: "Y5-8", title: "创新基地招商", desc: "高新企业入驻，产业生态初具规模。", icon: FlaskConical },
        { year: "Y10", title: "项目竣工验收", desc: "全功能区通过验收，获得绿色建筑认证。", icon: Award },
    ];

    const Section = ({ children, className = '' }) => (
        <motion.section 
            className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    );

    const SectionTitle = ({ children }) => (
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">
            {children}
        </motion.h2>
    );

    const Card = ({ children, className = '' }) => (
        <motion.div 
            variants={fadeIn}
            className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg ring-1 ring-white/10 ${className}`}
        >
            {children}
        </motion.div>
    );

    const StatCard = ({ icon: Icon, title, value, unit }) => (
         <Card className="text-center">
            <Icon className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
            <p className="text-4xl font-bold text-white my-2">{value}<span className="text-2xl text-emerald-400 ml-2">{unit}</span></p>
        </Card>
    );

    return (
        <div className="bg-gray-900 text-gray-300 font-sans leading-relaxed">
            {/* Hero Section */}
            <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900/70 z-0"></div>
                <div className="absolute inset-0 z-10 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="text-center relative z-20 p-4">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4">
                            《绿洲之心》
                        </h1>
                        <p className="text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-8">
                            生态科技新城商业计划书
                        </p>
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-3xl mx-auto text-lg text-gray-300 mb-12"
                    >
                        以“可持续、智能、高品质”为核心，打造环境友好与高回报双赢的未来城市典范。
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center"
                    >
                        <a href="#summary" className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center">
                            探索未来 <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </header>

            {/* Key Metrics */}
            <Section className="bg-gray-800/30">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <StatCard icon={DollarSign} title="融资目标" value="5,000" unit="万" />
                    <StatCard icon={TrendingUp} title="预期 IRR" value="15-18" unit="%" />
                    <StatCard icon={BarChart2} title="5年回报率" value=">95" unit="%" />
                </div>
            </Section>

            {/* Executive Summary */}
            <Section id="summary">
                <SectionTitle>执行摘要</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card>
                        <Briefcase className="h-10 w-10 text-sky-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">项目概况</h3>
                        <p>位于沪宁城际带核心，占地3200亩，打造集居住、办公、创新于一体的生态新城。</p>
                    </Card>
                    <Card>
                        <Target className="h-10 w-10 text-sky-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">市场机遇</h3>
                        <p>响应“双碳”战略，满足长三角产业升级与高端居住需求，市场潜力巨大。</p>
                    </Card>
                    <Card>
                        <Zap className="h-10 w-10 text-sky-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">核心竞争力</h3>
                        <p>零碳能源体系、智慧城市平台与国际级生态配套，构筑难以复制的竞争壁垒。</p>
                    </Card>
                    <Card>
                        <TrendingUp className="h-10 w-10 text-sky-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">财务亮点</h3>
                        <p>多元化收入结构，现金流早期回笼，预计第3年净收益率超12%，项目回报可观。</p>
                    </Card>
                </div>
            </Section>

            {/* 主要功能区 */}
            <Section className="bg-gray-900/70">
                <SectionTitle>四大核心功能区</SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div variants={staggerContainer} className="space-y-6">
                        <motion.div variants={fadeIn} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
                            <div className="bg-emerald-500/20 p-3 rounded-full"><Users className="h-6 w-6 text-emerald-400"/></div>
                            <div>
                                <h4 className="text-xl font-bold text-white">绿洲之心住宅城</h4>
                                <p>超30%零能耗建筑，全屋智能家居，打造未来健康人居。</p>
                            </div>
                        </motion.div>
                         <motion.div variants={fadeIn} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
                            <div className="bg-sky-500/20 p-3 rounded-full"><Building2 className="h-6 w-6 text-sky-400"/></div>
                            <div>
                                <h4 className="text-xl font-bold text-white">核心办公园区</h4>
                                <p>LEED金级认证，光伏储能自供率≥80%，为企业赋能ESG价值。</p>
                            </div>
                        </motion.div>
                         <motion.div variants={fadeIn} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
                            <div className="bg-amber-500/20 p-3 rounded-full"><FlaskConical className="h-6 w-6 text-amber-400"/></div>
                            <div>
                                <h4 className="text-xl font-bold text-white">科技创新孵化基地</h4>
                                <p>聚焦前沿科技，提供税收减免与科研补贴，年租金回报>12%。</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
                            <div className="bg-fuchsia-500/20 p-3 rounded-full"><Trees className="h-6 w-6 text-fuchsia-400"/></div>
                            <div>
                                <h4 className="text-xl font-bold text-white">生态休闲公园</h4>
                                <p>800亩城市绿肺，融合自然湿地与人文景观，实现生态平衡。</p>
                            </div>
                        </motion.div>
                    </motion.div>
                     <motion.div variants={fadeIn} className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                         <img src="https://placehold.co/800x600/1f2937/10b981/png?text=Oasis+Heart&font=raleway" alt="Oasis Heart Concept" className="w-full h-full object-cover"/>
                     </motion.div>
                </div>
            </Section>

            {/* Sustainability Strategy */}
            <Section>
                <SectionTitle>可持续发展核心战略</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {esgData.map((item, index) => (
                        <Card key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                           <item.icon className="h-12 w-12 mx-auto mb-4 text-emerald-400"/>
                           <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                           <p className="text-2xl font-bold text-sky-400 mb-2">{item.value}</p>
                           <p className="text-sm text-gray-400">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Financials */}
            <Section className="bg-gray-800/30">
                <SectionTitle>商业模式与财务预期</SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div variants={fadeIn}>
                        <h3 className="text-2xl font-bold text-white text-center mb-6">年均收入结构 (亿元)</h3>
                        <div style={{ width: '100%', height: 400 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5} labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                        {revenueData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.75rem' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <h3 className="text-2xl font-bold text-white text-center mb-6">EBITDA 增长模型 (亿元)</h3>
                        <div style={{ width: '100%', height: 400 }}>
                            <ResponsiveContainer>
                                <BarChart data={financialModelData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="year" stroke="#9ca3af" />
                                    <YAxis stroke="#9ca3af" />
                                    <Tooltip cursor={{fill: 'rgba(16, 185, 129, 0.1)'}} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.75rem' }} />
                                    <Bar dataKey="ebitda" name="EBITDA" fill="url(#colorEbitda)" />
                                    <defs>
                                        <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </Section>
            
            {/* Implementation Plan */}
            <Section>
                <SectionTitle>项目实施计划</SectionTitle>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 w-1 bg-gray-700 h-full transform -translate-x-1/2"></div>
                    <motion.div variants={staggerContainer} className="space-y-16">
                    {timelineData.map((item, index) => (
                        <motion.div key={index} variants={fadeIn} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-5/12">
                                <Card className={`text-right ${index % 2 !== 0 ? 'text-left' : ''}`}>
                                    <p className="text-sky-400 font-bold text-lg">{item.year}</p>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </Card>
                            </div>
                            <div className="relative w-2/12 flex justify-center">
                                <div className="z-10 bg-emerald-500 rounded-full h-12 w-12 flex items-center justify-center text-white shadow-lg ring-8 ring-gray-900">
                                    <item.icon className="h-6 w-6"/>
                                </div>
                            </div>
                            <div className="w-5/12"></div>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </Section>

            {/* Investment Highlights */}
            <Section className="bg-gray-800/30">
                <SectionTitle>投资亮点</SectionTitle>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <Award className="h-10 w-10 text-amber-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">高回报、低风险</h3>
                        <p>IRR 15-18%，5.5年资本回收期，多重风险对冲机制保障投资安全。</p>
                    </Card>
                    <Card>
                        <Lightbulb className="h-10 w-10 text-amber-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">绿色金融创新</h3>
                        <p>发行双功能专项债券，为投资者提供ESG与财务双重超额收益。</p>
                    </Card>
                    <Card>
                        <ShieldCheck className="h-10 w-10 text-amber-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">强大政府支持</h3>
                        <p>获得多项官方审批及财政补贴，享受国家级生态科技新城政策红利。</p>
                    </Card>
                </div>
            </Section>

            {/* Call to Action */}
            <footer className="relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img src="https://placehold.co/1920x1080/111827/10b981/png?text=&font=lato" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" alt="city skyline"/>
                <div className="relative z-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        共创可持续未来
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        “绿洲之心”不仅是一个地产项目，更是一次对未来城市生活方式的投资。我们诚邀您加入，共同开启这座绿色创新空间的未来。
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 120 }}
                    >
                         <a href="mailto:invest@oasis-heart.com" className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                            联系我们 & 索取详细资料
                        </a>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default Page8;