import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Layers,
  Globe,
  ShieldCheck,
  Settings,
  LineChart
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

/* --- Services Preview --- */
const services = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Workflow Automation",
    desc: "Design and implementation of custom automation to remove repetitive manual work across teams."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Reporting & Analytics",
    desc: "Automated data pipelines and dashboards that give teams timely, reliable visibility."
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "System Integration",
    desc: "Connecting tools, databases, and platforms into a single, dependable workflow."
  }
];

/* --- Credible Outcomes (No Fake Numbers) --- */
const outcomes = [
  { label: "Manual Effort Reduced", value: "Significant" },
  { label: "Process Reliability", value: "Consistent" },
  { label: "Decision Visibility", value: "Improved" }
];

/* --- Why AutomataX --- */
const principles = [
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Built for Real Operations",
    desc: "We automate real business workflows — not demos, not templates."
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Outcome-Driven",
    desc: "Every solution is tied to operational clarity, time savings, or risk reduction."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Security & Stability First",
    desc: "Automation that breaks trust is worse than none. Reliability comes first."
  }
];

/* --- Representative Work (Anonymized) --- */
const representativeWork = [
  {
    title: "Market Research Report Automation",
    desc: "Automated end-to-end PowerPoint report generation from structured Excel data, including AI-assisted content, charts, and multi-segment analysis.",
    outcome: "Reduced report creation from days to under an hour with consistent formatting."
  },
  {
    title: "Enterprise Time-Tracking Compliance Automation",
    desc: "Built a fully automated compliance system to extract time logs, detect gaps, and send structured escalation emails without manual intervention.",
    outcome: "Eliminated weekly manual tracking and improved enforcement consistency."
  },
  {
    title: "Sales Operations Intelligence Platform",
    desc: "Developed a mobile-first PWA to replace notebook-based sales visit reporting with structured data, dashboards, and AI-generated insights.",
    outcome: "Enabled real-time visibility and reduced administrative overhead."
  },
  {
    title: "GST Reconciliation Automation",
    desc: "Created a browser-based reconciliation system to match accounting data with statutory returns using deterministic normalization rules.",
    outcome: "Converted hours of monthly reconciliation into seconds with audit-ready outputs."
  }
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden gradient-bg">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl" />
          <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-200 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Automation Consulting & Execution
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Automation that removes friction from
              <span className="gradient-text"> real business operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              AutomataX designs and implements custom automation systems that reduce manual effort,
              improve data reliability, and help teams scale without operational chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-xl shadow-primary/20">
                  Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 bg-white/50">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- OUTCOMES ---------------- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center py-6"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="What We Do"
            title="Automation Built Around Your Operations"
            description="No off-the-shelf bots. No rigid platforms. Every solution is designed around how your business actually works."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/services" className="text-primary font-semibold text-sm inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- REPRESENTATIVE WORK ---------------- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Representative Work"
            title="Automation Delivered in Real Operating Environments"
            description="A snapshot of anonymized initiatives delivered across internal enterprise teams and external client engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {representativeWork.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-slate-500">
                  Outcome: <span className="text-slate-700">{item.outcome}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/case-studies">
              <Button variant="outline" className="rounded-full">
                View Detailed Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="How We Work"
              title="A Clear, Practical Engagement Model"
              description="We follow a structured process that keeps stakeholders aligned and delivery predictable."
            />

            <ul className="mt-12 space-y-6">
              {[
                "Workflow discovery and process mapping",
                "Solution design aligned with business priorities",
                "Incremental build, testing, and validation",
                "Deployment, documentation, and handover"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <Link href="/how-it-works">
                <Button variant="outline" className="rounded-full">
                  View Detailed Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST ---------------- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-6">
            Built with Enterprise Expectations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Security, reliability, and auditability are treated as baseline requirements — not add-ons.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="text-sm font-semibold">Security-first architecture</span>
            <span className="text-sm font-semibold">Controlled access & logging</span>
            <span className="text-sm font-semibold">Compliance-aware design</span>
          </div>
        </div>
      </section>
    </div>
  );
}
