const displayValorRUT = document.getElementById('rut');
const botonesNumeros = document.querySelectorAll('.numero');

const display = new Display(displayValorRUT);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});