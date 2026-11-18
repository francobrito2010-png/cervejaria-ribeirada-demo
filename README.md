# Cervejaria da Ribeirada — proposta de site

Proposta de site criada por Franco Brito para a **Cervejaria da Ribeirada** (Odivelas).
**Não é o site oficial.** É uma demonstração para apresentar ao cliente.

## O que é real
- Nome, morada, telefone, email, horário (encerra à quarta), avaliação Google (4,2 · 1747 críticas) e excertos de críticas.
- Fotografias e reels: do Instagram @cervejariadaribeirada.

## O que é DEMO (marcado em `data.js`)
- Preços e nomes de alguns pratos da carta — a confirmar com a casa.
- WhatsApp: o 21 934 5551 é fixo; falta um número móvel para as reservas chegarem por WhatsApp.
- NIF da empresa.

## Ficheiros
- `index.html` — página (SEO, pré-visualização no WhatsApp, JSON-LD de restaurante)
- `data.js` — **todos os conteúdos** em PT/EN/ES: carta, destaques, horário, críticas, FAQ
- `css/styles.css` — design (cores e letras no topo, em `:root`)
- `js/app.js` — funcionamento (línguas, carta, reservas, galeria, cookies)
- `privacidade.html` — privacidade, cookies, alergénios e Livro de Reclamações
- `_headers` — segurança no Cloudflare Pages

## Ver no computador
`node servir.mjs` e abrir http://localhost:5190
