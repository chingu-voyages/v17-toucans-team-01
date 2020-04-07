import Glide from '@glidejs/glide'

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
});
glide.mount();
