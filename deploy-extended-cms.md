# Guide de déploiement du CMS étendu

## Étapes de déploiement

### 1. Sauvegarde (Recommandé)
Avant de déployer, faites une sauvegarde de votre base de données Supabase actuelle.

### 2. Exécution du schéma étendu
1. Connectez-vous à votre dashboard Supabase
2. Allez dans l'éditeur SQL
3. Copiez et exécutez le contenu du fichier `extended-cms-schema.sql`
4. Vérifiez que toutes les tables ont été créées sans erreur

### 3. Vérification de la configuration
Le nouveau système est conçu pour fonctionner en mode "fallback", donc :
- Si Supabase n'est pas configuré → Le site utilise le contenu par défaut
- Si Supabase est configuré → Le site utilise le contenu du CMS

### 4. Test de l'interface admin
1. Allez sur `/admin`
2. Connectez-vous avec vos identifiants admin
3. Testez la navigation entre les onglets (Pages, Sections, Recherche)
4. Vérifiez que vous pouvez éditer du contenu

## Structure des données créées

### Pages créées
- Accueil (/)
- Détections (/detections)
- Tournois (/tournois)
- Stages Elite (/stages-elite)
- Coaching Elite (/coaching-elite)
- Rôle des Parents (/role-des-parents)
- Partenaires (/partenaires)
- Contact (/contact)
- Clasico Cup (/clasico-cup)

### Composants créés
- hero (Section principale)
- upcoming-events (Événements à venir)
- concepts (4 voies vers l'excellence)
- process (Comment ça marche)
- testimonials (Témoignages)
- newsletter (Newsletter)
- faq (Questions fréquentes)
- detection-hero, stage-hero, tournament-hero, etc.

### Champs de contenu pré-configurés
- Tous les textes des sections hero sont éditables
- Les questions et réponses de la FAQ sont configurables
- Système extensible pour ajouter de nouveaux champs

## Vérification post-déploiement

### 1. Interface CMS
- [ ] Navigation fonctionnelle entre Pages/Sections/Recherche
- [ ] Recherche par mots-clés opérationnelle
- [ ] Édition de contenu fonctionnelle
- [ ] Boutons de visibilité (œil) fonctionnels

### 2. Site public
- [ ] Page d'accueil s'affiche correctement
- [ ] Contenu modifié via CMS apparaît sur le site
- [ ] Fallback fonctionne si CMS non configuré
- [ ] Toutes les pages sont accessibles

### 3. Performance
- [ ] Chargement rapide de l'interface admin
- [ ] Recherche responsive
- [ ] Sauvegarde automatique des modifications

## Personnalisation

### Ajouter une nouvelle page
```sql
INSERT INTO pages (name, title, route, description, is_visible, order_index) 
VALUES ('nouvelle-page', 'Nouvelle Page', '/nouvelle-page', 'Description', true, 10);
```

### Ajouter un nouveau composant
```sql
INSERT INTO components (name, title, description, component_type, is_visible, order_index) 
VALUES ('mon-composant', 'Mon Composant', 'Description', 'section', true, 20);
```

### Lier un composant à une page
```sql
INSERT INTO page_components (page_id, component_id, order_index) 
VALUES (
  (SELECT id FROM pages WHERE name = 'nouvelle-page'),
  (SELECT id FROM components WHERE name = 'mon-composant'),
  1
);
```

### Ajouter des champs de contenu
```sql
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) 
VALUES (
  (SELECT id FROM components WHERE name = 'mon-composant'),
  'titre',
  'Mon Titre',
  'text',
  'Titre principal',
  1
);
```

## Dépannage

### Problème : Interface CMS ne se charge pas
- Vérifiez que Supabase est configuré dans `.env.local`
- Vérifiez les permissions RLS dans Supabase
- Consultez la console du navigateur pour les erreurs

### Problème : Contenu ne s'affiche pas sur le site
- Vérifiez que les composants utilisent `useExtendedContent()`
- Vérifiez que les champs ont des valeurs dans la base de données
- Le système fallback devrait fonctionner même sans configuration

### Problème : Recherche ne fonctionne pas
- Vérifiez que les tables sont correctement peuplées
- Vérifiez les permissions de lecture sur les tables
- Testez avec des termes simples d'abord

## Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de la console du navigateur
2. Vérifiez les logs Supabase
3. Consultez la documentation dans `CMS-EXTENDED-GUIDE.md`
4. Testez le système en mode fallback (sans Supabase)

## Rollback (si nécessaire)

Si vous devez revenir à l'ancien système :
1. Les anciennes tables (`sections`, `content_items`) continuent de fonctionner
2. Supprimez simplement les nouvelles tables si nécessaire
3. Le site continuera de fonctionner avec le contenu par défaut

Le nouveau système est conçu pour être non-destructif et compatible avec l'existant.
