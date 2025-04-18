# 🧾 Aplicación de Gestión de Facturas – Frontend (React + TypeScript + Vite)

### 🧱 Patrón de diseño aplicado en el Frontend

El frontend sigue una arquitectura basada en componentes (**Component-Based Architecture**) y separación de responsabilidades (**Separation of Concerns**), distribuyendo la lógica en:

- `components/`: Componentes visuales reutilizables como formularios y listas.
- `pages/`: Vistas que combinan componentes y representan pantallas completas.
- `services/`: Encapsula llamadas HTTP al backend (API REST) y lógica relacionada.
- `types/`: Define estructuras de datos fuertemente tipadas para garantizar seguridad y mantenibilidad usando TypeScript.

Esta estructura mejora la escalabilidad y claridad del código, permitiendo un desarrollo mantenible y fácil de extender.

---

## 1. 📌 ¿Qué realiza esta aplicación?

Esta aplicación permite visualizar, buscar y administrar facturas. Entre sus funcionalidades principales se encuentran:

- ✅ Subida de un archivo `.json` con facturas.
- ✅ Visualización de una tabla con todas las facturas cargadas.
- ✅ Búsqueda por número de factura, estado de la factura y estado de pago.
- ✅ Acceso a una vista detallada para agregar Notas de Crédito (NC) a cada factura.

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

- Ver todas las facturas.

- Buscar por número y estado.

- Navegar a la vista para agregar notas de credito.


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
