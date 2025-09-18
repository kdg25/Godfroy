import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    "Développeur Full Stack",
    "Expert React & Node.js", 
    "Architecte Logiciel",
    "Créateur d'Applications Web"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex % roles.length];
    
    if (displayedText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-primary p-1 glow">
              <img
                src={profilePhoto}
                alt="Photo de profil - Godfroy, Développeur Full Stack"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Salut, je suis{" "}
            <span className="text-gradient">Godfroy</span>
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionné par le développement web moderne, je crée des applications
            performantes et élégantes avec React, Node.js et les dernières technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:glow transition-smooth">
              <Github className="w-5 h-5 mr-2" />
              Voir mes projets
            </Button>
            
            <Button variant="outline" size="lg" className="glass hover:glow-secondary transition-smooth">
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </Button>
            
            <Button variant="ghost" size="lg" className="hover:text-accent transition-smooth">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;