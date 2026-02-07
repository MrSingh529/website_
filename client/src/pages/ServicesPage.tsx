import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Workflow, Bot, Code2, Lightbulb, Database, TrendingUp, Zap, Shield, Clock, Users } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SpotlightCard from '@/components/SpotlightCard';
import TextType from '@/components/TextType';

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services | AutomataX";
  }, []);
  
  const services = [
    {
      title: 'Business Process Automation',
      icon: Workflow,
      description:
        'Transform manual, time-consuming business processes into streamlined, automated workflows that run 24/7 with minimal human intervention.',
      benefits: [
        'Reduce operational costs by up to 50%',
        'Eliminate bottlenecks and delays',
        'Improve process consistency and quality',
        'Free up staff for strategic initiatives',
      ],
      useCases: ['Invoice processing', 'Order management', 'Data entry automation', 'Report generation'],
      features: ['Workflow design', 'Process mapping', 'Performance analytics', 'Continuous optimization'],
    },
    {
      title: 'Robotic Process Automation (RPA)',
      icon: Bot,
      description:
        'Deploy intelligent software robots that mimic human actions to handle repetitive, rule-based tasks with speed, accuracy, and reliability.',
      benefits: [
        'Achieve 99.9% accuracy in repetitive tasks',
        'Scale operations without adding headcount',
        'Integrate with legacy systems seamlessly',
        'Reduce processing time by 70-90%',
      ],
      useCases: ['Data migration', 'Form filling', 'Email processing', 'System integration'],
      features: ['Bot development', 'Task automation', 'Error handling', 'Bot monitoring'],
    },
    {
      title: 'Workflow Orchestration',
      icon: Database,
      description:
        'Coordinate complex, multi-step workflows across different systems, departments, and teams to ensure seamless end-to-end process execution.',
      benefits: [
        'Improve cross-functional collaboration',
        'Gain real-time visibility into processes',
        'Reduce handoff errors and delays',
        'Optimize resource allocation',
      ],
      useCases: ['Approval workflows', 'Customer onboarding', 'Supply chain coordination', 'Project management'],
      features: ['Process orchestration', 'System integration', 'Real-time tracking', 'Exception management'],
    },
    {
      title: 'Custom Automation Software',
      icon: Code2,
      description:
        'Tailored automation solutions designed specifically for your unique business requirements, industry regulations, and operational constraints.',
      benefits: [
        'Perfect fit for your specific needs',
        'Competitive advantage through custom features',
        'Full ownership and control',
        'Scalable architecture for future growth',
      ],
      useCases: ['Industry-specific automation', 'Complex integrations', 'Specialized workflows', 'Custom dashboards'],
      features: ['Custom development', 'API integration', 'UI/UX design', 'Maintenance & support'],
    },
    {
      title: 'Digital Transformation Consulting',
      icon: Lightbulb,
      description:
        'Strategic guidance and hands-on support to modernize your operations, adopt new technologies, and build a culture of continuous improvement.',
      benefits: [
        'Clear roadmap for digital transformation',
        'Risk mitigation and change management',
        'Technology selection and vendor evaluation',
        'Training and knowledge transfer',
      ],
      useCases: ['Automation strategy', 'Technology assessment', 'Process optimization', 'Change management'],
      features: ['Strategy development', 'Process analysis', 'Technology advisory', 'Implementation support'],
    },
    {
      title: 'Analytics & Insights',
      icon: TrendingUp,
      description:
        'Transform raw process data into actionable intelligence for continuous improvement and data-driven decision making.',
      benefits: [
        'Identify automation opportunities',
        'Measure ROI and performance metrics',
        'Predict process bottlenecks',
        'Optimize resource allocation',
      ],
      useCases: ['Process analytics', 'Performance dashboards', 'Predictive analytics', 'KPI tracking'],
      features: ['Data visualization', 'Performance metrics', 'Predictive modeling', 'Custom reporting'],
    },
  ];

  const serviceFeatures = [
    { icon: Zap, title: 'Fast Implementation', description: 'Quick deployment with minimal disruption' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security and compliance' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock monitoring and support' },
    { icon: Users, title: 'Expert Team', description: 'Certified automation specialists' },
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
            Comprehensive <br />
            <TextType
              text={[
                "Automation Solutions",
                "Business Transformation",
                "Digital Innovation",
                "Process Excellence"
              ]}
              as="span"
              className="text-gradient inline-block min-h-[1.2em]"
              typingSpeed={85}
              deletingSpeed={55}
              pauseDuration={2200}
              loop={true}
              showCursor={true}
              cursorCharacter="▎"
              cursorClassName="text-accent"
              startOnVisible={true}
            />
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From business process automation to digital transformation consulting, we deliver
            end-to-end solutions that drive measurable business value.
          </p>
          <ScrollLink to="services-grid" smooth={true} duration={500} offset={-100}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
              Explore Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollLink>
        </div>
      </section>

      {/* Service Features - With Spotlight */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Our{" "}
              <TextType
                text={["Services", "Solutions", "Expertise"]}
                as="span"
                className="text-accent inline-block min-w-[180px]"
                typingSpeed={100}
                deletingSpeed={60}
                pauseDuration={2300}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)" className="h-full">
                  <div className="text-center p-6 bg-white rounded-xl h-full flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - With Spotlight */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container-padding">
          <div className="rounded-3xl bg-white/70 backdrop-blur shadow-lg border border-white/60 text-center p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our{" "}
              <TextType
                text={["Core Services", "Service Portfolio", "Solution Suite"]}
                as="span"
                className="text-accent inline-block min-w-[250px]"
                typingSpeed={95}
                deletingSpeed={58}
                pauseDuration={2400}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.08)">
                  <Card className="overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                    <div className="grid gap-8 lg:grid-cols-3">
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:col-span-1">
                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                          <service.icon className="h-12 w-12 text-accent" />
                        </div>
                        <h2 className="mb-4 text-2xl font-bold text-primary">{service.title}</h2>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>

                      <div className="p-8 lg:col-span-2">
                        <div className="mb-8">
                          <h3 className="mb-4 text-lg font-semibold text-primary">Key Benefits</h3>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                                <span className="text-sm text-foreground/80">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <h3 className="mb-4 text-lg font-semibold text-primary">Common Use Cases</h3>
                            <div className="flex flex-wrap gap-2">
                              {service.useCases.map((useCase, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                                  {useCase}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-4 text-lg font-semibold text-primary">Key Features</h3>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="border-border/50">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - With Spotlight */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Proven{" "}
              <TextType
                text={["Process", "Methodology", "Approach"]}
                as="span"
                className="text-accent inline-block min-w-[200px]"
                typingSpeed={105}
                deletingSpeed={62}
                pauseDuration={2500}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure successful automation implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Analyze your processes and identify automation opportunities' },
              { step: '02', title: 'Design', desc: 'Create detailed automation blueprints and solution architecture' },
              { step: '03', title: 'Development', desc: 'Build and test automation solutions with your team' },
              { step: '04', title: 'Deployment', desc: 'Implement, monitor, and optimize for maximum ROI' },
            ].map((item, index) => (
              <SpotlightCard key={index} spotlightColor="rgba(59, 130, 246, 0.1)">
                <Card className="border-2 border-border/50 text-center h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - With Typing */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-padding">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              <TextType
                text={[
                  "Ready to Automate Your Business?",
                  "Ready to Transform Operations?",
                  "Ready to Scale Efficiently?"
                ]}
                as="span"
                className="inline-block min-w-[400px]"
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
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a consultation with our automation experts to discuss your specific needs
              and explore how we can help transform your business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 sm:w-auto shadow-xl shadow-primary/20">
                  Talk to Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary/5 sm:w-auto"
                >
                  View Case Studies
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
