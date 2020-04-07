import setCountdown from './countdown';
import accordion from './accordion'
import glide from './slider'
import './scss/styles.scss'

// Update Dom
accordion();
setCountdown();
setInterval(setCountdown, 1000);
