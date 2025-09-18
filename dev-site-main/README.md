# Portfolio Développeur Full Stack

Un site web personnel complet pour développeur logiciel, créé avec les technologies modernes et une architecture évolutive.

## 🚀 Fonctionnalités

### ✅ Implémentées
- **Page d'accueil** : Hero section avec animation de texte dynamique
- **Section À propos** : Parcours, compétences avec barres de progression animées
- **Portfolio** : Projets avec filtres par catégorie, liens GitHub/Demo
- **Blog technique** : Articles avec système de tags et catégories
- **Contact** : Formulaire fonctionnel avec validation
- **Design responsive** : Optimisé mobile et desktop
- **Navigation fluide** : Menu sticky avec indicateur de scroll
- **SEO optimisé** : Meta tags, structured data, performance

### 🔄 À développer (prochaines étapes)
- **Backend Supabase** : Base de données pour projets et articles
- **Interface admin** : CRUD pour gérer le contenu
- **Authentification** : Système de login sécurisé
- **Emailing** : Intégration EmailJS pour le formulaire
- **Analytics** : Suivi des performances et visiteurs
- **Blog CMS** : Éditeur WYSIWYG pour les articles

## 🛠️ Technologies

### Frontend
- **React 18** avec TypeScript
- **Tailwind CSS** + système de design personnalisé
- **Vite** pour le build ultra-rapide
- **Lucide React** pour les icônes
- **Framer Motion** pour les animations
- **React Router** pour la navigation

### Backend (à implémenter)
- **Supabase** : Base de données PostgreSQL + Auth
- **Edge Functions** : API serverless
- **Row Level Security** : Sécurité des données
- **Real-time subscriptions** : Mises à jour live

### Déploiement
- **Vercel** : Hébergement frontend optimisé
- **Supabase** : Backend managé
- **GitHub Actions** : CI/CD automatisé

## 🏗️ Architecture

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Composants shadcn/ui
│   ├── Hero.tsx         # Section d'accueil
│   ├── About.tsx        # À propos + compétences
│   ├── Portfolio.tsx    # Projets avec filtres
│   ├── Blog.tsx         # Articles techniques
│   ├── Contact.tsx      # Formulaire de contact
│   ├── Navigation.tsx   # Menu de navigation
│   └── Footer.tsx       # Pied de page
├── pages/               # Pages principales
│   ├── Index.tsx        # Page d'accueil complète
│   └── NotFound.tsx     # Page 404
├── hooks/               # Hooks personnalisés
├── lib/                 # Utilitaires
├── assets/              # Images et ressources
└── index.css            # Design system global
```

## 🎨 Design System

### Palette de couleurs
- **Primary** : Bleu électrique (#3b82f6)
- **Secondary** : Violet profond (#8b5cf6)
- **Accent** : Cyan vibrant (#06b6d4)
- **Background** : Sombre (#0f172a)

### Composants
- **Glass morphism** : Cartes transparentes avec blur
- **Gradients** : Transitions fluides entre couleurs
- **Animations** : Transitions CSS et keyframes personnalisées
- **Typography** : Hiérarchie claire et lisible

## 📱 Responsive Design

- **Mobile First** : Design optimisé pour tous les écrans
- **Breakpoints** : sm(640px), md(768px), lg(1024px), xl(1280px)
- **Touch Friendly** : Boutons et zones tactiles adaptées
- **Performance** : Lazy loading et optimisations images

## 🔧 Installation & Développement

### Prérequis
- Node.js 18+ et npm
- Git pour le versioning

### Démarrage rapide
```bash
# Cloner le projet
git clone <url-du-repo>
cd portfolio-developer

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

### Scripts disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Preview du build
npm run lint         # Linting du code
npm run type-check   # Vérification TypeScript
```

## 🚀 Déploiement

### Vercel (recommandé)
1. Connecter le repo GitHub à Vercel
2. Configurer les variables d'environnement
3. Déploiement automatique sur push

### Variables d'environnement
```env
# Supabase (à ajouter)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# EmailJS (à ajouter)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📈 Prochaines fonctionnalités

### Phase 2 : Backend & CMS
- [ ] Configuration Supabase
- [ ] Tables pour projets et articles
- [ ] Interface admin pour CRUD
- [ ] Authentification JWT
- [ ] Upload d'images
- [ ] Système de commentaires

### Phase 3 : Fonctionnalités avancées
- [ ] Newsletter avec Mailchimp
- [ ] Analytics détaillées
- [ ] Mode sombre/clair
- [ ] Recherche full-text
- [ ] Sitemap automatique
- [ ] PWA (Progressive Web App)

### Phase 4 : Optimisations
- [ ] SSR avec Next.js
- [ ] Optimisations Core Web Vitals
- [ ] CDN pour les assets
- [ ] Monitoring des erreurs
- [ ] Tests automatisés
- [ ] Documentation Storybook

## 🤝 Contribution

Ce projet sert de base pour un portfolio professionnel. Les contributions sont les bienvenues pour :

- Améliorer les performances
- Ajouter de nouvelles fonctionnalités
- Corriger des bugs
- Améliorer l'accessibilité
- Optimiser le SEO

## 📄 Licence

MIT - Libre d'utilisation et modification

---

**Créé avec ❤️ par Alexandre**  
*Développeur Full Stack passionné*

[Portfolio](https://alexandre-dev.vercel.app) • [GitHub](https://github.com/alexandre) • [LinkedIn](https://linkedin.com/in/alexandre)