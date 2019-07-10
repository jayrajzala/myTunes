var burger = document.querySelector(".hamburger");
// var nav = document.querySelector("nav-links");
console.log(burger);

function navAnimate() {
  burger.addEventListener("click", function() {
    burger.classList.toggle("toggleNav");
  });
}
navAnimate();
