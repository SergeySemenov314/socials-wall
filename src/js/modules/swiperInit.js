import Swiper, {Autoplay} from 'swiper';

const swiperInit = () => {

  const topSlider = new Swiper('.posts-slider--top-position', {
    modules: [Autoplay],
    direction:'horizontal',
    slidesPerView: 4,
    loop: true,
    spaceBetween: 15,
    speed: 600,
    autoplay: {
      delay: 4000,
      reverseDirection:true,
    },


    breakpoints: {
      1201: {
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 46,
      },
      576: {
        spaceBetween: 46,
      },

      0: {
        spaceBetween: 8,
      },
    },
  });
  topSlider.init();

  const bottomSlider = new Swiper('.posts-slider--bottom-position', {
    modules: [Autoplay],
    slidesPerView: 4,
    loop: true,
    spaceBetween: 15,
    speed: 600,
    autoplay: {
      delay: 4000,
      reverseDirection:true,
    },

    breakpoints: {
      1201: {
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 46,
      },
      576: {
        spaceBetween: 46,
      },

      0: {
        spaceBetween: 8,
      },
    },
  });
  bottomSlider.init();

};

export default swiperInit;
