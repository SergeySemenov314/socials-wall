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
      delay: 8000,
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

  setTimeout(function toggleAutoplay() {
    if (topSlider.autoplay.running) {
      topSlider.autoplay.stop()
    } else {
      topSlider.autoplay.start()
    }
    setTimeout(toggleAutoplay, 8000);
  }, 8000);



  const bottomSlider = new Swiper('.posts-slider--bottom-position', {
    modules: [Autoplay],
    slidesPerView: 4,
    loop: true,
    spaceBetween: 15,
    speed: 600,
    autoplay: {
      delay: 16000,
      reverseDirection: true,
      waitForTransition: false
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
