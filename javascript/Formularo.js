(d) => {
  const $btn = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
  $btn.addEventListener("click", (e) => {
    $btn.firstElementChild.classList.toggle("none");
    $btn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btn.firstElementChild.classList.remove("none");
    $btn.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
    $from.addEventListener("submit", (e) => {
      e.preventDefault();
      $loade.classList.remove("none");
      fetch("https://formsubmit.co/ajax/edua.24h@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      });
    });
  })(document);

  ((d) => {
    const $loade = d.querySelector(".contact-form-loader"),
      $from = d.querySelector(".contact-form"),
      $response = d.querySelector(".contact-form-respond");
  })(document);
};
