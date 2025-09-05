//Funcion que permite mostrar un mensaje de alerta
function verPerfil() {
    // codigo (logica)
    alert("Este es tu peril de usuario.")
}

//funcion que permite cambiar el texto de un elemento
function cerrarSesion() {
    const btnSesion = document.querySelector("#sesion");
    console.log(btnSesion); //Eso se borra
    btnSesion.innerText = "Cerrar sesion";
}
