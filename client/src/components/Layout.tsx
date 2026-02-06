import React from "react";
import { AutomataXNav } from "./AutomataXNav";
import LiquidEther from "./LiquidEther";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Liquid Ether Background - Completely separate, outside main flow */}
      <LiquidEther
        colors={["#3B82F6", "#6366F1", "#8B5CF6"]}
        mouseForce={15}
        cursorSize={120}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={1.8}
        resolution={0.6}
      />

      {/* Main Content Container */}
      <div className="min-h-screen flex flex-col relative">
        <AutomataXNav />

        <main className="flex-1 pt-28">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 py-12 bg-muted/30 backdrop-blur-sm relative z-10">
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
              <div className="pt-4">
                <a href="/contact">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} AutomataX. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a
                  href="https://www.linkedin.com/company/automataxpro/"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
