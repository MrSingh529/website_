import CardNav from './CardNav';

export function AutomataXNav() {
  const navItems = [
    {
      label: "Solutions",
      bgColor: "#1e40af", // Deep blue
      textColor: "#fff",
      links: [
        { label: "Services", ariaLabel: "Our Services", href: "/services" },
        { label: "Use Cases", ariaLabel: "Use Cases", href: "/use-cases" },
        { label: "Technology Stack", ariaLabel: "Technology Stack", href: "/technology" }
      ]
    },
    {
      label: "Success Stories", 
      bgColor: "#2563eb", // Medium blue
      textColor: "#fff",
      links: [
        { label: "Case Studies", ariaLabel: "Client Case Studies", href: "/case-studies" },
        { label: "Benefits & ROI", ariaLabel: "Benefits & ROI", href: "/benefits-roi" },
        { label: "Why Choose Us", ariaLabel: "Why Choose AutomataX", href: "/why-us" }
      ]
    },
    {
      label: "Get Started",
      bgColor: "#3b82f6", // Bright blue (accent)
      textColor: "#fff",
      links: [
        { label: "Contact Us", ariaLabel: "Contact AutomataX", href: "/contact" },
        { label: "Talk to Experts", ariaLabel: "Schedule Consultation", href: "/contact#consultation" },
        { label: "Request Demo", ariaLabel: "Request a Demo", href: "/contact#demo" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/logo.png"
      logoAlt="AutomataX - Advanced Automation"
      items={navItems}
      baseColor="#ffffff"
      menuColor="#1e293b"
      buttonBgColor="#3b82f6"
      buttonTextColor="#ffffff"
      ease="power3.out"
      ctaLabel="Get Started"
      onCtaClick={() => window.location.href = '/contact'}
    />
  );
}
