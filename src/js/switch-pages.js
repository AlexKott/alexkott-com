export default function switchPages(onPage, offPage, onPageId) {
    if (onPage.classList.contains('main-list--active')) {
        return;
    }

    const direction = onPageId === 0 ? 'right' : 'left';

    // multiple adds because IE only uses first argument
    onPage.classList.add('main-list--active');
    onPage.classList.add(`main-list--animate-in-${direction}`);
    offPage.classList.add(`main-list--animate-out-${direction}`);
    setTimeout(() => {
        offPage.classList.remove('main-list--active');
        offPage.classList.remove(`main-list--animate-out-${direction}`);
        onPage.classList.remove(`main-list--animate-in-${direction}`);
    }, 600);
}
