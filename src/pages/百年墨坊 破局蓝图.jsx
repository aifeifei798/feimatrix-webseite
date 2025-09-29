import React from 'react';
import { motion } from 'framer-motion';
import { 
    Feather, 
    Cpu, 
    Target, 
    ShieldCheck, 
    Zap, 
    Users, 
    Package, 
    Leaf, 
    Milestone,
    AlertTriangle,
    CheckCircle,
    Award,
    Briefcase,
    Lightbulb,
    BarChart,
    TrendingUp,
    Users2,
    Repeat,
    DollarSign,
    Anchor,
    Box,
    Flag
} from 'lucide-react';

const BaiNianMoFang = () => {
    const strategicPillars = [
        {
            icon: ShieldCheck,
            title: "核心工艺守护者 (Preserve)",
            points: [
                { title: "限量版“百年墨坊”钢笔", desc: "每季度推出，限量200支。采用自家炼钢技术、手工打磨、真丝绳包装。" },
                { title: "“墨坊体验馆”", desc: "在北京、上海、巴黎设立沉浸式店铺，提供笔尖调试、墨水配制等工作坊。" },
                { title: "工匠学院 & 传承项目", desc: "与高校合作培养新匠人，并开设在线“工匠课堂”分享文化。" }
            ]
        },
        {
            icon: Zap,
            title: "智能升级先锋 (Upgrade)",
            points: [
                { title: "“墨智”系列", desc: "传统造型内嵌NFC+蓝牙芯片，支持手写笔记实时云同步。可拆卸数字化模块。" },
                { title: "配套App", desc: "支持iOS/Android，兼容主流工具。功能包括手写识别、耗材监测、云备份。" },
                { title: "技术细节", desc: "采用Qualcomm Snapdragon Wearable SoC + 低功耗 LiDAR进行墨迹检测，保证真实触感。" }
            ]
        },
        {
            icon: Users,
            title: "品牌体验共创者 (Co‑Creator)",
            points: [
                { title: "多元化活动平台", desc: "“墨与像素”年度艺术节，结合传统书法与数字艺术。与知名设计师联名。" },
                { title: "社群生态", desc: "通过官方社交媒体分享幕后故事与技巧。建立VIP会员俱乐部，提供专享体验。" }
            ]
        },
        {
            icon: Package,
            title: "生态系统构建者 (Ecosystem)",
            points: [
                { title: "订阅 Ink & Care Box", desc: "每月寄送高级墨水与保养工具，App联动推送提醒。" },
                { title: "企业解决方案", desc: "提供定制钢笔和数字化协作平台。开发“写字云”私有版SaaS。" }
            ]
        },
        {
            icon: Leaf,
            title: "可持续发展倡议者 (Sustainability)",
            points: [
                { title: "循环材料", desc: "使用回收钢铁和天然植物染料。推出“旧笔再生”计划。" },
                { title: "碳中和目标", desc: "2028年前工厂实现能源全转向可再生电力。支持森林恢复项目。" }
            ]
        }
    ];

    const roadmap = [
        { phase: "1️⃣ 基础巩固", time: "Q3‑Q4 2025", goal: "完成“墨坊体验馆”设计；启动工匠学院招生。", budget: "¥50M", color: "bg-teal-600" },
        { phase: "2️⃣ 技术落地", time: "Q1‑Q3 2026", goal: "硬件原型完成；App MVP 上线测试版。", budget: "¥120M", color: "bg-cyan-600" },
        { phase: "3️⃣ 市场验证", time: "Q4 2026", goal: "“墨智”系列限量发布（500支）；配套App正式上线。", budget: "¥80M", color: "bg-sky-600" },
        { phase: "4️⃣ 品牌共创", time: "2027 年度", goal: "举办首届“墨与像素”艺术节；开启会员俱乐部。", budget: "¥100M", color: "bg-indigo-600" },
        { phase: "5️⃣ 生态扩张", time: "2028+", goal: "Ink & Care Box 全面铺开；企业解决方案签约20家高端客户。", budget: "¥200M", color: "bg-purple-600" },
    ];

    const kpis = [
        { icon: Flag, title: "品牌认知度", target: "全球奢侈品消费人群中提升30%", timeline: "Q4 2026" },
        { icon: Box, title: "新品销量", target: "“墨智”系列首季 ≥ 5,000 支", timeline: "2026/2027" },
        { icon: TrendingUp, title: "App 活跃度", target: "日活 ≥ 50,000；月留存率 ≥ 40%", timeline: "Q3 2027" },
        { icon: Users2, title: "会员增长", target: "VIP年度新增 ≥ 5,000 人", timeline: "2028" },
        { icon: DollarSign, title: "生态收入占比", target: "订阅与企业方案收入 ≥ 25% 总营收", timeline: "2029" },
        { icon: Repeat, title: "可持续指标", target: "工厂能源可再生；旧笔回收率 ≥ 70%", timeline: "2030" },
    ];

    const risks = [
        { risk: "技术落地慢", mitigation: "与成熟供应商战略合作；设立外部评审委员会加速研发。" },
        { risk: "品牌稀释", mitigation: "采用分层包装与定价策略，保留传统高端形象，定位“墨智”为未来奢侈体验。" },
        { risk: "技术依赖", mitigation: "与多家芯片厂商签订备选方案；采用本地数据加密；设置灾难恢复机制。" },
        { risk: "市场接受度低", mitigation: "持续用户访谈与体验改造；提供“一键转回传统模式”功能。" },
        { risk: "成本控制失衡", mitigation: "建立“利润预留”基金；采用模块化设计降低组装成本。" },
        { risk: "可持续目标难以达成", mitigation: "与专业回收机构合作；设立“墨坊基金”专款专用并定期公开报告。" },
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

    const Section = ({ title, subtitle, children }) => (
        <motion.section 
            className="py-16 px-4 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 text-center">{title}</motion.h2>
                {subtitle && <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-500 dark:text-gray-400 text-center max-w-3xl mx-auto">{subtitle}</motion.p>}
                <div className="mt-12">
                    {children}
                </div>
            </div>
        </motion.section>
    );

    return (
        <div className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-700 dark:text-gray-300">
            {/* Hero Section */}
            <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-fountain-pen-drawing-a-straight-line-2915-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <motion.div 
                    className="relative z-20 px-4 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif tracking-tight">
                        破局蓝图——《百年墨坊》
                    </h1>
                    <p className="mt-6 text-2xl md:text-4xl font-light tracking-wider">
                        “墨香不灭，数字新生”
                    </p>
                </motion.div>
            </header>

            <main>
                {/* Strategic Core */}
                <Section title="战略核心：双维写法" subtitle="传统与科技不是对立，而是相辅相成的两种写法。双轨并行，互补共生。">
                    <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <Feather className="w-10 h-10 text-amber-800" />
                                <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">传统工艺</h3>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">“手写的温度”“匠人的呼吸”</p>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                                <li>保留限量版“百年墨坊”钢笔</li>
                                <li>深化工匠培训与传承</li>
                                <li>打造独家“墨坊体验馆”</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                             <div className="flex items-center gap-4">
                                <Cpu className="w-10 h-10 text-sky-500" />
                                <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">智能科技</h3>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">“书写的未来”“纸上云端”</p>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                                <li>开发“墨智”系列智能钢笔</li>
                                <li>推出配套App，实现云同步</li>
                                <li>AI转换、数字化编辑</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </Section>
                
                {/* Vision & Value */}
                <div className="bg-gray-100 dark:bg-gray-800">
                <Section title="战略愿景 & 核心价值">
                    <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="text-center p-6">
                            <Award className="w-12 h-12 mx-auto text-amber-800" />
                            <h4 className="mt-4 text-xl font-bold">品牌定位</h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">成为“书写仪式感 + 数字效率”的行业领袖。</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center p-6">
                            <Lightbulb className="w-12 h-12 mx-auto text-sky-500" />
                            <h4 className="mt-4 text-xl font-bold">顾客洞察</h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">追求手写情怀，亦需数字化便捷的高端人群。</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center p-6">
                             <Briefcase className="w-12 h-12 mx-auto text-teal-600" />
                            <h4 className="mt-4 text-xl font-bold">企业使命</h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">“让每一次书写都成为永恒。”</p>
                        </motion.div>
                    </motion.div>
                </Section>
                </div>
                
                {/* Strategic Pillars */}
                <Section title="五大战略支柱">
                    <motion.div variants={containerVariants} className="space-y-8">
                        {strategicPillars.map((pillar, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <pillar.icon className="w-16 h-16 text-amber-800" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">{pillar.title}</h3>
                                        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {pillar.points.map((point, pIndex) => (
                                                <div key={pIndex}>
                                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{point.title}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{point.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                {/* Roadmap */}
                <div className="bg-gray-100 dark:bg-gray-800">
                <Section title="阶段实施路线图">
                    <div className="relative">
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <motion.div variants={containerVariants} className="space-y-12 md:space-y-0">
                            {roadmap.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                                    <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:col-start-2'}`}>
                                        <div className="text-center md:text-left md:w-5/6">
                                            <p className={`text-lg font-semibold ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.time}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-5 h-5 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                                    </div>
                                    <div className={`mt-4 md:mt-0 ${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                                        <div className={`relative p-6 rounded-lg shadow-lg text-white ${item.color}`}>
                                            <h4 className="text-xl font-bold">{item.phase}</h4>
                                            <p className="mt-2">{item.goal}</p>
                                            <p className="mt-2 font-semibold text-sm opacity-80">预算: {item.budget}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Section>
                </div>

                {/* KPIs */}
                <Section title="成功衡量标准 (KPIs)">
                     <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kpis.map((kpi, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-start space-x-4">
                                <kpi.icon className="w-8 h-8 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{kpi.title}</h4>
                                    <p className="mt-1">{kpi.target}</p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{kpi.timeline}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>
                
                {/* Risk Assessment */}
                <div className="bg-gray-100 dark:bg-gray-800">
                <Section title="风险评估与缓释措施">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {risks.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="p-6 grid md:grid-cols-12 gap-4 items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="md:col-span-5 flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{item.risk}</p>
                                    </div>
                                    <div className="md:col-span-7 flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <p className="text-gray-600 dark:text-gray-400">{item.mitigation}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
                </div>

                {/* Final Recommendation */}
                <Section title="最终建议：双轨并行的“共赢”战略">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.div variants={itemVariants} className="flex items-start gap-4 p-4">
                            <Anchor className="w-8 h-8 text-amber-800" />
                            <div>
                                <h4 className="text-xl font-bold">保留并强化核心工艺</h4>
                                <p>让“百年墨坊”钢笔继续成为高端奢侈品、文化收藏的代表。</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-4 p-4">
                            <Zap className="w-8 h-8 text-sky-500" />
                            <div>
                                <h4 className="text-xl font-bold">引领智能化写作趋势</h4>
                                <p>“墨智”系列将手写与数字无缝衔接，让品牌在科技领域具备话语权。</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-4 p-4">
                            <Users className="w-8 h-8 text-teal-600" />
                            <div>
                                <h4 className="text-xl font-bold">打造全方位品牌体验与生态系统</h4>
                                <p>通过体验馆、社群和订阅服务，提升客户粘性并开辟多元化收入。</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-4 p-4">
                            <Leaf className="w-8 h-8 text-green-500" />
                            <div>
                                <h4 className="text-xl font-bold">坚持可持续发展原则</h4>
                                <p>嵌入循环材料与碳减排目标，让品牌在未来消费趋势中更具竞争力。</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div variants={itemVariants} className="mt-12 text-center bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-700 p-8 rounded-r-lg max-w-4xl mx-auto">
                        <p className="text-lg italic text-amber-900 dark:text-amber-100">
                            “百年墨坊”不是停留在过去的工艺传奇，而是引领书写新时代的奢华典范。传统匠心 + 前沿科技 = 让每一次文字都成为永恒与未来的桥梁。
                        </p>
                    </motion.div>
                </Section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 px-4 text-center">
                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                 >
                    <p className="text-xl italic max-w-4xl mx-auto">“在百年传承的光环下，你们也必须拥有未来的视角。让‘墨与像素’对话，让品牌既能守住根，又能拥抱潮。”</p>
                    <p className="mt-4 text-sm text-gray-400">- CEO 提醒</p>
                    <div className="mt-8 text-gray-500">
                        百年墨坊 &copy; 2025
                    </div>
                 </motion.div>
            </footer>
        </div>
    );
};

export default BaiNianMoFang;