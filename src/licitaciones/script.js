
const botonesContainer = document.getElementById('botones-container');


async function cargarLicitaciones() {
  try {
    const response = await fetch('https://apimocha.com/licitaciones-banco/data/1'); 
    const licitaciones = await response.json();
    return licitaciones;
  } catch (error) {
    console.error('Error al cargar datos de licitaciones:', error);
    return [];
  }
}


async function generarBotones() {
  const licitaciones = await cargarLicitaciones();

  licitaciones.forEach(licitacion => {
    const boton = document.createElement('button');

    const primerPalabraTipo = licitacion.tipo
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .split(' ')[0];
    
    boton.textContent = `${primerPalabraTipo} ${licitacion.numero} - ${licitacion.titulo}`;

    boton.classList.add(primerPalabraTipo.toLowerCase()); 

    boton.addEventListener('click', () => {
      window.location.href = `../info-licitaciones/index.html?id=${licitacion.numero}`;
    });

    botonesContainer.appendChild(boton);
  });
}

generarBotones();


