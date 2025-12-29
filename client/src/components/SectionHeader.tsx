import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-500 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
