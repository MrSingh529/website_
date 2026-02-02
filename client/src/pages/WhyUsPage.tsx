import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Code,
  Clock, 
  CheckCircle2,
  Star,
  TrendingUp,
  Cpu,
  ArrowRight,
  Rocket,
  MessageSquare,
  Sparkles,
  Brain,
  Lightbulb,
  Handshake,
  Building,
  Briefcase,
  Globe,
  Award
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function WhyUsPage() {
  useEffect(() => {
    document.title = "Why Choose Us | AutomataX";
  }, []);
  const differentiators = [
    {
      icon: Heart,
      title: 'Automation, But Personal',
      description: "We're not a faceless SaaS with endless upsells—we're engineers and automation nerds who build real solutions for real businesses.",
      highlights: ['Direct access to founders', 'No vendor lock-in', 'Own your code forever'],
    },
    {
      icon: Code,
      title: 'You Own Everything',
      description: "Source code, documentation, full know-how. Run it on your laptop if you want—no strings attached.",
      highlights: ['Full source code ownership', 'No subscriptions', 'Complete transparency'],
    },
    {
      icon: MessageSquare,
      title: 'Real Humans, Real Help',
      description: "We don't hide behind ticket systems. You'll have a direct line to our team for quick answers and honest advice.",
      highlights: ['Direct communication', 'No automated responses', 'Founder-level access'],
    },
    {
      icon: Rocket,
      title: 'Ridiculously Fast',
      description: "Most automations delivered in days—not months. We hate slow projects as much as you do.",
      highlights: ['Days, not months', 'Agile delivery', 'Quick ROI'],
    },
  ];

  const team = [
    {
      name: "Mr. Singh",
      role: "CEO & Founder",
      description: "The original 'automation guy' with years of experience in AI and process improvement. Deep in code, solving problems, and dreaming up simpler solutions.",
      initials: "MS",
      color: "bg-accent"
    },
    {
      name: "Isha J.",
      role: "Head of Learning & Innovation",
      description: "Keeps us curious with fresh ideas. Known for creative problem-solving and helping teams learn faster.",
      initials: "IJ",
      color: "bg-primary"
    },
    {
      name: "Mannu Joshi",
      role: "Marketing & Client Engagement",
      description: "Shares our story and listens to yours. Ensures we deliver value you can feel with honest, transparent work.",
      initials: "MJ",
      color: "bg-accent"
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We explore what\'s next, pushing boundaries to create solutions that actually work.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We partner closely with every client—no surprises, just shared success.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, transparent, and accountable at every step. We earn your trust.',
    },
    {
      icon: Target,
      title: 'Customer-First',
      description: 'We win when our clients win. Every solution is built around your needs.',
    },
  ];

  const metrics = [
    { value: '25+', label: 'Transformations Delivered', icon: Rocket },
    { value: '2+', label: 'Industries Accelerated', icon: TrendingUp },
    { value: '100%', label: 'Measurable ROI', icon: Star },
    { value: '2024', label: 'Founded, Future-Focused', icon: Cpu },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'A real conversation—no sales pitch. We listen to your challenges and identify opportunities.',
      duration: '30-60 mins',
    },
    {
      step: '02',
      title: 'Quick Proof',
      description: 'We build a small prototype to show you what\'s possible—usually within days.',
      duration: '2-5 days',
    },
    {
      step: '03',
      title: 'Build Together',
      description: 'Iterative development with your feedback every step of the way.',
      duration: '1-4 weeks',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We don\'t disappear. Ongoing support and optimization to ensure success.',
      duration: 'Ongoing',
    },
  ];

  const clientLogos = [
    { 
        name: 'Wembrace Biopharma', 
        initials: 'WB',
        imagePath: '/client-logos/client-logo-1.png'
    },
    { 
        name: 'imarc', 
        initials: 'IM',
        imagePath: '/client-logos/client-logo-2.png'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        </div>

        <div className="container-padding relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary">
            Automation, But <br />
            <span className="text-gradient">Human</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            We started AutomataX because we got tired of "solutions" that were more about 
            vendor lock-in than real-world impact. We build with you. You own the code. 
            You see results, fast.
          </p>
        </div>
      </section>

      {/* Our Story - Simplified */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                  <Brain className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hi, I'm Mr. Singh — founder of AutomataX. I didn’t start out planning to build an automation company.
                  I started by working closely with leadership teams on process improvement and day-to-day operations.
                </p>

                <p>
                  Along the way, I kept seeing the same problems everywhere — repetitive tasks, manual approvals,
                  broken workflows, and teams spending hours on work that could be done in minutes.
                  So I began building internal automations and lightweight tools to simplify how work actually gets done.
                </p>

                <p>
                  Over time, I became the person teams turned to when operations felt messy or inefficient.
                  That hands-on experience is what led to AutomataX.
                  I believe automation shouldn’t be complex or reserved for big tech companies —
                  every business deserves smart, secure, human-first systems that simply work.
                </p>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-foreground/70 italic">
                    "If you're curious what automation could do for your team, let's have a real conversation—no sales pitch, just ideas."
                  </p>
                  <div className="flex items-center space-x-3 mt-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold">
                      MS
                    </div>
                    <div>
                      <div className="font-bold text-primary">Mr. Singh</div>
                      <div className="text-sm text-muted-foreground">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another automation vendor. Here's what really matters:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-border/50 hover:border-accent/50 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                        <p className="text-foreground/70 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section - UPDATED LOGO CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted By Innovators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From ambitious startups to industry leaders, we're proud to partner with businesses that refuse to settle for ordinary.
            </p>
          </div>

          {/* Logo Carousel - Clean Logos Only */}
          <div className="relative overflow-hidden py-12">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* First carousel track */}
            <div className="flex animate-slide">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  {/* Logo only - no borders, no text */}
                  <div className="relative w-48 h-24 flex items-center justify-center p-4">
                    <img 
                      src={client.imagePath} 
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        // Simple fallback to initials if image fails
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = `flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 w-48 h-16`;
                        fallback.innerHTML = `<span class="text-lg font-semibold text-primary/60">${client.initials}</span>`;
                        e.currentTarget.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A small, passionate team of automation builders—engineers, thinkers, and problem-solvers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-border/50 hover:border-accent/50 transition-all text-center h-full">
                  <CardContent className="p-8">
                    <div className={`flex h-24 w-24 items-center justify-center rounded-full ${member.color} text-white text-3xl font-bold mx-auto mb-4`}>
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work, and what we care about most
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Track Record</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real impact, real transformation. See what we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                <metric.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and focused on your success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-border/50 hover:border-accent/50 transition-all h-full">
                  <CardContent className="p-8 text-center">
                    <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                      {step.step}
                    </Badge>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{step.description}</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-accent">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}Hi, I'm Mr. Singh - founder of Automata
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Humans?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's have a real conversation about what automation could do for your team. 
              No sales pitch, just honest ideas from real automation builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Start a Real Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/case-studies">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                  See What We've Built
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}