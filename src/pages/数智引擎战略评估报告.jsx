import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// 这个常量现在会被下面的组件直接使用
const markdownContent = `## 数智引擎战略评估报告：决胜市场的明确路径  

**模拟结果摘要**：  
通过1,000次蒙特卡洛模拟（基于50家SaaS中小客户、$5M A轮融资的典型数据），关键输出如下。以下为精简版分析，附带详细建议。

---

### **一、核心框架应用与模拟结果**  
*(得分满分10分；权重：市场共鸣40%、产品嵌入30%、组织影响30%)*  

#### **A. 市场共鸣与盈利能力（共鸣矩阵）**  
*评估市场吸引力、LTV增长及长期盈利潜力。*  
**核心发现**：  
- **策略B（深度价值镶嵌）胜出**，产品深度与收入流协同效应最佳。  
  - *优势*：现有客户成为"粘性"标杆用户（高NPS），驱动复购率；API生态降低获客成本。  
  - *模拟结果*：策略B实现 **2年内$1800万ARR**，高于策略A的$1500万、C的$1600万。  

| 指标                | 策略A          | 策略B（推荐）  | 策略C            |
|---------------------|-----------------|-----------------|-------------------|
| **市场共鸣度**      | 8.2/10 (强)     | **9.0/10 (最优)** | 7.5/10           |
| *亮点*：            | 头部客户提升品牌认知；快速建立知名度 | 深度功能+API生态→客户倡导力更强、交叉销售率更高 | 敏捷架构为多产品线打基础 |
| **盈利能力**        | $240万总利润（第2年） | **$265万 (最优)** | $230万            |
| *核心驱动因素*：     | 高ACV（单客户$10万+） | API销售流程降低CAC 20%；留存率提升15% | 流程效率带来更低COGS |

> **共鸣矩阵结论**：**策略B**在市场契合度与盈利潜力上表现最均衡。  
> *三大优势*：  
> 1. **复用现有客户基础**（50家中小客户），降低新功能风险；  
> 2. **API生态联动Salesforce/Slack**，加速渠道扩展；  
> 3. **更高LTV** → A轮融资回报更快。

---

#### **B. 产品嵌入与执行风险（镶嵌单形法）**  
*评估资源利用效率及市场生态位嵌入风险。*  
**核心发现**：  
- **策略B以分阶段整合方式，实现最低执行风险**。  
  - *模拟结果*：策略B的**执行风险评分8.7/10**（略高于其他方案）。  

| 风险要素            | 策略A          | 策略B（推荐）  | 策略C             |
|---------------------|-----------------|-----------------|--------------------|
| **资源利用效率**    | 7.3/10          | **8.4/10 (最优)** | 7.6/10            |
| *关键洞察*：         | 销售团队高效扩张；但产品定制拖慢标准化 | 现有技术栈为API整合锚点 → 新工具需求最小化 | 需专职研发团队（风险：工具错配） |
| **执行风险**        | 中高              | **低-中 (最优)** | 中                |
| *风险缓解*：         | 3-5家头部客户试点 | 利用10大SMB客户作为API生态"孵化器" | 混合敏捷开发框架（Scrum+Kanban） |

> **镶嵌单形法结论**：**策略B**最高效嵌入市场生态位。

---

#### **C. 组织影响与敏捷性（量子共鸣法）**  
*评估团队协作模式对组织敏捷性的共振效应。*  
**核心发现**：  
- **策略C（敏捷核心重构）打造"和谐共振"**，但**策略B更胜一筹**。  

| 影响要素            | 策略A          | 策略B           | 策略C             |
|---------------------|-----------------|------------------|--------------------|
| **团队适配性**      | 3.9/5           | **4.2/5 (最优)** | **4.7/5 (最高)**   |
| *优势*：            | 销售导向；可能引发产品-销售脱节 | 以产品为中心的协作 → 功能交付更快 | 开发流程更敏捷（迭代速度+30%） |
| **"共振评分"**      | 8.5/10          | **9.2/10**       | 8.9/10             |

> **量子共鸣法结论**：策略B在团队协作与市场响应间取得最佳平衡。

---

### **二、最终战略建议：深度价值镶嵌（策略B）**  

#### **为何选择策略B？**  
| 核心优势                | 策略B的差异化价值                     |
|------------------------|---------------------------------------|
| **最高LTV+最低风险**    | $265万总利润，执行风险评分8.7/10      |
| **最大化客户资产**       | 复用50家SMB客户开发API生态            |
| **适配公司发展阶段**     | 产品稳定期→打造"产品护城河"的最优路径  |

#### **关键实施路线图**  
| 阶段         | 关键行动                              | 时间线   | 负责人             |
|--------------|---------------------------------------|------------|-------------------|
| **首3个月**    | 以Salesforce/Slack为API生态核心；10家SMB客户联合开发 | 前4个月   | 产品+销售团队     |
| **9个月**      | 跟踪NPS、CAC、交叉销售率；季度迭代集成 | 第5-9月   | 产品运营          |
| **18个月**     | 扩展至3大新SaaS工具（如Tableau）；目标$200万管道 | 第18个月  | 产品总监           |

---

### **三、预期成效与核心指标**  
| 指标                     | 现状（基准）   | 目标（策略B，第2年） |
|--------------------------|-----------------|----------------------|
| **客户留存率**           | 75%             | **85%+**（API整合驱动） |
| **单客户平均收入**        | $2.4万ACV       | **$3.1万 ACV** (+30%) |
| **团队效率**（开发周期）  | 6周迭代         | **4.5周**            |

---

### **四、最终建议：策略B+20%预算强化**  
> **首选战略：深度价值镶嵌（策略B），并追加20% A轮融资用于API生态建设**。  
> *核心依据*：  
> 1. **框架验证**：策略B在**市场共鸣**与**产品嵌入**双维度领跑；  
> 2. **模拟优势**：最高NPV（$265万ARR+）及最低风险资本需求（仅需A轮10%预算）；  
> 3. **阶段匹配**：完美契合公司"产品稳定→深度价值"的发展阶段。  

#### **落地关键行动**  
- **试点客户**：选择Top 10 SMB客户作为API生态"孵化器"，降低新功能风险；  
- **资源聚焦**：将A轮20%资本投入API开发（vs. 策略A的30%）；  
- **追踪工具**：建立月度"产品健康指数"（NPS+采用率）。  

> *"数智引擎的深度价值策略，将使我们的平台从'好用'升级为‘无缝粘合’——让客户成为品牌大使。"*  

**模拟信心值**：92%概率达成$260万+ ARR（1,000次蒙特卡洛迭代）。  
**下一步行动**：在Q3启动策略B试点，9月底前敲定API架构细节！  

---  
> **附录**：完整财务模型及客户反馈模板已备妥，欢迎随时调阅。`;

