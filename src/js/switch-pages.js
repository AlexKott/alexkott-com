export default function switchPages(onPage, offPage) {
    if (onPage.classList.contains('main-list--active')) {
        return;
    }

    // multiple adds because IE only uses first argument
    onPage.classList.add('main-list--active');
    offPage.classList.remove('main-list--active');
    onPage.classList.add('main-list--parallel');
    offPage.classList.add('main-list--parallel');
    setTimeout(() => {
        onPage.classList.remove('main-list--parallel');
        offPage.classList.remove('main-list--parallel');
    }, 300);
}
