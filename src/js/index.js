import ListToggle from './list-toggle';
import PageSwitch from './page-switch';

const listToggle = new ListToggle();
const pageSwitch = new PageSwitch();

document.addEventListener('DOMContentLoaded', () => {
    listToggle.init();
    pageSwitch.init();
});
