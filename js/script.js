let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}






// product-slider
var swiper = new Swiper(".mySwiper", {
        
    loop: true,
  //  autoplay: true,
  //   autoplayTimeout: 1000,
  //   autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      strech: 0,
      depth: 300,
      modifier: 1,
      slidesShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });