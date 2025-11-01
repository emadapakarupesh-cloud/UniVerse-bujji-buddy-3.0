import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Trophy, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Games = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const games = [
    { title: "Memory Match", description: "Test your memory skills", difficulty: "Easy", icon: "🧠" },
    { title: "Math Quiz", description: "Sharpen your math abilities", difficulty: "Medium", icon: "🔢" },
    { title: "Word Puzzle", description: "Expand your vocabulary", difficulty: "Hard", icon: "📝" },
    { title: "Logic Challenge", description: "Solve complex problems", difficulty: "Expert", icon: "🧩" },
  ];

  const playGame = (gameName: string) => {
    toast({
      title: `Starting ${gameName}...`,
      description: "Get ready to play!",
    });
  };

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
              🧩 GameVerse
            </h1>
            <p className="text-muted-foreground">Fun and skill development games</p>
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-secondary" />
                Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Games Played</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">8</div>
                <div className="text-sm text-muted-foreground">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">450</div>
                <div className="text-sm text-muted-foreground">Points</div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game, i) => (
              <Card key={i} className="border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-3xl">{game.icon}</span>
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{game.difficulty}</span>
                    </div>
                    <Button onClick={() => playGame(game.title)}>
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Games;
