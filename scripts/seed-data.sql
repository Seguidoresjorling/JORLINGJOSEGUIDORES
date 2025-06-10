-- Insertar datos iniciales para Jorling Seguidores
USE jorling_seguidores;

-- Insertar plataformas
INSERT INTO platforms (name, slug, icon, color) VALUES
('Instagram', 'instagram', '📸', 'from-pink-500 to-purple-600'),
('YouTube', 'youtube', '🎥', 'from-red-500 to-red-600'),
('TikTok', 'tiktok', '🎵', 'from-black to-gray-800'),
('Facebook', 'facebook', '👥', 'from-blue-500 to-blue-600'),
('Telegram', 'telegram', '✈️', 'from-blue-400 to-blue-500'),
('WhatsApp', 'whatsapp', '💬', 'from-green-500 to-green-600'),
('Twitter', 'twitter', '🐦', 'from-gray-800 to-black');

-- Insertar servicios de Instagram
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(1, 'Seguidores', 'followers', 'Seguidores reales y activos para tu perfil de Instagram', 0.01, 100, 100, 50000),
(1, 'Likes', 'likes', 'Likes reales para tus publicaciones de Instagram', 0.03, 100, 100, 10000),
(1, 'Comentarios', 'comments', 'Comentarios reales en español para tus posts', 0.10, 100, 10, 1000),
(1, 'Comentarios Personalizados', 'custom_comments', 'Comentarios personalizados escritos por ti', 0.50, 100, 10, 500),
(1, 'Vistas de Reels', 'reels_views', 'Vistas para tus videos de Instagram Reels', 0.05, 1000, 1000, 100000);

-- Insertar servicios de YouTube
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity, is_special) VALUES
(2, 'Suscriptores', 'subscribers', 'Suscriptores reales para tu canal de YouTube', 0.01, 100, 100, 10000, FALSE),
(2, 'Likes', 'likes', 'Likes para tus videos de YouTube', 0.03, 100, 100, 5000, FALSE),
(2, 'Comentarios', 'comments', 'Comentarios reales para tus videos', 0.10, 100, 10, 500, FALSE),
(2, 'Visualizaciones', 'views', 'Visualizaciones reales para tus videos', 0.05, 1000, 1000, 1000000, FALSE),
(2, 'Horas de Visualización (500h)', 'watch_time', '500 horas de visualización para monetización', 15.00, 1, 1, 10, TRUE);

-- Insertar servicios de TikTok
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(3, 'Seguidores', 'followers', 'Seguidores reales para tu perfil de TikTok', 0.01, 100, 100, 20000),
(3, 'Likes', 'likes', 'Likes para tus videos de TikTok', 0.03, 100, 100, 50000),
(3, 'Comentarios', 'comments', 'Comentarios reales para tus videos', 0.10, 100, 10, 1000),
(3, 'Vistas', 'views', 'Vistas para tus videos de TikTok', 0.05, 1000, 1000, 1000000);

-- Insertar servicios de Facebook
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(4, 'Seguidores de Página', 'page_followers', 'Seguidores para tu página de Facebook', 0.01, 100, 100, 10000),
(4, 'Reacciones', 'reactions', 'Reacciones (Like, Me encanta, etc.) para tus posts', 0.03, 100, 100, 5000),
(4, 'Comentarios', 'comments', 'Comentarios reales para tus publicaciones', 0.10, 100, 10, 500),
(4, 'Vistas de Videos', 'video_views', 'Vistas para tus videos de Facebook', 0.05, 1000, 1000, 100000);

-- Insertar servicios de Telegram
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(5, 'Miembros a Canales', 'channel_members', 'Miembros reales para tu canal de Telegram', 0.20, 100, 100, 5000),
(5, 'Miembros a Grupos', 'group_members', 'Miembros reales para tu grupo de Telegram', 0.20, 100, 100, 5000);

-- Insertar servicios de WhatsApp
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(6, 'Miembros a Grupos', 'group_members', 'Miembros reales para tu grupo de WhatsApp', 0.20, 100, 100, 2000);

-- Insertar servicios de Twitter
INSERT INTO services (platform_id, name, slug, description, base_price, price_per, min_quantity, max_quantity) VALUES
(7, 'Seguidores', 'followers', 'Seguidores reales para tu perfil de Twitter/X', 0.01, 100, 100, 10000),
(7, 'Likes', 'likes', 'Likes para tus tweets', 0.03, 100, 100, 5000),
(7, 'Retweets', 'retweets', 'Retweets para tus publicaciones', 0.05, 100, 50, 2000),
(7, 'Vistas', 'views', 'Vistas para tus tweets', 0.05, 1000, 1000, 100000);

-- Insertar usuario administrador
INSERT INTO users (name, email, password, balance, is_admin, referral_code) VALUES
('Administrador', 'admin@jorlingseguidores.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0.00, TRUE, 'ADMIN001');

-- Insertar configuración del sistema
INSERT INTO system_config (config_key, config_value, description) VALUES
('site_name', 'Jorling Seguidores', 'Nombre del sitio web'),
('site_description', 'Impulsa tus redes sociales al siguiente nivel', 'Descripción del sitio'),
('paypal_client_id', '', 'PayPal Client ID para pagos'),
('crypto_wallet_btc', '', 'Dirección de wallet Bitcoin'),
('crypto_wallet_usdt', '', 'Dirección de wallet USDT'),
('referral_bonus', '5.00', 'Bono por referido en USD'),
('min_deposit', '5.00', 'Depósito mínimo en USD'),
('max_deposit', '1000.00', 'Depósito máximo en USD'),
('maintenance_mode', 'false', 'Modo de mantenimiento'),
('api_rate_limit', '100', 'Límite de requests por minuto');

-- Insertar API de proveedor ejemplo
INSERT INTO provider_apis (name, api_url, api_key, is_active) VALUES
('Proveedor Principal', 'https://api.proveedor.com/v2', 'API_KEY_AQUI', TRUE);
