import '../assets/lightbox-dist/css/lightbox.css';
import '../scss/main.scss';

console.log('HELLO 🚀')

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1000,
    offset: 100,
    delay: 200,
    once: true
});
