-- SOLUTION URGENTE : Désactiver temporairement RLS pour corriger la récursion infinie
-- À exécuter dans l'éditeur SQL de Supabase

-- Supprimer toutes les politiques problématiques
DROP POLICY IF EXISTS "Admins can manage admin users" ON admin_users;
DROP POLICY IF EXISTS "Admins can modify sections" ON sections;
DROP POLICY IF EXISTS "Admins can modify content items" ON content_items;

-- Désactiver RLS temporairement pour les tests
ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE sections DISABLE ROW LEVEL SECURITY;
ALTER TABLE content_items DISABLE ROW LEVEL SECURITY;

-- Ajouter l'utilisateur manquant
INSERT INTO admin_users (email, role) 
VALUES ('kellourafik@gmail.com', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Vérifier que l'utilisateur a été ajouté
SELECT * FROM admin_users WHERE email = 'kellourafik@gmail.com';

-- Réactiver RLS avec des politiques simples (sans récursion)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Politiques simples pour tous les utilisateurs authentifiés
CREATE POLICY "Allow all for authenticated users" ON admin_users
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all for authenticated users" ON sections
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all for authenticated users" ON content_items
  FOR ALL USING (auth.role() = 'authenticated');

-- Politiques pour la lecture publique
CREATE POLICY "Sections are viewable by everyone" ON sections
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Content items are viewable by everyone" ON content_items
  FOR SELECT USING (true);
