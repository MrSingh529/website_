import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="About AutomataX"
          title="Built by Practitioners, Not Pitch Decks"
          description="A consulting-led automation firm focused on solving real operational problems."
        />

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg prose-slate mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
          >
            <p className="lead text-xl text-slate-600">
              AutomataX was created from hands-on experience inside operating businesses —
              not from theory, templates, or generic automation tools.
            </p>

            <p>
              We’ve seen how organizations struggle with the same problems at different scales:
              manual reporting, fragmented data, repetitive compliance work, and ad-hoc processes
              held together by spreadsheets and follow-ups.
            </p>

            <p>
              These aren’t technology problems. They’re <strong>workflow design problems</strong>.
              And solving them requires understanding how information actually moves through
              a business — not just plugging in another tool.
            </p>

            <p>
              Our work spans internal enterprise automation, compliance systems, analytics pipelines,
              and AI-assisted workflows used in real production environments. Every system we build
              is designed to be <strong>understandable, maintainable, and auditable</strong> — not a
              black box that breaks the moment requirements change.
            </p>

            <h3 className="text-slate-900 font-bold mt-10 mb-4">
              How We Think About Automation
            </h3>

            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">01.</span>
                <span>
                  <strong>Operations First:</strong> We start with how work actually happens on the
                  ground — not how tools claim it should happen.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">02.</span>
                <span>
                  <strong>Reliability Over Demos:</strong> An automation that fails once a week causes
                  more damage than no automation at all. Stability is non-negotiable.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">03.</span>
                <span>
                  <strong>Transparency by Design:</strong> Logs, validations, access controls, and
                  clear handover are part of the solution — not afterthoughts.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">04.</span>
                <span>
                  <strong>Humans Stay in Control:</strong> Automation should reduce cognitive load,
                  not create new dependencies. People always remain in charge.
                </span>
              </li>
            </ul>

            <p className="mt-10">
              We work quietly, methodically, and with long-term ownership in mind.
              Our goal is not to sell automation — it’s to make operations simpler,
              clearer, and easier to scale.
            </p>

            {/* ---------- Founder Note (Anonymous) ---------- */}
            <div className="mt-14 border-t border-slate-200 pt-8">
              <h3 className="text-slate-900 font-bold mb-4">
                A Note from the Builder
              </h3>
              <p className="text-slate-600">
                AutomataX exists because I’ve personally spent years inside teams where capable
                people were buried under manual processes, broken spreadsheets, and avoidable
                operational friction.
              </p>
              <p className="text-slate-600 mt-4">
                The goal here is simple: build automation that actually survives real usage —
                automation that people trust, understand, and don’t fear maintaining.
              </p>
              <p className="text-slate-600 mt-4">
                Every system delivered by AutomataX is something I’d be comfortable owning,
                supporting, and standing behind long after deployment.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 text-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Focused team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-10">
                <div className="text-white text-center max-w-xl px-4">
                  <h3 className="text-2xl font-bold mb-2">
                    Automation that earns trust
                  </h3>
                  <p className="opacity-90">
                    Designed for real teams, real data, and real operational pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
