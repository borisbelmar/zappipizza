# Zappipizza

Sitio de una pizzería (Pudahuel Sur, Chile). Catálogo estático, sin carro ni checkout:
el pedido sale del sitio hacia **UberEats** por link externo.

Next.js 13 (pages router) + React 18 + Tailwind. Sin backend, sin base de datos, sin API routes.

## Correr el proyecto

```bash
yarn          # instala (y husky install vía "prepare")
yarn dev      # http://localhost:3000
yarn build && yarn start
yarn lint     # next lint
```

`.husky/pre-push` corre `yarn lint --fix` antes de cada push.

## Rutas

| Ruta | Página | Pantalla | Datos |
|---|---|---|---|
| `/` | `pages/index.jsx` | `components/screens/Home` | 4 pizzas con `featured: true` |
| `/menu` | `pages/menu.jsx` | `components/screens/Menu` | `pizzas.json` + `groups.json` |
| `/pizza-build` | `pages/pizza-build.jsx` | `components/screens/PizzaBuild` | `build.json` |

Las tres usan `getServerSideProps` para leer JSON local (no hay fuente remota).

## Estructura

```
pages/               rutas + getServerSideProps; _app (Head global + globals.css), _document
components/
  layouts/           DefaultLayout: <Navigation> + children + <Footer>
  common/            Header, Navigation, MobileMenuModal, PizzaCard, Slider,
                     UberEatsButton, UberEatsLogo, Footer
  screens/
    Home/            Promo (slider) → DeliveryInfo → FeaturedPizzas → ServiceHours → Location
    Menu/            PizzaGrid: una sección por grupo
    PizzaBuild/      PriceIngredients (precio por nº de ingredientes),
                     BaseIngredients, ChoiceIngredients (vegetal/meat/sauce/special)
data/                pizzas.json, groups.json, build.json  ← todo el contenido editable
utils/               cn.js (twMerge + clsx), formatPrice.js (CLP, es-CL)
styles/globals.css   Tailwind + clase .container
public/images/       fotos de pizzas, ingredientes, slides
```

## Modelo de datos

**`groups.json`** — define los precios. Cada grupo: `id`, `name`, `slug`, `price` (32cm),
`priceTwice` (2x 32cm), `priceXl` (38cm).

**`pizzas.json`** — `name`, `ingredients` (string), `image`, `group` (fk a groups), `featured?`.
Sin `id`: se asigna en runtime con el índice del array (`idx + 1`) y es el número que se muestra
en la tarjeta. **Reordenar el JSON renumera el menú.**

**`build.json`** — `priceByQty[]` (3/4/5 ingredientes × 32cm/38cm × 1x/2x) e `ingredients`
con las categorías `base`, `vegetal`, `meat`, `sauce`, `special`, cada una con `title`,
`price` y `options[{ name, image }]`.

Cambiar precios o el menú = editar estos JSON. No hay CMS ni panel.

## Convenciones

- ESLint airbnb + next/core-web-vitals. **Sin punto y coma** (`semi: never`), `arrow-parens: as-needed`.
- Todos los componentes son funciones con `export default` y `propTypes` obligatorios (airbnb).
- Aliases de import (`jsconfig.json`): `@components/*`, `@utils/*`. Dentro de una misma pantalla
  se usan rutas relativas.
- Estilos solo con clases Tailwind; paleta `primary` (naranja), `secondary` (rojo), `dark`;
  fuentes `font-display` (Montserrat) y `font-body` (Roboto Slab).
- Precios siempre a través de `formatPrice`, nunca concatenando `$`.

## Deploy

Build estándar de Next (`yarn build`). `next.config.js` habilita `i.imgur.com` como dominio
remoto de `next/image` (hoy todas las imágenes son locales) y `reactStrictMode`.
