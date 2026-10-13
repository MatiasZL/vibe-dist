# Launch landing (multi-versión)

## Cómo agregar VIBE 1.x.y

1. Copia el bloque de `1.1.4` en `data/releases.js` (arriba del array = más reciente).
2. Pon `latest: true` solo en la nueva; quítalo de la anterior.
3. Imágenes nuevas: o en la raíz de `docs/launch/`, o en `media/1.x.y/` y setea `mediaBase: "media/1.x.y/"`.
4. Abre `index.html` → el selector y `?v=1.x.y` ya enlazan solas.

No hace falta editar `index.html` ni `app.js` para un release normal.

## URLs

- Actual (catálogo): ver `latest` en `../data/releases.js` (hoy `1.2.0`)
- Esta entrada: `index.html?v=1.1.4`
