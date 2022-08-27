export default function menuHmburgesa() {
  const d = document;
  const $toggleButton = d.getElementById("button-menu");
  const $navWrapper = d.querySelectorAll(".nav");
  const $menu = d.querySelector(".menu");

  $toggleButton.addEventListener("click", () => {
    $menu.classList.toggle("is-active");
    $toggleButton.classList.toggle("close");
  });

  $navWrapper.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $toggleButton.classList.remove("close");
    $menu.classList.remove("is-active");
  });
}
