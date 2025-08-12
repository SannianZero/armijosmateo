// Función que muestra un saludo cuando haces clic en la foto
function saludar() {
    alert("¡Hola! Bienvenido a mi página.");
}

// Espera que cargue todo el contenido antes de asignar el evento
window.onload = function() {
    const foto = document.querySelector("img");
    foto.addEventListener("click", saludar);
};
