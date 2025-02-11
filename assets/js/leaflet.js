var map = L.map('map').setView([-6.25565359062897, 106.81253326614197], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-6.257079003711817, 106.85207940434555])
    .addTo(map)
    .bindPopup(`
    <div class="card text-center" style="width: 18rem; background-color:#09122C; position: relative; overflow: hidden; border-radius: 10px;">
        <div style="position: absolute; bottom: -40px; left: -2px; transform: translateX(-50%); opacity:0.5; width:50%;">
            <img src="assets/images/ball.png" style="width: 100%; height: auto;">
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold" style="color: #d5ae07;">Nimitz Kalibata City</h5>
            <p class="card-text text-white">Jl. Raya Kalibata No.1 9, RT.6/RW.4, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750</p>
            <a href="#" class="btn text-white">08233445566</a>
        </div>
    </div>
    `)
    .openPopup();
var marker = L.marker([-6.283326565455003, 106.91141267083466]).addTo(map).bindPopup(
    `
    <div class="card text-center" style="width: 18rem; background-color:#09122C; position: relative; overflow: hidden; border-radius: 10px;">
        <div style="position: absolute; bottom: -40px; left: -2px; transform: translateX(-50%); opacity:0.5; width:50%;">
            <img src="assets/images/ball.png" style="width: 100%; height: auto;">
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold" style="color: #d5ae07;">Nimitz Plaza Pondok Gede</h5>
            <p class="card-text text-white">Jl. Raya Pd. Gede, RT.001/RW.001, Jatiwaringin, Kec. Pd. Gede, Kota Bks, Jawa Barat 17411</p>
            <a href="#" class="btn text-white">08233445566</a>
        </div>
    </div>

    `

)
    .openPopup();
var marker = L.marker([-6.230640081832268, 106.52046743394148]).addTo(map).bindPopup(
    `
     <div class="card text-center" style="width: 18rem; background-color:#09122C; position: relative; overflow: hidden; border-radius: 10px;">
        <div style="position: absolute; bottom: -40px; left: -2px; transform: translateX(-50%); opacity:0.5; width:50%;">
            <img src="assets/images/ball.png" style="width: 100%; height: auto;">
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold" style="color: #d5ae07;">Nimitz Ciffest Citra Raya</h5>
            <p class="card-text text-white">Jl. Citra Raya, Cikupa, Kec. Cikupa, Kabupaten Tangerang, Banten 15710</p>
            <a href="#" class="btn text-white">08233445566</a>
        </div>
    </div>
`
)
    .openPopup();

