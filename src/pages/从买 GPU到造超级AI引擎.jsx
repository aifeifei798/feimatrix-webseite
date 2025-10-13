import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, MemoryStick, Zap, Network, Server, Thermometer, Code, Settings, Factory, DollarSign, Rocket, CheckCircle, Scale, Wind, BrainCircuit, Cloud, Telescope } from 'lucide-react';

const Section = ({ title, icon, children, className = '' }) => {
  const IconComponent = icon;
  return (
    <motion.section 
      className={`py-12 md:py-20 px-4 md:px-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          {IconComponent && <IconComponent className="w-8 h-8 mr-4 text-cyan-400" />}
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
};

const FeatureCard = ({ icon, title, description, items = [] }) => {
  const IconComponent = icon;
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full"
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-slate-700/50 rounded-lg mr-4">
          <IconComponent className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-slate-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const AdvantageCard = ({ icon, title, description }) => {
    const IconComponent = icon;
    return (
        <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="inline-block p-4 bg-slate-700 rounded-full mb-4">
                <IconComponent className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">{description}</p>
        </motion.div>
    );
};


const AISupercomputerWebsite = () => {
  const coreComponents = [
    {
      icon: BrainCircuit,
      title: "自研 AI 芯片 (AISC-ASIC)",
      description: "不止是“用 NVIDIA GPU”，而是自己设计专用芯片，从根本上为 AI 优化。",
      items: [
        "AISC-Core: 基于 Arm Neoverse + 自定义张量协处理器",
        "内置 Transformer 加速单元 (TAU)",
        "AISC-GPU: Hopper/Blackwell 深度定制版，更大 L2 缓存",
        "AISC-NPU: 推理专用，<1ms 延迟，超高能效",
      ],
    },
    {
      icon: Server,
      title: "GPU 阵列: 8× Blackwell B100 模块",
      description: "自研、制造、封装、测试，完全自主控制的计算核心。",
      items: [
        "自研 B100 模块，每卡 80GB HBM3",
        "16x NVLink 5.0 全互联拓扑，<3μs 延迟",
        "先进液冷设计，直接通过 GPU 模块散热",
        "2U 模块化结构，支持热插拔、在线升级",
      ],
    },
    {
      icon: Cpu,
      title: "自研 CPU 架构: AISC-CPU",
      description: "基于 AMD Zen-5 深度定制，构建数据处理与调度的坚实基础。",
      items: [
        "128 核心 (8x CCD) + 64MB L3 缓存",
        "内置 AI 加速器 Fabric (AIF)",
        "支持 CXL 3.0，实现内存一致性",
        "双通道 DDR5-6400 + HBM2e 缓存层",
      ],
    },
  ];

  const systemComponents = [
      {
          icon: Network,
          title: "系统互联: 自研 InfiniBand Switch Mesh",
          description: "比 NVLink 更强的网络架构，实现全网自动负载均衡。",
          items: ["基于 NVIDIA Quantum-2 InfiniBand", "自研控制芯片，端到端延迟 <1μs", "带宽 ≥ 400 Gbps/链路", "支持 RDMA over Converged Ethernet (RoCEv3)"]
      },
      {
          icon: Wind,
          title: "冷却系统: 液冷+智能温控",
          description: "双层冷却架构，AI 驱动的智能调度，保障极致性能持续释放。",
          items: ["芯片级微通道铜板直触散热", "机柜级闭环液体循环", "每节点 ≥ 10kW 散热能力", "AI 智能温控，动态优化功耗"]
      }
  ]

  const softwareStack = [
    {
      icon: Code,
      title: "AISC-OS (AI 操作系统)",
      description: "基于 Linux 内核深度定制，为 AI 而生的操作系统。",
      items: ["实时 GPU/CPU 调度", "内核级 AI Workload Manager", "Zero Copy Memory Pooling 减少数据开销"],
    },
    {
      icon: '</>',
      title: "AISC Compiler Suite (MLIR-based)",
      description: "统一编译器堆栈，实现从框架到硬件的无缝转换与极致优化。",
      items: ["PyTorch/TF/JAX -> AISC-GPU/NPU", "自动张量分块、流水线优化", "端到端模型压缩（量化+剪枝）"],
    },
  ];

  const budgetData = [
    { category: '单节点硬件 (8× B100 + CPU + 冷却)', cost: '$500,000' },
    { category: '自研 AISC 芯片设计与流片 (TSMC N5P)', cost: '$3,000,000' },
    { category: '工厂建设与产线投入', cost: '$4,000,000' },
    { category: '软件栈研发 (OS + Compiler + Runtime)', cost: '$2,500,000' },
    { category: '系统管理平台 & AI 助手', cost: '$1,000,000' },
  ];

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-300">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.3),rgba(255,255,255,0))] -z-10"></div>
      
      {/* Hero Section */}
      <header className="relative text-center py-24 md:py-40 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
            AISC-1: The AI Super Compute Unit
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            核心理念：从“买 GPU”到“造超级 AI 引擎”
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-slate-400">
            我们不简单堆叠 GPU，而是通过硬件、软件、系统架构与供应链的全自主控制，打造 AI 时代的终极基础设施。
          </p>
        </motion.div>
      </header>
      
      <main>
        {/* System Blueprint */}
        <Section title="整体系统蓝图 (AISC-1 架构)" icon={Server}>
          <motion.div 
            className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
                <p className="text-lg font-semibold text-white">AISC-1 Super AI Compute Unit (自研超算单元)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 border-t-2 border-cyan-500 pt-6">
              {['Node 1', 'Node 2'].map(node => (
                <div key={node} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <p className="text-center font-bold text-slate-300 mb-2">{node}</p>
                  <div className="bg-slate-800 p-4 rounded-md border border-slate-600">
                    <p className="font-semibold text-white text-center">GPU-Rack (8× Hopper/Blackwell)</p>
                    <div className="mt-2 text-sm text-slate-400 space-y-1 bg-slate-700/50 p-3 rounded">
                      <p>CPU: Custom Zen-5 ×2</p>
                      <p>Memory: 1TB HBM3 (4×)</p>
                      <p>NVLink Switch Mesh</p>
                    </div>
                     <p className="mt-2 text-sm text-slate-400">PCIe Gen5 ×64</p>
                     <p className="text-sm text-slate-400">RDMA over InfiniBand</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
                <div className="inline-block relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-cyan-500"></div>
                    <div className="bg-cyan-900/50 border border-cyan-500 text-cyan-200 rounded-lg px-4 py-2 text-sm font-medium">NVIDIA Quantum-2 InfiniBand Switch (自研管理与调度核心)</div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-cyan-500"></div>
                <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 text-center">
                    <p className="font-semibold text-white">Cluster Controller & AI OS</p>
                    <p className="text-sm text-slate-400">(AISC-OS, 自研系统软件栈)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
        
        {/* Core Components */}
        <Section title="核心部件详解: 从零开始造" icon={Cpu}>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {coreComponents.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...comp} />
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {systemComponents.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...comp} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Software Stack */}
        <Section title="软件栈: AISC-OS + AISC Compiler Suite" icon={Code} className="bg-slate-900/50">
            <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10">全自研软件，从底层到应用层，释放硬件的全部潜力。</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareStack.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg mr-4">
                    {typeof item.icon === 'string' ? <span className="text-2xl font-mono text-cyan-400">{item.icon}</span> : <item.icon className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{item.description}</p>
                <ul className="space-y-2 font-mono text-sm">
                  {item.items.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-cyan-400 mr-2">{'>'}</span>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            </div>
        </Section>
        
        {/* Advantages */}
        <Section title="亮点与优势" icon={Zap}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                <AdvantageCard icon={Rocket} title="极致性能" description="自研架构 + 全互联 GPU，支持 100K+ 参数模型实时训练" />
                <AdvantageCard icon={Zap} title="低延迟" description="< 5μs 网络延迟, < 1ms 推理响应" />
                <AdvantageCard icon={CheckCircle} title="高能效" description="每瓦特 TOPS 达到 120，比 H100 提升 40%" />
                <AdvantageCard icon={Scale} title="可扩展性极强" description="从单节点到数千卡集群，动态编排" />
                <AdvantageCard icon={BrainCircuit} title="AI 原生系统" description="硬件、软件、调度全为 AI 优化" />
                <AdvantageCard icon={Telescope} title="未来兼容性强" description="无缝支持下一代模型架构" />
                <AdvantageCard icon={Settings} title="自我进化能力" description="内置 AI 助手，自动优化自身工作负载" />
                <AdvantageCard icon={Factory} title="全栈自研" description="从芯片到软件完全自主可控" />
            </div>
        </Section>

        {/* Budget */}
        <Section title="预算估算 (中大型 AISC-1 节点)" icon={DollarSign} className="bg-slate-900/50">
          <div className="max-w-4xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-800">
                <tr>
                  <th className="p-4 font-semibold text-white">类别</th>
                  <th className="p-4 font-semibold text-white text-right">成本</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="border-t border-slate-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="p-4 text-slate-300">{item.category}</td>
                    <td className="p-4 text-cyan-400 font-mono text-right">{item.cost}</td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-800">
                <tr className="border-t-2 border-cyan-500">
                    <td className="p-4 font-bold text-white">总计 (每节点含完整生态系统)</td>
                    <td className="p-4 text-2xl font-bold text-white text-right">$12,500,000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Section>

        {/* Roadmap */}
        <Section title="未来演进路线" icon={Rocket}>
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                <div className="space-y-16">
                    {[
                        { year: "2026", title: "AISC-2", description: "采用 TSMC N3E + HBM4，支持 128GB GPU 显存", icon: Cpu },
                        { year: "2027", title: "AISC-3", description: "引入光互连 (Silicon Photonics)，实现跨机柜无延迟互联", icon: Network },
                        { year: "Future", title: "AISC Cloud", description: "打造“AI 按需云服务”，支持全球用户按卡计费", icon: Cloud },
                        { year: "Beyond", title: "AISC-NeuroCore", description: "集成类脑芯片，支持 Spiking Neural Networks", icon: BrainCircuit },
                    ].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                                <p className="text-sm text-cyan-400 font-semibold">{item.year}</p>
                                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                                <p className="text-slate-400 mt-2">{item.description}</p>
                            </div>
                            <div className="w-12 h-12 bg-slate-800 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 z-10 order-1">
                                <item.icon className="w-6 h-6 text-white"/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="text-center py-20 px-4 bg-slate-900/70 mt-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl md:text-3xl font-bold text-white">你不再是“买 GPU 的人”，而是“打造 AI 基础设施的架构师”</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400">
                从一颗晶体管到一个全球 AI 训练引擎。
            </p>
            <div className="mt-8">
                <span className="font-mono text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                    "From Silicon to Model — Built for the Future of AI."
                </span>
            </div>
            <button className="mt-10 px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                立即建厂
            </button>
            <p className="text-sm text-slate-500 mt-4">你的名字将刻在下一次 AI 革命的基石上。</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default AISupercomputerWebsite;