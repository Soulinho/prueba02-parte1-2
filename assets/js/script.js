

// Alerta 



const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    const alertText = alertTrigger.getAttribute('data-texto');
    appendAlert(alertText, 'success');
  });
}

document.getElementById("liveAlertPlaceholder").addEventListener("wheel", achicarAlerta);

function achicarAlerta() {
    this.style.fontSize = "8px";
}


function appendAlert(message, type) {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
}

// Fin de la Alerta



// Popover

let contadorClick = 0;

const popoverClicks = document.querySelector('[data-mostrarpop="popover"]');
const titulo = popoverClicks.getAttribute('data-titulopop');
const contenido = popoverClicks.getAttribute('data-contenidopop');

const popover = new bootstrap.Popover(popoverClicks, {
    title: titulo,
    content: contenido,
    trigger: 'click'
});


popoverClicks.addEventListener('click', () => {
    contadorClick++;
    console.log(`Ha sido clickeado ${contadorClick} veces`);
});

// Fin del popover







// Toast


const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');


if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}


  document.querySelectorAll('[data-cerrartoast="toast"]').forEach(button => {
  button.addEventListener('click', () => {
    const toastElement = button.closest('.toast');
    const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
    toastInstance.hide();
  });
});

function noCopies() {
  document.getElementById("copyTexto").innerHTML = "Por que lo haces? Andate no te quiero ver mas maldito";
}


  // Fin del Toast



 // Offcanvas 

  
  window.onload = function() {
  const offcanvasBody = document.querySelector('.offcanvas-body');
  const textoCanvas = offcanvasBody.getAttribute('data-texto-canvas');
  document.getElementById("presionasteTecla").innerHTML = textoCanvas;
}


 function presionaLetra() {

    const colorPalabra = document.getElementById("presionasteTecla");
    const colorInput = document.getElementById("cajita");
    document.getElementById("presionasteTecla").innerHTML = "Presionaste una letra";
    colorPalabra.style.color = "#ff0000";
    colorInput.style.background = "black";
    colorInput.style.color = "white";
    
  }

 

// Fin del offcanvas



// modificacion del atributo data


  // modificacion alerta

  document.getElementById('cambiarBtn').addEventListener('click', function() {
  document.getElementById('liveAlertBtn').setAttribute('data-texto', 'Nuevo texto de la alerta, aun funciona el achicar el texto si scrolleas hacia arriba y hacia abajo');
 
  



});


// termino modificacion alerta




// modificacion popover



  document.getElementById('cambiarBtn').addEventListener('click', function() {
  const nuevoTitulo = 'Hola, soy un nuevo titulo';
  const nuevaDescripcion = 'Si me haces click, seguire contando en la consola cuantas veces me has hecho click';

  const popoverButton = document.getElementById('btnpop');
  popoverButton.setAttribute('title', nuevoTitulo);
  popoverButton.setAttribute('data-bs-content', nuevaDescripcion);

  const popover = new bootstrap.Popover(popoverButton);
});





// termino modificacion popover












// finalizacion de la modificación
