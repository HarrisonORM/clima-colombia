# 🚀 Instrucciones para Desplegar en GitHub Pages

## Pasos para publicar tu aplicación:

### 1️⃣ Instalar gh-pages
Abre la terminal en VS Code y ejecuta:
```bash
npm install --save-dev gh-pages
```

### 2️⃣ Configurar tu repositorio de GitHub

1. Ve a GitHub (https://github.com) e inicia sesión
2. Crea un **nuevo repositorio** con el nombre: `clima-colombia`
3. **NO inicialices con README** (tu proyecto ya tiene archivos)
4. Copia la URL del repositorio (algo como: `https://github.com/TU_USUARIO/clima-colombia.git`)

### 3️⃣ Actualizar configuración con tu usuario

1. Abre `package.json`
2. En la línea del `homepage`, reemplaza `TU_USUARIO_GITHUB` con tu usuario real de GitHub
   ```json
   "homepage": "https://harry.github.io/clima-colombia"
   ```
   (Reemplaza `harry` con tu usuario de GitHub)

3. Abre `vite.config.js`
4. Si tu repositorio tiene otro nombre diferente a `clima-colombia`, actualiza el `base`:
   ```js
   base: '/nombre-de-tu-repo/'
   ```

### 4️⃣ Subir el código a GitHub

En la terminal, ejecuta estos comandos **uno por uno**:

```bash
git init
git add .
git commit -m "Primera versión - Aplicación de clima Colombia"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/clima-colombia.git
git push -u origin main
```

**IMPORTANTE**: Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### 5️⃣ Desplegar la aplicación

Ejecuta este comando para construir y desplegar:
```bash
npm run deploy
```

Este comando:
- Construye tu aplicación para producción
- Crea una rama `gh-pages` automáticamente
- Sube los archivos compilados a GitHub

### 6️⃣ Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú izquierdo, busca **Pages**
4. En **Source**, selecciona la rama `gh-pages`
5. Click en **Save**

### 7️⃣ ¡Listo! 🎉

Tu aplicación estará disponible en:
```
https://TU_USUARIO.github.io/clima-colombia
```

**Nota**: Puede tomar 2-5 minutos para que GitHub Pages procese y publique tu sitio la primera vez.

---

## 📝 Actualizaciones futuras

Cada vez que hagas cambios y quieras actualizar la página:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
npm run deploy
```

---

## ⚠️ Problemas comunes

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/clima-colombia.git
```

### Error: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### La página muestra en blanco
- Verifica que el `base` en `vite.config.js` coincida con el nombre de tu repositorio
- Verifica que el `homepage` en `package.json` tenga tu usuario correcto

---

## 🔗 Compartir tu aplicación

Una vez desplegada, comparte el link:
```
https://TU_USUARIO.github.io/clima-colombia
```

¡Cualquier persona con el link podrá ver tu aplicación del clima! 🌤️
