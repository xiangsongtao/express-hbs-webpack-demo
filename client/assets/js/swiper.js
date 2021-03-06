/* eslint-disable no-new */
/**
 * init Swiper
 * */
import Swiper from 'swiper'

export default function () {
  new Swiper('.js__swiper-one-item', {
    nextButton: '.js__swiper-btn--next',
    prevButton: '.js__swiper-btn--prev',
    speed: 1e3,
    autoplay: 7e3,
    loop: !0
  })
  new Swiper('.js__swiper-slider', {
    pagination: '.js__swiper-pagination',
    paginationClickable: !0,
    speed: 1e3,
    autoplay: 7e3,
    loop: !0
  })
  new Swiper('.js__swiper-clients', {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: !0,
    breakpoints: {
      1024: {slidesPerView: 4, spaceBetween: 50},
      992: {slidesPerView: 3, spaceBetween: 40},
      768: {slidesPerView: 3, spaceBetween: 30},
      600: {slidesPerView: 2, spaceBetween: 30},
      480: {slidesPerView: 2, spaceBetween: 0}
    }
  })
  new Swiper('.js__swiper-news', {
    pagination: '.js__swiper-pagination',
    paginationClickable: !0,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: !0,
    breakpoints: {
      1024: {slidesPerView: 4, spaceBetween: 30},
      992: {slidesPerView: 3, spaceBetween: 30},
      768: {slidesPerView: 2, spaceBetween: 30},
      600: {slidesPerView: 2, spaceBetween: 30},
      480: {slidesPerView: 1, spaceBetween: 0}
    }
  })
  new Swiper('.js__swiper-testimonials', {
    pagination: '.js__swiper-fraction',
    paginationType: 'fraction',
    paginationClickable: !0,
    nextButton: '.js__swiper-btn--next',
    prevButton: '.js__swiper-btn--prev',
    slidesPerView: 1,
    speed: 1e3,
    autoplay: 7e3,
    loop: !0
  })
}
