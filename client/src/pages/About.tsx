import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Mission"
          title="Builders at Heart"
          description="We are a team of engineers, architects, and strategists dedicated to the art of automation."
        />

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg prose-slate mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
          >
            <p className="lead text-xl text-slate-600">
              AutomataX was founded on a simple premise: <strong className="text-slate-900">Human potential is wasted on repetitive tasks.</strong>
            </p>
            <p>
              In the modern enterprise, "busy work" accounts for nearly 30% of an employee's day. Data entry, report aggregation, system syncing—these are tasks for machines, not creative minds.
            </p>
            <p>
              We don't just "set up tools." We analyze the fundamental flow of information through your business and reconstruct it for maximum efficiency. Our background spans heavy industry, fintech, and Silicon Valley startups, giving us a unique perspective on both stability and speed.
            </p>
            
            <h3 className="text-slate-900 font-bold mt-8 mb-4">Our Core Values</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">01.</span>
                <span><strong>Reliability First:</strong> An automation that breaks is worse than no automation. We build for 99.9% uptime.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">02.</span>
                <span><strong>Security by Design:</strong> We treat your data with the same rigor as a bank. Encryption, access controls, and audit logs are standard.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">03.</span>
                <span><strong>Human-Centric:</strong> Automation should empower people, not replace them. We build tools that make your team superheroes.</span>
              </li>
            </ul>
          </motion.div>
          
          <div className="mt-20 text-center">
            {/* Office/Team photo - modern office collaboration */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="AutomataX Team Collaboration"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-10">
                <div className="text-white text-center">
                   <h3 className="text-2xl font-bold mb-2">Join the revolution</h3>
                   <p className="opacity-90">Helping businesses scale without the growing pains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
