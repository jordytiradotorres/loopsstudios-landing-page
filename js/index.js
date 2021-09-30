const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const iconClose = document.querySelector(".iconClose");
console.log(iconClose);

hamburger.addEventListener("click", (e) => {
  menu.style.display = "block";
});

iconClose.addEventListener("click", (e) => {
  menu.style.display = "none";
});
