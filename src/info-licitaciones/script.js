import TasasCards from '../components/tasas-cards/cards';


const infoTipoNumeroTitulo = document.getElementById('info-tipo-numero-titulo');
const infoDescripcion = document.getElementById('info-descripcion');
    const tasasCardContainer = document.getElementById('tasas-card-container');

function cargarContenido() {
  async function cargarDetalleLicitacion(licitacionId) {
      try {
          const response = await fetch('https://apimocha.com/licitaciones-banco/data/1'); 
          const licitaciones = await response.json();
          
          const detalleLicitacion = licitaciones.find(licitacion => licitacion.numero === licitacionId);
          return detalleLicitacion;
      } catch (error) {
          console.error('Error al cargar detalles de licitación:', error);
      }
  }

  async function mostrarInformacionLicitacion() {
      const urlParams = new URLSearchParams(window.location.search);
      const licitacionId = urlParams.get('id');

      if (!licitacionId) {
          console.error('ID de licitación no proporcionado en la URL.');
          return;
      }

      const detalleLicitacion = await cargarDetalleLicitacion(licitacionId);

      if (!detalleLicitacion) {
          console.error('Licitación no encontrada.');
          return;
      }

      infoTipoNumeroTitulo.textContent = `${detalleLicitacion.tipo} ${detalleLicitacion.numero} - ${detalleLicitacion.titulo}`;
      infoDescripcion.textContent = detalleLicitacion.descripcion;

      const tasasCardContainer = document.getElementById('tasas-card-container');
      
      detalleLicitacion.cards.forEach(cardSet => {
          Object.keys(cardSet).forEach(cardKey => {
              const card = cardSet[cardKey][0];
              const cardImage = card.card_image;
              const titleCard = card.title_card;
              const textCard = card.text_card;

              const tasasCardComponent = new TasasCards();
              tasasCardComponent.setAttribute('card_image', cardImage);
              tasasCardComponent.setAttribute('title_card', titleCard);
              tasasCardComponent.setAttribute('text_card', textCard);

              tasasCardContainer.appendChild(tasasCardComponent);
          });
      });
  }

  mostrarInformacionLicitacion();
}

document.addEventListener('DOMContentLoaded', cargarContenido);
