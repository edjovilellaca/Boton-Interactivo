const boton = document.getElementById('cambiarTexto')
const texto = document.getElementById('texto');

boton.addEventListener('click', ()=>{
    boton.setAttribute('value', 'Texto cambiado');
});