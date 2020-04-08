/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */
import Glide from '@glidejs/glide';

export const glide = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 1,
  gap: 32,
  autoplay: 3500,
  hoverpause: true,
  animationTimingFunc: 'ease-in-out',
  animationDuration: 800,
  peek: {
    before: 240,
    after: 240,
  },
  breakpoints: {
    600: {
      peek: {
        before: 0,
        after: 0,
      },
      gap: 40,
    },
    700: {
      peek: {
        before: 50,
        after: 50,
      },
    },
    800: {
      peek: {
        before: 50,
        after: 50,
      },
    },
    900: {
      peek: {
        before: 100,
        after: 100,
      },
    },
  },
});
glide.mount();
