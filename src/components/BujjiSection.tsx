import { Mic, Brain, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BujjiSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-cosmic shadow-glow-primary animate-pulse">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-aurora bg-clip-text text-transparent">
              Meet Bujji
            </h2>
            <p className="text-xl text-muted-foreground">
              Your Always-Active AI Assistant
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Bujji is the intelligent brain of UniVerse—a voice-controlled AI assistant that works 
            even on screen lock. Control all modules, get instant answers, and experience 
            true hands-free convenience with complete data privacy.
          </p>

          <div className="grid md:grid-cols-4 gap-6 pt-8">
            {[
              { icon: Mic, title: "Voice Control", desc: "Always listening, always ready" },
              { icon: Brain, title: "AI Powered", desc: "Smart natural language processing" },
              { icon: Shield, title: "Privacy First", desc: "Your data stays secure" },
              { icon: Zap, title: "Instant Action", desc: "Execute commands instantly" },
            ].map((feature, i) => (
              <div key={i} className="space-y-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30">
                <feature.icon className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-cosmic hover:shadow-glow-primary transition-all duration-300 mt-8">
            Try Bujji Now
          </Button>
        </div>
      </div>
    </section>
  );
};
