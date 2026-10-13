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
  brand: "Blondon Boys",
  brandLogo: "blondon-boys-logo.webp",
  brandSubtitle: "Mejoras de la extensión y el CLI",
  RELEASES: [
    {
      id: "1.2.0",
      vibe: "1.2.0",
      wlmaker: "1.10.0",
      date: "2026-10-13",
      latest: true,
      mediaBase: "",
      heroImage: "vibe-1.2.0-hero.webp",
      heroAlt: "VIBE 1.2.0 — IR + RC Release",
      kicker: "Nueva entrega",
      headline: "Release notes",
      headlineEm: "sin abrir vim",
      lead:
        "VIBE 1.2.0 y wlmaker 1.10.0 introducen IR Release y RC Release: filtras PRs, eliges tickets, traduces y publicas el tag desde cumbia o la terminal.",
      ctas: [
        { href: "#caminos", label: "Ver IR y RC", primary: true },
        { href: "#instalar", label: "Instalar VIBE", primary: false },
      ],
      sections: [
        {
          id: "caminos",
          kicker: "Dos flujos · App",
          title: "Elige el camino del release",
          paragraphs: [
            "Ya no hace falta armar las notes a mano en un editor externo. En <strong>App</strong> tienes dos entradas nuevas, con la misma lógica en la extensión y en el CLI.",
          ],
          doors: [
            {
              href: "#flujo",
              image: "vibe-1.2.0-door-ir.webp",
              alt: "IR Release",
              label: "IR Release",
              sub: "Bump de test · tag de IR",
            },
            {
              href: "#flujo",
              image: "vibe-1.2.0-door-rc.webp",
              alt: "RC Release",
              label: "RC Release",
              sub: "Tag de prod · store opcional",
            },
          ],
          note: "Formato de notes: <code>WR-xxxx → título</code>.",
        },
        {
          id: "flujo",
          type: "timeline",
          kicker: "Editor visual",
          title: "Cuatro pasos. Cero vim.",
          paragraphs: [
            "El viewer reemplaza el paso de vim. En el CLI abre un servidor local; en VIBE usa un <strong>WebviewPanel</strong> con la misma interfaz.",
          ],
          timeline: [
            {
              n: "01",
              label: "Filtrar",
              copy: "Descubre tags de los PRs y reduce la lista.",
            },
            {
              n: "02",
              label: "Seleccionar",
              copy: "Marca qué tickets entran en las release notes.",
            },
            {
              n: "03",
              label: "Traducir",
              copy: "MyMemory a pt, en o es — sin email.",
            },
            {
              n: "04",
              label: "Confirmar",
              copy: "El flujo sigue con bump, commit opcional y tags.",
            },
          ],
          figures: [
            {
              image: "vibe-1.2.0-flow.webp",
              alt: "Flujo del editor de notes",
              caption: "Filter → Select → Translate → Confirm — el mismo recorrido en cumbia y en el CLI.",
            },
          ],
          note: "El idioma por defecto sigue el país de la app (br→pt, us→en, latam→es). Puedes cambiarlo en el select <strong>Traducir a</strong>.",
        },
        {
          id: "cli",
          kicker: "CLI · wlmaker 1.10.0",
          title: "La misma entrega, en la terminal",
          paragraphs: [
            "<strong>wlmaker 1.10.0</strong> expone IR y RC en el menú App: recolección de PRs, bump de <code>version.yaml</code> y git tags con la misma lógica que VIBE.",
          ],
          bullets: [
            "Instala con <code>pnpm add -g wlmaker@latest</code>",
            "Abre <code>wlmaker</code> → App → IR Release | RC Release",
          ],
          figures: [
            {
              image: "vibe-1.2.0-cli.webp",
              alt: "wlmaker 1.10.0",
              caption: "wlmaker 1.10.0 — IR y RC Release también desde la terminal.",
            },
          ],
        },
        {
          id: "instalar",
          type: "install",
          kicker: "Instalación",
          title: "Actualiza ahora",
          paragraphs: [
            "El código fuente sigue siendo privado. Los builds se publican en <strong>MatiasZL/vibe-dist</strong>.",
          ],
          stepsTitle: "Instalación con el script",
          steps: [
            "Descarga <strong>install-vibe.command</strong> desde el release",
            "Doble clic, o ejecuta <code>chmod +x</code> y el script",
            "Recarga VS Code (<code>Cmd+R</code> / Reload Window)",
          ],
          codes: [
            {
              label: "Script (macOS / Linux)",
              code: `chmod +x install-vibe.command
./install-vibe.command`,
            },
            {
              label: "Instalación manual",
              code: `curl -fL -o vibe.vsix \\
  https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix
code --install-extension ./vibe.vsix --force`,
            },
          ],
          hintHtml:
            'Enlace permanente del VSIX · <a href="https://github.com/MatiasZL/vibe-dist/releases/latest/download/install-vibe.command">install-vibe.command</a> · CLI: <code>pnpm add -g wlmaker@latest</code>',
          ctas: [
            {
              href: "https://github.com/MatiasZL/vibe-dist/releases/latest",
              label: "Abrir release",
              primary: true,
            },
            {
              href: "https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix",
              label: "Descargar vibe.vsix",
              primary: false,
            },
          ],
        },
      ],
      footerHtml:
        "<strong>Blog de mejoras de VIBE (extensión) y wlmaker (CLI).</strong><br />IR + RC Release sin vim.<br /><br /><strong>Blondon Boys</strong>",
    },

    {
      id: "1.1.4",
      vibe: "1.1.4",
      wlmaker: "1.9.3",
      date: "2026-10-01",
      latest: false,
      mediaBase: "",
      heroImage: "vibe-cumbia-studio-duo.webp",
      heroAlt: "VIBE: cumbia y Studio",
      kicker: "Blog de mejoras",
      headline: "Qué mejoró en la extensión",
      headlineEm: "y en el CLI",
      lead:
        "Todas las mejoras de VIBE (la extensión de VS Code) y de wlmaker (el CLI), versión por versión: qué cambió, dónde está y cómo actualizar.",
      ctas: [
        { href: "#resumen", label: "Ver las mejoras", primary: true },
        { href: "#instalar", label: "Instalar VIBE", primary: false },
      ],
      sections: [
        {
          id: "resumen",
          kicker: "Esta versión · VIBE 1.1.4 + wlmaker 1.9.3",
          title: "Qué cambió en esta entrega",
          paragraphs: [
            "Este sitio es el <strong>blog de mejoras</strong> de dos productos que comparten un mismo maker: <strong>VIBE</strong>, la extensión de VS Code, y <strong>wlmaker</strong>, el CLI. Cada entrada es una versión; cada versión explica qué cambió y cómo instalarla.",
            "En <strong>VIBE 1.1.4</strong> y <strong>wlmaker 1.9.3</strong> la mejora es doble: el maker queda accesible desde dos puertas dentro del IDE, y llega una herramienta nueva de assets.",
          ],
          bullets: [
            "<strong>Extensión VIBE 1.1.4</strong> — <strong>cumbia</strong> (el menú del maker en el IDE) y <strong>Studio</strong> (el centro de comando web)",
            "<strong>Novedad: Tools → Assets</strong> — iconos Android e iOS, desarrollado por <strong>Alvarin</strong>",
            "<strong>CLI wlmaker 1.9.3</strong> — la misma mejora llega a la terminal",
            "<strong>Distribución pública</strong> — se instala sin invitación al repositorio privado",
          ],
          note: "Si ya usabas el CLI, ya sabes usar la extensión: <strong>misma jerarquía, misma lógica</strong>. Abajo están las entradas, en orden, con las capturas de la interfaz real.",
        },
        {
          id: "cumbia",
          kicker: "Extensión VIBE · cumbia",
          title: "La misma estructura del CLI, en la barra lateral",
          paragraphs: [
            "Abre la barra de actividad de <strong>VIBE</strong> → pestaña <strong>cumbia</strong>. Ahí está el catálogo completo del maker, igual que <code>wlmaker</code> en la terminal. Clic → asistente → archivos en el monorepo.",
          ],
          bullets: [
            "<strong>Vault</strong> — sincronización cifrada STG/PROD con el equipo",
            "<strong>App / BLoC / Widget / Page / Endpoint / Package / Env Var</strong>",
            "<strong>Collaborative</strong> — feature, page, bloc, endpoint",
            "<strong>Docs y SDD</strong> — documentación y flujo Spec Driven",
            "<strong>Tools → Assets</strong> — la novedad de esta versión",
          ],
          note: "Si ya usabas el CLI, ya sabes usar <strong>cumbia</strong>. Misma jerarquía. Misma lógica. Sin salir del IDE.",
          figures: [
            {
              image: "vibe-cumbia-banner.webp",
              alt: "Vista cumbia en VIBE",
              caption: "cumbia en la barra de actividad — el catálogo del maker, sin salir de VS Code.",
            },
          ],
        },
        {
          id: "studio",
          kicker: "Extensión VIBE · Studio",
          title: "No es un menú plano: es un centro de comando",
          paragraphs: [
            "<strong>Studio</strong> es la otra forma de usar el maker: una pantalla grande con todas las secciones y botones a la vista. Lo abres desde VS Code (panel interno) o en el navegador de tu máquina.",
          ],
          bullets: [
            "<strong>Home</strong> — cuadrícula de todas las secciones",
            "<strong>Rail</strong> — selector (Vault, App, SDD, Tools, comandos VIBE…)",
            "<strong>Tarjetas</strong> — cada acción es un botón para ejecutar",
            "Ábrelo desde cumbia, o con el comando <code>WlMaker: Open Studio</code> / <code>Open Studio in Browser</code>",
          ],
          figureGrid: [
            {
              image: "studio-home-real.webp",
              alt: "Studio Home",
              caption: "Home de Studio — todas las secciones del maker en un solo lienzo.",
            },
            {
              image: "studio-tools-real.webp",
              alt: "Studio Tools",
              caption: "Tools → Assets — el panel aparece al hacer clic en la tarjeta.",
            },
          ],
        },
        {
          id: "assets",
          kicker: "Novedad · Tools → Assets · por Alvarin",
          title: "Iconos Android e iOS desde el maker",
          paragraphs: [
            "Integramos el <strong>WL Asset Studio</strong> al maker. Misma lógica de píxeles, TypeScript puro, sin Flutter embebido. Disponible en cumbia, Studio y el CLI.",
          ],
          bullets: [
            "<strong>Android</strong> — icono de notificación en densidades + <code>colors.xml</code>",
            "<strong>iOS</strong> — quita el canal alpha (evita el rechazo ITMS-90717)",
            "<strong>App flag</strong> solo en Android · <strong>fondo hex</strong> solo en iOS",
            "Crédito en la interfaz: <strong>Developed by Alvarin</strong>",
          ],
          note: "Sin el icono de notificación, FCM usa el launcher y Android muestra una mancha blanca en la barra de estado.",
          figures: [
            {
              image: "vibe-assets-android-ios.webp",
              alt: "Android e iOS assets",
              caption: "Android notification icon + iOS App Store icon — misma herramienta, dos plataformas.",
            },
          ],
          figureGrid: [
            {
              image: "studio-assets-android-real.webp",
              alt: "Analyze Android",
              caption: "Analyze Android — logo PNG + app flag.",
            },
            {
              image: "studio-assets-ios-real.webp",
              alt: "Analyze iOS",
              caption: "Analyze iOS — logo PNG + fondo hex.",
            },
          ],
        },
        {
          id: "cli",
          kicker: "CLI · wlmaker 1.9.3",
          title: "La misma mejora, en la terminal",
          paragraphs: [
            "El CLI no se queda atrás: <strong>wlmaker 1.9.3</strong> agrega <strong>Tools → Assets</strong> al menú interactivo, con el mismo resultado en disco que la extensión. Un maker, dos puertas — IDE y terminal.",
          ],
          bullets: [
            "Instala con <code>pnpm add -g wlmaker@latest</code>",
            "Abre <code>wlmaker</code> → Tools → Assets → Android | iOS",
          ],
          figures: [
            {
              image: "wlmaker-1.9.3-launch-banner.webp",
              alt: "wlmaker 1.9.3",
              caption: "wlmaker 1.9.3 — Tools → Assets también en la terminal.",
            },
          ],
        },
        {
          id: "pack",
          kicker: "Extensión VIBE · el resto de la barra",
          title: "Una barra. Todo el flujo del monorepo.",
          paragraphs: [
            "Además de cumbia y Studio, la extensión concentra el día a día del equipo:",
          ],
          bullets: [
            "<strong>Configurations</strong> — launcher de debug con iconos",
            "<strong>Devices</strong> — emuladores y dispositivos",
            "<strong>Vibe Compare</strong> — árbol de cambios / PRs",
            "<strong>Vibe Tree</strong> — exploración del workspace",
            "<strong>cumbia + Studio</strong> — el maker completo",
          ],
          figures: [
            {
              image: "vibe-1.1.4-launch-banner.webp",
              alt: "VIBE 1.1.4",
              caption: "VIBE 1.1.4 — Visual Icon Based Executer.",
            },
          ],
        },
        {
          id: "instalar",
          type: "install",
          kicker: "Instalación",
          title: "Actualiza ahora",
          paragraphs: [
            "El código fuente sigue siendo privado. El equipo <strong>no necesita</strong> acceso al monorepo. Los builds se publican en el repositorio público de assets <strong>MatiasZL/vibe-dist</strong>.",
          ],
          stepsTitle: "Instalación con el script",
          steps: [
            "Descarga <strong>install-vibe.command</strong> desde el release",
            "Doble clic, o ejecuta <code>chmod +x</code> y el script",
            "Recarga VS Code (<code>Cmd+R</code> / Reload Window)",
          ],
          codes: [
            {
              label: "Script (macOS / Linux)",
              code: `chmod +x install-vibe.command
./install-vibe.command`,
            },
            {
              label: "Instalación manual",
              code: `curl -fL -o vibe.vsix \\
  https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix
code --install-extension ./vibe.vsix --force`,
            },
          ],
          hintHtml:
            'Enlace permanente del VSIX · <a href="https://github.com/MatiasZL/vibe-dist/releases/latest/download/install-vibe.command">install-vibe.command</a> · CLI: <code>pnpm add -g wlmaker@latest</code>',
          ctas: [
            {
              href: "https://github.com/MatiasZL/vibe-dist/releases/latest",
              label: "Abrir release",
              primary: true,
            },
            {
              href: "https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix",
              label: "Descargar vibe.vsix",
              primary: false,
            },
          ],
        },
      ],
      footerHtml:
        "<strong>Blog de mejoras de VIBE (extensión) y wlmaker (CLI).</strong><br />Un maker. Dos puertas: cumbia + Studio.<br /><br /><strong>Blondon Boys</strong>",
    },

    // Ejemplo de versión anterior (plantilla). Descomenta / duplica para 1.1.5+:
    // {
    //   id: "1.1.3",
    //   vibe: "1.1.3",
    //   wlmaker: "1.9.2",
    //   date: "2026-09-01",
    //   latest: false,
    //   mediaBase: "media/1.1.3/",
    //   heroImage: "hero.webp",
    //   ...
    // },
  ],
};