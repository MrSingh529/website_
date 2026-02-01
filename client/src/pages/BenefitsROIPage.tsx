import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  Shield,
  Zap,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Link as ScrollLink } from 'react-scroll';

export default function BenefitsROIPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description:
        'Automate repetitive tasks and free up your team to focus on high-value strategic work.',
      metrics: ['3x faster task completion', '70% reduction in manual work', '24/7 operation capability'],
    },
    {
      icon: DollarSign,
      title: 'Reduced Costs',
      description:
        'Lower operational expenses through automation and improved resource utilization.',
      metrics: ['40% average cost reduction', '50% lower error-related costs', 'Minimal infrastructure overhead'],
    },
    {
      icon: Clock,
      title: 'Faster Processes',
      description:
        'Accelerate business processes and reduce cycle times across all operations.',
      metrics: ['80% faster processing', 'Real-time execution', 'Instant scalability'],
    },
    {
      icon: Target,
      title: 'Greater Data Visibility',
      description:
        'Gain real-time insights into operations with comprehensive analytics and reporting.',
      metrics: ['100% process visibility', 'Real-time dashboards', 'Predictive analytics'],
    },
    {
      icon: Shield,
      title: 'Improved Accuracy',
      description:
        'Eliminate human errors and ensure consistent, reliable execution of business processes.',
      metrics: ['99.5% accuracy rate', '85% error reduction', 'Consistent quality'],
    },
    {
      icon: Users,
      title: 'Enhanced Employee Satisfaction',
      description:
        'Reduce burnout by eliminating tedious tasks and empowering employees with better tools.',
      metrics: ['Higher job satisfaction', 'Reduced turnover', 'Improved morale'],
    },
  ];

  const roiCalculator = [
    {
      category: 'Labor Cost Savings',
      description: 'Reduction in manual labor hours',
      typical: '30-50%',
    },
    {
      category: 'Error Reduction',
      description: 'Savings from eliminating costly mistakes',
      typical: '20-40%',
    },
    {
      category: 'Process Acceleration',
      description: 'Value from faster time-to-market',
      typical: '40-70%',
    },
    {
      category: 'Scalability',
      description: 'Growth without proportional cost increase',
      typical: '50-100%',
    },
  ];

  const timeline = [
    {
      phase: 'Month 1-2',
      title: 'Discovery & Planning',
      activities: ['Process assessment', 'Solution design', 'ROI projection'],
    },
    {
      phase: 'Month 3-4',
      title: 'Implementation',
      activities: ['Development', 'Testing', 'Training'],
    },
    {
      phase: 'Month 5-6',
      title: 'Deployment & Optimization',
      activities: ['Go-live', 'Monitoring', 'Fine-tuning'],
    },
    {
      phase: 'Month 6+',
      title: 'Realize ROI',
      activities: ['Full benefits realization', 'Continuous improvement', 'Expansion opportunities'],
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
            Measurable Business <br />
            <span className="text-gradient">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the tangible benefits and return on investment that automation delivers to
            your organization.
          </p>
          <ScrollLink to="benefits-section" smooth={true} duration={500} offset={-100}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
              Explore Benefits <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollLink>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits-section" className="py-20 lg:py-32 bg-white relative">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Transform Your Business Operations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automation delivers comprehensive benefits across all aspects of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Understanding Your ROI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Typical return on investment components from automation projects
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {roiCalculator.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-border/50 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-primary">{item.category}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="ml-6 text-right">
                        <div className="text-2xl font-bold text-accent">{item.typical}</div>
                        <div className="text-xs text-muted-foreground">Typical savings</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <BarChart3 className="mx-auto mb-4 h-12 w-12 text-accent" />
                  <h3 className="mb-2 text-2xl font-bold text-primary">Average ROI: 6-12 Months</h3>
                  <p className="text-muted-foreground">
                    Most clients see positive ROI within the first year, with benefits continuing
                    to compound over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Timeline */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Your Path to ROI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A typical automation project timeline from discovery to full benefits realization
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border hidden md:block" />

            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div
                  key={index}
                  className={`grid gap-8 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <Card className="border-2 border-border/50">
                      <CardHeader>
                        <Badge className="mb-2 w-fit bg-accent/10 text-accent hover:bg-accent/20">
                          {phase.phase}
                        </Badge>
                        <CardTitle className="text-xl text-primary">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-foreground/80">
                              <Zap className="h-4 w-4 flex-shrink-0 text-accent" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
      <div className="container-padding">
        <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Calculate Your Potential ROI
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Schedule a consultation with our experts to get a customized ROI analysis for your
              specific automation needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Get Your ROI Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/case-studies">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary/5">
                  View Case Studies
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </Layout>
  );
}