import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const stuffSwiper = document.querySelector('.stuff-swiper');

if(stuffSwiper) {
    let isActive = true;

    let swiper = instance();

    function instance() {
      return new Swiper(stuffSwiper, {
        slidesPerView: 3,
        spaceBetween: 20,

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
        stuffSwiper.querySelector('.stuff-section__list').classList.add('swiper-wrapper');
        isActive = true;
        swiper = instance();
      }

      if(window.innerWidth > 768 && isActive) {
        isActive = false;
        swiper.destroy(true, true);
      }
    })
}

