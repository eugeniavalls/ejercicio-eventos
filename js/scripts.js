// Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', event => {
  console.log(event.target.textContent);
});

// Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');

titleElement.addEventListener('mouseover', event => {
  event.target.textContent = 'Quita de encima pesado!!!';
});

titleElement.addEventListener('mouseleave', event => {
  event.target.textContent = 'Soy un título';
});

// Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

window.addEventListener('resize', event => {
  console.log(
    `El alto de la pantalla es de  ${event.target.innerHeight} y el ancho es de ${event.target.innerWidth}`
  );
});

// Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const keyboardElement = document.getElementById('keyboard');

window.addEventListener('keydown', event => {
  keyboardElement.textContent = 'Has pulsado la tecla ' + event.key;
});

// Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const fiveWords = ['quiero', 'irme', 'a', 'mi', 'casa'];

const buttonPreviusElement = document.getElementById('button-previus');

const buttonNextElement = document.getElementById('button-next');

const subtitleElement = document.getElementById('subtitle');

let counter = 0;

buttonNextElement.addEventListener('click', event => {
  if (counter === fiveWords.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  subtitleElement.textContent = fiveWords[counter];
});

buttonPreviusElement.addEventListener('click', event => {
  if (counter === 0) {
    counter = fiveWords.length - 1;
  } else {
    counter--;
  }
  subtitleElement.textContent = fiveWords[counter];
});
