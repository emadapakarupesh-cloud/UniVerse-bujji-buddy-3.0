import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const ModuleCard = ({ title, description, icon: Icon, gradient }: ModuleCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary cursor-pointer">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`} />
      <div className="relative p-6 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-cosmic flex items-center justify-center shadow-glow-primary">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};
