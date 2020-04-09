/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */
import Glide from '@glidejs/glide';

const glide = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 1,
  gap: 32,
  autoplay: 3500,
  hoverpause: true,
  dragThreshold: 20,
  animationTimingFunc: 'ease-in-out',
  animationDuration: 500,
  peek: {
    before: 240,
    after: 240,
  },
  breakpoints: {
    500: {
      peek: {
        before: 0,
        after: 0,
      },
    },
    600: {
      peek: {
        before: 50,
        after: 50,
      },
    },
    700: {
      peek: {
        before: 70,
        after: 70,
      },
    },
    800: {
      peek: {
        before: 100,
        after: 100,
      },
    },
    900: {
      peek: {
        before: 150,
        after: 150,
      },
    },
    1000: {
      peek: {
        before: 200,
        after: 200,
      },
    },
  },
});

export default glide;
