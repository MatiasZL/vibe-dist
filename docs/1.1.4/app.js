(function () {
  const cfg = window.VIBE_LAUNCH;
  if (!cfg || !Array.isArray(cfg.RELEASES) || !cfg.RELEASES.length) {
    document.getElementById("release-root").innerHTML =
      "<p style='padding:2rem;color:#9aa3b2'>No hay releases en data/releases.js</p>";
    return;
  }

  const $ = (sel, root = document) => root.querySelector(sel);

  function media(release, file) {
    if (!file) return "";
    if (/^https?:\/\//.test(file)) return file;
    return `${release.mediaBase || ""}${file}`;
  }

  function latestRelease() {
    return cfg.RELEASES.find((r) => r.latest) || cfg.RELEASES[0];
  }

  function findRelease(id) {
    return cfg.RELEASES.find((r) => r.id === id) || latestRelease();
  }

  function readVersionFromLocation() {
    const params = new URLSearchParams(location.search);
    if (params.get("v")) return params.get("v");
    const hash = location.hash.replace(/^#/, "");
    if (hash.startsWith("v/")) return hash.slice(2);
    if (/^\d+\.\d+/.test(hash)) return hash;
    return latestRelease().id;
  }

  function setLocationVersion(id, replace) {
    const url = new URL(location.href);
    url.searchParams.set("v", id);
    // keep in-page anchors working: clear version-like hashes
    if (/^v\//.test(url.hash.slice(1)) || /^\d+\.\d+/.test(url.hash.slice(1))) {
      url.hash = "";
    }
    history[replace ? "replaceState" : "pushState"]({ v: id }, "", url);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCtas(ctas) {
    if (!ctas || !ctas.length) return "";
    return `<div class="cta-row">${ctas
      .map(
        (c) =>
          `<a class="btn ${c.primary ? "btn-primary" : "btn-ghost"}" href="${esc(c.href)}">${esc(c.label)}</a>`
      )
      .join("")}</div>`;
  }

  // One copy button per command block. The button carries no payload: it reads
  // the exact textContent of the sibling <code>, so what is copied is always
  // what is on screen.
  function renderCodeBlock(label, code) {
    return `<p class="section-kicker">${esc(label)}</p>
      <pre><button type="button" class="copy-btn" data-copy-code>Copiar</button><code>${esc(
        code
      )}</code></pre>`;
  }

  function renderCodes(section) {
    if (section.codes && section.codes.length) {
      return section.codes
        .map((c) => renderCodeBlock(c.label || "Comando", c.code))
        .join("");
    }
    if (section.code) return renderCodeBlock(section.manualTitle || "Manual", section.code);
    return "";
  }

  function renderFigure(release, fig) {
    return `<figure class="shot">
      <img src="${esc(media(release, fig.image))}" alt="${esc(fig.alt || "")}" loading="lazy" />
      ${fig.caption ? `<figcaption>${fig.caption}</figcaption>` : ""}
    </figure>`;
  }

  function renderSection(release, section) {
    if (section.type === "install") {
      return `<section id="${esc(section.id)}">
        <div class="install">
          <p class="section-kicker">${esc(section.kicker || "")}</p>
          <h2 class="section-title">${esc(section.title || "")}</h2>
          ${(section.paragraphs || [])
            .map((p) => `<p class="section-copy">${p}</p>`)
            .join("")}
          ${
            section.steps && section.steps.length
              ? `<p class="section-kicker">${esc(section.stepsTitle || "Pasos")}</p>
                 <ol class="steps">${section.steps.map((s) => `<li>${s}</li>`).join("")}</ol>`
              : ""
          }
          ${renderCodes(section)}
          ${section.hintHtml ? `<p class="hint">${section.hintHtml}</p>` : ""}
          ${renderCtas(section.ctas)}
        </div>
      </section>`;
    }

    return `<section id="${esc(section.id)}" class="release-section">
      <div class="section-head">
        <p class="section-kicker">${esc(section.kicker || "")}</p>
        <h2 class="section-title">${esc(section.title || "")}</h2>
      </div>
      <div class="section-body">
      ${(section.paragraphs || [])
        .map((p) => `<p class="section-copy">${p}</p>`)
        .join("")}
      ${
        section.bullets && section.bullets.length
          ? `<ul class="bullets">${section.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
          : ""
      }
      ${section.note ? `<p class="note">${section.note}</p>` : ""}
      ${
        section.doors && section.doors.length
          ? `<div class="doors">${section.doors
              .map(
                (d) => `<a class="door" href="${esc(d.href)}">
                <img src="${esc(media(release, d.image))}" alt="${esc(d.alt || "")}" />
                <span class="door-label">${esc(d.label)}<span class="door-sub">${esc(d.sub || "")}</span></span>
              </a>`
              )
              .join("")}</div>`
          : ""
      }
      ${(section.figures || []).map((f) => renderFigure(release, f)).join("")}
      ${
        section.figureGrid && section.figureGrid.length
          ? `<div class="shot-grid">${section.figureGrid
              .map((f) => renderFigure(release, f))
              .join("")}</div>`
          : ""
      }
      </div>
    </section>`;
  }

  function renderHero(release) {
    const hero = $("#hero");
    hero.innerHTML = `
      <div class="hero-media">
        <img src="${esc(media(release, release.heroImage))}" alt="${esc(release.heroAlt || "")}" width="1280" height="720" />
      </div>
      <div class="hero-veil" aria-hidden="true"></div>
      <div class="hero-inner">
        <p class="hero-kicker">${esc(release.kicker || "")} · VIBE ${esc(release.vibe)}${
      release.wlmaker ? ` · wlmaker ${esc(release.wlmaker)}` : ""
    }</p>
        <h1>${esc(release.headline || "")}${
      release.headlineEm ? `<br /><em>${esc(release.headlineEm)}</em>` : ""
    }</h1>
        <p class="hero-lead">${esc(release.lead || "")}</p>
        ${renderCtas(release.ctas)}
      </div>`;
  }

  function renderRelease(release) {
    document.title = `VIBE ${release.vibe} · ${cfg.brand}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", release.lead || "");

    const latestBadge = $("#latest-badge");
    if (release.latest) latestBadge.classList.remove("hidden");
    else latestBadge.classList.add("hidden");

    renderHero(release);

    $("#release-root").innerHTML = (release.sections || [])
      .map((s) => renderSection(release, s))
      .join("");

    $("#credits").innerHTML = `<p>${release.footerHtml || ""}</p>`;

    // sync select
    const select = $("#version-select");
    if (select && select.value !== release.id) select.value = release.id;

    // archive current markers
    document.querySelectorAll(".archive-list a").forEach((a) => {
      const isCurrent = a.dataset.version === release.id;
      if (isCurrent) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function fillVersionUI() {
    const select = $("#version-select");
    select.innerHTML = cfg.RELEASES.map((r) => {
      const label = `VIBE ${r.vibe}${r.wlmaker ? ` + wlmaker ${r.wlmaker}` : ""}${
        r.latest ? " (actual)" : ""
      }`;
      return `<option value="${esc(r.id)}">${esc(label)}</option>`;
    }).join("");

    const archive = $("#archive-list");
    archive.innerHTML = cfg.RELEASES.map((r) => {
      return `<li><a href="?v=${esc(r.id)}" data-version="${esc(r.id)}">
        <span><strong>VIBE ${esc(r.vibe)}</strong>${
        r.wlmaker ? ` · wlmaker ${esc(r.wlmaker)}` : ""
      }</span>
        <span>${esc(r.date || "")}${r.latest ? " · actual" : ""}</span>
      </a></li>`;
    }).join("");

    select.addEventListener("change", () => {
      const id = select.value;
      setLocationVersion(id, false);
      renderRelease(findRelease(id));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    archive.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-version]");
      if (!a) return;
      e.preventDefault();
      const id = a.dataset.version;
      setLocationVersion(id, false);
      renderRelease(findRelease(id));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Copy-to-clipboard for <pre> command blocks. Delegated on document so it
  // survives every re-render, and with an execCommand fallback because
  // navigator.clipboard is unavailable on file:// and plain http.
  function legacyCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function flashCopied(btn, label) {
    btn.classList.add("copied");
    btn.textContent = label;
    clearTimeout(btn._t);
    btn._t = setTimeout(() => {
      btn.classList.remove("copied");
      btn.textContent = "Copiar";
    }, 1600);
  }

  // Last resort when the clipboard is blocked (no user gesture, older browser):
  // select the command so the user can press Cmd/Ctrl+C themselves.
  function selectCode(code) {
    try {
      const range = document.createRange();
      range.selectNodeContents(code);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (e) {
      /* nothing else to do */
    }
  }

  function wireCopyButtons() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy-code]");
      if (!btn) return;
      const pre = btn.closest("pre");
      const code = pre && pre.querySelector("code");
      if (!code) return;

      const text = code.textContent;
      const ok = () => flashCopied(btn, "Copiado");
      const fail = () => {
        selectCode(code);
        flashCopied(btn, "Copiá con Cmd+C");
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok, () => (legacyCopy(text) ? ok() : fail()));
      } else if (legacyCopy(text)) {
        ok();
      } else {
        fail();
      }
    });
  }

  function boot() {
    $("#brand-logo").src = cfg.brandLogo;
    $("#brand-logo").alt = cfg.brand;
    $("#brand-name").textContent = cfg.brand;
    $("#brand-meta").textContent = cfg.brandSubtitle || "Mejoras de la extensión y el CLI";

    wireCopyButtons();
    fillVersionUI();

    const id = readVersionFromLocation();
    setLocationVersion(id, true);
    renderRelease(findRelease(id));

    window.addEventListener("popstate", () => {
      renderRelease(findRelease(readVersionFromLocation()));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
