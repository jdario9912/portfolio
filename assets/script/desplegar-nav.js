const hamburguesa = document.querySelector('.hamburguesa-container');

hamburguesa.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('aprete la hamburguesa');
    const nav = document.querySelector('#menu__nav');
    const navLista = document.querySelector('#menu__lista');
    const navItem = document.querySelectorAll('#menu__item');
    const navLink = document.querySelectorAll('#menu__link');
    navLista.classList.add('lista-vertical');
    nav.classList.add('desplegar-nav');
    
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.add('item-total');
        
    }

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.add('link-rojo');
    }
});