const btnRotate = document.querySelector(".bar");

btnRotate.addEventListener("click", toggleMenu);

function toggleMenu() {
  btnRotate.classList.toggle("change");
}
