let sIntroButton;

class IntroButton {
    constructor() {
        if (!sIntroButton) {
            this.teaserButtons = [];
            sIntroButton = this;
        }
        return sIntroButton;
    }
    init() {
        const toggleButton = document.querySelector('.main-intro__button');
        const mainIntro = document.querySelector('.main-intro');

        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('main-intro__button--closed');
            mainIntro.classList.toggle('main-intro--collapsed');
        });
    }
}

export default IntroButton;
