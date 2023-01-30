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

//Scroll check for navbar
let previousScroll;
let navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > previousScroll) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    previousScroll = scrollTop;
});
