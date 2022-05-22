$('.mobile__btn').click(function () {
    $('.mobile-navbar, #wrapper').toggleClass('open-navbar')
})

const swiper = new Swiper(".recent__cards", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const swiper2 = new Swiper(".posts__images", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});