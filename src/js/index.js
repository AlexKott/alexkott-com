import 'babel-polyfill';
import IntroButton from './intro-button';
import ListToggle from './list-toggle';
import PageSwitch from './page-switch';
import fillEmail from './fill-email';

const listToggle = new ListToggle();
const pageSwitch = new PageSwitch();
const introButton = new IntroButton();

document.addEventListener('DOMContentLoaded', () => {
    listToggle.init();
    pageSwitch.init();
    introButton.init();
    setTimeout(fillEmail, 300);
});
