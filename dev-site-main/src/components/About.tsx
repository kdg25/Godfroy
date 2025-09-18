import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      color: "primary",
      technologies: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      category: "Backend", 
      icon: Server,
      color: "secondary",
      technologies: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 80 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      color: "accent",
      technologies: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "Redis", level: 70 },
        { name: "Supabase", level: 88 },
      ],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "primary",
      technologies: [
        { name: "React Native", level: 78 },
        { name: "Expo", level: 80 },
        { name: "Flutter", level: 65 },
      ],
    },
    {
      category: "DevOps",
      icon: Code,
      color: "secondary",
      technologies: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "GitHub Actions", level: 80 },
      ],
    },
    {
      category: "Design",
      icon: Palette,
      color: "accent",
      technologies: [
        { name: "Figma", level: 82 },
        { name: "Adobe XD", level: 75 },
        { name: "UI/UX Design", level: 80 },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "MongoDB Certified Developer",
    "Google Analytics Certified",
    "Scrum Master Certified"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec plus de 5 ans d'expérience dans la création 
            d'applications web modernes. J'aime transformer des idées complexes en 
            solutions élégantes et fonctionnelles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Mon parcours</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Diplômé en informatique, j'ai débuté ma carrière en développement web 
                en me spécialisant dans l'écosystème JavaScript. Ma passion pour 
                l'innovation m'a poussé à explorer constamment de nouvelles technologies.
              </p>
              <p>
                J'ai eu l'opportunité de travailler sur des projets variés, depuis 
                des applications e-commerce jusqu'aux plateformes SaaS complexes, 
                me permettant d'acquérir une expertise complète en développement full-stack.
              </p>
              <p>
                Aujourd'hui, je me concentre sur la création d'expériences utilisateur 
                exceptionnelles tout en maintenant une architecture technique robuste 
                et scalable.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="bg-primary-muted">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Projets livrés</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <Card key={skillCategory.category} className="glass hover:glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-${skillCategory.color}-muted mr-3`}>
                    <skillCategory.icon className={`w-6 h-6 text-${skillCategory.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{skillCategory.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {skillCategory.technologies.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;