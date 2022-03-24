const btnOcultarNav = document.querySelector('#btn-ocultar-nav');

btnOcultarNav.addEventListener('click', function (event) {
    event.preventDefault();
    const nav = document.querySelector('#menu__nav');
    const navLista = document.querySelector('#menu__lista');
    const navItem = document.querySelectorAll('#menu__item');
    const navLink = document.querySelectorAll('#menu__link');
    const btnOcultarNav = document.querySelector('#btn-ocultar-nav');
    nav.classList.remove('nav-movile');
    navLista.classList.remove('lista-movile');
    
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove('item-movile');
        
    }
    
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('link-movile');
    }

    btnOcultarNav.classList.remove('btn-ocultar-movile');
    ocultarElemento(btnOcultarNav);
});