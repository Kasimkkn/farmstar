(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);


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

products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item wow fadeInUp col-xl-2 col-lg-3 col-md-6';
    productItem.dataset.wowDelay = `${0.1 * (index + 1)}s`;

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
        <div class="d-flex ">
            <small class="w-50 text-center bg-primary py-2">
                <a class="text-white" href="#">View detail</a>
            </small>
            <small class="w-50 text-center py-2">
                <a class="text-body" href="#">Add to cart</a>
            </small>
        </div>
    `;

    productList.appendChild(productItem);
});
