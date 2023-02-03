
//Observer script
let elementsToWatch = document.querySelectorAll('.watch');
let callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page")
        } else {
            item.target.classList.remove("in-page")
        }
    })
}
let observer = new IntersectionObserver(callback, { threshold: 0.5 });
elementsToWatch.forEach((element) => {
    observer.observe(element);
});






