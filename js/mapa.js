const mapa = L.map("mapa-interativo").setView([-23.5505, -46.6333], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(mapa);

L.marker([-23.5505, -46.6333])
  .addTo(mapa)
  .bindPopup(
    "<strong>ONG Raízes do Amanhã</strong>",
  );
