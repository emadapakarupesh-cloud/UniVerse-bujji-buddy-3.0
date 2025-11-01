import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BookOpen, Leaf, Gamepad2, AlertCircle, Palette, MessageCircle, Settings, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/auth");
  };

  const modules = [
    { title: "FitBuddy+", icon: Activity, path: "/fitness", color: "bg-gradient-cosmic" },
    { title: "EduLink+", icon: BookOpen, path: "/learning", color: "bg-gradient-stellar" },
    { title: "EcoTrack+", icon: Leaf, path: "/environment", color: "bg-gradient-aurora" },
    { title: "GameVerse", icon: Gamepad2, path: "/games", color: "bg-gradient-cosmic" },
    { title: "HelpLine", icon: AlertCircle, path: "/helpline", color: "bg-gradient-stellar" },
    { title: "Art & Culture", icon: Palette, path: "/culture", color: "bg-gradient-aurora" },
    { title: "Community", icon: MessageCircle, path: "/community", color: "bg-gradient-cosmic" },
    { title: "Settings", icon: Settings, path: "/settings", color: "bg-gradient-stellar" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-stellar p-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-aurora bg-clip-text text-transparent mb-2">
                Dashboard
              </h1>
              <p className="text-muted-foreground">Welcome to your UniVerse control center</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, i) => (
              <Card
                key={i}
                className="group cursor-pointer hover:shadow-glow-primary transition-all duration-300 border-border/30 bg-card/80 backdrop-blur-sm"
                onClick={() => navigate(module.path)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Click to explore</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
