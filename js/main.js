const products = [
    {name: 'Muliflora Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: 'img/honey-1.jpg'},
    {name: 'Litchi Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: 'img/lithch-honey.jpg'},
    {name: 'Wild Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: 'img/wild-honey.jpg'},
    {name: 'Fresh Ghee', price: 1119.00, oldPrice: 2229.00, imgSrc: 'img/Ghee.png'},
    {name: 'Fresh Sugar', price: 119.00, oldPrice: 229.00, imgSrc: 'img/Sugar.png'},
    {name: 'Fresh Salt', price: 219.00, oldPrice: 229.00, imgSrc: 'img/Rock Salt.png'},
    {name: 'Fresh Jaggery', price: 3419.00, oldPrice: 2495.00, imgSrc: 'img/Jaggery.png'}
];

const productList = document.getElementById('product-list');

if (productList) {
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item wow fadeInUp col-xl-2 col-lg-3 col-md-6';
        productItem.dataset.wowDelay = `${0.1 * (index + 1)}s`;

        // Define the WhatsApp message
        const whatsappMessage = `Hi, I'm interested in the product ${product.name} priced at ${product.price}.`;

        // Construct the WhatsApp link
        const whatsappLink = `https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`;

        productItem.innerHTML = `
            <div class="position-relative bg-light overflow-hidden">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div style="border-radius:0px 7px 7px 0px" class="bg-secondary text-white position-absolute start-0 top-0 m-0 py-1 px-3">New</div>
            </div>
            <div class="text-center p-4">
                <a class="d-block h5 mb-2" href="#">${product.name}</a>
                <span class="text-primary me-1">${product.price}</span>
                <span class="text-body text-decoration-line-through">${product.oldPrice}</span>
            </div>
            <div class="d-flex">
                <small class="w-50 text-center bg-primary py-2">
                    <a class="text-white contact-us" href="${whatsappLink}" target="_blank">Contact us</a>
                </small>
                <small class="w-50 text-center py-2">
                    <a class="text-body" href="#">Add to cart</a>
                </small>
            </div>
        `;

        productList.appendChild(productItem);
    });
}

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 5000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}