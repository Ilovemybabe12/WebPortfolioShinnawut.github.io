let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
let mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centerdSlides: true,
    loop: true,
    autoplay: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 7
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
