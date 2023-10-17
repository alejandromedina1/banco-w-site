import TasasCards from './../components/tasas-cards/cards';


const infoTipoNumeroTitulo = document.getElementById('info-tipo-numero-titulo');
const infoDescripcion = document.getElementById('info-descripcion');
    const tasasCardContainer = document.getElementById('tasas-card-container');

function cargarContenido() {
  // Función para cargar los detalles de la licitación desde un archivo JSON
  async function cargarDetalleLicitacion(licitacionId) {
      try {
          const response = await fetch('./info-licitaciones.json'); // Asegúrate de tener la ruta correcta al archivo JSON
          const licitaciones = await response.json();
          
          // Encuentra la licitación correspondiente al ID proporcionado
          const detalleLicitacion = licitaciones.find(licitacion => licitacion.numero === licitacionId);
          return detalleLicitacion;
      } catch (error) {
          console.error('Error al cargar detalles de licitación:', error);
          //return null;
      }
  }

  // Función para mostrar los detalles de la licitación
  async function mostrarInformacionLicitacion() {
      const urlParams = new URLSearchParams(window.location.search);
      const licitacionId = urlParams.get('id');

      if (!licitacionId) {
          console.error('ID de licitación no proporcionado en la URL.');
          // Puedes mostrar un mensaje de error en el DOM o redirigir a otra página
          return;
      }

      // Espera a que se cargue el detalle de la licitación
      const detalleLicitacion = await cargarDetalleLicitacion(licitacionId);

      if (!detalleLicitacion) {
          console.error('Licitación no encontrada.');
          // Puedes mostrar un mensaje de error en el DOM o redirigir a otra página
          return;
      }

      // Muestra la información de la licitación en el DOM
      infoTipoNumeroTitulo.textContent = `${detalleLicitacion.tipo} ${detalleLicitacion.numero} - ${detalleLicitacion.titulo}`;
      infoDescripcion.textContent = detalleLicitacion.descripcion;

      // Obtén el contenedor de tasas cards
      const tasasCardContainer = document.getElementById('tasas-card-container');
      
      // Itera a través de los objetos cards en la licitación y crea componentes TasasCards
      detalleLicitacion.cards.forEach(cardSet => {
          Object.keys(cardSet).forEach(cardKey => {
              const card = cardSet[cardKey][0];
              const cardImage = card.card_image;
              const titleCard = card.title_card;
              const textCard = card.text_card;

              // Crea un componente TasasCards con los datos de la licitación
              const tasasCardComponent = new TasasCards();
              tasasCardComponent.setAttribute('card_image', cardImage);
              tasasCardComponent.setAttribute('title_card', titleCard);
              tasasCardComponent.setAttribute('text_card', textCard);

              // Añade el componente al contenedor de tasas cards
              tasasCardContainer.appendChild(tasasCardComponent);
          });
      });
  }

  // Llama a la función para mostrar los detalles de la licitación cuando se cargue el contenido
  mostrarInformacionLicitacion();
}

document.addEventListener('DOMContentLoaded', cargarContenido);
