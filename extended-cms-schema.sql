-- Extension du schéma CMS pour supporter les pages et composants
-- À exécuter après le schéma existant

-- Table pour les pages du site
CREATE TABLE pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  route VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  is_visible BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table pour les composants
CREATE TABLE components (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(200),
  description TEXT,
  component_type VARCHAR(50) DEFAULT 'section', -- section, hero, card, etc.
  is_visible BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table de liaison entre pages et composants
CREATE TABLE page_components (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  component_id UUID REFERENCES components(id) ON DELETE CASCADE,
  order_index INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_id, component_id)
);

-- Table pour les champs de contenu des composants
CREATE TABLE component_fields (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  component_id UUID REFERENCES components(id) ON DELETE CASCADE,
  field_name VARCHAR(100) NOT NULL,
  field_value TEXT,
  field_type VARCHAR(50) DEFAULT 'text', -- text, textarea, image, number, boolean
  field_label VARCHAR(200),
  field_description TEXT,
  order_index INTEGER DEFAULT 0,
  is_required BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(component_id, field_name)
);

-- Activer RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE components ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE component_fields ENABLE ROW LEVEL SECURITY;

-- Policies pour les pages
CREATE POLICY "Pages are viewable by everyone" ON pages
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Admins can manage pages" ON pages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policies pour les composants
CREATE POLICY "Components are viewable by everyone" ON components
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Admins can manage components" ON components
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policies pour page_components
CREATE POLICY "Page components are viewable by everyone" ON page_components
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Admins can manage page components" ON page_components
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Policies pour component_fields
CREATE POLICY "Component fields are viewable by everyone" ON component_fields
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage component fields" ON component_fields
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Triggers pour updated_at
CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_components_updated_at BEFORE UPDATE ON components
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_page_components_updated_at BEFORE UPDATE ON page_components
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_component_fields_updated_at BEFORE UPDATE ON component_fields
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insérer les pages du site
INSERT INTO pages (name, title, route, description, is_visible, order_index) VALUES
('home', 'Accueil', '/', 'Page d''accueil du site', true, 1),
('detections', 'Détections', '/detections', 'Page des détections de joueurs', true, 2),
('tournois', 'Tournois', '/tournois', 'Page des tournois', true, 3),
('stages-elite', 'Stages Elite', '/stages-elite', 'Page des stages d''élite', true, 4),
('coaching-elite', 'Coaching Elite', '/coaching-elite', 'Page du coaching d''élite', true, 5),
('role-des-parents', 'Rôle des Parents', '/role-des-parents', 'Page sur le rôle des parents', true, 6),
('partenaires', 'Partenaires', '/partenaires', 'Page des partenaires', true, 7),
('contact', 'Contact', '/contact', 'Page de contact', true, 8),
('clasico-cup', 'Clasico Cup', '/clasico-cup', 'Page d''inscription Clasico Cup', true, 9);

-- Insérer les composants
INSERT INTO components (name, title, description, component_type, is_visible, order_index) VALUES
-- Composants de la page d'accueil
('hero', 'Section Hero', 'Section principale avec titre et CTA', 'hero', true, 1),
('upcoming-events', 'Événements à venir', 'Slider des prochains événements', 'section', true, 2),
('concepts', 'Concepts', 'Section des 4 voies vers l''excellence', 'section', true, 3),
('process', 'Processus', 'Section comment ça marche', 'section', true, 4),
('testimonials', 'Témoignages', 'Section des témoignages', 'section', true, 5),
('newsletter', 'Newsletter', 'Section d''inscription newsletter', 'section', true, 6),
('faq', 'FAQ', 'Section des questions fréquentes', 'section', true, 7),

-- Composants des pages spécialisées
('detection-hero', 'Hero Détections', 'Section hero de la page détections', 'hero', true, 8),
('detection-card', 'Carte Détection', 'Carte individuelle de détection', 'card', true, 9),
('stage-hero', 'Hero Stages', 'Section hero de la page stages', 'hero', true, 10),
('stage-card', 'Carte Stage', 'Carte individuelle de stage', 'card', true, 11),
('tournament-hero', 'Hero Tournois', 'Section hero de la page tournois', 'hero', true, 12),
('tournament-card', 'Carte Tournoi', 'Carte individuelle de tournoi', 'card', true, 13),
('coaching-hero', 'Hero Coaching', 'Section hero de la page coaching', 'hero', true, 14),
('partners-hero', 'Hero Partenaires', 'Section hero de la page partenaires', 'hero', true, 15),
('partner-card', 'Carte Partenaire', 'Carte individuelle de partenaire', 'card', true, 16);

-- Lier les composants aux pages
-- Page d'accueil
INSERT INTO page_components (page_id, component_id, order_index) VALUES
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'hero'), 1),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'upcoming-events'), 2),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'concepts'), 3),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'process'), 4),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'testimonials'), 5),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'newsletter'), 6),
((SELECT id FROM pages WHERE name = 'home'), (SELECT id FROM components WHERE name = 'faq'), 7),

-- Page détections
((SELECT id FROM pages WHERE name = 'detections'), (SELECT id FROM components WHERE name = 'detection-hero'), 1),
((SELECT id FROM pages WHERE name = 'detections'), (SELECT id FROM components WHERE name = 'detection-card'), 2),

-- Page stages
((SELECT id FROM pages WHERE name = 'stages-elite'), (SELECT id FROM components WHERE name = 'stage-hero'), 1),
((SELECT id FROM pages WHERE name = 'stages-elite'), (SELECT id FROM components WHERE name = 'stage-card'), 2),

