# Frontend Qidathon

Frontend del proyecto Qidathon: dashboard (AINara Dashboard) para gestión de casos, comunicaciones, notas personales y resúmenes con IA.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** – build y dev server
- **Tailwind CSS v4** – estilos
- **TanStack Query (React Query)** – datos y caché
- **Axios** – peticiones HTTP
- **React Router v7** – rutas
- **Lucide React** – iconos

## Requisitos

- Node.js 18+
- npm (o pnpm/yarn)

## Instalación

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raíz con:

```env
VITE_API_BASE_URL=https://tu-api-backend.com
```

Si no se define, las peticiones se harán a la misma origen.

## Scripts

| Comando       | Descripción                |
|---------------|----------------------------|
| `npm run dev` | Servidor de desarrollo     |
| `npm run build` | Build de producción (TypeScript + Vite) |
| `npm run preview` | Vista previa del build     |
| `npm run lint` | Ejecutar ESLint            |

## Estructura del proyecto

```
src/
├── components/
│   ├── dashboard/     # Componentes del dashboard (comunicación, notas, resumen IA, etc.)
│   ├── layout/        # Layout, header, logo
│   └── ui/            # Componentes reutilizables (badges, etc.)
├── lib/               # Axios config, query-client
├── pages/             # Páginas (dashboard, settings)
├── services/          # Llamadas API (notes, communications, summary)
├── types/             # Tipos e interfaces compartidos
├── App.tsx
├── main.tsx
└── index.css
```

## Rutas

- `/` – Dashboard principal
- `/settings` – Ajustes

## API

El frontend espera un backend que exponga al menos:

- `GET/POST /api/notes` – notas por `case_id`
- `GET/POST /api/whatsapp-chats` – chats de WhatsApp por `case_id`
- `GET /api/summary` – resumen por `case_id` (timeout 30s)

La base URL se configura con `VITE_API_BASE_URL`. Los errores de API se normalizan en el interceptor de Axios para mostrar mensajes amigables.

##Screenshots
<img width="1463" height="1288" alt="image" src="https://github.com/user-attachments/assets/57468352-daab-48b5-a1f3-60120c0cdc01" />


## Licencia

Proyecto privado.
