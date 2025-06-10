<?php
// Configuración de base de datos para jorlingseguidores.xyz
// Actualiza estos valores con los datos de tu hosting Hostinger

define('DB_HOST', 'localhost');
define('DB_USER', 'u123456789_jorling'); // Reemplaza con tu usuario MySQL de Hostinger
define('DB_PASS', 'TuPasswordMySQL123'); // Reemplaza con tu contraseña MySQL
define('DB_NAME', 'u123456789_jorling_db'); // Reemplaza con el nombre de tu base de datos

// Configuración del sitio
define('SITE_URL', 'https://jorlingseguidores.xyz');
define('SITE_NAME', 'Jorling Seguidores');

// Configuración de PayPal
define('PAYPAL_CLIENT_ID', 'tu_paypal_client_id_aqui');
define('PAYPAL_CLIENT_SECRET', 'tu_paypal_client_secret_aqui');
define('PAYPAL_MODE', 'live'); // 'sandbox' para pruebas, 'live' para producción

// Configuración de email
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'noreply@jorlingseguidores.xyz');
define('SMTP_PASS', 'tu_password_email_hostinger');

// Configuración de APIs de proveedores
define('PROVIDER_API_URL', 'https://api.tuproveedor.com');
define('PROVIDER_API_KEY', 'tu_api_key_proveedor');

// Configuración de criptomonedas
define('CRYPTO_WALLET_BTC', 'tu_direccion_bitcoin');
define('CRYPTO_WALLET_USDT', 'tu_direccion_usdt');

// Función para conectar a la base de datos
function getDBConnection() {
    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
        return $pdo;
    } catch (PDOException $e) {
        error_log("Error de conexión a la base de datos: " . $e->getMessage());
        die("Error de conexión a la base de datos. Por favor, contacta al administrador.");
    }
}

// Función para generar respuestas JSON
function jsonResponse($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

// Función para validar email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Función para generar hash de contraseña
function hashPassword($password) {
    return password_hash($password, PASSWORD_DEFAULT);
}

// Función para verificar contraseña
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

// Función para generar token aleatorio
function generateToken($length = 32) {
    return bin2hex(random_bytes($length));
}

// Configuración de zona horaria
date_default_timezone_set('America/Mexico_City');

// Configuración de errores (desactivar en producción)
if ($_SERVER['HTTP_HOST'] === 'localhost' || strpos($_SERVER['HTTP_HOST'], '.local') !== false) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(0);
}
?>
