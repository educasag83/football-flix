# ⚽ Football Flix

Mi plataforma personal de fútbol con estilo de streaming (tipo Netflix). El plato fuerte son los **partidos históricos**, organizados en filas por temática: Mundiales, Champions League, Copa América, Eurocopa, El Clásico, Superclásico Boca–River, remontadas, finales por penaltis…

## Qué tiene ya

- **Portada** con partidos destacados que van rotando y filas deslizables por colección.
- **Ficha de cada partido**: marcador, fecha, estadio, figuras, sinopsis y botones para ir al vídeo.
- **Páginas de colección** con filtro por décadas.
- **Buscador** por equipo, jugador, año, estadio o apodo del partido ("Maracanazo", "La Décima"…).
- **Mi lista** y **marcar como visto**, guardados en tu navegador.
- **Mis equipos**: eliges tus favoritos y aparece una fila con sus partidos en la portada.
- **Alineaciones** con dorsales sobre el campo en la ficha de los partidos que las tienen cargadas (`src/data/lineups.ts`).
- **Equipos revelación y de culto**: el Mallorca de Cúper, el Villarreal de Pellegrini, la Atalanta de Gasperini y más (`src/data/cultTeams.ts`).
- **Wonderkids**: ficha de cada promesa con reseña, puntos fuertes, perfil estilo FM en radar, proyección, lista de seguimiento y estadísticas por temporada que puedes ir cargando (`src/data/wonderkids.ts`).
- **Modo sin spoilers**: oculta todos los marcadores para ver un partido sin saber cómo terminó.
- Secciones preparadas (próximamente): **Resultados y calendario**, **Wonderkids** de Football Manager y **Estadísticas de jugadores**.

## De dónde salen los vídeos

La web no aloja vídeos: enlaza a la fuente original. Cada partido tiene un campo `videoUrl`; si está relleno, el botón lleva directo al partido completo (por ejemplo una página de `https://footballia.eu/es/partidos-completos/...`). Si está vacío, la ficha ofrece una búsqueda en YouTube y la sección de Footballia de esa competición.

## Miniaturas

Cada tarjeta muestra una imagen grande del partido, al estilo de los portales de fútbol. El orden es:

1. La imagen que pegues desde la ficha con el botón **🖼 Poner miniatura** (se guarda en tu navegador).
2. El campo `thumbnail` del partido en `src/data/matches.ts`, si tiene una URL de imagen.
3. La miniatura del vídeo, si `videoUrl` es un enlace de YouTube.
4. Si no hay nada, una ilustración de un campo con los colores y escudos de ambos equipos.

## Cómo añadir un partido

Abre `src/data/matches.ts`, copia un partido, cambia los datos y pon en `collections` las filas donde quieres que aparezca. Las filas (y su orden en la portada) están en `src/data/collections.ts`. Para que un partido salga en la portada grande, añade `featured: true`.

## Probarlo en tu ordenador

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev      # abre http://localhost:5173
```

## Publicarlo gratis en GitHub Pages

1. En GitHub ve a **Settings → Pages** y en *Source* elige **GitHub Actions**.
2. Cada vez que se fusione algo en `main`, el flujo `.github/workflows/deploy.yml` construye y publica la web en `https://educasag83.github.io/football-flix/`.

## Próximos pasos

- Resultados y calendario con una API de fútbol (football-data.org o API-Football tienen planes gratuitos) y enlaces a BeSoccer, SofaScore, Transfermarkt y ceroacero.
- Cargar automáticamente las estadísticas de los wonderkids desde una API.
- Fichas y comparador de estadísticas de jugadores.
- Ampliar el catálogo y rellenar los enlaces directos a los partidos completos.

Hecho con React + TypeScript + Vite.