-- Page tournois
((SELECT id FROM pages WHERE name = 'tournois'), (SELECT id FROM components WHERE name = 'tournament-hero'), 1),
((SELECT id FROM pages WHERE name = 'tournois'), (SELECT id FROM components WHERE name = 'tournament-card'), 2),

-- Page coaching
((SELECT id FROM pages WHERE name = 'coaching-elite'), (SELECT id FROM components WHERE name = 'coaching-hero'), 1),

-- Page partenaires
((SELECT id FROM pages WHERE name = 'partenaires'), (SELECT id FROM components WHERE name = 'partners-hero'), 1),
((SELECT id FROM pages WHERE name = 'partenaires'), (SELECT id FROM components WHERE name = 'partner-card'), 2);

-- Insérer les champs de contenu pour les composants
-- Hero de la page d'accueil
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'hero'), 'title', 'Révèle ton talent', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'hero'), 'subtitle', '', 'text', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'hero'), 'description', '', 'textarea', 'Description', 3);

-- Hero des détections
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'detection-hero'), 'title', 'Ton opportunité de briller', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'detection-hero'), 'subtitle', 'Chaque détection est une porte vers ton rêve.', 'textarea', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'detection-hero'), 'description', 'Montre ton talent devant des recruteurs de clubs prestigieux.', 'textarea', 'Description', 3);

-- Hero des stages
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'stage-hero'), 'title', 'Développe ton potentiel', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'stage-hero'), 'subtitle', 'Booste tes compétences spécifiques à ton poste.', 'textarea', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'stage-hero'), 'description', 'Découvre les techniques des professionnels avec des entraîneurs experts.', 'textarea', 'Description', 3);

-- Hero des tournois
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'tournament-hero'), 'title', 'Prouve ta valeur', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'tournament-hero'), 'subtitle', 'Démontre que ton équipe est l''une des meilleures de sa catégorie.', 'textarea', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'tournament-hero'), 'description', 'Affrontez les équipes les plus compétitives et forgez votre légende sur le terrain.', 'textarea', 'Description', 3);

-- Hero du coaching
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'coaching-hero'), 'title', 'Coaching d''élite', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'coaching-hero'), 'subtitle', 'Meilleur, chaque jour', 'text', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'coaching-hero'), 'description', 'Un accompagnement personnalisé pour atteindre l''excellence, progresser plus vite et élever ton jeu à chaque séance.', 'textarea', 'Description', 3);

-- Hero des partenaires
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'partners-hero'), 'title', 'Nos partenaires', 'text', 'Titre principal', 1),
((SELECT id FROM components WHERE name = 'partners-hero'), 'subtitle', 'Ensemble, nous créons les opportunités de demain.', 'textarea', 'Sous-titre', 2),
((SELECT id FROM components WHERE name = 'partners-hero'), 'description', 'Découvre les clubs, institutions et entreprises qui nous accompagnent.', 'textarea', 'Description', 3);

-- FAQ
INSERT INTO component_fields (component_id, field_name, field_value, field_type, field_label, order_index) VALUES
((SELECT id FROM components WHERE name = 'faq'), 'title', 'FAQ', 'text', 'Titre de la section', 1),
((SELECT id FROM components WHERE name = 'faq'), 'question_1', 'À qui s''adressent vos événements ?', 'text', 'Question 1', 2),
((SELECT id FROM components WHERE name = 'faq'), 'answer_1', 'Nos événements s''adressent aux joueurs évoluant en club, avec un niveau minimum départemental/régional selon les catégories.', 'textarea', 'Réponse 1', 3),
((SELECT id FROM components WHERE name = 'faq'), 'question_2', 'Quel matériel faut-il prévoir ?', 'text', 'Question 2', 4),
((SELECT id FROM components WHERE name = 'faq'), 'answer_2', 'Tenue de sport complète, chaussures adaptées au terrain, gourde d''eau. Le matériel technique est fourni.', 'textarea', 'Réponse 2', 5),
((SELECT id FROM components WHERE name = 'faq'), 'question_3', 'Un certificat médical est-il obligatoire ?', 'text', 'Question 3', 6),
((SELECT id FROM components WHERE name = 'faq'), 'answer_3', 'Oui, certificat médical de non contre-indication au sport datant de moins d''un an obligatoire.', 'textarea', 'Réponse 3', 7),
((SELECT id FROM components WHERE name = 'faq'), 'question_4', 'Droits à l''image ?', 'text', 'Question 4', 8),
((SELECT id FROM components WHERE name = 'faq'), 'answer_4', 'En participant à nos événements, vous acceptez que des images puissent être prises et utilisées à des fins de communication. Ces images peuvent être diffusées sur nos réseaux sociaux, site internet et supports de communication, sans compensation financière.', 'textarea', 'Réponse 4', 9),
((SELECT id FROM components WHERE name = 'faq'), 'question_5', 'Politique d''annulation ?', 'text', 'Question 5', 10),
((SELECT id FROM components WHERE name = 'faq'), 'answer_5', 'Les annulations sont possibles jusqu''à 15 jours avant l''événement, sous réserve d''approbation. Passé ce délai, le paiement est dû en totalité sauf en cas de blessure avec certificat médical. Les remboursements sont effectués sous 30 jours.', 'textarea', 'Réponse 5', 11);
