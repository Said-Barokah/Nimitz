function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

const params = new URLSearchParams(window.location.search);
const product = params.get("product");
if(product=='ball'){
    document.getElementById("mainImage").setAttribute("src", "assets/images/product/ball/ball-1.webp");
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/ball/ball-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/ball/ball-1-1.webp');
    document.getElementById("thumbnail-3").setAttribute("src", 'assets/images/product/ball/ball-1-2.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/ball/ball-1-3.webp');
}
else if(product=='cue'){
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/cue/cue-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/cue/cue-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/cue/cue-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/cue/cue-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/cue/cue-1.webp');
}
else if(product=='table'){
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/tables/table-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/tables/table-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/tables/table-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/tables/table-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/tables/table-1.webp');
}
else if(product=='lamp'){
    console.log('said');
    document.getElementById("mainImage").setAttribute("src", 'assets/images/product/lamp/lamp-1.webp');
    document.getElementById("thumbnail-1").setAttribute("src", 'assets/images/product/lamp/lamp-1-1.webp');
    document.getElementById("thumbnail-2").setAttribute("src", 'assets/images/product/lamp/lamp-1-2.webp');
    document.getElementById("thumbnail-3").setAttribute("src",  'assets/images/product/lamp/lamp-1-3.webp');
    document.getElementById("thumbnail-4").setAttribute("src",  'assets/images/product/lamp/lamp-1.webp');
}

