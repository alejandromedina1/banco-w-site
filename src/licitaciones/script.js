
const botonesContainer = document.getElementById('botones-container');

// Función para cargar las licitaciones desde un archivo JSON
async function cargarLicitaciones() {
  try {
    const response = await fetch('./info-licitaciones.json'); // Asegúrate de tener la ruta correcta al archivo JSON
    const licitaciones = await response.json();
    return licitaciones;
  } catch (error) {
    console.error('Error al cargar datos de licitaciones:', error);
    return [];
  }
}

// ...

// Función para generar los botones dinámicamente
async function generarBotones() {
  const licitaciones = await cargarLicitaciones();

  // Itera sobre las licitaciones y crea un botón para cada una
  licitaciones.forEach(licitacion => {
    const boton = document.createElement('button');

    const primerPalabraTipo = licitacion.tipo
      .normalize("NFD") // Descomponer caracteres a forma de caracteres base y diacríticos
      .replace(/[\u0300-\u036f]/g, "") // Reemplazar diacríticos (tildes) con caracteres base
      .split(' ')[0];
    // Obtén solo la primera palabra del tipo de licitación
    
    boton.textContent = `${primerPalabraTipo} ${licitacion.numero} - ${licitacion.titulo}`;

    // Agrega una clase basada en el tipo de licitación
    boton.classList.add(primerPalabraTipo.toLowerCase()); // Agrega una clase con el nombre del tipo en minúsculas

    // Asigna un evento de clic a cada botón
    boton.addEventListener('click', () => {
      // Redirige a la página de detalle de la licitación con el ID de la licitación como parámetro en la URL
      window.location.href = `/info-licitaciones/index.html?id=${licitacion.numero}`;
    });

    // Agrega el botón al contenedor de botones
    botonesContainer.appendChild(boton);
  });
}

// Llama a la función para generar los botones al cargar la página
generarBotones();


