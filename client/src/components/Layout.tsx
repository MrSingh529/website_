import React from "react";
import { AutomataXNav } from "./AutomataXNav";
import { Shield } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <AutomataXNav />

      <main className="flex-1 pt-28">
        {children}
      </main>

      <footer className="border-t border-border/40 py-12 bg-muted/30 backdrop-blur-sm relative">
        <div className="container max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="AutomataX Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Advanced automation and digital transformation solutions that future-proof your business.
            </p>
            
            <div className="pt-2 flex flex-col gap-1">
              <p className="text-xs font-medium text-primary flex items-center gap-1.5">
                <Shield className="w-3 h-3" /> Data & Security First
              </p>
              <p className="text-xs text-muted-foreground">
                NDA-first engagement • Role-based access • Audit trails
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg tracking-tight text-primary">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </a>
              <a href="/use-cases" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Use Cases
              </a>
              <a href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Case Studies
              </a>
              <a href="/technology" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Technology
              </a>
              <a href="/why-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Why Us
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg tracking-tight text-primary">
              Get in Touch
            </h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>New Delhi, India</p>
              <p>sales@automataxpro.site</p>
              <p>+91 92114 57736</p>
            </div>
            
            <div className="pt-4 flex flex-col gap-4">
              <a href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto">
                  Contact Us
                </button>
              </a>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a 
                  href="https://www.linkedin.com/company/automataxpro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AutomataX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://www.linkedin.com/company/automataxpro/">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}