# 🚀 INSTALACIÓN COMPLETA EN HOSTINGER
# Para jorlingseguidores.xyz

## 📋 PASO 1: PREPARAR ARCHIVOS

1. **Descargar todos los archivos** del proyecto
2. **Crear una carpeta** llamada "jorling-seguidores"
3. **Copiar todos los archivos** a esta carpeta
4. **Comprimir en ZIP** toda la carpeta

## 🗄️ PASO 2: CONFIGURAR BASE DE DATOS

### A. Crear Base de Datos en Hostinger
1. Accede al **Panel de Hostinger**
2. Ve a **"Bases de datos" → "Gestión"**
3. Clic en **"Crear nueva base de datos"**
4. Configurar:
   - **Nombre de BD:** `u123456789_jorling_db` (ajustar según tu usuario)
   - **Usuario:** `u123456789_jorling`
   - **Contraseña:** (crear una segura y anotarla)

### B. Ejecutar Scripts SQL
1. Clic en **"Acceder a phpMyAdmin"**
2. Seleccionar tu base de datos
3. Ir a la pestaña **"Importar"**
4. Subir archivo: `scripts/create-database.sql`
5. Clic en **"Continuar"**
6. Repetir con: `scripts/seed-data.sql`

## 📁 PASO 3: SUBIR ARCHIVOS AL HOSTING

### Usando File Manager (Recomendado)
1. Panel Hostinger → **"Administrador de archivos"**
2. Navegar a la carpeta **`public_html`**
3. **Eliminar** cualquier archivo existente (como index.html de bienvenida)
4. **Subir** el archivo ZIP del proyecto
5. **Extraer** el archivo ZIP
6. **Mover** todos los archivos de la subcarpeta a la raíz de `public_html`

### Estructura final en public_html:
\`\`\`
public_html/
├── index.html
├── services.html
├── login.html
├── config.php
├── scripts/
│   ├── create-database.sql
│   └── seed-data.sql
└── (otros archivos...)
\`\`\`

## ⚙️ PASO 4: CONFIGURAR ARCHIVO CONFIG.PHP

1. Abrir el archivo **`config.php`** en el File Manager
2. **Editar** las siguientes líneas con tus datos reales:

\`\`\`php
define('DB_HOST', 'localhost');
define('DB_USER', 'u123456789_jorling'); // Tu usuario MySQL real
define('DB_PASS', 'TuPasswordMySQL123'); // Tu contraseña MySQL real
define('DB_NAME', 'u123456789_jorling_db'); // Tu nombre de BD real
\`\`\`

## 🔧 PASO 5: CONFIGURAR PERMISOS

1. En el **File Manager**, seleccionar todos los archivos
2. Clic derecho → **"Permisos"**
3. Establecer:
   - **Archivos:** 644 (rw-r--r--)
   - **Carpetas:** 755 (rwxr-xr-x)

## 📧 PASO 6: CONFIGURAR EMAIL (Opcional)

1. Panel Hostinger → **"Cuentas de email"**
2. Crear cuenta: **`noreply@jorlingseguidores.xyz`**
3. Anotar la contraseña para usar en `config.php`

## 🔒 PASO 7: ACTIVAR SSL

1. Panel Hostinger → **"SSL"**
2. Activar **"Let's Encrypt SSL"** (gratuito)
3. Marcar **"Forzar HTTPS"**

## 🧪 PASO 8: PROBAR EL SITIO

1. Visitar: **https://jorlingseguidores.xyz**
2. Verificar que carga la página principal
3. Probar navegación entre páginas
4. Verificar formularios

## ✅ CHECKLIST DE VERIFICACIÓN

- [ ] Base de datos creada y configurada
- [ ] Scripts SQL ejecutados correctamente
- [ ] Archivos subidos a public_html
- [ ] config.php configurado con datos reales
- [ ] Permisos de archivos establecidos
- [ ] SSL activado y funcionando
- [ ] Página principal carga correctamente
- [ ] Formularios funcionan
- [ ] Navegación entre páginas OK

## 🚨 SOLUCIÓN DE PROBLEMAS

### Error 403 Forbidden
- Verificar permisos de archivos (644) y carpetas (755)
- Asegurar que existe index.html en public_html
- Verificar configuración de .htaccess

### Error 500 Internal Server Error
- Revisar logs en Panel Hostinger → "Logs de errores"
- Verificar sintaxis de config.php
- Comprobar permisos de archivos

### Error de conexión a base de datos
- Verificar credenciales en config.php
- Comprobar que la base de datos existe
- Verificar que el usuario tiene permisos

### Página en blanco
- Verificar que los archivos están en public_html (no en subcarpeta)
- Comprobar que index.html existe
- Revisar logs de errores

## 📞 SOPORTE

Si necesitas ayuda:
1. **Chat de Hostinger:** Disponible 24/7 en el panel
2. **Soporte técnico:** Menciona que es un sitio HTML+PHP
3. **Documentación:** https://support.hostinger.com

## 🔄 ACTUALIZACIONES FUTURAS

Para actualizar el sitio:
1. Hacer cambios en archivos locales
2. Comprimir archivos modificados
3. Subir vía File Manager
4. Reemplazar archivos existentes
5. Verificar funcionamiento

¡Tu sitio estará listo en https://jorlingseguidores.xyz! 🎉
