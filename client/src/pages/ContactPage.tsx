import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
import { useCreateContact } from '@/hooks/use-contact';
import { Layout } from '@/components/Layout';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';
import TextType from '@/components/TextType';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | AutomataX";
  }, []);
  
  const { mutate, isPending, isSuccess } = useCreateContact();
  const [inquiryType, setInquiryType] = useState<'expert' | 'proposal'>('expert');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    businessNeeds: [] as string[],
    technologies: [] as string[],
    message: '',
  });

  const industries = [
    'Finance',
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Technology',
    'Logistics',
    'Other',
  ];

  const businessNeedsOptions = [
    'Business Process Automation',
    'Robotic Process Automation (RPA)',
    'Workflow Orchestration',
    'Custom Automation Software',
    'Digital Transformation Consulting',
    'System Integration',
  ];

  const technologyOptions = [
    'AI & Machine Learning',
    'Low-Code/No-Code Platforms',
    'Cloud Automation',
    'RPA Tools',
    'API Integration',
    'Custom Development',
  ];

  const handleBusinessNeedToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      businessNeeds: prev.businessNeeds.includes(need)
        ? prev.businessNeeds.filter((n) => n !== need)
        : [...prev.businessNeeds, need],
    }));
  };

  const handleTechnologyToggle = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const handleSubmit = (e: React.FormEvent, type: 'expert' | 'proposal') => {
    e.preventDefault();
    setInquiryType(type);

    if (!formData.name || !formData.email) {
      return;
    }

    const submissionData = {
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      phone: formData.phone || '',
      industry: formData.industry || '',
      businessNeeds: formData.businessNeeds.join(', '),
      technologies: formData.technologies.join(', '),
      message: formData.message || '',
      inquiryType: type,
    };

    mutate(submissionData, {
      onSuccess: () => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          businessNeeds: [],
          technologies: [],
          message: '',
        });
      },
    });
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-primary-soft">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
          </div>

          <div className="container-padding relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </motion.div>
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Thank You!
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-primary">
              Request Submitted!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Thank you for contacting AutomataX. Our {inquiryType === 'expert' ? 'experts' : 'team'} will review your needs and contact you within 24 hours.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20"
            >
              Submit Another Request
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section - With Typing Effect */}
      <section className="py-20 bg-muted/40">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        </div>

        <div className="container-padding relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary">
            Let's Transform Your <br />
            <TextType
              text={[
                "Business Together",
                "Operations Today",
                "Future Now",
                "Workflows Fast"
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Connect with our automation experts to discuss your needs and explore how AutomataX
            can help you achieve your goals.
          </p>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            No spam, no pushy sales – just a 30‑minute clarity call to see if automation is a real fit.
          </p>
        </div>
      </section>

      {/* Contact Form - With Spotlight */}
      <section className="py-20 bg-muted/40">
        <div className="container-padding">
          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.08)">
                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      <TextType
                        text={["Contact Information", "Get In Touch", "Start Conversation"]}
                        as="span"
                        className="inline-block min-w-[320px]"
                        typingSpeed={90}
                        deletingSpeed={55}
                        pauseDuration={2400}
                        loop={true}
                        showCursor={true}
                        cursorCharacter="▎"
                        cursorClassName="text-accent"
                        startOnVisible={true}
                      />
                    </CardTitle>
                    <CardDescription className="text-foreground/70">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Jasson Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-border"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jasson@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-border"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Acme Corporation"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-foreground">Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                        <SelectTrigger id="industry" className="border-border">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground">Business Needs (select all that apply)</Label>
                      <div className="grid gap-3 md:grid-cols-2">
                        {businessNeedsOptions.map((need) => (
                          <div key={need} className="flex items-center space-x-2">
                            <Checkbox
                              id={`need-${need}`}
                              checked={formData.businessNeeds.includes(need)}
                              onCheckedChange={() => handleBusinessNeedToggle(need)}
                              className="border-border data-[state=checked]:bg-accent"
                            />
                            <Label htmlFor={`need-${need}`} className="cursor-pointer text-sm font-normal text-foreground">
                              {need}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground">Preferred Technologies (select all that apply)</Label>
                      <div className="grid gap-3 md:grid-cols-2">
                        {technologyOptions.map((tech) => (
                          <div key={tech} className="flex items-center space-x-2">
                            <Checkbox
                              id={`tech-${tech}`}
                              checked={formData.technologies.includes(tech)}
                              onCheckedChange={() => handleTechnologyToggle(tech)}
                              className="border-border data-[state=checked]:bg-accent"
                            />
                            <Label htmlFor={`tech-${tech}`} className="cursor-pointer text-sm font-normal text-foreground">
                              {tech}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your automation needs and goals..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-border"
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row pt-4">
                      <Button
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
                        onClick={(e) => handleSubmit(e, 'expert')}
                        disabled={isPending || !formData.name || !formData.email}
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Talk to Our Experts
                          </>
                        )}
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="flex-1 border-primary/20 hover:bg-primary/5"
                        onClick={(e) => handleSubmit(e, 'proposal')}
                        disabled={isPending || !formData.name || !formData.email}
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Request a Proposal'
                        )}
                      </Button>
                    </div>

                    <div className="mt-6 border-t border-border/50 pt-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
                        How we typically work
                      </p>
                      <div className="grid gap-3 md:grid-cols-3 text-left md:text-center">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">1. Discovery</span> – 30-minute call to map your processes and goals.
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">2. Prototype</span> – quick proof-of-concept in days, not months.
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">3. Launch</span> – production-ready build, training, and ongoing support.
                        </div>
                      </div>
                    </div>
                    </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)">
                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <a
                          href="mailto:sales@automataxpro.site"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          sales@automataxpro.site
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">Phone</div>
                        <a
                          href="tel:+919211457736"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91 92114 57736
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">Office</div>
                        <p className="text-sm text-muted-foreground">
                          New Delhi
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)">
                <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-foreground">Quick Response Guarantee</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We respond to all inquiries within 24 hours during business days. For urgent
                      matters, please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)">
                <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-foreground">Data Security</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your information is protected with enterprise-grade encryption. We never share your data with third parties.
                    </p>
                  </CardContent>
                </Card>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.1)">
                <Card className="border-2 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold text-foreground">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium text-foreground">10:00 AM - 2:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium text-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
