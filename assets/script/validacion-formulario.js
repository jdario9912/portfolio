const nombreForm = document.querySelector('[data-nombre]');
const emailForm = document.querySelector('[data-email]');
const asuntoForm = document.querySelector('[data-asunto]');
const mensajeForm = document.querySelector('[data-mensaje]');

const alertNombreContainer = document.querySelector('[data-alert-nombre-container]');
const alertEmailContainer = document.querySelector('[data-alert-email-container]');
const alertAsuntoContainer = document.querySelector('[data-alert-asunto-container]');
const alertMensajeContainer = document.querySelector('[data-alert-mensaje-container]');

nombreForm.value = '';
emailForm.value = '';
asuntoForm.value = '';
mensajeForm.value = '';

const nombreValidado = false;
const emailValidado = false;
const asuntoValidado = false;
const mensajeValidado = false;

nombreForm.addEventListener('input', function(){
    let span
    if (nombreForm.value == '') {
        span = document.createElement('span');
        span.textContent = '*este campo es obligatorio';
        styleAlert(span);
        alertNombreContainer.appendChild(span);
        nombreValidado = false;
    }else{
        alertNombreContainer.removeChild(span);
        nombreValidado = true;
    }   
    return nombreValidado
});