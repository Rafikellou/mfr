# MFR Next.js CMS

Un système de gestion de contenu (CMS) intégré pour le site MFR avec authentification Supabase et déploiement automatique.

## 🚀 Fonctionnalités

- **Authentification sécurisée** avec Supabase
- **Interface CMS intuitive** pour modifier les contenus
- **Gestion des sections** (affichage/masquage)
- **Modification des textes** en temps réel
- **Déploiement automatique** via GitHub Actions
- **Sécurité avancée** avec Row Level Security (RLS)

## 📁 Structure du projet

```
src/
├── app/
│   ├── admin/           # Interface CMS (/admin)
│   ├── layout.tsx       # Layout principal avec providers
│   └── page.tsx         # Page d'accueil
├── components/          # Composants React
├── contexts/            # Contextes React (Auth, Content)
└── lib/
    └── supabase.ts      # Configuration Supabase
```

## 🛠️ Installation et configuration

### 1. Prérequis

- Node.js 18+
- Compte Supabase
- Compte GitHub
- Compte Vercel (optionnel)

### 2. Installation

```bash
# Cloner le projet
git clone <your-repo-url>
cd mfr-nextjs

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp env.example .env.local
```

### 3. Configuration Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Exécutez le script SQL dans `database-schema.sql`
3. Configurez l'authentification par email
4. Récupérez vos clés API

### 4. Variables d'environnement

Remplissez le fichier `.env.local` :

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_EMAIL=admin@yourdomain.com
```

## 🎯 Utilisation

### Développement local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Accès au CMS

1. Allez sur `http://localhost:3000/admin`
2. Connectez-vous avec l'email configuré dans `ADMIN_EMAIL`
3. Modifiez les contenus et sections

### Déploiement

1. **Configuration GitHub Secrets** :
   - Ajoutez toutes les variables d'environnement dans les secrets GitHub
   - Ajoutez les tokens Vercel si vous utilisez Vercel

2. **Push vers main** :
   ```bash
   git add .
   git commit -m "Deploy CMS"
   git push origin main
   ```

3. **Vérification** :
   - GitHub Actions déploiera automatiquement
   - Vérifiez les logs dans l'onglet Actions

## 🔧 Fonctionnalités du CMS

### Gestion des sections

- **Affichage/Masquage** : Bouton œil pour chaque section
- **Modification des textes** : Titre, sous-titre, description
- **Contenus dynamiques** : Champs personnalisés par section

### Interface utilisateur

- **Design responsive** : Fonctionne sur mobile et desktop
- **Sauvegarde automatique** : Les modifications sont sauvegardées instantanément
- **Feedback visuel** : Indicateurs de statut et messages d'erreur

## 🔒 Sécurité

- **Authentification** : Seuls les utilisateurs autorisés peuvent accéder
- **RLS** : Row Level Security protège les données
- **Secrets** : Clés sensibles stockées dans GitHub Secrets
- **Validation** : Validation côté client et serveur

## 📚 Documentation

- `DEPLOYMENT.md` : Guide de déploiement détaillé
- `database-schema.sql` : Schéma de base de données
- `env.example` : Exemple de configuration

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour toute question ou problème :

1. Vérifiez la documentation dans `DEPLOYMENT.md`
2. Consultez les logs GitHub Actions
3. Vérifiez la configuration Supabase
4. Ouvrez une issue sur GitHub
