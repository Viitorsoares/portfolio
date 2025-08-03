let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  nagation: {
    nextEl: "swiper-button-next",
    prevEL: ".swiper-button-prev"
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
