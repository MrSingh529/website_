import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    client: "FinTech Global",
    title: "Automating KYC Compliance for 50k+ Users",
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Processing Time", val: "-92%" },
      { label: "Manual Errors", val: "0%" }
    ],
    desc: "We built a custom automated verification pipeline connecting 4 disparate identity providers."
  },
  {
    client: "Logistics Pro",
    title: "Real-time Fleet Coordination System",
    category: "Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Fuel Savings", val: "15%" },
      { label: "On-time Delivery", val: "+24%" }
    ],
    desc: "Integrating IoT sensors with a centralized dashboard for automated route optimization."
  },
  {
    client: "MediCare Plus",
    title: "Patient Intake & Records Unification",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Admin Hours/Wk", val: "-400" },
      { label: "Compliance", val: "100%" }
    ],
    desc: "A HIPAA-compliant bridge between legacy EHR systems and modern patient portals."
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Success Stories"
          title="Proven Outcomes"
          description="See how we've helped industry leaders transform their operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-lg shadow-slate-200/40 overflow-hidden group hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  {/* Stock image for case study with descriptive alt text */}
                  <img 
                    src={study.image} 
                    alt={`${study.client} case study`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur text-slate-800 font-semibold shadow-sm">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pt-6 pb-2">
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">{study.client}</div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="py-4 flex-grow">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {study.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                    {study.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                        <div className="text-xs text-slate-400 font-medium uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pb-6 pt-0">
                  <Button variant="ghost" className="w-full justify-between hover:bg-slate-50 group-hover:text-primary transition-colors">
                    Read Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
