import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
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
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const clientLogos = [
    { name: 'Wembrace Biopharma', initials: 'WB', imagePath: '/client-logos/client-logo-1.png' },
    { name: 'imarc', initials: 'IM', imagePath: '/client-logos/client-logo-2.png' },
  ];

  return (
    <Layout>
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
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
                  Talk to Our Experts <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/services">
                <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur border-primary/20 hover:bg-white text-lg px-8 py-6 rounded-xl">
                  Explore Services
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Trusted By Strip - UPDATED WITH LOGO CAROUSEL */}
          <div className="mt-20 border-t border-border/40 pt-10">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by innovative leaders
            </p>
            
            {/* Logo Carousel */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
              
              {/* Logo Carousel Track */}
              <div className="flex animate-slide">
                {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="relative w-48 h-16 flex items-center justify-center p-2">
                      <img 
                        src={client.imagePath} 
                        alt={`${client.name} logo`}
                        className="max-h-12 max-w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = `flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 w-32 h-12`;
                          fallback.innerHTML = `<span class="text-md font-semibold text-primary/60">${client.initials}</span>`;
                          e.currentTarget.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
      <section id="benefits" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-padding">
        <SectionHeader 
          title="Why Choose AutomataX" 
          subtitle="We deliver measurable ROI, not just technology." 
          alignment="center" 
        />
        
        <Card className="border-2 border-accent/20 bg-white/60 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
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
                    <p className="text-white/80">New Delhi<br/>India</p>
                  </div>
                  <div>
                    <div className="text-accent font-semibold mb-1">Email</div>
                    <p className="text-white/80">sales@automataxpro.site</p>
                  </div>
                  <div>
                    <div className="text-accent font-semibold mb-1">Phone</div>
                    <p className="text-white/80">+91 92114 57736</p>
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
    </Layout>
  );
}