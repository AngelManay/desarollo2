const titulo = document.querySelector("h1");
function buscarTitulo() {
  if (titulo) {
    titulo.style.fontFamily = "Times New Roman";
  } else {
    alert("Error: Falta título");
  }
}
titulo.addEventListener("click", function () {
  console.log("Cliqueaste en el titulo");
});

const buton = document.querySelector(".buton1");

buton.addEventListener("click", function () {
  if ((document.body.style.backgroundColor = "#E53935")) {
    document.body.style.backgroundColor = "#4CAF50";
  } else if ((document.body.style.backgroundColor = "#4CAF50")) {
    document.body.style.backgroundColor = "#E53935";
  }
});

const parrafo = document.querySelector("p");
const buton2 = document.querySelector(".buton2");

buton2.addEventListener("click", function () {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
});

function formatP() {
  parrafo.style.color = "green";
  parrafo.style.fontSize = "2rem";
}
