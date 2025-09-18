import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et dashboard administrateur. Interface moderne et responsive avec plus de 10,000 utilisateurs actifs.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "Full-Stack",
      date: "2024",
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec fonctionnalités temps réel, notifications push et intégrations tierces.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind"],
      category: "Frontend",
      date: "2024",
      githubUrl: "https://github.com/username/taskapp",
      liveUrl: "https://taskapp-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard d'analytics en temps réel avec visualisations interactives et exports de données pour les entreprises.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
      category: "Full-Stack",
      date: "2023",
      githubUrl: "https://github.com/username/analytics",
      liveUrl: "https://analytics-demo.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Application mobile de banking avec authentification biométrique, virements instantanés et gestion de budget.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Express", "MongoDB", "JWT"],
      category: "Mobile",
      date: "2023",
      githubUrl: "https://github.com/username/banking",
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "Générateur de contenu IA avec templates personnalisables, export multiple formats et intégration CMS.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "FastAPI", "OpenAI"],
      category: "AI/ML",
      date: "2024",
      githubUrl: "https://github.com/username/ai-content",
      liveUrl: "https://ai-content-demo.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Plateforme immobilière avec recherche avancée, visites virtuelles 360° et système de réservation intégré.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
      category: "Full-Stack",
      date: "2023",
      githubUrl: "https://github.com/username/realestate",
      liveUrl: "https://realestate-demo.vercel.app",
      featured: false,
    },
  ];

  const categories = ["Tous", "Full-Stack", "Frontend", "Mobile", "AI/ML"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, des applications web 
            aux solutions mobiles, en passant par l'intelligence artificielle.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Projets Phares</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass overflow-hidden hover:glow transition-smooth animate-fade-in group"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary-muted">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" asChild className="hover:glow-secondary transition-smooth">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="bg-gradient-primary hover:glow transition-smooth" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-smooth ${
                activeCategory === category 
                  ? "bg-gradient-primary glow" 
                  : "glass hover:glow-secondary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass overflow-hidden hover:glow transition-smooth animate-fade-in group"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-primary-muted text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 hover:glow-secondary transition-smooth">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="bg-gradient-primary hover:glow transition-smooth flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;