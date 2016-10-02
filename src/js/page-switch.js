// Currently only working with two switches //

import switchPages from './switch-pages';

let sPageSwitch;

class PageSwitch {
    constructor() {
        if (!sPageSwitch) {
            this.pageSwitches = [];
            this.pages = [];
            sPageSwitch = this;
        }
        return sPageSwitch;
    }
    init() {
        const switchNodes = document.querySelectorAll('.page-switch__item');
        const switchArray = Array.from(switchNodes);

        Array.prototype.push.apply(this.pageSwitches, switchArray);

        if (this.pageSwitches.length > 2) {
            console.error('More than 2 page switches found!'); // eslint-disable-line
            return;
        }

        this.pageSwitches.forEach((pSwitch) => {
            const pageId = parseInt(pSwitch.dataset.pageId, 10);
            const switchPage = document.querySelector(`#page-${pageId}`);
            this.pages[pageId] = switchPage;

            pSwitch.addEventListener('click', this.activatePageSwitch.bind(this));
        });
    }
    activatePageSwitch(event) {
        const switchItem = event.currentTarget;
        const activeItem = document.querySelector('.page-switch__item--active');
        const pageId = parseInt(switchItem.dataset.pageId, 10);

        const onPage = this.pages[pageId];
        const offPage = pageId === 1 ? this.pages[0] : this.pages[1];

        if (activeItem) {
            activeItem.classList.remove('page-switch__item--active');
        }
        switchItem.classList.add('page-switch__item--active');

        switchPages(onPage, offPage, pageId);
    }
}

export default PageSwitch;
