function ocultarElemento(elemento) {
    elemento.classList.add('ocultar-elemento');
}

function styleAlert(objeto) {
    objeto.classList.add('alert-span');
    return objeto;
}

function validaTodosLosCampos(nombre, email, asunto, mensaje) {
    
    let reExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/gi;
    let resultado = reExp.test(email);

    let valida = (nombre != '' && resultado && asunto != '' && mensaje != '');
    return valida;
}