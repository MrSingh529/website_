import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      <Navbar />
      
      {children}
      
      {/* FOOTER - Updated to use your logo.png */}
      <footer className="bg-primary py-12 text-white/80 border-t border-white/10">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/logo.png" 
                  alt="AutomataX Logo" 
                  className="h-12 w-auto invert brightness-0 saturate-0" 
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    // Fallback in case logo doesn't load
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'flex items-center gap-2';
                    fallback.innerHTML = `
                      <div class="bg-accent p-1.5 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                      </div>
                      <span class="text-2xl font-bold text-white">Automata<span class="text-accent">X</span></span>
                    `;
                    e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
                  }}
                />
              </div>
              <p className="max-w-sm text-white/60">
                Empowering enterprises with next-generation automation solutions. Scale faster, reduce costs, and innovate boldly.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="hover:text-accent transition-colors">Business Process Automation</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">RPA Solutions</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Workflow Consulting</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Custom Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/use-cases" className="hover:text-accent transition-colors">Use Cases</a></li>
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/benefits-roi" className="hover:text-accent transition-colors">Benefits & ROI</a></li>
                <li><a href="/technology" className="hover:text-accent transition-colors">Technology</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} AutomataX Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/automataxpro/" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}