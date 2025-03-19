
const ejemploTexto = document.getElementById('ejemplo1');
const btnChangeColor = document.getElementById('btnChangeColor');


btnChangeColor.addEventListener('click', () => {
  // Si el texto está en azul, lo cambiamos a rojo; si está en rojo, lo volvemos azul
  if (ejemploTexto.style.color === 'blue') {
    ejemploTexto.style.color = 'red';
  } else {
    ejemploTexto.style.color = 'blue';
  }
});
