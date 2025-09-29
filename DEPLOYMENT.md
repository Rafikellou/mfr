# Guide de déploiement pour le CMS MFR

## Étapes de configuration

### 1. Configuration Supabase

1. **Créer un projet Supabase** :
   - Allez sur [supabase.com](https://supabase.com)
   - Créez un nouveau projet
   - Notez votre URL et vos clés API

2. **Exécuter le schéma de base de données** :
   - Ouvrez l'éditeur SQL dans Supabase
   - Copiez et exécutez le contenu du fichier `database-schema.sql`

3. **Configurer l'authentification** :
   - Allez dans Authentication > Settings
   - Activez l'authentification par email
   - Ajoutez vos URLs de redirection :
     - `http://localhost:3000` (développement)
     - `https://yourdomain.com` (production)

### 2. Configuration des variables d'environnement

1. **Créer le fichier .env.local** :
   ```bash
   cp env.example .env.local
   ```

2. **Remplir les valeurs** :
   - `NEXT_PUBLIC_SUPABASE_URL` : URL de votre projet Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` : Clé publique anonyme
   - `SUPABASE_SERVICE_ROLE_KEY` : Clé de service (gardez-la secrète)
   - `ADMIN_EMAIL` : Email de l'administrateur

### 3. Configuration GitHub

1. **Ajouter les secrets GitHub** :
   - Allez dans Settings > Secrets and variables > Actions
   - Ajoutez les secrets suivants :
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `ADMIN_EMAIL`
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

### 4. Configuration Vercel

1. **Créer un projet Vercel** :
   - Connectez votre repository GitHub
   - Configurez les variables d'environnement dans Vercel

2. **Obtenir les tokens Vercel** :
   - `VERCEL_TOKEN` : Token d'API Vercel
   - `VERCEL_ORG_ID` : ID de votre organisation
   - `VERCEL_PROJECT_ID` : ID de votre projet

### 5. Déploiement

1. **Push vers la branche main** :
   ```bash
   git add .
   git commit -m "Add CMS functionality"
   git push origin main
   ```

2. **Vérifier le déploiement** :
   - GitHub Actions va automatiquement déployer
   - Vérifiez les logs dans l'onglet Actions

### 6. Accès au CMS

1. **URL du CMS** : `https://yourdomain.com/admin`
2. **Connexion** : Utilisez l'email configuré dans `ADMIN_EMAIL`
3. **Première connexion** : Créez un compte avec cet email

## Fonctionnalités du CMS

- ✅ Authentification sécurisée avec Supabase
- ✅ Interface d'administration intuitive
- ✅ Modification des textes des sections
- ✅ Affichage/masquage des sections
- ✅ Sauvegarde automatique
- ✅ Déploiement automatique via GitHub Actions

## Sécurité

- Seuls les utilisateurs avec l'email configuré peuvent accéder au CMS
- Les données sont protégées par Row Level Security (RLS)
- Les clés sensibles sont stockées dans les secrets GitHub
