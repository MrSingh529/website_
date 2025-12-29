import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, Layers, Zap, Globe, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Workflow Automation",
    desc: "Eliminate manual tasks with intelligent end-to-end automation pipelines."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with real-time dashboards."
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Global Integration",
    desc: "Connect disparate systems across your enterprise into one unified core."
  }
];

const outcomes = [
  { label: "Efficiency Increase", value: "450%" },
  { label: "Cost Reduction", value: "60%" },
  { label: "Error Rate", value: "<0.1%" },
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden gradient-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-200 blur-3xl mix-blend-multiply filter animate-blob" />
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-200 blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Accepting New Enterprise Clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight text-balance">
              Transform Your Workflow with <span className="gradient-text">Intelligent Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              We build scalable, automated systems that reduce overhead and empower your team to focus on high-impact work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Start Transformation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                  View Outcomes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Outcomes Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {outcomes.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center py-4"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">{item.value}</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            label="Our Expertise" 
            title="Comprehensive Automation Solutions"
            description="From simple scripts to complex enterprise architectures, we cover the full spectrum of automation needs."
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
                <Card className="h-full border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/services">
                      <div className="inline-flex items-center text-primary font-semibold text-sm hover:underline cursor-pointer">
                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Snippet */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <SectionHeader 
                align="left"
                label="Process" 
                title="How We Engineer Success"
                description="Our proven methodology ensures predictable, scalable, and secure implementation of automation technologies."
              />
              <ul className="space-y-6">
                {[
                  "Detailed discovery and workflow auditing",
                  "Strategic architecture design",
                  "Iterative development and testing",
                  "Seamless deployment and staff training"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/how-it-works">
                  <Button variant="outline" className="rounded-full">See Our Process</Button>
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Abstract graphic representing workflow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
                {/* Placeholder for Unsplash Image - Abstract Tech */}
                {/* abstract minimal technology geometric shapes */}
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Abstract Automation Visualization" 
                  className="relative rounded-3xl shadow-2xl border border-white/20 w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Compliance Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-6">Enterprise-Grade Security</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            We build with security-first principles, ensuring your data remains encrypted, compliant, and protected at every step of the automation pipeline.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo Placeholders using Text for now */}
             <span className="text-xl font-bold">SOC2 Type II</span>
             <span className="text-xl font-bold">GDPR Ready</span>
             <span className="text-xl font-bold">HIPAA Compliant</span>
             <span className="text-xl font-bold">ISO 27001</span>
          </div>
        </div>
      </section>
    </div>
  );
}
