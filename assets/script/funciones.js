function displayNone(elemento) {
    elemento.classList.add('displayNone');
}

function styleAlert(elemento) {
    elemento.classList.add('alert-span');
    return elemento;
}

function validaTodosLosCampos(nombre, email, asunto, mensaje) {
    
    let reExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/gi;
    let resultado = reExp.test(email);

    let valida = (nombre != '' && resultado && asunto != '' && mensaje != '');
    return valida;
}