// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];


const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");


function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  
  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  listaAmigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  listaElement.innerHTML = "";
  listaAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    resultadoElement.innerHTML = "<li>Necesitamos un nombre al menos para realizar el sorteo!</li>";
    return;
  }

  const indice = Math.floor(Math.random() * listaAmigos.length);
  const ganador = listaAmigos[indice];

  resultadoElement.innerHTML = `<li> Felicidades tu amigo secreto es: <strong>${ganador}</strong></li>`;
}

function reiniciarLista() {
  listaAmigos.length = 0;
  listaElement.innerHTML = "";
  resultadoElement.innerHTML = "";
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    agregarAmigo();
  }
});

