let sPageSwitch;

class PageSwitch {
    constructor() {
        if (!sPageSwitch) {
            this.pageSwitches = [];
            this.pages = {};
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
            const pageId = pSwitch.dataset.pageId;
            const switchPage = document.querySelector(`#${pageId}`);
            this.pages[pageId] = switchPage;

            pSwitch.addEventListener('click', this.activatePageSwitch.bind(this));
        });
    }
    activatePageSwitch(event) {
        const switchItem = event.currentTarget;
        const pageId = switchItem.dataset.pageId;

        // TODO: shift pages

    };
}

export default PageSwitch;
