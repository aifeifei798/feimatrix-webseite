import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Waves, CheckCircle, Users, Sun, Rocket, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import * as tailwindColors from 'tailwindcss/colors';

// --- 数据定义 (集中在文件顶部) ---
const overviewData = [
  {
    icon: <Waves color={tailwindColors.blue[500]} />,
    title: "品牌定位",
    content: "现代都市青年（22-35岁）在“环保、品质、有设计感”之间寻找平衡。我们是“零排放、无缝对接、即刻穿戴”的首选。"
  },
  {
    icon: <CheckCircle color={tailwindColors.green[500]} />,
    title: "核心卖点",
    content: "• 100% 海洋塑料瓶再生纤维\n• 男女同款，兼顾功能与时尚\n• 极简设计，适配多场合\n• 可持续包装 & 可回收产品生命周期\n• 与第三方环保认证机构合作，保证透明溯源"
  },
  {
    icon: <Users color={tailwindColors.blue[500]} />,
    title: "目标市场",
    content: "• 年龄 22-35 岁\n• 城市一线/二线青年 (上海、北京、广州、深圳)\n• 高学历（本科及以上）\n• 月均可支配收入 ≥ 1.5 k RMB\n• 对环保议题有明确立场，愿意为“绿色”支付溢价\n• 常使用 Douyin、Xiaohongshu、微博等社交平台，关注时尚与生活方式类内容"
  }
];

const budgetData = [
  { name: "Paid Digital Ads", value: 150 },
  { name: "KOL / Influencer Partnerships", value: 125 },
  { name: "Content Creation & Distribution", value: 100 },
  { name: "Community Management & Social Ops", value: 75 },
  { name: "PR, Events & Pop-ups", value: 50 },
  { name: "Contingency / Miscellaneous", value: 50 }
];

const executionPlanData = [
  // 第1个阶段：这是你已有的数据
  {
    phase: { title: "第 1-2 月 (Pre-Launch / 预热)", icon: <Sun color={tailwindColors.orange[300]} /> },
    items: [
      { title: "官方抖音/小红书账号正式上线" },
      { title: "签约 micro-KOL 完成先行试穿视频与社群种草帖" },
      { title: "开设邮件订阅漏斗推出海洋塑料瓶故事专属电子书" },
      { title: "付费广告启动品牌认知 + 注册转化" },
      { title: "建立社群小程序社群邀请 KOL 参与环保挑战 UGC 抽奖" }
    ],
    kpi: [
      { label: "曝光", value: "总视频播放量 ≥ 5M 次；话题讨论 > 10k 条" },
      { label: "获取", value: "邮件订阅 ≥ 15k 名；社群成员 ≥ 8k 人" },
      { label: "转化", value: "预售订单（限定折扣）≥ 2k 件" }
    ]
  },
  // 新增阶段 2: 上市
  {
    phase: { title: "第 3 月 (Launch / 正式上市)", icon: <Rocket color={tailwindColors.green[400]} /> },
    items: [
      { title: "抖音直播首发，邀请主流时尚KOL现场带货" },
      { title: "官方商城开启“限量闪购”，提供限时折扣" },
      { title: "在上海举行线下快闪店，配合“回收瓶换礼品”活动" },
      { title: "付费广告加码，重点投放转化漏斗，目标ROAS ≥ 3.0" },
      { title: "社群“品牌日”活动，鼓励首批用户分享开箱体验" }
    ],
    kpi: [
      { label: "销量", value: "首季订单量 ≥ 4k 件；收入 ≥ 6M RMB" },
      { label: "转化率", value: "网站访问→下单 ≥ 5%" },
      { label: "品牌信任", value: "UGC产品试穿视频 > 2k 条；正面评论 ≥ 80%" }
    ]
  },
  // 新增阶段 3: 持续运营
  {
    phase: { title: "第 4-6 月 (Post-Launch / 持续运营)", icon: <TrendingUp color={tailwindColors.blue[400]} /> },
    items: [
      { title: "推出会员体系，提供积分兑换与专属折扣" },
      { title: "与知名环保NGO合作，举办线上线下环保讲座" },
      { title: "发布联名款或季节限定新品，保持市场热度" },
      { title: "启动“蔚蓝伙伴”计划，招募校园与城市环保大使" },
      { title: "优化再营销广告，提升用户复购率" }
    ],
    kpi: [
      { label: "用户留存", value: "月度复购率 ≥ 15%" },
      { label: "品牌声量", value: "全网声量环比增长 ≥ 20%" },
      { label: "社群活跃", value: "社群月度活跃用户 (MAU) ≥ 10k" }
    ]
  }
];

const risksData = [
  {
    riskItem: { title: "市场同质化竞争激烈，品牌难以脱颖而出", solution: "差异化创新与故事化营销" }
  },
  {
    riskItem: { title: "原材料供应受限导致生产周期拉长或成本上升", solution: "多元化采购和技术升级" }
  },
  {
    riskItem: { title: "消费者对环保承诺持怀疑态度，引发‘绿漂’舆论危机", solution: "第三方认证与透明溯源" }
  },
  {
    riskItem: { title: "物流 & 售后服务体验不佳导致品牌声誉受损", solution: "自建物流节点与售后保障" }
  }
];


