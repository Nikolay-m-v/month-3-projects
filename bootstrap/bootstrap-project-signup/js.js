const btnRotate = document.querySelector(".bar");
const menuShow = document.querySelector(".bar");

btnRotate.addEventListener("click", toggleMenu);
menuShow.addEventListener("click", toggleMenu);

function toggleMenu() {
  btnRotate.classList.toggle("change");
  menuShow.classList.toggle("show");
}
