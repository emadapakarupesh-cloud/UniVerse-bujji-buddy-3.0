import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Activity, Apple, Dumbbell, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Fitness = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [calories, setCalories] = useState(0);
  const [workouts, setWorkouts] = useState(0);

  const addMeal = () => {
    setCalories(calories + 500);
    toast({ title: "Meal added", description: "500 calories logged" });
  };

  const addWorkout = () => {
    setWorkouts(workouts + 1);
    toast({ title: "Workout logged", description: "Great job!" });
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
              💪 FitBuddy+
            </h1>
            <p className="text-muted-foreground">Track your fitness journey and stay healthy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5 text-accent" />
                  Daily Calories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">{calories} kcal</div>
                <Button onClick={addMeal} className="w-full">Log Meal</Button>
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-secondary" />
                  Workouts Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary mb-4">{workouts}</div>
                <Button onClick={addWorkout} variant="secondary" className="w-full">Log Workout</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Quick Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Meal Name</Label>
                <Input placeholder="e.g., Breakfast" />
              </div>
              <div>
                <Label>Workout Type</Label>
                <Input placeholder="e.g., Running" />
              </div>
              <Button className="w-full">Save Entry</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Fitness;
