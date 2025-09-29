-- Schéma de base de données pour le CMS
-- À exécuter dans l'éditeur SQL de Supabase

-- Table pour les sections du site
CREATE TABLE sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  title TEXT,
  subtitle TEXT,
  description TEXT,
  content JSONB,
  is_visible BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table pour les contenus dynamiques
CREATE TABLE content_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  field_name VARCHAR(100) NOT NULL,
  field_value TEXT,
  field_type VARCHAR(50) DEFAULT 'text',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(section_id, field_name)
);

-- Table pour les utilisateurs admin
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) policies
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy pour permettre la lecture publique des sections visibles
CREATE POLICY "Sections are viewable by everyone" ON sections
  FOR SELECT USING (is_visible = true);

-- Policy pour permettre la lecture publique des contenus
CREATE POLICY "Content items are viewable by everyone" ON content_items
  FOR SELECT USING (true);

-- Policy pour permettre aux admins de modifier les sections
CREATE POLICY "Admins can modify sections" ON sections
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policy pour permettre aux admins de modifier les contenus
CREATE POLICY "Admins can modify content items" ON content_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policy pour permettre aux admins de gérer les utilisateurs admin
CREATE POLICY "Admins can manage admin users" ON admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers pour updated_at
CREATE TRIGGER update_sections_updated_at BEFORE UPDATE ON sections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_items_updated_at BEFORE UPDATE ON content_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insérer les sections par défaut
INSERT INTO sections (name, title, subtitle, description, is_visible, order_index) VALUES
('hero', 'Révèle ton talent', '', '', true, 1),
('concepts', 'Quatre voies vers l''excellence', 'Découvre les opportunités qui t''attendent pour révéler ton potentiel', '', true, 2),
('process', 'Comment ça marche', '', '', true, 3),
('testimonials', 'Témoignages', '', '', true, 4),
('newsletter', 'Newsletter', '', '', true, 5),
('faq', 'FAQ', '', '', true, 6);

-- Insérer les contenus par défaut pour la section hero
INSERT INTO content_items (section_id, field_name, field_value, field_type, order_index) VALUES
((SELECT id FROM sections WHERE name = 'hero'), 'title', 'Révèle ton talent', 'text', 1),
((SELECT id FROM sections WHERE name = 'hero'), 'subtitle', '', 'text', 2),
((SELECT id FROM sections WHERE name = 'hero'), 'description', '', 'text', 3);

-- Insérer les contenus par défaut pour la section concepts
INSERT INTO content_items (section_id, field_name, field_value, field_type, order_index) VALUES
((SELECT id FROM sections WHERE name = 'concepts'), 'title', 'Quatre voies vers l''excellence', 'text', 1),
((SELECT id FROM sections WHERE name = 'concepts'), 'subtitle', 'Découvre les opportunités qui t''attendent pour révéler ton potentiel', 'text', 2),
((SELECT id FROM sections WHERE name = 'concepts'), 'description', '', 'text', 3);

-- Insérer un utilisateur admin par défaut (remplacez par votre email)
INSERT INTO admin_users (email, role) VALUES
('mfracing34@gmail.com', 'admin'),
('kellourafik@gmail.com', 'admin');
