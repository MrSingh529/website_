import { Zap, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Automata<span className="text-primary">X</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Transforming enterprise workflows with intelligent automation and scalable architecture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/about"><span className="cursor-pointer hover:text-primary transition-colors">About Us</span></Link></li>
              <li><Link href="/careers"><span className="cursor-pointer hover:text-primary transition-colors">Careers</span></Link></li>
              <li><Link href="/contact"><span className="cursor-pointer hover:text-primary transition-colors">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">Workflow Automation</span></Link></li>
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">Data Integration</span></Link></li>
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">Consulting</span></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} AutomataX Inc. All rights reserved.</p>
          <p>Designed for Enterprise Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
