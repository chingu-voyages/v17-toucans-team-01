import setCountdown from './countdown';
import accordion from './accordion'
import glide from './slider'

// Update Dom
accordion();
setCountdown();
setInterval(setCountdown, 1000);
