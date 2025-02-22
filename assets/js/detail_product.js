function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

const params = new URLSearchParams(window.location.search);
function loadProduct(product){
    const data = productData[product];
    if (!data) {
        console.error("Product not found!");
        return;
    }
    document.getElementById('Whatsapp-link').href = `https://wa.me/6281233650630?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20${encodeURIComponent(data.product_name)}`;
    document.getElementById("category").innerText = data.category;
    document.getElementById("product-name").innerText = data.product_name;
    document.getElementById('product-description').innerHTML = data.product_description;
    document.getElementById('product-specification').innerHTML = data.product_specification;
    document.getElementById("mainImage").setAttribute("src", data.images.main);

    const totalThumbnails = 4; 

    data.images.thumbnails.forEach((src, index) => {
        document.getElementById(`thumbnail-${index + 1}`).setAttribute("src", src);
    });
    
    for (let i = data.images.thumbnails.length + 1; i <= totalThumbnails; i++) {
        const element = document.getElementById(`thumbnail-${i}`);
        if (element) {
            element.remove(); 
        }
    }
}
const product = params.get("product");
loadProduct(product);


