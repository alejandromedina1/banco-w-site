//Change screen
const switcher = document.getElementById("page-switcher");
const pages = document.getElementById("pages").children;

switcher.addEventListener("click", (event) => {
  const target = event.target.dataset.target;
  if (target) {
    for (let page of pages) {
      if (page.id === target) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    }
  }
});

//Slider
var marker = document.querySelector('#marker');
var items = document.querySelectorAll('#page-switcher li');

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    indicator(e.target);
  });
});


function cambiarColor(liSeleccionado) {
  const opciones = document.getElementsByClassName('opcion');
  for (const opcion of opciones) {
    opcion.classList.remove('seleccionada');
  }

  const enlaceSeleccionado = liSeleccionado.querySelector('a');
  enlaceSeleccionado.classList.add('seleccionada');

  const iconos = document.getElementsByClassName('icon');

  for (const icono of iconos) {
    icono.style.fill = '#FF8833';
  }

  const svgSeleccionado = liSeleccionado.querySelector('.icon');
  svgSeleccionado.style.fill = '#fff';
}

window.onload = function() {
  const primerLi = document.querySelector('li');
  cambiarColor(primerLi);
};


