import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  background?: "white" | "gray" | "dark";
}

export function Section({ className, children, id, background = "white" }: SectionProps) {
  const bgColors = {
    white: "bg-background",
    gray: "bg-secondary/30",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8",
        bgColors[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  className?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", centered && "text-center", className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
