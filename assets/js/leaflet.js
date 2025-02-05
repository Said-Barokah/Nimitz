var map = L.map('map').setView([-6.257079003711817, 106.85207940434555], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-6.257079003711817, 106.85207940434555]).addTo(map);
var marker = L.marker([-6.283326565455003, 106.91141267083466]).addTo(map);
var marker = L.marker([-6.230640081832268, 106.52046743394148]).addTo(map);