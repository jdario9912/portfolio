const btnEnviar = document.querySelector('[data-enviar-btn');

const validarFormulario = (event) => {
    event.preventDefault();
    // const nombreForm = document.querySelector('[data-nombre]');
    // const nombre = nombreForm.value;
    
    // const emailForm = document.querySelector('[data-email');
    // const email = emailForm.value;

    // const asuntoForm = document.querySelector('[data-asunto');
    // const asunto = asuntoForm.value;

    // const mensajeForm = document.querySelector('[data-mensaje]');
    // const mensaje = mensajeForm.value;

    // if(validaTodosLosCampos(nombre, email, asunto, mensaje)){
    //     console.log(`Todo ok el formulario`);
    // }else{
    //     console.log(`Hay problemas en el formulario`);
    // }
}

btnEnviar.addEventListener('click', validarFormulario);

const nombreForm = document.querySelector('[data-nombre]');
nombreForm.addEventListener('input', function (){
    const informacion = nombreForm.value;
    if(informacion == ''){
        console.log(nombreForm.value);
        btnEnviar.setAttribute('disabled');
    }else{
        console.log(nombreForm.value);
        btnEnviar.removeAttribute('disabled');
    }
})