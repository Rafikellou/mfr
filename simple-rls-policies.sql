-- Solution alternative : Politiques RLS simplifiées
-- À exécuter dans l'éditeur SQL de Supabase

-- Supprimer toutes les politiques existantes
DROP POLICY IF EXISTS "Admins can manage admin users" ON admin_users;
DROP POLICY IF EXISTS "Admins can modify sections" ON sections;
DROP POLICY IF EXISTS "Admins can modify content items" ON content_items;

-- Désactiver temporairement RLS pour les tests
ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE sections DISABLE ROW LEVEL SECURITY;
ALTER TABLE content_items DISABLE ROW LEVEL SECURITY;

-- Réactiver RLS avec des politiques simples
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Politiques simples sans récursion
CREATE POLICY "Allow all for authenticated users" ON admin_users
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all for authenticated users" ON sections
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all for authenticated users" ON content_items
  FOR ALL USING (auth.role() = 'authenticated');
