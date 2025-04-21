const form = document.getElementById("form");
const btn = document.querySelector("button");

function handlesubmit(evento) {
  evento.preventDefault();
}

function testando() {
  alert("testando evento no botão!");
}

form.addEventListener("submit", handlesubmit);

btn.addEventListener("click", testando);
