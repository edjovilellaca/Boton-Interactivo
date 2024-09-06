const boton = document.getElementById('cambiarTexto')
const texto = document.getElementById('texto');

boton.addEventListener('click', ()=>{
    texto.innerText('Texto cambiado equisde');
});