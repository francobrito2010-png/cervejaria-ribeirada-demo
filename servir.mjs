// Servidor estático mínimo para ver o projeto no navegador.
// Uso: node servir.mjs [pasta] [porta]   (por omissão: pasta atual, 5190)
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, resolve, normalize } from "node:path";

const root = resolve(process.argv[2] || ".");
const port = Number(process.argv[3] || process.env.PORT || 5190);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif", ".mp4": "video/mp4", ".webm": "video/webm", ".pdf": "application/pdf", ".ico": "image/x-icon", ".woff2": "font/woff2" };

http.createServer(async (req, res) => {
  try {
    let p = normalize(decodeURIComponent(req.url.split("?")[0])).replace(/^([/\\])+/, "");
    let f = join(root, p);
    if (!f.startsWith(root)) { res.writeHead(403).end(); return; }
    if ((await stat(f).catch(() => null))?.isDirectory()) f = join(f, "index.html");
    const body = await readFile(f);
    res.writeHead(200, { "Content-Type": types[extname(f).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(body);
  } catch { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("404"); }
}).listen(port, () => console.log(`A servir ${root} em http://localhost:${port}`));
