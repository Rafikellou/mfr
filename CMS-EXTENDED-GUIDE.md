# Guide du CMS Étendu - MFR NextJS

## Vue d'ensemble

Le CMS a été étendu pour résoudre les deux problèmes principaux :

1. **Navigation limitée** : Le CMS ne permettait de modifier que la page d'accueil
2. **Contenu des composants inaccessible** : Les textes dans les composants étaient codés en dur

## Nouvelles fonctionnalités

### 1. Navigation entre toutes les pages
- **Interface de navigation** : Onglets pour naviguer entre Pages, Sections et Recherche
- **Liste complète des pages** : Accès à toutes les pages du site (Accueil, Détections, Tournois, Stages, etc.)
- **Recherche globale** : Recherche par mots-clés dans tous les contenus

### 2. Édition des composants
- **Composants éditable** : Chaque composant peut maintenant avoir ses textes modifiés via le CMS
- **Champs dynamiques** : Système de champs configurables pour chaque composant
- **Hiérarchie claire** : Pages → Composants → Champs de contenu

## Structure de la base de données

### Nouvelles tables

#### `pages`
- Contient toutes les pages du site
- Champs : id, name, title, route, description, is_visible, order_index

#### `components`
- Contient tous les composants réutilisables
- Champs : id, name, title, description, component_type, is_visible, order_index

#### `page_components`
- Table de liaison entre pages et composants
- Permet d'organiser quels composants apparaissent sur quelles pages

#### `component_fields`
- Contient tous les champs de contenu des composants
- Champs : id, component_id, field_name, field_value, field_type, field_label, etc.

## Installation et configuration

### 1. Exécuter le schéma étendu

```sql
-- Exécuter le fichier extended-cms-schema.sql dans Supabase
-- Ce script ajoute les nouvelles tables et données
```

### 2. Vérifier la configuration

Le système fonctionne en mode "fallback" :
- Si les données du nouveau système sont disponibles, elles sont utilisées
- Sinon, le contenu par défaut (codé en dur) est affiché
- Cela garantit que le site fonctionne même si le CMS n'est pas configuré

## Utilisation du CMS étendu

### Navigation

1. **Pages** : Cliquez sur l'onglet "Pages" pour voir toutes les pages du site
2. **Sections** : Onglet "Sections" pour l'ancien système (compatible)
3. **Recherche** : Tapez des mots-clés pour trouver du contenu spécifique

### Édition d'une page

1. Sélectionnez une page dans la liste
2. Modifiez les informations de base (titre, route, description)
3. Consultez les composants associés à cette page
4. Cliquez sur "Éditer" pour modifier un composant spécifique

### Édition d'un composant

1. Sélectionnez un composant (via une page ou directement)
2. Modifiez les métadonnées du composant (titre, description)
3. Éditez les champs de contenu (textes, descriptions, etc.)

### Recherche

- Tapez dans la barre de recherche pour trouver du contenu
- Les résultats incluent : Pages, Composants, et Champs de contenu
- Cliquez sur un résultat pour l'éditer directement

## Composants modifiés

### Hero
- Utilise maintenant `getContentByComponent('hero')`
- Fallback vers l'ancien système si nécessaire

### FAQ
- Les questions et réponses sont maintenant éditables
- Structure : question_1, answer_1, question_2, answer_2, etc.

### Autres composants
- Tous les composants peuvent être étendus de la même manière
- Importez `useExtendedContent` et utilisez `getContentByComponent()`

## Exemple d'extension d'un composant

```tsx
import { useExtendedContent } from '@/contexts/ExtendedContentContext'

export default function MonComposant() {
  const { getContentByComponent } = useExtendedContent()
  const content = getContentByComponent('mon-composant')
  
  return (
    <div>
      <h2>{content.title || 'Titre par défaut'}</h2>
      <p>{content.description || 'Description par défaut'}</p>
    </div>
  )
}
```

## Avantages du nouveau système

### Pour les administrateurs
- **Navigation intuitive** : Accès facile à toutes les pages
- **Recherche puissante** : Trouvez rapidement du contenu spécifique
- **Édition granulaire** : Modifiez des éléments précis sans toucher au code
- **Visibilité des changements** : Boutons pour masquer/afficher du contenu

### Pour les développeurs
- **Système extensible** : Facile d'ajouter de nouveaux composants
- **Fallback robuste** : Le site fonctionne même sans configuration CMS
- **Type safety** : Interfaces TypeScript pour tous les éléments
- **Performance** : Chargement optimisé des données

## Migration depuis l'ancien système

Le nouveau système est **100% compatible** avec l'ancien :
- Les anciennes sections continuent de fonctionner
- Aucune modification nécessaire des composants existants
- Migration progressive possible

## Prochaines étapes recommandées

1. **Tester le nouveau CMS** avec les données d'exemple
2. **Étendre progressivement** les composants existants
3. **Ajouter de nouveaux composants** selon les besoins
4. **Former les utilisateurs** sur la nouvelle interface

## Support et maintenance

- Le système utilise Supabase pour la persistance
- Toutes les modifications sont sauvegardées automatiquement
- Les erreurs sont gérées gracieusement avec des fallbacks
- Logs détaillés pour le debugging

## Sécurité

- Row Level Security (RLS) activé sur toutes les tables
- Seuls les utilisateurs admin peuvent modifier le contenu
- Lecture publique pour l'affichage du contenu
- Validation des données côté client et serveur
