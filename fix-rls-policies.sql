-- Script pour corriger les politiques RLS et éviter la récursion infinie
-- À exécuter dans l'éditeur SQL de Supabase

-- Supprimer les anciennes politiques problématiques
DROP POLICY IF EXISTS "Admins can manage admin users" ON admin_users;
DROP POLICY IF EXISTS "Admins can modify sections" ON sections;
DROP POLICY IF EXISTS "Admins can modify content items" ON content_items;

-- Créer de nouvelles politiques sans récursion
-- Policy pour permettre aux admins de modifier les sections
CREATE POLICY "Admins can modify sections" ON sections
  FOR ALL USING (
    auth.jwt() ->> 'email' IN (
      SELECT email FROM admin_users WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policy pour permettre aux admins de modifier les contenus
CREATE POLICY "Admins can modify content items" ON content_items
  FOR ALL USING (
    auth.jwt() ->> 'email' IN (
      SELECT email FROM admin_users WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policy pour permettre aux admins de gérer les utilisateurs admin
CREATE POLICY "Admins can manage admin users" ON admin_users
  FOR ALL USING (
    auth.jwt() ->> 'email' IN (
      SELECT email FROM admin_users WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Alternative plus simple : permettre la lecture pour tous les utilisateurs authentifiés
-- et la modification seulement pour les admins existants
DROP POLICY IF EXISTS "Admins can manage admin users" ON admin_users;
CREATE POLICY "Allow admin users management" ON admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users au 
      WHERE au.email = auth.jwt() ->> 'email'
    )
  );
