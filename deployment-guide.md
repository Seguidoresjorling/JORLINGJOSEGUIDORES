# Guía de Despliegue en Hostinger

## 1. Requisitos Previos
- Plan Hostinger Business o superior
- Dominio configurado
- Acceso al panel de control de Hostinger

## 2. Configurar Base de Datos
1. Ve a "Bases de Datos MySQL" en tu panel de Hostinger
2. Crea una nueva base de datos
3. Anota: nombre de BD, usuario, contraseña
4. Ejecuta los scripts SQL desde phpMyAdmin

## 3. Subir Archivos
1. Comprimir todos los archivos del proyecto
2. Subir vía File Manager o FTP
3. Extraer en la carpeta public_html

## 4. Configurar Variables de Entorno
1. Crear archivo .env.local en la raíz
2. Completar con datos de Hostinger
3. Configurar permisos 644

## 5. Instalar Dependencias
\`\`\`bash
# Conectar por SSH (si está disponible)
npm install
npm run build
npm start
\`\`\`

## 6. Configurar Dominio
1. Apuntar dominio a la carpeta del proyecto
2. Configurar SSL (Let's Encrypt gratuito)
3. Verificar funcionamiento

## 7. Configuraciones Adicionales
- Configurar cron jobs para tareas automáticas
- Configurar email SMTP de Hostinger
- Configurar backups automáticos

## 8. Testing
- Verificar todas las páginas
- Probar formularios
- Verificar conexión a base de datos
- Probar sistema de pagos en modo sandbox
