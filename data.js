/* =====================================================================
   DADOS DO SITE — Cervejaria da Ribeirada (proposta / demonstração)
   Textos em 3 línguas: { pt, en, es }. Se faltar uma, usa o pt.
   Tudo o que está marcado  // DEMO  é de exemplo e deve ser confirmado
   com o cliente (preços, nomes de pratos, WhatsApp móvel).
   ===================================================================== */
window.SITE = {
  // ---- Marca ----
  nome: "Cervejaria da Ribeirada",
  marca: "Ribeirada",
  desde: 2001,
  temaPadrao: "dark",

  // ---- Contactos (dados reais: Instagram + Google Maps) ----
  telefone: "21 934 5551",
  telefoneLink: "+351219345551",
  whatsapp: "",                     // DEMO: o 21 934 5551 é fixo. Pedir número móvel ao cliente (ex.: "3519XXXXXXXX")
  email: "geral@cervejariadaribeirada.com",
  morada: "Av. Amália Rodrigues 10C, 2675-623 Odivelas",
  mapa: "https://www.google.com/maps?q=Cervejaria+da+Ribeirada,+Av.+Am%C3%A1lia+Rodrigues+10C,+2675-623+Odivelas&output=embed",
  mapaLink: "https://maps.app.goo.gl/YEdTtWYTGyNqYnZ97",
  google: { nota: "4,2", criticas: "1747" },
  horario: [
    [{ pt: "Quinta a terça", en: "Thursday to Tuesday", es: "Jueves a martes" }, "12:00–23:30"],
    [{ pt: "Quarta-feira", en: "Wednesday", es: "Miércoles" }, { pt: "Encerrado", en: "Closed", es: "Cerrado" }]
  ],
  diaFecho: 3, // 0=domingo … 3=quarta
  redes: { instagram: "https://www.instagram.com/cervejariadaribeirada/" },
  empresa: "Cervejaria da Ribeirada, Lda.",
  nif: "", // [A completar pelo cliente]

  faixa: [
    { pt: "Desde 2001 em Odivelas", en: "Since 2001 in Odivelas", es: "Desde 2001 en Odivelas" },
    { pt: "Marisco vivo do nosso viveiro", en: "Live shellfish from our own tank", es: "Marisco vivo de nuestro vivero" },
    { pt: "★ 4,2 em 1747 críticas Google", en: "★ 4.2 from 1,747 Google reviews", es: "★ 4,2 en 1747 reseñas de Google" },
    { pt: "Aberto todos os dias exceto quarta", en: "Open every day except Wednesday", es: "Abierto todos los días excepto miércoles" },
    { pt: "Reservas: 21 934 5551", en: "Bookings: +351 21 934 5551", es: "Reservas: +351 21 934 5551" }
  ],

  hero: {
    titulo: { pt: "O mar chega vivo à sua mesa.", en: "The sea arrives alive at your table.", es: "El mar llega vivo a su mesa." },
    texto: {
      pt: "Marisco do viveiro, cozinha portuguesa de tacho e uma adega à altura. Em Odivelas, desde 2001.",
      en: "Shellfish from our tank, traditional Portuguese cooking and a cellar to match. In Odivelas since 2001.",
      es: "Marisco del vivero, cocina portuguesa de siempre y una bodega a la altura. En Odivelas, desde 2001."
    },
    video: "img/hero.mp4", poster: "img/hero-poster.webp" // vídeo do Reel DYFfiPvtzbB (0–9 s)
  },

  // ---- Carta do Mar ----
  // Pratos tirados das críticas Google (marisco, petiscos, sapateira, camarão, santola, lavagante azul,
  // presunto, queijo amanteigado, pão torrado) e dos vídeos do Instagram (carabineiro, viveiro, adega).
  // DEMO: preços indicativos e alguns pratos de cervejaria clássica — confirmar com a casa.
  // Item: [nome, preço, descrição {pt,en,es} opcional, selo opcional: "fav" (mais pedido) | "vivo" (do viveiro)]
  especial: {
    t: { pt: "Mariscada Ribeirada", en: "Ribeirada Seafood Platter", es: "Mariscada Ribeirada" },
    d: { pt: "Para dois: sapateira recheada, santola, camarão, lavagante azul do viveiro e o prego para fechar.", en: "For two: dressed brown crab, spider crab, prawns, blue lobster from the tank and a steak roll to finish.", es: "Para dos: buey relleno, centollo, gambas, bogavante azul del vivero y el prego para terminar." },
    p: { pt: "desde 79 € · 2 pessoas", en: "from €79 · for 2", es: "desde 79 € · 2 personas" } // DEMO
  },
  carta: [
    { id: "viveiro", icon: "crab", cat: { pt: "Do Viveiro", en: "From the Tank", es: "Del Vivero" },
      nota: { pt: "Vivo, escolhido por si e cozido na hora. Ao peso, preço do dia.", en: "Alive, picked by you and cooked to order. By weight, at the day's price.", es: "Vivo, elegido por usted y cocido al momento. Al peso, precio del día." },
      itens: [
        ["Lavagante azul", "PVP / kg", { pt: "O rei do viveiro", en: "King of the tank", es: "El rey del vivero" }, "vivo"],
        ["Santola", "PVP / kg", { pt: "Recheada à moda da casa", en: "Dressed, house style", es: "Rellena al estilo de la casa" }, "vivo"],
        ["Sapateira recheada", "PVP / kg", { pt: "A mais pedida pelos clientes", en: "Our guests' favourite", es: "La más pedida" }, "fav"],
        ["Carabineiro", "PVP / kg", { pt: "Grelhado ou cozido", en: "Grilled or boiled", es: "A la plancha o cocido" }],
        ["Camarão cozido", "PVP / kg"],
        ["Percebes", "PVP / kg"]
      ]},
    { id: "petiscos", icon: "shell", cat: { pt: "Petiscos", en: "Small Plates", es: "Para Picar" },
      itens: [
        ["Presunto cortado à faca", "12,50 €", { pt: "Fatiado na hora, à vista", en: "Hand-carved at the table", es: "Cortado al momento" }, "fav"],
        ["Queijo amanteigado", "9,50 €"],
        ["Pão torrado com manteiga", "2,50 €"],
        ["Amêijoa à Bulhão Pato", "17,50 €", { pt: "Alho, coentros e limão", en: "Garlic, coriander, lemon", es: "Ajo, cilantro y limón" }],
        ["Gambas à guilho", "16,00 €"],
        ["Pica-pau do lombo", "13,00 €"]
      ]},
    { id: "mar", icon: "fish", cat: { pt: "Do Mar", en: "From the Sea", es: "Del Mar" },
      itens: [
        ["Arroz de marisco", "38,00 €", { pt: "Malandrinho, para dois", en: "Soupy rice, for two", es: "Meloso, para dos" }],
        ["Cataplana de peixe e marisco", "36,00 €", { pt: "Para dois", en: "For two", es: "Para dos" }],
        ["Bacalhau à Ribeirada", "17,50 €"],
        ["Peixe grelhado do dia", "PVP / kg"]
      ]},
    { id: "terra", icon: "anchor", cat: { pt: "Da Terra", en: "From the Land", es: "De la Tierra" },
      itens: [
        ["Prego no pão", "6,50 €", { pt: "O fecho clássico de uma mariscada", en: "The classic way to end a seafood feast", es: "El cierre clásico de una mariscada" }, "fav"],
        ["Bife à cervejaria", "16,00 €"],
        ["Prato de tacho do dia", "15,00 €"]
      ]},
    { id: "doces", icon: "wheel", cat: { pt: "Doces", en: "Desserts", es: "Postres" },
      itens: [["Doce da casa", "4,50 €"], ["Leite-creme queimado", "4,50 €"], ["Mousse de chocolate", "4,00 €"], ["Fruta da época", "3,50 €"]]},
    { id: "adega", icon: "glass", cat: { pt: "Adega", en: "Cellar", es: "Bodega" },
      nota: { pt: "Garrafeira climatizada de vinhos portugueses. Peça a sugestão para o seu prato.", en: "Climate-controlled cellar of Portuguese wines. Ask for a pairing.", es: "Bodega climatizada de vinos portugueses. Pida la sugerencia para su plato." },
      itens: [["Imperial · Caneca", "2,00 € · 4,50 €"], ["Vinho da casa, jarro", "9,00 €"], ["Alvarinho", "22,00 €"], ["Douro tinto", "19,00 €"], ["Espumante Bairrada", "24,00 €"]]}
  ],

  galeria: [
    ["img/viveiro.webp", { pt: "O viveiro", en: "The tank", es: "El vivero" }],
    ["img/sala-entrada.webp", { pt: "A entrada", en: "Entrance", es: "La entrada" }],
    ["img/mesa.webp", { pt: "A sala", en: "Dining room", es: "El salón" }],
    ["img/assado.webp", { pt: "A adega", en: "The cellar", es: "La bodega" }],
    ["img/mar.webp", { pt: "Do mar", en: "From the sea", es: "Del mar" }],
    ["img/sala.webp", { pt: "Mesa posta", en: "Table set", es: "Mesa puesta" }]
  ],

  reels: [
    { img: "img/reel-carabineiro.webp", url: "https://www.instagram.com/cervejariadaribeirada/p/Da5UeJzN0zR/", t: { pt: "Frescura que impõe respeito", en: "Freshness that commands respect", es: "Frescura que impone respeto" } },
    { img: "img/reel-presunto.webp", url: "https://www.instagram.com/cervejariadaribeirada/reel/DYo7W2mowFw/", t: { pt: "Cortado à faca", en: "Hand-carved", es: "Cortado a cuchillo" } },
    { img: "img/reel-mesa.webp", url: "https://www.instagram.com/cervejariadaribeirada/reel/DZKx-rOtW7d/", t: { pt: "A nossa sala", en: "Our dining room", es: "Nuestro salón" } },
    { img: "img/reel-sala.webp", url: "https://www.instagram.com/cervejariadaribeirada/reel/DfkdVZNxNIa/", t: { pt: "À mesa", en: "At the table", es: "A la mesa" } }
  ],

  // Críticas reais do Google Maps (excertos curtos)
  criticas: [
    ["João M.", { pt: "Serviço de excelência! Comida de excelência!", en: "Excellent service! Excellent food!", es: "¡Servicio excelente! ¡Comida excelente!" }],
    ["Valeriia C.", { pt: "Porções generosas e sabores incríveis. Funcionários simpáticos e atenciosos.", en: "Generous portions and incredible flavours. Friendly, attentive staff.", es: "Raciones generosas y sabores increíbles. Personal amable y atento." }],
    ["Cliente Google", { pt: "Um ótimo restaurante com uma boa relação qualidade, quantidade, preço.", en: "A great restaurant with good value for quality and quantity.", es: "Un gran restaurante con buena relación calidad, cantidad y precio." }]
  ],

  faq: [
    [{ pt: "Qual é o dia de descanso?", en: "Which day are you closed?", es: "¿Qué día cierran?" },
     { pt: "Estamos encerrados à quarta-feira. Nos outros dias, das 12:00 às 23:30.", en: "We're closed on Wednesdays. Other days, 12:00 to 23:30.", es: "Cerramos los miércoles. El resto de días, de 12:00 a 23:30." }],
    [{ pt: "Como funciona o preço do marisco?", en: "How is shellfish priced?", es: "¿Cómo funciona el precio del marisco?" },
     { pt: "O marisco vivo é vendido ao peso, ao preço do dia. Diga-nos quanto quer gastar e sugerimos.", en: "Live shellfish is sold by weight at the day's price. Tell us your budget and we'll suggest.", es: "El marisco vivo se vende al peso, al precio del día. Díganos cuánto quiere gastar y le sugerimos." }],
    [{ pt: "Aceitam grupos e aniversários?", en: "Do you take groups and celebrations?", es: "¿Aceptan grupos y cumpleaños?" },
     { pt: "Sim. Para grupos grandes, reserve com antecedência por telefone.", en: "Yes. For large groups, please book ahead by phone.", es: "Sí. Para grupos grandes, reserve con antelación por teléfono." }],
    [{ pt: "Têm opções sem marisco?", en: "Do you have non-seafood options?", es: "¿Tienen opciones sin marisco?" },
     { pt: "Sim: carnes, pratos de tacho e peixe. Informe-nos de alergias ao reservar.", en: "Yes: meat, stews and fish. Let us know about allergies when booking.", es: "Sí: carnes, guisos y pescado. Avísenos de alergias al reservar." }],
    // Fonte: críticas Google ("Parque de estacionamento gratuito", "Muitos lugares")
    [{ pt: "Há estacionamento?", en: "Is there parking?", es: "¿Hay aparcamiento?" },
     { pt: "Sim, há parque de estacionamento gratuito perto do restaurante.", en: "Yes, there's free parking close to the restaurant.", es: "Sí, hay aparcamiento gratuito cerca del restaurante." }]
  ]
};
