
// coordonatele pentru destinațiile menționate
const destinatiiCoord = {
  "Milano": [45.4642, 9.19],
  "Torino": [45.0703, 7.6869],
  "Verona": [45.4384, 10.9916],
  "Lacul Como": [45.8081, 9.0852],
  "Cinque Terre": [44.146, 9.654],
  "Dolomiții": [46.4333, 11.85],
  "Bolzano": [46.4983, 11.3548],
  "Genova": [44.4056, 8.9463],
  "Bergamo": [45.6983, 9.6773],
  "Roma": [41.9028, 12.4964],
  "Florenta": [43.7699, 11.2556],
  "Pisa": [43.7167, 10.4],
  "Siena": [43.3188, 11.3308],
  "Assisi": [43.07, 12.62],
  "Perugia": [43.1122, 12.3888],
  "Orvieto": [42.7167, 12.1167],
  "Lucca": [43.843, 10.508],
  "Napoli": [40.8522, 14.2681],
  "Pompei": [40.75, 14.5],
  "Coasta Amalfi": [40.6333, 14.6],
  "Capri": [40.55, 14.2333],
  "Matera": [40.6667, 16.6],
  "Lecce": [40.352, 18.169],
  "Bari": [41.1253, 16.8667],
  "Taranto": [40.464, 17.247],
  "Reggio Calabria": [38.1105, 15.6613],
  "Sicilia": [37.6, 14.0],
  "Sardinia": [40.0, 9.0],
  "Vatican": [41.9029, 12.4534]
};

//  harta
const map = L.map("map").setView([41.54, 12.29], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

