let sListToggle;

const toggleTeaser = function toggleTeaser(event) {
    let element = event.currentTarget;

    while (!element.classList.contains('list-item')) {
        element = element.parentElement;
    }
    element.classList.toggle('list-item--open');
};

class ListToggle {
    constructor() {
        if (!sListToggle) {
            this.teaserButtons = [];
            sListToggle = this;
        }
        return sListToggle;
    }
    init() {
        const teaserNodes = document.querySelectorAll('.list-item__teaser');
        const teaserArray = Array.from(teaserNodes);

        Array.prototype.push.apply(this.teaserButtons, teaserArray);

        this.teaserButtons.forEach((button) => {
            button.addEventListener('click', toggleTeaser);
        });
    }
}

export default ListToggle;
