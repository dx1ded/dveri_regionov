import Swiper, { Navigation, Autoplay } from "swiper"

new Swiper(".brands__slider", {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  loop: true,
  autoplay: { delay: 5000 },
  navigation: {
    nextEl: ".brands__nav--next",
    prevEl: ".brands__nav--prev"
  },
  breakpoints: {
    601: {
      slidesPerView: 3
    },

    769: {
      slidesPerView: 4
    } 
  }
})
