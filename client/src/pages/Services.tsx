import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Database,
  Workflow,
  Bot,
  BarChart2,
  CloudCog,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Workflow className="w-8 h-8 text-primary" />,
    title: "End-to-End Workflow Automation",
    problem:
      "Manual workflows, approvals, and repetitive data handling slow teams down and introduce avoidable errors.",
    solution:
      "We analyze end-to-end processes and design custom automation that runs reliably without constant human intervention.",
    outcome:
      "Significant reduction in manual effort with consistent, auditable execution.",
    proven:
      "Internal enterprise operations & compliance workflows",
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Unified Data Integration",
    problem:
      "Business-critical data lives across multiple tools, making reporting slow and reconciliation painful.",
    solution:
      "We build robust integrations and normalization logic to sync data across systems accurately.",
    outcome:
      "Single, dependable view of operational and financial data.",
    proven:
      "GST reconciliation automation & multi-source reporting systems",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Assisted Automation",
    problem:
      "High-value teams spend time drafting content, summaries, and responses that can be system-assisted.",
    solution:
      "We integrate AI models into workflows to assist with structured content generation and analysis.",
    outcome:
      "Faster turnaround without sacrificing control or consistency.",
    proven:
      "Automated market research report generation & sales visit insights",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Dashboards & Operational Visibility",
    problem:
      "Decision-makers rely on delayed or manually compiled reports.",
    solution:
      "We automate data pipelines and build role-based dashboards with real-time visibility.",
    outcome:
      "Improved decision-making through timely, reliable insights.",
    proven:
      "Sales operations dashboards & management reporting automation",
  },
  {
    icon: <CloudCog className="w-8 h-8 text-primary" />,
    title: "Legacy Process Modernization",
    problem:
      "Older tools and manual Excel-based processes don’t scale with growing operations.",
    solution:
      "We modernize legacy workflows without disrupting existing systems or data.",
    outcome:
      "Operational agility without losing historical continuity.",
    proven:
      "Excel-heavy compliance and reporting processes",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Automation Governance & Compliance",
    problem:
      "Uncontrolled automations introduce security, audit, and reliability risks.",
    solution:
      "We document, secure, and govern automation with logging, access control, and validation.",
    outcome:
      "Automation that stands up to audits and enterprise expectations.",
    proven:
      "Time-tracking compliance & financial reconciliation systems",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Services"
          title="Engineered for Impact"
          description="We don't just write scripts. We architect resilient automation systems that scale with real operations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {service.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    The Problem
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {service.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Proven in
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.proven}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Outcome: {service.outcome}
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-sm font-semibold text-primary"
                >
                  See related work <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Ready to modernize your operations?
          </h3>
          <Link href="/contact">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
