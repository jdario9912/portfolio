const hamburguesa = document.querySelector('.hamburguesa-container');

hamburguesa.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('aprete la hamburguesa');
})