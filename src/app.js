/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const HandleButton = e => {
  console.log("Me clickeaste");
  console.log(e);
  location.reload(); //para refrescar la página
  return;
};

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");

  //cambiamos el color del fondo del body
  let body = document.querySelector("body");
  //console.log(body);
  body.classList.add("bg", "bg-success");

  //creamos un nuevo div para la carta
  let newDiv = document.createElement("DIV");
  let app = document.querySelector("#app");
  newDiv.classList.add(
    "container",
    "bg",
    "bg-light",
    "rounded",
    "mx-5",
    "shadow"
  );
  newDiv.innerHTML =
    '<div class="row symbol heading display-5 mt-5">Fila 1</div><br/><br/><br/><div class="row number display-5">Fila 2</div><br/><br/><br/><div class="row symbol reverse display-5">Fila 3</div>';
  app.appendChild(newDiv);

  //Elegir número aleatorio
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  /* Pruebas:
  console.log(
    "Aquí debe aparecer el tercer elemento:",
    number[2],
    "La longitud del arreglo number es:",
    number.length
  );*/
  let randomNumber = Math.floor(Math.random() * numbers.length);
  //console.log("número aleatorio", randomNumber);
  //console.log("elegir elemento aleatorio", number[randomNumber]);

  let fila2 = document.querySelector(".number");
  fila2.innerHTML = `${numbers[randomNumber]}`;
  fila2.classList.add("justify-content-center");

  //Elegir la suit de la carta
  let suit = [
    { suit: "♥", color: "red" },
    { suit: "♦", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" }
  ];

  let randomSuit = Math.floor(Math.random() * suit.length);
  //console.log(suit[randomSuit]);
  let fila1 = document.querySelector(".heading");
  fila1.innerHTML = `${suit[randomSuit]["suit"]}`;
  fila1.style.color = suit[randomSuit]["color"];

  let fila3 = document.querySelector(".reverse");
  fila3.innerHTML = `${suit[randomSuit]["suit"]}`;
  fila3.style.color = suit[randomSuit]["color"];

  let button = document.createElement("button");
  let textButton = document.createTextNode("click");
  button.appendChild(textButton);
  button.addEventListener("click", e => HandleButton(e));
  body.appendChild(button);
};
