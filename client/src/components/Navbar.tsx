import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <div
            className={`cursor-pointer transition-colors hover:text-primary font-medium ${
              location === link.href ? "text-primary" : "text-slate-600"
            } ${mobile ? "text-lg py-2" : "text-sm"}`}
            onClick={() => mobile && setIsOpen(false)}
          >
            {link.label}
          </div>
        </Link>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Automata<span className="text-primary">X</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-slate-600" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks mobile />
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full">Book Consultation</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
