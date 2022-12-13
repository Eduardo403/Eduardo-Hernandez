export default function sendData() {
  const d = document,
    $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".loader"),
    $root = d.querySelector(".root");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/edua.24h@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(err)))
      .then((json) => {
        $form.reset();
        $root.classList.add("susces");
        $root.innerHTML = `Enviado,muchas gracias por tus comentarios`;
        setTimeout(() => {
          $root.innerHTML = ``;
          $root.classList.remove("susces");
        }, 6000);
      })
      .catch((err) => {
        let messager = err.statusText || "ocurrio un Error";
        $root.classList.add("error");
        $root.innerHTML = `Error: ${err.status} ,${messager}`;
        $form.reset();
        setTimeout(() => {
          $root.innerHTML = ``;
          $root.classList.remove("error");
        }, 6000);
      })
      .finally(() => {
        $loader.classList.add("none");
      });
  });
}
