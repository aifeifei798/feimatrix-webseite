import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Target, Leaf, Users, ShieldCheck, DollarSign, BrainCircuit, Bot, HardDrive, Group, Handshake, ShieldAlert, GanttChartSquare, Milestone, Flag, AlertTriangle, CheckCircle, Cpu, Recycle, ArrowRight, LineChart as LineChartIcon } from 'lucide-react';

const KpiCard = ({ icon, title, kpi, description, color }) => {
  const IconComponent = icon;
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 flex flex-col hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-3">
        <IconComponent className={`h-7 w-7 mr-4 ${color}`} />
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      </div>
      <p className={`text-3xl font-bold mb-2 ${color}`}>{kpi}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

const investmentData = [
  { name: '技术平台', value: 500, description: '生成式 AI 大模型、数据湖、治理工具' },
  { name: '人才与能力建设', value: 150, description: 'AI-ESG 中心、员工培训' },
  { name: '流程改进 & 数字化', value: 120, description: '业务流程重构、运营平台、KPIs 看板' },
  { name: '合作与生态', value: 30, description: '顶尖大学合作、数据授权、行业联盟' },
  { name: '风险与治理', value: 10, description: 'AI 伦理委员会、法务 & 安全预算' },
];

const COLORS = ['#059669', '#0891b2', '#6366f1', '#d946ef', '#f43f5e'];

const RiskCard = ({ category, risk, mitigation }) => (
    <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
        <div className="flex items-center mb-3">
            <AlertTriangle className="h-5 w-5 mr-3 text-amber-400" />
            <h4 className="font-semibold text-lg text-amber-400">{category}</h4>
        </div>
        <p className="text-slate-300 mb-3 text-sm">{risk}</p>
        <div className="border-t border-slate-700 pt-3 mt-3 flex items-start">
            <CheckCircle className="h-5 w-5 mr-3 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
                <h5 className="font-medium text-emerald-400 mb-1">防控/减轻措施</h5>
                <p className="text-slate-400 text-sm">{mitigation}</p>
            </div>
        </div>
    </div>
);

const TimelineItem = ({ year, milestones, isLast = false }) => (
  <div className="relative pl-8">
    {!isLast && <div className="absolute left-3 top-1 bottom-0 w-0.5 bg-slate-700"></div>}
    <div className="absolute left-0 top-0 flex items-center justify-center bg-emerald-500 rounded-full h-6 w-6">
      <Flag className="h-3 w-3 text-white" />
    </div>
    <div className="mb-8">
      <p className="font-bold text-lg text-emerald-400 mb-2">{year}</p>
      <ul className="space-y-2 text-slate-300 list-inside">
        {milestones.map((milestone, index) => (
          <li key={index} className="flex items-start text-sm">
            <ArrowRight className="h-4 w-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: milestone }} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ESGStrategyDashboard = () => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="text-center py-12">
            <div className="inline-block bg-slate-800/50 p-4 rounded-full border border-slate-700 mb-6">
                <BrainCircuit className="h-12 w-12 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
            生成式 AI 驱动的 ESG 战略仪表盘
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-400">
            将生成式 AI 转化为 ESG 的“智慧引擎”，让环境效益、社会价值和治理透明量化、可视化，并直接转化为更高的利润率与市场价值。
            </p>
        </header>

        {/* KPIs Section */}
        <section id="kpis" className="my-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-3"><Target className="text-sky-400" />战略愿景 & 关键绩效指标 (KPIs)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard icon={Leaf} title="E‑Leadership" kpi="-30% CO₂e" description="CO₂e / 产值 (USD) 在 FY28 vs FY24 下降 30%。AI 生成新材料/包装销售比例 ≥ 15%。" color="text-emerald-400" />
                <KpiCard icon={Users} title="S‑Impact" kpi="+12% NPS" description="ESG 消费者 NPS 提升 12%。内部 ESG 满意度 ≥ 85%。" color="text-sky-400" />
                <KpiCard icon={ShieldCheck} title="G‑Governance" kpi="AA+ MSCI" description="MSCI ESG Rating 从 A 升至 AA+。AI 报表准确率 ≥ 95%，人工审校时间缩短 70%。" color="text-indigo-400" />
                <KpiCard icon={DollarSign} title="Financial Uplift" kpi="+2.5% EBIT" description="EBIT Margin 改善 ≥2.5个百分点。可持续产品收入 FY30 达 $18 bn。" color="text-fuchsia-400" />
            </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-3"><HardDrive className="text-sky-400" />投资与资源分配 (总投入: $810 M)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-slate-800/30 p-8 rounded-2xl border border-slate-800">
                <div className="lg:col-span-2 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                        <Pie
                            data={investmentData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            innerRadius={70}
                            fill="#8884d8"
                            dataKey="value"
                            paddingAngle={5}
                        >
                            {investmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none" />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                background: '#1e293b',
                                border: '1px solid #334155',
                                borderRadius: '0.5rem',
                            }}
                            itemStyle={{ color: '#cbd5e1' }}
                         />
                        <Legend iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="lg:col-span-3 space-y-4">
                    {investmentData.map((item, index) => (
                        <div key={item.name} className="flex items-start">
                           <div style={{ backgroundColor: COLORS[index % COLORS.length] }} className="w-3 h-3 rounded-full mr-4 mt-1.5 flex-shrink-0"></div>
                           <div>
                                <p className="font-semibold text-slate-100">{item.name} - <span className="font-bold text-lg">${item.value} M</span></p>
                                <p className="text-sm text-slate-400">{item.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Application Scenarios */}
        <section id="scenarios" className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-3"><Bot className="text-sky-400" />具体生成式 AI 应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-3"><Recycle className="h-6 w-6 text-emerald-400 mr-3" /> <h4 className="text-lg font-semibold">生态创新 (AI‑Green Design)</h4></div>
                    <p className="text-sm text-slate-400">输入约束，24h内生成10+设计方案。预计材料使用下降25%，包装碳足迹下降30%。</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-3"><LineChartIcon className="h-6 w-6 text-emerald-400 mr-3" /> <h4 className="text-lg font-semibold">供应链韧性 (AI‑Forecast)</h4></div>
                    <p className="text-sm text-slate-400">实时生成风险情景，优化物流路径。预测精准度提至92%，中断费用降低超60%。</p>
                </div>
                 <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-3"><GanttChartSquare className="h-6 w-6 text-emerald-400 mr-3" /> <h4 className="text-lg font-semibold">ESG报告 (LLM‑Reporting)</h4></div>
                    <p className="text-sm text-slate-400">8h内自动生成符合SASB/TCFD的报告草稿，人工审校时间缩短70%。</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-3"><Users className="h-6 w-6 text-emerald-400 mr-3" /> <h4 className="text-lg font-semibold">消费者参与 (AI‑Assistant)</h4></div>
                    <p className="text-sm text-slate-400">通过社交渠道提供个性化可持续生活建议，每月触达30M用户，提升NPS 12%。</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-3"><Group className="h-6 w-6 text-emerald-400 mr-3" /> <h4 className="text-lg font-semibold">人才发展 (AI‑ESG Mentor)</h4></div>
                    <p className="text-sm text-slate-400">内部LLM充当“ESG导师”，并监控招聘晋升过程，提升多元化比例。</p>
                </div>
                <div className="bg-emerald-800/50 p-6 rounded-lg border border-emerald-700 text-center flex flex-col justify-center">
                    <h4 className="text-lg font-semibold text-white">预期财务效应</h4>
                    <p className="text-3xl font-bold text-emerald-300 mt-2">+2.5-3 pp</p>
                    <p className="text-sm text-emerald-200">EBIT Margin 改善</p>
                </div>
            </div>
        </section>

        {/* Risk Management */}
        <section id="risks" className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-3"><ShieldAlert className="text-sky-400" />风险管理 & 对策</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RiskCard category="财务" risk="高额前期投入可能未达预期 ROI。" mitigation="阶段性评审，每12月检查KPI达成度；通过内部资本市场发行ESG‑AI绿色债。" />
            <RiskCard category="运营" risk="与老系统兼容性差，数据质量不足。" mitigation="建立“AI‑ESG数据治理平台”，采用API中间层快速集成。" />
            <RiskCard category="声誉" risk="报告现“Greenwashing”，模型存有偏见。" mitigation="实施“human‑in‑the‑loop”审查机制，建立AI伦理委员会进行第三方审计。" />
            <RiskCard category="监管" risk="法规变化导致合规成本上升。" mitigation="成立全球AI‑ESG法务小组，实时监测法规动态，采用“最严格first”政策。" />
            <RiskCard category="网络安全" risk="大模型被盗或被用于对抗性攻击。" mitigation="部署AI特定防护（加密、零信任），配备红队测试和安全事件响应 playbook。" />
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-3"><Milestone className="text-sky-400" />实施路线图 (3-5 年)</h2>
            <div className="max-w-3xl mx-auto bg-slate-800/30 p-8 rounded-2xl border border-slate-800">
                <TimelineItem year="Year 1 (2024-25)" milestones={['成立AI‑ESG中心，招聘核心团队。', '完成数据湖建设与ESG数据标准化。', '启动AI-Green Design原型项目，取得10%能耗降低验证。']} />
                <TimelineItem year="Year 2 (2025-26)" milestones={['大规模推广AI‑Green Design至所有新品。', '推出LLM‑Driven ESG报告系统，完成FY28报告自动化。', '供应链中断费用下降至 <b>$5 bn</b> (累计节约$3 bn)。']} />
                <TimelineItem year="Year 3 (2026-27)" milestones={['AI‑Logistics覆盖全球150+运输路线，物流碳排放下降8%。', '推出AI‑ESG Mentor平台，员工ESG认知提升至≥90%。']} />
                <TimelineItem year="Year 4 (2027-28)" milestones={['可持续产品收入突破 <b>$15 bn</b>。', 'MSCI ESG Rating提升至 <b>AA+</b>。', 'AI-driven ROI达到预期 EBIT Margin <b>+2.8 pp</b>。']} />
                <TimelineItem year="Year 5 (2028-30)" milestones={['完成全公司范围内的AI‑ESG自动化。', '持续迭代模型，实现“AI‑Zero Waste” roadmap。', '通过ESG-AI绿色债成功发行，融资成本下降0.4%。']} isLast={true} />
            </div>
        </section>

         {/* Footer */}
        <footer className="text-center py-10 mt-12 border-t border-slate-800">
            <p className="text-slate-400 max-w-4xl mx-auto">
            通过3-5年的系统化推进，我们将凭借AI带来的效率提升和溢价销售实现显著的财务增长，为股东、员工、消费者以及整个行业创造共赢价值。
            </p>
            <div className="mt-4 flex justify-center items-center gap-2 text-sm text-slate-500">
                <Cpu className="h-4 w-4" />
                <span>Powered by Generative AI & Sustainable Vision</span>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default ESGStrategyDashboard;