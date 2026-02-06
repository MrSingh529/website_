import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.12)">
        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-primary/5 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
}
