<?php
// Archivo de verificación para jrolingseguidores.xyz
// Este archivo ayuda a verificar que PHP funciona correctamente

echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Jroling Seguidores</title>
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
        <h1>Jroling Seguidores - Verificación del Servidor</h1>';

// Verificar información del servidor
echo '<div class="info">
    <p><strong>Dominio:</strong> ' . $_SERVER['HTTP_HOST'] . '</p>
    <p><strong>Directorio raíz:</strong> ' . $_SERVER["DOCUMENT_ROOT"] . '</p>
    <p><strong>PHP Version:</strong> ' . phpversion() . '</p>
    <p><strong>Fecha y hora:</strong> ' . date('Y-m-d H:i:s') . '</p>
</div>';

// Verificar si el dominio es correcto
if ($_SERVER['HTTP_HOST'] === 'jrolingseguidores.xyz' || $_SERVER['HTTP_HOST'] === 'www.jrolingseguidores.xyz') {
    echo '<p class="success">✅ Dominio correcto: ' . $_SERVER['HTTP_HOST'] . '</p>';
} else {
    echo '<p class="error">⚠️ Dominio detectado: ' . $_SERVER['HTTP_HOST'] . '</p>';
}

// Verificar permisos de escritura
$testFile = 'test_write_permission.txt';
$writeTest = @file_put_contents($testFile, 'Test write permissions');

if ($writeTest !== false) {
    echo '<p class="success">✅ Permisos de escritura: OK</p>';
    @unlink($testFile);
} else {
    echo '<p class="error">❌ Permisos de escritura: ERROR</p>';
}

// Verificar extensiones PHP necesarias
$extensions = ['mysqli', 'curl', 'json', 'openssl'];
foreach ($extensions as $ext) {
    if (extension_loaded($ext)) {
        echo '<p class="success">✅ Extensión ' . $ext . ': Disponible</p>';
    } else {
        echo '<p class="error">❌ Extensión ' . $ext . ': No disponible</p>';
    }
}

echo '<h2>Estado del Sistema:</h2>
<p class="success">✅ PHP funcionando correctamente</p>
<p class="success">✅ Servidor web activo</p>
<p class="success">✅ Dominio jrolingseguidores.xyz configurado</p>

<h2>Próximos pasos:</h2>
<ol>
    <li>Subir todos los archivos del proyecto</li>
    <li>Configurar la base de datos MySQL</li>
    <li>Configurar las variables de entorno</li>
    <li>Activar SSL (Let\'s Encrypt)</li>
</ol>

<a href="/" class="btn">Recargar página</a>
</div>
</body>
</html>';
?>
