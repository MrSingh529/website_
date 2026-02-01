import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  Bot, 
  Workflow, 
  Code2, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Database,
  ArrowRight,
  ChevronRight,
  Cpu
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        </div>

        <div className="container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              Future-Proof Your Business
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary">
              Advanced Automation & <br />
              <span className="text-gradient">Digital Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We engineer intelligent workflows and robotic process automation to eliminate manual errors, scale operations, and unlock actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
                  Talk to Our Experts <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} offset={-100}>
                <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur border-primary/20 hover:bg-white text-lg px-8 py-6 rounded-xl">
                  Explore Services
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted By Strip */}
        <div className="mt-20 border-t border-border/40 pt-10">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Trusted by innovative leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos */}
             {["Acme Corp", "GlobalBank", "TechFlow", "DataSystems", "FutureScale"].map((name) => (
               <div key={name} className="text-xl font-display font-bold text-primary/60 flex items-center gap-2">
                 <div className="w-6 h-6 bg-primary/20 rounded-full"></div> {name}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-32 bg-white relative">
        <div className="container-padding">
          <SectionHeader 
            title="Our Core Services" 
            subtitle="End-to-end automation solutions tailored to your unique business architecture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Business Process Automation"
              description="Streamline complex operational workflows to reduce cycle times and operational costs."
              icon={Workflow}
              delay={0.1}
            />
            <ServiceCard 
              title="Robotic Process Automation"
              description="Deploy intelligent bots to handle repetitive, high-volume tasks with 100% accuracy."
              icon={Bot}
              delay={0.2}
            />
            <ServiceCard 
              title="Workflow Orchestration"
              description="Connect disparate systems and teams into a unified, transparent operational fabric."
              icon={Database}
              delay={0.3}
            />
            <ServiceCard 
              title="Custom Automation Software"
              description="Bespoke software solutions engineered to solve niche problems off-the-shelf tools can't."
              icon={Code2}
              delay={0.4}
            />
            <ServiceCard 
              title="Digital Transformation"
              description="Strategic consulting to modernize legacy systems and adopt a digital-first culture."
              icon={Lightbulb}
              delay={0.5}
            />
            <ServiceCard 
              title="Analytics & Insights"
              description="Transform raw process data into actionable intelligence for continuous improvement."
              icon={TrendingUp}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section id="use-cases" className="py-20 bg-muted/30">
        <div className="container-padding">
          <SectionHeader 
            title="Industry Solutions" 
            subtitle="Proven automation strategies across key sectors."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { 
                  industry: "Finance & Banking", 
                  desc: "Automate loan processing, KYC verification, and fraud detection workflows.",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop&q=60"
                },
                { 
                  industry: "Healthcare", 
                  desc: "Streamline patient scheduling, claims processing, and compliance reporting.",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60" 
                },
                { 
                  industry: "Manufacturing", 
                  desc: "Optimize supply chain logistics, inventory management, and predictive maintenance.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
                },
                { 
                  industry: "Retail & E-commerce", 
                  desc: "Automate order fulfillment, customer support tickets, and inventory sync.",
                  image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop&q=60"
                }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white p-6 rounded-xl shadow-sm border border-border hover:border-accent/50 transition-all cursor-default">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex justify-between items-center">
                    {item.industry}
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </h3>
                  <p className="text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Abstract technology visualization image */}
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80" 
                alt="Technology visualization" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-accent font-bold mb-2">CASE STUDY HIGHLIGHT</div>
                <h3 className="text-3xl font-bold mb-4">Global Logistics Firm Reduces Processing Time by 70%</h3>
                <p className="text-white/80 max-w-md">
                  By implementing AutomataX's custom RPA solution, our client automated over 50,000 monthly invoices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS / WHY US */}
      <section id="benefits" className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        
        <div className="container-padding relative z-10">
          <SectionHeader title="Why Choose AutomataX" subtitle="We deliver measurable ROI, not just technology." alignment="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Clock, title: "Efficiency", desc: "Reduce manual work hours by up to 80% within the first year." },
              { icon: ShieldCheck, title: "Reliability", desc: "Enterprise-grade security and 99.9% uptime for critical bots." },
              { icon: TrendingUp, title: "Scalability", desc: "Solutions that grow with you—from 1 bot to 1,000." },
              { icon: Code2, title: "Expertise", desc: "A dedicated team of certified automation engineers." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack" className="py-20 bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {["Python", "UiPath", "Power Automate", "AWS", "Azure", "TensorFlow", "React", "Node.js", "Docker", "Kubernetes"].map((tech, idx) => (
               <div key={idx} className="px-6 py-3 bg-muted rounded-full text-primary font-medium border border-transparent hover:border-accent hover:text-accent transition-all cursor-default">
                 {tech}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-muted/30 relative">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Start Your Transformation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to automate your workflows? Fill out the form below and let's discuss how we can help your business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-accent font-semibold mb-1">Office</div>
                    <p className="text-white/80">123 Innovation Drive<br/>Tech City, TC 94043</p>
                  </div>
                  <div>
                    <div className="text-accent font-semibold mb-1">Email</div>
                    <p className="text-white/80">solutions@automatax.com</p>
                  </div>
                  <div>
                    <div className="text-accent font-semibold mb-1">Phone</div>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  {[
                    "We review your business needs.",
                    "Our team schedules a discovery call.",
                    "We present a tailored automation roadmap.",
                    "Implementation begins."
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 text-white/80 border-t border-white/10">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-6 h-6 text-accent" />
                <span className="text-2xl font-display font-bold text-white">
                  Automata<span className="text-accent">X</span>
                </span>
              </div>
              <p className="max-w-sm text-white/60">
                Empowering enterprises with next-generation automation solutions. Scale faster, reduce costs, and innovate boldly.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Business Process Automation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">RPA Solutions</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Workflow Consulting</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Custom Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} AutomataX Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
