# Lanzamiento — wlmaker 1.11.1

El equipo de **Blondon Boys** anuncia **wlmaker-cli v1.11.1**.

Versión de pulido sobre el flujo de release: **notas IR/RC más flexibles** y una espera que se ve.

> Nota: esta es una entrada del blog **solo para el CLI**. La extensión VIBE sigue en 1.2.1.

---

## Qué cambió

Tres ajustes, todos en el editor de notas de release:

| Cambio | Qué hace |
| --- | --- |
| **Mantener tags** | Checkbox (desmarcado por defecto) para dejar `[FE]`, `[CROSS]`, `[BR]`, etc. en la línea final |
| **Loader de lanzamiento** | La animación de PR Doctor ahora corre mientras wlmaker busca tags y recolecta PRs |
| **NO TICKET filtrable** | `NO TICKET` se mapea a la etiqueta `NO-TICKET` para que aparezca como chip de filtro |

---

## Mantener tags

Antes, la línea final salía siempre limpia: `WR-6619 → Copiar número do pedido`.

Con **Mantener tags** marcado, la línea conserva sus etiquetas:

```
WR-6619 → [FE][BR] Copiar número do pedido
NO TICKET → [BR] change biometric bundle id
```

Viene **desmarcado**: el comportamiento por defecto no cambia.

---

## Loader de lanzamiento

La espera silenciosa antes de elegir app (fetch de tags y flags) y la recolección de PRs ahora muestran la animación `LOADING` que ya usaba PR Doctor, con el conteo al terminar: `Found N note(s)`.

---

## Instalación

```bash
pnpm add -g wlmaker@latest
# o
npm i -g wlmaker@latest
```

**Notas de release a tu manera.**

Saludos,
**Blondon Boys**
