# 🚀 Portal de Gestión de Solicitudes (GS) - Frontend

## 🛠️ Flujo de Trabajo y Entornos
- **Rama `main`**: Producción. Contiene el código estable desplegado.
- **Rama `dev`**: **Pre-producción**. Aquí se integran los cambios críticos y nuevas funcionalidades para pruebas finales antes de pasar a producción.

Este proyecto es el front-end para el sistema de balanceo y gestión de solicitudes, construido con **Astro** y **JavaScript/TypeScript** vanila para un rendimiento optimizado y una experiencia de usuario fluida.

## 🚀 Demo en Vivo
Puedes acceder a la versión de producción aquí: [https://balanceo-solicitudes.vercel.app/](https://balanceo-solicitudes.vercel.app/)

## 📋 Características Principales

- **Dashboard**: Visualización de métricas y estadísticas mediante gráficos dinámicos.
- **Gestión de Solicitudes**: Creación y cancelación de solicitudes con balanceo de carga automático.
- **Configuración de Carga**: Ajuste de reglas de Round Robin (Proporción y Diferencia).
- **Reportes**: Generación de reportes tabulares con filtros por año/estado y exportación a **HTML** y **CSV**.
- **Sistema de Notificaciones**: Feedback instantáneo mediante Toasts.
- **Seguridad**: Protección de rutas y manejo de sesión expirada.

## 🔑 Credenciales de Acceso (Entorno de Prueba)

Para probar las funcionalidades de balanceo y reportes, puede utilizar los siguientes usuarios:

| Usuario | Nombre Completo | Contraseña | Rol |
| :--- | :--- | :--- | :--- |
| `jperez` | Juan Pérez | `secret123` | Administrador / Usuario A |
| `mlopez` | María López | `secret123` | Administrador / Usuario B |
| `crodriguez` | Carlos Rodríguez | `secret123` | Administrador / Usuario C |

## 🛠️ Instalación y Ejecución Local

### Requisitos previos
- Node.js (v18.0 o superior)
- npm o yarn

### Pasos
1. **Instalar dependencias**:
   ```bash
   npm install
   ```
2. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz con la URL de la API:
   ```env
   PUBLIC_API_URL=https://api-frost.onrender.com/api
   ```
3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El portal estará disponible en `http://localhost:4321`

## 📦 Comandos Disponibles

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con Hot Module Replacement. |
| `npm run build` | Genera el build optimizado para producción en la carpeta `/dist`. |
| `npm run preview` | Previsualiza el build de producción localmente. |

## 🎨 Diseño y AEstética
El portal utiliza un diseño basado en **Glassmorphism** y **Rich Aesthetics**, con una paleta de colores profesional, micro-animaciones suaves y una interfaz totalmente responsiva.

---
© 2026 Sistema de Gestión de Solicitudes (GS)
