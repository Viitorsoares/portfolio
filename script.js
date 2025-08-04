const menuHamburguer = document.querySelector('.menu-hamburguer')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('navbar-links li a')

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const header = document.getElementById('header');

if (header instanceof HTMLElement) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      header.style.background = "#191919";
    } else {
      header.style.background = 'transparent';
    }
  });
}
