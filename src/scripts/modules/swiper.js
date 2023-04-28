import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const stuffSwiper = document.querySelector('.stuff-swiper');

if(stuffSwiper) {
  console.log('stuff');

    let isActive = true;

    let swiper = instance();

    function instance() {
      return new Swiper(stuffSwiper, {
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
          nextEl: ".stuff-swiper-button-next",
          prevEl: ".stuff-swiper-button-prev",
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },

          634: {
            slidesPerView: 3,
          }
        }
      });
    };

    if(window.innerWidth < 769) {
      stuffSwiper.querySelector('.stuff-section__list').classList.add('swiper-wrapper');
      swiper = instance();
    } else {
      swiper.update();
      swiper.disable(true, true);
    }

    window.addEventListener('resize', () => {
      if(window.innerWidth < 769 && !isActive) {
        console.log('init swiper')
        stuffSwiper.querySelector('.stuff-section__list').classList.add('swiper-wrapper');
        isActive = true;
        swiper = instance();
      }

      if(window.innerWidth > 768 && isActive) {
        console.log('destroy swiper');
        isActive = false;
        swiper.update();
        swiper.destroy(true, true);
      }
    })
}
