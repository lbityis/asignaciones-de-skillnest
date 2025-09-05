//boton 
function cerrarSesion() {
    const sesion = document.getElementById("sesion");

    if (sesion.textContent === "iniciar sesion") {
        sesion.textContent = "cerrar sesion";
    } else {
        sesion.textContent = "iniciar sesion";
    };
}

//imagen al tener cursor encima
const imag = document.querySelector("#trigo")
trigo.addEventListener("mouseover", function () {
    trigo.src = "static/images/estrella.png";
});

// imagen al no tener el cursor encima
trigo.addEventListener("mouseout", function () {
    trigo.src = "static/images/trigo.png";
});