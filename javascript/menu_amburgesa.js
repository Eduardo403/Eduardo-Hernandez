function menuHamburgesa() {
  const d = document;
  const $menuBtn = d.querySelector(".menu-btn");
  const $menu = d.querySelector(".menu");
  let $open = d.querySelector(".open");
  let $close = d.querySelector(".close");

  $menuBtn.addEventListener("click", (e) => {
    if (e.target === $open) {
      $menu.classList.add("is-active");
      $open.classList.add("none");
      $close.classList.remove("none");
    } else {
      $menu.classList.remove("is-active");
      $open.classList.remove("none");
      $close.classList.add("none");
    }

    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
      $menu.classList.remove("is-active");
      $open.classList.remove("none");
      $close.classList.add("none");
    });
  });
}

window.addEventListener("DOMContentLoaded", menuHamburgesa());
