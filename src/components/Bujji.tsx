import { useState } from "react";
import { Mic, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Bujji = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    toast({
      title: isListening ? "Stopped listening" : "Listening...",
      description: isListening ? "Voice input disabled" : "Speak now!",
    });
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    toast({
      title: "Bujji says:",
      description: "I'm processing your request...",
    });
    setMessage("");
  };

  return (
    <>
      {/* Floating Bujji Orb */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full bg-gradient-cosmic shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 flex items-center justify-center ${
            isListening ? "animate-pulse" : ""
          }`}
        >
          <Mic className="w-8 h-8 text-primary-foreground" />
        </button>
      </div>

      {/* Bujji Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 h-96 bg-card border border-border/30 rounded-lg shadow-glow-primary backdrop-blur-lg z-50 flex flex-col">
          <div className="p-4 border-b border-border/30 flex items-center justify-between">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Bujji AI Assistant
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-muted/30 rounded-lg p-3 text-sm">
                <p className="text-muted-foreground">Hello! I'm Bujji. How can I help you today?</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border/30">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleVoiceInput}
                className={isListening ? "bg-accent" : ""}
              >
                <Mic className={`w-4 h-4 ${isListening ? "text-accent-foreground" : ""}`} />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bujji;
