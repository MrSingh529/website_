import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const cases = [
  {
    client: "Global Market Research & Analytics Firm",
    title: "Automated Regional Market Research Report Generation",
    context:
      "The organization produces large, recurring regional market research reports across multiple geographies and segments. Manual PowerPoint creation was time-consuming, error-prone, and difficult to scale.",
    problem: [
      "1–1.5 days spent per report on manual PPT creation",
      "Inconsistent formatting and missing sections",
      "Manual chart creation and company profiling",
    ],
    solution: [
      "Built an end-to-end automated PowerPoint generation system",
      "Integrated AI content generation using multiple LLM providers with fallback logic",
      "Dynamic chart creation, multi-segment market analysis, and automated company profiling",
      "Authentication, licensing, logging, and GUI-based configuration",
    ],
    outcome: [
      "Reduced report generation time to ~20–30 minutes per report",
      "Eliminated manual formatting and data-entry errors",
      "Enabled recurring, production-grade usage across multiple report types",
    ],
    testimonials: [
      {
        quote:
          "The automation completely changed how we generate regional reports. What earlier took more than a day is now predictable, structured, and significantly faster, without compromising quality.",
        name: "Harpreet Singh",
        role: "Senior Team Lead",
        org: "IMARC",
      },
      {
        quote:
          "Consistency was our biggest challenge earlier. With automation in place, formatting, structure, and data accuracy are no longer concerns during report delivery.",
        name: "Nakul Gupta",
        role: "Team Member",
        org: "IMARC",
      },
    ],
  },
  {
    client: "Large Enterprise Operations Team (India)",
    title: "Automated Time-Tracking Compliance & Escalation System",
    context:
      "Weekly time-tracking compliance was enforced manually using downloaded reports, spreadsheet analysis, and individual emails — consuming hours of administrative effort.",
    problem: [
      "2–3 hours of manual effort every week",
      "Risk of missed employees or incorrect hour calculations",
      "Inconsistent communication and escalation tracking",
    ],
    solution: [
      "Automated login and data extraction from OpenProject",
      "Automated identification of employees below compliance thresholds",
      "Personalized, HTML-formatted email notifications with escalation logic",
      "GUI-based configuration, logging, and unattended scheduled execution",
    ],
    outcome: [
      "Reduced weekly compliance effort to under 5 minutes",
      "Removed human error from calculations and notifications",
      "Standardized, auditable enforcement with management visibility",
    ],
  },
  {
    client: "Industrial Automation Company (Sales Operations)",
    title: "Sales Visit Documentation & AI Insight Platform",
    context:
      "Sales teams relied on notebooks, emails, and manual Excel sheets to track visits, expenses, and follow-ups, resulting in delayed visibility and inconsistent data.",
    problem: [
      "High administrative overhead for sales teams",
      "Delayed manager visibility into pipeline and performance",
      "No structured insights or action tracking",
    ],
    solution: [
      "Built a mobile-first Progressive Web App for sales visit logging",
      "Structured data capture with role-based access for sales and managers",
      "AI-powered visit analysis and action item generation",
      "Real-time dashboards, expense tracking, and Excel exports",
    ],
    outcome: [
      "Reduced administrative effort by ~70%",
      "Enabled real-time managerial visibility into sales activity",
      "Improved follow-ups, coaching, and decision-making speed",
    ],
  },
  {
    client: "Accounting Department – Industrial Organization",
    title: "GST Reconciliation Automation (Zoho Books ↔ GSTR-2B)",
    context:
      "Monthly GST reconciliation was performed manually using complex Excel formulas, manual normalization, and ad-hoc judgment calls for mismatches.",
    problem: [
      "2–3 hours spent every month on reconciliation",
      "High risk of formatting and matching errors",
      "Inconsistent handling of tolerance and mismatches",
    ],
    solution: [
      "Built a zero-install, browser-based PWA for GST reconciliation",
      "Automated data normalization and configurable tolerance matching",
      "Generated six standardized reconciliation reports in one workbook",
      "Client-side processing to ensure data privacy",
    ],
    outcome: [
      "Reduced reconciliation time to under 2 seconds",
      "Eliminated manual Excel logic and formatting errors",
      "Improved compliance consistency and audit readiness",
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Case Studies"
          title="Real Automation, Real Operations"
          description="Representative automation initiatives delivered across internal enterprise teams and external client engagements. Client identities anonymized where required."
        />

        <div className="space-y-12 mt-16 max-w-5xl mx-auto">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border border-slate-100 shadow-sm">
                <CardHeader>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    {study.client}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {study.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    {study.context}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Challenges
                    </h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                      {study.problem.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      What We Built
                    </h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                      {study.solution.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Operational Impact
                    </h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                      {study.outcome.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>

                  {/* -------- TESTIMONIALS (IMARC ONLY) -------- */}
                  {study.testimonials && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        What the Team Said
                      </h4>
                      <div className="space-y-4">
                        {study.testimonials.map((t, i) => (
                          <div
                            key={i}
                            className="bg-slate-50 p-5 rounded-xl border border-slate-100"
                          >
                            <p className="text-slate-700 italic mb-3">
                              “{t.quote}”
                            </p>
                            <p className="text-sm font-semibold text-slate-900">
                              {t.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {t.role}, {t.org}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
