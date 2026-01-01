import { Link, useLocation } from "wouter";
import { Button } from "./Button";
import { Menu, X, Cpu, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                Automata<span className="text-primary">X</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    location === link.href 
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                      : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button variant="default" size="sm" className="ml-4">
                  Book Consultation
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white border-b absolute w-full px-4 pt-2 pb-6 shadow-xl animate-accordion-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors",
                    location === link.href ? "bg-primary/10 text-primary font-semibold" : "text-slate-600 hover:bg-slate-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary p-2 rounded-lg">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Automata<span className="text-primary">X</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Transforming businesses through intelligent automation and workflow optimization. 
                Your partner in the digital revolution.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services" className="hover:text-primary transition-colors">Process Automation</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Internal Tools</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">No-Code Solutions</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Workflow Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link href="/how-it-works" className="hover:text-primary transition-colors">Our Process</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>123 Innovation Drive,<br />Tech Valley, CA 94043</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:hello@automatax.com" className="hover:text-white transition-colors">hello@automatax.com</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+15550123456" className="hover:text-white transition-colors">+1 (555) 012-3456</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} AutomataX Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
