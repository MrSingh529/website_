import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Headphones } from 'lucide-react';
import { CheckCircle2, Cpu, Cloud, Zap, Lock, GitBranch, Database, ArrowRight, Server, Shield, Code, BarChart, Link, Grid } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SpotlightCard from '@/components/SpotlightCard';
import TextType from '@/components/TextType';

export default function TechnologyStackPage() {
  useEffect(() => {
    document.title = "Technology Stack | AutomataX";
  }, []);
  
  const technologies = [
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      description:
        'Leverage cutting-edge artificial intelligence and machine learning capabilities to build intelligent automation solutions.',
      technologies: [
        {
          name: 'Natural Language Processing',
          description: 'Extract insights from unstructured text, automate document processing, and enable conversational interfaces.',
        },
        {
          name: 'Computer Vision',
          description: 'Automated visual inspection, document scanning, and image-based quality control.',
        },
        {
          name: 'Predictive Analytics',
          description: 'Forecast trends, predict failures, and optimize decision-making with ML models.',
        },
        {
          name: 'Intelligent Document Processing',
          description: 'Extract, classify, and validate data from documents with high accuracy.',
        },
      ],
      color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      category: 'Low-Code/No-Code Platforms',
      icon: Zap,
      description:
        'Accelerate development and empower business users with intuitive low-code and no-code automation platforms.',
      technologies: [
        {
          name: 'Visual Workflow Builders',
          description: 'Drag-and-drop interfaces for creating complex automation workflows without coding.',
        },
        {
          name: 'Business Process Management',
          description: 'Model, execute, and optimize business processes with visual tools.',
        },
        {
          name: 'Rapid Application Development',
          description: 'Build custom applications quickly with pre-built components and templates.',
        },
        {
          name: 'Citizen Developer Tools',
          description: 'Enable non-technical users to create and maintain automation solutions.',
        },
      ],
      color: 'from-purple-500/10 to-pink-500/10',
    },
    {
      category: 'Cloud Automation Platforms',
      icon: Cloud,
      description:
        'Scalable, secure, and reliable cloud infrastructure for deploying and managing automation solutions.',
      technologies: [
        {
          name: 'Multi-Cloud Support',
          description: 'Deploy on AWS, Azure, Google Cloud, or hybrid environments based on your needs.',
        },
        {
          name: 'Serverless Architecture',
          description: 'Auto-scaling, cost-effective execution of automation workflows.',
        },
        {
          name: 'Container Orchestration',
          description: 'Kubernetes-based deployment for high availability and scalability.',
        },
        {
          name: 'Cloud-Native Services',
          description: 'Leverage managed services for databases, messaging, and analytics.',
        },
      ],
      color: 'from-orange-500/10 to-yellow-500/10',
    },
    {
      category: 'Integration & APIs',
      icon: GitBranch,
      description:
        'Seamlessly connect with your existing systems, applications, and data sources.',
      technologies: [
        {
          name: 'RESTful & GraphQL APIs',
          description: 'Modern API standards for flexible and efficient system integration.',
        },
        {
          name: 'Enterprise Service Bus',
          description: 'Centralized integration layer for complex enterprise architectures.',
        },
        {
          name: 'Pre-Built Connectors',
          description: 'Ready-to-use integrations for popular business applications and platforms.',
        },
        {
          name: 'Custom Integration Development',
          description: 'Build tailored connectors for legacy systems and proprietary applications.',
        },
      ],
      color: 'from-green-500/10 to-emerald-500/10',
    },
    {
      category: 'Data Management',
      icon: Database,
      description:
        'Robust data storage, processing, and analytics capabilities for automation solutions.',
      technologies: [
        {
          name: 'Relational Databases',
          description: 'PostgreSQL, MySQL, and SQL Server for structured data storage.',
        },
        {
          name: 'NoSQL Databases',
          description: 'MongoDB, Cassandra, and Redis for flexible, high-performance data storage.',
        },
        {
          name: 'Data Warehousing',
          description: 'Centralized data repositories for analytics and reporting.',
        },
        {
          name: 'Real-Time Data Processing',
          description: 'Stream processing for real-time analytics and decision-making.',
        },
      ],
      color: 'from-indigo-500/10 to-violet-500/10',
    },
    {
      category: 'Security & Compliance',
      icon: Lock,
      description:
        'Enterprise-grade security measures to protect your data and ensure regulatory compliance.',
      technologies: [
        {
          name: 'End-to-End Encryption',
          description: 'Data encryption at rest and in transit using industry-standard protocols.',
        },
        {
          name: 'Identity & Access Management',
          description: 'Role-based access control, SSO, and multi-factor authentication.',
        },
        {
          name: 'Audit Logging',
          description: 'Comprehensive logging and monitoring for compliance and security analysis.',
        },
        {
          name: 'Compliance Frameworks',
          description: 'Support for GDPR, HIPAA, SOC 2, ISO 27001, and other standards.',
        },
      ],
      color: 'from-red-500/10 to-rose-500/10',
    },
  ];

  const benefits = [
    'Future-proof technology stack that evolves with your needs',
    'Vendor-agnostic approach for maximum flexibility',
    'Proven technologies used by Fortune 500 companies',
    'Continuous updates and security patches',
    'Expert support and training included',
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
            Built on Industry-Leading <br />
            <TextType
              text={[
                "Technology",
                "Innovation",
                "Infrastructure",
                "Platforms"
              ]}
              as="span"
              className="text-gradient inline-block min-h-[1.2em]"
              typingSpeed={90}
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
            We leverage the most advanced and reliable technologies to deliver robust, scalable,
            and secure automation solutions.
          </p>
        </div>
      </section>

      {/* Technology Overview - With Spotlight */}
      <section className="py-20 bg-muted/40">
        <div className="container-padding">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)">
                <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Cpu className="w-20 h-20 text-accent mb-4 mx-auto" />
                      <h3 className="text-2xl font-bold text-primary mb-2">Modern Tech Stack</h3>
                      <p className="text-muted-foreground">Cutting-edge technologies for maximum performance</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary">
                Cutting-Edge{" "}
                <TextType
                  text={["Technology", "Innovation", "Solutions"]}
                  as="span"
                  className="text-accent inline-block min-w-[200px]"
                  typingSpeed={100}
                  deletingSpeed={60}
                  pauseDuration={2400}
                  loop={true}
                  showCursor={true}
                  cursorCharacter="▎"
                  startOnVisible={true}
                />
                {" "}for Maximum Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Our technology stack combines the latest innovations in AI, cloud computing, and
                automation platforms to deliver solutions that are powerful, flexible, and
                future-proof.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Technology Categories - With Spotlight */}
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.08)">
                  <Card className="overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                    <CardHeader className={`bg-gradient-to-br ${tech.color} p-8`}>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                          <tech.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-primary">{tech.category}</CardTitle>
                          <CardDescription className="mt-2 text-base text-foreground/70">
                            {tech.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        {tech.technologies.map((item, idx) => (
                          <div key={idx} className="space-y-2 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold text-primary">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities - With Spotlight and Typing */}
      <section className="py-20 bg-muted/30">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Seamless{" "}
              <TextType
                text={["Integration", "Connectivity", "Compatibility"]}
                as="span"
                className="text-accent inline-block min-w-[220px]"
                typingSpeed={95}
                deletingSpeed={58}
                pauseDuration={2300}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
              {" "}with Your Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions integrate with hundreds of popular business applications and platforms
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {[
              'Salesforce',
              'SAP',
              'Oracle',
              'Microsoft Dynamics',
              'ServiceNow',
              'Workday',
              'NetSuite',
              'Slack',
              'Microsoft Teams',
              'Google Workspace',
              'Jira',
              'Zendesk',
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)">
                  <Card className="border-2 border-border/50 bg-card hover:border-accent/50 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
                        <span className="font-bold">{platform.charAt(0)}</span>
                      </div>
                      <div className="font-semibold text-primary">{platform}</div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              ...and many more. Don't see your platform? We can build custom integrations.
            </p>
            <a href="/contact">
              <Button className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                Request Custom Integration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Features - With Spotlight */}
      <section className="py-20 bg-muted/40">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Our{" "}
              <TextType
                text={["Tech Stack", "Platform", "Infrastructure"]}
                as="span"
                className="text-accent inline-block min-w-[200px]"
                typingSpeed={105}
                deletingSpeed={63}
                pauseDuration={2500}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
              {" "}Stands Out
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for performance, scalability, and security from the ground up
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Optimized for speed and efficiency to handle large-scale automation workloads',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security with end-to-end encryption and compliance certifications',
              },
              {
                icon: Database,
                title: 'Scalable Architecture',
                description: 'Designed to scale from startups to enterprise-level deployments',
              },
              {
                icon: Link,
                title: 'Open Standards',
                description: 'Built on open standards for maximum compatibility and future-proofing',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)" className="h-full">
                  <div className="text-center p-6 bg-card rounded-xl h-full flex flex-col items-center justify-center">
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

      {/* CTA Section - With Typing */}
      <section className="py-20">
        <div className="container-padding">
          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.12)">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                  <TextType
                    text={[
                      "Ready to Leverage Our Technology?",
                      "Ready to Build with Us?",
                      "Ready to Innovate Together?"
                    ]}
                    as="span"
                    className="inline-block min-w-[450px]"
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
                  Schedule a consultation with our technical experts to discuss how our technology stack
                  can power your automation initiatives.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                      Talk to Our Experts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/services">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary/5">
                      View Our Services
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
