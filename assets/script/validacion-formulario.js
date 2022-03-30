const nombreInput = document.querySelector('[data-nombre]');
const emailInput = document.querySelector('[data-email]');
const asuntoInput = document.querySelector('[data-asunto]');
const mensajeInput = document.querySelector('[data-mensaje]');

const alertNombreContainer = document.querySelector('[data-alert-nombre-container]');
const alertEmailContainer = document.querySelector('[data-alert-email-container]');
const alertAsuntoContainer = document.querySelector('[data-alert-asunto-container]');
const alertMensajeContainer = document.querySelector('[data-alert-mensaje-container]');

nombreInput.value = '';
emailInput.value = '';
asuntoInput.value = '';
mensajeInput.value = '';

// const nombreValidado = false;
// const emailValidado = false;
// const asuntoValidado = false;
// const mensajeValidado = false;

nombreInput.addEventListener('blur', (evento) => {
    let alerta;
    nombre = evento.target.value;
    if (nombre == '') {
        alerta = document.createElement('span');
        alerta.textContent = '*este campo es obligatorio';
        alertNombreContainer.appendChild(alerta);
    }else{
        alertNombreContainer.removeChild(alerta);
        console.log(`el nombre del usuario es ${nombre}`);
    }
});

emailInput.addEventListener('blur', () =>{
    console.log('Campo email');
});

asuntoInput.addEventListener('blur', () =>{
    console.log('Campo asunto');
});

mensajeInput.addEventListener('blur', () =>{
    console.log('Campo mensaje');
});