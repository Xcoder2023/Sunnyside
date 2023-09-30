const harmbuger = document.querySelector('.harmbuger');
const navMenu = document.querySelector('.nav-menu');

harmbuger.addEventListener("click", () => {
  harmbuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll('li').forEach(n => n.addEventListener("click", () => {
  harmbuger.classList.remove("active");
  navMenu.classList.remove("active");
}));
  