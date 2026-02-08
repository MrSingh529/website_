import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Building2, Factory, ShoppingBag, Heart, Users, DollarSign, Truck, Headphones, LineChart, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import SpotlightCard from '@/components/SpotlightCard';
import TextType from '@/components/TextType';

export default function UseCasesPage() {
  const industries = [
    {
      name: 'Finance',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Streamline financial operations with intelligent automation',
      useCases: [
        {
          title: 'Automated Loan Processing',
          description: 'Reduce loan approval time from days to hours with automated document verification, credit checks, and risk assessment.',
          impact: '70% faster processing',
          features: ['Document verification', 'Credit scoring', 'Risk assessment', 'Approval workflow'],
        },
        {
          title: 'Fraud Detection & Prevention',
          description: 'Real-time transaction monitoring and anomaly detection using AI-powered automation to identify suspicious activities.',
          impact: '85% fraud reduction',
          features: ['Anomaly detection', 'Pattern recognition', 'Real-time alerts', 'Case management'],
        },
        {
          title: 'Regulatory Compliance Reporting',
          description: 'Automated data collection, validation, and report generation for regulatory compliance requirements.',
          impact: '90% time savings',
          features: ['Data aggregation', 'Validation rules', 'Report templates', 'Audit trails'],
        },
        {
          title: 'Account Reconciliation',
          description: 'Automated matching and reconciliation of transactions across multiple systems and accounts.',
          impact: '95% accuracy',
          features: ['Transaction matching', 'Exception handling', 'Variance analysis', 'Auto-correction'],
        },
      ],
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-amber-500',
      description: 'Optimize production and supply chain with smart automation',
      useCases: [
        {
          title: 'Inventory Management',
          description: 'Automated stock level monitoring, reorder point triggers, and supplier coordination to prevent stockouts.',
          impact: '40% inventory reduction',
          features: ['Stock monitoring', 'Auto-reordering', 'Supplier coordination', 'Demand forecasting'],
        },
        {
          title: 'Quality Control Automation',
          description: 'AI-powered visual inspection and automated testing to ensure product quality and reduce defects.',
          impact: '99% defect detection',
          features: ['Visual inspection', 'Automated testing', 'Defect classification', 'Root cause analysis'],
        },
        {
          title: 'Production Scheduling',
          description: 'Intelligent scheduling algorithms that optimize production capacity, minimize downtime, and meet delivery deadlines.',
          impact: '30% efficiency gain',
          features: ['Capacity planning', 'Resource allocation', 'Schedule optimization', 'Real-time adjustments'],
        },
        {
          title: 'Predictive Maintenance',
          description: 'IoT sensor data analysis and automated alerts to predict equipment failures before they occur.',
          impact: '50% downtime reduction',
          features: ['Sensor monitoring', 'Failure prediction', 'Maintenance scheduling', 'Parts inventory'],
        },
      ],
    },
    {
      name: 'Retail',
      icon: ShoppingBag,
      color: 'from-purple-500 to-pink-500',
      description: 'Enhance customer experience and operational efficiency',
      useCases: [
        {
          title: 'Order Fulfillment Automation',
          description: 'End-to-end automation of order processing, inventory allocation, and shipping coordination.',
          impact: '60% faster fulfillment',
          features: ['Order processing', 'Inventory allocation', 'Shipping coordination', 'Tracking updates'],
        },
        {
          title: 'Dynamic Pricing',
          description: 'Automated price optimization based on demand, competition, inventory levels, and market conditions.',
          impact: '15% revenue increase',
          features: ['Competitor analysis', 'Demand sensing', 'Price optimization', 'Campaign management'],
        },
        {
          title: 'Customer Service Chatbots',
          description: 'AI-powered chatbots that handle common inquiries, process returns, and escalate complex issues.',
          impact: '80% query automation',
          features: ['Natural language processing', 'Intent recognition', 'Return processing', 'Escalation routing'],
        },
        {
          title: 'Personalized Marketing',
          description: 'Automated customer segmentation, campaign creation, and personalized recommendations.',
          impact: '3x conversion rate',
          features: ['Customer segmentation', 'Campaign automation', 'Personalization engine', 'ROI tracking'],
        },
      ],
    },
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-rose-500',
      description: 'Improve patient care and administrative efficiency',
      useCases: [
        {
          title: 'Patient Appointment Scheduling',
          description: 'Automated scheduling, reminders, and rescheduling with intelligent resource allocation.',
          impact: '50% no-show reduction',
          features: ['Smart scheduling', 'Automated reminders', 'Waitlist management', 'Resource optimization'],
        },
        {
          title: 'Medical Records Management',
          description: 'Automated digitization, classification, and retrieval of patient records with secure access controls.',
          impact: '90% faster retrieval',
          features: ['Document digitization', 'Smart classification', 'Secure access', 'Compliance tracking'],
        },
        {
          title: 'Insurance Claims Processing',
          description: 'Automated claims validation, coding, and submission to reduce processing time and errors.',
          impact: '75% faster processing',
          features: ['Claims validation', 'Medical coding', 'Submission automation', 'Payment processing'],
        },
        {
          title: 'Prescription Management',
          description: 'Automated prescription refills, drug interaction checks, and pharmacy coordination.',
          impact: '95% accuracy',
          features: ['Refill automation', 'Drug interaction checks', 'Pharmacy coordination', 'Patient notifications'],
        },
      ],
    },
  ];

  const functions = [
    {
      name: 'Human Resources',
      icon: Users,
      useCases: [
        {
          title: 'Employee Onboarding',
          description: 'Automated document collection, account creation, training scheduling, and compliance tracking.',
          impact: '80% time savings',
        },
        {
          title: 'Payroll Processing',
          description: 'Automated timesheet collection, calculation, tax deductions, and payment distribution.',
          impact: '99% accuracy',
        },
        {
          title: 'Performance Reviews',
          description: 'Automated review scheduling, feedback collection, and performance analytics.',
          impact: '60% faster reviews',
        },
      ],
    },
    {
      name: 'Finance & Accounting',
      icon: DollarSign,
      useCases: [
        {
          title: 'Invoice Processing',
          description: 'Automated invoice capture, validation, approval routing, and payment processing.',
          impact: '70% cost reduction',
        },
        {
          title: 'Expense Management',
          description: 'Automated expense report submission, policy compliance checks, and reimbursement processing.',
          impact: '85% faster processing',
        },
        {
          title: 'Financial Reporting',
          description: 'Automated data consolidation, report generation, and distribution to stakeholders.',
          impact: '90% time savings',
        },
      ],
    },
    {
      name: 'Supply Chain',
      icon: Truck,
      useCases: [
        {
          title: 'Procurement Automation',
          description: 'Automated purchase requisitions, vendor selection, order placement, and tracking.',
          impact: '50% cycle time reduction',
        },
        {
          title: 'Shipment Tracking',
          description: 'Real-time tracking, automated status updates, and exception handling for shipments.',
          impact: '95% visibility',
        },
        {
          title: 'Demand Forecasting',
          description: 'AI-powered demand prediction and automated inventory planning.',
          impact: '30% inventory optimization',
        },
      ],
    },
    {
      name: 'Customer Service',
      icon: Headphones,
      useCases: [
        {
          title: 'Ticket Routing',
          description: 'Automated ticket classification, priority assignment, and routing to appropriate teams.',
          impact: '60% faster resolution',
        },
        {
          title: 'Customer Feedback Analysis',
          description: 'Automated sentiment analysis, trend identification, and actionable insights from customer feedback.',
          impact: '100% feedback coverage',
        },
        {
          title: 'Self-Service Portal',
          description: 'Automated knowledge base updates, FAQ generation, and guided troubleshooting.',
          impact: '70% deflection rate',
        },
      ],
    },
  ];

  const benefits = [
    { icon: Zap, title: 'Faster Implementation', description: 'Pre-built templates for common use cases' },
    { icon: Shield, title: 'Proven Results', description: 'Tested and validated across multiple industries' },
    { icon: LineChart, title: 'Measurable ROI', description: 'Clear metrics and performance tracking' },
    { icon: CheckCircle2, title: 'Easy Scaling', description: 'Start small and expand as needed' },
  ];

  return (
    <Layout>
      <SEO 
        title="Use Cases | Industry-Specific Automation Solutions"
        description="Explore automation use cases for Finance, Manufacturing, Retail, Healthcare & more. See proven solutions that reduce costs by 60% and improve efficiency by 70%."
        canonical="/use-cases"
      />
      {/* Hero Section - With Typing Effect */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        </div>

        <div className="container-padding relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary">
            Automation Across <br />
            <TextType
              text={[
                "Industries & Functions",
                "Every Business Sector",
                "All Departments",
                "Your Organization"
              ]}
              as="span"
              className="text-gradient inline-block min-h-[1.2em]"
              typingSpeed={75}
              deletingSpeed={48}
              pauseDuration={2100}
              loop={true}
              showCursor={true}
              cursorCharacter="▎"
              cursorClassName="text-accent"
              startOnVisible={true}
            />
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover how AutomataX delivers value across different industries and business
            functions with proven automation solutions.
          </p>
        </div>
      </section>

      {/* Benefits Section - With Spotlight */}
      <section className="py-20 bg-muted/40">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Our{" "}
              <TextType
                text={["Use Cases Work", "Solutions Deliver", "Approaches Succeed"]}
                as="span"
                className="text-accent inline-block min-w-[260px]"
                typingSpeed={95}
                deletingSpeed={57}
                pauseDuration={2400}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                startOnVisible={true}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven approaches that deliver tangible results across diverse business environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - With Spotlight and Typing */}
      <section className="py-20 bg-muted/30">
        <div className="container-padding">
          <Tabs defaultValue="industry" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Browse{" "}
                <TextType
                  text={["Use Cases", "Solutions", "Examples"]}
                  as="span"
                  className="text-accent inline-block min-w-[180px]"
                  typingSpeed={105}
                  deletingSpeed={62}
                  pauseDuration={2500}
                  loop={true}
                  showCursor={true}
                  cursorCharacter="▎"
                  startOnVisible={true}
                />
              </h2>
              <TabsList className="inline-flex h-12 p-1 bg-muted rounded-xl">
                <TabsTrigger value="industry" className="rounded-lg px-8 data-[state=active]:bg-primary data-[state=active]:text-white">
                  By Industry
                </TabsTrigger>
                <TabsTrigger value="function" className="rounded-lg px-8 data-[state=active]:bg-primary data-[state=active]:text-white">
                  By Business Function
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="industry" className="space-y-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <div className="sticky top-24 space-y-6">
                        <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.12)">
                          <div className={`overflow-hidden rounded-2xl border-2 border-border/50 p-8 bg-gradient-to-br ${industry.color}/10`}>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${industry.color}`}>
                                <industry.icon className="h-7 w-7 text-white" />
                              </div>
                              <h2 className="text-3xl font-bold text-primary">{industry.name}</h2>
                            </div>
                            <p className="text-foreground/70">{industry.description}</p>
                          </div>
                        </SpotlightCard>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-6">
                        {industry.useCases.map((useCase, idx) => (
                          <SpotlightCard key={idx} spotlightColor="rgba(59, 130, 246, 0.08)">
                            <Card className="border-2 border-border/50 hover:border-accent/50 transition-all hover:shadow-lg">
                              <CardHeader>
                                <div className="flex items-start justify-between">
                                  <CardTitle className="text-xl text-primary">{useCase.title}</CardTitle>
                                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                                    {useCase.impact}
                                  </Badge>
                                </div>
                                <CardDescription className="text-base text-foreground/70">
                                  {useCase.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-2">
                                  {useCase.features.map((feature, featureIdx) => (
                                    <Badge key={featureIdx} variant="outline" className="border-border/50">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </SpotlightCard>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < industries.length - 1 && (
                    <div className="border-t border-border/50" />
                  )}
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="function" className="space-y-12">
              <div className="grid gap-8 md:grid-cols-2">
                {functions.map((func, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)" className="h-full">
                      <Card className="border-2 border-border/50 hover:border-accent/50 transition-all hover:shadow-lg h-full">
                        <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                          <div className="flex items-center space-x-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                              <func.icon className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle className="text-2xl text-primary">{func.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6 p-6">
                          {func.useCases.map((useCase, idx) => (
                            <div key={idx} className="space-y-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                              <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-primary">{useCase.title}</h3>
                                <Badge variant="secondary" className="bg-accent/10 text-accent">
                                  {useCase.impact}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{useCase.description}</p>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section - With Spotlight */}
      <section className="py-20 bg-muted/40">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              <TextType
                text={["Proven Results", "Real Impact", "Measurable Outcomes"]}
                as="span"
                className="inline-block min-w-[300px]"
                typingSpeed={90}
                deletingSpeed={54}
                pauseDuration={2300}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                cursorClassName="text-accent"
                startOnVisible={true}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real impact delivered across hundreds of successful implementations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '70%', label: 'Average Process Time Reduction' },
              { value: '85%', label: 'Error Reduction' },
              { value: '60%', label: 'Cost Savings' },
              { value: '95%', label: 'Client Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.08)" className="h-full">
                  <div className="text-center p-6 bg-card rounded-xl h-full flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </SpotlightCard>
              </motion.div>
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
                  "Ready to Apply These Use Cases?",
                  "Ready to Implement Solutions?",
                  "Ready to See Results?"
                ]}
                as="span"
                className="inline-block min-w-[420px]"
                typingSpeed={82}
                deletingSpeed={51}
                pauseDuration={2600}
                loop={true}
                showCursor={true}
                cursorCharacter="▎"
                cursorClassName="text-accent"
                startOnVisible={true}
              />
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a consultation with our automation experts to discuss how these proven use cases
              can be customized for your specific business needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 sm:w-auto shadow-xl shadow-primary/20">
                  Discuss Your Use Case
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
