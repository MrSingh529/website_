import { Zap, Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Automata<span className="text-primary">X</span>
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              A consulting-led automation firm helping teams simplify operations,
              improve reliability, and scale without unnecessary complexity.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/automataxpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/about">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Workflow Automation</li>
              <li>Data & Reporting Automation</li>
              <li>AI-Assisted Systems</li>
              <li>Compliance & Governance</li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Trust & Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Data handled confidentially</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AutomataX. All rights reserved.</p>
          <p>Quietly building reliable automation.</p>
        </div>
      </div>
    </footer>
  );
}
