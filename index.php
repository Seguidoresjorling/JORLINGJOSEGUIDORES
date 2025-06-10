<?php
// Archivo de verificación para Hostinger
// Este archivo ayuda a verificar que PHP funciona correctamente
// y que los permisos están configurados adecuadamente

// Mostrar información básica
echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Jorling Seguidores</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(to bottom right, #1a1a2e, #4a4e69);
            color: white;
            min-height: 100vh;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #bb86fc;
            margin-bottom: 20px;
        }
        .success {
            color: #4ade80;
            font-weight: bold;
        }
        .error {
            color: #f87171;
            font-weight: bold;
        }
        .info {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(to right, #bb86fc, #8b5cf6);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jorling Seguidores - Verificación del Servidor</h1>';

// Verificar permisos de directorio
$publicHtmlPerms = substr(sprintf("%o", fileperms($_SERVER["DOCUMENT_ROOT"])), -4);
$currentDirPerms = substr(sprintf("%o", fileperms(".")), -4);

echo '<div class="info">
    <p><strong>Dominio:</strong> ' . $_SERVER['HTTP_HOST'] . '</p>
    <p><strong>Directorio raíz:</strong> ' . $_SERVER["DOCUMENT_ROOT"] . '</p>
    <p><strong>Permisos del directorio raíz:</strong> ' . $publicHtmlPerms . '</p>
    <p><strong>Permisos del directorio actual:</strong> ' . $currentDirPerms . '</p>
    <p><strong>PHP Version:</strong> ' . phpversion() . '</p>
</div>';

// Verificar si podemos crear archivos
$testFile = 'test_write_permission.txt';
$writeTest = @file_put_contents($testFile, 'Test write permissions');

if ($writeTest !== false) {
    echo '<p class="success">✅ Permisos de escritura: OK</p>';
    @unlink($testFile); // Eliminar archivo de prueba
} else {
    echo '<p class="error">❌ Permisos de escritura: ERROR - No se puede escribir en este directorio</p>';
}

// Verificar archivos importantes
$requiredFiles = ['index.html', '.htaccess', 'next.config.js'];
$missingFiles = [];

foreach ($requiredFiles as $file) {
    if (!file_exists($file)) {
        $missingFiles[] = $file;
    }
}

if (empty($missingFiles)) {
    echo '<p class="success">✅ Archivos principales: Todos presentes</p>';
} else {
    echo '<p class="error">❌ Archivos faltantes: ' . implode(', ', $missingFiles) . '</p>';
}

// Verificar conexión a base de datos (comentado por seguridad)
echo '<p>Para verificar la conexión a la base de datos, descomenta el código en este archivo.</p>';
/*
$dbHost = 'localhost';
$dbUser = 'tu_usuario';
$dbPass = 'tu_password';
$dbName = 'tu_base_datos';

try {
    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    if ($conn->connect_error) {
        echo '<p class="error">❌ Conexión a base de datos: ERROR - ' . $conn->connect_error . '</p>';
    } else {
        echo '<p class="success">✅ Conexión a base de datos: OK</p>';
        $conn->close();
    }
} catch (Exception $e) {
    echo '<p class="error">❌ Conexión a base de datos: ERROR - ' . $e->getMessage() . '</p>';
}
*/

echo '<h2>Soluciones para el error 403:</h2>
<ol>
    <li>Verifica que los permisos de los archivos sean 644</li>
    <li>Verifica que los permisos de las carpetas sean 755</li>
    <li>Asegúrate de que existe un archivo index.html o index.php en la raíz</li>
    <li>Revisa la configuración del .htaccess</li>
</ol>

<a href="/" class="btn">Volver a intentar</a>
</div>
</body>
</html>';
?>
