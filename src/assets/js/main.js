// To increment product quantity

let addProduct = document.querySelector("#add");
let subProduct = document.querySelector("#sub");
let qtyProduct = document.querySelector("#qty");


addProduct.addEventListener('click', () => {
    qtyProduct.value = parseInt(qtyProduct.value) + 1;
})

subProduct.addEventListener('click', () => {
    if (qtyProduct.value <= 0) {
        qtyProduct.value = 0;
    } else {
        qtyProduct.value = parseInt(qtyProduct.value) - 1;

    }
})

// SWITCH AND ZOOM FEATURED PRODUCT

// SIDE PRODUCT IMAGES CAROUSEL
const swiper = document.querySelector(".swiper");
new Swiper(swiper, {
    slidesPerView: 4,
    // spaceBetween: 15,
    loop: true,
    lazyLoading: true,
    keyboard: {
        enabled: true
    }
})

// MODAL BOX


// let modalWrapper = document.querySelector(".modal-wrapper")
// mainContainer.addEventListener("click", function () {
//     modalWrapper.style.display = "block";
// })

// let modalClose = document.querySelector(".modal-close")
// modalClose.addEventListener("click", function () {
//     modalWrapper.style.display = "none";
// })


// let elt = document.querySelector(".modal-wrapper");
// elt.removeAttribute("display");