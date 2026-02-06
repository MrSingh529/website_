import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';
import TextType from '@/components/TextType';

export default function ClientCaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies | AutomataX";
  }, []);
  
  const caseStudies = [
    {
      company: 'IMARC Group',
      industry: 'Market Research & Consulting',
      challenge:
        'Manual creation of regional market reports required 36+ hours per report with repetitive data entry from Excel to PowerPoint. Inconsistent formatting across 100+ slides and high risk of human errors in data transfer and calculations.',
      solution:
        'Built AI-powered Python automation that reads Excel data, generates intelligent market analysis using Claude/GPT, and creates publication-ready PowerPoint reports with automated formatting, charts, and AI-generated visuals.',
      results: [
        { metric: 'Report Generation Time', value: '95% reduction', icon: Clock },
        { metric: 'Manual Errors', value: 'Eliminated', icon: TrendingUp },
        { metric: 'Production Capacity', value: '10x increase', icon: DollarSign },
      ],
      testimonial:
        'AutomataX revolutionized our report production workflow. What used to take our analysts days now completes in under an hour with perfect accuracy and consistency.',
      author: 'Senior Team Lead, IMARC Group',
    },
    {
      company: 'Apex Service Solutions',
      industry: 'Service Operations & Logistics',
      challenge:
        'Managing monthly billing for 500+ decentralized service partners was a critical bottleneck. The commercial team spent 5 days each billing cycle manually collating Excel data, calculating complex variable payouts, and generating individual tax-compliant invoices, resulting in operational delays.',
      solution:
        'Architected a custom "Auto-Billing Hub" using Python and Streamlit. The system ingests raw partner data, dynamically applies brand-specific logic (for different entities like Harman, Philips, etc.), and auto-generates hundreds of validated Excel invoices in a single batch process.',
      results: [
        { metric: 'Processing Time', value: '98% faster (5 days → 1 hr)', icon: Clock },
        { metric: 'Invoice Accuracy', value: '100% Error-Free', icon: TrendingUp },
        { metric: 'Operational Savings', value: '400+ man-hours/month', icon: DollarSign },
      ],
      testimonial:
        'Our billing cycle transformed overnight. What used to be a week of stress is now a simple "upload and download" task. The system handles all our complex logic scenarios perfectly without human intervention.',
      author: 'Director of Commercial Operations',
    },
    {
      company: 'A Oncology Biopharma Company',
      industry: 'Biopharma',
      challenge:
        'Field sales leadership (ASMs/RSMs) wasted 15+ hours monthly on admin coordination. Cab bookings were handled via chaotic WhatsApp groups, sample approvals took 3 days over email, and expense reimbursements were delayed due to manual paper trails, affecting team morale.',
      solution:
        'Built a unified "Ops-Automation Portal" that digitized 10+ core workflows. The system features instant cab booking with vendor APIs, one-click product sample approvals for managers, and an automated expense tracking module with policy-check validation.',
      results: [
        { metric: 'Approval Time', value: 'Reduced from 3 days to 2 hrs', icon: Clock },
        { metric: 'Admin Overhead', value: 'Cut by 60%', icon: DollarSign },
        { metric: 'User Adoption', value: '100% adoption by Field Team', icon: TrendingUp },
      ],
      testimonial:
        "The portal removed the friction from our daily operations. Our Area Managers now focus entirely on market visits instead of chasing logistics approvals. It's the backbone of our field efficiency.",
      author: 'National Sales Operations Head',
    },
  ];

  const testimonials = [
    {
      quote:
        'The automated reporting system transformed our entire production workflow. What used to take days of manual formatting now happens in minutes with higher accuracy. A true game-changer for our analysts.',
      author: 'Co-Founder',
      role: 'Global Market Research Firm',
      company: 'Market Intelligence',
    },
    {
      quote:
        'Managing billing for hundreds of partners was our biggest bottleneck. AutomataX built a solution that reduced our 5-day cycle to under an hour. The efficiency gains were immediate and massive.',
      author: 'Head of Commercial Ops',
      role: 'Leading Electronics Service Provider',
      company: 'Service Logistics',
    },
    {
      quote:
        'Our field team needed a simplified tool for logistics and approvals, and AutomataX delivered exactly that. The portal is intuitive, robust, and has completely streamlined our internal coordination.',
      author: 'National Sales Operations Head',
      role: 'Oncology Biopharma Company',
      company: 'Biopharmaceuticals',
    },
  ];

  return (
    <Layout>
      {/* Hero Section - With Typing Effect */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        </div>

        <div className="container-padding relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary">
            Real Results from <br />
            <TextType
              text={[
                "Real Clients",
                "Industry Leaders",
                "Our Partners",
                "Growing Businesses"
              ]}
              as="span"
              className="text-gradient inline-block min-h-[1.2em]"
              typingSpeed={85}
              deletingSpeed={52}
              pauseDuration={2200}
              loop={true}
              showCursor={true}
              cursorCharacter="▎"
              cursorClassName="text-accent"
              startOnVisible={true}
            />
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            See how leading organizations have transformed their operations and achieved
            measurable ROI with AutomataX automation solutions.
          </p>
          <ScrollLink to="case-studies" smooth={true} duration={500} offset={-100}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
              View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollLink>
        </div>
      </section>

      {/* Case Studies - With Spotlight */}
      <section id="case-studies" className="py-20 lg:py-32 bg-white relative">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              <TextType
                text={["Success Stories", "Client Wins", "Real Impact"]}
                as="span"
                className="inline-block min-w-[280px]"
                typingSpeed={95}
                deletingSpeed={58}
                pauseDuration={2400}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                cursorClassName="text-accent"
                startOnVisible={true}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven automation strategies delivering measurable business impact
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.08)">
                  <Card className="overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="grid gap-8 lg:grid-cols-3">
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:col-span-1">
                        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                          {study.industry}
                        </Badge>
                        <h2 className="mb-4 text-2xl font-bold text-primary">{study.company}</h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">
                              Challenge
                            </h3>
                            <p className="text-sm text-foreground">{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">
                              Solution
                            </h3>
                            <p className="text-sm text-foreground">{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 lg:col-span-2">
                        <div className="mb-8">
                          <h3 className="mb-6 text-xl font-semibold text-primary">Key Results</h3>
                          <div className="grid gap-6 sm:grid-cols-3">
                            {study.results.map((result, idx) => (
                              <SpotlightCard key={idx} spotlightColor="rgba(59, 130, 246, 0.12)">
                                <Card className="border-none bg-muted/30 h-full">
                                  <CardContent className="p-6">
                                    <result.icon className="mb-3 h-8 w-8 text-accent" />
                                    <div className="mb-1 text-2xl font-bold text-accent">
                                      {result.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                                  </CardContent>
                                </Card>
                              </SpotlightCard>
                            ))}
                          </div>
                        </div>

                        <Card className="border-l-4 border-l-accent bg-muted/20">
                          <CardContent className="p-6">
                            <Quote className="mb-4 h-8 w-8 text-accent/50" />
                            <p className="mb-4 italic text-foreground">{study.testimonial}</p>
                            <div className="text-sm">
                              <div className="font-semibold text-primary">{study.author}</div>
                              <div className="text-muted-foreground">{study.company}</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials - With Spotlight and Typing */}
      <section className="py-20 bg-muted/30">
        <div className="container-padding">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              What Our{" "}
              <TextType
                text={["Clients Say", "Partners Share", "Customers Think"]}
                as="span"
                className="text-accent inline-block min-w-[230px]"
                typingSpeed={100}
                deletingSpeed={60}
                pauseDuration={2300}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)" className="h-full">
                  <Card className="border-none bg-background hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="mb-4 h-8 w-8 text-accent/30" />
                      <p className="mb-6 text-foreground flex-grow">{testimonial.quote}</p>
                      <div className="border-t border-border/50 pt-4">
                        <div className="font-semibold text-primary">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <Badge className="mt-2 bg-accent/10 text-accent hover:bg-accent/20">
                          {testimonial.company}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - With Spotlight and Typing */}
      <section className="py-20">
        <div className="container-padding">
          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.12)">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                  <TextType
                    text={[
                      "Ready to Write Your Success Story?",
                      "Ready to Join Our Success Stories?",
                      "Ready to Transform Your Business?"
                    ]}
                    as="span"
                    className="inline-block min-w-[480px]"
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2600}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="▎"
                    cursorClassName="text-accent"
                    startOnVisible={true}
                  />
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  Join hundreds of satisfied clients who have transformed their operations with
                  AutomataX. Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                      Talk to Our Experts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary/5">
                      Request a Proposal
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </SpotlightCard>
        </div>
      </section>
    </Layout>
  );
}
