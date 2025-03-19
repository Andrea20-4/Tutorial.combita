// Seleccionamos el párrafo y el botón
const ejemploTexto = document.getElementById('ejemplo1');
const btnChangeColor = document.getElementById('btnChangeColor');

// Agregamos un event listener al botón
btnChangeColor.addEventListener('click', () => {
  // Si el texto está en azul, lo cambiamos a rojo; si está en rojo, lo volvemos azul
  if (ejemploTexto.style.color === 'blue') {
    ejemploTexto.style.color = 'red';
  } else {
    ejemploTexto.style.color = 'blue';
  }
});
