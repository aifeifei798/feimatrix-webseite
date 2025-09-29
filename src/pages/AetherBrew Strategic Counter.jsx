import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Coffee, Rocket, Hand, Zap, Users, Globe, Eye, DollarSign, Target, Calendar } from 'lucide-react';

const AetherBrewStrategicCounter = () => {
  const roadmapData = [
    { year: '2026', revenue: 15, capex: 12 },
    { year: '2027', revenue: 22, capex: 8 },
    { year: '2028', revenue: 32, capex: 12 },
  ];

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      <header className="bg-gradient-to-r from-emerald-600 to-green-800 p-8 text-white shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AetherBrew Strategic Counter-Attack Playbook
          </motion.h1>
          <motion.p
            className="mt-2 text-xl font-light opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2025 – 2028
          </motion.p>
          <motion.div
            className="mt-6 border-t border-emerald-300 pt-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Prepared for the Board of Directors – 29 Sept 2025</p>
            <p>Prepared by: [Your Name], Chief Strategy Officer</p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Executive Summary */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Rocket className="h-8 w-8 text-emerald-500" /> Executive Summary
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            BlitzBean, a nascent AI-driven coffee challenger, is eroding our mid-tier retail footprint
            with razor-thin pricing and lightning-fast logistics. Their “efficiency” model exploits the very
            pillars that make AetherBrew revered: <strong className="font-semibold text-emerald-600">Quality</strong>,{' '}
            <strong className="font-semibold text-emerald-600">Craftsmanship</strong>, and{' '}
            <strong className="font-semibold text-emerald-600">Terroir</strong>.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            A pure defense (shrink to 1 % of clients) would hollow out our heritage; a full embrace of
            BlitzBean’s tech stack risks destroying the soul we built over seven decades.
          </p>
          <p className="mb-4 text-xl font-semibold text-emerald-800">Our solution: A bold, “third-way” strategy that keeps the <span className="underline decoration-wavy decoration-orange-400">human</span> at the center while leveraging data and automation to deliver personalized premium experiences at scale.</p>
          <motion.ul
            className="ml-6 list-disc space-y-2 text-lg text-gray-700"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li variants={fadeVariant}>Re-ignite our brand narrative – “The Soul of Coffee Delivered Daily.”</motion.li>
            <motion.li variants={fadeVariant}>Build an AI-enhanced yet hand-crafted subscription ecosystem (“AetherBrew Experience”).</motion.li>
            <motion.li variants={fadeVariant}>Launch flagship experiential hubs that reinforce community and craftsmanship.</motion.li>
            <motion.li variants={fadeVariant}>Scale sustainably, preserving legacy while capturing new growth markets.</motion.li>
          </motion.ul>
        </motion.section>

        {/* Threat Diagnosis */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Eye className="h-8 w-8 text-emerald-500" /> Threat Diagnosis – BlitzBean’s Core Weaknesses
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-emerald-100 text-emerald-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">#</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Weakness</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">One-liner Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, weakness: 'Price-war vulnerability', impact: 'Their low margin model cannot sustain prolonged discounting without compromising sourcing and roasting integrity.' },
                  { id: 2, weakness: 'Authenticity gap', impact: '“Most popular” roast curves dilute terroir nuances that our elite clientele prize; they lack a verifiable provenance narrative for each bean.' },
                  { id: 3, weakness: 'Community disconnect', impact: 'BlitzBean’s brand voice is transactional (“Best Price, Fast Delivery”). It fails to create long-term emotional bonds or cultivate an engaged community of coffee lovers.' },
                  { id: 4, weakness: 'Supply-chain overreach', impact: 'Global AI sourcing increases shipping distances and turnaround times; fresh flavor windows shrink dramatically compared to our regional roastery model.' },
                  { id: 5, weakness: 'Over-automation risk', impact: 'Full process automation removes the human judgment that differentiates a “good” roast from a “great” one, eroding the sensory quality premium we command.' },
                ].map((item, index) => (
                  <motion.tr
                    key={item.id}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
                    variants={fadeVariant}
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-emerald-600">{item.id}</td>
                    <td className="px-4 py-4 font-medium text-gray-900">{item.weakness}</td>
                    <td className="px-4 py-4 text-gray-700">{item.impact}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Strategic Opportunity */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Zap className="h-8 w-8 text-emerald-500" /> Strategic Opportunity – The Third Path
          </h2>
          <blockquote className="mb-6 border-l-4 border-emerald-500 pl-4 italic text-gray-600">
            <p className="text-xl font-medium text-emerald-800">
              “Integrate Human Mastery with AI Precision to Deliver Curated, Premium Coffee Experiences at Scale.”
            </p>
          </blockquote>
          <p className="mb-4 text-lg font-semibold text-gray-800">Key pillars:</p>
          <motion.ul
            className="ml-6 list-disc space-y-2 text-lg text-gray-700"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Human-Crafted Experience as Core Product:</strong> Every
              subscription tier culminates in a <em className="text-emerald-700">hand-crafted</em> roast that reflects
              the chosen terroir and flavor profile.
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">AI & Data as Enablers, Not Replacements:</strong> Use
              AI to inform sourcing decisions (optimal harvest windows, risk mitigation) and demand
              forecasting; keep artisanal roasting in the human domain.
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Narrative-Driven Value Proposition:</strong> Position
              each cup as a <em className="text-emerald-700">story</em> – from farmer farm to roaster’s workshop to
              customer’s home – amplified through high-quality content.
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Multi-Channel Community Ecosystem:</strong> Blend
              digital engagement (academy, live roasts, social media) with physical touchpoints (flagship
              store, pop-up events).
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Strategic Partnerships for Premium Positioning:</strong> Collaborate
              with luxury hotels, Michelin restaurants, and high-end lifestyle brands to embed AetherBrew
              into aspirational experiences.
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Vision Statement */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Coffee className="h-8 w-8 text-emerald-500" /> Vision Statement – “The Soul of Coffee, Delivered Daily”
          </h2>
          <blockquote className="relative rounded-lg bg-emerald-50 p-6 text-center italic shadow-inner">
            <p className="text-2xl font-semibold leading-relaxed text-emerald-900">
              <span className="absolute left-4 top-4 text-5xl font-serif opacity-20">“</span>
              AetherBrew is the bridge between timeless coffee artistry and tomorrow’s connected world. We
              curate moments that awaken senses, celebrate stories, and preserve the human touch in every
              cup.
              <span className="absolute bottom-4 right-4 text-5xl font-serif opacity-20">”</span>
            </p>
          </blockquote>
          <p className="mt-6 text-gray-700">
            This vision will permeate all internal communications, employee training, marketing campaigns,
            and partner outreach.
          </p>
        </motion.section>

        {/* Strategic Roadmap */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Calendar className="h-8 w-8 text-emerald-500" /> Strategic Roadmap – Phase-by-Phase Action Plan
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-emerald-100 text-emerald-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Year</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Phase</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Objective</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Key Initiatives</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Resource Allocation (USD)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">KPI Targets</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  variants={fadeVariant}
                  className="border-b border-gray-200 bg-white"
                >
                  <td className="px-4 py-4 font-bold text-emerald-700">2026</td>
                  <td className="px-4 py-4 font-semibold text-gray-900">Foundation Building</td>
                  <td className="px-4 py-4 text-gray-700">Re-ignite brand core while creating digital infrastructure to support future growth.</td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>Brand Refresh & New Tagline (“Legacy Meets Tomorrow”)</li>
                      <li>Digital Platform Overhaul (UX/UI, e-commerce, personalized recommendation engine)</li>
                      <li>Data Lake Construction + Analytics Lead hire</li>
                      <li>Strengthen Exclusive Farm Relationships (negotiated limited-edition contracts)</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>$2 M for brand & design</li>
                      <li>$5 M for web/app development</li>
                      <li>$750 K annual analytics salary + tools</li>
                      <li>$1 M in supplier partnership investments</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>↑ e-commerce revenue by 20% YoY</li>
                      <li>Grow high-value email list by 30%</li>
                      <li>CSAT &gt;90% on digital purchases</li>
                      <li>Inventory holding cost ↓10%</li>
                    </ul>
                  </td>
                </motion.tr>
                <motion.tr
                  variants={fadeVariant}
                  className="border-b border-gray-200 bg-gray-50"
                >
                  <td className="px-4 py-4 font-bold text-emerald-700">2027</td>
                  <td className="px-4 py-4 font-semibold text-gray-900">Transformation & Experimentation</td>
                  <td className="px-4 py-4 text-gray-700">Validate subscription concepts, launch experiential touchpoints, and build community capital.</td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>Launch Tiered “AetherBrew Experience” Subscription (Basic, Elite, Royal)</li>
                      <li>Build & Soft-Launch Flagship Store Concept (Tasting Room + Live Roasts)</li>
                      <li>Establish “AetherBrew Academy” – free beginner courses + paid advanced workshops</li>
                      <li>Produce Narrative Content Series (“From Soil to Cup”) for YouTube, IGTV, and a potential streaming partnership</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>$8 M marketing & launch budget for subscription</li>
                      <li>$10 M for flagship store design & build (incl. 3-yr operating reserve)</li>
                      <li>$4 M annual academy development + instructor salaries</li>
                      <li>$5 M content production pool</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>Convert ≥5% of existing customers into subscribed tiers by year-end</li>
                      <li>Generate $X M recurring subscription revenue (target set in Financial Forecast)</li>
                      <li>Achieve 1 M cumulative views across digital channels</li>
                      <li>4.8+ star rating on all platforms</li>
                    </ul>
                  </td>
                </motion.tr>
                <motion.tr
                  variants={fadeVariant}
                  className="border-b border-gray-200 bg-white"
                >
                  <td className="px-4 py-4 font-bold text-emerald-700">2028</td>
                  <td className="px-4 py-4 font-semibold text-gray-900">Scale & Institutionalize</td>
                  <td className="px-4 py-4 text-gray-700">Cement premium positioning, expand physical footprint, and achieve profitable growth trajectory.</td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>Expand Flagship Store into a second luxury city (Tokyo)</li>
                      <li>Secure Strategic Hospitality Partnerships (e.g., Four Seasons, Michelin-starred restaurants) for exclusive blends</li>
                      <li>Introduce “Collector’s Series” Limited Edition Releases (≤200 units per edition)</li>
                      <li>Deploy AI-Optimized Logistics & Demand Forecasting across all distribution channels</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>$12 M construction + reserve for Tokyo store</li>
                      <li>$5 M partnership enablement budget</li>
                      <li>$2 M for Collector’s Series production and marketing</li>
                      <li>$3 M ongoing AI/ML platform investment (incl. staff)</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    <ul className="list-disc pl-5">
                      <li>↑ total revenue by 50% YoY</li>
                      <li>Grow CLV of subscription members by 30%</li>
                      <li>Break-even on new store operations within 12 months</li>
                      <li>Secure ≥3 premium hospitality collaborations</li>
                    </ul>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Governance & Accountability */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Users className="h-8 w-8 text-emerald-500" /> Governance & Accountability
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-emerald-100 text-emerald-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Function</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Leader</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Key KPI Owners</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { function: 'Strategy Execution', leader: 'Chief Strategy Officer (you)', kpis: 'Year-by-Year Roadmap Milestones' },
                  { function: 'Brand & Narrative', leader: 'Chief Marketing Officer', kpis: 'Brand Lift Survey, Net Promoter Score (NPS), Digital Engagement Metrics' },
                  { function: 'Product Development', leader: 'Head of R&D / Subscription Services', kpis: 'Launch Cadence, Retention Rates, CSAT' },
                  { function: 'Operations & Logistics', leader: 'COO', kpis: 'Delivery Lead-Time, Inventory Turnover Ratio, Cost per Unit Delivered' },
                  { function: 'Technology & Data', leader: 'Chief Technology Officer / Analytics Director', kpis: 'System Uptime %, Forecast Accuracy %' },
                  { function: 'Talent & Culture', leader: 'Chief Human Resources Officer', kpis: 'Employee Engagement Score, Attrition Rate in Key Crafts Roles' },
                ].map((item, index) => (
                  <motion.tr
                    key={item.function}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
                    variants={fadeVariant}
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">{item.function}</td>
                    <td className="px-4 py-4 text-gray-700">{item.leader}</td>
                    <td className="px-4 py-4 text-gray-700">{item.kpis}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700">
            Quarterly Board Reviews will focus on <em className="text-emerald-700">Strategic Milestones</em> (e.g.,
            Subscription Launch Q2 2027) and <em className="text-emerald-700">Financial Health Indicators</em>{' '}
            (Profitability of flagship stores, Recurring Revenue Ratio). Escalation protocols are defined
            for any KPI falling below the lower quartile threshold.
          </p>
        </motion.section>

        {/* Financial Forecast & Investment Summary */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <DollarSign className="h-8 w-8 text-emerald-500" /> Financial Forecast & Investment Summary
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="mb-8 min-w-full table-auto bg-white">
              <thead className="bg-emerald-100 text-emerald-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Year</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Total Revenue Forecast</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">EBITDA Margin</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Capital Expenditure</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Cash Flow Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: '2026', revenue: '$15 M', ebitda: '–10% (investment phase)', capex: '$12 M', cashFlow: '–$2 M (negative cash flow, funded by board-approved capital raise)' },
                  { year: '2027', revenue: '$22 M', ebitda: '+5% (subscription lift begins)', capex: '$8 M', cashFlow: '+$0.5 M (breakeven on flagship store pre-launch)' },
                  { year: '2028', revenue: '$32 M', ebitda: '+15% (operational efficiencies, premium pricing)', capex: '$12 M', cashFlow: '+$1.5 M (positive cash flow, ready to fund next-phase expansion)' },
                ].map((item, index) => (
                  <motion.tr
                    key={item.year}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
                    variants={fadeVariant}
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-bold text-emerald-700">{item.year}</td>
                    <td className="px-4 py-4 text-gray-700">{item.revenue}</td>
                    <td className="px-4 py-4 text-gray-700">{item.ebitda}</td>
                    <td className="px-4 py-4 text-gray-700">{item.capex}</td>
                    <td className="px-4 py-4 text-gray-700">{item.cashFlow}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="mb-8 rounded-lg bg-emerald-50 p-6 shadow-inner"
            variants={fadeVariant}
          >
            <p className="mb-4 text-lg font-semibold text-emerald-800">Board-approved capital raise: $25 M (seed & Series A), allocated as follows:</p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>$8 M – Digital Platform & Data Infrastructure</li>
              <li>$15 M – Subscription Service Development & Flagship Store Build</li>
            </ul>
          </motion.div>
          <p className="text-gray-700">
            All projections include a conservative 3-point margin of safety; sensitivity analysis indicates
            that even with a 5% YoY revenue shortfall, EBITDA remains positive by Year 2.
          </p>

          <motion.div
            className="mt-12 h-64"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={roadmapData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="year" axisLine={false} tickLine={false} className="text-sm text-gray-600" />
                <YAxis axisLine={false} tickLine={false} className="text-sm text-gray-600" />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar
                  dataKey="revenue"
                  name="Total Revenue Forecast ($M)"
                  fill="#10B981"
                  radius={[5, 5, 0, 0]}
                  animationDuration={1500}
                />
                <Bar
                  dataKey="capex"
                  name="Capital Expenditure ($M)"
                  fill="#34D399"
                  radius={[5, 5, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.section>

        {/* Conclusion & Call to Action */}
        <motion.section
          className="mb-16"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-700">
            <Target className="h-8 w-8 text-emerald-500" /> Conclusion & Call to Action
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            AetherBrew’s legacy is defined not by margins but by the <em className="text-emerald-700">experience</em>{' '}
            we deliver. BlitzBean threatens our market share, but it cannot replicate the{' '}
            <em className="text-emerald-700">soul</em> that fuels our brand equity.
          </p>
          <p className="mb-6 text-xl font-semibold text-emerald-800">
            We have a chance – and a responsibility – to evolve without erasing what makes us unique.
          </p>
          <motion.ul
            className="ml-6 list-decimal space-y-3 text-lg text-gray-700"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Approve the $25 M capital raise</strong> to fund the three-year playbook.
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Ratify the Vision Statement (“The Soul of Coffee, Delivered Daily”)</strong> as our North Star across all functions.
            </motion.li>
            <motion.li variants={fadeVariant}>
              <strong className="font-semibold text-emerald-600">Set up a Cross-Functional Steering Committee</strong> (CRO, COO, CTO) with quarterly Board oversight to ensure accountability and agility.
            </motion.li>
          </motion.ul>
          <p className="mt-8 leading-relaxed text-gray-700">
            By adopting this third-way strategy, AetherBrew will not only defend itself against BlitzBean;
            it will set the new standard for premium coffee in an increasingly digital world.
          </p>
          <p className="mt-4 text-xl font-bold text-emerald-800">
            Let us lead the charge, preserve our heritage, and write the next 70 years of excellence
            together.
          </p>
          <p className="mt-8 text-right text-lg font-light italic text-gray-600">Thank you.</p>
        </motion.section>
      </main>

      <footer className="bg-gray-800 p-6 text-center text-gray-300">
        <p>&copy; 2025 AetherBrew. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AetherBrewStrategicCounter;