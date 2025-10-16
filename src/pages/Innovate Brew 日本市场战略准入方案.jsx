import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Puzzle, ShieldCheck, MapPin, Rocket, Crown, DollarSign, TrendingUp, BarChart, Flag, GanttChart, AlertTriangle, CheckCircle, Coffee, Cherry, FileText, Users, Store, Languages, Scale, Ship, Handshake } from 'lucide-react';

const Section = ({ icon: Icon, title, children, className = "" }) => (
  <motion.section
    className={`mb-16 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-6">
      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mr-4">
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="pl-16 space-y-6 text-gray-600 dark:text-gray-300">
      {children}
    </div>
  </motion.section>
);

const Card = ({ icon: Icon, title, children }) => (
  <motion.div
    className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-indigo-500 mr-3" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
    </div>
    <div className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
      {children}
    </div>
  </motion.div>
);

const TimelineItem = ({ icon: Icon, title, description, isLast = false }) => (
  <div className="relative pl-10">
    {!isLast && <div className="absolute left-4 top-5 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>}
    <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 text-white">
      <Icon className="w-5 h-5" />
    </div>
    <motion.div
      className="pb-12"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-bold text-lg mb-1 text-gray-800 dark:text-gray-100">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  </div>
);

const App = () => {
  const financialData = [
    { metric: '收入（百万日元）', year1: '¥41', year3: '¥108', year5: '¥190', logic: '由销量增长及咖啡豆订阅等经常性收入驱动。' },
    { metric: '毛利率', year1: '48%', year3: '52%', year5: '54%', logic: '随规模效应、供应链优化及高毛利订阅业务占比提升而改善。' },
    { metric: '息税折旧摊销前利润率', year1: '-15%', year3: '8%', year5: '22%', logic: '随着初期投入被增长的收入摊薄，预计在第3年实现盈利。' },
  ];

  const riskData = [
    { category: '市场风险', risk: '消费者接受速度慢于预期。', strategy: '第一阶段的东京市场即为“试点”。全国扩张的投资将严格与东京市场的成功KPI挂钩。' },
    { category: '运营风险', risk: '本地客服未能满足日本极高的服务标准。', strategy: '将初期客服外包给拥有严格服务等级协议（SLA）的顶级本地服务商，并建立内部质控团队。' },
    { category: '竞争风险', risk: 'De\'Longhi等主要竞争对手推出类似智能产品。', strategy: '加速构建我们的订阅服务和社群生态，建立用户忠诚度，提高转换成本。' },
    { category: '财务风险', risk: '日元/美元汇率大幅波动。', strategy: '采用远期外汇合约等金融工具进行对冲，以保护硬件进口成本的利润率。' },
  ];
  
  const launchPlan = [
      { icon: Scale, title: '法律与运营', description: '完成“Innovate Brew Japan株式会社”的法人注册；锁定关键运营伙伴（物流、客服）。' },
      { icon: Users, title: '人才招聘', description: '聘请一位在日本高端消费品市场拥有深厚经验的国家经理。' },
      { icon: Store, title: '旗舰店项目', description: '锁定银座店址，启动设计与施工。' },
      { icon: Languages, title: '产品本地化', description: '与日本本土机构合作，启动App界面、营销文案和包装的深度本地化。' }
  ];


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-700 dark:text-gray-300">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-20 border-b border-gray-200 dark:border-gray-700 pb-12">
          <motion.div 
            className="inline-flex items-center justify-center gap-3 mb-4 text-indigo-600 dark:text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cherry className="w-8 h-8" />
            <span className="text-2xl font-light">+</span>
            <Coffee className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            “樱花特调”项目
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovate Brew日本市场战略准入方案
          </motion.p>
          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>保密与专有信息 | 致 Innovate Brew 董事会</p>
            <p>2025年10月17日</p>
          </motion.div>
        </header>

        {/* Executive Summary */}
        <Section icon={Briefcase} title="执行摘要">
          <p className="text-lg leading-relaxed">Innovate Brew正处在一个关键的增长拐点。我们的分析证实，日本市场不仅是一次常规的业务扩张，更是奠定我们作为全球高端智能家电领域领导者地位的<strong className="text-indigo-600 dark:text-indigo-400 font-semibold">一项战略要务</strong>。日本市场独特地融合了根深蒂固的咖啡文化、对高科技的高度接纳以及对卓越设计的极致追求，为我们的核心价值主张创造了理想的土壤。</p>
          <motion.div 
            className="mt-6 p-6 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border border-indigo-200 dark:border-indigo-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">
              我们的核心建议是：自明年第一季度起，果断、分阶段地进入日本市场。我们预测，一套以混合分销模式和深度文化本地化为核心的卓越执行策略，将使Innovate Brew成功占据高端咖啡机市场的可观份额，在五年内实现<strong className="text-2xl font-bold">约19亿日元</strong>（约合1250万美元）的年收入，并建立一个可盈利、能自我持续的业务实体。
            </p>
          </motion.div>
        </Section>

        {/* Why Japan? */}
        <Section icon={Flag} title="市场战略要务：为何是日本？为何是现在？">
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon={Target} title="A. 市场吸引力">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="font-semibold">富裕的消费群体</strong>：高可支配收入，愿为品质支付溢价。</li>
                <li><strong className="font-semibold">成熟的咖啡文化</strong>：全球第四大消费国，追求“第三次浪潮”体验。</li>
                <li><strong className="font-semibold">“こだわり”精神</strong>：对细节和完美的极致追求，与产品价值完美契合。</li>
              </ul>
            </Card>
            <Card icon={Puzzle} title="B. 战略契合度">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="font-semibold">技术赋能体验</strong>：AI推荐与App精密控制吸引技术爱好者。</li>
                <li><strong className="font-semibold">设计即差异化</strong>：简约奢华美学，契合日本设计哲学。</li>
                <li><strong className="font-semibold">体验超越产品</strong>：销售卓越咖啡“体验”，迎合注重仪式感的文化。</li>
              </ul>
            </Card>
            <Card icon={ShieldCheck} title="C. 竞争格局机遇">
              <p className="mb-2">高端智能领域的<strong className="font-semibold text-indigo-500">“蓝海”</strong>。</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>欧洲巨头智能化创新缓慢。</li>
                <li>胶囊咖啡机无法满足专业需求。</li>
                <li>本土品牌缺乏高端智能型号。</li>
                <li><strong className="font-semibold">战略空白点</strong>：缺乏硬件+订阅+社群的完整解决方案。</li>
              </ul>
            </Card>
          </div>
        </Section>
        
        {/* Strategic Blueprint */}
        <Section icon={GanttChart} title="战略蓝图：分三阶段实现市场领导地位">
            <div className="relative">
                <TimelineItem icon={MapPin} title="第一阶段：“建立桥头堡”（第1-2年）- 聚焦东京" description="目标：建立品牌认知，验证商业模式。策略：银座旗舰店、顶级百货合作、本地化D2C电商。" />
                <TimelineItem icon={Rocket} title="第二阶段：“加速扩张”（第3-4年）- 模式复制" description="目标：复制成功经验。策略：扩张至大阪和名古屋，探索“店中店”模式，推出日本限定产品。" />
                <TimelineItem icon={Crown} title="第三阶段：“实现全国化”（第5年及以后）- 塑造领导地位" description="目标：成为无可争议的市场领导者。策略：全国分销网络，推出“Innovate Brew Prime”会员服务。" isLast={true} />
            </div>
        </Section>

        {/* Financials */}
        <Section icon={BarChart} title="财务预测与投资分析">
            <motion.div 
                className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">初始投资需求</h4>
                    <p className="text-gray-600 dark:text-gray-400">用于市场进入、旗舰店建设、初始库存及市场营销。</p>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    5亿日元
                    <span className="text-lg font-medium text-gray-500 dark:text-gray-400"> (约 $370万)</span>
                </div>
            </motion.div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                  <th className="p-4 font-semibold">关键指标</th>
                  <th className="p-4 font-semibold text-center">第1年</th>
                  <th className="p-4 font-semibold text-center">第3年</th>
                  <th className="p-4 font-semibold text-center">第5年</th>
                  <th className="p-4 font-semibold hidden md:table-cell">核心逻辑</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((row, index) => (
                  <motion.tr 
                    key={row.metric} 
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="p-4 font-medium">{row.metric}</td>
                    <td className="p-4 text-center">{row.year1}</td>
                    <td className="p-4 text-center">{row.year3}</td>
                    <td className="p-4 text-center font-bold text-indigo-600 dark:text-indigo-400">{row.year5}</td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">{row.logic}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.div 
            className="mt-8 text-center p-6 bg-green-50 dark:bg-green-900/40 rounded-xl border border-green-200 dark:border-green-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
              <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                  项目预计将在5年内实现约<strong className="text-2xl">188%</strong>的投资回报率，并在第3年达到<strong className="text-2xl">盈亏平衡点</strong>。
              </p>
          </motion.div>
        </Section>

        {/* Roadmap & Risk */}
        <Section icon={AlertTriangle} title="实施路线图与风险管控">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">90天启动计划</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {launchPlan.map((item, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="mx-auto mb-3 bg-indigo-100 dark:bg-indigo-900/50 h-12 w-12 rounded-full flex items-center justify-center">
                           <item.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">风险管控计划</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                <thead className="bg-gray-200 dark:bg-gray-800">
                    <tr>
                    <th className="p-4 font-semibold">风险类别</th>
                    <th className="p-4 font-semibold">具体风险</th>
                    <th className="p-4 font-semibold">应对策略</th>
                    </tr>
                </thead>
                <tbody>
                    {riskData.map((row, index) => (
                    <motion.tr 
                        key={row.category} 
                        className="border-b border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <td className="p-4 font-medium">{row.category}</td>
                        <td className="p-4">{row.risk}</td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{row.strategy}</td>
                    </motion.tr>
                    ))}
                </tbody>
                </table>
            </div>
        </Section>
        
        {/* Conclusion */}
        <Section icon={CheckCircle} title="结论与后续步骤" className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <p className="text-lg leading-relaxed mb-6">进入日本市场的商业案例清晰、有力且具备高度可行性。这不仅是一个能带来丰厚财务回报的市场，更是一个能通过应对全球最严苛消费环境的挑战，从而磨砺我们全球竞争力的战略要地。</p>
            <motion.div 
                className="p-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: 'spring' }}
            >
                <h3 className="text-2xl font-bold mb-2">行动建议</h3>
                <p className="text-indigo-200 max-w-2xl mx-auto">我们建议董事会批准<strong className="font-bold text-white text-3xl mx-2">5亿日元</strong>的初始投资，并授权管理层立即启动90天启动计划。我们的团队已准备好领导此项计划，并将按季度汇报关键绩效指标（KPI）的进展。</p>
            </motion.div>
        </Section>

      </main>
    </div>
  );
};

export default App;