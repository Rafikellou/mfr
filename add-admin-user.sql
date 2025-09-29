-- Script pour ajouter l'utilisateur manquant dans admin_users
-- À exécuter dans l'éditeur SQL de Supabase

-- Vérifier d'abord si l'utilisateur existe déjà
SELECT * FROM admin_users WHERE email = 'kellourafik@gmail.com';

-- Ajouter l'utilisateur s'il n'existe pas
INSERT INTO admin_users (email, role) 
VALUES ('kellourafik@gmail.com', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Vérifier que l'utilisateur a été ajouté
SELECT * FROM admin_users WHERE email = 'kellourafik@gmail.com';
