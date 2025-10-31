import { Home, Dumbbell, BookOpen, Leaf, Gamepad2, Users } from "lucide-react";
import { ModuleCard } from "@/components/ModuleCard";
import { BujjiSection } from "@/components/BujjiSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Index = () => {
  const modules = [
    {
      title: "LifeVerse",
      description: "Your intelligent smart living hub—manage daily tasks, track habits, and optimize your lifestyle with AI-powered insights.",
      icon: Home,
      gradient: "bg-gradient-cosmic",
    },
    {
      title: "FitBuddy",
      description: "Personal fitness & diet companion—custom workout plans, nutrition tracking, and real-time health monitoring.",
      icon: Dumbbell,
      gradient: "bg-gradient-to-br from-primary to-accent",
    },
    {
      title: "EduLink",
      description: "Smart learning center—interactive courses, AI tutoring, personalized study plans, and knowledge assessments.",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-secondary to-primary",
    },
    {
      title: "EcoTrack",
      description: "Environmental awareness dashboard—monitor air quality, carbon footprint, sustainability tips, and green living.",
      icon: Leaf,
      gradient: "bg-gradient-to-br from-accent to-secondary",
    },
    {
      title: "Games World",
      description: "Fun meets skill development—educational games, brain teasers, multiplayer challenges, and achievement tracking.",
      icon: Gamepad2,
      gradient: "bg-gradient-cosmic",
    },
    {
      title: "Community Hub",
      description: "Support & safety center—24/7 helpline, community forums, expert guidance, and emergency assistance.",
      icon: Users,
      gradient: "bg-gradient-aurora",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-aurora bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            UniVerse
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 font-light animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            One World. One Platform. Smarter Living for Everyone.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            The ultimate AI-powered ecosystem combining education, fitness, environment, 
            and entertainment—all in one seamless experience.
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
            <Button size="lg" className="bg-gradient-cosmic hover:shadow-glow-primary transition-all duration-300 text-lg px-8">
              Explore UniVerse
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl font-bold text-foreground">
              Powerful Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six interconnected platforms designed to enhance every aspect of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ModuleCard {...module} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bujji Section */}
      <BujjiSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl shadow-glow-primary">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users already living smarter with UniVerse
            </p>
            <Button size="lg" className="bg-gradient-cosmic hover:shadow-glow-primary transition-all duration-300 text-lg px-12">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">
            UniVerse © 2025 · One World. One Platform. Smarter Living for Everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
