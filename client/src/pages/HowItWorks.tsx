import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Audit",
    desc: "We dive deep into your current processes to identify bottlenecks, redundancies, and automation opportunities.",
    details: "Deliverable: Comprehensive Audit Report"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Strategy & Design",
    desc: "We architect a custom solution, selecting the right stack of tools to ensure scalability and reliability.",
    details: "Deliverable: Solution Architecture Diagram"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    desc: "Our engineers build the integrations, scripts, and workflows in a secure development environment.",
    details: "Deliverable: Staging Environment Demo"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Deployment & Training",
    desc: "We go live with the new system and provide hands-on training to your team to ensure adoption.",
    details: "Deliverable: Live System & Documentation"
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Support & Optimization",
    desc: "We monitor performance, fix issues, and continuously optimize as your business scales.",
    details: "Deliverable: Monthly Performance Reports"
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Methodology"
          title="The AutomataX Process"
          description="A transparent, rigorous approach to building enterprise automation."
        />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Icon Marker */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-primary/20 transition-colors w-full">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                    <h3 className="text-xl font-bold text-slate-900">Step 0{idx + 1}: {step.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="inline-block px-3 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {step.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
