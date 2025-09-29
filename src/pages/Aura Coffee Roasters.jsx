import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { 
    Users, 
    Leaf, 
    Building, 
    Globe, 
    Sprout, 
    Sparkles, 
    Coffee,
    Target, 
    TrendingUp, 
    ShoppingCart, 
    DollarSign, 
    Wallet, 
    Mail, 
    MousePointer, 
    UsersRound, 
    HeartHandshake, 
    Gem,
    Megaphone,
    LineChart,
    Search,
    Video,
    AtSign,
    Gift
} from 'lucide-react';

const audienceData = [
  {
    icon: Users,
    title: 'Urban Coffee Connoisseurs',
    age: '25–40 yrs',
    details: ['Mid‑to‑high income ($60k+)', 'Lives in metro areas', 'Values quality over price', 'Follows sustainability & food-tech content'],
    why: 'Highest willingness to pay premium for single-origin beans. Likely to engage with educational and storytelling content.',
  },
  {
    icon: Leaf,
    title: 'Eco‑Aware Professionals',
    age: '30–50 yrs',
    details: ['Salary $70k+; owns a home', 'Conscious consumer, actively seeks “green” products', 'Reads lifestyle blogs, listens to podcasts', 'Engages with Facebook Groups / LinkedIn Communities'],
    why: 'Strong brand loyalty potential when they see tangible impact (e.g., direct support to farmers).',
  },
  {
    icon: Building,
    title: 'Co‑Working & Small Office Buyers',
    age: 'Decision Makers',
    details: ['Decision makers for office supply', 'Budget $5k+ per year for premium beans', 'Seeks consistent quality, convenient delivery'],
    why: 'Bulk subscription orders boost average order value and repeat frequency.',
  },
];

const messagingPillars = [
    {
        icon: Globe,
        title: "Single Origin Provenance",
        message: "“From the highlands of Guatemala to your home, each bean tells a story.”",
        touchpoint: "Story‑telling videos, product pages with farm profiles."
    },
    {
        icon: Sprout,
        title: "Sustainability & Ethical Sourcing",
        message: "“Every cup supports regenerative farming and fair wages for growers.”",
        touchpoint: "Infographics, behind‑the‑scenes reels, sustainability badge."
    },
    {
        icon: Sparkles,
        title: "Hand‑Crafted Roasting Expertise",
        message: "“Our master roasters bring out the nuanced flavor notes that make our beans world‑class.”",
        touchpoint: "Brewing tutorials, barista‑style videos, tasting notes PDF."
    },
    {
        icon: Coffee,
        title: "Premium Experience",
        message: "“Elevate your daily routine with a cup that feels like luxury coffee shop quality at home.”",
        touchpoint: "Lifestyle imagery, subscription gifting option."
    }
];

const budgetData = [
  { name: 'Social Media Ads', value: 35, amount: 17500, color: '#A16207', icon: Megaphone },
  { name: 'Search Engine Marketing', value: 25, amount: 12500, color: '#CA8A04', icon: Search },
  { name: 'Video & Content Production', value: 15, amount: 7500, color: '#EAB308', icon: Video },
  { name: 'Influencer / KOL Partnerships', value: 10, amount: 5000, color: '#FACC15', icon: AtSign },
  { name: 'Email Marketing Automation', value: 5, amount: 2500, color: '#FEF08A', icon: Mail },
  { name: 'Referral Program', value: 5, amount: 2500, color: '#FEF9C3', icon: Gift },
];

const campaignPhases = [
    {
        month: "1–2",
        title: "Brand Awareness",
        objectives: ["Reach new prospects", "Establish Aura as the go‑to premium, sustainable coffee brand"],
        tactics: ["Launch IG/FB carousel & Reels featuring “From Farm to Cup” storytelling.", "YouTube pre-roll on coffee‑related channels.", "Google Display & Discovery ads.", "Micro‑influencer teasers (unboxing, first‑taste)."]
    },
    {
        month: "3–4",
        title: "User Education & Engagement",
        objectives: ["Educate audience about flavor profiles", "Drive traffic to blog/vlog content"],
        tactics: ["Publish 2‑week “Coffee Journey” video series.", "Host live Q&A on IG/TikTok with master roaster.", "Email nurture drip (welcome + education).", "Google Search shift toward long‑tail terms."]
    },
    {
        month: "5–6",
        title: "Conversion & Retention",
        objectives: ["Convert engaged prospects into buyers", "Boost AOV via bundles/subscriptions", "Activate referral program"],
        tactics: ["Limited‑time bundle offers.", "Retargeting carousel ads with promo code.", "Email cart abandonment flow & flash sale.", "Referral launch: “Refer a friend, get 15% off.”"]
    }
];

