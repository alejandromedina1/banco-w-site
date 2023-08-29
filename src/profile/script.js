document.addEventListener("DOMContentLoaded", function() {
  const switcher = document.getElementById("page-switcher");
  const pages = document.getElementById("pages").children;
  const items = switcher.querySelectorAll('li');
  const marker = document.querySelector('#marker');

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

  function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      cambiarColor(item); // Llama a la función para cambiar el color en cada clic
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
    console.log(enlaceSeleccionado);

    const iconos = document.getElementsByClassName('icon');
    for (const icono of iconos) {
      icono.style.fill = '#FF8833';
    }

    const svgSeleccionado = liSeleccionado.querySelector('.icon');
    svgSeleccionado.style.fill = '#fff';
  }

  // Llama a la función cambiarColor al cargar la página para resaltar el primer elemento
  cambiarColor(items[0]);
});
