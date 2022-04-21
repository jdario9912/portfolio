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

function muestraOcultaAlerta(campo, elemento) {
    if (campo == '') {
        elemento.classList.toggle('displayNone');   
        elemento.classList.toggle('alert-span');   
    }else{
        elemento.classList.toggle('displayNone');   
        elemento.classList.toggle('alert-span');   
    }
    return elemento;
}

function mailIncorrecto(email, elemento) {
    const reExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(reExp.test(email)){
        elemento.classList.toggle('displayNone');   
        elemento.classList.toggle('alert-span');   
    }else{
        elemento.classList.toggle('displayNone');   
        elemento.classList.toggle('alert-span');   
    }
    return elemento;
}