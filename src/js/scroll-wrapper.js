export default function scrollWrapper() {
    return new Promise((resolve) => {
        const wrapper = document.querySelector('#main-wrapper');
        let scrollTop = wrapper.scrollTop;

        function scrollUp() {
            scrollTop -= 16;
            wrapper.scrollTop = scrollTop >= 0 ? scrollTop : 0;
            if (scrollTop > 0) {
                setTimeout(scrollUp, 1);
            } else {
                resolve();
            }
        }
        scrollUp();
    });
}
