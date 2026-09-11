# AGENTS.md

Sitio de catálogo de Zappipizza: Next.js 13 pages router, React 18, Tailwind, JavaScript (sin TS).
No hay backend, API routes, estado global, ni tests. Lee `README.md` para estructura y modelo de datos.

## Reglas de código

- **Sin punto y coma.** `semi: ["error", "never"]`. Es el error de lint más fácil de cometer.
- `arrow-parens: as-needed` → `pizza => ...`, no `(pizza) => ...`.
- ESLint airbnb: todo componente con props necesita `propTypes` (y `defaultProps` para las opcionales).
  Se omite en props no usadas, nunca se desactiva la regla.
- Componentes: `export default function Nombre() {}`. Un componente por archivo, extensión `.jsx`.
- Imports: `@components/*` y `@utils/*` para cruzar carpetas; relativos dentro de la misma pantalla.
  `@images/*` existe en `jsconfig.json` pero apunta a un `images/` inexistente y nadie lo usa —
  las imágenes van por ruta pública (`/images/...`).
- Estilos: solo clases Tailwind. Para clases condicionales, `clsx`; si hay que sobrescribir clases
  que llegan por prop, `cn` (`@utils/cn`, twMerge + clsx).
- Precios: siempre `formatPrice` (`@utils/formatPrice`, CLP `es-CL`).

Antes de dar por hecho un cambio: `yarn lint`. El hook `pre-push` corre `yarn lint --fix`.

## Dónde tocar qué

| Cambio | Archivo |
|---|---|
| Precios, pizzas, ingredientes, grupos | `data/*.json` — no hay que tocar componentes |
| Nueva ruta | `pages/x.jsx` (+ `getServerSideProps`) y `components/screens/X/index.jsx` |
| Link del menú de navegación | `routes` en `components/common/Navigation.jsx` (lo comparte el modal móvil) |
| Colores, fuentes | `tailwind.config.js` |
| Link de pedido | `components/common/UberEatsButton.jsx` (URL hardcodeada) |

Toda pantalla nueva se envuelve en `DefaultLayout` (aporta `Navigation` + `Footer`).

## Trampas conocidas

- **Los `id` de pizza no están en el JSON**: se generan con `idx + 1` en `getServerSideProps`
  y se muestran en la tarjeta. Reordenar o insertar en medio de `pizzas.json` renumera el menú.
- **Doble fuente de precio**: `/menu` toma precio del grupo (`PizzaGrid`), `/` lo calcula en
  `pages/index.jsx` con fallback a `pizza.price`/`pizza.priceXl`. Si agregas precios por pizza,
  arregla ambas rutas o unifica en un solo helper.
- **Swiper es web component**: `initSwiper()` (`components/common/Slider.jsx`) hace
  `document.querySelector('swiper-container')` — toma *el primero* del DOM. Un segundo slider en la
  misma página no se inicializa sin cambiar eso. Se llama desde un `useEffect` en `Promo`.
- Solo dos componentes tienen estado: `Navigation` (menú móvil) y `Promo` (init del slider).
  El resto es presentacional puro; no agregues estado sin necesidad real.
- `getServerSideProps` sobre JSON estático: se re-ejecuta en cada request sin datos dinámicos.
  Si hay que optimizar, es `getStaticProps`, pero no lo cambies "de paso".
- `'use client'` en `Navigation.jsx` es ruido del app router; este proyecto es pages router y no
  hace nada. No lo copies a componentes nuevos.
- Imágenes remotas: solo `i.imgur.com` está permitido en `next.config.js`. Otro dominio en
  `next/image` revienta en runtime.

## Verificación

No hay suite de tests y no hay que inventar una. Para validar un cambio: `yarn dev` y revisar la
ruta afectada (`/`, `/menu`, `/pizza-build`) más el layout móvil, que es la mitad del diseño
(breakpoint `md`). Cierra con `yarn lint`.