const kpis = [
    { icon: TrendingUp, label: "Revenue Growth", value: "+30% YoY" },
    { icon: ShoppingCart, label: "Average Order Value", value: "+10%" },
    { icon: Target, label: "Conversion Rate", value: "2.5–3.0%" },
    { icon: Wallet, label: "Cost Per Acquisition", value: "< $25" },
    { icon: DollarSign, label: "Return on Ad Spend", value: "≥ 4x" },
    { icon: Mail, label: "Email Open Rate", value: "20–25%" },
    { icon: MousePointer, label: "Social Ad CTR", value: "1.5–2.0%" },
    { icon: UsersRound, label: "Referrals", value: "≥ 200" },
    { icon: HeartHandshake, label: "Social Engagement", value: "+50%" },
    { icon: Gem, label: "Customer Lifetime Value", value: "+15%" },
];


const Page4 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        },
    };

    const Section = ({ title, subtitle, children }) => (
        <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-yellow-100 mb-2 text-center">{title}</motion.h2>
            {subtitle && <motion.p variants={itemVariants} className="text-lg text-yellow-300 mb-8 text-center max-w-3xl mx-auto">{subtitle}</motion.p>}
            <div className="mt-8">{children}</div>
        </motion.section>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.header 
                    className="text-center py-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 mb-4">
                        Aura Coffee Roasters
                    </h1>
                    <p className="text-2xl text-amber-200">6-Month, $50k Advertising Strategy</p>
                    <p className="text-lg text-gray-400 mt-2">Goal: Drive a 30% increase in online sales while maintaining a sustainable CAC.</p>
                </motion.header>

                {/* Key Insight */}
                <motion.div 
                    className="bg-gray-800/50 border border-amber-600/30 rounded-2xl p-8 mb-16 text-center shadow-2xl shadow-amber-900/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <p className="text-xl text-gray-300 italic max-w-4xl mx-auto">
                        Aura’s premium price is justified by three pillars – <span className="font-semibold text-amber-300">single origin provenance</span>, <span className="font-semibold text-amber-300">sustainability commitments</span>, and <span className="font-semibold text-amber-300">hand-crafted roasting expertise</span>. Our strategy amplifies these strengths to a high-LTV audience willing to pay for ethical, artisanal coffee.
                    </p>
                </motion.div>
                
                {/* Audience */}
                <Section title="Target Audience" subtitle="Primary focus on Urban Connoisseurs & Eco-Aware Professionals (70% of spend).">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {audienceData.map((audience, i) => (
                            <motion.div key={i} variants={itemVariants} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-amber-400 transition-colors duration-300 flex flex-col">
                                <div className="flex items-center mb-4">
                                    <audience.icon className="w-10 h-10 text-amber-400 mr-4"/>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{audience.title}</h3>
                                        <p className="text-sm text-gray-400">{audience.age}</p>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                                    {audience.details.map((detail, j) => <li key={j}>{detail}</li>)}
                                </ul>
                                <div className="mt-auto pt-4 border-t border-gray-700">
                                    <p className="text-amber-200 text-sm font-semibold">Why It Matters:</p>
                                    <p className="text-gray-400 text-sm">{audience.why}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>
                
                {/* Messaging */}
                <Section title="Core Messaging" subtitle="Tagline for all creatives: “Taste the Story – Sustainably Sourced, Expertly Roasted.”">
                     <div className="grid md:grid-cols-2 gap-8">
                        {messagingPillars.map((pillar, i) => (
                            <motion.div key={i} variants={itemVariants} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <pillar.icon className="w-8 h-8 text-amber-400 mr-3"/>
                                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                                </div>
                                <p className="text-lg italic text-amber-100 mb-3">{pillar.message}</p>
                                <p className="text-gray-400"><span className="font-semibold text-gray-300">Touchpoint:</span> {pillar.touchpoint}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
                
                {/* Budget */}
                <Section title="Channel Strategy & Budget Allocation" subtitle="A multi-channel approach to build awareness, drive conversions, and foster loyalty.">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div className="w-full h-96" variants={itemVariants}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={budgetData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" fill="#8884d8" paddingAngle={5}>
                                        {budgetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip contentStyle={{ background: '#1F2937', border: '1px solid #4B5563' }} />
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-3xl font-bold">$50,000</text>
                                    <text x="50%" y="50%" dy={25} textAnchor="middle" className="fill-gray-400 text-sm">Total 6-Month Budget</text>
                                </PieChart>
                            </ResponsiveContainer>
                        </motion.div>
                        <motion.div className="space-y-4" variants={containerVariants}>
                            {budgetData.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                                    <div className="flex items-center">
                                        <item.icon className="w-6 h-6 mr-3" style={{ color: item.color }} />
                                        <span className="text-white">{item.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-lg text-white">${item.amount.toLocaleString()}</span>
                                        <span className="text-sm ml-2 text-gray-400">({item.value}%)</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Section>

                {/* Phased Plan */}
                <Section title="Phased Campaign Plan" subtitle="A structured 6-month rollout to maximize impact and ROI.">
                    <div className="relative">
                         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
                         <motion.div className="space-y-16" variants={containerVariants}>
                            {campaignPhases.map((phase, i) => (
                                <motion.div key={i} variants={itemVariants} className="relative flex justify-center">
                                    <div className={`w-full lg:w-2/5 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 ${i % 2 === 0 ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'}`}>
                                        <p className="text-sm font-semibold text-amber-400">Months {phase.month}</p>
                                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                                        <p className="font-semibold text-gray-300 mb-2">Objectives:</p>
                                        <ul className={`list-disc list-inside mb-4 ${i % 2 === 0 ? 'lg:text-right lg:list-none' : 'lg:text-left'}`}>
                                            {phase.objectives.map((obj, j) => <li key={j}>{obj}</li>)}
                                        </ul>
                                        <p className="font-semibold text-gray-300 mb-2">Key Tactics:</p>
                                        <p className="text-sm text-gray-400">{phase.tactics.join(' ')}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amber-400 rounded-full border-4 border-gray-900 flex items-center justify-center text-gray-900 font-bold">{i+1}</div>
                                </motion.div>
                            ))}
                         </motion.div>
                    </div>
                </Section>

                {/* KPIs */}
                <Section title="Key Performance Indicators" subtitle="Measuring success against clear, quantifiable targets.">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {kpis.map((kpi, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-gray-800 p-4 rounded-xl text-center shadow-lg border border-gray-700 flex flex-col items-center justify-center aspect-square">
                                <kpi.icon className="w-8 h-8 text-amber-400 mb-2"/>
                                <p className="font-bold text-2xl text-white">{kpi.value}</p>
                                <p className="text-sm text-gray-400">{kpi.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Roadmap */}
                <Section title="Quick-Start Roadmap">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-lg font-bold text-amber-400 mb-2">Weeks 0-1</p>
                            <h3 className="font-semibold text-white">Kick-off & Launch</h3>
                            <p className="text-sm text-gray-400 mt-1">Finalize creative, set up tracking, & launch Phase 1 ads.</p>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-lg font-bold text-amber-400 mb-2">Months 1-2</p>
                            <h3 className="font-semibold text-white">Review & Pivot</h3>
                            <p className="text-sm text-gray-400 mt-1">Evaluate CPL & ROAS, reallocate budget to top performers.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-lg font-bold text-amber-400 mb-2">Months 3-6</p>
                            <h3 className="font-semibold text-white">Educate & Convert</h3>
                            <p className="text-sm text-gray-400 mt-1">Deploy Phase 2/3 tactics, push for conversions & retention.</p>
                        </motion.div>
                    </div>
                </Section>
                
                {/* Bottom Line */}
                <motion.footer 
                    className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl p-8 my-16 text-center shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">The Bottom Line</h3>
                    <p className="text-lg text-gray-800 max-w-4xl mx-auto">
                        By concentrating our $50,000 spend on high-impact storytelling, intent-focused SEM, and authentic influencer voices—while nurturing leads and activating referrals—we can unlock a 30% increase in online sales within six months, establishing Aura as a leader in the premium, sustainable coffee market.
                    </p>
                </motion.footer>

            </div>
        </div>
    );
};

export default Page4;