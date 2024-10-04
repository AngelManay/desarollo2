const buton1 = document.querySelector(".btn1");

function play(opcion) {
  const opciones = ["Piedra", "Papel", "Tijeras"];
  const computadora = opciones[Math.floor(Math.random() * opciones.length)];
  if (opcion === computadora) {
    console.log("Empate");
  } else if (
    (opcion === "Piedra" && computadora === "Tijeras") ||
    (opcion === "Papel" && computadora === "Piedra") ||
    (opcion === "Tijeras" && computadora === "Papel")
  ) {
    console.log("Ganaste");
  } else {
    console.log("Perdiste");
  }
}

buton1.addEventListener("click", play("Piedra"));
