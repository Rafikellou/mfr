# 🚀 Configuration CMS MFR - Guide Rapide

## ✅ **Ce qui est déjà fait**

- ✅ Dépendances Supabase installées
- ✅ Code CMS créé et fonctionnel
- ✅ Interface d'administration prête
- ✅ Build fonctionne (même sans config Supabase)

## 🔧 **Ce qu'il vous reste à faire**

### **1. Configuration Supabase (5 minutes)**

1. **Allez dans votre projet Supabase "cms-mfr"**
2. **SQL Editor** → Copiez et exécutez le contenu de `database-schema.sql`
3. **Authentication** → **URL Configuration** :
   ```
   Site URL: https://mf-racing.fr
   Redirect URLs: 
     - https://mf-racing.fr/auth/callback
     - http://localhost:3000/auth/callback
   ```
4. **Settings** → **API** → Copiez vos clés

### **2. Variables d'environnement (2 minutes)**

Créez le fichier `.env.local` dans la racine du projet :

```env
NEXT_PUBLIC_SUPABASE_URL=https://cms-mfr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-ici
SUPABASE_SERVICE_ROLE_KEY=votre-clé-service-ici
ADMIN_EMAIL=admin@mf-racing.fr
```

### **3. Test local (1 minute)**

```bash
npm run dev
```

Testez :
- Site : `http://localhost:3000`
- CMS : `http://localhost:3000/admin`

### **4. Déploiement (3 minutes)**

1. **GitHub Secrets** (Settings → Secrets and variables → Actions) :
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://cms-mfr.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon
   SUPABASE_SERVICE_ROLE_KEY=votre-clé-service
   ADMIN_EMAIL=admin@mf-racing.fr
   ```

2. **Push vers GitHub** :
   ```bash
   git add .
   git commit -m "Add CMS functionality"
   git push origin main
   ```

3. **Vercel** → Connectez votre repo → Configurez les variables d'environnement

## 🎯 **Résultat final**

- **Site principal** : `https://mf-racing.fr`
- **Interface CMS** : `https://mf-racing.fr/admin`
- **Connexion** : Email `admin@mf-racing.fr`

## 🔑 **Première connexion**

1. Allez sur `https://mf-racing.fr/admin`
2. Cliquez "Se connecter"
3. Utilisez `admin@mf-racing.fr`
4. Créez un mot de passe
5. Vous êtes dans le CMS !

## ⚡ **Fonctionnalités disponibles**

- ✅ Modification des textes en temps réel
- ✅ Affichage/masquage des sections
- ✅ Sauvegarde automatique
- ✅ Interface intuitive
- ✅ Déploiement automatique

**Temps total : 10-15 minutes**

Votre CMS est prêt ! 🎉
