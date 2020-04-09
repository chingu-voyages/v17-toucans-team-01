import setCountdown from './js/countdown';
import accordion from './js/accordion';
import glide from './js/slider';
import './scss/styles.scss';

// Update Dom
accordion();
setCountdown();
glide.mount();
setInterval(setCountdown, 1000);
