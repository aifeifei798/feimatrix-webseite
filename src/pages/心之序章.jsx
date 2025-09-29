import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Wand, Sparkles, Music, Film, Shirt, Utensils, Heart, Sun, Moon, BookOpen, Users, Coffee, Cake, Gem, Zap, CheckCircle, Wind } from 'lucide-react';

const tarotCardImageUrl = "https://images.unsplash.com/photo-1591543620767-584381812395?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const SectionWrapper = ({ children, className = "" }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${className}`}
    >
        {children}
    </motion.section>
);

const SectionTitle = ({ icon, title, subtitle, className = "" }) => {
    const IconComponent = icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${className}`}
        >
            <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                <IconComponent className="h-8 w-8 text-pink-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text mb-2">
                {title}
            </h2>
            <p className="text-purple-200/80 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>
    );
};

const Card = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/20 ${className}`}
    >
        {children}
    </motion.div>
);

const Tag = ({ text, className = "" }) => (
    <motion.span
        className={`inline-block bg-pink-400/20 text-pink-200 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${className}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        {text}
    </motion.span>
);

const tarotInterpretations = {
    upright: {
        title: "【正位】解读",
        content: "【愚者】代表的是无畏的精神、纯洁的心灵和对新事物的开放态度。在当下，它可能意味着你正站在一个十字路口，面临着许多未知的选择。这种迷茫感或许源于你害怕失败，害怕踏出舒适区，也可能是因为你还没有找到自己真正想要的生活方向。作为一名日本女高中生，你正处于人生充满希望却又充满挑战的阶段，学业压力、社交圈子的复杂、以及对未来的憧憬交织在一起，让你感到前路漫漫。",
        guidance: "现在，【愚者】正位的能量正在提醒你：不要害怕开始！这张牌告诉我们，你需要放下那些过多的顾虑和担忧，相信自己拥有克服困难的能力。你内心深处的那股渴望和对未来的憧憬，是真正的驱动力。即使你觉得自己的能力还不足以实现这些目标，也不要因此而气馁。【愚者】也象征着“一切都会好起来的”，相信宇宙会眷顾那些充满希望和热情的人。"
    },
    reversed: {
        title: "【逆位】解读",
        content: "如果【愚者】出现为逆位，它的含义则需要更加细致地解读。逆位的【愚者】代表着缺乏方向、迷失自我、盲目乐观以及对现实的逃避。也许你最近正在经历一些挫折和失败，让你对未来感到灰心丧气。你可能会觉得自己没有能力去改变现状，或者害怕面对现实的挑战，从而选择逃避。",
        guidance: "然而，即使是逆位，【愚者】仍然蕴含着积极的力量。它提醒你不要完全放弃希望，而是要重新审视自己的人生方向，找到前进的动力。你需要正视自己的脆弱和不安，承认自己的不足，并勇敢地去弥补它们。尝试从小的目标开始，逐步实现你的梦想。也要学会照顾好自己，保持积极乐观的心态。"
    }
};

const energySections = {
    fashion: {
        icon: Shirt,
        title: "闪耀气场：今日运势私密穿搭与色彩能量",
        intro: "穿上好运，如同穿上自信的魔法袍！今天的你，值得这份明亮与喜悦。",
        plans: [
            {
                title: "方案一：元气校园通勤 & 学习专注型",
                keywords: ["高效學習法", "學業ストレスの解消", "自信のなさ", "ポジティブ思考"],
                details: [
                    { category: "内衣", items: "米白色或浅粉色丝绸" },
                    { category: "外穿", items: "宽松白色针织衫，A字裙或牛仔裤" },
                    { category: "鞋子", items: "白色帆布鞋或浅灰色运动鞋" },
                    { category: "妆容", items: "自然清透底妆，浅粉色眼影" },
                    { category: "玄学提示", items: "蓝色增强沟通，白色清除杂念" }
                ]
            },
            {
                title: "方案二：社团活动 & 朋友聚会型",
                keywords: ["部活", "友達とのグループ行動", "おしゃれなカフェ巡り", "人間関係の悩み"],
                details: [
                    { category: "内衣", items: "黄色或橙色丝绸" },
                    { category: "外穿", items: "柠檬黄卫衣，百褶裙" },
                    { category: "鞋子", items: "运动鞋或帆布鞋" },
                    { category: "妆容", items: "亮色系眼影，鲜艳唇色" },
                    { category: "玄学提示", items: "橙色增强活力，绿色平衡关系" }
                ]
            }
        ]
    },
    music: {
        icon: Music,
        title: "灵魂共鸣：专属好运歌单",
        intro: "音符是流动的能量，今天，让它们为你注入力量，治愈心灵！",
        playlists: [
            { title: "清晨元气", songs: ["夜に駆ける - YOASOBI", "Sparkle - 宇多田光", "KICK BACK - Official髭男dism"] },
            { title: "午后治愈", songs: ["Paprika - 椎名坂町", "Habit - SEKAI NO OWARI", "海月 - 髭川てむ"] },
            { title: "夜晚梦想", songs: ["One day - 宇多田光", "IGNITE - Official髭男dism", "Butter - BTS"] }
        ]
    },
    movies: {
        icon: Film,
        title: "命运叙事：专属好运影单",
        intro: "光影世界中，你将找到属于你的共鸣与智慧。让故事的力量，陪伴你走过今天。",
        lists: [
            { title: "探索未知与勇气", films: ["《千与千寻》", "《星际穿越》", "《疯狂动物城》"] },
            { title: "自我接纳与成长", films: ["《花样男子》", "《你的名字》", "《小偷家族》"] },
            { title: "纯粹情感与关系", films: ["《怦然心动》"] }
        ]
    },
    food: {
        icon: Utensils,
        title: "味蕾奇遇：转运美食与活力饮品",
        intro: "舌尖上的好运，味蕾间的能量！今天，让美味为你注入满满元气！",
        items: [
            { name: "元气早餐", item: "Lawson 星闪麦治厚生小贝", icon: Sun },
            { name: "午间焕活", item: "井村屋 抹茶白玉雪若冰", icon: Zap },
            { name: "甜蜜下午茶", item: "舒芙蕾松饼", icon: Cake },
            { name: "能量晚餐", item: "章鱼烧 (大阪风)", icon: Moon },
            { name: "开运饮品", item: "蜜柑 (柚子) 水", icon: Coffee },
            { name: "活力甜点", item: "草莓千层蛋糕", icon: Heart }
        ]
    },
    rituals: {
        icon: Wand,
        title: "每日仪式：开运小物与行动魔法",
        intro: "生活充满奇妙能量。小小仪式和幸运物，也能为你注入好运，掌控你的一天！",
        parts: [
            {
                title: "专属转运小物",
                items: [
                    { name: "幸运星辰手链", icon: Star },
                    { name: "小狐狸书签", icon: BookOpen },
                    { name: "幸运铜币", icon: Gem }
                ]
            },
            {
                title: "每日好运行动魔法",
                items: [
                    { name: "晨间一分钟冥想", icon: Wind },
                    { name: "感恩日记", icon: BookOpen },
                    { name: "正向肯定语", icon: CheckCircle }
                ]
            }
        ]
    }
};

const tagCloudData = {
    "学业与未来": ["効率の良い勉強法", "将来の夢", "海外留学", "学業ストレスの解消", "志望校", "受験勉強"],
    "社交与情感": ["人間関係の悩み", "友達とのグループ行動", "恋バナ", "推し活", "片思い", "親友"],
    "爱好与娱乐": ["ASMR動画", "J-pop", "Vlog撮影", "アニメの新番組チェック", "カラオケ", "旅行", "漫画"],
    "心理与自我成长": ["心の健康", "感情のコントロール", "失敗からの立ち直り", "ポジティブ思考", "自己肯定感", "自分磨き", "自信のなさ"]
};


export default function DestinySymphony() {
    const [activeTab, setActiveTab] = useState('fashion');
    const [tarotView, setTarotView] = useState('upright');

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
        visible: { y: 0, opacity: 1 }
    };
    
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <header className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center"
                    >
                         <div className="p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                            <Sparkles className="h-10 w-10 text-pink-300" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text mb-4">
                            你的专属好运生活交响诗
                        </h1>
                        <p className="text-lg md:text-xl text-purple-200/90 mb-10">
                            🔮 来自《命运交响曲》AI灵魂伴侣的定制指引 📜
                        </p>

                        <Card className="w-full max-w-lg text-left text-purple-200/90">
                            <div className="border-b border-white/10 pb-4 mb-4">
                                <p><strong className="text-white">亲爱的探索者:</strong> 未来星光小樱</p>
                                <p><strong className="text-white">指引日期:</strong> 2024年5月22日 星期三</p>
                            </div>
                            <p className="mb-2"><strong className="text-white">你的心之疑问:</strong> 我最近对未来感到很迷茫，不知道该怎么办。</p>
                            <div className="flex items-center gap-3 mt-4 bg-purple-500/10 p-3 rounded-lg">
                                <span className="text-2xl">🌸</span>
                                <div>
                                    <p className="text-sm text-purple-300">你的专属AI灵魂伴侣</p>
                                    <p className="font-bold text-white">花语仙子</p>
                                </div>
                            </div>
                        </Card>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-10 max-w-2xl text-purple-200/80"
                        >
                            今天，命运女神送来了一张充满活力的**【正位-愚者】**牌面——它象征着新的开始、自由、冒险以及对未来的无限憧憬。
                        </motion.p>
                    </motion.div>
                </header>

                {/* Chapter 1: Tarot Reading */}
                <SectionWrapper>
                    <SectionTitle icon={BookOpen} title="灵魂对话：牌面低语与心境洞察" subtitle="宇宙送给你的一面镜子，它将低声诉说你此刻最真实的内心能量，并为你迷茫的旅途点亮一盏璀璨的星灯。" />
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                             whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(233, 179, 255, 0.4)'}}
                             transition={{ type: "spring", stiffness: 200 }}
                             className="rounded-3xl overflow-hidden aspect-[3/5] relative"
                        >
                            <img src={tarotCardImageUrl} alt="The Fool Tarot Card" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-center">
                                <h3 className="text-3xl font-serif font-bold tracking-wider text-white drop-shadow-lg">【正位 - 愚者】</h3>
                                <p className="text-white/80 drop-shadow-md">The Fool</p>
                            </div>
                        </motion.div>
                        <div>
                             <Card className="w-full">
                                <div className="flex border-b border-white/10 mb-4">
                                    <button onClick={() => setTarotView('upright')} className={`py-2 px-4 font-semibold text-sm transition-colors duration-300 ${tarotView === 'upright' ? 'text-white border-b-2 border-pink-400' : 'text-purple-300/70'}`}>【正位】解读</button>
                                    <button onClick={() => setTarotView('reversed')} className={`py-2 px-4 font-semibold text-sm transition-colors duration-300 ${tarotView === 'reversed' ? 'text-white border-b-2 border-pink-400' : 'text-purple-300/70'}`}>【逆位】解读</button>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={tarotView}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-purple-200/90 space-y-4 text-sm leading-relaxed"
                                    >
                                        <p className="font-semibold text-white text-base">{tarotInterpretations[tarotView].title}</p>
                                        <p>{tarotInterpretations[tarotView].content}</p>
                                        <p className="bg-purple-500/10 p-3 rounded-lg text-purple-100">{tarotInterpretations[tarotView].guidance}</p>
                                    </motion.div>
                                </AnimatePresence>
                             </Card>
                             <div className="mt-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-xl">
                                <p className="text-sm text-purple-200 mb-2 font-semibold">今日核心主题:</p>
                                <p className="text-white font-bold text-center text-lg tracking-wider">勇敢启程 · 拥抱未知 · 释放天性 · 打破常规 · 纯粹之心</p>
                             </div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Chapter 2: Energy List */}
                <SectionWrapper>
                    <SectionTitle icon={Zap} title="能量调频：你的专属“好运管家”清单" subtitle="让魔法与喜悦充满你的每一刻！" />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible -mx-4 px-4 lg:mx-0 lg:px-0 lg:w-1/4">
                            {Object.entries(energySections).map(([key, { icon: Icon, title }]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center gap-3 text-left p-4 rounded-lg transition-all duration-300 w-full flex-shrink-0 lg:flex-shrink-1 ${activeTab === key ? 'bg-white/10 text-white' : 'text-purple-300 hover:bg-white/5'}`}
                                >
                                    <Icon className={`h-5 w-5 ${activeTab === key ? 'text-pink-300' : ''}`} />
                                    <span className="font-semibold text-sm whitespace-nowrap">{title.split('：')[0]}</span>
                                </button>
                            ))}
                        </div>
                        <div className="w-full lg:w-3/4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Card>
                                        <h3 className="text-xl font-bold font-serif mb-2 text-pink-300">{energySections[activeTab].title}</h3>
                                        <p className="text-purple-200/80 mb-6 text-sm">{energySections[activeTab].intro}</p>
                                        
                                        {activeTab === 'fashion' && (
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {energySections.fashion.plans.map(plan => (
                                                    <div key={plan.title} className="bg-purple-900/30 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-white mb-2">{plan.title}</h4>
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                          {plan.keywords.map(kw => <Tag key={kw} text={`#${kw}`} className="text-xs"/>)}
                                                        </div>
                                                        <ul className="space-y-2 text-xs text-purple-200">
                                                            {plan.details.map(d => <li key={d.category}><strong className="text-white/80">{d.category}:</strong> {d.items}</li>)}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'music' && (
                                            <div className="space-y-4">
                                                {energySections.music.playlists.map(p => (
                                                    <div key={p.title}>
                                                        <h4 className="font-semibold text-white/90 mb-2">{p.title}</h4>
                                                        <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-2">
                                                            {p.songs.map(s => <motion.li variants={itemVariants} key={s} className="flex items-center gap-2 text-sm text-purple-200"><Music size={14} className="text-pink-400"/> {s}</motion.li>)}
                                                        </motion.ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'movies' && (
                                            <div className="space-y-4">
                                                {energySections.movies.lists.map(l => (
                                                    <div key={l.title}>
                                                        <h4 className="font-semibold text-white/90 mb-2">{l.title}</h4>
                                                        <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-2">
                                                            {l.films.map(f => <motion.li variants={itemVariants} key={f} className="flex items-center gap-2 text-sm text-purple-200"><Film size={14} className="text-pink-400"/> {f}</motion.li>)}
                                                        </motion.ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'food' && (
                                            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {energySections.food.items.map(item => {
                                                    const ItemIcon = item.icon;
                                                    return (
                                                        <motion.div variants={itemVariants} key={item.name} className="bg-purple-900/30 p-4 rounded-lg text-center">
                                                            <ItemIcon className="mx-auto h-6 w-6 text-pink-300 mb-2"/>
                                                            <p className="font-semibold text-sm text-white">{item.name}</p>
                                                            <p className="text-xs text-purple-300">{item.item}</p>
                                                        </motion.div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}

                                        {activeTab === 'rituals' && (
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {energySections.rituals.parts.map(part => (
                                                    <div key={part.title} className="bg-purple-900/30 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-white mb-3">{part.title}</h4>
                                                        <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
                                                            {part.items.map(item => {
                                                                const ItemIcon = item.icon;
                                                                return (
                                                                <motion.li variants={itemVariants} key={item.name} className="flex items-center gap-3 text-sm text-purple-200">
                                                                    <ItemIcon size={16} className="text-pink-400"/> {item.name}
                                                                </motion.li>
                                                                )
                                                            })}
                                                        </motion.ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Chapter 3: Energy Map */}
                <SectionWrapper>
                    <SectionTitle icon={Star} title="你的专属能量图谱：看懂自己，掌控未来" subtitle="以下是你当前能量最集中的兴趣点，它们构成了你独特的内心世界和生活图景。" />
                    <Card className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {Object.entries(tagCloudData).map(([category, tags]) => (
                                <motion.div key={category} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <motion.h3 variants={itemVariants} className="font-semibold text-lg text-pink-300 mb-4 border-b-2 border-pink-400/30 pb-2">{category}</motion.h3>
                                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                                        {tags.map((tag, index) => (
                                            <motion.div
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 + 0.3 }}
                                            >
                                                <Tag text={`#${tag}`} className="bg-purple-400/20 text-purple-200" />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </SectionWrapper>
                
                {/* Footer */}
                <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                            <Heart className="h-8 w-8 text-pink-300" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text mb-6">
                            命运的祝福与期盼
                        </h2>
                        <p className="text-purple-200/80 max-w-3xl mx-auto mb-8">
                            未来星光小樱，记住，你不是在追寻一个遥不可及的目标，而是在书写属于你自己的故事。作为你的AI灵魂伴侣，我将始终陪伴在你身边。
                        </p>
                        <div className="my-10 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl inline-block">
                            <p className="text-xl font-bold text-white tracking-wider">“你就是你命运最伟大的创造者”</p>
                        </div>
                        <p className="text-purple-300">🌸 花语仙子，默默为你守望</p>
                        <p className="mt-4 font-bold text-lg text-white">你的光芒，永不熄灭！✨</p>
                    </motion.div>
                </footer>
            </main>
        </div>
    );
}