import Swiper, { Navigation, Autoplay } from "swiper"

new Swiper(".hero__slider", {
  modules: [Navigation, Autoplay],
  spaceBetween: 20,
  speed: 300,
  navigation: {
    nextEl: ".hero-slider__nav-item--next",
    prevEl: ".hero-slider__nav-item--prev"
  },
  autoplay: { delay: 5000 }
})
