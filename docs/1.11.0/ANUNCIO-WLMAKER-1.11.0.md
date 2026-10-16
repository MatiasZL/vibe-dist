# Lanzamiento — wlmaker 1.11.0

El equipo de **Blondon Boys** anuncia **wlmaker-cli v1.11.0**.

Novedad principal: **PR Doctor** — corre los chequeos de CI **solo en los paquetes que tocaste**, en lugar del monorepo entero.

> Nota: esta es una entrada del blog **solo para el CLI**. La extensión VIBE sigue en 1.2.1.

---

## Qué hace

Los mismos tres pasos del workflow de CI, con el mismo alcance por paquete:

| Paso | Alcance |
| --- | --- |
| **Formato** | Una pasada sobre todo el repositorio |
| **Análisis estático** | Una pasada sobre todo el repositorio |
| **Tests** | Por paquete seleccionado, igual que CI |

Formato y análisis corren una sola vez (un arranque del analyzer rinde más que N acotados). Solo los tests son selectivos.

**Offline por diseño:** nunca hace fetch, pull ni cambia el estado de git. Compara contra tu `origin/master` local.

---

## Modos

Desde el menú de `wlmaker` → **PR Doctor**, o directo con `wl pr-doctor`:

- **Paquetes cambiados** — por defecto, contra `origin/master`
- **Cambios sin commitear** — lo que estás editando ahora
- **Paquete(s) específico(s)** — eliges del workspace
- **Todos los paquetes** — corrida completa estilo CI

```bash
wl pr-doctor --uncommitted
wl pr-doctor -p cart
wl pr-doctor --help
```

Al fallar, el reporte Markdown se abre en tu editor.

---

## Instalación

```bash
pnpm add -g wlmaker@latest
# o
npm i -g wlmaker@latest
```

**Formato, análisis y tests solo de lo que tocaste.**

Saludos,
**Blondon Boys**
