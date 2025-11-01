import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Music, BookOpen, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const Culture = () => {
  const navigate = useNavigate();

  const culturalContent = [
    { title: "Classical Dance", category: "Performance Art", emoji: "💃" },
    { title: "Traditional Music", category: "Music", emoji: "🎵" },
    { title: "Ancient Stories", category: "Literature", emoji: "📖" },
    { title: "Handicrafts", category: "Visual Art", emoji: "🎨" },
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
              🎭 Art & Culture (Samskruti)
            </h1>
            <p className="text-muted-foreground">Explore Indian heritage and artistic traditions</p>
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-secondary" />
                Featured Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-aurora rounded-lg flex items-center justify-center text-4xl mb-3">
                🏛️
              </div>
              <p className="text-muted-foreground">Virtual tour of ancient Indian architecture and monuments</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {culturalContent.map((item, i) => (
              <Card key={i} className="border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-3xl">{item.emoji}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-3">{item.category}</div>
                  <Button variant="outline" className="w-full">Explore</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Cultural Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Discover ancient wisdom and timeless tales from Indian culture</p>
              <Button className="w-full">
                <Music className="w-4 h-4 mr-2" />
                Listen to Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Culture;
