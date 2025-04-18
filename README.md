# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
//explicacion de lo realiza la aplicacion
//Version actual de react
//compilador de paquetes (node y npm) Version
//http://localhost:{PORT}/
//http://localhost:{PORT}/invoice/{id}    explicar la ruta

# 🧾 Aplicación de Gestión de Facturas – Frontend (React + TypeScript + Vite)

## 1. 📌 ¿Qué realiza esta aplicación?

Esta aplicación permite visualizar, buscar y administrar facturas. Entre sus funcionalidades principales se encuentran:

- ✅ Subida de un archivo `.json` con facturas
- ✅ Visualización de una tabla con todas las facturas cargadas
- ✅ Búsqueda por número de factura, estado de la factura y estado de pago
- ✅ Acceso a una vista detallada para agregar Notas de Crédito (NC) a cada factura

El frontend consume una API REST desarrollada en .NET 8 (ver proyecto backend).

---

## 2. ⚛️ Versión de React utilizada

React **v19.0.0**  
(TypeScript + Vite)

---

## 3. ⚙️ Compilador y versiones de entorno

- **Node.js:** v22.14.0 
- **npm:** 11.2.0

---

## 4. URL base de la aplicacion

Una vez que el proyecto está corriendo localmente (por defecto con Vite):

**http://localhost:{PORT}/**

Aquí se carga la página principal donde podrás:

- Ver todas las facturas

- Buscar por número y estado

- Navegar a la vista para agregar notas de credito


**http://localhost:{PORT}/invoice/{id}**

Esta ruta lleva a la vista individual de una factura.
Desde ahi se puede ver la información completa de la factura seleccionada y agregar una nota de credito correspondiente.

---

## 5. ▶️ ¿Cómo ejecutar el proyecto?

**Requisitos previos**
- Tener instalado **Node.js** v22.14.0  
- Tener instalado **npm** v11.2.0

**Pasos**
- Instala las dependencias: npm install
- Ejecuta el proyecto: npm run dev

⚠️ Asegúrate de que el backend esté corriendo para que las llamadas a la API funcionen correctamente.
