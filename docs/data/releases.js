/**
 * Catálogo de releases para la landing.
 *
 * Es un BLOG DE MEJORAS de los dos productos:
 *   · VIBE     — la extensión de VS Code
 *   · wlmaker  — el CLI
 * Cada release es una entrada: qué cambió, dónde, y cómo instalarlo.
 *
 * Idioma: español neutro (tú). Sin voseo ni argentinismos.
 *
 * Para agregar una versión nueva:
 *  1. Copia un bloque en RELEASES (arriba = más reciente).
 *  2. Marca latest: true solo en la nueva.
 *  3. Pon las imágenes en mediaBase (carpeta o prefijo).
 *  4. No hace falta tocar index.html.
 *
 * Regla de las imágenes: cada archivo se usa UNA sola vez en la página. Si una
 * captura ya está en una sección, no la repitas en otra 
 */
window.VIBE_LAUNCH = {
  "brand": "Blondon Boys",
  "brandLogo": "blondon-boys-logo.webp",
  "brandSubtitle": "Mejoras de la extensión y el CLI",
  "RELEASES": [
    {
      "id": "1.11.2",
      "wlmaker": "1.11.2",
      "date": "2026-10-19",
      "latest": true,
      "mediaBase": "../1.2.0/",
      "heroImage": "shot-ir-viewer.webp",
      "heroAlt": "Editor de notas de release IR/RC en wlmaker 1.11.2",
      "kicker": "Corrección",
      "headline": "Las mejoras de 1.11.1",
      "headlineEm": "ya en el CLI",
      "lead": "wlmaker 1.11.2 corrige el paquete: Mantener tags, chips NO-TICKET y el loader de lanzamiento llegan al CLI instalado.",
      "ctas": [
        {
          "href": "#que-es",
          "label": "Ver el fix",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Actualizar wlmaker",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "que-es",
          "kicker": "Esta versión · wlmaker 1.11.2",
          "title": "Lo anunciado en 1.11.1, ahora sí en el paquete",
          "paragraphs": [
            "<code>wlmaker@1.11.1</code> se publicó con un build desactualizado: Mantener tags, chips NO-TICKET y el loader no llegaban al CLI instalado.",
            "1.11.2 vuelve a publicar el build correcto. Actualiza y las tres mejoras de 1.11.1 quedan disponibles."
          ],
          "bullets": [
            "<strong>Mantener tags</strong> — checkbox en el editor de notas IR/RC",
            "<strong>NO TICKET filtrable</strong> — chip <code>NO-TICKET</code> en Filters",
            "<strong>Loader de lanzamiento</strong> — animación mientras se buscan tags y se recolectan PRs"
          ],
          "note": "La extensión <strong>VIBE</strong> no cambia en esta entrada: sigue en 1.2.1."
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza el CLI",
          "paragraphs": [
            "Una reinstalación del paquete <strong>wlmaker</strong> alcanza."
          ],
          "codes": [
            {
              "label": "pnpm",
              "code": "pnpm add -g wlmaker@latest"
            },
            {
              "label": "npm",
              "code": "npm i -g wlmaker@latest"
            }
          ],
          "hintHtml": "Abre <code>wlmaker</code> → <strong>IR Release</strong> o <strong>RC Release</strong> y mira el editor de notas.",
          "ctas": [
            {
              "href": "https://www.npmjs.com/package/wlmaker",
              "label": "Ver en npm",
              "primary": true
            }
          ]
        }
      ],
      "footerHtml": "<strong>Corrección en wlmaker.</strong><br />Las mejoras de 1.11.1, ya en el CLI.<br /><br /><strong>Blondon Boys</strong>"
    },
    {
      "id": "1.11.1",
      "wlmaker": "1.11.1",
      "date": "2026-10-19",
      "latest": false,
      "mediaBase": "../1.2.0/",
      "heroImage": "shot-ir-viewer.webp",
      "heroAlt": "Editor de notas de release IR/RC en wlmaker 1.11.1",
      "kicker": "Nuevo en el CLI",
      "headline": "Notas de release",
      "headlineEm": "a tu manera",
      "lead": "wlmaker 1.11.1 pule el editor de notas IR/RC: mantén los tags en la línea final, NO TICKET pasa a ser filtro y aparece un loader mientras wlmaker espera.",
      "ctas": [
        {
          "href": "#que-es",
          "label": "Ver qué cambió",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Actualizar wlmaker",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "que-es",
          "kicker": "Esta versión · wlmaker 1.11.1",
          "title": "Tres ajustes al editor de notas",
          "paragraphs": [
            "wlmaker 1.11.1 es una versión de pulido sobre el flujo de release: menos fricción al armar las notas IR/RC y una espera que ahora se ve.",
            "Todo el comportamiento por defecto se mantiene igual: los cambios son opt-in o puro feedback visual."
          ],
          "bullets": [
            "<strong>Mantener tags</strong> — checkbox para dejar <code>[FE]</code>, <code>[CROSS]</code>, <code>[BR]</code>, etc. en la línea final",
            "<strong>Loader de lanzamiento</strong> — la animación de PR Doctor mientras se buscan tags y se recolectan PRs",
            "<strong>NO TICKET filtrable</strong> — <code>NO TICKET</code> se mapea a la etiqueta <code>NO-TICKET</code> para mostrarse como chip"
          ],
          "note": "La extensión <strong>VIBE</strong> no cambia en esta entrada: sigue en 1.2.1."
        },
        {
          "id": "tags",
          "kicker": "Editor de notas",
          "title": "Mantener tags, cuando lo necesites",
          "paragraphs": [
            "Antes la línea final salía siempre limpia: <code>WR-6619 → Copiar número do pedido</code>.",
            "Con <strong>Mantener tags</strong> marcado, la línea conserva sus etiquetas. Viene <strong>desmarcado por defecto</strong>: si no lo tocas, nada cambia."
          ],
          "bullets": [
            "<code>WR-6619 → [FE][BR] Copiar número do pedido</code>",
            "<code>NO TICKET → [BR] change biometric bundle id</code>",
            "<code>NO-TICKET</code> se omite del prefijo: ya se muestra como etiqueta izquierda"
          ],
          "note": "El cambio aplica a las notas IR y RC, y también al traducir seleccionados."
        },
        {
          "id": "loader",
          "kicker": "Feedback visual",
          "title": "El loader mientras wlmaker trabaja",
          "paragraphs": [
            "La espera silenciosa antes de elegir app (fetch de tags y flags) y la recolección de PRs ahora muestran la animación <code>LOADING</code> que ya usaba <strong>PR Doctor</strong>.",
            "Al terminar, el conteo aparece como línea de éxito: <code>Found N note(s)</code>."
          ]
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza el CLI",
          "paragraphs": [
            "Todo esto viene dentro del paquete <strong>wlmaker</strong>: no hay pasos extra."
          ],
          "codes": [
            {
              "label": "pnpm",
              "code": "pnpm add -g wlmaker@latest"
            },
            {
              "label": "npm",
              "code": "npm i -g wlmaker@latest"
            }
          ],
          "hintHtml": "Abre <code>wlmaker</code> → <strong>IR Release</strong> o <strong>RC Release</strong> y mira el editor de notas.",
          "ctas": [
            {
              "href": "https://www.npmjs.com/package/wlmaker",
              "label": "Ver en npm",
              "primary": true
            }
          ]
        }
      ],
      "footerHtml": "<strong>Nuevo en wlmaker.</strong><br />Notas de release a tu manera.<br /><br /><strong>Blondon Boys</strong>"
    },
    {
      "id": "1.11.0",
      "wlmaker": "1.11.0",
      "date": "2026-10-16",
      "latest": false,
      "mediaBase": "../1.2.0/",
      "heroImage": "vibe-1.2.0-cli.webp",
      "heroAlt": "wlmaker 1.11.0 — PR Doctor",
      "kicker": "Nuevo en el CLI",
      "headline": "PR Doctor",
      "headlineEm": "solo lo que tocaste",
      "lead": "wlmaker 1.11.0 suma PR Doctor: corre formato, análisis y tests de los paquetes que cambió tu rama, en lugar del monorepo completo.",
      "ctas": [
        {
          "href": "#que-es",
          "label": "Ver qué hace",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Actualizar wlmaker",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "que-es",
          "kicker": "Esta versión · wlmaker 1.11.0",
          "title": "Los tres pasos de CI, en el paquete correcto",
          "paragraphs": [
            "PR Doctor corre los mismos chequeos que el workflow de CI, pero <strong>solo en los paquetes que tocaste</strong> — en vez de esperar el monorepo entero.",
            "Formato y análisis estático corren una vez sobre todo el repositorio (un arranque del analyzer rinde más que N acotados). Solo los tests son selectivos."
          ],
          "bullets": [
            "<strong>Formato</strong> — una pasada sobre el repo",
            "<strong>Análisis</strong> — una pasada sobre el repo",
            "<strong>Tests</strong> — por paquete seleccionado, igual que CI"
          ],
          "note": "Es <strong>offline por diseño</strong>: nunca hace fetch, pull ni toca el estado de git. Compara contra tu <code>origin/master</code> local."
        },
        {
          "id": "modos",
          "kicker": "Cuatro modos",
          "title": "Elige qué revisar",
          "paragraphs": [
            "Desde el menú de <code>wlmaker</code> → <strong>PR Doctor</strong>, o directo con <code>wl pr-doctor</code>."
          ],
          "bullets": [
            "<strong>Paquetes cambiados</strong> — por defecto, contra <code>origin/master</code>",
            "<strong>Cambios sin commitear</strong> — lo que estás editando ahora",
            "<strong>Paquete(s) específico(s)</strong> — eliges del workspace",
            "<strong>Todos los paquetes</strong> — corrida completa estilo CI"
          ],
          "note": "Directo, sin prompts: <code>wl pr-doctor --uncommitted</code> · <code>wl pr-doctor -p cart</code> · <code>wl pr-doctor --help</code>. Al fallar, el reporte se abre en tu editor."
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza el CLI",
          "paragraphs": [
            "PR Doctor viene dentro del paquete <strong>wlmaker</strong>: el script se instala junto al CLI."
          ],
          "codes": [
            {
              "label": "pnpm",
              "code": "pnpm add -g wlmaker@latest"
            },
            {
              "label": "npm",
              "code": "npm i -g wlmaker@latest"
            }
          ],
          "hintHtml": "Abre <code>wlmaker</code> → <strong>PR Doctor</strong>, o corre <code>wl pr-doctor</code>.",
          "ctas": [
            {
              "href": "https://www.npmjs.com/package/wlmaker",
              "label": "Ver en npm",
              "primary": true
            }
          ]
        }
      ],
      "footerHtml": "<strong>Nuevo en wlmaker.</strong><br />Formato, análisis y tests solo de lo que tocaste.<br /><br /><strong>Blondon Boys</strong>"
    },
    {
      "id": "1.2.1",
      "vibe": "1.2.1",
      "wlmaker": "1.10.1",
      "date": "2026-10-13",
      "latest": false,
      "mediaBase": "../1.2.0/",
      "heroImage": "shot-ir-viewer.webp",
      "heroAlt": "Editor IR Release",
      "kicker": "Ajuste",
      "headline": "Passphrase SSH",
      "headlineEm": "al publicar el tag",
      "lead": "VIBE 1.2.1 y wlmaker 1.10.1 piden la passphrase SSH antes de publicar un tag IR o RC, para que el push funcione sin TTY interactivo.",
      "ctas": [
        {
          "href": "#fix",
          "label": "Ver el cambio",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Actualizar VIBE",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "fix",
          "kicker": "Esta versión · VIBE 1.2.1 + wlmaker 1.10.1",
          "title": "Desbloqueo del agente antes del push",
          "paragraphs": [
            "Al elegir <strong>Push tag</strong> (o branch + tag en IR), el maker pide la passphrase SSH y carga la clave en el agente con <code>ssh-add</code>.",
            "Si la clave ya está desbloqueada, puedes dejar el campo vacío."
          ],
          "bullets": [
            "<strong>CLI</strong> — prompt Clack antes de publicar",
            "<strong>cumbia</strong> — mismo paso en el wizard de VIBE",
            "<strong>Claves</strong> — prueba <code>id_ed25519_work</code>, <code>id_ed25519</code>, <code>id_rsa</code>"
          ]
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza ahora",
          "paragraphs": [
            "Usa la última versión en <strong>MatiasZL/vibe-dist</strong>."
          ],
          "stepsTitle": "Instalación con el script",
          "steps": [
            "Descarga <strong>install-vibe.command</strong> desde el release",
            "Doble clic, o ejecuta <code>chmod +x</code> y el script",
            "Recarga VS Code (<code>Cmd+R</code> / Reload Window)"
          ],
          "codes": [
            {
              "label": "Script (macOS / Linux)",
              "code": "chmod +x install-vibe.command\n./install-vibe.command"
            }
          ],
          "hintHtml": "Usa <a href=\"https://github.com/MatiasZL/vibe-dist/releases/latest\">latest</a>.",
          "ctas": [
            {
              "href": "https://github.com/MatiasZL/vibe-dist/releases/latest",
              "label": "Abrir release",
              "primary": true
            }
          ]
        }
      ],
      "footerHtml": "<strong>Ajuste de publicación IR/RC.</strong><br />Passphrase SSH antes del push.<br /><br /><strong>Blondon Boys</strong>"
    },
    {
      "id": "1.2.0",
      "vibe": "1.2.0",
      "wlmaker": "1.10.0",
      "date": "2026-10-13",
      "latest": false,
      "mediaBase": "../1.2.0/",
      "heroImage": "vibe-1.2.0-hero.webp",
      "heroAlt": "VIBE 1.2.0 — IR + RC Release",
      "kicker": "Nueva entrega",
      "headline": "Release notes",
      "headlineEm": "sin abrir vim",
      "lead": "VIBE 1.2.0 y wlmaker 1.10.0 introducen IR Release y RC Release: filtras PRs, eliges tickets, traduces y publicas el tag desde cumbia o la terminal.",
      "ctas": [
        {
          "href": "#caminos",
          "label": "Ver IR y RC",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Instalar VIBE",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "caminos",
          "kicker": "Dos flujos · App",
          "title": "Elige el camino del release",
          "paragraphs": [
            "Ya no hace falta armar las notes a mano en un editor externo. En <strong>App</strong> tienes dos entradas nuevas, con la misma lógica en la extensión y en el CLI."
          ],
          "doors": [
            {
              "href": "#flujo",
              "image": "vibe-1.2.0-door-ir.webp",
              "alt": "IR Release",
              "label": "IR Release",
              "sub": "Bump de test · tag de IR"
            },
            {
              "href": "#flujo",
              "image": "vibe-1.2.0-door-rc.webp",
              "alt": "RC Release",
              "label": "RC Release",
              "sub": "Tag de prod · store opcional"
            }
          ],
          "note": "Formato de notes: <code>WR-xxxx → título</code>."
        },
        {
          "id": "flujo",
          "type": "timeline",
          "kicker": "Editor visual",
          "title": "Cuatro pasos. Cero vim.",
          "paragraphs": [
            "El viewer reemplaza el paso de vim. En el CLI abre un servidor local; en VIBE usa un <strong>WebviewPanel</strong> con la misma interfaz."
          ],
          "timeline": [
            {
              "n": "01",
              "label": "Filtrar",
              "copy": "Descubre tags de los PRs y reduce la lista."
            },
            {
              "n": "02",
              "label": "Seleccionar",
              "copy": "Marca qué tickets entran en las release notes."
            },
            {
              "n": "03",
              "label": "Traducir",
              "copy": "MyMemory a pt, en o es — sin email."
            },
            {
              "n": "04",
              "label": "Confirmar",
              "copy": "El flujo sigue con bump, commit opcional y tags."
            }
          ],
          "figures": [
            {
              "image": "shot-ir-viewer.webp",
              "alt": "Captura del editor IR Release",
              "caption": "IR Release — filtras tags, marcas tickets, traduces y confirmas. Captura real del viewer en el CLI."
            },
            {
              "image": "shot-rc-viewer.webp",
              "alt": "Captura del editor RC Release",
              "caption": "RC Release — misma UI para la versión de prod (store opcional)."
            }
          ],
          "note": "El idioma por defecto sigue el país de la app (br→pt, us→en, latam→es). Puedes cambiarlo en el select <strong>Traducir a</strong>."
        },
        {
          "id": "cli",
          "kicker": "CLI · wlmaker 1.10.0",
          "title": "La misma entrega, en la terminal",
          "paragraphs": [
            "<strong>wlmaker 1.10.0</strong> expone IR y RC en el menú App: recolección de PRs, bump de <code>version.yaml</code> y git tags con la misma lógica que VIBE."
          ],
          "bullets": [
            "Instala con <code>pnpm add -g wlmaker@latest</code>",
            "Abre <code>wlmaker</code> → App → IR Release | RC Release"
          ],
          "figures": [
            {
              "image": "vibe-1.2.0-cli.webp",
              "alt": "wlmaker 1.10.0",
              "caption": "wlmaker 1.10.0 — IR y RC Release también desde la terminal."
            }
          ]
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza ahora",
          "paragraphs": [
            "El código fuente sigue siendo privado. Los builds se publican en <strong>MatiasZL/vibe-dist</strong>."
          ],
          "stepsTitle": "Instalación con el script",
          "steps": [
            "Descarga <strong>install-vibe.command</strong> desde el release",
            "Doble clic, o ejecuta <code>chmod +x</code> y el script",
            "Recarga VS Code (<code>Cmd+R</code> / Reload Window)"
          ],
          "codes": [
            {
              "label": "Script (macOS / Linux)",
              "code": "chmod +x install-vibe.command\n./install-vibe.command"
            },
            {
              "label": "Instalación manual",
              "code": "curl -fL -o vibe.vsix \\\n  https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix\ncode --install-extension ./vibe.vsix --force"
            }
          ],
          "hintHtml": "Enlace permanente del VSIX · <a href=\"https://github.com/MatiasZL/vibe-dist/releases/latest/download/install-vibe.command\">install-vibe.command</a> · CLI: <code>pnpm add -g wlmaker@latest</code>",
          "ctas": [
            {
              "href": "https://github.com/MatiasZL/vibe-dist/releases/latest",
              "label": "Abrir release",
              "primary": true
            },
            {
              "href": "https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix",
              "label": "Descargar vibe.vsix",
              "primary": false
            }
          ]
        }
      ],
      "footerHtml": "<strong>Blog de mejoras de VIBE (extensión) y wlmaker (CLI).</strong><br />IR + RC Release sin vim.<br /><br /><strong>Blondon Boys</strong>"
    },
    {
      "id": "1.1.4",
      "vibe": "1.1.4",
      "wlmaker": "1.9.3",
      "date": "2026-10-01",
      "latest": false,
      "mediaBase": "../1.1.4/",
      "heroImage": "vibe-cumbia-studio-duo.webp",
      "heroAlt": "VIBE: cumbia y Studio",
      "kicker": "Blog de mejoras",
      "headline": "Qué mejoró en la extensión",
      "headlineEm": "y en el CLI",
      "lead": "Todas las mejoras de VIBE (la extensión de VS Code) y de wlmaker (el CLI), versión por versión: qué cambió, dónde está y cómo actualizar.",
      "ctas": [
        {
          "href": "#resumen",
          "label": "Ver las mejoras",
          "primary": true
        },
        {
          "href": "#instalar",
          "label": "Instalar VIBE",
          "primary": false
        }
      ],
      "sections": [
        {
          "id": "resumen",
          "kicker": "Esta versión · VIBE 1.1.4 + wlmaker 1.9.3",
          "title": "Qué cambió en esta entrega",
          "paragraphs": [
            "Este sitio es el <strong>blog de mejoras</strong> de dos productos que comparten un mismo maker: <strong>VIBE</strong>, la extensión de VS Code, y <strong>wlmaker</strong>, el CLI. Cada entrada es una versión; cada versión explica qué cambió y cómo instalarla.",
            "En <strong>VIBE 1.1.4</strong> y <strong>wlmaker 1.9.3</strong> la mejora es doble: el maker queda accesible desde dos puertas dentro del IDE, y llega una herramienta nueva de assets."
          ],
          "bullets": [
            "<strong>Extensión VIBE 1.1.4</strong> — <strong>cumbia</strong> (el menú del maker en el IDE) y <strong>Studio</strong> (el centro de comando web)",
            "<strong>Novedad: Tools → Assets</strong> — iconos Android e iOS, desarrollado por <strong>Alvarin</strong>",
            "<strong>CLI wlmaker 1.9.3</strong> — la misma mejora llega a la terminal",
            "<strong>Distribución pública</strong> — se instala sin invitación al repositorio privado"
          ],
          "note": "Si ya usabas el CLI, ya sabes usar la extensión: <strong>misma jerarquía, misma lógica</strong>. Abajo están las entradas, en orden, con las capturas de la interfaz real."
        },
        {
          "id": "cumbia",
          "kicker": "Extensión VIBE · cumbia",
          "title": "La misma estructura del CLI, en la barra lateral",
          "paragraphs": [
            "Abre la barra de actividad de <strong>VIBE</strong> → pestaña <strong>cumbia</strong>. Ahí está el catálogo completo del maker, igual que <code>wlmaker</code> en la terminal. Clic → asistente → archivos en el monorepo."
          ],
          "bullets": [
            "<strong>Vault</strong> — sincronización cifrada STG/PROD con el equipo",
            "<strong>App / BLoC / Widget / Page / Endpoint / Package / Env Var</strong>",
            "<strong>Collaborative</strong> — feature, page, bloc, endpoint",
            "<strong>Docs y SDD</strong> — documentación y flujo Spec Driven",
            "<strong>Tools → Assets</strong> — la novedad de esta versión"
          ],
          "note": "Si ya usabas el CLI, ya sabes usar <strong>cumbia</strong>. Misma jerarquía. Misma lógica. Sin salir del IDE.",
          "figures": [
            {
              "image": "vibe-cumbia-banner.webp",
              "alt": "Vista cumbia en VIBE",
              "caption": "cumbia en la barra de actividad — el catálogo del maker, sin salir de VS Code."
            }
          ]
        },
        {
          "id": "studio",
          "kicker": "Extensión VIBE · Studio",
          "title": "No es un menú plano: es un centro de comando",
          "paragraphs": [
            "<strong>Studio</strong> es la otra forma de usar el maker: una pantalla grande con todas las secciones y botones a la vista. Lo abres desde VS Code (panel interno) o en el navegador de tu máquina."
          ],
          "bullets": [
            "<strong>Home</strong> — cuadrícula de todas las secciones",
            "<strong>Rail</strong> — selector (Vault, App, SDD, Tools, comandos VIBE…)",
            "<strong>Tarjetas</strong> — cada acción es un botón para ejecutar",
            "Ábrelo desde cumbia, o con el comando <code>WlMaker: Open Studio</code> / <code>Open Studio in Browser</code>"
          ],
          "figureGrid": [
            {
              "image": "studio-home-real.webp",
              "alt": "Studio Home",
              "caption": "Home de Studio — todas las secciones del maker en un solo lienzo."
            },
            {
              "image": "studio-tools-real.webp",
              "alt": "Studio Tools",
              "caption": "Tools → Assets — el panel aparece al hacer clic en la tarjeta."
            }
          ]
        },
        {
          "id": "assets",
          "kicker": "Novedad · Tools → Assets · por Alvarin",
          "title": "Iconos Android e iOS desde el maker",
          "paragraphs": [
            "Integramos el <strong>WL Asset Studio</strong> al maker. Misma lógica de píxeles, TypeScript puro, sin Flutter embebido. Disponible en cumbia, Studio y el CLI."
          ],
          "bullets": [
            "<strong>Android</strong> — icono de notificación en densidades + <code>colors.xml</code>",
            "<strong>iOS</strong> — quita el canal alpha (evita el rechazo ITMS-90717)",
            "<strong>App flag</strong> solo en Android · <strong>fondo hex</strong> solo en iOS",
            "Crédito en la interfaz: <strong>Developed by Alvarin</strong>"
          ],
          "note": "Sin el icono de notificación, FCM usa el launcher y Android muestra una mancha blanca en la barra de estado.",
          "figures": [
            {
              "image": "vibe-assets-android-ios.webp",
              "alt": "Android e iOS assets",
              "caption": "Android notification icon + iOS App Store icon — misma herramienta, dos plataformas."
            }
          ],
          "figureGrid": [
            {
              "image": "studio-assets-android-real.webp",
              "alt": "Analyze Android",
              "caption": "Analyze Android — logo PNG + app flag."
            },
            {
              "image": "studio-assets-ios-real.webp",
              "alt": "Analyze iOS",
              "caption": "Analyze iOS — logo PNG + fondo hex."
            }
          ]
        },
        {
          "id": "cli",
          "kicker": "CLI · wlmaker 1.9.3",
          "title": "La misma mejora, en la terminal",
          "paragraphs": [
            "El CLI no se queda atrás: <strong>wlmaker 1.9.3</strong> agrega <strong>Tools → Assets</strong> al menú interactivo, con el mismo resultado en disco que la extensión. Un maker, dos puertas — IDE y terminal."
          ],
          "bullets": [
            "Instala con <code>pnpm add -g wlmaker@latest</code>",
            "Abre <code>wlmaker</code> → Tools → Assets → Android | iOS"
          ],
          "figures": [
            {
              "image": "wlmaker-1.9.3-launch-banner.webp",
              "alt": "wlmaker 1.9.3",
              "caption": "wlmaker 1.9.3 — Tools → Assets también en la terminal."
            }
          ]
        },
        {
          "id": "pack",
          "kicker": "Extensión VIBE · el resto de la barra",
          "title": "Una barra. Todo el flujo del monorepo.",
          "paragraphs": [
            "Además de cumbia y Studio, la extensión concentra el día a día del equipo:"
          ],
          "bullets": [
            "<strong>Configurations</strong> — launcher de debug con iconos",
            "<strong>Devices</strong> — emuladores y dispositivos",
            "<strong>Vibe Compare</strong> — árbol de cambios / PRs",
            "<strong>Vibe Tree</strong> — exploración del workspace",
            "<strong>cumbia + Studio</strong> — el maker completo"
          ],
          "figures": [
            {
              "image": "vibe-1.1.4-launch-banner.webp",
              "alt": "VIBE 1.1.4",
              "caption": "VIBE 1.1.4 — Visual Icon Based Executer."
            }
          ]
        },
        {
          "id": "instalar",
          "type": "install",
          "kicker": "Instalación",
          "title": "Actualiza ahora",
          "paragraphs": [
            "El código fuente sigue siendo privado. El equipo <strong>no necesita</strong> acceso al monorepo. Los builds se publican en el repositorio público de assets <strong>MatiasZL/vibe-dist</strong>."
          ],
          "stepsTitle": "Instalación con el script",
          "steps": [
            "Descarga <strong>install-vibe.command</strong> desde el release",
            "Doble clic, o ejecuta <code>chmod +x</code> y el script",
            "Recarga VS Code (<code>Cmd+R</code> / Reload Window)"
          ],
          "codes": [
            {
              "label": "Script (macOS / Linux)",
              "code": "chmod +x install-vibe.command\n./install-vibe.command"
            },
            {
              "label": "Instalación manual",
              "code": "curl -fL -o vibe.vsix \\\n  https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix\ncode --install-extension ./vibe.vsix --force"
            }
          ],
          "hintHtml": "Enlace permanente del VSIX · <a href=\"https://github.com/MatiasZL/vibe-dist/releases/latest/download/install-vibe.command\">install-vibe.command</a> · CLI: <code>pnpm add -g wlmaker@latest</code>",
          "ctas": [
            {
              "href": "https://github.com/MatiasZL/vibe-dist/releases/latest",
              "label": "Abrir release",
              "primary": true
            },
            {
              "href": "https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix",
              "label": "Descargar vibe.vsix",
              "primary": false
            }
          ]
        }
      ],
      "footerHtml": "<strong>Blog de mejoras de VIBE (extensión) y wlmaker (CLI).</strong><br />Un maker. Dos puertas: cumbia + Studio.<br /><br /><strong>Blondon Boys</strong>"
    }
  ]
};
