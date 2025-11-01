import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Phone, Shield, Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Helpline = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const emergencyContacts = [
    { name: "Emergency Services", number: "911", icon: AlertCircle, color: "bg-destructive" },
    { name: "Police", number: "100", icon: Shield, color: "bg-primary" },
    { name: "Ambulance", number: "102", icon: Heart, color: "bg-accent" },
  ];

  const handleEmergencyCall = (service: string, number: string) => {
    toast({
      title: `Calling ${service}`,
      description: `Dialing ${number}...`,
      variant: "destructive",
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
              🆘 HelpLine & Safety Center
            </h1>
            <p className="text-muted-foreground">Quick access to emergency services and support</p>
          </div>

          <Card className="border-destructive/50 bg-destructive/10 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="w-5 h-5" />
                Emergency Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">In case of emergency, use the buttons below for immediate assistance</p>
              <Button variant="destructive" size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                CALL EMERGENCY NOW
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {emergencyContacts.map((contact, i) => (
              <Card key={i} className="border-border/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <div className={`w-10 h-10 rounded-full ${contact.color} flex items-center justify-center`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    {contact.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-3">{contact.number}</div>
                  <Button
                    onClick={() => handleEmergencyCall(contact.name, contact.number)}
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Safety Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Always keep emergency numbers saved in your phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Share your location with trusted contacts when traveling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Trust your instincts and report suspicious activity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Helpline;
