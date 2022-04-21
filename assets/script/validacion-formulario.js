const nombreInput = document.querySelector('[data-nombre]');
const emailInput = document.querySelector('[data-email]');
const asuntoInput = document.querySelector('[data-asunto]');
const mensajeInput = document.querySelector('[data-mensaje]');

// const alertNombreContainer = document.querySelector('[data-alert-nombre-container]');
// const alertEmailContainer = document.querySelector('[data-alert-email-container]');
// const alertAsuntoContainer = document.querySelector('[data-alert-asunto-container]');
// const alertMensajeContainer = document.querySelector('[data-alert-mensaje-container]');

const alertNombre = document.querySelector('[data-alert-nombre]');
const alertEmail = document.querySelector('[data-alert-email]');
const alertEmailIncorrecto = document.querySelector('[data-alert-email-incorrecto]');
const alertAsunto = document.querySelector('[data-alert-asunto]');
const alertMensaje = document.querySelector('[data-alert-mensaje]');

nombreInput.value = '';
emailInput.value = '';
asuntoInput.value = '';
mensajeInput.value = '';

// const nombreValidado = false;
// const emailValidado = false;
// const asuntoValidado = false;
// const mensajeValidado = false;



nombreInput.addEventListener('blur', (evento) => {
    let nombre = evento.target.value;
    muestraOcultaAlerta(nombre, alertNombre);
});

// ME FALTA TERMINAR DE VALIDAR EL INPUT DE EMAIL
emailInput.addEventListener('blur', (evento) =>{
    let email = evento.target.value;
    // muestraOcultaAlerta(email, alertEmail);
    mailIncorrecto(email, alertEmailIncorrecto);
    console.log(alertEmailIncorrecto.textContent);
});

asuntoInput.addEventListener('blur', (evento) =>{
    let asunto = evento.target.value;
    muestraOcultaAlerta(asunto, alertAsunto);
});

mensajeInput.addEventListener('blur', (evento) =>{
    let mensaje = evento.target.value;
    muestraOcultaAlerta(mensaje, alertMensaje);
});