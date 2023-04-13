import Auto from "./AutoRemoto.js";

const cadena_comandos = document.querySelector("#cadena-text");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = cadena_comandos.value;
  const posicion_inicial = cadena.split("/")[1];
  const comandos=cadena.split("/")[2];
  const posicion_final = Auto(cadena);

  div.innerHTML = "<p> Posicion Inicial:" + posicion_inicial + "</p>" + "<p> Comandos:" + comandos + "</p>" + "<p> Posicion Final:" + posicion_final + "</p>";
});