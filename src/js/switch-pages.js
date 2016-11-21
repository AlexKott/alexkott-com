export default function switchPages(onPage, offPage, onPageId) {
    if (onPage.classList.contains('main-list--active')) {
        return;
    }

    // multiple adds because IE only uses first argument
    onPage.classList.add('main-list--active');
    onPage.classList.add(`js--animate-in`);
    offPage.classList.add(`js--animate-out`);
    setTimeout(() => {
        offPage.classList.remove('main-list--active');
        offPage.classList.remove(`js--animate-out`);
        onPage.classList.remove(`js--animate-in`);
    }, 600);
}
