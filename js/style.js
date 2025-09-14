const nav = document.querySelector(".nav");
const toggler = document.querySelector(".nav-toggler");
const hide = document.querySelector(".hide")



toggler.onclick = function () {

    nav.classList.toggle("active")

}

document.onclick = function test123(e) {

    if (!nav.contains(e.target) && !toggler.contains(e.target)) {
        nav.classList.remove("active")
        console.log(e.target);

    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none'
        document.querySelector('.main').style.display = 'block'
    }, 1500)
});



let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.querySelector('.nav-toggler').style.transform = 'translateY(-130%)';
  } else {
    // Scroll up
    document.querySelector('.nav-toggler').style.transform = 'translateY(0)';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);