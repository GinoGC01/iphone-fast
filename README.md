# 📱 iPhone Fast — The Digital Atelier

**iPhone Fast** es una landing page premium diseñada para una boutique de iPhones de alta gama, construida con **Astro 6** y siguiendo la filosofía de diseño **"The Digital Atelier"**.

## ✨ Características Principales

- **Diseño "Digital Atelier"**: Estética minimalista, monocromática y sin líneas divisorias rígidas, utilizando capas de color y desenfoques para jerarquizar el contenido.
- **Arquitectura Basada en Datos**: Toda la información del sitio se gestiona desde un único archivo maestro (`src/config.js`). Cambiar un precio o un producto es tan fácil como editar un objeto JSON.
- **WhatsApp Chat Experience**: Integración de una ventana de chat personalizada que mejora la conversión antes de redirigir al contacto directo.
- **Glassmorphism & Animaciones**: Barra de navegación con efecto cristal y animaciones sutiles que aportan una sensación de lujo tecnológico.
- **SEO Ready**: Estructura semántica completa para un posicionamiento óptimo.

## 🚀 Inicio Rápido

### 1. Clonar e Instalar
```bash
git clone https://github.com/GinoGC01/iphone-fast.git
cd iphone-fast
npm install
```

### 2. Desarrollo Local
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:4321`.

### 3. Construir para Producción
```bash
npm run build
```

## ⚙️ Configuración

Para personalizar el contenido del sitio, edita el archivo:
`src/config.js`

Aquí podrás modificar:
- Nombre del sitio y SEO tags.
- Número de WhatsApp y mensaje inicial.
- Catálogo de productos (Novedades y Reacondicionados).
- Secciones de beneficios y enlaces legales.

## 📂 Estructura del Proyecto

```text
/
├── public/        # Recursos estáticos (Logos, Imágenes de productos)
├── src/
│   ├── layouts/   # Layout.astro (Design System & Tokens)
│   ├── pages/     # index.astro (Página principal)
│   └── config.js  # FUENTE DE VERDAD (Configuración maestra)
└── package.json
```

## 🎨 Design System

El proyecto utiliza variables CSS globales para tokens de diseño:
- `--primary`: El tono oscuro de titanio para énfasis.
- `--bg-color`: El tono claro de galería para fondos.
- `--roundness`: Curvatura de 12px para una sensación moderna y suave.

---
© 2026 iPhone Fast. Todos los derechos reservados.
