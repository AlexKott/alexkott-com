import 'babel-polyfill';
import ListToggle from './list-toggle';
import PageSwitch from './page-switch';
import fillEmail from './fill-email';

const listToggle = new ListToggle();
const pageSwitch = new PageSwitch();

document.addEventListener('DOMContentLoaded', () => {
    listToggle.init();
    pageSwitch.init();
    setTimeout(fillEmail, 300);
});