// --- 组件定义 ---

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl font-bold text-[#00BFFF]">{title}</h2>
    <p className="text-gray-400 mt-2">{subtitle}</p>
    <div className="mt-4 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent h-1 w-1/3 mx-auto"></div>
  </motion.div>
);

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="py-8 text-center"
  >
    <div className="flex items-center justify-center flex-col gap-2">
      <Waves color={tailwindColors.blue[500]} size={48} />
      <h1 className="text-[#00BFFF] text-4xl font-bold">「蔚蓝循环」</h1>
      <p className="text-gray-400 text-lg">Azure Cycle 品牌上市整合营销战略</p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-[#00BFFF] italic mt-2"
      >
        “时尚不应以牺牲地球为代价。”
      </motion.p>
    </div>
  </motion.header>
);

const OverviewCard = ({ item }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="bg-[#161C24] p-6 border border-gray-700 rounded-lg flex flex-col items-start text-left"
  >
    {item.icon}
    <h3 className="text-white font-bold text-xl mt-4">{item.title}</h3>
    <p className="text-gray-400 mt-2" dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br />') }} />
  </motion.div>
);

const BudgetPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? tailwindColors.cyan[500] : tailwindColors.blue[600]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

const BudgetLegend = ({ data }) => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    return (
        <div className="flex flex-col justify-center w-full">
            {data.map((entry, index) => (
                <motion.div
                    key={`legend-${index}`}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mt-4 w-full"
                >
                    <div className="flex items-center">
                        <div style={{ width: 16, height: 16, backgroundColor: index % 2 === 0 ? tailwindColors.cyan[500] : tailwindColors.blue[600] }} className="rounded-sm" />
                        <span className="ml-3 text-gray-300">{entry.name}</span>
                    </div>
                    <div className="text-right">
                        <span className="ml-4 font-semibold text-white">{entry.value}万</span>
                        <span className="ml-4 text-gray-400 text-sm">{`${Math.round(entry.value / total * 100)}%`}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const TimelineItem = ({ phase, items, kpi, index }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="relative pl-10"
  >
    {/* Timeline icon */}
    <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 border-2 border-[#00BFFF]">
      {phase.icon}
    </div>
    
    {/* Timeline Content */}
    <div className="bg-[#161C24] p-4 border border-gray-700 rounded-lg ml-4">
      <h3 className="text-white font-bold text-lg">{phase.title}</h3>
      <ul className="mt-3 list-disc list-inside space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-400">{item.title}</li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-700">
        <h4 className="text-white font-semibold">关键指标 (KPIs):</h4>
        <ul className="mt-2 space-y-1">
            {kpi.map((k, i) => (
                <li key={i} className="text-gray-300 text-sm">
                    <span className="font-bold text-cyan-400">{k.label}:</span> {k.value}
                </li>
            ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const FlipCard = ({ riskItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d', minHeight: '120px' }} // FIX 2: Added min-height
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div style={{ backfaceVisibility: 'hidden' }} className="absolute w-full h-full bg-red-800 bg-opacity-50 p-4 rounded-lg flex items-center justify-start border border-red-600">
            <AlertTriangle className="text-red-400 mr-3 flex-shrink-0" size={24} />
            <span className="text-white font-semibold">{riskItem.title}</span>
        </div>
        {/* Back */}
        <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className="absolute w-full h-full bg-blue-800 bg-opacity-50 p-4 rounded-lg flex items-center justify-start border border-blue-600">
            <ShieldCheck className="text-blue-400 mr-3 flex-shrink-0" size={24} />
            <span className="text-white font-semibold">{riskItem.solution}</span>
        </div>
      </motion.div>
    </div>
  );
};

// --- Sections ---
const OverviewSection = ({ data }) => (
    <section className="py-12">
        <SectionTitle title="项目概览" subtitle="品牌、卖点与目标市场分析" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item) => <OverviewCard key={item.title} item={item} />)}
        </div>
    </section>
);

const BudgetSection = ({ data }) => (
  <section className="py-12">
    <SectionTitle title="预算分配" subtitle="总计550万，各渠道投入占比" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#161C24] p-8 rounded-lg border border-gray-700">
        <div><BudgetPieChart data={data} /></div>
        <div><BudgetLegend data={data} /></div>
    </div>
  </section>
);

const ExecutionPlanSection = ({ data }) => (
  <section className="py-12">
    <SectionTitle title="执行计划" subtitle="分阶段行动方案与KPI考核" />
    <div className="relative border-l-2 border-cyan-700 ml-4 space-y-12">
      {data.map((item, index) => (
        <TimelineItem key={index} phase={item.phase} items={item.items} kpi={item.kpi} index={index} />
      ))}
    </div>
  </section>
);

const RisksSection = ({ data }) => (
  <section className="py-12">
    <SectionTitle title="风险与对策" subtitle="点击卡片查看解决方案" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((item, index) => <FlipCard key={index} riskItem={item.riskItem} />)}
    </div>
  </section>
);


// --- Main Page Component ---
export default function AzureCycleStrategy() {
  return (
    // FIX 1: Added min-h-screen and padding for visibility
    <div className="bg-[#0B1215] text-white min-h-screen font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
            <OverviewSection data={overviewData} />
            <BudgetSection data={budgetData} />
            <ExecutionPlanSection data={executionPlanData} />
            <RisksSection data={risksData} />
        </main>
      </div>
    </div>
  );
}