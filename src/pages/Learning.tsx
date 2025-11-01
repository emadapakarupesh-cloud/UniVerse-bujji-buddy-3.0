import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Trophy, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Learning = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [score, setScore] = useState(0);

  const courses = [
    { title: "Mathematics", progress: 65, lessons: 12 },
    { title: "Science", progress: 40, lessons: 8 },
    { title: "History", progress: 80, lessons: 15 },
  ];

  const handleQuiz = () => {
    const newScore = Math.floor(Math.random() * 100);
    setScore(newScore);
    toast({
      title: "Quiz completed!",
      description: `You scored ${newScore}%`,
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
              🎓 EduLink+
            </h1>
            <p className="text-muted-foreground">Smart learning tailored for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {courses.map((course, i) => (
              <Card key={i} className="border-border/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-sm text-muted-foreground">{course.lessons} lessons</div>
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="text-sm font-semibold text-primary">{course.progress}% complete</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                AI Quiz Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Test your knowledge with AI-generated questions</p>
              {score > 0 && (
                <div className="mb-4 p-4 bg-accent/10 rounded-lg flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span className="text-lg font-semibold">Latest Score: {score}%</span>
                </div>
              )}
              <Button onClick={handleQuiz} className="w-full">Start Quiz</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Learning;
