let slidesPerView = 1;
let width = screen.width;

if (width >= 1024) {
  slidesPerView = 3;
}

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  modifierClass: 'item',
  bulletClass: 'swiper-pagination-bullet',
  bulletActiveClass: 'swiper-pagination-bullet-active',
  clickable: true,
  autoplay: {
    delay: 2000,
  },
  slidesPerView: slidesPerView
})