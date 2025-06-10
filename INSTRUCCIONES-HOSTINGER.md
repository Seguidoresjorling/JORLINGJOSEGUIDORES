# 🚀 GUÍA COMPLETA DE INSTALACIÓN EN HOSTINGER
# Para jorlingseguidores.xyz

## 📋 PASO 1: PREPARAR ARCHIVOS LOCALMENTE

1. Descargar todos los archivos del proyecto
2. Crear archivo `.env.local` con las variables de entorno
3. Comprimir todo en un archivo ZIP

## 🗄️ PASO 2: CONFIGURAR BASE DE DATOS

### A. Crear Base de Datos MySQL
1. Ir al panel de Hostinger → "Bases de datos"
2. Crear nueva base de datos:
   - Nombre: `u123456789_jorling_db` (ajustar según tu usuario)
   - Usuario: `u123456789_jorling`
   - Contraseña: (crear una segura)

### B. Ejecutar Scripts SQL
1. Abrir phpMyAdmin desde el panel de Hostinger
2. Seleccionar tu base de datos
3. Ir a "Importar"
4. Subir y ejecutar: `scripts/create-database.sql`
5. Subir y ejecutar: `scripts/seed-data.sql`

## 📁 PASO 3: SUBIR ARCHIVOS

### Opción A: File Manager (Recomendado)
1. Panel Hostinger → "Administrador de archivos"
2. Ir a carpeta `public_html`
3. Subir el archivo ZIP del proyecto
4. Extraer todos los archivos
5. Mover archivos de la subcarpeta a la raíz de `public_html`

### Opción B: FTP
1. Usar cliente FTP (FileZilla)
2. Conectar con credenciales de Hostinger
3. Subir archivos a `/public_html/`

## ⚙️ PASO 4: CONFIGURAR VARIABLES DE ENTORNO

Crear archivo `.env.local` en la raíz con:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://jorlingseguidores.xyz
DB_HOST=localhost
DB_USER=u123456789_jorling
DB_PASSWORD=TuPasswordMySQL
DB_NAME=u123456789_jorling_db
DB_PORT=3306
NEXTAUTH_SECRET=jorling_secret_2024_xyz
\`\`\`

## 🔧 PASO 5: CONFIGURAR NODE.JS (Si tienes plan Business+)

1. Panel Hostinger → "Node.js"
2. Crear nueva aplicación Node.js
3. Seleccionar versión 18.x o superior
4. Directorio: `/public_html`
5. Archivo de inicio: `server.js`

## 📧 PASO 6: CONFIGURAR EMAIL

1. Panel Hostinger → "Cuentas de email"
2. Crear: `noreply@jorlingseguidores.xyz`
3. Configurar SMTP en `.env.local`

## 🔒 PASO 7: CONFIGURAR SSL

1. Panel Hostinger → "SSL"
2. Activar "Let's Encrypt" (gratuito)
3. Forzar HTTPS

## 🧪 PASO 8: TESTING

Verificar que funcione:
- ✅ https://jorlingseguidores.xyz (página principal)
- ✅ https://jorlingseguidores.xyz/services
- ✅ https://jorlingseguidores.xyz/login
- ✅ Conexión a base de datos
- ✅ Formularios funcionando

## 🚨 SOLUCIÓN DE PROBLEMAS COMUNES

### Error: "Cannot connect to database"
- Verificar credenciales en `.env.local`
- Comprobar que la base de datos existe
- Verificar permisos del usuario MySQL

### Error: "Module not found"
- Ejecutar `npm install` en el directorio
- Verificar que Node.js esté habilitado

### Error 500: Internal Server Error
- Revisar logs en panel de Hostinger
- Verificar permisos de archivos (755 para carpetas, 644 para archivos)

### Página en blanco
- Verificar que los archivos estén en `public_html`
- Comprobar que `index.html` o `page.tsx` existan

## 📞 SOPORTE

Si necesitas ayuda:
1. Panel Hostinger → "Soporte"
2. Chat en vivo 24/7
3. Mencionar que es una aplicación Next.js

## 🔄 ACTUALIZACIONES FUTURAS

Para actualizar el sitio:
1. Hacer cambios localmente
2. Comprimir archivos modificados
3. Subir y reemplazar en Hostinger
4. Limpiar caché si es necesario
