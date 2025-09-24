// =========================
// App "Amigo Secreto" (nivel inicial)
// =========================
//
// - Queda todo organizado en 3 funciones principales correspondientes a las tareas de Trello:
//   1) agregarAmigo()
//   2) actualizarLista()
//   3) sortearAmigo()
// - El nombre sorteado se elimina del arreglo y de la lista (no se repite).
// - Cuando se acaban los nombres, aviso "Sorteo terminado".
// - Se puede seguir agregando nombres después sin tocar nada más.
//

// Arreglo donde guardo los nombres disponibles para sortear.
let amigos = [];

/**
 * Función 1: agregarAmigo
 * - Toma el valor del input, lo valida y lo agrega al arreglo.
 * - Limpia el input y deja el foco para seguir escribiendo.
 * - Llama a actualizarLista() para refrescar la pantalla.
 */
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación básica: no permitir vacío o solo espacios.
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    input.focus();
    return;
  }

  // Agrego el nombre al arreglo principal.
  amigos.push(nombre);

  // Limpio el input para que el usuario pueda escribir el siguiente.
  input.value = "";
  input.focus();

  // Cada vez que agrego, limpio cualquier resultado anterior.
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Actualizo la lista que ve el usuario.
  actualizarLista();
}

/**
 * Función 2: actualizarLista
 * - Recorre el arreglo `amigos` y dibuja los <li> dentro del <ul id="listaAmigos">.
 * - Siempre limpia antes de pintar para no duplicar elementos.
 */
function actualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1) + ". " + amigos[i];
    ul.appendChild(li);
  }
}

/**
 * Función 3: sortearAmigo
 * - Si no hay nombres, avisa y no hace nada.
 * - Si hay, elige uno al azar, lo muestra y lo elimina del arreglo.
 * - Llama a actualizarLista() para reflejar el cambio.
 * - Si ya no quedan nombres, muestra el mensaje de "Sorteo terminado".
 */
function sortearAmigo() {
  const resultadoUL = document.getElementById("resultado");
  resultadoUL.innerHTML = ""; // muestro solo el resultado actual

  if (amigos.length === 0) {
    alert("No hay nombres para sortear. Agrega al menos uno.");
    return;
  }

  // Índice aleatorio válido dentro del arreglo.
  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  // Muestro el nombre sorteado.
  const li = document.createElement("li");
  li.textContent = "Tu amigo secreto es: " + elegido;
  resultadoUL.appendChild(li);

  // Remuevo al elegido del arreglo para que no se repita.
  amigos.splice(indice, 1);

  // Actualizo la lista visible después de modificar el arreglo.
  actualizarLista();

  // Si ya no queda nadie, aviso que el sorteo terminó.
  if (amigos.length === 0) {
    const fin = document.createElement("li");
    fin.textContent = "Sorteo terminado. Puedes agregar nuevos nombres para empezar otra vez.";
    resultadoUL.appendChild(fin);
  }
}

// Pequeña mejora: permitir que Enter en el input agregue el amigo.
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keyup", function (ev) {
      if (ev.key === "Enter") {
        agregarAmigo();
      }
    });
  }
});