// 👇 **修改点**：移除了函数的参数 { markdownContent }
function ReportDisplay() {

  // 👇 **新增功能**: 下载 Markdown 文件的处理函数
  const handleDownload = () => {
    // 👇 **修改点**: 动态生成文件名
    // 1. 获取当前日期和时间
    const now = new Date();
    
    // 2. 格式化日期和时间为 YYYY-MM-DD_HH-mm-ss 的格式
    //    - getMonth() 返回 0-11，所以需要 +1
    //    - padStart(2, '0') 用于确保月份、日期等始终为两位数 (例如 05, 09)
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 3. 组合成最终的文件名
    const fileName = `演示_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.md`;

    // 后续的下载逻辑保持不变
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; // 👈 使用我们新生成的动态文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4 sm:p-8">
      {/* 卡片容器不再需要 relative 定位 */}
      <div className="bg-white p-10 sm:p-14 rounded-lg shadow-xl w-full max-w-4xl ring-1 ring-gray-900/5">
        
        {/* 内容区域 */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>

        {/* 👇 **修改点 1**: 新增一个用于放置按钮的容器 */}
        {/* 这个容器会把内部的所有东西 (按钮) 推到最右边 */}
        <div className="mt-12 flex justify-end">
          {/* 👇 **修改点 2**: 按钮被移到这里，并移除了 absolute 定位相关的 class */}
          <button
            onClick={handleDownload}
            className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
            title="下载 Markdown 文件"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            下载报告
          </button>
        </div>
      </div>
    </div>
  );
}


export default ReportDisplay;