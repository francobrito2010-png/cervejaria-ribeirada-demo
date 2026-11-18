/* Cervejaria da Ribeirada — lógica do site (v2). Lê window.SITE (data.js). Sem dependências. */
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
    pt: { skip: "Saltar para o conteúdo", book: "Reservar", bookTable: "Reservar Mesa", seeMenu: "Ver a Carta", seeWine: "Ver a Adega",
      nCarta: "A Carta", nCasa: "A Casa", nCriticas: "Críticas", nReservas: "Reservas", nContacto: "Contactos",
      heroK: "Marisqueira em Odivelas desde 2001", heroLead: "Marisco vivo do nosso viveiro, cozinha portuguesa e uma adega à altura.",
      s1T: "O melhor marisco de Odivelas, desde 2001", s1P: "Há mais de vinte anos que servimos a Ribeirada com marisco fresco, escolhido vivo no nosso viveiro, e a cozinha portuguesa que se come em casa. Uma casa de família, onde se vem celebrar, partilhar e voltar.",
      s2T: "Do viveiro para a mesa", s2P: "Lavagante azul, santola, sapateira e carabineiro: escolhe-se vivo, coze-se na hora e serve-se simples, como deve ser. Ao peso, ao preço do dia.",
      s3T: "Uma adega à altura do mar", s3P: "Garrafeira climatizada com vinhos portugueses escolhidos para acompanhar marisco, peixe e os pratos de tacho da casa. Peça a nossa sugestão.",
      h2: "A Carta", cartaSub: "Do viveiro para a mesa · Desde 2001", fav: "Mais pedido", vivo: "Vivo", special: "Sugestão da Casa",
      demoPrices: "Preços indicativos nesta proposta — a confirmar com a casa. Informe-nos de alergias ou intolerâncias.",
      reviews: "críticas Google", h7: "Reservas", p7: "Escolha o dia e a hora. Ao fim de semana a sala enche — reserve com antecedência.", orCall: "Ou ligue-nos:",
      fDate: "Dia", fTime: "Hora", fPeople: "Pessoas", fName: "Nome", fNote: "Observações (opcional)", fNotePh: "Aniversário, cadeira de bebé, alergias…", fSend: "Pedir Reserva",
      h8: "Perguntas Frequentes", h9: "Visite-nos", showMap: "Ver Mapa", mapNote: "O mapa é do Google e só carrega se aceitar.", directions: "Como Chegar",
      ftC: "Contactos", ftH: "Horário", ftI: "Informação", ftS: "Redes", ftP: "Privacidade e cookies", ftCk: "Preferências de cookies",
      ckTxt: "Usamos apenas armazenamento essencial. O mapa do Google só carrega se aceitar.", ckNo: "Recusar", ckYes: "Aceitar",
      openNow: "Aberto agora · até às 23:30", closedToday: "Hoje encerrado · abrimos amanhã às 12:00", opensAt: "Abre hoje às 12:00", closedNow: "Fechado agora · abre às 12:00",
      close: "Fechar", errDate: "Escolha um dia.", errClosed: "À quarta-feira estamos encerrados. Escolha outro dia.", errName: "Diga-nos o seu nome.", errPast: "Escolha um dia a partir de hoje.",
      people: (n) => n + (n === 1 ? " pessoa" : " pessoas"), morePeople: "Mais de 12",
      doneT: "Pedido pronto", doneWa: "Enviar por WhatsApp", doneCall: "Ligar para confirmar", doneTxt: "Para confirmar a sua mesa, ligue-nos e diga:",
      doneDemo: "Com WhatsApp ligado ao site, este pedido chega já escrito ao telemóvel da casa.",
      msg: (d) => `Olá! Gostava de reservar mesa na Ribeirada.\nDia: ${d.date}\nHora: ${d.time}\nPessoas: ${d.people}\nNome: ${d.name}${d.note ? "\nObs.: " + d.note : ""}`,
      sumDate: "Dia", sumTime: "Hora", sumPeople: "Pessoas", sumName: "Nome" },
    en: { skip: "Skip to content", book: "Book", bookTable: "Book a Table", seeMenu: "See the Menu", seeWine: "See the Cellar",
      nCarta: "Menu", nCasa: "The House", nCriticas: "Reviews", nReservas: "Bookings", nContacto: "Contact",
      heroK: "Seafood restaurant in Odivelas since 2001", heroLead: "Live shellfish from our own tank, Portuguese cooking and a cellar to match.",
      s1T: "The finest seafood in Odivelas, since 2001", s1P: "For over twenty years we have served Ribeirada fresh shellfish, picked alive from our own tank, and the Portuguese food you'd eat at home. A family house to celebrate, share and come back to.",
      s2T: "From our tank to your table", s2P: "Blue lobster, spider crab, brown crab and scarlet prawn: picked alive, cooked to order and served simply, as it should be. By weight, at the day's price.",
      s3T: "A cellar worthy of the sea", s3P: "A climate-controlled cellar of Portuguese wines chosen to pair with shellfish, fish and our slow-cooked dishes. Ask for our suggestion.",
      h2: "The Menu", cartaSub: "From our tank to your table · Since 2001", fav: "Most ordered", vivo: "Live", special: "House Suggestion",
      demoPrices: "Indicative prices in this proposal — to be confirmed. Please tell us about allergies or intolerances.",
      reviews: "Google reviews", h7: "Bookings", p7: "Pick a day and time. Weekends fill up — book ahead.", orCall: "Or call us:",
      fDate: "Day", fTime: "Time", fPeople: "Guests", fName: "Name", fNote: "Notes (optional)", fNotePh: "Birthday, high chair, allergies…", fSend: "Request Booking",
      h8: "FAQ", h9: "Visit Us", showMap: "Show Map", mapNote: "The map is by Google and only loads if you accept.", directions: "Directions",
      ftC: "Contact", ftH: "Opening Hours", ftI: "Information", ftS: "Social", ftP: "Privacy & cookies", ftCk: "Cookie preferences",
      ckTxt: "We only use essential storage. The Google map loads only if you accept.", ckNo: "Decline", ckYes: "Accept",
      openNow: "Open now · until 23:30", closedToday: "Closed today · we open tomorrow at 12:00", opensAt: "Opens today at 12:00", closedNow: "Closed now · opens at 12:00",
      close: "Close", errDate: "Pick a day.", errClosed: "We're closed on Wednesdays. Please pick another day.", errName: "Please tell us your name.", errPast: "Pick a day from today onwards.",
      people: (n) => n + (n === 1 ? " guest" : " guests"), morePeople: "More than 12",
      doneT: "Request ready", doneWa: "Send via WhatsApp", doneCall: "Call to confirm", doneTxt: "To confirm your table, call us and say:",
      doneDemo: "With WhatsApp connected, this request arrives pre-written on the restaurant's phone.",
      msg: (d) => `Hello! I'd like to book a table at Ribeirada.\nDay: ${d.date}\nTime: ${d.time}\nGuests: ${d.people}\nName: ${d.name}${d.note ? "\nNotes: " + d.note : ""}`,
      sumDate: "Day", sumTime: "Time", sumPeople: "Guests", sumName: "Name" },
    es: { skip: "Saltar al contenido", book: "Reservar", bookTable: "Reservar Mesa", seeMenu: "Ver la Carta", seeWine: "Ver la Bodega",
      nCarta: "La Carta", nCasa: "La Casa", nCriticas: "Reseñas", nReservas: "Reservas", nContacto: "Contacto",
      heroK: "Marisquería en Odivelas desde 2001", heroLead: "Marisco vivo de nuestro vivero, cocina portuguesa y una bodega a la altura.",
      s1T: "El mejor marisco de Odivelas, desde 2001", s1P: "Desde hace más de veinte años servimos en Ribeirada marisco fresco, elegido vivo en nuestro vivero, y la cocina portuguesa de casa. Una casa familiar para celebrar, compartir y volver.",
      s2T: "Del vivero a la mesa", s2P: "Bogavante azul, centollo, buey y carabinero: se elige vivo, se cuece al momento y se sirve sencillo, como debe ser. Al peso, al precio del día.",
      s3T: "Una bodega a la altura del mar", s3P: "Bodega climatizada con vinos portugueses elegidos para acompañar marisco, pescado y los guisos de la casa. Pida nuestra sugerencia.",
      h2: "La Carta", cartaSub: "Del vivero a la mesa · Desde 2001", fav: "El más pedido", vivo: "Vivo", special: "Sugerencia de la Casa",
      demoPrices: "Precios orientativos en esta propuesta — a confirmar. Avísenos de alergias o intolerancias.",
      reviews: "reseñas Google", h7: "Reservas", p7: "Elija día y hora. El fin de semana se llena — reserve con antelación.", orCall: "O llámenos:",
      fDate: "Día", fTime: "Hora", fPeople: "Personas", fName: "Nombre", fNote: "Observaciones (opcional)", fNotePh: "Cumpleaños, trona, alergias…", fSend: "Pedir Reserva",
      h8: "Preguntas Frecuentes", h9: "Visítenos", showMap: "Ver Mapa", mapNote: "El mapa es de Google y solo carga si acepta.", directions: "Cómo Llegar",
      ftC: "Contacto", ftH: "Horario", ftI: "Información", ftS: "Redes", ftP: "Privacidad y cookies", ftCk: "Preferencias de cookies",
      ckTxt: "Solo usamos almacenamiento esencial. El mapa de Google solo carga si acepta.", ckNo: "Rechazar", ckYes: "Aceptar",
      openNow: "Abierto ahora · hasta las 23:30", closedToday: "Hoy cerrado · abrimos mañana a las 12:00", opensAt: "Abre hoy a las 12:00", closedNow: "Cerrado ahora · abre a las 12:00",
      close: "Cerrar", errDate: "Elija un día.", errClosed: "Los miércoles cerramos. Elija otro día.", errName: "Díganos su nombre.", errPast: "Elija un día a partir de hoy.",
      people: (n) => n + (n === 1 ? " persona" : " personas"), morePeople: "Más de 12",
      doneT: "Pedido listo", doneWa: "Enviar por WhatsApp", doneCall: "Llamar para confirmar", doneTxt: "Para confirmar su mesa, llámenos y diga:",
      doneDemo: "Con WhatsApp conectado, este pedido llega ya escrito al móvil del restaurante.",
      msg: (d) => `¡Hola! Quisiera reservar mesa en Ribeirada.\nDía: ${d.date}\nHora: ${d.time}\nPersonas: ${d.people}\nNombre: ${d.name}${d.note ? "\nObs.: " + d.note : ""}`,
      sumDate: "Día", sumTime: "Hora", sumPeople: "Personas", sumName: "Nombre" }
  };
  let lang = store.get("lang") || "pt";
  if (!UI[lang]) lang = "pt";
  const t = (k) => UI[lang][k] ?? UI.pt[k] ?? k;
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] || v.pt || "") : (v ?? "");
  const wa = (msg) => S.whatsapp ? `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}` : "";

  /* ---------- Vídeo do topo: versão telemóvel ou computador ---------- */
  const hv = $("#heroVideo");
  if (hv) {
    const desk = matchMedia("(min-aspect-ratio: 4/5)").matches;
    hv.poster = desk ? "img/hero-poster-desk.webp" : "img/hero-poster.webp";
    hv.src = desk ? "img/hero-desk.mp4?v=2" : "img/hero.mp4?v=2";
    hv.muted = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { hv.removeAttribute("autoplay"); }
    else { const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
  }

  /* ---------- Menu móvel ---------- */
  const drawer = $("#drawer"), burger = $("#burger");
  const openDrawer = (o) => { drawer.classList.toggle("open", o); drawer.setAttribute("aria-hidden", String(!o)); burger.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("lock", o); if (o) $("#drawerClose").focus(); };
  burger.addEventListener("click", () => openDrawer(true));
  $("#drawerClose").addEventListener("click", () => openDrawer(false));
  drawer.addEventListener("click", (e) => { if (e.target === drawer || e.target.closest("nav a")) openDrawer(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("open")) openDrawer(false); });

  /* Botão fixo "Reservar" no telemóvel: só depois do topo e escondido na secção de reservas */
  const fab = $("#fab");
  const onScroll = () => {
    const r = $("#reservas").getBoundingClientRect();
    fab.classList.toggle("hide", scrollY < innerHeight * .7 || (r.top < innerHeight && r.bottom > 0));
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  addEventListener("load", onScroll);

  /* ---------- Horário ---------- */
  const openState = () => {
    const now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    if (d === S.diaFecho) return ["off", t("closedToday")];
    if (m >= 720 && m < 1410) return ["on", t("openNow")];
    if (m < 720) return ["off", t("opensAt")];
    return ["off", t("closedNow")];
  };

  /* ---------- A Carta ---------- */
  const C = S.carta || [];
  const selo = (s) => s === "fav" ? `<span class="selo">${esc(t("fav"))}</span>` : s === "vivo" ? `<span class="selo">${esc(t("vivo"))}</span>` : "";
  const drawMenu = () => {
    $("#chips").innerHTML = C.map((c) => `<a href="#c-${esc(c.id)}">${esc(L(c.cat))}</a>`).join("");
    const E = S.especial;
    $("#special").innerHTML = E ? `<p class="sp__k">${esc(t("special"))}</p><h3 class="sp__t">${esc(L(E.t))}</h3><p class="sp__d">${esc(L(E.d))}</p><p class="sp__p">${esc(L(E.p))}</p>` : "";
    $("#menuList").innerHTML = C.map((c) => `
      <article class="cs" id="c-${esc(c.id)}">
        <header class="cs__head"><h3>${esc(L(c.cat))}</h3></header>
        ${c.nota ? `<p class="cs__nota">${esc(L(c.nota))}</p>` : ""}
        <ul class="cs__list">${c.itens.map(([n, p, d, s]) => `
          <li><div class="it__row"><span class="it__n">${esc(n)}</span><span class="it__dots" aria-hidden="true"></span><span class="it__p">${esc(p)}</span></div>
          ${d || s ? `<div class="it__sub">${s ? selo(s) : ""}${d ? `<span>${esc(L(d))}</span>` : ""}</div>` : ""}</li>`).join("")}
        </ul>
      </article>`).join("");
  };

  /* ---------- Críticas (rotativas) ---------- */
  const Q = S.criticas || [];
  let qi = 0, qTimer = null;
  const showQ = (i) => {
    qi = (i + Q.length) % Q.length;
    $$("#quotes .quote").forEach((el, j) => el.classList.toggle("on", j === qi));
    $$("#qDots button").forEach((b, j) => b.setAttribute("aria-selected", String(j === qi)));
  };
  const drawQuotes = () => {
    $("#quotes").innerHTML = Q.map(([who, q]) => `<blockquote class="quote"><p>“${esc(L(q))}”</p><footer><cite>${esc(who)}</cite>Google</footer></blockquote>`).join("");
    $("#qDots").innerHTML = Q.map((_, i) => `<button role="tab" aria-label="${i + 1}" aria-selected="false" data-i="${i}"></button>`).join("");
    showQ(qi);
  };
  $("#qDots").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; showQ(+b.dataset.i); restartQ(); });
  const restartQ = () => { clearInterval(qTimer); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) qTimer = setInterval(() => showQ(qi + 1), 6500); };

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
  const first = new Date(today); if (first.getDay() === S.diaFecho) first.setDate(first.getDate() + 1);
  fDate.value = iso(first);
  const slots = []; for (let h = 12; h <= 22; h++) for (const m of ["00", "30"]) slots.push(`${h}:${m}`);
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
      <div class="modal__pad"><h3>${esc(t("doneT"))}</h3>
      <ul class="book-sum"><li><span>${esc(t("sumDate"))}</span><span>${esc(d.date)}</span></li><li><span>${esc(t("sumTime"))}</span><span>${esc(d.time)}</span></li><li><span>${esc(t("sumPeople"))}</span><span>${esc(d.people)}</span></li><li><span>${esc(t("sumName"))}</span><span>${esc(d.name)}</span></li></ul>
      ${link ? `<a class="btn btn--navy" href="${esc(link)}" target="_blank" rel="noopener">${esc(t("doneWa"))}</a>`
             : `<p>${esc(t("doneTxt"))}</p><p class="book-msg">${esc(msg)}</p><a class="btn btn--navy" href="tel:${esc(S.telefoneLink)}">${esc(t("doneCall"))} · ${esc(S.telefone)}</a><p class="note">${esc(t("doneDemo"))}</p>`}
      </div>`;
    $("#bookDone").showModal();
  });
  $("#bookDone").addEventListener("click", (e) => { if (e.target.id === "bookDone" || e.target.closest("[data-close]")) $("#bookDone").close(); });

  /* ---------- Desenhar tudo o que depende da língua ---------- */
  const render = () => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : lang;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#heroTexto").textContent = t("heroLead");
    $("#ratingLine").textContent = `${S.google.nota} ★ · ${S.google.criticas} ${t("reviews")}`;
    drawMenu(); drawQuotes(); drawPeople();
    $("#gal").innerHTML = G.map(([src, cap], i) => `<button class="gal__item" data-i="${i}" aria-label="${esc(L(cap))}"><img src="${esc(src)}" alt="${esc(L(cap))}" loading="lazy" decoding="async" width="600" height="600"></button>`).join("");
    $("#faqList").innerHTML = (S.faq || []).map(([q, a]) => `<details><summary>${esc(L(q))}</summary><p>${esc(L(a))}</p></details>`).join("");
    const td = new Date().getDay();
    const hor = (S.horario || []).map(([d, h], i) => { const isToday = (td === S.diaFecho) === (i === 1); return `<li class="${isToday ? "today" : ""}"><span>${esc(L(d))}</span><span>${esc(L(h))}</span></li>`; }).join("");
    const [st, txt] = openState();
    $("#contactInfo").innerHTML = `
      <p>${esc(S.morada)}</p>
      <p class="open-now"><span class="dot${st === "on" ? "" : " dot--off"}" aria-hidden="true"></span>${esc(txt)}</p>
      <ul class="hours">${hor}</ul>
      <p><a href="tel:${esc(S.telefoneLink)}">${esc(S.telefone)}</a> · <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
      <div class="info__btns"><a class="btn btn--navy" href="#reservas">${esc(t("bookTable"))}</a><a class="btn btn--line-navy" href="${esc(S.mapaLink)}" target="_blank" rel="noopener">${esc(t("directions"))}</a></div>`;
    $("#ftrContact").innerHTML = `<li>${esc(S.morada)}</li><li><a href="tel:${esc(S.telefoneLink)}">${esc(S.telefone)}</a></li><li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>`;
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
  function observe() { if (!io) return; $$(".split__txt, .cs, .carta__head, .book__inner, .info__txt").forEach((el) => { if (!el.classList.contains("rv")) { el.classList.add("rv"); io.observe(el); } }); }

  render();
  restartQ();
  onScroll();
  const prev = store.get("cookies");
  if (prev === "sim") loadMap(); else if (!prev) ck.hidden = false;
})();
