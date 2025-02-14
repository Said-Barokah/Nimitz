function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

const params = new URLSearchParams(window.location.search);
const nama = params.get("product");
if(product='ball'){
    document.getElementById("mainImage").src = 'assets/images/product/ball/ball-1.webp';
    document.getElementById("thumbnail-1").src = 'assets/images/product/ball/ball-1-1.webp';
    document.getElementById("thumbnail-2").src = 'assets/images/product/ball/ball-1-2.webp';
    document.getElementById("thumbnail-3").src = 'assets/images/product/ball/ball-1-3.webp';
    document.getElementById("thumbnail-4").src = 'assets/images/product/ball/ball-1.webp';
}
if(product='cue'){
    document.getElementById("mainImage").src = 'assets/images/product/cue/cue-1.webp';
    document.getElementById("thumbnail-1").src = 'assets/images/product/cue/cue-1-1.webp';
    document.getElementById("thumbnail-2").src = 'assets/images/product/cue/cue-1-2.webp';
    document.getElementById("thumbnail-3").src = 'assets/images/product/cue/cue-1-3.webp';
    document.getElementById("thumbnail-4").src = 'assets/images/product/cue/cue-1.webp';
}
if(product='table'){
    document.getElementById("mainImage").src = 'assets/images/product/tables/table-1.webp';
    document.getElementById("thumbnail-1").src = 'assets/images/product/tables/table-1-1.webp';
    document.getElementById("thumbnail-2").src = 'assets/images/product/tables/table-1-2.webp';
    document.getElementById("thumbnail-3").src = 'assets/images/product/tables/table-1-3.webp';
    document.getElementById("thumbnail-4").src = 'assets/images/product/tables/table-1.webp';
}
if(product='lamp'){
    document.getElementById("mainImage").src = 'assets/images/product/lamp/lamp-1.webp';
    document.getElementById("thumbnail-1").src = 'assets/images/product/lamp/lamp-1-1.webp';
    document.getElementById("thumbnail-2").src = 'assets/images/product/lamp/lamp-1-2.webp';
    document.getElementById("thumbnail-3").src = 'assets/images/product/lamp/lamp-1-3.webp';
    document.getElementById("thumbnail-4").src = 'assets/images/product/lamp/lamp-1.webp';
}

