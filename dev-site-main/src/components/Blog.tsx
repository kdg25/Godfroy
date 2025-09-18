import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les nouveautés React 18 : Concurrent Features et Suspense",
      excerpt: "Découvrez les nouvelles fonctionnalités de React 18, notamment les Concurrent Features, le nouveau Suspense et comment ils améliorent les performances de vos applications.",
      content: "React 18 apporte de nombreuses améliorations...",
      author: "Alexandre",
      date: "2024-03-15",
      readTime: "8 min",
      category: "React",
      tags: ["React", "JavaScript", "Performance"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Optimiser les performances avec Next.js 14",
      excerpt: "Guide complet pour optimiser les performances de vos applications Next.js avec les dernières fonctionnalités et bonnes pratiques.",
      content: "Next.js 14 introduit de nouvelles optimisations...",
      author: "Alexandre", 
      date: "2024-03-10",
      readTime: "12 min",
      category: "Next.js",
      tags: ["Next.js", "Performance", "SEO"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 3,
      title: "TypeScript : Patterns avancés pour React",
      excerpt: "Explorez les patterns TypeScript avancés pour écrire du code React plus robuste et maintenable.",
      content: "TypeScript offre des outils puissants...",
      author: "Alexandre",
      date: "2024-03-05", 
      readTime: "10 min",
      category: "TypeScript",
      tags: ["TypeScript", "React", "Patterns"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Supabase vs Firebase : Comparatif 2024",
      excerpt: "Analyse détaillée des deux principales solutions BaaS pour choisir celle qui convient le mieux à votre projet.",
      content: "Supabase et Firebase sont deux solutions...",
      author: "Alexandre",
      date: "2024-02-28",
      readTime: "15 min", 
      category: "Backend",
      tags: ["Supabase", "Firebase", "BaaS"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Tailwind CSS : Techniques avancées",
      excerpt: "Maîtrisez Tailwind CSS avec des techniques avancées pour créer des designs complexes et maintenables.",
      content: "Tailwind CSS est devenu incontournable...",
      author: "Alexandre",
      date: "2024-02-20",
      readTime: "6 min",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Design"],
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = ["Tous", "React", "Next.js", "TypeScript", "Backend", "CSS"];
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.slice(0, 6);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Blog <span className="text-gradient">Technique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Partage de connaissances, tutoriels et réflexions sur le développement web moderne.
            Restez à jour avec les dernières technologies et bonnes pratiques.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Articles à la une</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id}
                className="glass overflow-hidden hover:glow transition-smooth animate-fade-in group cursor-pointer"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-muted">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:text-primary">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
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
              variant="outline"
              className="glass hover:glow-secondary transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="glass overflow-hidden hover:glow transition-smooth animate-fade-in group cursor-pointer"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary-muted text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass hover:glow-secondary transition-smooth">
            Voir plus d'articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;