import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Wind, Droplets, Sun, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const Environment = () => {
  const navigate = useNavigate();

  const ecoData = [
    { label: "Air Quality", value: "Good", icon: Wind, color: "text-accent" },
    { label: "Water Conservation", value: "85%", icon: Droplets, color: "text-primary" },
    { label: "Solar Energy", value: "Active", icon: Sun, color: "text-secondary" },
  ];

  const ecoTips = [
    "Use reusable bags instead of plastic",
    "Turn off lights when not in use",
    "Plant a tree today",
    "Conserve water while brushing teeth",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-stellar p-8">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-aurora bg-clip-text text-transparent mb-2">
              🌱 EcoTrack+
            </h1>
            <p className="text-muted-foreground">Monitor and improve environmental impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {ecoData.map((item, i) => (
              <Card key={i} className="border-border/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                Eco Tips for Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {ecoTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Environment;
