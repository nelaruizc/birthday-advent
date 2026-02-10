# Birthday Advent 🎂

Web app **mobile-first** inspirada en un calendario de adviento, adaptada a cumpleaños con 11 regalos y vista de detalle por regalo.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- React Router (`HashRouter`) para compatibilidad simple con GitHub Pages
- `localStorage` para persistencia de regalos abiertos

## Funcionalidades

- Diseño estilo tarjeta flotante sobre fondo azul oscuro con patrón geométrico.
- Primera pantalla con hero y botón **Enter**.
- Segunda pantalla con:
  - título “Your Daily Task Adventure”
  - chip de fecha
  - contador de **días / horas / minutos** hacia el cumpleaños
  - grid de 11 regalos
- Tercera pantalla de detalle (`/gift/:id`) a pantalla completa.
- Estados de tiles: locked, unlocked, opened.
- Persistencia local de regalos abiertos.

## Fechas configurables

Revisa estos archivos para personalizar:

- `src/utils/countdown.ts`
  - `BIRTHDAY_DATE = 2026-03-11T00:00:00+01:00`
- `src/utils/unlock.ts`
  - `START_DATE`
  - `ALL_UNLOCKED`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build producción

```bash
npm run build
npm run preview
```

## Deploy en GitHub Pages (recomendado con GitHub Actions)

Este repo ya incluye workflow en `.github/workflows/deploy.yml`.

1. Sube el proyecto a GitHub en un repo llamado `birthday-advent` (o ajusta `base` en `vite.config.ts`).
2. En GitHub, ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Source: GitHub Actions**.
4. Haz push a `main`.
5. El workflow compila y publica automáticamente.

### Si el nombre del repo cambia

Actualiza `base` en `vite.config.ts`:

```ts
base: '/TU-REPO/'
```

Con `HashRouter`, las rutas internas funcionan sin configuración extra del servidor.
