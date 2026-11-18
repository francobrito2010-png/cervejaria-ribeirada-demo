/* Lógica do site Cervejaria da Ribeirada. Lê window.SITE (data.js). Sem dependências. */
(function () {
  "use strict";
  const S = window.SITE || {};
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Textos da interface (PT / EN / ES) ---------- */
  const UI = {
    pt: { skip: "Saltar para o conteúdo", since: "Desde 2001", book: "Reservar", bookTable: "Reservar mesa", seeMenu: "Ver a carta",
      k1: "Do viveiro para a mesa", h1: "O que nos pedem sempre", p1: "Toque num prato para ver os detalhes.",
      k2: "A carta", h2: "Carta do Mar", cartaSub: "Do viveiro para a mesa · Odivelas · Desde 2001", fav: "Mais pedido", vivo: "Vivo", special: "Sugestão da casa", demoPrices: "Preços indicativos nesta proposta — a confirmar com a casa. Informe-nos de alergias ou intolerâncias.",
      k3: "Desde 2001", h3: "Mais de 20 anos a servir Odivelas", p3: "Abrimos em 2001 na Ribeirada com uma ideia simples: marisco fresco, vivo no nosso viveiro, e a cozinha portuguesa que se come em casa. Hoje continuamos iguais no que importa.",
      f1: "a abrir portas", f2: "no Google", f3: "críticas de clientes", k4: "A casa", h4: "Sala, viveiro e adega", h5: "Veja-nos em movimento",
      k6: "O que dizem", p6: "Média de 1747 críticas no Google Maps.", k7: "Reservas", h7: "Guarde a sua mesa",
      p7: "Escolha o dia e a hora. Ao fim de semana a sala enche — reserve com antecedência.", call: "Ligar",
      fDate: "Dia", fTime: "Hora", fPeople: "Pessoas", fName: "Nome", fNote: "Observações (opcional)", fNotePh: "Aniversário, cadeira de bebé, alergias…", fSend: "Pedir reserva",
      h8: "Perguntas frequentes", k9: "Visite-nos", h9: "Na Ribeirada, em Odivelas", showMap: "Ver mapa", mapNote: "O mapa é do Google e só carrega se aceitar.",
      ftC: "Contactos", ftH: "Horário", ftI: "Informação", ftP: "Privacidade e cookies", ftCk: "Preferências de cookies",
      ckTxt: "Usamos apenas armazenamento essencial. O mapa do Google só carrega se aceitar.", ckNo: "Recusar", ckYes: "Aceitar",
      nav: [["Carta do Mar", "#carta"], ["A casa", "#galeria"], ["Críticas", "#criticas"], ["Contacto", "#contacto"]],
      openNow: "Aberto agora · até às 23:30", closedToday: "Hoje encerrado · abrimos amanhã às 12:00", opensAt: "Abre hoje às 12:00", closedNow: "Fechado agora · abre às 12:00",
      directions: "Como chegar", reviews: "críticas Google", askDish: "Reservar e pedir este prato", close: "Fechar",
      errDate: "Escolha um dia.", errClosed: "À quarta-feira estamos encerrados. Escolha outro dia.", errName: "Diga-nos o seu nome.", errPast: "Escolha um dia a partir de hoje.",
      people: (n) => n + (n === 1 ? " pessoa" : " pessoas"), morePeople: "Mais de 12",
      doneT: "Pedido pronto", doneWa: "Enviar por WhatsApp", doneCall: "Ligar para confirmar",
      doneTxt: "Para confirmar a sua mesa, ligue-nos e diga:", doneDemo: "Com WhatsApp ligado ao site, este pedido chega já escrito ao telemóvel da casa.",
      msg: (d) => `Olá! Gostava de reservar mesa na Ribeirada.\nDia: ${d.date}\nHora: ${d.time}\nPessoas: ${d.people}\nNome: ${d.name}${d.note ? "\nObs.: " + d.note : ""}`,
      sumDate: "Dia", sumTime: "Hora", sumPeople: "Pessoas", sumName: "Nome" },
    en: { skip: "Skip to content", since: "Since 2001", book: "Book", bookTable: "Book a table", seeMenu: "See the menu",
      k1: "From our tank to your table", h1: "What everyone orders", p1: "Tap a dish to see details.",
      k2: "The menu", h2: "The Sea Menu", cartaSub: "From our tank to your table · Odivelas · Since 2001", fav: "Most ordered", vivo: "Live", special: "House suggestion", demoPrices: "Indicative prices in this proposal — to be confirmed. Please tell us about allergies or intolerances.",
      k3: "Since 2001", h3: "Over 20 years serving Odivelas", p3: "We opened in 2001 in Ribeirada with a simple idea: fresh shellfish, alive in our own tank, and the Portuguese food you'd eat at home. We haven't changed what matters.",
      f1: "opening our doors", f2: "on Google", f3: "guest reviews", k4: "The house", h4: "Dining room, tank and cellar", h5: "See us in motion",
      k6: "What guests say", p6: "Average of 1,747 reviews on Google Maps.", k7: "Bookings", h7: "Save your table",
      p7: "Pick a day and time. Weekends fill up — book ahead.", call: "Call",
      fDate: "Day", fTime: "Time", fPeople: "Guests", fName: "Name", fNote: "Notes (optional)", fNotePh: "Birthday, high chair, allergies…", fSend: "Request booking",
      h8: "FAQ", k9: "Visit us", h9: "In Ribeirada, Odivelas", showMap: "Show map", mapNote: "The map is by Google and only loads if you accept.",
      ftC: "Contact", ftH: "Opening hours", ftI: "Information", ftP: "Privacy & cookies", ftCk: "Cookie preferences",
      ckTxt: "We only use essential storage. The Google map loads only if you accept.", ckNo: "Decline", ckYes: "Accept",
      nav: [["Sea Menu", "#carta"], ["The house", "#galeria"], ["Reviews", "#criticas"], ["Contact", "#contacto"]],
      openNow: "Open now · until 23:30", closedToday: "Closed today · we open tomorrow at 12:00", opensAt: "Opens today at 12:00", closedNow: "Closed now · opens at 12:00",
      directions: "Directions", reviews: "Google reviews", askDish: "Book and order this dish", close: "Close",
      errDate: "Pick a day.", errClosed: "We're closed on Wednesdays. Please pick another day.", errName: "Please tell us your name.", errPast: "Pick a day from today onwards.",
      people: (n) => n + (n === 1 ? " guest" : " guests"), morePeople: "More than 12",
      doneT: "Request ready", doneWa: "Send via WhatsApp", doneCall: "Call to confirm",
      doneTxt: "To confirm your table, call us and say:", doneDemo: "With WhatsApp connected, this request arrives pre-written on the restaurant's phone.",
      msg: (d) => `Hello! I'd like to book a table at Ribeirada.\nDay: ${d.date}\nTime: ${d.time}\nGuests: ${d.people}\nName: ${d.name}${d.note ? "\nNotes: " + d.note : ""}`,
      sumDate: "Day", sumTime: "Time", sumPeople: "Guests", sumName: "Name" },
    es: { skip: "Saltar al contenido", since: "Desde 2001", book: "Reservar", bookTable: "Reservar mesa", seeMenu: "Ver la carta",
      k1: "Del vivero a la mesa", h1: "Lo que todos piden", p1: "Toque un plato para ver los detalles.",
      k2: "La carta", h2: "Carta del Mar", cartaSub: "Del vivero a la mesa · Odivelas · Desde 2001", fav: "El más pedido", vivo: "Vivo", special: "Sugerencia de la casa", demoPrices: "Precios orientativos en esta propuesta — a confirmar. Avísenos de alergias o intolerancias.",
      k3: "Desde 2001", h3: "Más de 20 años sirviendo a Odivelas", p3: "Abrimos en 2001 en Ribeirada con una idea sencilla: marisco fresco, vivo en nuestro vivero, y la cocina portuguesa de casa. Seguimos iguales en lo que importa.",
      f1: "abriendo puertas", f2: "en Google", f3: "reseñas de clientes", k4: "La casa", h4: "Salón, vivero y bodega", h5: "Véanos en movimiento",
      k6: "Lo que dicen", p6: "Media de 1747 reseñas en Google Maps.", k7: "Reservas", h7: "Guarde su mesa",
      p7: "Elija día y hora. El fin de semana se llena — reserve con antelación.", call: "Llamar",
      fDate: "Día", fTime: "Hora", fPeople: "Personas", fName: "Nombre", fNote: "Observaciones (opcional)", fNotePh: "Cumpleaños, trona, alergias…", fSend: "Pedir reserva",
      h8: "Preguntas frecuentes", k9: "Visítenos", h9: "En Ribeirada, Odivelas", showMap: "Ver mapa", mapNote: "El mapa es de Google y solo carga si acepta.",
      ftC: "Contacto", ftH: "Horario", ftI: "Información", ftP: "Privacidad y cookies", ftCk: "Preferencias de cookies",
      ckTxt: "Solo usamos almacenamiento esencial. El mapa de Google solo carga si acepta.", ckNo: "Rechazar", ckYes: "Aceptar",
      nav: [["Carta del Mar", "#carta"], ["La casa", "#galeria"], ["Reseñas", "#criticas"], ["Contacto", "#contacto"]],
      openNow: "Abierto ahora · hasta las 23:30", closedToday: "Hoy cerrado · abrimos mañana a las 12:00", opensAt: "Abre hoy a las 12:00", closedNow: "Cerrado ahora · abre a las 12:00",
      directions: "Cómo llegar", reviews: "reseñas Google", askDish: "Reservar y pedir este plato", close: "Cerrar",
      errDate: "Elija un día.", errClosed: "Los miércoles cerramos. Elija otro día.", errName: "Díganos su nombre.", errPast: "Elija un día a partir de hoy.",
      people: (n) => n + (n === 1 ? " persona" : " personas"), morePeople: "Más de 12",
      doneT: "Pedido listo", doneWa: "Enviar por WhatsApp", doneCall: "Llamar para confirmar",
      doneTxt: "Para confirmar su mesa, llámenos y diga:", doneDemo: "Con WhatsApp conectado, este pedido llega ya escrito al móvil del restaurante.",
      msg: (d) => `¡Hola! Quisiera reservar mesa en Ribeirada.\nDía: ${d.date}\nHora: ${d.time}\nPersonas: ${d.people}\nNombre: ${d.name}${d.note ? "\nObs.: " + d.note : ""}`,
      sumDate: "Día", sumTime: "Hora", sumPeople: "Personas", sumName: "Nombre" }
  };
  let lang = store.get("lang") || "pt";
  if (!UI[lang]) lang = "pt";
  const t = (k) => UI[lang][k] ?? UI.pt[k] ?? k;
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] || v.pt || "") : (v ?? "");
  const wa = (msg) => S.whatsapp ? `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}` : "";

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const applyTheme = (th) => {
    root.dataset.theme = th;
    $("#themeBtn")?.setAttribute("aria-label", th === "dark" ? "Modo claro" : "Modo escuro");
    $('meta[name="theme-color"]')?.setAttribute("content", th === "dark" ? "#060c17" : "#f7f9fb");
  };
  applyTheme(store.get("tema") || S.temaPadrao || "dark");
  $("#themeBtn")?.addEventListener("click", () => { const n = root.dataset.theme === "dark" ? "light" : "dark"; applyTheme(n); store.set("tema", n); });

  /* ---------- Menu + drawer ---------- */
  const drawer = $("#drawer"), burger = $("#burger");
  const openDrawer = (o) => { drawer.classList.toggle("open", o); drawer.setAttribute("aria-hidden", String(!o)); burger.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("lock", o); if (o) $("#drawerClose").focus(); };
  burger.addEventListener("click", () => openDrawer(true));
  $("#drawerClose").addEventListener("click", () => openDrawer(false));
  drawer.addEventListener("click", (e) => { if (e.target === drawer || e.target.closest("nav a")) openDrawer(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("open")) openDrawer(false); });
  const hdr = $("#hdr"), fab = $("#fab");
  const onScroll = () => {
    hdr.classList.toggle("hdr--small", scrollY > 40);
    const r = $("#reservas").getBoundingClientRect();
    fab.classList.toggle("hide", scrollY < 300 || (r.top < innerHeight && r.bottom > 0));
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Horário: aberto agora? ---------- */
  const openState = () => {
    const now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    if (d === S.diaFecho) return ["off", t("closedToday")];
    if (m >= 720 && m < 1410) return ["on", t("openNow")];
    if (m < 720) return ["off", t("opensAt")];
    return ["off", t("closedNow")];
  };

  /* ---------- Carta do Mar (estilo marítimo) ---------- */
  const C = S.carta || [];
  const ICONS = {
    crab: '<ellipse cx="12" cy="14" rx="6" ry="4"/><path d="M6.5 12.5 3.5 9.5M3.5 9.5C2.2 6.8 4.2 4.6 6.4 5.8M17.5 12.5l3-3M20.5 9.5c1.3-2.7-.7-4.9-2.9-3.7M8.5 17.2 6.5 20.5M15.5 17.2l2 3.3M10.5 18 9.6 21M13.5 18l.9 3"/>',
    shell: '<path d="M12 20 4 9c3-5 13-5 16 0Z"/><path d="M12 20 8 6.6M12 20V5.4M12 20l4-13.4"/>',
    fish: '<path d="M3 12c4-6 12-6 16 0-4 6-12 6-16 0Z"/><path d="m19 12 3-4v8Z"/><circle cx="7.5" cy="11" r=".9"/>',
    anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v13M8 10h8M4 14c1 4 4 6 8 6s7-2 8-6"/>',
    wheel: '<circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',
    glass: '<path d="M7 3h10c0 6-2 9-5 9S7 9 7 3Z"/><path d="M12 12v8M8 20h8"/>'
  };
  const icon = (k) => `<svg class="cs__ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.anchor}</svg>`;
  const selo = (s) => s === "fav" ? `<span class="selo selo--fav">★ ${esc(t("fav"))}</span>` : s === "vivo" ? `<span class="selo selo--vivo">≋ ${esc(t("vivo"))}</span>` : "";
  const drawMenu = () => {
    $("#chips").innerHTML = C.map((c) => `<a href="#c-${esc(c.id)}">${icon(c.icon)}<span>${esc(L(c.cat))}</span></a>`).join("");
    const E = S.especial;
    $("#special").innerHTML = E ? `
      <div class="sp__badge" aria-hidden="true">★</div>
      <div><p class="sp__k">${esc(t("special"))}</p><h3 class="sp__t">${esc(L(E.t))}</h3><p class="sp__d">${esc(L(E.d))}</p></div>
      <p class="sp__p">${esc(L(E.p))}</p>` : "";
    $("#menuList").innerHTML = C.map((c) => `
      <article class="cs" id="c-${esc(c.id)}">
        <header class="cs__head">${icon(c.icon)}<h3>${esc(L(c.cat))}</h3><span class="cs__line" aria-hidden="true"></span></header>
        ${c.nota ? `<p class="cs__nota">${esc(L(c.nota))}</p>` : ""}
        <ul class="cs__list">${c.itens.map(([n, p, d, s]) => `
          <li><div class="it__row"><span class="it__n">${esc(n)}</span><span class="it__dots" aria-hidden="true"></span><span class="it__p">${esc(p)}</span></div>
          ${d || s ? `<div class="it__sub">${s ? selo(s) : ""}${d ? `<span>${esc(L(d))}</span>` : ""}</div>` : ""}</li>`).join("")}
        </ul>
      </article>`).join("");
  };
  $("#chips").addEventListener("click", (e) => {
    const a = e.target.closest("a"); if (!a) return; e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - (hdr.offsetHeight + 70), behavior: "smooth" });
  });

  /* ---------- Galeria + lightbox ---------- */
  const G = S.galeria || [];
  const lb = $("#lb"), lbImg = $("#lbImg"); let li = 0;
  const show = (i) => { li = (i + G.length) % G.length; lbImg.src = G[li][0]; lbImg.alt = L(G[li][1]); $("#lbCap").textContent = L(G[li][1]); };
  const openLb = (i) => { show(i); lb.hidden = false; document.body.classList.add("lock"); $("#lbX").focus(); };
  const closeLb = () => { lb.hidden = true; document.body.classList.remove("lock"); };
  $("#gal").addEventListener("click", (e) => { const b = e.target.closest(".gal__item"); if (b) openLb(+b.dataset.i); });
  $("#lbX").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => show(li - 1));
  $("#lbNext").addEventListener("click", () => show(li + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  addEventListener("keydown", (e) => { if (lb.hidden) return; if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") show(li - 1); if (e.key === "ArrowRight") show(li + 1); });
  let x0 = null;
  lb.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
  lb.addEventListener("pointerup", (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) show(li + (dx < 0 ? 1 : -1)); });

  /* ---------- Reservas ---------- */
  const fDate = $("#fDate"), fTime = $("#fTime"), fPeople = $("#fPeople");
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date();
  fDate.min = iso(today);
  let first = new Date(today); if (first.getDay() === S.diaFecho) first.setDate(first.getDate() + 1);
  fDate.value = iso(first);
  const slots = []; for (let h = 12; h <= 22; h++) for (const m of ["00", "30"]) { slots.push(`${h}:${m}`); }
  fTime.innerHTML = slots.map((s) => `<option${s === "20:00" ? " selected" : ""}>${s}</option>`).join("");
  const drawPeople = () => {
    const v = fPeople.value || "2";
    fPeople.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${esc(t("people")(i + 1))}</option>`).join("") + `<option value="13+">${esc(t("morePeople"))}</option>`;
    fPeople.value = v;
  };
  const fmtDate = (s) => { try { return new Date(s + "T12:00").toLocaleDateString(lang === "pt" ? "pt-PT" : lang, { weekday: "long", day: "numeric", month: "long" }); } catch (e) { return s; } };
  $("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const err = $("#fErr"), name = $("#fName").value.trim();
    const fail = (m) => { err.textContent = m; err.hidden = false; };
    if (!fDate.value) return fail(t("errDate"));
    if (fDate.value < fDate.min) return fail(t("errPast"));
    if (new Date(fDate.value + "T12:00").getDay() === S.diaFecho) return fail(t("errClosed"));
    if (!name) { $("#fName").focus(); return fail(t("errName")); }
    err.hidden = true;
    const d = { date: fmtDate(fDate.value), time: fTime.value, people: fPeople.options[fPeople.selectedIndex].text, name, note: $("#fNote").value.trim() };
    const msg = t("msg")(d), link = wa(msg);
    $("#bookDoneBody").innerHTML = `<button class="modal__x" data-close aria-label="${esc(t("close"))}">✕</button>
      <div class="modal__pad"><p class="kicker">${esc(t("k7"))}</p><h3>${esc(t("doneT"))}</h3>
      <ul class="book-sum"><li><span>${esc(t("sumDate"))}</span><span>${esc(d.date)}</span></li><li><span>${esc(t("sumTime"))}</span><span>${esc(d.time)}</span></li><li><span>${esc(t("sumPeople"))}</span><span>${esc(d.people)}</span></li><li><span>${esc(t("sumName"))}</span><span>${esc(d.name)}</span></li></ul>
      ${link ? `<a class="btn btn--accent btn--block" href="${esc(link)}" target="_blank" rel="noopener">${esc(t("doneWa"))}</a>`
             : `<p class="muted">${esc(t("doneTxt"))}</p><p class="book-msg">${esc(msg)}</p><a class="btn btn--accent btn--block" href="tel:${esc(S.telefoneLink)}">${esc(t("doneCall"))} · ${esc(S.telefone)}</a><p class="small muted demo-note">${esc(t("doneDemo"))}</p>`}
      </div>`;
    $("#bookDone").showModal();
  });
  $("#bookDone").addEventListener("click", (e) => { if (e.target.id === "bookDone" || e.target.closest("[data-close]")) $("#bookDone").close(); });

  /* ---------- Desenhar tudo o que depende da língua ---------- */
  const render = () => {
    root.lang = lang === "pt" ? "pt-PT" : lang;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const nav = t("nav");
    $("#nav").innerHTML = nav.map(([n, h]) => `<a href="${h}">${esc(n)}</a>`).join("");
    $("#drawerNav").innerHTML = nav.map(([n, h]) => `<a href="${h}">${esc(n)}</a>`).join("") + `<a class="btn btn--accent" href="#reservas">${esc(t("bookTable"))}</a>`;
    const fx = (S.faixa || []).map((x) => `<span>${esc(L(x))}</span>`).join("");
    $("#faixa").innerHTML = fx + `<span aria-hidden="true" class="faixa__dup">${fx}</span>`;
    $("#heroTitulo").textContent = L(S.hero?.titulo);
    $("#heroTexto").textContent = L(S.hero?.texto);
    $("#heroRating").textContent = `${S.google.nota} · ${S.google.criticas} ${t("reviews")}`;
    const [st, txt] = openState();
    $("#openNow").innerHTML = `<span class="dot${st === "on" ? "" : " dot--off"}" aria-hidden="true"></span>${esc(txt)}`;
    drawMenu(); drawPeople();
    $("#gal").innerHTML = G.map(([src, cap], i) => `<button class="gal__item" data-i="${i}" aria-label="${esc(L(cap))}"><img src="${esc(src)}" alt="${esc(L(cap))}" loading="lazy" decoding="async" width="600" height="600"><span>${esc(L(cap))}</span></button>`).join("");
    $("#reelList").innerHTML = (S.reels || []).map((r) => `<a class="reel" href="${esc(r.url)}" target="_blank" rel="noopener"><img src="${esc(r.img)}" alt="" loading="lazy" decoding="async" width="360" height="640"><span class="reel__play" aria-hidden="true">▶</span><span class="reel__t">${esc(L(r.t))}</span></a>`).join("");
    $("#quotes").innerHTML = (S.criticas || []).map(([who, q]) => `<blockquote class="quote"><p>“${esc(L(q))}”</p><footer><span class="stars">★★★★★</span> · ${esc(who)} · Google</footer></blockquote>`).join("");
    $("#faqList").innerHTML = (S.faq || []).map(([q, a]) => `<details><summary>${esc(L(q))}</summary><p>${esc(L(a))}</p></details>`).join("");
    const td = new Date().getDay();
    const hor = (S.horario || []).map(([d, h], i) => { const isToday = (td === S.diaFecho) === (i === 1); return `<li class="${isToday ? "today" : ""}"><span>${esc(L(d))}</span><span>${esc(L(h))}</span></li>`; }).join("");
    $("#contactInfo").innerHTML = `
      <p><strong>${esc(S.nome)}</strong><br>${esc(S.morada)}</p>
      <ul class="hours">${hor}</ul>
      <p><a href="tel:${esc(S.telefoneLink)}">☎ ${esc(S.telefone)}</a><br><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
      <div class="contact__btns"><a class="btn btn--accent" href="#reservas">${esc(t("bookTable"))}</a><a class="btn btn--ghost" href="${esc(S.mapaLink)}" target="_blank" rel="noopener">${esc(t("directions"))}</a></div>`;
    $("#ftrContact").innerHTML = `<li><a href="tel:${esc(S.telefoneLink)}">${esc(S.telefone)}</a></li><li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li><li>${esc(S.morada)}</li>`;
    $("#ftrHours").innerHTML = (S.horario || []).map(([d, h]) => `<li>${esc(L(d))}: ${esc(L(h))}</li>`).join("");
    $("#ftrLegal").textContent = `© ${new Date().getFullYear()} ${S.empresa}${S.nif ? " · NIF " + S.nif : ""}`;
    observe();
  };
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; store.set("lang", lang); render(); }));

  /* ---------- Cookies + mapa só com consentimento ---------- */
  const ck = $("#cookies");
  const loadMap = () => { if (!S.mapa || $("#map iframe")) return; $("#map").innerHTML = `<iframe src="${esc(S.mapa)}" title="Mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`; };
  const decide = (yes) => { store.set("cookies", yes ? "sim" : "nao"); ck.hidden = true; if (yes) loadMap(); };
  $("#ckYes").addEventListener("click", () => decide(true));
  $("#ckNo").addEventListener("click", () => decide(false));
  $("#mapBtn")?.addEventListener("click", () => decide(true));
  $("#cookiePrefs").addEventListener("click", () => { ck.hidden = false; });

  /* ---------- Aparecer ao fazer scroll ---------- */
  let io = null;
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  }
  function observe() { if (!io) return; $$(".sec__head, .cs, .quote, .reel").forEach((el) => { if (!el.classList.contains("rv")) { el.classList.add("rv"); io.observe(el); } }); }

  render();
  onScroll();
  addEventListener("load", onScroll);
  addEventListener("pageshow", onScroll);
  addEventListener("resize", onScroll, { passive: true });
  /* Vídeo do topo: sem animação para quem pede menos movimento; tenta reproduzir no iPhone */
  const hv = $("#heroVideo");
  if (hv) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { hv.removeAttribute("autoplay"); hv.pause(); }
    else { hv.muted = true; const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
  }
  const prev = store.get("cookies");
  if (prev === "sim") loadMap(); else if (!prev) ck.hidden = false;
})();
