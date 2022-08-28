import buttonSend from "./button_send.js";
import menuHmburgesa from "./menu_hamburgesa.js";

function inite() {
  menuHmburgesa();
  buttonSend();
}

window.addEventListener("DOMContentLoaded", inite());
