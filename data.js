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
    imagem: "img/hero.webp"
  },

  // ---- Destaques (cartões com foto → ficha) — nomes a confirmar com o cliente ----
  destaques: [
    { id: "carabineiro", foto: "img/carabineiro.webp", preco: "PVP / kg",
      nome: { pt: "Carabineiro", en: "Scarlet prawn", es: "Carabinero" },
      resumo: { pt: "Grande, intenso e servido simples — como deve ser. Peça o calibre do dia.", en: "Big, intense and served simply. Ask for today's size.", es: "Grande, intenso y servido sencillo. Pregunte el calibre del día." } },
    { id: "sapateira", foto: "img/marisco-cozido.webp", preco: "PVP / kg",
      nome: { pt: "Marisco cozido do viveiro", en: "Boiled shellfish from the tank", es: "Marisco cocido del vivero" },
      resumo: { pt: "Sapateira, santola, lavagante: escolhe-se vivo e coze-se na hora.", en: "Brown crab, spider crab, lobster: picked alive and cooked to order.", es: "Buey, centollo, bogavante: se elige vivo y se cuece al momento." } },
    { id: "presunto", foto: "img/presunto.webp", preco: "12,50 €", // DEMO
      nome: { pt: "Presunto cortado à faca", en: "Hand-carved cured ham", es: "Jamón cortado a cuchillo" },
      resumo: { pt: "A entrada que os clientes mais elogiam, com queijo amanteigado e pão torrado.", en: "Our guests' favourite starter, with buttery cheese and toasted bread.", es: "La entrada que más elogian los clientes, con queso cremoso y pan tostado." } },
    { id: "cozido", foto: "img/assado.webp", preco: "16,50 €", // DEMO
      nome: { pt: "Cozido à portuguesa", en: "Portuguese cozido", es: "Cocido portugués" },
      resumo: { pt: "Carnes, enchidos e legumes, em dose generosa para partilhar.", en: "Meats, sausages and vegetables in a generous sharing portion.", es: "Carnes, embutidos y verduras, en ración generosa para compartir." } },
    { id: "tacho", foto: "img/tacho.webp", preco: "15,00 €", // DEMO
      nome: { pt: "Prato de tacho da casa", en: "House slow-cooked stew", es: "Guiso de la casa" },
      resumo: { pt: "Cozinha lenta, molho escuro e coentros frescos. Muda conforme o dia.", en: "Slow-cooked, rich sauce and fresh coriander. Changes daily.", es: "Cocina lenta, salsa oscura y cilantro fresco. Cambia según el día." } },
    { id: "doce", foto: "img/sobremesa.webp", preco: "4,50 €", // DEMO
      nome: { pt: "Doce da casa", en: "House dessert", es: "Postre de la casa" },
      resumo: { pt: "Cremoso, com canela por cima. Para fechar bem a refeição.", en: "Creamy, dusted with cinnamon. The right way to finish.", es: "Cremoso, con canela por encima. Para cerrar bien la comida." } }
  ],

  // ---- Carta com preços (DEMO: preços indicativos para a proposta) ----
  carta: [
    { cat: { pt: "Marisco", en: "Shellfish", es: "Marisco" }, nota: { pt: "Ao peso, conforme o mercado. Pergunte o preço do dia.", en: "By weight, at market price. Ask for today's price.", es: "Al peso, según mercado. Pregunte el precio del día." }, itens: [
      ["Camarão cozido", "PVP / kg"], ["Gambas à guilho", "16,00 €"], ["Amêijoa à Bulhão Pato", "17,50 €"],
      ["Sapateira recheada", "PVP / kg"], ["Santola", "PVP / kg"], ["Lavagante azul", "PVP / kg"], ["Carabineiro", "PVP / kg"], ["Percebes", "PVP / kg"]
    ]},
    { cat: { pt: "Entradas", en: "Starters", es: "Entrantes" }, itens: [
      ["Presunto cortado à faca", "12,50 €"], ["Queijo amanteigado", "9,50 €"], ["Pão torrado com manteiga", "2,50 €"], ["Pica-pau do lombo", "13,00 €"], ["Pão, manteiga e azeitonas", "2,00 €"]
    ]},
    { cat: { pt: "Peixe", en: "Fish", es: "Pescado" }, itens: [
      ["Arroz de marisco (2 pax)", "38,00 €"], ["Cataplana de peixe (2 pax)", "36,00 €"], ["Bacalhau à Ribeirada", "17,50 €"], ["Peixe grelhado do dia", "PVP / kg"]
    ]},
    { cat: { pt: "Carne", en: "Meat", es: "Carne" }, itens: [
      ["Prego no pão", "6,50 €"], ["Bife à cervejaria", "16,00 €"], ["Cozido à portuguesa", "16,50 €"], ["Prato de tacho do dia", "15,00 €"]
    ]},
    { cat: { pt: "Sobremesas", en: "Desserts", es: "Postres" }, itens: [
      ["Doce da casa", "4,50 €"], ["Leite-creme queimado", "4,50 €"], ["Mousse de chocolate", "4,00 €"], ["Fruta da época", "3,50 €"]
    ]},
    { cat: { pt: "Adega", en: "Wine cellar", es: "Bodega" }, nota: { pt: "Garrafeira climatizada com vinhos portugueses. Peça a sugestão para o seu prato.", en: "Climate-controlled cellar of Portuguese wines. Ask for a pairing.", es: "Bodega climatizada con vinos portugueses. Pida la sugerencia para su plato." }, itens: [
      ["Imperial / caneca", "2,00 € / 4,50 €"], ["Vinho da casa (jarro)", "9,00 €"], ["Alvarinho", "22,00 €"], ["Douro tinto", "19,00 €"], ["Espumante Bairrada", "24,00 €"]
    ]}
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
     { pt: "Sim: carnes, pratos de tacho e peixe. Informe-nos de alergias ao reservar.", en: "Yes: meat, stews and fish. Let us know about allergies when booking.", es: "Sí: carnes, guisos y pescado. Avísenos de alergias al reservar." }]
  ]
};
