// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { loadData } from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/user.png';


// query selectors
const bookings = document.querySelector('#bookings');
const root = document.querySelector(':root');
const leadingZero = document.querySelector('#leadingZero');

// event listeners
window.addEventListener('load', loadData);


export { bookings, root, leadingZero };