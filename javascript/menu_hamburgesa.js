export default function menuHmburgesa() {
  const d = document;
  const $toggleButton = d.getElementById("button-menu");
  const $nav = d.querySelectorAll(".nav");
  const $menu = d.querySelector(".menu");

  $toggleButton.addEventListener("click", () => {
    $menu.classList.toggle("is-active");
    $toggleButton.classList.toggle("close");
  });

  $menu.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) {
      return false;
    } else {
      $toggleButton.classList.remove("close");
      $menu.classList.remove("is-active");
    }
  });
}
