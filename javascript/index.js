import menuHmburgesa from "./menu_hamburgesa.js";
import sendData from "./send_From.js";

function inite() {
  sendData();
  menuHmburgesa();
}

window.addEventListener("DOMContentLoaded", inite());
