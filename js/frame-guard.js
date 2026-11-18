/* Anti-clickjacking: se o site for aberto dentro de um iframe alheio, esconde-o e sai do iframe. */
(function () {
  if (window.top === window.self) return;
  document.documentElement.style.display = "none";
  try { window.top.location.replace(window.self.location.href); } catch (e) {}
})();
