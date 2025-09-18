import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:contact@developer.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">
              Dev.Portfolio
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur full-stack passionné, créateur d'expériences web 
              exceptionnelles et solutions innovantes.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary hover:glow-secondary transition-smooth"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Développement Web</li>
              <li>Applications React</li>
              <li>API & Backend</li>
              <li>Consulting Technique</li>
              <li>Formation & Mentorat</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 kdggod25@gmail.com</p>
              <p>📱 +7 911 848 86 33</p>
              <p>📍 Saint-Pétersbourg, Russie</p>
              <p className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Disponible pour projets
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Godfroy. Fait avec{" "}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />{" "}
              à Saint-Pétersbourg.
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Politique de confidentialité</span>
              <span>•</span>
              <span>Mentions légales</span>
              <span>•</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:text-primary transition-smooth"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Retour en haut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;