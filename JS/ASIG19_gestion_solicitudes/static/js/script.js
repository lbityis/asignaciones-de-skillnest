function laik() {                        // Define la función 'laik', que se ejecuta al dar "like"
    alert("la solicitud fue aceptada."); // Muestra una alerta en pantalla indicando que la solicitud fue aceptada
    let eee = document.querySelector(".pt-2"); // Selecciona el primer elemento del DOM con la clase 'pt-2' y lo guarda en la variable 'eee'
    eee.remove();                        // Elimina el elemento seleccionado del DOM (lo borra de la página)
}

function laik2() {                       // Define la función 'laik2', para aceptar otra solicitud diferente
    alert("la solicitud fue aceptada."); // Muestra la misma alerta de aceptación
    let eee = document.querySelector(".pt-3"); // Selecciona el primer elemento con clase 'pt-3' y lo guarda en 'eee'
    eee.remove();                        // Elimina este elemento del DOM
}

function eki() {                         // Define la función 'eki', para rechazar la solicitud con clase 'pt-2'
    alert("la solicitud fue rechazada."); // Muestra una alerta indicando que la solicitud fue rechazada
    let eee = document.querySelector(".pt-2"); // Selecciona el primer elemento con clase 'pt-2'
    eee.remove();                        // Elimina el elemento del DOM
}

function eki2() {                        // Define la función 'eki2', para rechazar la solicitud con clase 'pt-3'
    alert("la solicitud fue rechazada."); // Muestra la misma alerta de rechazo
    let eee = document.querySelector(".pt-3"); // Selecciona el primer elemento con clase 'pt-3'
    eee.remove();                        // Elimina el elemento del DOM
}
