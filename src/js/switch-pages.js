import scrollWrapper from './scroll-wrapper';

export default function switchPages(onPage, offPage, onPageId) {
    if (onPage.classList.contains('main-list--active')) {
        return;
    }

    const onDir = onPageId === 0 ? 'left' : 'right';
    const offDir = onPageId === 0 ? 'right' : 'left';
    const pageWidth = window.innerWidth;
    let onOffset = pageWidth;
    let offOffset = 0;

    onPage.style[onDir] = `-${onOffset}px`; // eslint-disable-line
    onPage.classList.add('main-list--active');

    function increaseOffset() {
        if (offOffset <= pageWidth) {
            offPage.style[offDir] = `-${offOffset}px`; // eslint-disable-line
            onPage.style[onDir] = `-${onOffset}px`; // eslint-disable-line
            offOffset += 5;
            onOffset -= 5;
            setTimeout(increaseOffset, 2);
        } else {
            offPage.classList.remove('main-list--active');
            onPage.style[onDir] = '0px'; // eslint-disable-line
        }
    }

    scrollWrapper().then(() => increaseOffset());
}
