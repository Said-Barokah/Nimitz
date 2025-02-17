function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

const params = new URLSearchParams(window.location.search);
const product = params.get("product");
if(product=='ball'){
    document.getElementById("category").innerText = "Ball";
    document.getElementById("product-name").innerText = "Painasfei Ball";
    document.getElementById('product-description').innerText = `
        Experience premium sound quality and industry-leading noise
        cancellation with these wireless
        headphones. Perfect for music lovers and frequent travelers.
    `;
    document.getElementById('product-specification').innerHTML = `
                    <h5>Detail:</h5>
                    <ul>
                        <li>Industry-leading noise cancellation</li>
                        <li>30-hour battery life</li>
                        <li>Touch sensor controls</li>
                        <li>Speak-to-chat technology</li>
                    </ul>`;
    document.getElementById("mainImage").setAttribute("src", "assets/images/product/ball/ball-1.webp");
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/ball/ball-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/ball/ball-1-1.webp');
    document.getElementById("thumbnail-3").setAttribute("src", 'assets/images/product/ball/ball-1-2.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/ball/ball-1-3.webp');
}
else if(product=='cue'){
    document.getElementById("category").innerText = "Cue";
    document.getElementById("product-name").innerText = "Diamond Cues";
    document.getElementById('product-description').innerText = `
        BARANG ORIGINAL DI SHAFT ATAU LOGO ( DIAMOND SUPERMAN ) hati" dengan barang tiruan lainnya ya. For beginner and intermediate players
    `;
    document.getElementById('product-specification').innerHTML = `
        <h5>Specifications:</h5>
        <ul>
            <li>Model: Diamond Cues</li>
            <li>Tip Size: 13 mm</li>
            <li>Tip: Kulit Sapi ~ Medium</li>
            <li>Wood: Imported Maple wood</li>
            <li>Length: 57 inch (145 cm)</li>
            <li>Grip: Wrapless handle</li>
            <li>Joint: 5/16x18</li>
            <li>Weight: 19oz</li>
        </ul>

        <h5>Syarat & Ketentuan (Complain):</h5>
        <ul>
            <li>Jika ada keluhan silahkan chat terlebih dahulu</li>
            <li>Sebelum pengembalian produk, harap menghubungi kami terlebih dahulu agar bisa dipastikan bahwa pengembalian produk diperlukan</li>
            <li>Khusus untuk cue jika ingin complain tip jangan di chalk / di kasih kapur, jika sudah di chalk maka cue tidak bisa pengajuan pengembalian produk</li>
        </ul>`;
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/cue/cue-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/cue/cue-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/cue/cue-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/cue/cue-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/cue/cue-1.webp');
}
else if(product=='table'){
    document.getElementById("category").innerText = "Table";
    document.getElementById("product-name").innerText = "Nimitz Core  - 18";
    document.getElementById('product-description').innerHTML= `
        <p class='lh-1'>MEJA BILLIARD TERBAIK BUDGET 40JT AN !!!</p>
        <p class='lh-1'>SIAP KIRIM 1 INDONESIA!!</p>

        <p>Dijamin menjadi meja billiard paling worth it pada budget nya !!</p>
        <p><strong>Best Seller Meja No.1 Di Indonesia dan Asia Tenggara !!</strong></p>
       `;
    document.getElementById('product-specification').innerHTML = ` 
     <p>Dipakai dalam turnamen-turnamen kelas dunia (Matchroom pool, WNT, Premier League Pool)</p>

        <p>Sedang ingin membuka bisnis billiards? <strong>boleh contact kami untuk konsultasi secara GRATIS.</strong></p>
        <p>Jika Punya pertanyaan lebih lanjut silahkan tanyakan kepada kami.</p>

        <p>HARGA BELUM INCLUDE PEMASANGAN DAN ONGKOS KIRIM!</p>
        <p>Untuk Teknisi Pemasangan akan dibantu carikan sesuai daerah pembeli.</p>
        <p><strong>Estimasi Indent 1 - 4 Bulan (tergantung stock).</strong></p>
    `
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/tables/table-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/tables/table-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/tables/table-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/tables/table-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/tables/table-1.webp');
}
else if(product=='lamp'){
    document.getElementById("category").innerText = "Lamp";
    document.getElementById("product-name").innerText = "Poinsys LED";
    document.getElementById('product-description').innerHTML= ` 
        <p>Lampu LED Billiard Kotak ~ Lampu Billiard LED Persegi Panjang</p>
        
        <p>Deskripsi:</p>
        <ul>
            <li>Rangka: Panjang 2,2M x Lebar 1,1M x Tinggi 6Cm</li>
            <li>Lebar lampu LED: 10 Cm</li>
            <li>240 Watt</li>
            <li>Sudah dapat gantung sling baja</li>
            <li>Pencahayaan warna putih tanpa bayangan</li>
        </ul>
    `
     document.getElementById('product-specification').innerHTML = ` 
        <p>NOTE:</p>
        <ul>
            <li><strong>Komplain:</strong> Batas waktu komplain 1x24 jam setelah barang diterima, tanpa video unboxing komplain tidak dapat diterima.</li>
            <li><strong>Wajib melakukan video unboxing paket tanpa jeda.</strong></li>
        </ul>
     `
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/lamp/lamp-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/lamp/lamp-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/lamp/lamp-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/lamp/lamp-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/lamp/lamp-1.webp');
}

