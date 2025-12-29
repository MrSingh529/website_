import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Database, Workflow, Bot, BarChart2, CloudCog, Shield } from "lucide-react";

const services = [
  {
    icon: <Workflow className="w-8 h-8 text-primary" />,
    title: "End-to-End Workflow Automation",
    problem: "Teams waste 30% of their time on repetitive, manual data entry and task switching.",
    solution: "We map your processes and build custom automation pipelines that handle the grunt work autonomously.",
    outcome: "Hours reclaimed daily, zero manual data entry errors."
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Unified Data Integration",
    problem: "Critical business data is siloed across 15+ different SaaS tools that don't talk to each other.",
    solution: "We build robust APIs and middleware that sync data in real-time across your entire stack.",
    outcome: "Single source of truth for all business intelligence."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Agent Development",
    problem: "Customer support and internal queries bottleneck your senior staff.",
    solution: "We deploy custom LLM agents trained on your documentation to handle Level 1 & 2 queries.",
    outcome: "Instant response times and 24/7 availability."
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Executive Dashboards",
    problem: "Leaders make decisions based on month-old reports because aggregation takes too long.",
    solution: "We automate data collection into live, interactive dashboards using BI tools.",
    outcome: "Real-time visibility into KPI performance."
  },
  {
    icon: <CloudCog className="w-8 h-8 text-primary" />,
    title: "Legacy Modernization",
    problem: "Ancient on-premise software is holding back your digital transformation.",
    solution: "We wrap legacy systems in modern APIs or migrate workflows to scalable cloud infrastructure.",
    outcome: "Modern agility without losing historical data."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Security & Compliance Audits",
    problem: "Shadow IT automations are creating massive security vulnerabilities.",
    solution: "We audit, document, and secure all automated workflows to meet enterprise standards.",
    outcome: "Full visibility and compliance peace of mind."
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Services"
          title="Engineered for Impact"
          description="We don't just write scripts. We architect resilient systems that scale with your enterprise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100 group"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">The Problem</h4>
                  <p className="text-slate-600 leading-relaxed">{service.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Our Solution</h4>
                  <p className="text-slate-800 font-medium leading-relaxed">{service.solution}</p>
                </div>
                <div className="pt-4 border-t border-slate-50">
                   <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                     <span className="w-2 h-2 rounded-full bg-green-500" />
                     Outcome: {service.outcome}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to modernize your operations?</h3>
          <Link href="/contact">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
